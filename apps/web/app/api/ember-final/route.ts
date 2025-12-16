import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import nodemailer from "nodemailer";

type ParticipantEntry = {
  id: string;
  name: string;
  phone: string;
  email: string;
  essay: string;
  accessToken: string;
  timestamp: string;
};

const DATA_PATH = path.join(process.cwd(), "data", "ember_participants.json");

async function ensureDataFile() {
  const dir = path.dirname(DATA_PATH);
  await fs.mkdir(dir, { recursive: true });
  try {
    await fs.access(DATA_PATH);
  } catch {
    await fs.writeFile(DATA_PATH, "[]", "utf8");
  }
}

async function readEntries(): Promise<ParticipantEntry[]> {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_PATH, "utf8");
  return JSON.parse(raw) as ParticipantEntry[];
}

async function writeEntries(entries: ParticipantEntry[]) {
  await fs.writeFile(DATA_PATH, JSON.stringify(entries, null, 2), "utf8");
}

function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function sanitizeEssay(essay: string) {
  return essay.trim();
}

async function sendSubmissionEmail(entry: ParticipantEntry) {
  const smtpUrl = process.env.SMTP_URL;
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!smtpUrl && !host) {
    console.warn("SMTP not configured; skipping submission email.");
    return;
  }

  const transport = nodemailer.createTransport(
    smtpUrl
      ? smtpUrl
      : {
          host,
          port: port ?? 587,
          secure: false,
          auth: user && pass ? { user, pass } : undefined
        }
  );

  const body = [
    `New Ember Final submission`,
    ``,
    `Name: ${entry.name}`,
    `Phone: ${entry.phone}`,
    `Email: ${entry.email}`,
    `Access Token: ${entry.accessToken}`,
    `Timestamp: ${entry.timestamp}`,
    ``,
    `Essay:`,
    entry.essay
  ].join("\n");

  await transport.sendMail({
    from: process.env.EMAIL_FROM ?? "no-reply@glowfmradio.com",
    to: "glowfmglowmediastation@gmail.com",
    subject: `Ember Final Submission - ${entry.name}`,
    text: body
  });
}

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const q = url.searchParams.get("q")?.toLowerCase().trim() ?? "";
    const entries = await readEntries();
    const filtered = q
      ? entries.filter((entry) => entry.name.toLowerCase().includes(q))
      : entries;

    const publicEntries = filtered.map(({ id, name, essay }) => ({
      id,
      name,
      essay
    }));

    return NextResponse.json(publicEntries);
  } catch (error) {
    console.error("GET /api/ember-final error", error);
    return NextResponse.json({ error: "Unable to load entries" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = (body?.name ?? "").trim();
    const phone = (body?.phone ?? "").trim();
    const email = (body?.email ?? "").trim();
    const essayRaw = (body?.essay ?? "").trim();

    if (!name || !phone || !email || !essayRaw) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const wordCount = countWords(essayRaw);
    if (wordCount > 200) {
      return NextResponse.json({ error: "Essay must be 200 words or fewer." }, { status: 400 });
    }

    const accessToken = crypto.randomBytes(4).toString("hex");
    const entry: ParticipantEntry = {
      id: crypto.randomUUID(),
      name,
      phone,
      email,
      essay: sanitizeEssay(essayRaw),
      accessToken,
      timestamp: new Date().toISOString()
    };

    const entries = await readEntries();
    entries.push(entry);
    await writeEntries(entries);

    // fire-and-forget email; don't block response
    sendSubmissionEmail(entry).catch((err) => console.warn("Email send failed", err));

    return NextResponse.json({ accessToken, id: entry.id });
  } catch (error) {
    console.error("POST /api/ember-final error", error);
    return NextResponse.json({ error: "Unable to submit entry" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const token = (body?.accessToken ?? "").trim();

    if (!token) {
      return NextResponse.json({ error: "Access token is required to edit." }, { status: 401 });
    }

    const updates: Partial<ParticipantEntry> = {};
    const allowedFields: (keyof ParticipantEntry)[] = ["name", "phone", "email", "essay"];

    for (const key of allowedFields) {
      if (body[key]) {
        (updates as any)[key] = typeof body[key] === "string" ? (body[key] as string).trim() : body[key];
      }
    }

    if (updates.essay) {
      const wordCount = countWords(updates.essay);
      if (wordCount > 200) {
        return NextResponse.json({ error: "Essay must be 200 words or fewer." }, { status: 400 });
      }
      updates.essay = sanitizeEssay(updates.essay);
    }

    const entries = await readEntries();
    const index = entries.findIndex((entry) => entry.accessToken === token);
    if (index === -1) {
      return NextResponse.json({ error: "Entry not found for this token." }, { status: 404 });
    }

    entries[index] = { ...entries[index], ...updates, timestamp: new Date().toISOString() };
    await writeEntries(entries);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("PATCH /api/ember-final error", error);
    return NextResponse.json({ error: "Unable to edit entry" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const token = (body?.accessToken ?? "").trim();

    if (!token) {
      return NextResponse.json({ error: "Access token is required to delete." }, { status: 401 });
    }

    const entries = await readEntries();
    const index = entries.findIndex((entry) => entry.accessToken === token);
    if (index === -1) {
      return NextResponse.json({ error: "Entry not found for this token." }, { status: 404 });
    }

    entries.splice(index, 1);
    await writeEntries(entries);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE /api/ember-final error", error);
    return NextResponse.json({ error: "Unable to delete entry" }, { status: 500 });
  }
}

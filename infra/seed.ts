import mongoose from "mongoose";
import 'dotenv/config';
import { UserProfile } from "../apps/api/src/models/userProfile.js";
import { Poll } from "../apps/api/src/models/poll.js";

async function main() {
  const uri = process.env.MONGO_URI || "mongodb://localhost:27017/glowfm";
  await mongoose.connect(uri);

  await UserProfile.deleteMany({});
  await Poll.deleteMany({});

  await UserProfile.create({
    authProviderId: "demo",
    roles: ["user"],
    platformPrefs: ["instagram","tiktok"],
    country: "NG"
  });

  await Poll.create({
    question: "Which show do you love most?",
    options: [
      { id: "a", text: "Inner Gold" },
      { id: "b", text: "Glow Sports Dash" },
      { id: "c", text: "Women’s World" }
    ],
    expiresAt: new Date(Date.now() + 86400_000),
    createdBy: "admin"
  });

  console.log("Seed complete");
  process.exit(0);
}

main().catch((e) => { console.error(e); process.exit(1); });

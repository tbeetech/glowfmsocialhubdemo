"use client";

import { useMemo } from "react";
import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowButton } from "@/components/ui/GlowButton";

export interface ProgramSlot {
  title: string;
  description: string;
  hosts: string;
  startTime: string; // HH:mm (24h)
  durationMinutes: number;
  days: number[]; // 0 = Sunday
  ctaHref: string;
}

interface NextProgramsProps {
  schedule: ProgramSlot[];
}

interface UpcomingProgram {
  program: ProgramSlot;
  start: Date;
}

function formatDateTime(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function getUpcoming(schedule: ProgramSlot[]): UpcomingProgram[] {
  const now = new Date();
  const occurrences: UpcomingProgram[] = [];

  schedule.forEach((program) => {
    program.days.forEach((day) => {
      const occurrence = new Date(now);
      const [hours, minutes] = program.startTime.split(":").map(Number);
      const currentDay = occurrence.getDay();
      let offset = day - currentDay;
      if (offset < 0) offset += 7;
      occurrence.setDate(occurrence.getDate() + offset);
      occurrence.setHours(hours, minutes, 0, 0);
      if (offset === 0 && occurrence <= now) {
        occurrence.setDate(occurrence.getDate() + 7);
      }
      occurrences.push({ program, start: occurrence });
    });
  });

  return occurrences
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .slice(0, 3);
}

export function NextPrograms({ schedule }: NextProgramsProps) {
  const nextThree = useMemo(() => getUpcoming(schedule), [schedule]);

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {nextThree.map(({ program, start }) => (
        <GlowCard key={`${program.title}-${start.toISOString()}`} title={program.title} description={formatDateTime(start)} className="shadow-glow-soft">
          <div className="space-y-4 text-sm text-[var(--foreground)]/80 dark:text-white/80">
            <p>{program.description}</p>
            <p className="text-xs uppercase tracking-[0.35em] text-glow-secondary">Hosted by {program.hosts}</p>
            <GlowButton asChild size="sm" variant="ghost" className="mt-4 uppercase tracking-[0.3em]">
              <Link href={program.ctaHref} target="_blank" rel="noreferrer">
                See now
              </Link>
            </GlowButton>
          </div>
        </GlowCard>
      ))}
    </div>
  );
}



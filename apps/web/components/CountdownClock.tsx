"use client";

import { useEffect, useMemo, useState } from "react";

interface CountdownClockProps {
  targetDate?: Date;
  target?: string;
  className?: string;
  labels?: {
    days?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
  };
  timezoneLabel?: string;
}

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type RemainingKey = keyof Remaining;

function calculateRemaining(targetDate: Date): Remaining {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0 || Number.isNaN(diff)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function CountdownSegment({ label, value }: { label: string; value: number }) {
  const formatted = value.toString().padStart(2, "0");

  return (
    <div className="rounded-2xl border border-white/15 bg-black/70 px-3 py-4 text-center text-white sm:px-4 sm:py-5">
      <span className="block font-mono text-2xl font-semibold tabular-nums sm:text-3xl font-['El_Messiri']" suppressHydrationWarning>{formatted}</span>
      <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/60 sm:text-xs sm:tracking-[0.35em] font-['El_Messiri'] font-bold">
        {label}
      </p>
    </div>
  );
}

export function CountdownClock({ targetDate: targetDateProp, target, className, labels, timezoneLabel }: CountdownClockProps) {
  const targetDate = useMemo(() => {
    if (targetDateProp) return targetDateProp;
    if (target) return new Date(target);
    return new Date();
  }, [targetDateProp, target]);
  
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set initial state on the client
    setRemaining(calculateRemaining(targetDate));

    const intervalId = setInterval(() => {
      setRemaining(calculateRemaining(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const segments: Array<{ unit: RemainingKey; label: string; value: number }> = [
    { unit: "days", label: labels?.days ?? "Days", value: remaining.days },
    { unit: "hours", label: labels?.hours ?? "Hours", value: remaining.hours },
    { unit: "minutes", label: labels?.minutes ?? "Minutes", value: remaining.minutes },
    { unit: "seconds", label: labels?.seconds ?? "Seconds", value: remaining.seconds }
  ];

  const isComplete = segments.every((segment) => segment.value === 0);
  const targetLabel = timezoneLabel ?? targetDate.toLocaleString(undefined, {
    timeZoneName: "short"
  });

  return (
    <div
      className={className}
      role="timer"
      aria-live={isComplete ? "assertive" : "polite"}
      aria-label={isComplete ? "Countdown complete" : `Counting down to ${targetLabel}`}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/80 p-4 sm:p-5">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(104,131,255,0.18),transparent_55%)] opacity-60"
          aria-hidden
        />
        <div className="relative grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {segments.map((segment) => (
            <CountdownSegment key={segment.unit} label={segment.label} value={segment.value} />
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-col items-start gap-2 text-[11px] uppercase tracking-[0.22em] text-white/60 sm:flex-row sm:items-center sm:justify-between sm:text-xs sm:tracking-[0.3em] font-['El_Messiri'] font-bold">
        <span>
          {isComplete
            ? "Ember Challenge kickoff is live"
            : `Counting down to ${targetDate.toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
              })}`}
        </span>
        {!isComplete && <span>{targetLabel}</span>}
      </div>
    </div>
  );
}

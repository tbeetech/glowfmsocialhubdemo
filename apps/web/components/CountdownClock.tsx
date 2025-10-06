"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface CountdownClockProps {
  target: string;
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

const BASE_MAP: Partial<Record<RemainingKey, number>> = {
  hours: 24,
  minutes: 60,
  seconds: 60
};

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

function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefers(mediaQuery.matches);
    update();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", update);
    } else {
      mediaQuery.addListener(update);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", update);
      } else {
        mediaQuery.removeListener(update);
      }
    };
  }, []);

  return prefers;
}

function getDirection(unit: RemainingKey, current: number, previous: number): -1 | 0 | 1 {
  if (current === previous) return 0;

  const base = BASE_MAP[unit];
  if (typeof base === "number") {
    if (previous === 0 && current === base - 1) {
      return -1;
    }

    if (previous === base - 1 && current === 0) {
      return 1;
    }
  }

  return current > previous ? 1 : -1;
}

function CountdownSegment({
  label,
  value,
  previous,
  unit,
  prefersReducedMotion
}: {
  label: string;
  value: number;
  previous: number;
  unit: RemainingKey;
  prefersReducedMotion: boolean;
}) {
  const formatted = value.toString().padStart(2, "0");
  const direction = getDirection(unit, value, previous);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/40 px-4 py-5 text-center text-white backdrop-blur">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={`${unit}-${formatted}`}
          initial={prefersReducedMotion ? { opacity: 0 } : { y: direction === -1 ? 24 : -24, opacity: 0 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { y: direction === -1 ? -24 : 24, opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.45, ease: "easeOut" }}
          className="block font-mono text-3xl font-semibold tabular-nums"
        >
          {formatted}
        </motion.span>
      </AnimatePresence>
      <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/60">{label}</p>
    </div>
  );
}

export function CountdownClock({ target, className, labels, timezoneLabel }: CountdownClockProps) {
  const targetDate = useMemo(() => new Date(target), [target]);
  const [remaining, setRemaining] = useState(() => calculateRemaining(targetDate));
  const previousRef = useRef(remaining);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    let timeoutId: number;

    const scheduleTick = () => {
      setRemaining(calculateRemaining(targetDate));
      const now = Date.now();
      const millisUntilNextSecond = 1000 - (now % 1000);
      timeoutId = window.setTimeout(scheduleTick, Math.max(250, millisUntilNextSecond));
    };

    scheduleTick();
    return () => window.clearTimeout(timeoutId);
  }, [targetDate]);

  useEffect(() => {
    previousRef.current = remaining;
  }, [remaining]);

  const prev = previousRef.current;
  const segments: Array<{ unit: RemainingKey; label: string; value: number; previous: number }> = [
    { unit: "days", label: labels?.days ?? "Days", value: remaining.days, previous: prev.days },
    { unit: "hours", label: labels?.hours ?? "Hours", value: remaining.hours, previous: prev.hours },
    { unit: "minutes", label: labels?.minutes ?? "Minutes", value: remaining.minutes, previous: prev.minutes },
    { unit: "seconds", label: labels?.seconds ?? "Seconds", value: remaining.seconds, previous: prev.seconds }
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
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px]">
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(104,131,255,0.22),_transparent_55%)]"
          animate={{ opacity: [0.45, 0.8, 0.45], rotate: [0, 8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative grid grid-cols-4 gap-3 rounded-[inherit] bg-black/65 p-5 backdrop-blur-xl">
          {segments.map((segment) => (
            <CountdownSegment
              key={segment.unit}
              label={segment.label}
              value={segment.value}
              previous={segment.previous}
              unit={segment.unit}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
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

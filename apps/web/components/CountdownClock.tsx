"use client";

import { useEffect, useMemo, useState } from "react";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

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

function CountdownSegment({ label, value, allowMotion }: { label: string; value: number; allowMotion: boolean }) {
  const formatted = value.toString().padStart(2, "0");

  return (
    <div className="group relative">
      {/* Mindmap Connection Lines */}
      <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-transparent via-cyan-400/50 to-orange-500/50 hidden tablet:block"></div>
      
      {/* Glassy Container with Royal Border */}
      <div className="relative rounded-2xl compact:rounded-3xl border-2 border-orange-400/30 bg-gradient-to-br from-white/5 via-cyan-500/10 to-orange-500/5 backdrop-blur-xl px-3 compact:px-4 tablet:px-6 py-4 compact:py-5 tablet:py-7 text-center shadow-2xl overflow-hidden group-hover:border-orange-400/60 transition-all duration-500">
        {/* Inner Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400/60"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-400/60"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-orange-400/60"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400/60"></div>
        
        {/* Digital Display Value with Glow */}
        <div className="relative z-10">
          <span 
            className="block font-mono text-3xl compact:text-4xl sp:text-5xl tablet:text-6xl laptop:text-7xl font-black tabular-nums font-['El_Messiri'] bg-gradient-to-br from-orange-400 via-orange-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(251,146,60,0.8)] group-hover:drop-shadow-[0_0_35px_rgba(251,146,60,1)] transition-all duration-500" 
            suppressHydrationWarning
            style={{
              textShadow: '0 0 30px rgba(251,146,60,0.6), 0 0 60px rgba(34,211,238,0.4)'
            }}
          >
            {formatted}
          </span>
          
          {/* Decimal Points (Design Accent) */}
          <div className="flex justify-center gap-1 mt-1 compact:mt-2">
            <div className={`w-1 h-1 compact:w-1.5 compact:h-1.5 rounded-full bg-cyan-400 ${allowMotion ? "animate-pulse" : ""}`}></div>
            <div
              className={`w-1 h-1 compact:w-1.5 compact:h-1.5 rounded-full bg-orange-400 ${allowMotion ? "animate-pulse" : ""}`}
              style={allowMotion ? { animationDelay: '0.5s' } : undefined}
            ></div>
          </div>
          
          {/* Label with Royal Typography */}
          <p className="mt-2 compact:mt-3 tablet:mt-4 text-xs compact:text-sm tablet:text-base uppercase tracking-[0.3em] compact:tracking-[0.35em] tablet:tracking-[0.4em] font-['El_Messiri'] font-bold bg-gradient-to-r from-cyan-300 via-white to-orange-300 bg-clip-text text-transparent">
            {label}
          </p>
        </div>
        
        {/* Animated Particle Effect */}
        {allowMotion && (
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        )}
      </div>
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
  const { allowMotion } = usePerformanceMode();

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
      {/* Royal Glassy Container with Mindmap Design */}
      <div className="relative overflow-hidden rounded-3xl compact:rounded-[2rem] tablet:rounded-[3rem] border-4 border-gradient-to-r from-cyan-400/40 via-purple-500/40 to-orange-400/40 bg-gradient-to-br from-slate-900/80 via-indigo-950/90 to-slate-900/80 backdrop-blur-2xl p-6 compact:p-8 tablet:p-12 shadow-[0_0_80px_rgba(34,211,238,0.3),0_0_120px_rgba(251,146,60,0.2)]">
        
        {/* Animated Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px),
              linear-gradient(rgba(251,146,60,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Radial Glow Effects */}
        {allowMotion && (
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.4s' }}></div>
          </div>
        )}

        {/* Central Mindmap Node */}
        {allowMotion && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-16 compact:w-20 compact:h-20 rounded-full border-3 border-cyan-400/60 bg-gradient-to-br from-cyan-500/30 to-orange-500/30 backdrop-blur-xl hidden tablet:flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.6)]">
            <div className="w-8 h-8 compact:w-10 compact:h-10 rounded-full bg-gradient-to-br from-orange-400 to-cyan-400 animate-pulse"></div>
          </div>
        )}
        
        {/* Countdown Grid with Mindmap Layout */}
        <div className="relative grid grid-cols-2 gap-4 sp:gap-5 compact:gap-6 tablet:grid-cols-4 tablet:gap-8 mt-0 tablet:mt-8">
          {segments.map((segment) => (
            <CountdownSegment key={segment.unit} label={segment.label} value={segment.value} allowMotion={allowMotion} />
          ))}
        </div>

        {/* Digital Circuit Lines Between Segments */}
        {allowMotion && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden tablet:block" style={{ zIndex: 5 }} viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgb(34, 211, 238)', stopOpacity: 0.6 }} />
                <stop offset="50%" style={{ stopColor: 'rgb(168, 85, 247)', stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: 'rgb(251, 146, 60)', stopOpacity: 0.6 }} />
              </linearGradient>
            </defs>
            <path d="M 25 50 L 37.5 50" stroke="url(#lineGradient)" strokeWidth="0.2" fill="none" opacity="0.5" />
            <path d="M 50 50 L 62.5 50" stroke="url(#lineGradient)" strokeWidth="0.2" fill="none" opacity="0.5" />
            <path d="M 75 50 L 87.5 50" stroke="url(#lineGradient)" strokeWidth="0.2" fill="none" opacity="0.5" />
          </svg>
        )}
      </div>

      {/* Enhanced Status Text */}
      <div className="mt-4 compact:mt-5 tablet:mt-6 flex flex-col items-center gap-2 compact:gap-3 text-xs compact:text-sm tablet:text-base uppercase tracking-[0.3em] compact:tracking-[0.35em] tablet:tracking-[0.4em] font-['El_Messiri'] font-bold">
        <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-orange-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          {isComplete
            ? "🔥 Ember Challenge is Live!"
            : `⏰ Final Countdown to ${targetDate.toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}`}
        </span>
        {!isComplete && (
          <span className="text-cyan-400/80 text-[10px] compact:text-xs tracking-wider">
            {targetLabel}
          </span>
        )}
      </div>
    </div>
  );
}

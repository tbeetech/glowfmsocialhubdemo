"use client";

import { useEffect } from "react";
import { cn } from "@/lib/cn";
import { useThemeStore } from "@/lib/theme-store";

interface IconProps {
  className?: string;
}

function SunIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 0 1 11.21 3 6.5 6.5 0 1 0 21 12.79Z" />
      <path d="M17.5 6.5h.01" />
      <path d="M15 4h.01" />
      <path d="M19 9h.01" />
    </svg>
  );
}

export function DarkModeToggle({ className }: { className?: string }) {
  const mode = useThemeStore((state) => state.mode);
  const hydrated = useThemeStore((state) => state.hydrated);
  const toggle = useThemeStore((state) => state.toggle);
  const setHydrated = useThemeStore((state) => state.setHydrated);

  useEffect(() => {
    if (!hydrated) {
      useThemeStore.persist.rehydrate().then(() => setHydrated(true));
    }
  }, [hydrated, setHydrated]);

  useEffect(() => {
    if (!hydrated) return;
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
  }, [mode, hydrated]);

  const isDark = hydrated ? mode === "dark" : false;

  return (
    <button
      type="button"
      aria-pressed={isDark}
      aria-label="Toggle dark mode"
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-all hover:border-white/30 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow-accent",
        className
      )}
      onClick={() => hydrated && toggle()}
      disabled={!hydrated}
    >
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}

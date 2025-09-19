"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const iconStyles = "h-4 w-4";

const SunIcon = () => (
  <svg className={iconStyles} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m3.64 6.36-1.42 1.42m0-14.78 1.42 1.42m12.72 0 1.42-1.42m0 14.78-1.42-1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg className={iconStyles} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
);

export function GlowThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("glow-theme") as "dark" | "light" | null) : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const startingTheme = stored ?? (prefersDark ? "dark" : "light");
    setTheme(startingTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    root.style.colorScheme = theme;
    localStorage.setItem("glow-theme", theme);
  }, [theme, mounted]);

  return (
    <button
      type="button"
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      className={clsx(
        "relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 text-white transition",
        theme === "light" ? "bg-white/80 text-glow-navy" : "bg-white/10 hover:bg-white/20"
      )}
      aria-label="Toggle dark mode"
    >
      <span className="sr-only">Toggle theme</span>
      <span className={clsx("absolute transition-transform duration-300", theme === "dark" ? "scale-100 rotate-0" : "-translate-y-6 scale-0")}> 
        <MoonIcon />
      </span>
      <span className={clsx("absolute transition-transform duration-300", theme === "light" ? "scale-100 rotate-0" : "translate-y-6 scale-0")}> 
        <SunIcon />
      </span>
    </button>
  );
}


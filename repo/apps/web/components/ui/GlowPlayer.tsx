"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const mockTrack = {
  title: "Glow Morning Drive",
  host: "DJ Radiant",
  cover: "/images/mock-track.svg"
};

export function GlowPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);

  return (
    <motion.aside
      className="fixed inset-x-0 bottom-4 z-40 mx-auto max-w-3xl rounded-card border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl shadow-soft"
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 160, damping: 20 }}
      role="region"
      aria-label="Glow audio player"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white/10">
          <span className="text-sm text-white/70">Live</span>
        </div>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.25em] text-glow-sky/70">Now streaming</p>
          <p className="text-sm font-semibold text-white">{mockTrack.title}</p>
          <p className="text-xs text-white/60">Hosted by {mockTrack.host}</p>
        </div>
        <button
          type="button"
          onClick={() => setIsPlaying((prev) => !prev)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-glow-primary text-neutral-950 transition hover:shadow-glow"
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
          {isPlaying ? (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <div className="hidden items-center gap-2 md:flex" aria-label="Volume control">
          <svg className="h-4 w-4 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M4 9v6h3l4 4V5L7 9H4z" />
            <path d="M16 9a4 4 0 0 1 0 6M18.5 7a7 7 0 0 1 0 10" />
          </svg>
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
            className="h-1 w-32 cursor-pointer appearance-none rounded-full bg-white/10"
          />
          <span className="text-xs text-white/50 tabular-nums">{volume}%</span>
        </div>
      </div>
    </motion.aside>
  );
}


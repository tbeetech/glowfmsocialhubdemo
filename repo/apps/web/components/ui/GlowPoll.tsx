"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const pollOptions = [
  { id: "option-1", label: "Which Glow program gets you hype in the mornings?", value: "Morning Drive", votes: 48 },
  { id: "option-2", label: "Afternoon Heatwave", value: "Afternoon Heat", votes: 32 },
  { id: "option-3", label: "Night Vibes", value: "Night Vibes", votes: 20 }
];

export function GlowPoll() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = pollOptions.reduce((acc, option) => acc + option.votes, 0);

  return (
    <section className="rounded-card border border-white/10 bg-white/5 p-4 shadow-soft">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-glow-sky/70">Engagement Poll</p>
          <h3 className="text-lg font-semibold text-white">Vote &amp; win shoutouts all week</h3>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Live</span>
      </div>
      <form className="space-y-3" onSubmit={(event) => event.preventDefault()}>
        {pollOptions.map((option) => {
          const percentage = Math.round((option.votes / totalVotes) * 100);

          return (
            <label
              key={option.id}
              className="group relative block cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-glow-primary/70"
            >
              <input
                type="radio"
                name="glow-poll"
                value={option.value}
                checked={selected === option.id}
                onChange={() => setSelected(option.id)}
                className="sr-only"
              />
              <div className="flex items-center justify-between text-sm text-white">
                <span className="font-medium">{option.label}</span>
                <span className="text-xs text-white/50">{percentage}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-glow-primary"
                  initial={{ width: 0 }}
                  animate={{ width: hasVoted ? `${percentage}%` : selected === option.id ? "80%" : `${percentage}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                />
              </div>
            </label>
          );
        })}
        <button
          type="button"
          onClick={() => selected && setHasVoted(true)}
          className="w-full rounded-full bg-glow-primary px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:shadow-glow disabled:opacity-40"
          disabled={!selected || hasVoted}
        >
          {hasVoted ? "Thanks for voting!" : "Submit vote"}
        </button>
      </form>
      <p className="mt-3 text-xs text-white/50">{totalVotes.toLocaleString()} listeners have voted</p>
    </section>
  );
}


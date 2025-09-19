"use client";

import { leaderboard } from "../../lib/mockData";
import { GlowSectionHeading } from "../ui/GlowSectionHeading";
import { GlowButton } from "../ui/GlowButton";

export function CommunityLeaderboard() {
  return (
    <section id="community" className="space-y-6">
      <GlowSectionHeading
        superTitle="Community"
        title="Glow Engagement Leaderboard"
        description="Celebrating listeners who bring the most energy across comments, votes, and takeovers."
      />
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,300px)]">
        <ul className="space-y-4">
          {leaderboard.map((member, index) => (
            <li
              key={member.id}
              className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-glow-primary/30 text-base font-semibold text-white">
                  #{index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{member.name}</p>
                  <p className="text-xs text-white/60">{member.badge}</p>
                </div>
              </div>
              <div className="text-right text-sm text-white/70">
                <p className="font-semibold text-white">{member.points}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">Glow points</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-glow-primary/15 via-transparent to-transparent p-6 text-white shadow-soft">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Earn badges &amp; Glow points</h3>
            <p className="text-sm text-white/60">
              Comment, vote, and share to boost your Glow status. Unlock meet-and-greets, merch drops, and sponsor rewards.
            </p>
          </div>
          <GlowButton size="lg" className="mt-6">
            View Challenges
          </GlowButton>
        </div>
      </div>
    </section>
  );
}


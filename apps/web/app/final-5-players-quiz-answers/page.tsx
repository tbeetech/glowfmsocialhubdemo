"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";

const SUBMISSION_TOKEN = "A3F1C5D2";
const UNIFIED_PROMPT =
  'Write a 200 word script about benefits and fall backs of radio vs tv programmes and highlight the most engaging programme going on at glow99.1Fm and share share the answer raw + the link to the answer on this website to your facebook page and tag glow fm, highest engaged social media post of this andwer as instructed wins';

const SUBMISSION_EMAIL = "emberchallenge@glowfm.ng";

const buildEssayLink = (label: string) => {
  const params = new URLSearchParams({
    subject: `${label} Essay Submission`,
    body: `Hi GlowFM Team,\n\nHere is my essay for ${label}. Kindly find the full write-up below:\n`
  });

  return `mailto:${SUBMISSION_EMAIL}?${params.toString()}`;
};

type PlayerProfile = {
  id: string;
  label: string;
  name: string;
  tagline: string;
  age: string;
  gender: string;
  occupation: string;
  hometown: string;
  quizAnswer: string;
  accent: string;
  accentShadow: string;
  essayLink: string;
};

const playerProfiles: PlayerProfile[] = [
  {
    id: "player-1",
    label: "Player 1",
    name: 'Adaeze "Pulse" Okoli',
    tagline: "Afro-futurist storyteller translating the rush of Onitsha markets into glowing radio memories.",
    age: "24",
    gender: "Female",
    occupation: "Creative Technologist",
    hometown: "Enugu",
    quizAnswer: 'Name "Adaeze \\"Pulse\\" Okoli" have not submitted answer',
    accent: "from-pink-500 via-orange-400 to-amber-300",
    accentShadow: "shadow-[0_25px_80px_rgba(249,115,22,0.45)]",
    essayLink: buildEssayLink("Player 1")
  },
  {
    id: "player-2",
    label: "Player 2",
    name: 'Moses "Script" Ajayi',
    tagline: "Campus radio host charting unsung artisans and mapping their fixes live on air.",
    age: "27",
    gender: "Male",
    occupation: "Campus Radio Host",
    hometown: "Ilorin",
    quizAnswer: 'Name "Moses \\"Script\\" Ajayi" have not submitted answer',
    accent: "from-blue-500 via-indigo-500 to-purple-500",
    accentShadow: "shadow-[0_25px_80px_rgba(99,102,241,0.45)]",
    essayLink: buildEssayLink("Player 2")
  },
  {
    id: "player-3",
    label: "Player 3",
    name: 'Ifunanya "Wave" Peters',
    tagline: "Sound archivist rescuing lullabies and pairing them with modern pads for healing radio moments.",
    age: "22",
    gender: "Female",
    occupation: "Sound Archivist",
    hometown: "Port Harcourt",
    quizAnswer: 'Name "Ifunanya \\"Wave\\" Peters" have not submitted answer',
    accent: "from-teal-400 via-emerald-400 to-lime-400",
    accentShadow: "shadow-[0_25px_80px_rgba(16,185,129,0.45)]",
    essayLink: buildEssayLink("Player 3")
  },
  {
    id: "player-4",
    label: "Player 4",
    name: 'Sunkanmi "Tempo" Adeleye',
    tagline: "Community DJ who programs block parties that double as voter-literacy crash courses.",
    age: "29",
    gender: "Male",
    occupation: "Community DJ",
    hometown: "Abeokuta",
    quizAnswer: 'Name "Sunkanmi \\"Tempo\\" Adeleye" have not submitted answer',
    accent: "from-rose-500 via-red-500 to-orange-500",
    accentShadow: "shadow-[0_25px_80px_rgba(244,63,94,0.45)]",
    essayLink: buildEssayLink("Player 4")
  },
  {
    id: "player-5",
    label: "Player 5",
    name: 'Chidinma "Nova" Odo',
    tagline: "UX researcher turning handwritten letters from Owerri teens into evergreen digital murals.",
    age: "25",
    gender: "Female",
    occupation: "UX Researcher",
    hometown: "Owerri",
    quizAnswer: 'Name "Chidinma \\"Nova\\" Odo" have not submitted answer',
    accent: "from-fuchsia-500 via-purple-500 to-indigo-500",
    accentShadow: "shadow-[0_25px_80px_rgba(192,38,211,0.45)]",
    essayLink: buildEssayLink("Player 5")
  }
];

interface TokenProtectedSubmissionProps {
  essayLink: string;
  buttonLabel: string;
  size?: "sm" | "md" | "lg" | "xl";
}

function TokenProtectedSubmission({ essayLink, buttonLabel, size = "md" }: TokenProtectedSubmissionProps) {
  const [tokenInput, setTokenInput] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleSubmit = () => {
    if (tokenInput.trim().toUpperCase() === SUBMISSION_TOKEN) {
      setStatus("success");
      if (typeof window !== "undefined") {
        window.open(essayLink, "_blank", "noopener,noreferrer");
      }
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <label className="text-[0.65rem] uppercase tracking-[0.35em] text-gray-500">
        Enter 24A Token
        <input
          type="password"
          value={tokenInput}
          onChange={(event) => {
            setTokenInput(event.target.value);
            if (status !== "idle") {
              setStatus("idle");
            }
          }}
          placeholder="XXXXXXXX"
          className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.4em] text-gray-900 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
      </label>
      <GlowButton size={size} type="button" onClick={handleSubmit}>
        {buttonLabel}
      </GlowButton>
      {status === "error" && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">Invalid or expired token.</p>
      )}
      {status === "success" && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
          Token accepted. Opening submission…
        </p>
      )}
    </div>
  );
}

export default function FinalFivePlayersPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePlayer = playerProfiles[activeIndex];

  const goToPrevious = () =>
    setActiveIndex((index) => (index === 0 ? playerProfiles.length - 1 : index - 1));
  const goToNext = () => setActiveIndex((index) => (index + 1) % playerProfiles.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-amber-900 text-white overflow-x-hidden">
      <AnimatedSection>
        <section className="container mx-auto px-4 py-16 tablet:py-24 text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-amber-200/80 mb-4">
            Glow Ember Challenge
          </p>
          <h1 className="text-3xl compact:text-4xl tablet:text-6xl font-display font-black mb-4">
            Final 5 Players Quiz Answers
          </h1>
          <p className="max-w-3xl mx-auto text-base compact:text-lg text-amber-50/90 leading-relaxed">
            This hall of fame keeps the five final-stage players visible forever. Tap through the
            sliding card stack to preview their biographies, read the quiz responses they turned in,
            and open the always-on essay links that let them finish their storytelling at any time.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.35em] text-amber-200/90">
            One Ember Quiz &middot; A single winning answer secures the Ember crown.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.35em] text-amber-100/80">
            24A authentication token is required before any submission is sent.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <GlowButton asChild variant="secondary">
              <Link href="/#ember-challenge">Back to Ember Challenge</Link>
            </GlowButton>
            <GlowButton asChild variant="accent">
              <a href="#player-grid">Jump to Permanent Profiles</a>
            </GlowButton>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="container mx-auto px-4 pb-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 tablet:p-10 backdrop-blur-xl">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.25),transparent)]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.15),transparent,rgba(79,70,229,0.2))]"></div>
            </div>
            <div className="relative">
              <div className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between mb-6 gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.5em] text-amber-200/70">Slide Show</p>
                  <h2 className="text-3xl font-display font-semibold">
                    {activePlayer.label} &mdash; {activePlayer.name}
                  </h2>
                  <p className="text-sm text-amber-50/70">{activePlayer.tagline}</p>
                  <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80 mt-2">
                    One Quiz &middot; Best answer wins
                  </p>
                </div>
                <div className="text-sm uppercase tracking-[0.4em] text-amber-100/70">
                  {String(activeIndex + 1).padStart(2, "0")} / {playerProfiles.length.toString().padStart(2, "0")}
                </div>
              </div>

              <div className="mb-6 rounded-2xl border border-white/15 bg-white/5 p-4 tablet:p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80">Ember Challenge Stage 5 Quiz</p>
                <p className="mt-2 text-base text-amber-50/90 leading-relaxed">
                  {UNIFIED_PROMPT}
                </p>
              </div>

              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {playerProfiles.map((player) => (
                      <article key={player.id} className="min-w-full px-1 tablet:px-2">
                        <div className="relative rounded-[32px] bg-white text-gray-900 p-6 tablet:p-10 shadow-2xl">
                          <div
                            className={`absolute -top-20 -right-10 h-48 w-48 rounded-full opacity-30 blur-2xl bg-gradient-to-br ${player.accent}`}
                          ></div>
                          <div className={`absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-30 blur-3xl bg-gradient-to-br ${player.accent}`}></div>

                          <div className="relative">
                            <div
                              className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${player.accent} px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white`}
                            >
                              {player.label} Final Stage
                            </div>
                            <h3 className="mt-4 text-3xl tablet:text-4xl font-display font-bold">
                              {player.name}
                            </h3>
                            <p className="text-base text-gray-600">{player.tagline}</p>

                            <div className="mt-6 grid grid-cols-1 sp:grid-cols-3 gap-4 text-sm font-semibold">
                              <div>
                                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gray-400">
                                  Age
                                </p>
                                <p className="text-2xl text-gray-900">{player.age}</p>
                              </div>
                              <div>
                                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gray-400">
                                  Gender
                                </p>
                                <p className="text-2xl text-gray-900">{player.gender}</p>
                              </div>
                              <div>
                                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gray-400">
                                  Occupation
                                </p>
                                <p className="text-lg text-gray-900">{player.occupation}</p>
                              </div>
                            </div>

                            <div className="mt-6 grid grid-cols-1 sp:grid-cols-2 gap-4">
                              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Home Base</p>
                                <p className="text-lg font-semibold">{player.hometown}</p>
                              </div>
                            </div>

                            <div className="mt-6">
                              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                                Challenge Answer
                              </p>
                              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                                {player.quizAnswer}
                              </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4 items-start">
                              <GlowButton asChild>
                                <Link href={`/final-5-players-quiz-answers#${player.id}`}>
                                  View Permanent Profile
                                </Link>
                              </GlowButton>
                              <TokenProtectedSubmission
                                essayLink={player.essayLink}
                                buttonLabel="Submit Quiz Answer"
                              />
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 transition-colors"
                  aria-label="View previous player"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 transition-colors"
                  aria-label="View next player"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {playerProfiles.map((player, index) => (
                  <button
                    key={player.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] transition-all ${
                      index === activeIndex
                        ? "border-white bg-white text-gray-900"
                        : "border-white/30 text-white/70 hover:border-white/60"
                    }`}
                  >
                    {player.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="player-grid" className="container mx-auto px-4 pb-20">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80">Permanent Records</p>
            <h2 className="text-3xl compact:text-4xl font-display font-bold">
              Player Profiles &amp; Essay Links
            </h2>
            <p className="mt-3 text-amber-50/80 max-w-2xl mx-auto">
              Share or bookmark any profile link below. Each anchor keeps the player&apos;s biography,
              quiz answer, and essay entry point visible even when the challenge season rotates.
            </p>
          </div>

          <div className="mb-8 rounded-2xl border border-white/15 bg-white/5 p-4 tablet:p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80">Ember Challenge Stage 5 Quiz</p>
            <p className="mt-2 text-base text-amber-50/90 leading-relaxed">
              {UNIFIED_PROMPT}
            </p>
          </div>

          <div className="grid gap-6 tablet:grid-cols-2">
            {playerProfiles.map((player) => (
              <article
                key={player.id}
                id={player.id}
                className="relative overflow-hidden rounded-[32px] bg-white text-gray-900 p-6 tablet:p-8 shadow-2xl"
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-30 ${player.accentShadow} rounded-[32px] blur-3xl`}
                ></div>
                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{player.label}</p>
                      <h3 className="text-2xl font-display font-semibold">{player.name}</h3>
                    </div>
                    <span
                      className={`inline-flex rounded-full border border-gray-200 bg-gradient-to-r ${player.accent} px-4 py-1 text-xs font-bold uppercase tracking-[0.35em] text-white`}
                    >
                      Quiz
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{player.tagline}</p>

                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gray-400">Age</p>
                      <p className="text-lg font-semibold">{player.age}</p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gray-400">Gender</p>
                      <p className="text-lg font-semibold">{player.gender}</p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gray-400">Occupation</p>
                      <p className="text-lg font-semibold">{player.occupation}</p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gray-400">Home Base</p>
                      <p className="text-lg font-semibold">{player.hometown}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Challenge Answer</p>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{player.quizAnswer}</p>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Ember Challenge Stage 5 Quiz</p>
                    <p className="mt-2 text-base font-semibold text-gray-900">{UNIFIED_PROMPT}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 items-start">
                    <TokenProtectedSubmission
                      essayLink={player.essayLink}
                      buttonLabel="Submit / Update Answer"
                      size="sm"
                    />
                    <GlowButton
                      asChild
                      size="sm"
                      variant="ghost"
                      className="!text-gray-900 bg-gray-900/5 hover:bg-gray-900/10 border-gray-900/30"
                    >
                      <Link href={`/final-5-players-quiz-answers#${player.id}`}>Copy Profile Link</Link>
                    </GlowButton>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-200/80">Quick Links</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {playerProfiles.map((player) => (
                <Link
                  key={`${player.id}-quick-link`}
                  href={`/final-5-players-quiz-answers#${player.id}`}
                  className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 hover:border-white hover:text-white transition-colors"
                >
                  {player.label} Profile
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { GlowButton } from "@/components/ui/GlowButton";
import { AnimatedSection } from "@/components/AnimatedSection";

const EmberAuroraCanvas = dynamic(
  () => import("@/components/EmberAuroraCanvas").then((mod) => mod.EmberAuroraCanvas),
  { ssr: false }
);

type PublicEntry = { id: string; name: string; essay: string };

const MAX_WORDS = 200;

function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export default function EmberFinalPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [essay, setEssay] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tokenModal, setTokenModal] = useState<{ token: string; id: string } | null>(null);

  const [entries, setEntries] = useState<PublicEntry[]>([]);
  const [feedError, setFeedError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [feedLoading, setFeedLoading] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const essayWords = useMemo(() => countWords(essay), [essay]);

  const canGoNext =
    (step === 1 && name.trim().length > 0) ||
    (step === 2 && phone.trim().length > 0 && email.trim().length > 0) ||
    (step === 3 && essay.trim().length > 0 && essayWords <= MAX_WORDS);

  const fetchEntries = (query: string) => {
    const controller = new AbortController();
    setFeedLoading(true);
    const qParam = query.trim() ? `?q=${encodeURIComponent(query.trim())}` : "";
    fetch(`/api/ember-final${qParam}`, { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load entries");
        return res.json();
      })
      .then((data: PublicEntry[]) => {
        setEntries(data);
        setFeedError(null);
        setExpanded({});
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setFeedError("Unable to load public entries.");
      })
      .finally(() => setFeedLoading(false));
    return controller;
  };

  useEffect(() => {
    const controller = fetchEntries(search);
    const timeout = setTimeout(() => controller.abort(), 15000);
    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [search]);

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/ember-final", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, essay })
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data?.error ?? "Unable to submit entry.");
        return;
      }
      setTokenModal({ token: data.accessToken, id: data.id });
      setStep(1);
      setName("");
      setPhone("");
      setEmail("");
      setEssay("");
      setSearch(""); // reload feed
      fetchEntries("");
    } catch (err) {
      setError("Unable to submit entry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleEdit = async () => {
    const token = window.prompt("Enter your access token to edit this entry");
    if (!token) return;
    const newEssay = window.prompt("Update your essay (200 words max)");
    if (!newEssay) return;
    if (countWords(newEssay) > MAX_WORDS) {
      alert("Essay must be 200 words or fewer.");
      return;
    }
    const res = await fetch("/api/ember-final", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessToken: token.trim(), essay: newEssay.trim() })
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data?.error ?? "Unable to edit entry.");
      return;
    }
    fetchEntries(search);
  };

  const handleDelete = async () => {
    const token = window.prompt("Enter your access token to delete this entry");
    if (!token) return;
    if (!window.confirm("Are you sure you want to delete this entry?")) return;
    const res = await fetch("/api/ember-final", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessToken: token.trim() })
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      alert(data?.error ?? "Unable to delete entry.");
      return;
    }
    fetchEntries(search);
  };

  const closeTokenModal = () => {
    setTokenModal(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-amber-900 text-white">
      <AnimatedSection>
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-70">
            <EmberAuroraCanvas />
          </div>
          <div className="container mx-auto px-4 pt-16 pb-10 text-center relative z-10">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80 mb-3">
              Ember Challenges Final Stage
            </p>
            <h1 className="text-3xl compact:text-4xl tablet:text-5xl font-display font-black mb-4">
              Radio vs. TV: The Final Standoff
            </h1>
            <p className="max-w-3xl mx-auto text-base text-amber-50/90 leading-relaxed">
              Step into the last leg of the Ember Challenge. Register, submit your 200-word answer, and keep your access
              token safe so you can edit later. Scroll to see the public feed of submitted answers.
            </p>
          </div>
        </header>
      </AnimatedSection>

      <AnimatedSection>
        <section className="container mx-auto px-4 pb-12">
          <div className="grid gap-6 laptop:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 tablet:p-8 backdrop-blur">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">Friendly Registration</p>
                  <h2 className="text-2xl font-display font-semibold">Three quick steps</h2>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <span
                      key={s}
                      className={`h-2 w-8 rounded-full ${
                        step >= s ? "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]" : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-3">
                  <p className="text-sm text-amber-50/80">Step 1: Tell us your name.</p>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                  />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <p className="text-sm text-amber-50/80">Step 2: Contact details (kept private).</p>
                  <div className="grid grid-cols-1 gap-3 tablet:grid-cols-2">
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone number"
                      className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                    />
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-amber-50/80">Step 3: Your 200-word essay.</p>
                    <span
                      className={`text-xs font-semibold ${
                        essayWords > MAX_WORDS ? "text-red-400" : "text-amber-200"
                      }`}
                    >
                      {essayWords}/{MAX_WORDS} words
                    </span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">
                    Ember Challenge Stage 5 Quiz
                  </p>
                  <p className="text-sm text-amber-50/90 leading-relaxed">
                    Write a 200 word script about benefits and fall backs of radio vs tv programmes and highlight the
                    most engaging programme going on at glow99.1Fm and share the answer raw + the link to the answer on
                    this website to your facebook page and tag glow fm, highest engaged social media post of this answer
                    as instructed wins.
                  </p>
                  <textarea
                    value={essay}
                    onChange={(e) => setEssay(e.target.value)}
                    rows={8}
                    placeholder="Drop your 200-word response here..."
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                  />
                </div>
              )}

              {error && <p className="mt-4 text-sm font-semibold text-red-300">{error}</p>}

              <div className="mt-6 flex flex-wrap gap-3">
                {step > 1 && (
                  <GlowButton variant="ghost" onClick={() => setStep((s) => Math.max(1, s - 1))}>
                    Back
                  </GlowButton>
                )}
                {step < 3 && (
                  <GlowButton
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canGoNext}
                    className={!canGoNext ? "opacity-60 cursor-not-allowed" : ""}
                  >
                    Next
                  </GlowButton>
                )}
                {step === 3 && (
                  <GlowButton onClick={handleSubmit} disabled={!canGoNext || submitting}>
                    {submitting ? "Submitting..." : "Submit Entry"}
                  </GlowButton>
                )}
              </div>
              <p className="mt-4 text-xs text-amber-100/70">
                On success you will get an 8-character access token. Copy it; you need it to edit your entry later.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 tablet:p-8 backdrop-blur">
              <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Public Feed</p>
                  <h2 className="text-2xl font-display font-semibold">Challenge Answers</h2>
                </div>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name"
                  className="w-full tablet:w-60 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/60 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
                />
              </div>

              {feedError && <p className="text-sm text-red-300 mb-3">{feedError}</p>}
              {feedLoading && <p className="text-sm text-amber-100/80">Loading entries...</p>}

              <div className="grid gap-4 tablet:grid-cols-2">
                {entries.map((entry) => {
                  const isExpanded = expanded[entry.id];
                  const words = entry.essay.trim().split(/\s+/);
                  const truncated = words.slice(0, 10).join(" ");
                  const displayEssay = isExpanded || words.length <= 10 ? entry.essay : `${truncated}...`;
                  return (
                    <article
                      key={entry.id}
                      className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-display font-semibold text-white">{entry.name}</h3>
                        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-amber-200/70">Public</span>
                      </div>
                      <p className="text-sm text-amber-50/90 leading-relaxed whitespace-pre-wrap">{displayEssay}</p>
                      {words.length > 10 && (
                        <button
                          type="button"
                          className="mt-2 text-xs uppercase tracking-[0.2em] text-amber-200 hover:text-amber-100"
                          onClick={() => toggleExpand(entry.id)}
                        >
                          {isExpanded ? "Collapse" : "Read more"}
                        </button>
                      )}
                      <div className="mt-3 flex gap-2">
                        <GlowButton
                          size="sm"
                          variant="ghost"
                          className="text-white border-white/30"
                          onClick={() => handleEdit()}
                        >
                          Edit
                        </GlowButton>
                        <GlowButton
                          size="sm"
                          variant="ghost"
                          className="text-white border-red-300/60 hover:bg-red-500/20"
                          onClick={() => handleDelete()}
                        >
                          Delete
                        </GlowButton>
                      </div>
                    </article>
                  );
                })}
                {!entries.length && !feedLoading && (
                  <p className="text-sm text-amber-100/80">No entries yet. Be the first to submit.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {tokenModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4" onClick={closeTokenModal}>
          <div
            className="w-full max-w-md rounded-3xl bg-white text-gray-900 p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close token modal"
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
              onClick={closeTokenModal}
            >
              ×
            </button>
            <h3 className="text-2xl font-display font-bold mb-2">Access Token Generated</h3>
            <p className="text-sm text-gray-700 mb-4">
              Copy this token. You will need it to edit your submission later. Keep it private.
            </p>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-lg tracking-widest">
              {tokenModal.token}
            </div>
            <p className="mt-2 text-xs text-gray-500">Entry ID: {tokenModal.id}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <GlowButton variant="accent" onClick={closeTokenModal}>
                Close
              </GlowButton>
              <GlowButton
                variant="accent"
                onClick={() => {
                  navigator.clipboard?.writeText(tokenModal.token).catch(() => {});
                }}
                className="bg-gray-900 hover:bg-gray-800 text-white border border-gray-700 px-4"
              >
                Copy Token
              </GlowButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

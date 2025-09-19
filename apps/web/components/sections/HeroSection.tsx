"use client";

import { motion } from "framer-motion";
import { GlowButton } from "../ui/GlowButton";
import { NewsletterModal } from "../ui/NewsletterModal";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-glow-navy/80 via-black/70 to-black/90 p-8 text-white shadow-soft">
      <motion.div
        className="absolute inset-x-0 -top-16 h-48 blur-3xl"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        style={{ background: "radial-gradient(circle, rgba(255,107,0,0.35) 0%, transparent 60%)" }}
      />
      <div className="relative z-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <motion.p
            className="text-xs uppercase tracking-[0.4em] text-glow-sky/80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Glow 99.1 FM
          </motion.p>
          <motion.h1
            className="text-4xl font-semibold md:text-5xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Your Station, Your Voice.
          </motion.h1>
          <motion.p
            className="max-w-xl text-base text-white/70 md:text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Stream the brightest sounds, catch up on shows, vote in live polls, and celebrate the community shaping the Glow airwaves.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <GlowButton size="lg">Listen Live</GlowButton>
            <GlowButton variant="outline" size="lg">
              Join Community
            </GlowButton>
            <NewsletterModal />
          </motion.div>
          <motion.div
            className="flex items-center gap-6 text-xs text-white/50"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div>
              <p className="font-semibold text-white">250K+</p>
              <p>Weekly listeners</p>
            </div>
            <div>
              <p className="font-semibold text-white">500+</p>
              <p>Community stories</p>
            </div>
            <div>
              <p className="font-semibold text-white">40+</p>
              <p>Brand partners</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="relative rounded-3xl border border-white/10 bg-white/5 p-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120, damping: 22 }}
        >
          <div className="absolute -top-10 right-6 rounded-full bg-glow-primary px-4 py-2 text-xs font-semibold text-neutral-950 shadow-glow">
            Trending Now
          </div>
          <div className="space-y-5">
            {["Glow Morning Drive", "City Pulse", "Glow Drive"].map((program) => (
              <div key={program} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Upcoming</p>
                <p className="text-lg font-semibold text-white">{program}</p>
                <p className="text-sm text-white/60">Tap into exclusive behind the scenes with live hosts and special guests.</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


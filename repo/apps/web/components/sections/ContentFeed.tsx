"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socialFeed } from "../../lib/mockData";
import { GlowSectionHeading } from "../ui/GlowSectionHeading";

const platformColors: Record<string, string> = {
  Twitter: "text-sky-400",
  Instagram: "text-pink-400",
  TikTok: "text-emerald-300"
};

export function ContentFeed() {
  return (
    <section className="space-y-6">
      <GlowSectionHeading
        superTitle="Glow Social"
        title="Real-time Social Highlights"
        description="Stay in sync with listeners across Twitter, Instagram, and TikTok."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {socialFeed.map((item, index) => (
          <motion.article
            key={item.id}
            className="flex flex-col rounded-card border border-white/10 bg-white/5 p-5 text-white shadow-soft"
            initial={{ opacity: 0, translateY: 12 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
          >
            <div className="flex items-center justify-between text-sm">
              <span className={`font-semibold ${platformColors[item.platform] ?? "text-white/80"}`}>
                {item.platform}
              </span>
              <span className="text-xs text-white/40">{item.time}</span>
            </div>
            <p className="mt-3 text-sm text-white/80">{item.content}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-white/50">
              <span>{item.handle}</span>
              <div className="flex items-center gap-2">
                <button type="button" className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/20">
                  React
                </button>
                <button type="button" className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/20">
                  Share
                </button>
              </div>
            </div>
            <div className="relative mt-4 h-40 w-full overflow-hidden rounded-2xl">
              <Image src={item.media} alt={item.platform} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


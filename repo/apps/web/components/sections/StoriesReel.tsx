"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stories } from "../../lib/mockData";

export function StoriesReel() {
  return (
    <section className="overflow-x-auto" aria-label="Glow stories">
      <div className="flex min-w-max items-center gap-4">
        {stories.map((story, index) => (
          <motion.button
            key={story.id}
            type="button"
            whileHover={{ y: -4 }}
            className="flex w-24 flex-col items-center gap-2 rounded-3xl border border-white/10 bg-white/5 p-3 text-center text-sm text-white/70"
            aria-label={`View story ${story.label}`}
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-glow-primary/80">
              <Image
                src={story.image}
                alt={story.label}
                fill
                className="object-cover"
                sizes="64px"
                priority={index < 2}
              />
              {story.live && (
                <span className="absolute inset-x-0 -bottom-2 mx-auto w-max rounded-full bg-glow-primary px-2 py-0.5 text-[10px] font-semibold text-neutral-950">
                  LIVE
                </span>
              )}
            </div>
            <span className="text-xs font-medium text-white/80">{story.label}</span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}


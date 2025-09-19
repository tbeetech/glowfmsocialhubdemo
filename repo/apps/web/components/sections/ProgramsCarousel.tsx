"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { programs } from "../../lib/mockData";
import { GlowSectionHeading } from "../ui/GlowSectionHeading";

export function ProgramsCarousel() {
  return (
    <section id="programs" className="space-y-6">
      <GlowSectionHeading
        superTitle="Programming"
        title="Signature Glow Programs"
        description="Swipe through daily shows, meet the hosts, and bookmark your next listen."
      />
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/90 to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/90 to-transparent" aria-hidden="true" />
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
          {programs.map((program, index) => (
            <motion.article
              key={program.id}
              className="relative w-72 flex-shrink-0 snap-start rounded-3xl border border-white/10 bg-white/5 p-4 text-white shadow-soft"
              whileHover={{ translateY: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
            >
              <div className="relative h-40 w-full overflow-hidden rounded-2xl">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="288px"
                  priority={index < 2}
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                  {program.time}
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold">{program.title}</h3>
                <p className="text-sm text-white/60">Hosted by {program.host}</p>
                <p className="text-sm text-white/60">{program.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


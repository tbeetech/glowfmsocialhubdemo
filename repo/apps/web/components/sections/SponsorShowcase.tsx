"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sponsors } from "../../lib/mockData";
import { GlowSectionHeading } from "../ui/GlowSectionHeading";

export function SponsorShowcase() {
  return (
    <section id="sponsors" className="space-y-6">
      <GlowSectionHeading
        superTitle="Partners"
        title="Glow Sponsor Spotlight"
        description="Brand collaborations powering immersive listener experiences."
      />
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
        <motion.div
          className="flex items-center gap-10"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div key={`${sponsor.id}-${index}`} className="flex h-16 w-40 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
              <Image src={sponsor.logo} alt={sponsor.name} width={120} height={48} className="object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


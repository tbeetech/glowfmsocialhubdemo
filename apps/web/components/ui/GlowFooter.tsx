"use client";

import { GlowButton } from "./GlowButton";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Events", href: "#events" },
  { label: "Advertise", href: "#sponsors" },
  { label: "Contact", href: "mailto:hello@glowfm.ng" }
];

const socials = [
  { label: "Instagram", handle: "@glow991fm", href: "https://instagram.com/glow991fm" },
  { label: "Twitter", handle: "@glow991fm", href: "https://twitter.com/glow991fm" },
  { label: "TikTok", handle: "@glow991fm", href: "https://tiktok.com/@glow991fm" }
];

export function GlowFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-4 md:max-w-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-glow-primary text-neutral-950 font-bold text-xl">G</span>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Glow 99.1 FM</p>
              <p className="text-lg font-semibold text-white">Stay Tuned. Stay Connected.</p>
            </div>
          </div>
          <p className="text-sm text-white/60">
            Broadcasting the brightest voices in the city. Join our community to share, vote, and champion the culture.
          </p>
          <GlowButton variant="outline" size="sm">Sponsor an Experience</GlowButton>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-10 text-sm text-white/70 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a className="hover:text-white" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Connect</h3>
            <ul className="space-y-2">
              {socials.map((item) => (
                <li key={item.label}>
                  <a className="hover:text-white" href={item.href}>
                    {item.label}: <span className="text-white">{item.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        Copyright {new Date().getFullYear()} Glow 99.1 FM. All rights reserved.
      </div>
    </footer>
  );
}


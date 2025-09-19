"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { GlowThemeToggle } from "./GlowThemeToggle";

const programMenu = [
  { title: "Glow Morning Drive", time: "6A - 10A", summary: "Commute energy, city updates, listener shoutouts" },
  { title: "City Pulse", time: "10A - 1P", summary: "Culture, lifestyle stories, sponsor segments" },
  { title: "Glow Drive", time: "4P - 8P", summary: "Traffic hacks, trending hits, fan dedications" },
  { title: "Night Vibes", time: "8P - 11P", summary: "Slow jams and intimate interviews" }
];

const navLinks = [
  { name: "Social", href: "#social" },
  { name: "Events", href: "#events" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Community", href: "#community" }
];

export function GlowNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-glow-midnight/80 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
        <a
          className="relative inline-flex h-16 w-16 items-center justify-center"
          aria-label="Glow FM home"
          href="#hero"
        >
          <Image
            src="https://i.pinimg.com/736x/48/95/76/489576c7736d648db5c9f094cd1e53f8.jpg"
            alt="Glow 99.1 FM Akure logo"
            width={200}
            height={200}
            priority
            className="h-full w-full object-contain"
          />
        </a>
        <div className="flex flex-col leading-tight">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-glow-sky/80">Glow 99.1 FM Akure</span>
          <span className="text-lg font-semibold text-white">Your Station, Your Voice</span>
        </div>
        <div className="ml-auto hidden items-center gap-6 md:flex">
          <NavigationMenu.Root className="relative">
            <NavigationMenu.List className="flex items-center gap-6 text-sm font-medium text-white/70">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-glow-primary/60">
                  Programs
                  <svg
                    className="h-3 w-3 text-white/60 transition group-data-[state=open]:rotate-180"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="m2 4 4 4 4-4" />
                  </svg>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="w-80">
                  <div className="space-y-3 rounded-3xl border border-white/15 bg-black/85 p-4 shadow-soft">
                    {programMenu.map((program) => (
                      <a
                        key={program.title}
                        href="#programs"
                        className="block rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-glow-primary/60 hover:bg-white/10"
                      >
                        <p className="text-xs uppercase tracking-[0.3em] text-white/40">{program.time}</p>
                        <p className="text-sm font-semibold text-white">{program.title}</p>
                        <p className="text-xs text-white/60">{program.summary}</p>
                      </a>
                    ))}
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              {navLinks.map((link) => (
                <NavigationMenu.Item key={link.name}>
                  <NavigationMenu.Link
                    className="transition hover:text-white"
                    href={link.href}
                  >
                    {link.name}
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
            <NavigationMenu.Viewport className="absolute left-1/2 top-full z-40 mt-3 w-80 -translate-x-1/2 overflow-hidden rounded-3xl border border-white/10 bg-black/70 shadow-soft data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn" />
          </NavigationMenu.Root>
          <form className="relative flex items-center" role="search" aria-label="Site search">
            <input
              className="w-44 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:border-glow-primary focus:outline-none focus:ring-2 focus:ring-glow-primary/40"
              placeholder="Search shows, hosts..."
              type="search"
              name="search"
            />
            <span className="pointer-events-none absolute right-3 text-xs uppercase tracking-wide text-white/50">?</span>
          </form>
          <GlowThemeToggle />
        </div>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span className={clsx("block h-0.5 w-6 rounded-full bg-current transition", open && "translate-y-2 rotate-45")}></span>
            <span className={clsx("block h-0.5 w-6 rounded-full bg-current transition", open && "opacity-0")}></span>
            <span className={clsx("block h-0.5 w-6 rounded-full bg-current transition", open && "-translate-y-2 -rotate-45")}></span>
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden"
          >
            <div className="space-y-2 border-t border-white/10 bg-black/60 px-4 py-4">
              <form className="relative mb-2" role="search" aria-label="Site search">
                <input
                  className="w-full rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:border-glow-primary focus:outline-none focus:ring-2 focus:ring-glow-primary/40"
                  placeholder="Search shows, hosts..."
                  type="search"
                  name="mobile-search"
                />
              </form>
              <div className="space-y-3">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">Programs</p>
                  <div className="grid gap-2">
                    {programMenu.map((program) => (
                      <button
                        key={program.title}
                        type="button"
                        onClick={() => setOpen(false)}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/80"
                      >
                        <span className="block text-xs uppercase tracking-[0.25em] text-white/40">{program.time}</span>
                        <span className="block font-semibold text-white">{program.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}


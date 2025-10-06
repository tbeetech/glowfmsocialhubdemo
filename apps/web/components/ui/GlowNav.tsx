"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GlowButton } from "@/components/ui/GlowButton";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import { cn } from "@/lib/cn";

interface IconProps {
  className?: string;
}

function MenuIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Social Media", href: "/social-media" },
  { label: "Blog", href: "/blog", disabled: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Advertisement", href: "/advertisement" }
] as const;

type NavItem = (typeof navLinks)[number];

const logoUrl = "https://drive.google.com/uc?id=1fNwTYWrKleuBSuqeir05K1m6k_eD_fXf";

const linkClasses = "text-sm font-semibold uppercase tracking-[0.15em] text-white/75 transition hover:text-white";

function renderLink(item: NavItem, extra?: string, onClick?: () => void) {
  const { href, label } = item;
  const disabled = 'disabled' in item && Boolean(item.disabled);
  const classes = cn(linkClasses, extra, disabled && "cursor-not-allowed opacity-60");

  if (disabled) {
    return (
      <span key={label} className={classes} aria-disabled="true" title={`${label} coming soon`}>
        {label} · Coming soon
      </span>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a key={href} href={href} className={classes} onClick={onClick}>
        {label}
      </a>
    );
  }

  return (
    <Link key={href} href={href} className={classes} onClick={onClick} prefetch>
      {label}
    </Link>
  );
}

export function GlowNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty("overflow");
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className={cn("sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-black/65 via-glow-secondary/70 to-black/65 backdrop-blur-xl", className)}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3 text-white" prefetch>
          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-white/5">
            <Image src={logoUrl} alt="Glow FM logo" fill sizes="40px" className="object-contain" priority />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold uppercase tracking-widest">Glow FM</span>
            <span className="text-xs text-white/70">Social Engagement Hub</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => renderLink(link))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <GlowButton asChild size="sm" variant="ghost" className="border-white/10 text-white">
            <a href="https://glow991fm.com/schedules/" target="_blank" rel="noreferrer">
              Listen Live
            </a>
          </GlowButton>
          <DarkModeToggle />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/40 md:hidden"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div
            id="mobile-nav"
            className="absolute inset-x-4 top-20 rounded-3xl border border-white/15 bg-[#04070F] p-6 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Navigate Glow FM</h2>
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/40"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                renderLink(
                  link,
                  "rounded-full bg-white/5 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 hover:bg-white/10",
                  ('disabled' in link && link.disabled) ? undefined : () => setOpen(false)
                )
              )}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <GlowButton asChild variant="ghost" className="border-white/10 text-white">
                <a href="https://glow991fm.com/schedules/" target="_blank" rel="noreferrer">
                  Listen Live
                </a>
              </GlowButton>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

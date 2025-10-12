"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Advertisement", href: "/advertisement" }
] as const;

type NavItem = (typeof navLinks)[number];

const logoUrl = "https://drive.google.com/uc?id=1fNwTYWrKleuBSuqeir05K1m6k_eD_fXf";

const baseLinkClasses =
  "relative text-sm font-semibold uppercase tracking-[0.15em] text-white/80 transition-colors duration-200";

const activeLinkClasses =
  "text-white before:opacity-100 before:scale-x-100";

const hoverLinkClasses =
  "hover:text-white before:absolute before:inset-x-0 before:-bottom-1 before:block before:h-0.5 before:origin-center before:scale-x-0 before:rounded-full before:bg-gradient-to-r before:from-glow-primary before:to-glow-secondary before:opacity-0 before:transition before:duration-300 before:ease-out hover:before:opacity-100 hover:before:scale-x-100";

function renderLink(
  item: NavItem,
  {
    extra,
    onClick,
    isActive
  }: { extra?: string; onClick?: () => void; isActive?: boolean }
) {
  const { href, label } = item;
  const classes = cn(baseLinkClasses, hoverLinkClasses, isActive && activeLinkClasses, extra);
  const handleClick = () => {
    onClick?.();
  };

  if (href.startsWith("#")) {
    return (
      <a key={href} href={href} className={classes} onClick={handleClick}>
        {label}
      </a>
    );
  }

  return (
    <Link key={href} href={href} className={classes} onClick={handleClick} prefetch aria-current={isActive ? "page" : undefined}>
      {label}
    </Link>
  );
}

export function GlowNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "glow-nav sticky top-0 z-50 border-b border-white/10 bg-[rgba(20,18,45,0.96)] transition-colors duration-500",
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3 text-white" prefetch>
          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-white/10">
            <Image src={logoUrl} alt="Glow FM logo" fill sizes="40px" className="object-contain" priority />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold uppercase tracking-widest">Glow FM</span>
            <span className="text-xs text-white/80">Social Engagement Hub</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            renderLink(link, {
              isActive: isActivePath(link.href)
            })
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <GlowButton asChild size="sm" variant="ghost" className="border-white/20 text-white hover:border-white/40">
            <a href="https://glow991fm.com/schedules/" target="_blank" rel="noreferrer">
              Listen Live
            </a>
          </GlowButton>
          <DarkModeToggle />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/45 md:hidden"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/80" onClick={() => setOpen(false)} />
          <div
            id="mobile-nav"
            className="absolute inset-x-4 top-20 rounded-3xl border border-white/15 bg-[rgba(18,14,38,0.97)] p-6 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Navigate Glow FM</h2>
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/45"
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
                  {
                    extra:
                      "rounded-full bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/20",
                    onClick: () => setOpen(false),
                    isActive: isActivePath(link.href)
                  }
                )
              )}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <GlowButton asChild variant="ghost" className="border-white/20 text-white">
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

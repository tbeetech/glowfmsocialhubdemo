"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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

const baseLinkClasses =
  "relative text-sm font-medium tracking-wide text-gray-800 transition-colors duration-200";

const activeLinkClasses =
  "text-gray-900 font-semibold";

const hoverLinkClasses =
  "hover:text-gray-900";

function renderLink(
  item: NavItem,
  {
    extra,
    onClick,
    isActive
  }: { extra?: string; onClick?: () => void; isActive?: boolean }
) {
  const { href, label } = item;
  const classes = [
    baseLinkClasses, 
    hoverLinkClasses, 
    isActive && activeLinkClasses, 
    extra
  ].filter(Boolean).join(' ');
  
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

export function GlowNav() {
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
    <header className="fixed top-0 z-[100] w-full">
      {/* Matching Grid Background */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm">
        <div className="absolute inset-0 opacity-5">
          <div className="grid-background-nav"></div>
        </div>
      </div>
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <Link href="/" className="flex items-center text-gray-900" prefetch>
          <span className="font-display text-2xl font-bold tracking-wide">Glow FM</span>
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) =>
            renderLink(link, {
              isActive: isActivePath(link.href)
            })
          )}
        </nav>

        <div className="hidden items-center md:flex">
          <button className="bg-indigo-900 text-white hover:bg-indigo-800 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 shadow-lg">
            Listen Now
          </button>
        </div>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center text-gray-800 md:hidden"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[110] md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div
            id="mobile-nav"
            className="absolute inset-x-4 top-20 rounded-2xl bg-white/95 backdrop-blur-lg shadow-2xl p-6"
          >
            {/* Matching Grid Background for Mobile Menu */}
            <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
              <div className="grid-background-nav"></div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 font-display">Navigate Glow FM</h2>
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center text-gray-700 transition hover:text-gray-900"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <CloseIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) =>
                  renderLink(
                    link,
                    {
                      extra:
                        "px-4 py-3 text-sm font-medium text-gray-800 hover:text-gray-900",
                      onClick: () => setOpen(false),
                      isActive: isActivePath(link.href)
                    }
                  )
                )}
              </div>
              <div className="mt-6">
                <button className="w-full bg-indigo-900 text-white rounded-full px-6 py-3 text-sm font-medium">
                  Listen Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

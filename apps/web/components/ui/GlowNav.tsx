"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getAsset } from "@/lib/drive-assets";

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
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Advertisement", href: "/advertisement" }
] as const;

type NavItem = (typeof navLinks)[number];

const baseLinkClasses =
  "relative text-sm font-medium tracking-wide text-gray-800 transition-all duration-300 font-['El_Messiri'] font-bold";

const activeLinkClasses =
  "text-gray-900 font-semibold";

const hoverLinkClasses =
  "hover:text-gray-900 hover:border-b-2 hover:border-gradient-to-r hover:from-orange-500 hover:to-blue-500 pb-1";

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
    <Link 
      key={href} 
      href={href} 
      className={`${classes} hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-gradient-to-r hover:after:from-orange-500 hover:after:to-blue-500`} 
      onClick={handleClick} 
      prefetch 
      aria-current={isActive ? "page" : undefined}
    >
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
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 compact:px-4 phablet:px-5 lg:px-8 py-3 phablet:py-4 md:py-6 relative z-10">
        <Link href="/" className="flex items-center text-gray-900 transition-transform duration-300 hover:scale-105" prefetch>
          <div className="relative w-10 h-10 compact:w-11 compact:h-11 md:w-12 md:h-12 mr-2 md:mr-3">
            <Image
              src={getAsset("glowFmStandardLogo")}
              alt="Glow FM Logo"
              fill
              className="object-contain rounded-full"
              sizes="48px"
            />
          </div>
          <span className="text-lg sp:text-xl font-bold tracking-wide font-['El_Messiri'] hidden sm:inline-block">Glow FM</span>
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) =>
            renderLink(link, {
              isActive: isActivePath(link.href)
            })
          )}
        </nav>

        <div className="hidden items-center md:flex">
          <button className="bg-indigo-900 text-white hover:bg-indigo-800 rounded-full px-5 mlaptop:px-6 py-2 text-sm font-bold transition-all duration-300 shadow-lg hover:scale-105 backdrop-blur-sm font-['El_Messiri']">
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
            className="absolute inset-x-2 compact:inset-x-4 top-16 mp:top-20 rounded-2xl bg-white/95 backdrop-blur-lg shadow-2xl p-4 sp:p-5 mp:p-6"
          >
            {/* Matching Grid Background for Mobile Menu */}
            <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
              <div className="grid-background-nav"></div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-4 sp:mb-6 flex items-center justify-between">
                <h2 className="text-base sp:text-lg font-semibold text-gray-900 font-['El_Messiri']">Navigate Glow FM</h2>
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
                        "px-3 py-2.5 sp:px-4 sp:py-3 text-sm font-medium text-gray-800 hover:text-gray-900 font-['El_Messiri'] font-bold",
                      onClick: () => setOpen(false),
                      isActive: isActivePath(link.href)
                    }
                  )
                )}
              </div>
              <div className="mt-6">
                <button className="w-full bg-indigo-900 text-white rounded-full px-4 sp:px-6 py-2.5 sp:py-3 text-sm font-bold hover:bg-indigo-800 transition-all duration-300 font-['El_Messiri']">
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

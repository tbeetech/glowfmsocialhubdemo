"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
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
  { label: "About", href: "https://glow991fm.com/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "Advertisement", href: "/advertisement" }
] as const;

type NavItem = (typeof navLinks)[number];

const baseLinkClasses =
  "relative text-sm font-medium tracking-wide transition-all duration-300 font-['El_Messiri'] font-bold text-white/80 hover:text-white";

const activeLinkClasses =
  "text-white font-extrabold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:via-cyan-400 after:to-purple-500 after:shadow-[0_0_15px_rgba(251,146,60,0.8)]";

const hoverLinkClasses =
  "hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.6)] hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-gradient-to-r hover:after:from-orange-400/50 hover:after:to-cyan-400/50";

function renderLink(
  item: NavItem,
  {
    extra,
    onClick,
    isActive
  }: { extra?: string; onClick?: () => void; isActive?: boolean }
) {
  const { href, label } = item;
  const isExternal = href.startsWith("http");
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

  if (isExternal) {
    return (
      <a
        key={href}
        href={href}
        className={classes}
        onClick={handleClick}
        rel="noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <Link 
      key={href} 
      href={href} 
      className={classes} 
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
  const router = useRouter();

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

  const handleListenNow = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    
    if (pathname === "/") {
      const playerSection = document.getElementById("live-player");
      if (playerSection) {
        playerSection.scrollIntoView({ behavior: "smooth" });
        // Dispatch event to trigger play
        window.dispatchEvent(new Event("glow-play-stream"));
      }
    } else {
      router.push("/?play=true#live-player");
    }
  };

  return (
    <header className="fixed top-12 z-[100] w-full">
      <div className="absolute inset-0 bg-[#03050B]/95 border-b border-white/10 backdrop-blur-md"></div>
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 compact:px-4 phablet:px-5 lg:px-8 py-3 phablet:py-4 md:py-6 relative z-10">
        <Link href="/" className="flex items-center text-white transition-transform duration-300 hover:scale-105 group" prefetch>
          <div className="relative w-10 h-10 compact:w-11 compact:h-11 md:w-12 md:h-12 mr-2 md:mr-3">
            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            <Image
              src={getAsset("glowFmStandardLogo")}
              alt="Glow FM Logo"
              fill
              className="object-contain rounded-full relative z-10"
              sizes="48px"
            />
          </div>
          <span className="text-lg sp:text-xl font-bold tracking-wide font-['El_Messiri'] hidden sm:inline-block bg-gradient-to-r from-orange-400 via-orange-300 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]">Glow FM</span>
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) =>
            renderLink(link, {
              isActive: isActivePath(link.href)
            })
          )}
        </nav>

        <div className="hidden items-center md:flex">
          <button 
            onClick={handleListenNow}
            className="relative group bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 text-slate-950 hover:from-orange-400 hover:via-yellow-400 hover:to-orange-400 rounded-full px-5 mlaptop:px-6 py-2 text-sm font-bold transition-all duration-300 shadow-[0_0_30px_rgba(251,146,60,0.6)] hover:shadow-[0_0_45px_rgba(251,146,60,0.9)] hover:scale-105 font-['El_Messiri'] overflow-hidden"
          >
            {/* Electronic Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10">Listen Now</span>
          </button>
        </div>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center text-white/90 hover:text-white md:hidden transition-colors duration-300 hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[110] md:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div
            id="mobile-nav"
            className="absolute inset-x-2 compact:inset-x-4 top-16 mp:top-20 rounded-2xl shadow-2xl p-4 sp:p-5 mp:p-6 overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-[#03050B] border border-white/10 shadow-lg"></div>
            
            <div className="relative z-10">
              <div className="mb-4 sp:mb-6 flex items-center justify-between">
                <h2 className="text-base sp:text-lg font-semibold font-['El_Messiri'] bg-gradient-to-r from-orange-400 via-orange-300 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]">Navigate Glow FM</h2>
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:rotate-90 hover:drop-shadow-[0_0_15px_rgba(251,146,60,0.8)]"
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
                        "px-3 py-2.5 sp:px-4 sp:py-3 text-sm font-medium text-white/80 hover:text-white font-['El_Messiri'] font-bold rounded-lg hover:bg-white/5 transition-all duration-300",
                      onClick: () => setOpen(false),
                      isActive: isActivePath(link.href)
                    }
                  )
                )}
              </div>
              <div className="mt-6">
                <button 
                  onClick={handleListenNow}
                  className="relative group w-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 text-slate-950 rounded-full px-4 sp:px-6 py-2.5 sp:py-3 text-sm font-bold hover:from-orange-400 hover:via-yellow-400 hover:to-orange-400 transition-all duration-300 font-['El_Messiri'] block text-center shadow-[0_0_30px_rgba(251,146,60,0.6)] hover:shadow-[0_0_45px_rgba(251,146,60,0.9)] overflow-hidden"
                >
                  {/* Electronic Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10">Listen Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { SVGProps } from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";

interface GlyphProps extends SVGProps<SVGSVGElement> {}

function TikTokIcon(props: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M21 7.5c-2.1-.14-3.86-1.5-4.5-3.4V3h-3v12.3c0 1.26-1.02 2.28-2.28 2.28A2.3 2.3 0 0 1 9 15.3c0-1.26 1.02-2.28 2.28-2.28.25 0 .5.04.72.11V10.1a4.58 4.58 0 0 0-.72-.06A4.3 4.3 0 0 0 7 14.36 4.3 4.3 0 0 0 11.3 18.7c3.08 0 4.97-1.92 4.97-4.97V8.6c1.02.8 2.29 1.28 3.73 1.28V7.5z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/glow991fm", Icon: Instagram },
  { label: "TikTok", href: "https://tiktok.com/@glow991fm", Icon: TikTokIcon },
  { label: "YouTube", href: "https://youtube.com/@glow991fm", Icon: Youtube },
  { label: "Facebook", href: "https://www.facebook.com/Glowfm/", Icon: Facebook },
  { label: "X", href: "https://x.com/glow991fm", Icon: Twitter }
] as const;

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Social Media", href: "/social-media" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Advertisement", href: "/advertisement" }
] as const;

const logoUrl = "https://drive.google.com/uc?id=1fNwTYWrKleuBSuqeir05K1m6k_eD_fXf";

interface ContactDetail {
  label: string;
  display: string;
  href?: string;
}

const contactDetails: ReadonlyArray<ContactDetail> = [
  { label: "Media House | Traffic", display: "0805 482 0000", href: "tel:+2348054820000" },
  { label: "Studio", display: "0805 551 1110", href: "tel:+2348055511110" },
  { label: "Studio", display: "0706 677 1822", href: "tel:+2347066771822" },
  { label: "Careers", display: "Careers@glowfmradio.com", href: "mailto:Careers@glowfmradio.com" },
  { label: "Marketing", display: "marketing@glowfmradio.com", href: "mailto:marketing@glowfmradio.com" },
  { label: "Address", display: "1 Efon Alaye street Ijapo Estate, Akure, Akure, Nigeria." }
] as const;

export function GlowFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#03050B] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15 bg-white/5">
              <Image src={logoUrl} alt="Glow 99.1 FM logo" fill sizes="40px" className="object-contain" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-lg font-semibold uppercase tracking-[0.25em]">Glow 99.1 FM</p>
              <p className="text-sm text-white/70">Your Station - Your Voice - Your Community</p>
            </div>
          </div>
          <p className="text-sm text-white/70">
            Broadcasting the pulse of campus life while engineering advertiser partnerships and sponsorship wins for the Glow community.
          </p>
          <GlowButton asChild variant="accent" size="sm" className="uppercase tracking-[0.25em]">
            <Link href="https://glow991fm.com/schedules/" target="_blank" rel="noreferrer">
              Listen Live
            </Link>
          </GlowButton>
        </div>
        <div className="grid gap-8 text-sm md:grid-cols-3">
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.3em] text-white/60">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link className="text-white/80 transition hover:text-glow-primary" href={link.href} prefetch>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.3em] text-white/60">Connect</h4>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-glow-primary/50 hover:text-glow-primary"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.3em] text-white/60">Contact</h4>
            <ul className="mt-4 space-y-3 text-white/80">
              {contactDetails.map((item) => (
                <li key={`${item.label}-${item.display}`}>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="block text-white transition hover:text-glow-primary">
                      {item.display}
                    </a>
                  ) : (
                    <span className="block text-white/80">{item.display}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/40 py-4 text-center text-xs text-white/60">
        &copy; {new Date().getFullYear()} Glow 99.1 FM —{" "}
        <a
          href="https://tobseytech.onrender.com"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-glow-accent underline-offset-4 transition hover:text-white"
        >
          Built by toseytech
        </a>
        <span className="mx-1 text-white/40">|</span>
        <a
          href="https://tbeetech.github.io"
          target="_blank"
          rel="noreferrer"
          className="text-white/60 underline-offset-4 transition hover:text-white/90"
        >
          Portfolio
        </a>
        .
      </div>
    </footer>
  );
}

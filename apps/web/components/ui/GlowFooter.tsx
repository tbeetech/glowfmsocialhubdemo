import Link from "next/link";
import { GlowButton } from "@/components/ui/GlowButton";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/glow991fm" },
  { label: "TikTok", href: "https://tiktok.com/@glow991fm" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Facebook", href: "https://facebook.com/glow991fm" },
  { label: "X", href: "https://x.com/glow991fm" }
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Social Media", href: "/social-media" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Advertisement", href: "/advertisement" }
];

export function GlowFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#03050B] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold text-glow-primary">GF</span>
            <div className="leading-tight">
              <p className="font-display text-lg font-semibold uppercase tracking-[0.25em]">Glow 99.1 FM</p>
              <p className="text-sm text-white/70">Your Station - Your Voice - Your Community</p>
            </div>
          </div>
          <p className="text-sm text-white/70">
            Broadcasting the pulse of campus life. Engage with Glow FM across social, submit your voice notes,
            and stay in the loop with our live programming.
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
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-white/80 transition hover:text-glow-primary" href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.3em] text-white/60">Contact</h4>
            <ul className="mt-4 space-y-3 text-white/80">
              <li><a href="mailto:social@glow991fm.com" className="hover:text-glow-primary">social@glow991fm.com</a></li>
              <li><a href="tel:+2348000000991" className="hover:text-glow-primary">+234 800 0000 991</a></li>
              <li>Glow FM Campus Radio - Abuja, Nigeria</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/40 py-4 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} Glow 99.1 FM - Built for community storytellers.
      </div>
    </footer>
  );
}


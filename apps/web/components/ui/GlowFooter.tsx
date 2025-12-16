import Link from "next/link";
import Image from "next/image";
import type { SVGProps } from "react";
import { Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";

interface GlyphProps extends SVGProps<SVGSVGElement> {}

const ABOUT_URL = "https://glow991fm.com/about-us";

function TikTokIcon(props: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M21 7.5c-2.1-.14-3.86-1.5-4.5-3.4V3h-3v12.3c0 1.26-1.02 2.28-2.28 2.28A2.3 2.3 0 0 1 9 15.3c0-1.26 1.02-2.28 2.28-2.28.25 0 .5.04.72.11V10.1a4.58 4.58 0 0 0-.72-.06A4.3 4.3 0 0 0 7 14.36 4.3 4.3 0 0 0 11.3 18.7c3.08 0 4.97-1.92 4.97-4.97V8.6c1.02.8 2.29 1.28 3.73 1.28V7.5z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/glow991fm", Icon: Instagram, color: "hover:text-pink-500 hover:border-pink-500/50" },
  { label: "TikTok", href: "https://tiktok.com/@glow991fm", Icon: TikTokIcon, color: "hover:text-cyan-400 hover:border-cyan-400/50" },
  { label: "YouTube", href: "https://www.youtube.com/@glowtv-e8y", Icon: Youtube, color: "hover:text-red-500 hover:border-red-500/50" },
  { label: "Facebook", href: "https://www.facebook.com/Glowfm/", Icon: Facebook, color: "hover:text-blue-500 hover:border-blue-500/50" },
  { label: "X", href: "https://x.com/glow991fm", Icon: Twitter, color: "hover:text-white hover:border-white/50" }
] as const;

const quickLinks = [
  { label: "Home", href: "https://glow991fm.com" },
  { label: "Social Media", href: "/social-media" },
  { label: "About", href: ABOUT_URL },
  { label: "Contact", href: "/contact" },
  { label: "Advertisement", href: "/advertisement" }
] as const;

const logoUrl = "https://drive.google.com/uc?id=1fNwTYWrKleuBSuqeir05K1m6k_eD_fXf";

interface ContactDetail {
  label: string;
  display: string;
  href?: string;
  icon?: React.ElementType;
}

const contactDetails: ReadonlyArray<ContactDetail> = [
  { label: "Marketing/Adverts", display: "+234 703 212 0921", href: "tel:+2347032120921", icon: Phone },
  { label: "Marketing", display: "+234 703 022 3281", href: "tel:+2347030223281", icon: Phone },
  { label: "Careers", display: "Careers@glowfmradio.com", href: "mailto:Careers@glowfmradio.com", icon: Mail },
  { label: "Address", display: "1 Efon Alaye street Ijapo Estate, Akure, Akure, Nigeria.", icon: MapPin }
] as const;

export function GlowFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-[#020408] text-white overflow-hidden font-['El_Messiri']">
      {/* Ambient Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      {/* Interstellar radial starlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 0, transparent 25%), radial-gradient(circle at 80% 10%, rgba(124,58,237,0.12) 0, transparent 30%), radial-gradient(circle at 60% 80%, rgba(255,153,51,0.08) 0, transparent 28%), radial-gradient(circle at 10% 80%, rgba(59,130,246,0.08) 0, transparent 24%)"
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.5), transparent), radial-gradient(1.5px 1.5px at 30% 40%, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 70% 15%, rgba(255,255,255,0.4), transparent), radial-gradient(1.5px 1.5px at 85% 65%, rgba(255,255,255,0.45), transparent), radial-gradient(1px 1px at 45% 75%, rgba(255,255,255,0.5), transparent), radial-gradient(1.25px 1.25px at 55% 55%, rgba(255,255,255,0.35), transparent)"
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <Image src={logoUrl} alt="Glow 99.1 FM logo" fill sizes="64px" className="object-contain p-2" />
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-widest text-white">Glow 99.1 FM</h3>
                <p className="text-xs font-medium text-orange-400 tracking-[0.2em] uppercase">Your Station • Your Voice</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              Broadcasting the pulse of campus life while engineering advertiser partnerships and sponsorship wins for the Glow community.
            </p>
            <div className="flex gap-4">
               <GlowButton asChild variant="accent" size="sm" className="uppercase tracking-[0.25em] bg-orange-600 hover:bg-orange-500 border-none shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                <Link href="https://glow991fm.com/schedules/" target="_blank" rel="noreferrer">
                  Listen Live
                </Link>
              </GlowButton>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-white mb-6 border-l-2 border-orange-500 pl-3">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a className="group flex items-center text-sm text-slate-400 transition-colors hover:text-white" href={link.href} rel="noreferrer">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/10 mr-3 group-hover:bg-orange-500 transition-colors"></span>
                          {link.label}
                        </a>
                      ) : (
                        <Link className="group flex items-center text-sm text-slate-400 transition-colors hover:text-white" href={link.href} prefetch>
                          <span className="w-1.5 h-1.5 rounded-full bg-white/10 mr-3 group-hover:bg-orange-500 transition-colors"></span>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-white mb-6 border-l-2 border-blue-500 pl-3">Connect</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, Icon, color }) => (
                  <a
                    key={label}
                    className={`group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${color}`}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-white mb-6 border-l-2 border-purple-500 pl-3">Contact</h4>
              <ul className="space-y-4">
                {contactDetails.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    {item.icon && <item.icon className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />}
                    <div className="space-y-1">
                      <p className="text-[0.65rem] uppercase tracking-widest text-slate-500 font-bold">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="block text-sm text-slate-300 hover:text-white transition-colors">
                          {item.display}
                        </a>
                      ) : (
                        <span className="block text-sm text-slate-300">{item.display}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Glow 99.1 FM. All rights reserved.</p>
          <div className="flex items-center gap-6">
             <a
              href="https://tobseytech.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <span className="uppercase tracking-wider font-bold text-[0.6rem]">Built by</span>
              <span className="font-bold text-orange-500 group-hover:text-orange-400">tobseytech</span>
            </a>
            <div className="h-3 w-px bg-white/10"></div>
            <a
              href="https://tbeetech.github.io"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

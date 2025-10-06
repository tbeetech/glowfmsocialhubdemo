import Link from "next/link";
import { GlowButton } from "@/components/ui/GlowButton";

const WHATSAPP_BROADCAST_LINK = "https://chat.whatsapp.com/BZvP92OCqir0cahZUlSYgI";

const links = [
  { label: "Instagram", href: "https://instagram.com/glow991fm" },
  { label: "TikTok", href: "https://tiktok.com/@glow991fm" },
  { label: "YouTube", href: "https://youtube.com/@glow991fm" },
  { label: "Facebook", href: "https://www.facebook.com/Glowfm/" },
  { label: "X", href: "https://x.com/glow991fm" },
  { label: "WhatsApp", href: WHATSAPP_BROADCAST_LINK }
];

export function FollowBar() {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map(({ label, href }) => (
        <GlowButton
          key={label}
          asChild
          size="sm"
          variant={label === "WhatsApp" ? "accent" : "ghost"}
          className="uppercase tracking-[0.2em]"
        >
          {href.startsWith("/") ? (
            <Link href={href}>{label}</Link>
          ) : (
            <a href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          )}
        </GlowButton>
      ))}
    </div>
  );
}

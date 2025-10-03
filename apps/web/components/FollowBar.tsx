import Link from "next/link";
import { GlowButton } from "@/components/ui/GlowButton";

const links = [
  { label: "Instagram", href: "https://instagram.com/glow991fm" },
  { label: "TikTok", href: "https://tiktok.com/@glow991fm" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Facebook", href: "https://facebook.com/glow991fm" },
  { label: "X", href: "https://x.com/glow991fm" },
  { label: "WhatsApp", href: "/whatsapp", internal: true }
];

export function FollowBar() {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map(({ label, href, internal }) => (
        <GlowButton
          key={label}
          asChild
          size="sm"
          variant={label === "WhatsApp" ? "accent" : "ghost"}
          className="uppercase tracking-[0.2em]"
        >
          {internal ? (
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
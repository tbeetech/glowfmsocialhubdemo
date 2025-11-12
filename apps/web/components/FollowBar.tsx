import Link from "next/link";

const WHATSAPP_BROADCAST_LINK = "https://chat.whatsapp.com/BZvP92OCqir0cahZUlSYgI";

const links = [
  { label: "Instagram", href: "https://instagram.com/glow991fm" },
  { label: "TikTok", href: "https://tiktok.com/@glow991fm" },
  { label: "YouTube", href: "https://youtube.com/@glow991fm" },
  { label: "Facebook", href: "https://www.facebook.com/Glowfm/" },
  { label: "X", href: "https://x.com/glow991fm" },
  { label: "WhatsApp", href: WHATSAPP_BROADCAST_LINK }
];

const chipClass =
  "inline-flex items-center justify-center rounded-full border border-gray-900 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-900 shadow-sm transition hover:bg-gray-900 hover:text-white";

export function FollowBar() {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {links.map(({ label, href }) => (
        href.startsWith("/") ? (
          <Link key={label} href={href} className={chipClass}>
            {label}
          </Link>
        ) : (
          <a key={label} href={href} target="_blank" rel="noreferrer" className={chipClass}>
            {label}
          </a>
        )
      ))}
    </div>
  );
}

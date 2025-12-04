import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const WHATSAPP_BROADCAST_LINK = "https://chat.whatsapp.com/BZvP92OCqir0cahZUlSYgI";

const links = [
  { label: "Instagram", href: "https://instagram.com/glow991fm", icon: FaInstagram, color: "hover:text-pink-500 hover:border-pink-500" },
  { label: "TikTok", href: "https://tiktok.com/@glow991fm", icon: FaTiktok, color: "hover:text-cyan-400 hover:border-cyan-400" },
  { label: "YouTube", href: "https://youtube.com/@glow991fm", icon: FaYoutube, color: "hover:text-red-600 hover:border-red-600" },
  { label: "Facebook", href: "https://www.facebook.com/Glowfm/", icon: FaFacebook, color: "hover:text-blue-600 hover:border-blue-600" },
  { label: "X", href: "https://x.com/glow991fm", icon: FaXTwitter, color: "hover:text-white hover:border-white" },
  { label: "WhatsApp", href: WHATSAPP_BROADCAST_LINK, icon: FaWhatsapp, color: "hover:text-green-500 hover:border-green-500" }
];

const chipClass =
  "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:scale-110 hover:bg-transparent hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]";

export function FollowBar() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 py-8">
      {links.map(({ label, href, icon: Icon, color }) => {
        const content = (
          <>
            <Icon className="text-xl sm:text-2xl" />
            <span className="sr-only">{label}</span>
          </>
        );

        return href.startsWith("/") ? (
          <Link key={label} href={href} className={`${chipClass} ${color}`}>
            {content}
          </Link>
        ) : (
          <a key={label} href={href} target="_blank" rel="noreferrer" className={`${chipClass} ${color}`}>
            {content}
          </a>
        );
      })}
    </div>
  );
}

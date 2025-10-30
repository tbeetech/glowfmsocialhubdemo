import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { El_Messiri, Inter } from "next/font/google";
import "./globals.css";
import { GlowNav } from "@/components/ui/GlowNav";
import { GlowFooter } from "@/components/ui/GlowFooter";

const displayFont = El_Messiri({ subsets: ["latin"], variable: "--font-display" });
const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body" });

const themeInitializer = `(() => {
  try {
    const storage = localStorage.getItem('glow.theme');
    const stored = storage ? JSON.parse(storage) : null;
    const mode = stored?.state?.mode;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (mode === 'dark' || (!mode && systemDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (error) {
    console.warn('Theme hydrate failed', error);
  }
})();`;

export const metadata: Metadata = {
  icons: {
    icon: "https://drive.google.com/uc?id=1fNwTYWrKleuBSuqeir05K1m6k_eD_fXf",
    shortcut: "https://drive.google.com/uc?id=1fNwTYWrKleuBSuqeir05K1m6k_eD_fXf"
  },
  title: "Glow 99.1 FM - Social Engagement Hub",
  description: "Experience Glow FM online: live shows, social buzz, polls, quests, notifications, and analytics for the campus community.",
  keywords: ["Glow FM", "Glow Ember Challenge", "Campus Radio", "Social Hub", "Nigeria"],
  metadataBase: new URL("https://glow991fm.com"),
  openGraph: {
    title: "Glow 99.1 FM - Social Engagement Hub",
    description: "Stream shows, react to highlights, join quests, and submit your stories to Glow FM.",
    url: "https://glow991fm.com/social",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/demo/image/upload/v1720000000/glowfm/social-hub-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Glow FM Social Hub"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@glow991fm",
    creator: "@glow991fm",
    title: "Glow 99.1 FM - Social Engagement Hub",
    description: "Join Glow FM's social universe with live content, quests and rewards.",
    images: ["https://res.cloudinary.com/demo/image/upload/v1720000000/glowfm/social-hub-cover.jpg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`} id="top">
      <body className="min-h-screen bg-white text-gray-900" suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">{themeInitializer}</Script>
        <GlowNav />
        <main className="bg-white">{children}</main>
        <a
          href="https://glow991fm.com/schedules/"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-indigo-900 text-white px-5 py-3 text-sm font-semibold shadow-lg hover:bg-indigo-800 transition-colors"
          aria-label="View Glow FM schedule"
        >
          <span className="hidden sm:inline">View Schedule</span>
          <span className="sm:hidden">Schedule</span>
        </a>
        <GlowFooter />
      </body>
    </html>
  );
}






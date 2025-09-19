import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import clsx from "clsx";
import { GlowNav } from "@/components/ui/GlowNav";
import { GlowFooter } from "@/components/ui/GlowFooter";
import { GlowPlayer } from "@/components/ui/GlowPlayer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Glow 99.1 FM ? Social Engagement Hub",
  description: "Sponsor-ready platform bridging Glow 99.1 FM listeners, shows, partners, and activations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={clsx("relative min-h-screen overflow-x-hidden", poppins.variable, spaceGrotesk.variable)}>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-glow-primary/10 via-transparent to-glow-sky/10" aria-hidden="true" />
        <GlowNav />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <GlowFooter />
        <GlowPlayer />
      </body>
    </html>
  );
}


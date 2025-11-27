"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { FaMusic, FaBroadcastTower, FaGift, FaPercentage, FaScroll, FaVideo } from "react-icons/fa";

type Currency = "NGN" | "USD";

interface AdPackage {
  id: string;
  name: string;
  duration: string;
  description: string;
  icon: React.ElementType;
  specialOffer?: {
    label: string;
    endDate?: string;
    type: "seasonal" | "discount";
  };
  features: string[];
  ctaText: string;
  price?: { NGN: number; USD: number };
}

const advertisingPackages: AdPackage[] = [
  {
    id: "jingles",
    name: "Jingles Package",
    duration: "1-2 Minutes",
    description: "High-rotation musical ads designed for brand promotion, intros, and announcements. Perfect for building sonic identity.",
    icon: FaMusic,
    features: [
      "Professional audio production",
      "High-frequency rotation",
      "Scripting assistance",
      "Prime time placement options"
    ],
    ctaText: "Book Jingle Slot",
    price: { NGN: 150000, USD: 200 }
  },
  {
    id: "general",
    name: "General Ad Packages",
    duration: "4 Minutes+",
    description: "Extended slots for storytelling, product highlights, or detailed promotions. Ideal for complex messages.",
    icon: FaBroadcastTower,
    features: [
      "Deep-dive storytelling",
      "Interview-style options",
      "Flexible scheduling",
      "Podcast syndication available"
    ],
    ctaText: "Start Campaign",
    price: { NGN: 300000, USD: 400 }
  },
  {
    id: "oju-oja",
    name: '"Oju Oja" Special Yuletide Bonanza',
    duration: "2 Minutes",
    description: "A seasonal power-package designed for business owners to promote products/services during the festive rush.",
    icon: FaGift,
    specialOffer: {
      label: "Valid until Jan 3rd, 2026",
      endDate: "2026-01-03",
      type: "seasonal"
    },
    features: [
      "Festive sound design",
      "Priority placement during holiday shows",
      "Social media shout-out included",
      "Business owner spotlight"
    ],
    ctaText: "Claim Holiday Spot",
    price: { NGN: 100000, USD: 130 }
  },
  {
    id: "promo-offer",
    name: "Buy 3 Ads, Get 1 Free",
    duration: "Various Formats",
    description: "Maximize your budget with our limited-time bulk offer. Applies across selected ad categories.",
    icon: FaPercentage,
    specialOffer: {
      label: "Offer Ends Dec 31st",
      endDate: "2025-12-31",
      type: "discount"
    },
    features: [
      "Mix and match eligible slots",
      "Extended campaign duration",
      "Volume discount applied",
      "Account manager support"
    ],
    ctaText: "Get Free Ad",
  },
  {
    id: "scroll-bar",
    name: "Scroll Bar Ads",
    duration: "Continuous Loop",
    description: "High-visibility scrolling text advertisements displayed repeatedly on screen during live shows.",
    icon: FaScroll,
    features: [
      "Non-intrusive visual presence",
      "High frequency visibility",
      "Clickable links on digital streams",
      "Real-time updates allowed"
    ],
    ctaText: "Start Scrolling",
    price: { NGN: 50000, USD: 65 }
  },
  {
    id: "product-placement",
    name: "Product Placement",
    duration: "In-Stream Integration",
    description: "Seamlessly integrate your brand images, logos, or physical products into our livestreams and video podcasts.",
    icon: FaVideo,
    features: [
      "Visual brand immersion",
      "Host interaction/endorsement",
      "Logo overlays",
      "Set dressing integration"
    ],
    ctaText: "Integrate Brand",
    price: { NGN: 200000, USD: 260 }
  }
];

const currencySymbol: Record<Currency, string> = {
  NGN: "\u20A6",
  USD: "$"
};

export default function AdvertisementPage() {
  const [currency, setCurrency] = useState<Currency>("NGN");

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat(currency === "NGN" ? "en-NG" : "en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }),
    [currency]
  );

  return (
    <div className="min-h-screen text-gray-900 bg-[#030511] relative overflow-x-hidden">
      {/* Futuristic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 space-y-20 pb-20">
        {/* Hero Section */}
        <AnimatedSection className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-400 backdrop-blur-md mb-8">
            <span className="mr-2 h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
            Glow FM Media Kit
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white font-['El_Messiri'] tracking-tight mb-6 leading-tight">
            Amplify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Brand Signal</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-['El_Messiri'] leading-relaxed">
            From high-rotation jingles to immersive product placements, we deliver your message across the airwaves and digital streams of Akure&apos;s #1 station.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 pr-4 backdrop-blur-md">
              <div className="flex gap-1">
                <button
                  onClick={() => setCurrency("NGN")}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                    currency === "NGN" ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25" : "text-slate-400 hover:text-white"
                  }`}
                >
                  NGN (₦)
                </button>
                <button
                  onClick={() => setCurrency("USD")}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 ${
                    currency === "USD" ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25" : "text-slate-400 hover:text-white"
                  }`}
                >
                  USD ($)
                </button>
              </div>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Select Currency</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Packages Grid */}
        <AnimatedSection className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['El_Messiri'] mb-4">Advertising Packages</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advertisingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`group relative flex flex-col rounded-[2rem] border p-8 transition-all duration-500 hover:-translate-y-2 ${
                  pkg.specialOffer
                    ? "border-orange-500/50 bg-gradient-to-b from-orange-900/20 to-black/40 shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                } backdrop-blur-xl`}
              >
                {pkg.specialOffer && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-white shadow-lg shadow-orange-500/40">
                      <FaGift className="text-xs" />
                      {pkg.specialOffer.label}
                    </span>
                  </div>
                )}

                <div className="mb-6 flex items-start justify-between">
                  <div className={`rounded-2xl p-3 ${pkg.specialOffer ? "bg-orange-500/20 text-orange-400" : "bg-white/10 text-white"}`}>
                    <pkg.icon className="h-6 w-6" />
                  </div>
                  {pkg.price && (
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white font-['El_Messiri']">
                        {currencySymbol[currency]}
                        {formatter.format(pkg.price[currency])}
                      </p>
                      <p className="text-[0.65rem] uppercase tracking-wider text-slate-400">Starting from</p>
                    </div>
                  )}
                </div>

                <div className="mb-6 space-y-2">
                  <h3 className="text-2xl font-bold text-white font-['El_Messiri'] group-hover:text-orange-400 transition-colors">
                    {pkg.name}
                  </h3>
                  <div className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
                    {pkg.duration}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-8 flex-grow">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${pkg.specialOffer ? "bg-orange-500" : "bg-slate-500"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <GlowButton
                  asChild
                  variant={pkg.specialOffer ? "accent" : "secondary"}
                  className="w-full justify-center uppercase tracking-[0.2em] font-bold"
                >
                  <Link href={`/contact?package=${pkg.id}`}>
                    {pkg.ctaText}
                  </Link>
                </GlowButton>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-['El_Messiri']">
                  Why Partner with <span className="text-orange-500">Glow FM?</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Massive Reach", desc: "Broadcasting to millions across Akure and neighboring states." },
                    { title: "Digital Integration", desc: "Seamlessly blend on-air ads with our social media & web platforms." },
                    { title: "Creative Excellence", desc: "Our in-house production team crafts jingles that stick." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 h-12 w-1 bg-gradient-to-b from-orange-500 to-transparent rounded-full"></div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black/20">
                 {/* Placeholder for a studio image or abstract graphic */}
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                        <p className="text-5xl font-black text-white font-['El_Messiri']">2.5M+</p>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Daily Listeners</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center pb-16">
          <h2 className="text-3xl font-bold text-white font-['El_Messiri'] mb-6">Ready to be Heard?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Contact our sales team today to customize a package that fits your budget and goals.
          </p>
          <GlowButton asChild size="lg" variant="accent" className="uppercase tracking-[0.25em] font-bold px-12">
            <Link href="/contact">Get Started Now</Link>
          </GlowButton>
        </AnimatedSection>
      </div>
    </div>
  );
}






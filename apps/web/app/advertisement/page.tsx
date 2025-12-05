"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { FaMusic, FaBroadcastTower, FaGift, FaPercentage, FaScroll, FaVideo } from "react-icons/fa";

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
  }
];

export default function AdvertisementPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

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
        </AnimatedSection>

        {/* Packages Grid */}
        <AnimatedSection className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['El_Messiri'] mb-4">Advertising Packages</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative group/carousel">
            <button 
              onClick={() => scroll('left')} 
              className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-orange-500 p-3 rounded-full text-white opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:scale-110 hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-orange-500 p-3 rounded-full text-white opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:scale-110 hidden md:block"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-12 px-4 snap-x snap-mandatory scrollbar-hide -mx-4 sm:mx-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
            {advertisingPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                className={`min-w-[300px] md:min-w-[380px] snap-center group relative flex flex-col rounded-[2rem] border p-8 transition-all duration-500 ${
                  pkg.specialOffer
                    ? "border-orange-500/50 bg-gradient-to-b from-orange-900/20 to-black/40 shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                } backdrop-blur-xl`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
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
              </motion.div>
            ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us Section */}
        <AnimatedSection className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10">
              <div className="space-y-8 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-['El_Messiri']">
                  Why Partner with <span className="text-orange-500">Glow FM?</span>
                </h2>
                <div className="grid gap-8 md:grid-cols-3 text-left">
                  {[
                    { title: "Massive Reach", desc: "Broadcasting to millions across Akure and neighboring states." },
                    { title: "Digital Integration", desc: "Seamlessly blend on-air ads with our social media & web platforms." },
                    { title: "Creative Excellence", desc: "Our in-house production team crafts jingles that stick." }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
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






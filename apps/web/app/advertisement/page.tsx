'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
type Currency = "NGN" | "USD";

interface PackageTier {
  name: string;
  headline: string;
  price: Record<Currency, number>;
  benefits: string[];
  gaps: string[];
  deliverables: string;
}

const adPackages: PackageTier[] = [
  {
    name: "Jingle Amplifier",
    headline: "Powerful radio jingles with production, scheduling, and frequency boosts.",
    deliverables: "Studio scripting, voice talent, 30/45 sec masters, 6x daily run on peak belts.",
    price: { NGN: 250_000, USD: 325 },
    benefits: [
      "Dedicated creative producer and sound engineer on every spot.",
      "Strategic placement in drive time, campus rush hour, and weekend primetime.",
      "Weekly performance recap with call-in volume tracking."
    ],
    gaps: [
      "Limited digital touchpoints - upgrade if you need social retargeting.",
      "Does not include influencer cameos or podcast mentions."
    ]
  },
  {
    name: "Social Pulse",
    headline: "Always-on social media promotions synced with on-air shout-outs.",
    deliverables: "Instagram reels, TikTok duet challenges, X thread recaps, WhatsApp broadcast copy.",
    price: { NGN: 420_000, USD: 545 },
    benefits: [
      "Content calendar mapped to your launch milestones and CTAs.",
      "Glow creator collaborations for authentic campus storytelling.",
      "Audience polls, sticker prompts, and contest mechanics managed end-to-end."
    ],
    gaps: [
      "Live events and field activations billed separately.",
      "Organic reach only - add paid boosts if you want guaranteed impressions."
    ]
  },
  {
    name: "Branded Experience",
    headline: "Full-spectrum branding with experiential takeovers and merch.",
    deliverables: "Pop-up studio, OB van presence, branded show segments, custom microsite + jingles.",
    price: { NGN: 950_000, USD: 1_230 },
    benefits: [
      "Hybrid campaign spanning radio, socials, campus activations, and newsletters.",
      "On-site data capture kiosks and QR flows for lead generation.",
      "Real-time analytics dashboard with redemption and survey insights."
    ],
    gaps: [
      "Requires four-week lead time for fabrication and permits.",
      "Pricing excludes logistics outside Ondo/Ekiti axis."
    ]
  }
];

const PLAN_NAMES = ["Jingle Amplifier", "Social Pulse", "Branded Experience"] as const;

const planComparison: Array<{
  feature: string;
  availability: Record<string, string>;
  helper?: string;
}> = [
  {
    feature: "Studio scripting & premium mastering",
    availability: {
      "Jingle Amplifier": "included",
      "Social Pulse": "addon",
      "Branded Experience": "included"
    },
    helper: "Voice talent, edit suite and sonic branding assets."
  },
  {
    feature: "Always-on social media campaign management",
    availability: {
      "Jingle Amplifier": "no",
      "Social Pulse": "included",
      "Branded Experience": "included"
    },
    helper: "Calendar planning, reels, threads, WhatsApp prompts."
  },
  {
    feature: "On-air mentions, bumpers & live shout-outs",
    availability: {
      "Jingle Amplifier": "included",
      "Social Pulse": "included",
      "Branded Experience": "premium"
    }
  },
  {
    feature: "Influencer & creator collaborations",
    availability: {
      "Jingle Amplifier": "addon",
      "Social Pulse": "included",
      "Branded Experience": "premium"
    }
  },
  {
    feature: "Experiential activations & OB van coverage",
    availability: {
      "Jingle Amplifier": "no",
      "Social Pulse": "addon",
      "Branded Experience": "premium"
    }
  },
  {
    feature: "Real-time analytics dashboard & reporting",
    availability: {
      "Jingle Amplifier": "addon",
      "Social Pulse": "addon",
      "Branded Experience": "included"
    },
    helper: "Reach, impressions, redemptions, and call-in metrics."
  }
];

const salesBoosters = [
  {
    title: "Multi-Platform Launch",
    summary: "Bundle on-air mentions with synchronized Facebook Live crawlers and Instagram story polls to capture leads while the conversation is hot.",
    impact: "Average 38% uplift in store visits during promo weekends."
  },
  {
    title: "Creator Collab Series",
    summary: "Tap Glow ambassadors to co-host TikTok and YouTube segments, giving your product an authentic campus voice.",
    impact: "Campaigns have generated 2.3x more saves and shares compared to standard display ads."
  },
  {
    title: "Data-Driven Retargeting",
    summary: "We segment your audience by interest, retargeting them with newsletter snippets, WhatsApp reminders, and call-in prompts.",
    impact: "50% increase in repeat purchases tracked via promo codes."
  }
];

const caseStudies = [
  {
    brand: "Campus Tech Hub",
    result: "Sold out 40 laptops in three weeks using Glow FM livestream demos and discount codes announced on air.",
    channel: "Facebook Live + TikTok Reels"
  },
  {
    brand: "Glow Bites Cafe",
    result: "Expanded lunchtime delivery radius after a viral Instagram carousel and promo jingles during Glow FM Connect.",
    channel: "Instagram + On-air jingles"
  },
  {
    brand: "City Fitness Studio",
    result: "Hit membership targets ahead of schedule with Women's World wellness takeovers and X threads featuring trainers.",
    channel: "Women's World + X threads"
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
    <div className="min-h-screen text-gray-900 bg-gradient-to-br from-orange-50 via-white to-red-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="space-y-16 relative z-10">
        <AnimatedSection className="rounded-3xl bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 p-8 text-white shadow-2xl mx-4 relative overflow-hidden">
          {/* Hero background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="space-y-6 relative z-10">
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/90 font-['El_Messiri'] font-bold shadow-lg">
              Grow With Glow FM
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl font-['El_Messiri'] leading-tight">
              Advertising and Sales Acceleration
            </h1>
            <p className="max-w-4xl text-lg text-white/90 font-['El_Messiri'] leading-relaxed font-semibold">
              Glow FM combines radio storytelling, social-first content, and data dashboards to drive measurable results for your business. 
              Choose a package, plug into our creative team, and watch your numbers climb.
            </p>
            <div className="flex flex-wrap gap-4">
              <GlowButton asChild size="lg" variant="accent" className="uppercase tracking-[0.3em] font-['El_Messiri'] font-bold transform hover:scale-105 transition-all duration-300">
                <Link href="/contact">Book a strategy call</Link>
              </GlowButton>
              <GlowButton
                asChild
                size="lg"
                variant="ghost"
                className="border-white/30 text-white uppercase tracking-[0.3em] font-['El_Messiri'] font-bold transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/social-media">Preview social inventory</Link>
              </GlowButton>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-10 mx-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 font-['El_Messiri']">Choose a Glow FM Growth Package</h2>
              <p className="text-lg text-gray-600 font-['El_Messiri'] font-semibold mt-2">
                Toggle currencies, review deliverables, and match the plan that fits your current campaign ambitions.
              </p>
            </div>
            <div className="flex gap-2 rounded-full border border-orange-300 bg-white/80 backdrop-blur-sm p-2 text-xs uppercase tracking-[0.35em] shadow-lg">
              <GlowButton variant={currency === "NGN" ? "accent" : "ghost"} size="sm" onClick={() => setCurrency("NGN")} className="font-['El_Messiri'] font-bold">
                {currency === "NGN" ? "Billing in ₦" : "Bill in ₦"}
              </GlowButton>
              <GlowButton variant={currency === "USD" ? "accent" : "ghost"} size="sm" onClick={() => setCurrency("USD")} className="font-['El_Messiri'] font-bold">
                {currency === "USD" ? "Billing in $" : "Bill in $"}
              </GlowButton>
            </div>
          </div>
          <div className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {adPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="rounded-3xl bg-white/80 backdrop-blur-lg p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-orange-100"
                >
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-3xl font-bold text-gray-900 font-['El_Messiri']">{pkg.name}</h3>
                      <p className="text-base text-gray-600 font-['El_Messiri'] leading-relaxed">{pkg.deliverables}</p>
                    </div>
                    <p className="text-lg font-semibold text-gray-700 font-['El_Messiri']">{pkg.headline}</p>
                    <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 p-6 shadow-inner">
                      <p className="text-4xl font-bold text-orange-600 font-['El_Messiri']">
                        {currencySymbol[currency]}
                        {formatter.format(pkg.price[currency])}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.35em] text-gray-500 font-['El_Messiri'] font-bold">
                        per 4-week burst
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs uppercase tracking-[0.35em] text-orange-600 font-['El_Messiri'] font-bold">
                        What you gain
                      </p>
                      <ul className="space-y-3 text-base text-gray-700 font-['El_Messiri']">
                        {pkg.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-500" />
                            <span className="leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs uppercase tracking-[0.35em] text-gray-500 font-['El_Messiri'] font-bold">
                        Mind the gaps
                      </p>
                      <ul className="space-y-3 text-base text-gray-600 font-['El_Messiri']">
                        {pkg.gaps.map((gap) => (
                          <li key={gap} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                            <span className="leading-relaxed">{gap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <GlowButton
                      asChild
                      size="lg"
                      variant="accent"
                      className="w-full justify-center uppercase tracking-[0.3em] font-['El_Messiri'] font-bold transform hover:scale-105 transition-all duration-300"
                    >
                      <Link href={`/contact?interest=${encodeURIComponent(pkg.name)}`}>Reserve this package</Link>
                    </GlowButton>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl bg-white/80 backdrop-blur-lg p-8 shadow-2xl border border-orange-100">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-gray-900 font-['El_Messiri']">Compare packages at a glance</h3>
                  <p className="text-gray-600 font-['El_Messiri'] text-lg">See what&apos;s bundled and where upgrades apply.</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-left text-base text-gray-700">
                    <thead>
                      <tr className="text-sm uppercase tracking-[0.35em] text-gray-500 font-['El_Messiri'] font-bold">
                        <th scope="col" className="pb-6 pr-6 font-normal">
                          Deliverables
                        </th>
                        {PLAN_NAMES.map((plan) => (
                          <th key={plan} scope="col" className="pb-6 pr-6 font-normal text-right sm:text-center">
                            {plan}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {planComparison.map((row) => (
                        <tr key={row.feature} className="align-top">
                          <th scope="row" className="py-6 pr-6 text-left font-semibold text-gray-900 font-['El_Messiri']">
                            <span>{row.feature}</span>
                            {row.helper && (
                              <span className="mt-2 block text-sm text-gray-500 font-['El_Messiri'] font-normal">
                                {row.helper}
                              </span>
                            )}
                          </th>
                          {PLAN_NAMES.map((plan) => {
                            const inclusion = row.availability[plan];
                            let className = "";
                            let label = "";
                            
                            if (inclusion === "included") {
                              className = "bg-green-100 text-green-700 border-green-300";
                              label = "Included";
                            } else if (inclusion === "premium") {
                              className = "bg-orange-100 text-orange-700 border-orange-300";
                              label = "Full suite";
                            } else if (inclusion === "addon") {
                              className = "bg-gray-100 text-gray-600 border-gray-300";
                              label = "Add-on";
                            } else {
                              className = "border-gray-200 bg-transparent text-gray-400";
                              label = "—";
                            }
                            
                            return (
                              <td key={plan} className="py-6 pr-6 text-right sm:text-center">
                                <span
                                  className={`inline-flex min-w-[120px] justify-center rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-[0.35em] font-['El_Messiri'] ${className}`}
                                >
                                  {label}
                                </span>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-6 text-sm text-gray-500 font-['El_Messiri']">
                  Upgrade any plan with add-ons, or snap in premium experiential elements from Branded Experience.
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 font-['El_Messiri'] text-center bg-white/80 backdrop-blur-sm p-4 rounded-xl">
            Need a custom mix? Email{" "}
            <a className="underline decoration-dotted text-orange-600 font-semibold" href="mailto:marketing@glowfmradio.com">
              marketing@glowfmradio.com
            </a>{" "}
            for bespoke media plans, bundle discounts, and multi-city roadshows.
          </p>
        </AnimatedSection>

        <AnimatedSection className="space-y-10 mx-4">
          <h2 className="text-4xl font-bold text-gray-900 font-['El_Messiri'] text-center">Why Advertisers Choose Glow FM</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {salesBoosters.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white/80 backdrop-blur-lg p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-orange-100">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 font-['El_Messiri']">{item.title}</h3>
                  <p className="text-lg text-gray-700 font-['El_Messiri'] leading-relaxed">{item.summary}</p>
                  <p className="text-sm uppercase tracking-[0.35em] text-orange-600 font-['El_Messiri'] font-bold bg-orange-50 p-4 rounded-xl">
                    {item.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-10 mx-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 font-['El_Messiri']">Proof in Numbers</h2>
              <p className="text-lg text-gray-600 font-['El_Messiri'] mt-2">
                Plug in your brand and adapt these case notes with fresh metrics after each campaign.
              </p>
            </div>
            <GlowButton asChild variant="secondary" size="lg" className="font-['El_Messiri'] font-bold transform hover:scale-105 transition-all duration-300">
              <Link href="/blog">Read campaign breakdowns</Link>
            </GlowButton>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((study) => (
              <div key={study.brand} className="rounded-3xl bg-white/80 backdrop-blur-lg p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-orange-100">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 font-['El_Messiri']">{study.brand}</h3>
                    <p className="text-base text-orange-600 font-semibold font-['El_Messiri'] bg-orange-50 px-4 py-2 rounded-lg">{study.channel}</p>
                  </div>
                  <p className="text-lg text-gray-700 font-['El_Messiri'] leading-relaxed">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid gap-8 lg:grid-cols-2 mx-4 pb-16">
          <div className="rounded-3xl bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 p-8 text-white shadow-2xl relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-white font-['El_Messiri']">Campaign Blueprint</h3>
                <p className="text-white/90 font-['El_Messiri'] text-lg">Your onboarding checklist</p>
              </div>
              <ol className="space-y-4 text-lg text-white/90 font-['El_Messiri']">
                <li className="flex items-start gap-3">
                  <span className="bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                  Share your campaign objectives, audience profile, and preferred platforms.
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                  Approve the content calendar including scripts, carousel copy, and reel concepts.
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                  Launch with synchronized on-air mentions, livestream cues, and social teasers.
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                  Review analytics with our team and plan the next burst.
                </li>
              </ol>
            </div>
          </div>
          <div className="rounded-3xl bg-white/80 backdrop-blur-lg p-8 shadow-2xl border border-orange-100">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-gray-900 font-['El_Messiri']">Media Kit Download</h3>
                <p className="text-gray-600 font-['El_Messiri'] text-lg">Get pricing and specs</p>
              </div>
              <p className="text-lg text-gray-700 font-['El_Messiri'] leading-relaxed">
                Need detailed rate cards, audience splits, and sample creative? Request the Glow FM media kit and we will deliver it straight to your inbox.
              </p>
              <GlowButton asChild size="lg" variant="accent" className="mt-8 uppercase tracking-[0.3em] font-['El_Messiri'] font-bold transform hover:scale-105 transition-all duration-300">
                <Link href="mailto:marketing@glowfmradio.com?subject=Glow%20FM%20Media%20Kit%20Request">Email for media kit</Link>
              </GlowButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}






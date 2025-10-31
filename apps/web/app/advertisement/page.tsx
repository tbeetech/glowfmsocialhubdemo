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
    <div className="min-h-screen text-gray-900">
      <div className="space-y-16">
        <AnimatedSection className="rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 p-6 text-white shadow-xl sm:p-8 mx-4">
          <div className="space-y-5 sm:space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/90 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
              Grow With Glow FM
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl font-['El_Messiri']">Advertising and Sales Acceleration</h1>
            <p className="max-w-3xl text-sm text-white/90 sm:text-base md:text-lg font-['El_Messiri'] font-semibold">
              Glow FM combines radio storytelling, social-first content, and data dashboards to drive measurable results for your business. Choose a package, plug into our creative team, and watch your numbers climb.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <GlowButton asChild size="lg" variant="accent" className="uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                <Link href="/contact">Book a strategy call</Link>
              </GlowButton>
              <GlowButton
                asChild
                size="lg"
                variant="ghost"
                className="border-white/30 text-white uppercase tracking-[0.2em] sm:tracking-[0.3em]"
              >
                <Link href="/social-media">Preview social inventory</Link>
              </GlowButton>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-8 mx-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 font-['El_Messiri']">Choose a Glow FM Growth Package</h2>
              <p className="text-sm text-gray-600 font-['El_Messiri'] font-semibold">
                Toggle currencies, review deliverables, and match the plan that fits your current campaign ambitions.
              </p>
            </div>
            <div className="flex gap-2 rounded-full border border-orange-300 bg-gray-50 p-1 text-[11px] uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.35em]">
              <GlowButton variant={currency === "NGN" ? "accent" : "ghost"} size="sm" onClick={() => setCurrency("NGN")}>
                {currency === "NGN" ? "Billing in ₦" : "Bill in ₦"}
              </GlowButton>
              <GlowButton variant={currency === "USD" ? "accent" : "ghost"} size="sm" onClick={() => setCurrency("USD")}>
                {currency === "USD" ? "Billing in $" : "Bill in $"}
              </GlowButton>
            </div>
          </div>
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {adPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="rounded-3xl bg-gray-50 p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                      <p className="text-sm text-gray-600">{pkg.deliverables}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-700">{pkg.headline}</p>
                    <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 shadow-inner">
                      <p className="text-3xl font-bold text-orange-600">
                        {currencySymbol[currency]}
                        {formatter.format(pkg.price[currency])}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-gray-500 sm:text-xs sm:tracking-[0.35em]">
                        per 4-week burst
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-orange-600 sm:text-xs sm:tracking-[0.35em]">
                        What you gain
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {pkg.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-gray-500 sm:text-xs sm:tracking-[0.35em]">
                        Mind the gaps
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {pkg.gaps.map((gap) => (
                          <li key={gap} className="flex items-start gap-2">
                            <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                            <span>{gap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <GlowButton
                      asChild
                      size="sm"
                      variant="accent"
                      className="w-full justify-center uppercase tracking-[0.2em] sm:tracking-[0.3em]"
                    >
                      <Link href={`/contact?interest=${encodeURIComponent(pkg.name)}`}>Reserve this package</Link>
                    </GlowButton>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl bg-gray-50 p-6 shadow-lg">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Compare packages at a glance</h3>
                  <p className="text-gray-600">See what&apos;s bundled and where upgrades apply.</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-left text-sm text-gray-700">
                    <thead>
                      <tr className="text-xs uppercase tracking-[0.24em] text-gray-500">
                        <th scope="col" className="pb-4 pr-4 font-normal">
                          Deliverables
                        </th>
                        {PLAN_NAMES.map((plan) => (
                          <th key={plan} scope="col" className="pb-4 pr-4 font-normal text-right sm:text-center">
                            {plan}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {planComparison.map((row) => (
                        <tr key={row.feature} className="align-top">
                          <th scope="row" className="py-4 pr-4 text-left font-medium text-gray-900">
                            <span>{row.feature}</span>
                            {row.helper && (
                              <span className="mt-1 block text-[11px] text-gray-500">
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
                              <td key={plan} className="py-4 pr-4 text-right sm:text-center">
                                <span
                                  className={`inline-flex min-w-[96px] justify-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs ${className}`}
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
                <p className="mt-4 text-[11px] text-gray-500 sm:text-xs">
                  Upgrade any plan with add-ons, or snap in premium experiential elements from Branded Experience.
                </p>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-gray-500 sm:text-xs">
            Need a custom mix? Email{" "}
            <a className="underline decoration-dotted text-orange-600" href="mailto:marketing@glowfmradio.com">
              marketing@glowfmradio.com
            </a>{" "}
            for bespoke media plans, bundle discounts, and multi-city roadshows.
          </p>
        </AnimatedSection>

        <AnimatedSection className="space-y-8 mx-4">
          <h2 className="text-3xl font-semibold text-gray-900">Why Advertisers Choose Glow FM</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {salesBoosters.map((item) => (
              <div key={item.title} className="rounded-3xl bg-gray-50 p-6 shadow-lg">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.summary}</p>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-orange-600 sm:text-xs sm:tracking-[0.35em]">
                    {item.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-8 mx-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">Proof in Numbers</h2>
              <p className="text-sm text-gray-600">
                Plug in your brand and adapt these case notes with fresh metrics after each campaign.
              </p>
            </div>
            <GlowButton asChild variant="secondary" size="sm">
              <Link href="/blog">Read campaign breakdowns</Link>
            </GlowButton>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <div key={study.brand} className="rounded-3xl bg-gray-50 p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{study.brand}</h3>
                    <p className="text-sm text-orange-600 font-medium">{study.channel}</p>
                  </div>
                  <p className="text-sm text-gray-700">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid gap-6 lg:grid-cols-[1.2fr,1fr] mx-4 pb-16">
          <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white shadow-lg">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Campaign Blueprint</h3>
                <p className="text-white/90">Your onboarding checklist</p>
              </div>
              <ol className="space-y-3 text-sm text-white/90">
                <li>1. Share your campaign objectives, audience profile, and preferred platforms.</li>
                <li>2. Approve the content calendar including scripts, carousel copy, and reel concepts.</li>
                <li>3. Launch with synchronized on-air mentions, livestream cues, and social teasers.</li>
                <li>4. Review analytics with our team and plan the next burst.</li>
              </ol>
            </div>
          </div>
          <div className="rounded-3xl bg-gray-50 p-6 shadow-lg">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Media Kit Download</h3>
                <p className="text-gray-600">Get pricing and specs</p>
              </div>
              <p className="text-sm text-gray-700">
                Need detailed rate cards, audience splits, and sample creative? Request the Glow FM media kit and we will deliver it straight to your inbox.
              </p>
              <GlowButton asChild size="sm" variant="ghost" className="mt-6 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                <Link href="mailto:marketing@glowfmradio.com?subject=Glow%20FM%20Media%20Kit%20Request">Email for media kit</Link>
              </GlowButton>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}






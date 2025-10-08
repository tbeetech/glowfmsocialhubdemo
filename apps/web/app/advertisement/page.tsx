'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
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
type PlanName = (typeof PLAN_NAMES)[number];

type Inclusion = "included" | "addon" | "premium" | "no";

const planComparison: Array<{
  feature: string;
  availability: Record<PlanName, Inclusion>;
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

const inclusionConfig: Record<
  Inclusion,
  {
    label: string;
    className: string;
  }
> = {
  included: { label: "Included", className: "bg-glow-secondary/20 text-glow-secondary border-glow-secondary/40" },
  premium: { label: "Full suite", className: "bg-glow-primary/25 text-glow-primary border-glow-primary/40" },
  addon: { label: "Add-on", className: "bg-white/10 text-white/80 border-white/15" },
  no: { label: "—", className: "border-white/10 bg-transparent text-white/45" }
};

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
    <div className="space-y-16">
      <AnimatedSection className="rounded-3xl bg-glow-hero p-6 text-white shadow-glow-emphasis sm:p-8">
        <div className="space-y-5 sm:space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/80 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
            Grow With Glow FM
          </span>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Advertising and Sales Acceleration</h1>
          <p className="max-w-3xl text-sm text-white/80 sm:text-base md:text-lg">
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

      <AnimatedSection className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Choose a Glow FM Growth Package</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Toggle currencies, review deliverables, and match the plan that fits your current campaign ambitions.
            </p>
          </div>
          <div className="flex gap-2 rounded-full border border-glow-primary/40 bg-white/5 p-1 text-[11px] uppercase tracking-[0.24em] dark:bg-white/10 sm:text-xs sm:tracking-[0.35em]">
            <GlowButton variant={currency === "NGN" ? "accent" : "ghost"} size="sm" onClick={() => setCurrency("NGN")}>
              {currency === "NGN" ? "Billing in \u20A6" : "Bill in \u20A6"}
            </GlowButton>
            <GlowButton variant={currency === "USD" ? "accent" : "ghost"} size="sm" onClick={() => setCurrency("USD")}>
              {currency === "USD" ? "Billing in $" : "Bill in $"}
            </GlowButton>
          </div>
        </div>
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {adPackages.map((pkg) => (
              <GlowCard
                key={pkg.name}
                title={pkg.name}
                description={pkg.deliverables}
                headerClassName="bg-transparent px-6 pt-6 pb-3 text-white/80"
                className="plan-card group"
              >
                <div className="plan-card__inner space-y-5">
                  <p className="text-sm font-medium text-white/90">{pkg.headline}</p>
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-inner shadow-white/20 transition duration-500 group-hover:border-glow-primary/60 group-hover:shadow-[0_25px_60px_-45px_rgba(123,97,255,0.9)]">
                    <p className="text-3xl font-bold text-glow-accent">
                      {currencySymbol[currency]}
                      {formatter.format(pkg.price[currency])}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-white/70 sm:text-xs sm:tracking-[0.35em]">
                      per 4-week burst
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-glow-accent sm:text-xs sm:tracking-[0.35em]">
                      What you gain
                    </p>
                    <ul className="space-y-2 text-sm text-white/85">
                      {pkg.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-glow-accent/80" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/60 sm:text-xs sm:tracking-[0.35em]">
                      Mind the gaps
                    </p>
                    <ul className="space-y-2 text-sm text-white/70">
                      {pkg.gaps.map((gap) => (
                        <li key={gap} className="flex items-start gap-2">
                          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-white/40" />
                          <span>{gap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <GlowButton
                    asChild
                    size="sm"
                    variant="accent"
                    className="w-full justify-center rounded-2xl bg-gradient-to-r from-glow-primary to-glow-accent uppercase tracking-[0.2em] shadow-[0_16px_45px_-20px_rgba(123,97,255,0.95)] transition duration-500 hover:shadow-[0_24px_60px_-20px_rgba(97,193,255,0.75)] sm:tracking-[0.3em]"
                  >
                    <Link href={`/contact?interest=${encodeURIComponent(pkg.name)}`}>Reserve this package</Link>
                  </GlowButton>
                </div>
              </GlowCard>
            ))}
          </div>
          <GlowCard
            title="Compare packages at a glance"
            description="See what's bundled and where upgrades apply."
            className="shadow-glow-soft"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm text-[var(--foreground)]/80 dark:text-white/80">
                <thead>
                  <tr className="text-xs uppercase tracking-[0.24em] text-[var(--foreground)]/60 dark:text-white/60">
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
                <tbody className="divide-y divide-white/10">
                  {planComparison.map((row) => (
                    <tr key={row.feature} className="align-top">
                      <th scope="row" className="py-4 pr-4 text-left font-medium text-[var(--foreground)] dark:text-white">
                        <span>{row.feature}</span>
                        {row.helper && (
                          <span className="mt-1 block text-[11px] text-[var(--foreground)]/60 dark:text-white/60">
                            {row.helper}
                          </span>
                        )}
                      </th>
                      {PLAN_NAMES.map((plan) => {
                        const inclusion = row.availability[plan];
                        const { label, className } = inclusionConfig[inclusion];
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
            <p className="mt-4 text-[11px] text-[var(--foreground)]/60 dark:text-white/60 sm:text-xs">
              Upgrade any plan with add-ons, or snap in premium experiential elements from Branded Experience.
            </p>
          </GlowCard>
        </div>
        <p className="text-[11px] text-[var(--foreground)]/60 dark:text-white/60 sm:text-xs">
          Need a custom mix? Email{" "}
          <a className="underline decoration-dotted" href="mailto:social@glow991fm.com">
            social@glow991fm.com
          </a>{" "}
          for bespoke media plans, bundle discounts, and multi-city roadshows.
        </p>
      </AnimatedSection>

      <AnimatedSection className="space-y-8">
        <h2 className="text-3xl font-semibold">Why Advertisers Choose Glow FM</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {salesBoosters.map((item) => (
            <GlowCard key={item.title} title={item.title}>
              <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">{item.summary}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-glow-secondary sm:text-xs sm:tracking-[0.35em]">
                {item.impact}
              </p>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Proof in Numbers</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Plug in your brand and adapt these case notes with fresh metrics after each campaign.
            </p>
          </div>
          <GlowButton asChild variant="secondary" size="sm">
            <Link href="/blog">Read campaign breakdowns</Link>
          </GlowButton>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <GlowCard key={study.brand} title={study.brand} description={study.channel} className="shadow-glow-soft">
              <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">{study.result}</p>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <GlowCard title="Campaign Blueprint" description="Your onboarding checklist" headerClassName="bg-gradient-to-r from-glow-secondary to-glow-primary" className="shadow-glow-emphasis">
          <ol className="space-y-3 text-sm text-[var(--foreground)]/80 dark:text-white/80">
            <li>Share your campaign objectives, audience profile, and preferred platforms.</li>
            <li>Approve the content calendar including scripts, carousel copy, and reel concepts.</li>
            <li>Launch with synchronized on-air mentions, livestream cues, and social teasers.</li>
            <li>Review analytics with our team and plan the next burst.</li>
          </ol>
        </GlowCard>
        <GlowCard title="Media Kit Download" description="Get pricing and specs" className="shadow-glow-soft">
          <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">
            Need detailed rate cards, audience splits, and sample creative? Request the Glow FM media kit and we will deliver it straight to your inbox.
          </p>
          <GlowButton asChild size="sm" variant="ghost" className="mt-6 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            <Link href="mailto:social@glow991fm.com?subject=Glow%20FM%20Media%20Kit%20Request">Email for media kit</Link>
          </GlowButton>
        </GlowCard>
      </AnimatedSection>
    </div>
  );
}






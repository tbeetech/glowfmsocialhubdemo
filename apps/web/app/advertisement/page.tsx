import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowButton } from "@/components/ui/GlowButton";

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

export default function AdvertisementPage() {
  return (
    <div className="space-y-16">
      <AnimatedSection className="rounded-3xl bg-glow-hero p-8 text-white shadow-glow-emphasis">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
            Grow With Glow FM
          </span>
          <h1 className="text-4xl font-bold md:text-5xl">Advertising and Sales Acceleration</h1>
          <p className="max-w-3xl text-base text-white/80 md:text-lg">
            Glow FM combines radio storytelling, social-first content, and data dashboards to drive measurable results for your business. Choose a package, plug into our creative team, and watch your numbers climb.
          </p>
          <div className="flex flex-wrap gap-4">
            <GlowButton asChild size="lg" variant="accent" className="uppercase tracking-[0.3em]">
              <Link href="/contact">Book a strategy call</Link>
            </GlowButton>
            <GlowButton asChild size="lg" variant="ghost" className="border-white/30 text-white uppercase tracking-[0.3em]">
              <Link href="/social-media">Preview social inventory</Link>
            </GlowButton>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-8">
        <h2 className="text-3xl font-semibold">Why Advertisers Choose Glow FM</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {salesBoosters.map((item) => (
            <GlowCard key={item.title} title={item.title}>
              <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">{item.summary}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.35em] text-glow-secondary">{item.impact}</p>
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
          <GlowButton asChild size="sm" variant="ghost" className="mt-6 uppercase tracking-[0.3em]">
            <Link href="mailto:social@glow991fm.com?subject=Glow%20FM%20Media%20Kit%20Request">Email for media kit</Link>
          </GlowButton>
        </GlowCard>
      </AnimatedSection>
    </div>
  );
}


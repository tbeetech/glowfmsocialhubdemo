import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { CountdownClock } from "@/components/CountdownClock";
import { NextPrograms } from "@/components/NextPrograms";
import type { ProgramSlot } from "@/components/NextPrograms";
import { Facebook } from "lucide-react";
import { FollowBar } from "@/components/FollowBar";

const showLineup = [
  {
    name: "Ijinle Odu",
    slot: "Mondays 5:00 AM - 7:00 AM",
    host: "Onikale and Abeni",
    description: "Deep Yoruba storytelling that bridges heritage, music, and modern campus energy.",
    image: "https://drive.google.com/uc?id=1u314QJsKt0Qq-r7yXQNI6Mn7X-BNpG-L",
    facebookUrl: "https://facebook.com/glow991fm/live_ijinle"
  },
  {
    name: "Kayefi Nla",
    slot: "Tuesdays 7:00 PM - 9:00 PM",
    host: "DJ Kayefi",
    description: "Mystery topics, supernatural tales, and late night confessions with immersive sound design.",
    image: "https://drive.google.com/uc?id=1yKl0ov8OO0KmiYvc4bD4aZEI2DSeuNxV",
    facebookUrl: "https://facebook.com/glow991fm/live_kayefi"
  },
  {
    name: "Glow Kiddies",
    slot: "Saturdays 8:00 AM - 9:30 AM",
    host: "Auntie Mimi",
    description: "Interactive games, kiddie quizzes, and animated lessons for the youngest Glow tribe.",
    image: "https://drive.google.com/uc?id=1hrSbf2AevuyvMGWar6LemcLwhJe2Uaon",
    facebookUrl: "https://facebook.com/glow991fm/live_kiddies"
  },
  {
    name: "Glow FM Connect",
    slot: "Weekdays 12:00 PM - 2:00 PM",
    host: "The Social Desk",
    description: "Live social mentions, audience shout-outs, and trending stories from the Glow digital squad.",
    image: "https://drive.google.com/uc?id=1o5YzG2EWLmbiInmxYOVHCO14aMTO2026",
    facebookUrl: "https://facebook.com/glow991fm/live_connect"
  },
  {
    name: "Double Joy of Sports",
    slot: "Wednesdays 6:00 PM - 7:30 PM",
    host: "Coach Double J",
    description: "Crunch stats, fan debates, and highlight reels from campus and pro leagues.",
    image: "https://drive.google.com/uc?id=1C3mnbxEjArt89znHxInPIuJFY3Zdpkwy",
    facebookUrl: "https://facebook.com/glow991fm/live_sports"
  },
  {
    name: "Political Hangout",
    slot: "Thursdays 8:00 PM - 9:00 PM",
    host: "Gloria and The Roundtable",
    description: "Policy breakdowns and youth town hall conversations that keep power accountable.",
    image: "https://drive.google.com/uc?id=1dKSt9NnUP9OPsK7ilR_p-oRb5tMURI_S",
    facebookUrl: "https://facebook.com/glow991fm/live_politics"
  },
  {
    name: "Issues in the Dailies",
    slot: "Weekdays 9:00 AM - 10:00 AM",
    host: "The Newsroom",
    description: "Sharp press reviews, fact checks, and social reaction threads with the Glow editorial team.",
    image: "https://drive.google.com/uc?id=1jLRDaHpsjwFFnsVBR0fkpS6hDSsY6X3z",
    facebookUrl: "https://facebook.com/glow991fm/live_dailies"
  },
  {
    name: "Women's World",
    slot: "Sundays 5:00 PM - 6:30 PM",
    host: "The Sisterhood",
    description: "Spotlighting women trailblazers, wellness experts, and community advocates.",
    image: "https://drive.google.com/uc?id=1T-ursMUFLmU7tGRLl03yk-dKwGpF8-UK",
    facebookUrl: "https://facebook.com/glow991fm/live_women"
  }
];

const WHATSAPP_BROADCAST_LINK = "https://chat.whatsapp.com/BZvP92OCqir0cahZUlSYgI";

const programSchedule: ProgramSlot[] = [
  {
    title: "Ijinle Odu",
    description: "Deep Yoruba storytelling that bridges heritage, music, and modern campus energy.",
    hosts: "Onikale and Abeni",
    startTime: "05:00",
    durationMinutes: 120,
    days: [1],
    ctaHref: "https://www.facebook.com/Glowfm/live_ijinle"
  },
  {
    title: "Kayefi Nla",
    description: "Mystery topics, supernatural tales, and late night confessions with immersive sound design.",
    hosts: "DJ Kayefi",
    startTime: "19:00",
    durationMinutes: 120,
    days: [2],
    ctaHref: "https://www.facebook.com/Glowfm/live_kayefi"
  },
  {
    title: "Glow Kiddies",
    description: "Interactive games, kiddie quizzes, and animated lessons for the youngest Glow tribe.",
    hosts: "Auntie Mimi",
    startTime: "08:00",
    durationMinutes: 90,
    days: [6],
    ctaHref: "https://www.facebook.com/Glowfm/live_kiddies"
  },
  {
    title: "Glow FM Connect",
    description: "Live social mentions, audience shout-outs, and trending stories from the Glow digital squad.",
    hosts: "The Social Desk",
    startTime: "12:00",
    durationMinutes: 120,
    days: [1, 2, 3, 4, 5],
    ctaHref: "https://www.facebook.com/Glowfm/live_connect"
  },
  {
    title: "Double Joy of Sports",
    description: "Crunch stats, fan debates, and highlight reels from campus and pro leagues.",
    hosts: "Coach Double J",
    startTime: "18:00",
    durationMinutes: 90,
    days: [3],
    ctaHref: "https://www.facebook.com/Glowfm/live_sports"
  },
  {
    title: "Political Hangout",
    description: "Policy breakdowns and youth town hall conversations that keep power accountable.",
    hosts: "Gloria and The Roundtable",
    startTime: "20:00",
    durationMinutes: 60,
    days: [4],
    ctaHref: "https://www.facebook.com/Glowfm/live_politics"
  },
  {
    title: "Issues in the Dailies",
    description: "Sharp press reviews, fact checks, and social reaction threads with the Glow editorial team.",
    hosts: "The Newsroom",
    startTime: "09:00",
    durationMinutes: 60,
    days: [1, 2, 3, 4, 5],
    ctaHref: "https://www.facebook.com/Glowfm/live_dailies"
  },
  {
    title: "Women's World",
    description: "Spotlighting women trailblazers, wellness experts, and community advocates.",
    hosts: "The Sisterhood",
    startTime: "17:00",
    durationMinutes: 90,
    days: [0],
    ctaHref: "https://www.facebook.com/Glowfm/live_women"
  }
];

const emberChecklist = [
  "Follow Glow FM across Facebook, Instagram, TikTok, X, and YouTube.",
  "Repost any of our Facebook or Instagram promos and tag @glow991fm.",
  "Send your full name and phone number via the contact form or WhatsApp hotline.",
  "Stay tuned to 99.1 FM and Facebook Live during the Thursday 5:00 PM draw for your invite."
];

const socialProof = [
  { stat: "120K+", label: "Monthly social reach" },
  { stat: "45%", label: "Audience growth in 2024" },
  { stat: "3.5M", label: "Video impressions" }
];

export default function Home() {
  return (
    <div className="space-y-16" id="top">
      <AnimatedSection className="rounded-3xl bg-glow-hero p-8 text-white shadow-glow-emphasis">
        <div className="grid gap-10 md:grid-cols-[1.5fr,1fr] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
              Social Media Powerhouse
            </span>
            <h1 className="text-4xl font-bold md:text-5xl xl:text-6xl">
              Glow FM Social Hub and Ember Challenge Command Center
            </h1>
            <p className="max-w-2xl text-base text-white/80 md:text-lg">
              Celebrate our digital wins, track live programming, and explore sponsorship-ready advertising campaigns engineered by the Glow social media squad. Everything you need to follow, repost, and win with 99.1 FM lives here.
            </p>
            <div className="flex flex-wrap gap-4">
              <GlowButton size="lg" variant="accent" className="uppercase tracking-[0.3em]" asChild>
                <a href="#ember-how-to">Join the Ember Challenge</a>
              </GlowButton>
              <GlowButton asChild size="lg" variant="ghost" className="border-white/30 text-white uppercase tracking-[0.3em]">
                <Link href="/social-media">Explore Social Spotlight</Link>
              </GlowButton>
            </div>
            <FollowBar />
          </div>
          <div className="flex min-h-[320px] flex-col justify-between rounded-3xl border border-white/15 bg-black/70 p-8 shadow-2xl backdrop-blur">
            <div className="space-y-2 text-sm text-white/80">
              <p className="font-display text-lg uppercase tracking-[0.4em] text-white/70">Live Countdown</p>
              <p className="text-2xl font-semibold text-white">Ember Challenge Kickoff goes on November 3rd 6:00 PM.</p>
              <p className="text-white/60">Prep your entries, align your promos, and meet us on the Facebook livestream.</p>
            </div>
            <CountdownClock
              target="2024-11-03T18:00:00+01:00"
              className="mt-6"
              labels={{ days: "Days left", hours: "Hours", minutes: "Minutes", seconds: "Seconds" }}
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="ember-how-to" delay={0.05} className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
        <GlowCard
          title="How to Get on the Ember Challenge Stage"
          description="Your weekly playbook for the 250k grand prize"
          headerClassName="bg-gradient-to-br from-glow-primary via-glow-accent to-glow-secondary"
          className="shadow-glow-emphasis"
          actions={
            <GlowButton asChild size="sm" variant="accent">
              <a href={WHATSAPP_BROADCAST_LINK} target="_blank" rel="noreferrer">
                Join WhatsApp broadcast
              </a>
            </GlowButton>
          }
        >
          <div className="space-y-4 text-sm text-[var(--foreground)]/80 dark:text-white/80">
            <p>
              Each week our social editors showcase the hottest mixes, spoken word pieces, skits, and on-air callers. Complete the checklist below, submit your details, and you could be our next featured finalist.
            </p>
            <ol className="grid gap-3 text-sm md:grid-cols-2">
              {emberChecklist.map((item) => (
                <li key={item} className="rounded-2xl border border-black/10 bg-white/80 p-4 text-[var(--foreground)] shadow-sm transition dark:border-white/15 dark:bg-white/10 dark:text-white">
                  {item}
                </li>
              ))}
            </ol>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-glow-accent">
              <span className="rounded-full bg-glow-accent/10 px-4 py-2">#GlowEmber</span>
              <span className="rounded-full bg-glow-secondary/15 px-4 py-2">Weekly winners announced on air</span>
              <span className="rounded-full bg-white/10 px-4 py-2">Grand prize: Laptop worth 250k</span>
            </div>
          </div>
        </GlowCard>

        <GlowCard title="Glow Community Pulse" description="Data from the social newsroom" className="shadow-glow-soft">
          <div className="grid gap-4 text-sm text-[var(--foreground)]/80 dark:text-white/80">
            {socialProof.map((item) => (
              <div key={item.label} className="rounded-2xl border border-glow-accent/20 bg-white/10 p-4 text-center dark:bg-white/5">
                <p className="text-3xl font-semibold text-glow-accent">{item.stat}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em]">{item.label}</p>
              </div>
            ))}
          </div>
          <GlowButton asChild size="sm" variant="ghost" className="mt-6">
            <Link href="/advertisement">See partnership decks</Link>
          </GlowButton>
        </GlowCard>
      </AnimatedSection>

      <AnimatedSection id="calendar" delay={0.1} className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Announcements and Calendar Highlights</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Track the next broadcasts, pop-up events, and digital campaigns curated by the Glow social media crew.
            </p>
          </div>
          <GlowButton size="sm" variant="ghost" disabled className="cursor-not-allowed opacity-60">
            Blog updates coming soon
          </GlowButton>
        </div>
        <NextPrograms schedule={programSchedule} />
      </AnimatedSection>

      <AnimatedSection id="shows" delay={0.15} className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Signature On-Air and Live Shows</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Meet the programs driving our biggest social traction. Tap any card to join the livestream on Facebook.
            </p>
          </div>
          <GlowButton asChild variant="secondary" size="sm" className="gap-2">
            <Link href="https://www.facebook.com/Glowfm/" target="_blank" rel="noreferrer">
              <Facebook className="h-4 w-4" aria-hidden />
              Follow our Facebook Live hub
            </Link>
          </GlowButton>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {showLineup.map((show) => (
            <GlowCard key={show.name} title={show.name} description={show.slot}>
              <div className="space-y-4">
                <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10">
                  <Image src={show.image} alt={show.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 320px" loading="lazy" />
                </div>
                <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">{show.description}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-glow-secondary">Hosted by {show.host}</p>
                <GlowButton asChild size="sm" className="uppercase tracking-[0.25em]">
                  <a href={show.facebookUrl} target="_blank" rel="noreferrer">
                    Watch on Facebook Live
                  </a>
                </GlowButton>
              </div>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="engage" delay={0.2} className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <GlowCard
          title="Content Submission and Listener Call-ins"
          description="Spark a feature across radio and social"
          headerClassName="bg-gradient-to-r from-glow-secondary to-glow-primary"
          className="shadow-glow-emphasis"
        >
          <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">
            Share your story ideas, promo clips, and campus scoops. The Glow newsroom curates social-first stories for radio, YouTube spotlights, and newsletter mentions every week.
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-glow-accent/10 text-xs font-semibold text-glow-accent">1</span>
              <span>Fill out the guided form on our Contact page or drop a WhatsApp voice note.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-glow-accent/10 text-xs font-semibold text-glow-accent">2</span>
              <span>Producers curate weekly playlists and send you a confirmation tag when you are shortlisted.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-glow-accent/10 text-xs font-semibold text-glow-accent">3</span>
              <span>Join the live call-in or studio session when the social team schedules your segment.</span>
            </li>
          </ul>
          <GlowButton size="lg" className="mt-6 uppercase tracking-[0.35em]" asChild>
            <Link href="/contact">Submit a story</Link>
          </GlowButton>
        </GlowCard>

        <GlowCard title="Need campaign support?" description="We build launchpads for brands" className="shadow-glow-soft">
          <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">
            From promoted shout-outs to cross-platform livestream takeovers, our advertising unit maps audience insights to boost your sales outcomes.
          </p>
          <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.35em] text-glow-secondary">
            <li>Branded livestream overlays</li>
            <li>Campus ambassador takeovers</li>
            <li>Weekly conversion reporting</li>
          </ul>
          <GlowButton size="sm" variant="ghost" className="mt-6" asChild>
            <Link href="/advertisement">Book a strategy session</Link>
          </GlowButton>
        </GlowCard>
      </AnimatedSection>
    </div>
  );
}

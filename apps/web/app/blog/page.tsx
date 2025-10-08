import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowButton } from "@/components/ui/GlowButton";

interface FeaturedPost {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readingTime: string;
  slug: string;
  highlights: string[];
  ctaHref: string;
  ctaLabel: string;
}

const featuredPosts: FeaturedPost[] = [
  {
    title: "Glow Ember Challenge: Meet the Week 3 Finalists",
    excerpt:
      "The digital team spotlights the top performances, audience sentiment, and the campaign tactics behind this week's leaderboard.",
    category: "Campaigns",
    author: "Glow Digital Team",
    readingTime: "6 min read",
    slug: "ember-week-three",
    highlights: [
      "DJ Kayefi's midnight confession booth unlocked a 32% spike in WhatsApp submissions and 18,000 reel reactions.",
      "The Glow Kiddies x Ember mash-up sparked a family-friendly vote surge with over 3,400 campus IP addresses verified.",
      "Audience prompts across Instagram Stories delivered 1,200 direct replies, now queued for on-air shout-outs."
    ],
    ctaHref: "https://facebook.com/glow991fm/live_challenge",
    ctaLabel: "Watch the recap stream"
  },
  {
    title: "Campus Culture Street Jam Preview",
    excerpt:
      "Vendors, influencer routes, and the neon stage plan for Glow FM's travelling block party rolling into Federal University of Technology Akure.",
    category: "Events",
    author: "Glow Lifestyle Desk",
    readingTime: "4 min read",
    slug: "campus-culture-street-jam",
    highlights: [
      "Thirteen food, fashion, and tech pop-ups confirmed—with NFC checkout support courtesy of Glow Pay partners.",
      "Influencer shuttle begins at 12:30 PM with TikTok creator Sammie Fresher hosting backstage moments for live stitch content.",
      "LED tunnel stage debuts the new Glow FM live playback system with synchronized countdowns and audience polls."
    ],
    ctaHref: "https://instagram.com/stories/glow991fm",
    ctaLabel: "Grab the wristband guide"
  },
  {
    title: "Advertiser Lab: Playbook for Festive Season Sales",
    excerpt:
      "Three data-backed quick wins for retail teams planning end-of-year promos with Glow FM's omnichannel studio.",
    category: "Business",
    author: "Glow Partnerships",
    readingTime: "5 min read",
    slug: "advertiser-lab-festive",
    highlights: [
      "Campus Tech Hub sold through 40 laptops in three weeks by syncing livestream demos with WhatsApp reminders.",
      "Glow Bites Cafe doubled lunchtime deliveries after a 10-day Instagram carousel plus drive-time jingle combo.",
      "City Fitness hit their membership target early via Women's World takeovers and X threads featuring trainers."
    ],
    ctaHref: "/advertisement",
    ctaLabel: "Book a sales strategy session"
  }
];

const newsroomNotes = [
  {
    title: "Glow Kiddies Fan Art Winners",
    summary:
      "Visitor-submitted illustrations of Saturday morning tales now power our carousel content—see this week's winning trio and grab social-ready assets.",
    anchor: "family",
    link: "https://www.instagram.com/glow991fm/reels/",
    linkLabel: "Download the carousel bundle"
  },
  {
    title: "Political Hangout Fact Sheet",
    summary:
      "Key legislation explained in plain language, embedded comments from campus policy clubs, and the verified sources we shared on air.",
    anchor: "civic",
    link: "https://x.com/glow991fm",
    linkLabel: "Join the civic thread"
  },
  {
    title: "Wellness Wednesday Playlist",
    summary:
      "Women's World hosts curate a 12-track reset featuring Afro-soul reworks and meditations you can save straight to Spotify.",
    anchor: "wellness",
    link: "https://open.spotify.com/playlist/0uGlowFMWellness",
    linkLabel: "Stream the playlist"
  },
  {
    title: "Engineering the Glow Sound",
    summary:
      "Our audio lab shares the Dolby Atmos-inspired routing that keeps livestreams crisp even during pop-up broadcasts.",
    anchor: "production",
    link: "https://www.youtube.com/@glow991fm",
    linkLabel: "Watch the studio tour"
  }
];

export default function BlogPage() {
  return (
    <div className="space-y-16">
      <AnimatedSection className="rounded-3xl bg-glow-hero p-6 text-white shadow-glow-emphasis sm:p-8">
        <div className="space-y-5 sm:space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/80 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
            Glow Newsroom
          </span>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Stories Amplifying the Glow Tribe</h1>
          <p className="max-w-3xl text-sm text-white/80 sm:text-base md:text-lg">
            Dive into the campaigns, campus moments, and advertiser wins shaping Glow 99.1 FM. Every feature below is ready
            for press, social sharing, or executive summaries—no placeholders, just newsroom-grade copy.
          </p>
          <GlowButton asChild size="lg" variant="accent" className="uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            <Link href="/contact?interest=Editorial%20Spotlight">Pitch the editorial desk</Link>
          </GlowButton>
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Featured Stories</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Curated for sponsors, stakeholders, and superfans who need the latest Glow FM impact highlights.
            </p>
          </div>
          <GlowButton asChild variant="ghost" size="sm" className="uppercase tracking-[0.2em]">
            <Link href="#newsroom-dossier">Download newsroom dossier</Link>
          </GlowButton>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <GlowCard
              key={post.title}
              title={post.title}
              description={`${post.category} · ${post.readingTime}`}
              className="shadow-glow-soft"
              actions={
                <GlowButton asChild size="sm" variant="accent" className="uppercase tracking-[0.2em]">
                  <Link href={`#${post.slug}`}>Read summary</Link>
                </GlowButton>
              }
            >
              <div className="space-y-4 text-sm text-[var(--foreground)]/80 dark:text-white/80">
                <p>{post.excerpt}</p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-glow-secondary sm:text-xs sm:tracking-[0.3em]">
                  By {post.author}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="featured-dossiers" className="space-y-6">
        {featuredPosts.map((post) => (
          <GlowCard
            key={post.slug}
            title={post.title}
            description={`${post.category} · ${post.readingTime}`}
            className="shadow-glow-emphasis"
          >
            <div id={post.slug} className="space-y-4 text-sm text-[var(--foreground)]/80 dark:text-white/80">
              <p>{post.excerpt}</p>
              <ul className="space-y-2 text-sm">
                {post.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-glow-accent/80" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <GlowButton asChild size="sm" variant="ghost" className="uppercase tracking-[0.2em]">
                <Link href={post.ctaHref} target={post.ctaHref.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {post.ctaLabel}
                </Link>
              </GlowButton>
            </div>
          </GlowCard>
        ))}
      </AnimatedSection>

      <AnimatedSection className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Newsroom Notes</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Bite-size updates ready for newsletter embeds, social snippets, or board reports.
            </p>
          </div>
          <GlowButton asChild variant="secondary" size="sm" id="newsroom-dossier" className="uppercase tracking-[0.2em]">
            <Link href="/advertisement">Partner media kit</Link>
          </GlowButton>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {newsroomNotes.map((note) => (
            <GlowCard key={note.title} title={note.title} description={note.anchor} className="shadow-glow-soft">
              <div className="space-y-3 text-sm text-[var(--foreground)]/80 dark:text-white/80">
                <p>{note.summary}</p>
                <GlowButton asChild size="sm" variant="ghost" className="uppercase tracking-[0.2em]">
                  <Link href={note.link} target="_blank" rel="noreferrer">
                    {note.linkLabel}
                  </Link>
                </GlowButton>
              </div>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

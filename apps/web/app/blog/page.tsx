import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
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
    <div className="min-h-screen bg-white text-gray-900">
      <div className="space-y-16">
        <AnimatedSection className="rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 p-6 text-white shadow-xl sm:p-8">
          <div className="space-y-5 sm:space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/90 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
              Glow Newsroom
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Stories Amplifying the Glow Tribe</h1>
            <p className="max-w-3xl text-sm text-white/90 sm:text-base md:text-lg">
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
              <h2 className="text-3xl font-semibold text-gray-900">Featured Stories</h2>
              <p className="text-sm text-gray-600">
                Curated for sponsors, stakeholders, and superfans who need the latest Glow FM impact highlights.
              </p>
            </div>
            <GlowButton asChild variant="ghost" size="sm" className="uppercase tracking-[0.2em]">
              <Link href="#newsroom-dossier">Download newsroom dossier</Link>
            </GlowButton>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <div
                key={post.title}
                className="rounded-3xl bg-gray-50 p-6 shadow-lg"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
                    <p className="text-sm text-orange-600 font-medium">{post.category} · {post.readingTime}</p>
                  </div>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>{post.excerpt}</p>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-orange-600 sm:text-xs sm:tracking-[0.3em]">
                      By {post.author}
                    </p>
                  </div>
                  <GlowButton asChild size="sm" variant="accent" className="uppercase tracking-[0.2em]">
                    <Link href={`#${post.slug}`}>Read summary</Link>
                  </GlowButton>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="featured-dossiers" className="space-y-6">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="rounded-3xl bg-gray-50 p-6 shadow-lg"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">{post.title}</h3>
                  <p className="text-sm text-orange-600 font-medium">{post.category} · {post.readingTime}</p>
                </div>
                <div id={post.slug} className="space-y-4 text-sm text-gray-700">
                  <p>{post.excerpt}</p>
                  <ul className="space-y-2 text-sm">
                    {post.highlights.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
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
              </div>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">Newsroom Notes</h2>
              <p className="text-sm text-gray-600">
                Bite-size updates ready for newsletter embeds, social snippets, or board reports.
              </p>
            </div>
            <GlowButton asChild variant="secondary" size="sm" id="newsroom-dossier" className="uppercase tracking-[0.2em]">
              <Link href="/advertisement">Partner media kit</Link>
            </GlowButton>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {newsroomNotes.map((note) => (
              <div key={note.title} className="rounded-3xl bg-gray-50 p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{note.title}</h3>
                    <p className="text-sm text-orange-600 font-medium">{note.anchor}</p>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>{note.summary}</p>
                    <GlowButton asChild size="sm" variant="ghost" className="uppercase tracking-[0.2em]">
                      <Link href={note.link} target="_blank" rel="noreferrer">
                        {note.linkLabel}
                      </Link>
                    </GlowButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

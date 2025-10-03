import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { FollowBar } from "@/components/FollowBar";

const youtubeHighlights = [
  {
    title: "Ember Challenge Cypher Warm-Up",
    embedId: "REPLACE_WITH_VIDEO_ID_1",
    description: "Behind-the-scenes prep with our top three finalists and the Glow creative coaches.",
    stats: "Premiered last week"
  },
  {
    title: "Glow News Flash: Campus Innovation Day",
    embedId: "REPLACE_WITH_VIDEO_ID_2",
    description: "Recap of the live broadcast featuring student founders and media influencers.",
    stats: "12 minute highlight"
  },
  {
    title: "Wellness Wednesdays Livestream",
    embedId: "REPLACE_WITH_VIDEO_ID_3",
    description: "Interactive Q&A with the Women's World crew covering wellness routines and mental health tips.",
    stats: "Recorded in studio"
  }
];

const tiktokReels = [
  {
    title: "Glow Dance Tunnel",
    embedUrl: "https://www.tiktok.com/embed/v2/REPLACE_WITH_TIKTOK_ID_1",
    metric: "45K plays"
  },
  {
    title: "Kayefi Nla Midnight Confession",
    embedUrl: "https://www.tiktok.com/embed/v2/REPLACE_WITH_TIKTOK_ID_2",
    metric: "33K plays"
  },
  {
    title: "Double Joy Locker Room Banter",
    embedUrl: "https://www.tiktok.com/embed/v2/REPLACE_WITH_TIKTOK_ID_3",
    metric: "28K plays"
  }
];

const instagramSpotlight = [
  {
    title: "Street Jam Countdown",
    thumbnail: "https://res.cloudinary.com/demo/image/upload/v1720000000/glowfm/ig-street-jam.jpg",
    caption: "Carousel teaser and merch drop giveaway.",
    href: "https://instagram.com/glow991fm"
  },
  {
    title: "Glow Kiddies Art Wall",
    thumbnail: "https://res.cloudinary.com/demo/image/upload/v1720000000/glowfm/ig-kiddies.jpg",
    caption: "Swipe through the best fan drawings of the week.",
    href: "https://instagram.com/glow991fm"
  },
  {
    title: "Women's World Panel",
    thumbnail: "https://res.cloudinary.com/demo/image/upload/v1720000000/glowfm/ig-women.jpg",
    caption: "Live studio portraits from our sisterhood conversation circle.",
    href: "https://instagram.com/glow991fm"
  }
];

const xHighlights = [
  {
    title: "Glow FM Trends",
    handle: "@glow991fm",
    summary: "Thread unpacking the Ember Challenge leaderboard with stats and spotlight clips.",
    permalink: "https://x.com/glow991fm"
  },
  {
    title: "Policy Rewind",
    handle: "@glow991fm",
    summary: "Live report thread from Political Hangout featuring quotes you can retweet instantly.",
    permalink: "https://x.com/glow991fm"
  }
];

const facebookStreams = [
  {
    title: "Ijinle Odu Livestream",
    summary: "Watch the dawn storytelling session with real-time comments pinned by the social desk.",
    permalink: "https://facebook.com/glow991fm/live_ijinle"
  },
  {
    title: "Ember Challenge Results Show",
    summary: "Weekly reveal with community voting recap and behind-the-scenes polls.",
    permalink: "https://facebook.com/glow991fm/live_challenge"
  },
  {
    title: "Women's World Live Studio",
    summary: "Interactive panel featuring campus founders with live Q&A prompts.",
    permalink: "https://facebook.com/glow991fm/live_women"
  }
];

export default function SocialMediaPage() {
  return (
    <div className="space-y-16">
      <AnimatedSection className="rounded-3xl bg-glow-hero p-8 text-white shadow-glow-emphasis">
        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
              Social Media Control Room
            </span>
            <h1 className="text-4xl font-bold md:text-5xl">Glow FM Spotlight Streams</h1>
            <p className="max-w-2xl text-base text-white/80 md:text-lg">
              Access embeddable showreels, reel carousels, and live thread recaps curated by the Glow FM digital team. Swap the placeholders below with the latest links from YouTube Studio, TikTok Business Suite, Instagram, X, and Facebook Creator Studio.
            </p>
            <div className="flex flex-wrap gap-4">
              <GlowButton asChild size="lg" variant="accent" className="uppercase tracking-[0.3em]">
                <Link href="#youtube">View YouTube cascade</Link>
              </GlowButton>
              <GlowButton asChild size="lg" variant="ghost" className="border-white/30 text-white uppercase tracking-[0.3em]">
                <Link href="/">Back to home</Link>
              </GlowButton>
            </div>
            <FollowBar />
          </div>
          <div className="hidden min-h-[280px] rounded-3xl border border-white/15 bg-black/20 p-6 shadow-2xl md:block">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">Workflow Tips</p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>Update video IDs in <code className="rounded bg-white/10 px-2 py-1">youtubeHighlights</code>.</li>
              <li>Swap TikTok embed URLs in <code className="rounded bg-white/10 px-2 py-1">tiktokReels</code>.</li>
              <li>Replace image thumbnails with the latest Instagram carousel covers.</li>
              <li>Refresh thread and livestream permalinks before each campaign.</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="youtube" delay={0.05} className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">YouTube Spotlight Cascade</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Glassy embeds ready for your hottest livestream replays, news capsules, and documentaries.
            </p>
          </div>
          <GlowButton asChild variant="secondary" size="sm">
            <Link href="https://youtube.com" target="_blank" rel="noreferrer">
              Visit Glow FM YouTube
            </Link>
          </GlowButton>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {youtubeHighlights.map((video) => (
            <GlowCard key={video.title} title={video.title} description={video.stats} headerClassName="bg-white/5" className="shadow-glow-soft">
              <div className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-3xl border border-white/15 bg-black/50">
                  <iframe
                    className="h-full w-full" 
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
                <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">{video.description}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-glow-secondary">Replace embedId with the latest video ID.</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="tiktok" delay={0.1} className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">TikTok Reels Carousel</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Material-inspired frames with a bold glow edge. Update the <code className="rounded bg-black/10 px-2 py-1">embedUrl</code> values with the latest TikTok clips.
            </p>
          </div>
          <GlowButton asChild variant="ghost" size="sm">
            <Link href="https://tiktok.com/@glow991fm" target="_blank" rel="noreferrer">
              See more on TikTok
            </Link>
          </GlowButton>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-6 pb-4">
            {tiktokReels.map((reel) => (
              <div key={reel.title} className="w-72 flex-shrink-0 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b0f1c] via-[#131b2c] to-[#0b0f1c] p-4 shadow-glow-emphasis">
                <div className="aspect-[9/16] overflow-hidden rounded-2xl border border-white/15 bg-black/70">
                  <iframe
                    className="h-full w-full"
                    src={reel.embedUrl}
                    title={reel.title}
                    allow="encrypted-media; clipboard-write"
                    allowFullScreen
                  />
                </div>
                <div className="mt-4 space-y-2 text-sm text-white/80">
                  <p className="font-semibold">{reel.title}</p>
                  <p className="text-xs uppercase tracking-[0.35em] text-glow-accent">{reel.metric}</p>
                  <p className="text-xs text-white/60">Swap the embedUrl with the TikTok share link for each reel.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="instagram" delay={0.15} className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Instagram Reels Showcase</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Drop in the newest cover art, copy in the caption snippet, and let visitors click through to see the full reel set.
            </p>
          </div>
          <GlowButton asChild variant="accent" size="sm">
            <Link href="https://instagram.com/glow991fm" target="_blank" rel="noreferrer">
              See more on Instagram
            </Link>
          </GlowButton>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {instagramSpotlight.map((item) => (
            <GlowCard key={item.title} title={item.title}>
              <div className="space-y-4">
                <div className="relative h-56 overflow-hidden rounded-2xl border border-white/15">
                  <Image src={item.thumbnail} alt={item.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 320px" />
                </div>
                <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">{item.caption}</p>
                <GlowButton asChild size="sm" className="uppercase tracking-[0.3em]">
                  <a href={item.href} target="_blank" rel="noreferrer">
                    View on Instagram
                  </a>
                </GlowButton>
              </div>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="x-highlights" delay={0.2} className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">X (Twitter) Live Threads</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Pin the thread links here to funnel listeners into real-time commentary and polls.
            </p>
          </div>
          <GlowButton asChild variant="ghost" size="sm">
            <Link href="https://x.com/glow991fm" target="_blank" rel="noreferrer">
              Join the conversation
            </Link>
          </GlowButton>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {xHighlights.map((thread) => (
            <GlowCard key={thread.title} title={thread.title} description={thread.handle} className="shadow-glow-soft">
              <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">{thread.summary}</p>
              <GlowButton asChild size="sm" variant="secondary" className="mt-6 uppercase tracking-[0.3em]">
                <a href={thread.permalink} target="_blank" rel="noreferrer">
                  Open thread
                </a>
              </GlowButton>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="facebook-spotlight" delay={0.25} className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Facebook Live Spotlight</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Embed your top livestreams or premiere replays and keep the CTA wired to the Facebook page.
            </p>
          </div>
          <GlowButton asChild variant="secondary" size="sm">
            <Link href="https://facebook.com/glow991fm" target="_blank" rel="noreferrer">
              Follow Glow FM on Facebook
            </Link>
          </GlowButton>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {facebookStreams.map((stream) => (
            <GlowCard key={stream.title} title={stream.title} className="shadow-glow-soft">
              <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">{stream.summary}</p>
              <GlowButton asChild size="sm" variant="ghost" className="mt-6 uppercase tracking-[0.3em]">
                <a href={stream.permalink} target="_blank" rel="noreferrer">
                  Watch livestream
                </a>
              </GlowButton>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

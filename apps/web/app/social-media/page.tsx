import Image from "next/image";
import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { FollowBar } from "@/components/FollowBar";

const YOUTUBE_CHANNEL_URL = "https://youtube.com/@glow991fm";
const YOUTUBE_THUMBNAIL_BASE = "https://img.youtube.com/vi";
const TIKTOK_PROFILE_URL = "https://www.tiktok.com/@glow991fm";

type YouTubeHighlight = {
  title: string;
  embedId: string;
  description: string;
  stats: string;
};

type TikTokReel = {
  title: string;
  clipId: string;
  summary: string;
  metric: string;
};

type InstagramSpotlight = {
  title: string;
  thumbnail?: string;
  caption: string;
  href: string;
};

type ThreadHighlight = {
  title: string;
  handle: string;
  summary: string;
  permalink: string;
};

type FacebookStream = {
  title: string;
  summary: string;
  permalink: string;
};

const youtubeHighlights: YouTubeHighlight[] = [
  {
    title: "Ember Challenge Cypher Warm-Up",
    embedId: "S7VAYn4Zi1o",
    description: "Behind-the-scenes prep with our top three finalists and the Glow creative coaches.",
    stats: "Premiered last week"
  },
  {
    title: "Glow News Flash: Campus Innovation Day",
    embedId: "0ASXKv2_0C4",
    description: "Recap of the live broadcast featuring student founders and media influencers.",
    stats: "12 minute highlight"
  },
  {
    title: "Wellness Wednesdays Livestream",
    embedId: "9h_lcRPbw8E",
    description: "Interactive Q&A with the Women's World crew covering wellness routines and mental health tips.",
    stats: "Recorded in studio"
  }
];

const tiktokReels: TikTokReel[] = [
  {
    title: "Glow Dance Tunnel",
    clipId: "7556648983347596562",
    summary: "Glow crew kicks off the Ember Challenge warm-up from the dance tunnel with crowd energy checks.",
    metric: "45K plays"
  },
  {
    title: "Kayefi Nla Midnight Confession",
    clipId: "7548485844806503685",
    summary: "Late-night confession mashup with Kayefi Nla sparked duet replies and green room laughs.",
    metric: "33K plays"
  },
  {
    title: "Double Joy Locker Room Banter",
    clipId: "7555841229204851986",
    summary: "Locker room banter with Double Joy and finalists instantly turned into remix territory.",
    metric: "28K plays"
  }
];

const fallbackInstagramThumbnail = "https://drive.google.com/uc?id=1fNwTYWrKleuBSuqeir05K1m6k_eD_fXf";

const instagramSpotlight: InstagramSpotlight[] = [
  {
    title: "Ember Countdown Reels",
    thumbnail: fallbackInstagramThumbnail,
    caption: "Swipe through the daily Ember Challenge teasers and behind-the-scenes prep shots.",
    href: "https://www.instagram.com/reel/DPBV0b7gP_f/"
  },
  {
    title: "Glow Kiddies Fan Reactions",
    thumbnail: fallbackInstagramThumbnail,
    caption: "Audience shout-outs and junior creatives remixing the Saturday morning show.",
    href: "https://www.instagram.com/reel/DPLg4ihCuqw/"
  },
  {
    title: "Women's World Backstage",
    thumbnail: fallbackInstagramThumbnail,
    caption: "Highlights from our sisterhood panels plus studio portraits and quotes to repost.",
    href: "https://www.instagram.com/reel/DO6ReQPDQJp/"
  }
];

const xHighlights: ThreadHighlight[] = [
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

const facebookStreams: FacebookStream[] = [
  {
    title: "Ijinle Odu Livestream",
    summary: "Watch the dawn storytelling session with real-time comments pinned by the social desk.",
    permalink: "https://www.facebook.com/Glowfm/live_ijinle"
  },
  {
    title: "Ember Challenge Results Show",
    summary: "Weekly reveal with community voting recap and behind-the-scenes polls.",
    permalink: "https://www.facebook.com/Glowfm/live_challenge"
  },
  {
    title: "Women's World Live Studio",
    summary: "Interactive panel featuring campus founders with live Q&A prompts.",
    permalink: "https://www.facebook.com/Glowfm/live_women"
  }
];

const youtubeWatchUrl = (embedId: string) => `https://www.youtube.com/watch?v=${embedId}`;
const youtubeThumbnailUrl = (embedId: string) => `${YOUTUBE_THUMBNAIL_BASE}/${embedId}/hqdefault.jpg`;
const tikTokClipUrl = (clipId: string) => `${TIKTOK_PROFILE_URL}/video/${clipId}`;

export default function SocialMediaPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl bg-glow-hero p-8 text-white shadow-glow-emphasis">
        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
              Social Media Control Room
            </span>
            <h1 className="text-4xl font-bold md:text-5xl">Glow FM Spotlight Streams</h1>
            <p className="max-w-2xl text-base text-white/80 md:text-lg">
              Access embeddable showreels, reel carousels, and live thread recaps curated by the Glow FM digital team. Pull the latest IDs from the Social media content display embedding links drive folder to keep every block wired to fresh campaigns.
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
              <li>
                Update video IDs in <code className="rounded bg-white/10 px-2 py-1">youtubeHighlights</code> to refresh each preview card.
              </li>
              <li>
                Swap TikTok <code className="rounded bg-white/10 px-2 py-1">clipId</code> values whenever a new short drops.
              </li>
              <li>Replace image thumbnails with the latest Instagram carousel covers.</li>
              <li>Refresh thread and livestream permalinks before each campaign.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="youtube" className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">YouTube Spotlight Cascade</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Glassy previews ready for your hottest livestream replays, news capsules, and documentaries.
            </p>
          </div>
          <GlowButton asChild variant="secondary" size="sm">
            <Link href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noreferrer">
              Visit Glow FM YouTube
            </Link>
          </GlowButton>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {youtubeHighlights.map((video) => (
            <GlowCard key={video.embedId} title={video.title} description={video.stats} headerClassName="bg-white/5" className="shadow-glow-soft">
              <div className="space-y-4">
                <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/15 bg-black/60">
                  <Image
                    src={youtubeThumbnailUrl(video.embedId)}
                    alt={`${video.title} thumbnail`}
                    fill
                    sizes="(max-width:768px) 100vw, 320px"
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">{video.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <GlowButton asChild size="sm" variant="accent" className="uppercase tracking-[0.3em]">
                    <a href={youtubeWatchUrl(video.embedId)} target="_blank" rel="noreferrer">
                      Watch highlight
                    </a>
                  </GlowButton>
                  <p className="text-xs text-[var(--foreground)]/60 dark:text-white/60">Swap the embedId with the latest video ID.</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      <section id="tiktok" className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">TikTok Reels Carousel</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Material-inspired frames with a bold glow edge. Each card links out to the latest campus clips.
            </p>
          </div>
          <GlowButton asChild variant="ghost" size="sm">
            <Link href={TIKTOK_PROFILE_URL} target="_blank" rel="noreferrer">
              See more on TikTok
            </Link>
          </GlowButton>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiktokReels.map((reel) => (
            <GlowCard key={reel.clipId} title={reel.title} className="shadow-glow-soft">
              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b0f1c] via-[#131b2c] to-[#0b0f1c] p-6 text-white shadow-glow-emphasis">
                  <p className="text-sm text-white/90">{reel.summary}</p>
                </div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/70">
                  <span className="text-glow-accent">{reel.metric}</span>
                  <GlowButton asChild size="sm" variant="accent" className="uppercase tracking-[0.3em]">
                    <a href={tikTokClipUrl(reel.clipId)} target="_blank" rel="noreferrer">
                      Open clip
                    </a>
                  </GlowButton>
                </div>
                <p className="text-xs text-[var(--foreground)]/60 dark:text-white/60">Update the clipId to feature the newest TikTok drop.</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      <section id="instagram" className="space-y-6">
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
                  <Image
                    src={item.thumbnail ?? fallbackInstagramThumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 320px"
                  />
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
      </section>

      <section id="x-highlights" className="space-y-6">
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
      </section>

      <section id="facebook-spotlight" className="space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Facebook Live Spotlight</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Embed your top livestreams or premiere replays and keep the CTA wired to the Facebook page.
            </p>
          </div>
          <GlowButton asChild variant="secondary" size="sm">
            <Link href="https://www.facebook.com/Glowfm/" target="_blank" rel="noreferrer">
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
      </section>
    </div>
  );
}

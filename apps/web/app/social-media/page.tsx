import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { FollowBar } from "@/components/FollowBar";

const youtubeHighlights = [
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

const tiktokReels = [
  {
    title: "Glow Dance Tunnel",
    embedUrl: "https://www.tiktok.com/embed/v2/7556648983347596562",
    metric: "45K plays"
  },
  {
    title: "Kayefi Nla Midnight Confession",
    embedUrl: "https://www.tiktok.com/embed/v2/7548485844806503685",
    metric: "33K plays"
  },
  {
    title: "Double Joy Locker Room Banter",
    embedUrl: "https://www.tiktok.com/embed/v2/7555841229204851986",
    metric: "28K plays"
  }
];

const fallbackInstagramThumbnail = "/images/Retro-Futuristic%20Glow%2099.1%20FM.png";

const instagramSpotlight = [
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

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="space-y-16">
        <AnimatedSection className="rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 p-6 text-white shadow-xl sm:p-8">
          <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center md:gap-10">
            <div className="space-y-5 sm:space-y-6">
              <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/90 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
                Social Media Control Room
              </span>
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Glow FM Spotlight Streams</h1>
              <p className="max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
                Access embeddable showreels, reel carousels, and live thread recaps curated weekly by the Glow FM digital
                team—ready to drop into your press kits, dealer groups, or campus community updates.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <GlowButton asChild size="lg" variant="accent" className="uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                  <Link href="#youtube">View YouTube cascade</Link>
                </GlowButton>
                <GlowButton
                  asChild
                  size="lg"
                  variant="ghost"
                  className="border-white/30 text-white uppercase tracking-[0.2em] sm:tracking-[0.3em]"
                >
                  <Link href="/">Back to home</Link>
                </GlowButton>
              </div>
              <FollowBar />
            </div>
            <div className="hidden min-h-[260px] rounded-3xl border border-white/30 bg-white/10 p-5 shadow-2xl md:block lg:p-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/80 sm:text-sm sm:tracking-[0.35em]">Channel Snapshot</p>
              <ul className="mt-4 space-y-3 text-sm text-white/90">
                <li>New YouTube highlights premiere every Monday by 9:00 AM WAT—perfect for embedding in newsletters.</li>
                <li>TikTok challenge reels publish mid-week with duet-friendly hooks for creators and campus ambassadors.</li>
                <li>Instagram covers ship with brand-safe captions so partners can repost in under a minute.</li>
                <li>X threads and Facebook livestream links sync with on-air promos, keeping listeners one tap away.</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="youtube" delay={0.05} className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">YouTube Spotlight Cascade</h2>
              <p className="text-sm text-gray-600">
                Glassy embeds ready to recap livestream moments, news capsules, and long-form documentaries.
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
              <div key={video.title} className="rounded-3xl bg-gray-50 p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{video.title}</h3>
                    <p className="text-sm text-orange-600 font-medium">{video.stats}</p>
                  </div>
                  <div className="aspect-video overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <p className="text-sm text-gray-700">{video.description}</p>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-orange-600 sm:text-xs sm:tracking-[0.35em]">
                    {video.stats}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="tiktok" delay={0.1} className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">TikTok Reels Carousel</h2>
              <p className="text-sm text-gray-600">
                Material-inspired frames with a bold glow edge showcasing the challenges and confessions our listeners love.
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
                <div key={reel.title} className="w-72 flex-shrink-0 rounded-3xl bg-gray-50 p-4 shadow-lg">
                  <div className="aspect-[9/16] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                    <iframe
                      className="h-full w-full"
                      src={reel.embedUrl}
                      title={reel.title}
                      allow="encrypted-media; clipboard-write"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">{reel.title}</p>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-orange-600 sm:text-xs sm:tracking-[0.35em]">
                      {reel.metric}
                    </p>
                    <p className="text-[11px] text-gray-500 sm:text-xs">
                      Tap the share icon to remix or embed directly in your recap.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="instagram" delay={0.15} className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">Instagram Reels Showcase</h2>
              <p className="text-sm text-gray-600">
                Carousel-ready cover art and captions curated for fast reposting to your brand or campus communities.
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
              <div key={item.title} className="rounded-3xl bg-gray-50 p-6 shadow-lg">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <div className="relative h-56 overflow-hidden rounded-2xl border border-gray-200">
                    <Image
                      src={item.thumbnail ?? fallbackInstagramThumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 320px"
                    />
                  </div>
                  <p className="text-sm text-gray-700">{item.caption}</p>
                  <GlowButton asChild size="sm" className="uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      View on Instagram
                    </a>
                  </GlowButton>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="x-highlights" delay={0.2} className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">X (Twitter) Live Threads</h2>
              <p className="text-sm text-gray-600">
                Real-time commentary, verified takeaways, and polls you can quote-tweet without hunting for context.
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
              <div key={thread.title} className="rounded-3xl bg-gray-50 p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{thread.title}</h3>
                    <p className="text-sm text-orange-600 font-medium">{thread.handle}</p>
                  </div>
                  <p className="text-sm text-gray-700">{thread.summary}</p>
                  <GlowButton
                    asChild
                    size="sm"
                    variant="secondary"
                    className="mt-6 uppercase tracking-[0.2em] sm:tracking-[0.3em]"
                  >
                    <a href={thread.permalink} target="_blank" rel="noreferrer">
                      Open thread
                    </a>
                  </GlowButton>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="facebook-spotlight" delay={0.25} className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">Facebook Live Spotlight</h2>
              <p className="text-sm text-gray-600">
                Prime livestreams and premiere replays with CTAs wired straight to the Glow FM Facebook hub.
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
              <div key={stream.title} className="rounded-3xl bg-gray-50 p-6 shadow-lg">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{stream.title}</h3>
                  <p className="text-sm text-gray-700">{stream.summary}</p>
                  <GlowButton
                    asChild
                    size="sm"
                    variant="ghost"
                    className="mt-6 uppercase tracking-[0.2em] sm:tracking-[0.3em]"
                  >
                    <a href={stream.permalink} target="_blank" rel="noreferrer">
                      Watch livestream
                    </a>
                  </GlowButton>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

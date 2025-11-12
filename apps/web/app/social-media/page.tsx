"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FollowBar } from "@/components/FollowBar";
import { SocialMediaCarousel } from "@/components/SocialMediaCarousel";
import { AnimatedWordReveal } from "@/components/social/SocialEffects";

const buttonClass =
  "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-slate-100 transition hover:border-white/40 hover:bg-white/20 sm:text-[0.65rem] sm:tracking-[0.35em]";

const ghostButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-slate-300 transition hover:border-white/30 hover:text-white sm:text-[0.65rem] sm:tracking-[0.35em]";

const glassPanel =
  "rounded-[34px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_25px_80px_rgba(2,6,23,0.75)] backdrop-blur-2xl sm:p-8";

const heroStats = [
  { label: "Cross-platform followers", value: "482K", detail: "radio + socials synced" },
  { label: "Weekly mentions", value: "2.1K", detail: "audience + partners" },
  { label: "Active collaborations", value: "128", detail: "brands + creators" },
  { label: "Average watch minutes", value: "64K", detail: "live & VOD" }
];

const youtubeHighlights = [
  { title: "Concise Educational Trends", embedId: "S7VAYn4Zi1o" },
  { title: "GlowFm99.1 Business News Updates", embedId: "0ASXKv2_0C4" },
  { title: "Latest Glow Moment Stream", embedId: "9h_lcRPbw8E" }
];

const tiktokReels = [
  { title: "Glow Dance Tunnel", embedUrl: "https://www.tiktok.com/embed/v2/7556648983347596562", metric: "45K plays" },
  {
    title: "Kayefi Nla Midnight Confession",
    embedUrl: "https://www.tiktok.com/embed/v2/7548485844806503685",
    metric: "33K plays"
  },
  { title: "Double Joy Locker Room Banter", embedUrl: "https://www.tiktok.com/embed/v2/7555841229204851986", metric: "28K plays" }
];

const fallbackInstagramThumbnail = "/images/Retro-Futuristic%20Glow%2099.1%20FM.png";

const instagramSpotlight = [
  {
    title: "Ember Countdown Reels",
    thumbnail: fallbackInstagramThumbnail,
    caption: "Daily Ember Challenge teasers and behind-the-scenes prep shots.",
    href: "https://www.instagram.com/reel/DPBV0b7gP_f/"
  },
  {
    title: "Glow Kiddies Fan Reactions",
    thumbnail: fallbackInstagramThumbnail,
    caption: "Audience shout-outs and junior creatives remixing the Saturday show.",
    href: "https://www.instagram.com/reel/DPLg4ihCuqw/"
  },
  {
    title: "Women's World Backstage",
    thumbnail: fallbackInstagramThumbnail,
    caption: "Highlights from our sisterhood panels plus studio portraits to repost.",
    href: "https://www.instagram.com/reel/DO6ReQPDQJp/"
  }
];

const facebookStreams = [
  {
    title: "SPORTAINMENT",
    summary: "Sports highlights and entertainment in one show. Tap through to experience the full stream on Facebook.",
    videoUrl: "https://www.facebook.com/Glowfm/videos/1336479327938034/",
    blocked: true
  },
  {
    title: "GLOW MOMENT",
    summary: "The heart of our live shows, reformatted for cross-platform sharing.",
    videoUrl: "https://www.facebook.com/Glowfm/videos/1731270387563481/",
    blocked: true
  },
  {
    title: "FIRE WITHIN",
    summary: "Motivational content igniting passion and purpose in every listener.",
    videoUrl: "https://www.facebook.com/Glowfm/videos/4321651394780791/",
    blocked: true
  }
];

export default function SocialMediaPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030511] text-slate-100">
      <SpaceStationBackdrop />

      <div className="relative z-10 mx-auto max-w-6xl space-y-10 px-4 pb-16 pt-12 sm:space-y-14 sm:px-6 sm:py-16 lg:px-8">
        <section className={`${glassPanel} space-y-8`}>
          <div className="flex flex-wrap items-center gap-3 text-[0.55rem] uppercase tracking-[0.32em] text-slate-300/90 sm:text-[0.6rem] sm:tracking-[0.4em]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 font-semibold text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              Orbit Console
            </span>
            <span>Glow 99.1 FM / Social Broadcast</span>
          </div>
          <div className="space-y-4">
            <AnimatedWordReveal
              text="A sharp multidimensional console for every Glow 99.1 FM signal."
              className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl"
            />
            <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
              No neon noise-just a classic transparent glass deck animated with the Space Station satellite effect. Every clip, stream, and fan reaction
              sits on the same multi-plane grid so teams can redeploy assets without reformatting.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="https://www.instagram.com/glow991fm" target="_blank" rel="noreferrer" className={`${buttonClass} w-full sm:w-auto`}>
              Follow @glow991fm
            </Link>
            <Link href="https://www.glow991fm.com/advertise" target="_blank" rel="noreferrer" className={`${ghostButtonClass} w-full sm:w-auto`}>
              Book Social Slot
            </Link>
          </div>
          <div className="grid gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2 rounded-[22px] border border-white/10 bg-white/[0.03] p-4 shadow-inner shadow-white/5">
                <p className="text-2xl font-black text-white sm:text-3xl">{stat.value}</p>
                <p className="text-[0.6rem] uppercase tracking-[0.24em] text-slate-400 sm:text-[0.65rem] sm:tracking-[0.35em]">{stat.label}</p>
                <p className="text-xs text-slate-400 sm:text-sm">{stat.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <AnimatedSection id="youtube-highlights" delay={0.05} className="space-y-6">
          <section className={`${glassPanel} space-y-6`}>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <AnimatedWordReveal text="Mission feeds" className="text-3xl font-semibold text-white" />
                <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
                  Biffting after fleet effects wash over each embed, keeping our studio captures cohesive across newsletters, decks, and live monitor walls.
                </p>
              </div>
              <Link href="https://www.youtube.com/@glow991fm" target="_blank" rel="noreferrer" className={`${ghostButtonClass} w-full sm:w-auto`}>
                Launch YouTube
              </Link>
            </div>
            <SocialMediaCarousel itemsPerView={1}>
              {youtubeHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="mx-auto max-w-3xl space-y-4 rounded-[28px] border border-white/10 bg-black/30 p-5 backdrop-blur-2xl sm:p-6"
                >
                  <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-inner shadow-black/70">
                    <iframe
                      title={highlight.title}
                      src={`https://www.youtube.com/embed/${highlight.embedId}`}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{highlight.title}</h3>
                    <span className="text-[0.6rem] uppercase tracking-[0.25em] text-slate-400 sm:text-xs sm:tracking-[0.3em]">Studio relay</span>
                  </div>
                </div>
              ))}
            </SocialMediaCarousel>
          </section>
        </AnimatedSection>

        <AnimatedSection id="tiktok-reels" delay={0.1} className="space-y-6">
          <section className={`${glassPanel} space-y-6`}>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <AnimatedWordReveal text="Shortwave reels" className="text-3xl font-semibold text-white" />
                <p className="text-sm text-slate-300 sm:text-base">
                  A particlelated lane for TikTok drops with measured metrics and mirrored typography for fast quoting.
                </p>
              </div>
              <Link href="https://www.tiktok.com/@glow991fm" target="_blank" rel="noreferrer" className={`${ghostButtonClass} w-full sm:w-auto`}>
                View TikTok
              </Link>
            </div>
            <SocialMediaCarousel itemsPerView={1}>
              {tiktokReels.map((reel) => (
                <div
                  key={reel.title}
                  className="mx-auto max-w-3xl space-y-4 rounded-[28px] border border-white/10 bg-white/[0.02] p-5 backdrop-blur-2xl sm:p-6"
                >
                  <div className="aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-black/50">
                    <iframe title={reel.title} src={reel.embedUrl} className="h-full w-full" loading="lazy" allowFullScreen />
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-semibold text-white">{reel.title}</span>
                    <span className="text-[0.6rem] uppercase tracking-[0.25em] text-slate-400 sm:text-xs sm:tracking-[0.3em]">{reel.metric}</span>
                  </div>
                </div>
              ))}
            </SocialMediaCarousel>
          </section>
        </AnimatedSection>

        <AnimatedSection id="instagram-spotlight" delay={0.15} className="space-y-6">
          <section className={`${glassPanel} space-y-6`}>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <AnimatedWordReveal text="Signal boards" className="text-3xl font-semibold text-white" />
                <p className="text-sm text-slate-300 sm:text-base">
                  Classic transparent fabrication keeps fan shots, studio stills, and vertical cuts aligned for reporters and partners.
                </p>
              </div>
              <Link href="https://www.instagram.com/glow991fm/" target="_blank" rel="noreferrer" className={`${ghostButtonClass} w-full sm:w-auto`}>
                View Instagram
              </Link>
            </div>
            <SocialMediaCarousel itemsPerView={1}>
              {instagramSpotlight.map((item) => (
                <div
                  key={item.title}
                  className="mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl sm:p-6"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                      <Image
                        src={item.thumbnail ?? fallbackInstagramThumbnail}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, 800px"
                      />
                    </div>
                    <p className="text-sm text-slate-300 sm:text-base">{item.caption}</p>
                    <Link href={item.href} target="_blank" rel="noreferrer" className={`${buttonClass} w-full justify-center`}>
                      View on Instagram
                    </Link>
                  </div>
                </div>
              ))}
            </SocialMediaCarousel>
          </section>
        </AnimatedSection>

        <AnimatedSection id="facebook-spotlight" delay={0.2} className="space-y-6 pb-8">
          <section className={`${glassPanel} space-y-6`}>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <AnimatedWordReveal text="Legacy streams" className="text-3xl font-semibold text-white" />
                <p className="text-sm text-slate-300 sm:text-base">
                  Embedded cards fall back elegantly whenever Meta protects a stream. The cards stay aligned with the rest of the multi-plane deck.
                </p>
              </div>
              <Link href="https://www.facebook.com/Glowfm/" target="_blank" rel="noreferrer" className={`${ghostButtonClass} w-full sm:w-auto`}>
                Follow on Facebook
              </Link>
            </div>
            <SocialMediaCarousel itemsPerView={1}>
              {facebookStreams.map((stream) => (
                <div
                  key={stream.title}
                  className="mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-white/[0.02] p-5 backdrop-blur-2xl sm:p-6"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{stream.title}</h3>
                    <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                      {stream.blocked ? (
                        <div className="flex h-full items-center justify-center px-6 text-center text-sm text-slate-300">
                          This video can&apos;t be embedded because it contains protected content. Use the button below to watch it directly on Facebook.
                        </div>
                      ) : (
                        <iframe
                          title={stream.title}
                          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(stream.videoUrl)}&show_text=false&width=560`}
                          className="h-full w-full"
                          allowFullScreen
                          loading="lazy"
                        />
                      )}
                    </div>
                    <p className="text-sm text-slate-300 sm:text-base">{stream.summary}</p>
                    <Link href={stream.videoUrl} target="_blank" rel="noreferrer" className={`${buttonClass} w-full justify-center`}>
                      Watch on Facebook
                    </Link>
                  </div>
                </div>
              ))}
            </SocialMediaCarousel>
          </section>
        </AnimatedSection>

        <FollowBar />
      </div>
    </div>
  );
}

function SpaceStationBackdrop() {
  return (
    <div aria-hidden="true" className="space-backdrop">
      <div className="space-backdrop__halo" />
      <div className="space-backdrop__grid" />
      <span className="space-backdrop__particle space-backdrop__particle--one" />
      <span className="space-backdrop__particle space-backdrop__particle--two" />
      <span className="space-backdrop__particle space-backdrop__particle--three" />
      <span className="space-backdrop__satellite space-backdrop__satellite--alpha" />
      <span className="space-backdrop__satellite space-backdrop__satellite--beta" />
    </div>
  );
}

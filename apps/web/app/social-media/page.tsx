"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FollowBar } from "@/components/FollowBar";
import { SocialMediaCarousel } from "@/components/SocialMediaCarousel";
import { AnimatedWordReveal } from "@/components/social/SocialEffects";
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook, FaSatellite } from "react-icons/fa";

const buttonClass =
  "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-slate-100 transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/20 hover:shadow-[0_0_20px_rgba(255,102,0,0.3)] sm:text-xs sm:tracking-[0.35em] font-['El_Messiri']";

const ghostButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-slate-300 transition-all duration-300 hover:border-white/30 hover:text-white hover:bg-white/5 sm:text-xs sm:tracking-[0.35em] font-['El_Messiri']";

const glassPanel =
  "rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-10 relative overflow-hidden group transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20";

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
    <div className="relative min-h-screen overflow-hidden bg-[#030511] text-slate-100 font-['El_Messiri']">
      <SpaceStationBackdrop />

      <div className="relative z-10 mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <AnimatedSection className={`${glassPanel} space-y-10`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-4 text-[0.65rem] uppercase tracking-[0.35em] text-slate-300/90">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-bold text-white/90 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <FaSatellite className="text-orange-500 animate-pulse" />
              Orbit Console
            </span>
            <span className="font-bold text-slate-400">Glow 99.1 FM / Social Broadcast</span>
          </div>
          
          <div className="space-y-6 relative">
            <AnimatedWordReveal
              text="A sharp multidimensional console for every Glow 99.1 FM signal."
              className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
            />
            <p className="max-w-3xl text-lg text-slate-300 leading-relaxed font-medium">
              No neon noise—just a classic transparent glass deck animated with the Space Station satellite effect. Every clip, stream, and fan reaction
              sits on the same multi-plane grid so teams can redeploy assets without reformatting.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row pt-4">
            <Link href="https://www.instagram.com/glow991fm" target="_blank" rel="noreferrer" className={`${buttonClass} w-full sm:w-auto`}>
              <FaInstagram className="mr-2 text-lg" /> Follow @glow991fm
            </Link>
            <Link href="/advertisement" className={`${ghostButtonClass} w-full sm:w-auto`}>
              Book Social Slot
            </Link>
          </div>
          
          <div className="grid gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4 pt-8 border-t border-white/5">
            {heroStats.map((stat) => (
              <div key={stat.label} className="group/stat flex flex-col gap-2 rounded-[2rem] border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10">
                <p className="text-3xl sm:text-4xl font-black text-white group-hover/stat:text-orange-400 transition-colors">{stat.value}</p>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-slate-400 font-bold">{stat.label}</p>
                <p className="text-xs text-slate-500 font-medium">{stat.detail}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* YouTube Section */}
        <AnimatedSection id="youtube-highlights" delay={0.05} className="space-y-8">
          <section className={`${glassPanel} space-y-8`}>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-white/5 pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-red-600/20 text-red-500">
                    <FaYoutube className="text-2xl" />
                  </div>
                  <AnimatedWordReveal text="Mission feeds" className="text-3xl font-bold text-white" />
                </div>
                <p className="max-w-2xl text-base text-slate-300 font-medium">
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
                  className="mx-auto max-w-4xl space-y-5 rounded-[2rem] border border-white/10 bg-black/40 p-6 backdrop-blur-xl sm:p-8 shadow-2xl"
                >
                  <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-inner shadow-black/70 relative group">
                    <iframe
                      title={highlight.title}
                      src={`https://www.youtube.com/embed/${highlight.embedId}`}
                      className="h-full w-full relative z-10"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-bold text-white">{highlight.title}</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-slate-400 font-bold border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      Studio relay
                    </span>
                  </div>
                </div>
              ))}
            </SocialMediaCarousel>
          </section>
        </AnimatedSection>

        {/* TikTok Section */}
        <AnimatedSection id="tiktok-reels" delay={0.1} className="space-y-8">
          <section className={`${glassPanel} space-y-8`}>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-white/5 pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-pink-600/20 text-pink-500">
                    <FaTiktok className="text-2xl" />
                  </div>
                  <AnimatedWordReveal text="Shortwave reels" className="text-3xl font-bold text-white" />
                </div>
                <p className="text-base text-slate-300 font-medium">
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
                  className="mx-auto max-w-sm space-y-5 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl sm:p-8"
                >
                  <div className="aspect-[9/16] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/50 shadow-2xl">
                    <iframe title={reel.title} src={reel.embedUrl} className="h-full w-full" loading="lazy" allowFullScreen />
                  </div>
                  <div className="flex flex-col gap-2 text-center">
                    <span className="font-bold text-white text-lg">{reel.title}</span>
                    <span className="inline-block mx-auto rounded-full bg-white/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-slate-400 font-bold border border-white/5">
                      {reel.metric}
                    </span>
                  </div>
                </div>
              ))}
            </SocialMediaCarousel>
          </section>
        </AnimatedSection>

        {/* Instagram Section */}
        <AnimatedSection id="instagram-spotlight" delay={0.15} className="space-y-8">
          <section className={`${glassPanel} space-y-8`}>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-white/5 pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-purple-600/20 text-purple-500">
                    <FaInstagram className="text-2xl" />
                  </div>
                  <AnimatedWordReveal text="Signal boards" className="text-3xl font-bold text-white" />
                </div>
                <p className="text-base text-slate-300 font-medium">
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
                  className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
                >
                  <div className="space-y-5">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-black/30 group">
                      <Image
                        src={item.thumbnail ?? fallbackInstagramThumbnail}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width:768px) 100vw, 800px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-medium">{item.caption}</p>
                      </div>
                    </div>
                    <p className="text-base text-slate-300 font-medium sm:hidden">{item.caption}</p>
                    <Link href={item.href} target="_blank" rel="noreferrer" className={`${buttonClass} w-full justify-center`}>
                      View on Instagram
                    </Link>
                  </div>
                </div>
              ))}
            </SocialMediaCarousel>
          </section>
        </AnimatedSection>

        {/* Facebook Section */}
        <AnimatedSection id="facebook-spotlight" delay={0.2} className="space-y-8 pb-8">
          <section className={`${glassPanel} space-y-8`}>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-white/5 pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-blue-600/20 text-blue-500">
                    <FaFacebook className="text-2xl" />
                  </div>
                  <AnimatedWordReveal text="Legacy streams" className="text-3xl font-bold text-white" />
                </div>
                <p className="text-base text-slate-300 font-medium">
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
                  className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl sm:p-8"
                >
                  <div className="space-y-5">
                    <h3 className="text-xl font-bold text-white">{stream.title}</h3>
                    <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/40 relative">
                      {stream.blocked ? (
                        <div className="flex h-full flex-col items-center justify-center px-6 text-center space-y-4 bg-black/60">
                          <FaFacebook className="text-4xl text-blue-500 opacity-50" />
                          <p className="text-sm text-slate-300 max-w-md">
                            This video can&apos;t be embedded because it contains protected content. Use the button below to watch it directly on Facebook.
                          </p>
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
                    <p className="text-base text-slate-300 font-medium">{stream.summary}</p>
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

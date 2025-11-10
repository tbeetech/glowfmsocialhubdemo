"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { FollowBar } from "@/components/FollowBar";

const youtubeHighlights = [
  {
    title: "Concise Educational Trends",
    embedId: "S7VAYn4Zi1o"
  },
  {
    title: "GlowFm99.1 Business New Updates",
    embedId: "0ASXKv2_0C4"
  },
  {
    title: "Latest Glow Moment Stream",
    embedId: "9h_lcRPbw8E"
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

const facebookStreams = [
  {
    title: "SPORTAINMENT",
    summary: "Action-packed sports highlights and entertainment wrapped into one explosive show. Catch all the thrilling moments and behind-the-scenes action.",
    videoUrl: "https://www.facebook.com/Glowfm/videos/1336479327938034/",
    embedCode: `<div class="fb-video" data-href="https://www.facebook.com/Glowfm/videos/1336479327938034/" data-width="500" data-show-text="false"><blockquote cite="https://www.facebook.com/Glowfm/videos/1336479327938034/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Glowfm/videos/1336479327938034/">SPORTAINMENT</a><p>SPORTAINMENT</p>Posted by <a href="https://www.facebook.com/Glowfm">Glow 99.1 FM AKURE</a> on Wednesday, October 22, 2025</blockquote></div>`
  },
  {
    title: "GLOW MOMENT",
    summary: "Capturing the essence of our live shows and bringing you the best moments that define the Glow FM experience.",
    videoUrl: "https://www.facebook.com/Glowfm/videos/1731270387563481/",
    embedCode: `<div class="fb-video" data-href="https://www.facebook.com/Glowfm/videos/1731270387563481/" data-width="500" data-show-text="false"><blockquote cite="https://www.facebook.com/Glowfm/videos/1731270387563481/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Glowfm/videos/1731270387563481/">GLOW MOMENT</a><p>GLOW MOMENT</p>Posted by <a href="https://www.facebook.com/Glowfm">Glow 99.1 FM AKURE</a> on Tuesday, October 28, 2025</blockquote></div>`
  },
  {
    title: "FIRE WITHIN",
    summary: "Motivational content igniting passion and purpose in every listener. Get inspired and unlock your potential with powerful stories.",
    videoUrl: "https://www.facebook.com/Glowfm/videos/4321651394780791/",
    embedCode: `<div class="fb-video" data-href="https://www.facebook.com/Glowfm/videos/4321651394780791/" data-width="500" data-show-text="false"><blockquote cite="https://www.facebook.com/Glowfm/videos/4321651394780791/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Glowfm/videos/4321651394780791/">FIRE WITHIN</a><p>FIRE WITHIN</p>Posted by <a href="https://www.facebook.com/Glowfm">Glow 99.1 FM AKURE</a> on Monday, October 27, 2025</blockquote></div>`
  }
];

export default function SocialMediaPage() {
  const [youtubeIndex, setYoutubeIndex] = useState(0);
  const [tiktokIndex, setTiktokIndex] = useState(0);
  const [instagramIndex, setInstagramIndex] = useState(0);
  const [facebookIndex, setFacebookIndex] = useState(0);

  // Initialize Facebook SDK
  useEffect(() => {
    // Load Facebook SDK
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
      script.onload = () => {
        if ((window as any).FB) {
          (window as any).FB.XFBML.parse();
        }
      };
      document.head.appendChild(script);

      return () => {
        // Cleanup if needed
        const existingScript = document.querySelector('script[src*="sdk.js"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, []);

  return (
    <div className="min-h-screen text-gray-900">
      <div className="space-y-16">
        <AnimatedSection className="rounded-3xl bg-gradient-to-br from-[#D2531F] via-[#E8653C] to-[#CC4E1F] p-6 text-white shadow-xl sm:p-8 mx-4">
          <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center md:gap-10">
            <div className="space-y-5 sm:space-y-6">
              <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/90 sm:px-4 sm:text-xs sm:tracking-[0.3em] font-bold backdrop-blur-sm">
                Social Media Control Room
              </span>
              <h1 className="text-3xl font-black sm:text-4xl md:text-5xl font-['El_Messiri'] text-white contrast-[1.2]">Glow FM Spotlight Streams</h1>
              <p className="max-w-2xl text-sm text-white/95 sm:text-base md:text-lg font-bold contrast-[1.3] font-['El_Messiri']">
                Access embeddable showreels, reel carousels, and live thread recaps curated weekly by the Glow FM digital
                team—ready to drop into your press kits, dealer groups, or campus community updates.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <GlowButton asChild size="lg" variant="accent" className="uppercase tracking-[0.2em] sm:tracking-[0.3em] bg-[#001F3F] hover:bg-[#003366] backdrop-blur-md hover:backdrop-blur-lg transition-all duration-300 hover:scale-105 border border-white/30 hover:border-white/50 shadow-lg hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] font-bold text-white">
                  <Link href="#youtube">View YouTube cascade</Link>
                </GlowButton>
                <GlowButton
                  asChild
                  size="lg"
                  variant="ghost"
                  className="border-[#001F3F]/60 bg-[#001F3F]/30 text-white uppercase tracking-[0.2em] sm:tracking-[0.3em] backdrop-blur-md hover:backdrop-blur-lg hover:bg-[#001F3F]/50 transition-all duration-300 hover:scale-105 border hover:border-white/40 shadow-lg hover:shadow-[0_8px_30px_rgba(0,31,63,0.3)] font-bold"
                >
                  <Link href="/">Back to home</Link>
                </GlowButton>
              </div>
              <FollowBar />
            </div>
            <div className="hidden min-h-[260px] rounded-3xl border border-white/30 bg-white/15 p-5 shadow-2xl md:block lg:p-6 backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/90 sm:text-sm sm:tracking-[0.35em] font-black font-['El_Messiri']">Channel Snapshot</p>
              <ul className="mt-4 space-y-3 text-sm text-white/95 font-bold font-['El_Messiri']">
                <li>New YouTube highlights premiere every Monday by 9:00 AM WAT—perfect for embedding in newsletters.</li>
                <li>TikTok challenge reels publish mid-week with duet-friendly hooks for creators and campus ambassadors.</li>
                <li>Instagram covers ship with brand-safe captions so partners can repost in under a minute.</li>
                <li>Facebook livestream links sync with on-air promos, keeping listeners one tap away.</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="youtube" delay={0.05} className="space-y-6 mx-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-gray-900 font-['El_Messiri'] contrast-[1.2] bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                YouTube Spotlight Cascade
              </h2>
              <p className="text-sm text-gray-600 font-bold font-['El_Messiri'] contrast-[1.1]">
                Glassy embeds ready to recap livestream moments, news capsules, and long-form documentaries.
              </p>
            </div>
            <GlowButton asChild variant="secondary" size="sm">
              <Link href="https://youtube.com/@glow991fm" target="_blank" rel="noreferrer">
                Visit Glow FM YouTube
              </Link>
            </GlowButton>
          </div>

          {/* YouTube Carousel with DVD Controls */}
          <div className="relative">
            {/* Holographic Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 rounded-3xl blur-3xl"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
            </div>

            {/* DVD-Style Control Bar */}
            <div className="flex items-center justify-center gap-4 mb-6 relative z-10">
              <button
                onClick={() => setYoutubeIndex((prev) => (prev === 0 ? youtubeHighlights.length - 1 : prev - 1))}
                className="group relative bg-gradient-to-br from-red-900 via-red-800 to-black text-white rounded-xl px-6 py-3 shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.7)] transition-all duration-500 border border-red-700 hover:border-red-500"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 transition-transform group-hover:-translate-x-2 duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 7l-5 5 5 5V7zm-6 5l-5 5V7l5 5z"/>
                  </svg>
                  <span className="font-['El_Messiri'] font-bold text-sm tracking-widest hidden md:inline">PREV</span>
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,1)] animate-pulse"></div>
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </button>

              {/* Digital Display */}
              <div className="relative bg-gradient-to-br from-black via-red-950 to-black text-red-400 px-8 py-3.5 rounded-xl border-2 border-red-800 shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent)] animate-pulse"></div>
                <div className="relative font-mono text-base tracking-[0.3em] font-black drop-shadow-[0_0_12px_rgba(248,113,113,0.9)]">
                  {String(youtubeIndex + 1).padStart(2, '0')} / {String(youtubeHighlights.length).padStart(2, '0')}
                </div>
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent h-full animate-scan pointer-events-none"></div>
              </div>

              <button
                onClick={() => setYoutubeIndex((prev) => (prev === youtubeHighlights.length - 1 ? 0 : prev + 1))}
                className="group relative bg-gradient-to-br from-red-900 via-red-800 to-black text-white rounded-xl px-6 py-3 shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.7)] transition-all duration-500 border border-red-700 hover:border-red-500"
              >
                <div className="flex items-center gap-2">
                  <span className="font-['El_Messiri'] font-bold text-sm tracking-widest hidden md:inline">NEXT</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 7v10l5-5-5-5zm6 0v10l5-5-5-5z"/>
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,1)] animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </button>
            </div>

            {/* Carousel Content */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-red-900/30 bg-gradient-to-br from-black/40 via-red-950/20 to-black/40 backdrop-blur-sm p-8 shadow-[0_20px_80px_rgba(220,38,38,0.3)]">
              {/* Circuit board pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="yt-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <circle cx="50" cy="50" r="2" fill="#dc2626"/>
                      <line x1="50" y1="0" x2="50" y2="50" stroke="#dc2626" strokeWidth="0.5"/>
                      <line x1="50" y1="50" x2="100" y2="50" stroke="#dc2626" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#yt-circuit)"/>
                </svg>
              </div>

              <div className="relative">
                {youtubeHighlights.map((video, idx) => (
                  <div
                    key={video.title}
                    className={`transition-all duration-700 ease-out ${
                      idx === youtubeIndex
                        ? 'opacity-100 scale-100 relative z-10'
                        : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)] animate-pulse"></div>
                        <h3 className="text-2xl font-black text-white font-['El_Messiri'] drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                          {video.title}
                        </h3>
                      </div>
                      <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-red-800/50 bg-black shadow-[0_0_60px_rgba(220,38,38,0.3)]">
                        {/* Glow effect around video */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 opacity-50 blur-xl animate-pulse"></div>
                        <iframe
                          className="relative h-full w-full z-10"
                          src={`https://www.youtube.com/embed/${video.embedId}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                      <GlowButton
                        asChild
                        size="lg"
                        variant="accent"
                        className="w-full justify-center uppercase tracking-[0.3em] text-white font-bold bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] border-2 border-red-700"
                      >
                        <a href={`https://www.youtube.com/watch?v=${video.embedId}`} target="_blank" rel="noreferrer">
                          ▶ Watch Full Episode
                        </a>
                      </GlowButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicator Dots - Futuristic Style */}
            <div className="flex justify-center gap-3 mt-6">
              {youtubeHighlights.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setYoutubeIndex(idx)}
                  className={`relative transition-all duration-500 ${
                    idx === youtubeIndex ? 'w-12 h-4' : 'w-4 h-4 hover:w-6'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-full border-2 transition-all ${
                    idx === youtubeIndex
                      ? 'border-red-600 bg-gradient-to-r from-red-600 to-orange-600 shadow-[0_0_20px_rgba(220,38,38,0.8)]'
                      : 'border-gray-600 bg-gray-700 hover:border-red-400'
                  }`}>
                    {idx === youtubeIndex && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-orange-400 animate-pulse opacity-60"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="tiktok" delay={0.1} className="space-y-6 mx-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-gray-900 font-['El_Messiri'] contrast-[1.2] bg-gradient-to-r from-black via-pink-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                TikTok Reels Carousel
              </h2>
              <p className="text-sm text-gray-600 font-bold font-['El_Messiri'] contrast-[1.1]">
                Material-inspired frames with a bold glow edge showcasing the challenges and confessions our listeners love.
              </p>
            </div>
            <GlowButton asChild variant="ghost" size="sm">
              <Link href="https://tiktok.com/@glow991fm" target="_blank" rel="noreferrer">
                See more on TikTok
              </Link>
            </GlowButton>
          </div>

          {/* TikTok Carousel with Holographic Effects */}
          <div className="relative">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-3xl animate-holographic"></div>
            
            {/* DVD-Style Controls */}
            <div className="flex items-center justify-center gap-4 mb-6 relative z-10">
              <button
                onClick={() => setTiktokIndex((prev) => (prev === 0 ? tiktokReels.length - 1 : prev - 1))}
                className="group relative bg-gradient-to-br from-black via-pink-900 to-black text-white rounded-xl px-6 py-3 shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(236,72,153,0.7)] transition-all duration-500 border border-pink-700 hover:border-pink-500"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 transition-transform group-hover:-translate-x-2 duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 7l-5 5 5 5V7zm-6 5l-5 5V7l5 5z"/>
                  </svg>
                  <span className="font-['El_Messiri'] font-bold text-sm tracking-widest hidden md:inline">PREV</span>
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,1)] animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </button>

              <div className="relative bg-gradient-to-br from-black via-purple-950 to-black text-pink-400 px-8 py-3.5 rounded-xl border-2 border-pink-800 shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent)] animate-pulse"></div>
                <div className="relative font-mono text-base tracking-[0.3em] font-black drop-shadow-[0_0_12px_rgba(244,114,182,0.9)]">
                  {String(tiktokIndex + 1).padStart(2, '0')} / {String(tiktokReels.length).padStart(2, '0')}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/20 to-transparent h-full animate-scan pointer-events-none"></div>
              </div>

              <button
                onClick={() => setTiktokIndex((prev) => (prev === tiktokReels.length - 1 ? 0 : prev + 1))}
                className="group relative bg-gradient-to-br from-black via-pink-900 to-black text-white rounded-xl px-6 py-3 shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(236,72,153,0.7)] transition-all duration-500 border border-pink-700 hover:border-pink-500"
              >
                <div className="flex items-center gap-2">
                  <span className="font-['El_Messiri'] font-bold text-sm tracking-widest hidden md:inline">NEXT</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 7v10l5-5-5-5zm6 0v10l5-5-5-5z"/>
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,1)] animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </button>
            </div>

            {/* Carousel Content - Vertical Phone Style */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl border-2 border-pink-900/30 bg-gradient-to-br from-black/40 via-purple-950/20 to-black/40 backdrop-blur-sm p-8 shadow-[0_20px_80px_rgba(236,72,153,0.3)]">
                {/* Animated particles */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)] animate-float-slow"></div>
                  <div className="absolute top-32 right-16 w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-float-slow" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-24 left-20 w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-float-slow" style={{animationDelay: '2s'}}></div>
                </div>

                <div className="relative">
                  {tiktokReels.map((reel, idx) => (
                    <div
                      key={reel.title}
                      className={`transition-all duration-700 ease-out ${
                        idx === tiktokIndex
                          ? 'opacity-100 scale-100 relative z-10'
                          : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                      }`}
                    >
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)] animate-pulse"></div>
                          <h3 className="text-xl font-black text-white font-['El_Messiri'] drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                            {reel.title}
                          </h3>
                        </div>
                        <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border-2 border-pink-800/50 bg-black shadow-[0_0_60px_rgba(236,72,153,0.3)]">
                          <div className="absolute -inset-1 bg-gradient-to-br from-pink-600 via-purple-500 to-cyan-600 opacity-50 blur-xl animate-pulse"></div>
                          <iframe
                            className="relative h-full w-full z-10"
                            src={reel.embedUrl}
                            title={reel.title}
                            allow="encrypted-media; clipboard-write"
                            allowFullScreen
                            loading="lazy"
                          />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-mono text-cyan-400 font-black tracking-wider drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                            {reel.metric}
                          </span>
                          <GlowButton
                            asChild
                            size="sm"
                            variant="accent"
                            className="uppercase tracking-[0.25em] bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-[0_0_25px_rgba(236,72,153,0.5)] border-2 border-pink-700"
                          >
                            <a href={reel.embedUrl.replace('/embed/v2/', '/video/')} target="_blank" rel="noreferrer">
                              Watch
                            </a>
                          </GlowButton>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {tiktokReels.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTiktokIndex(idx)}
                  className={`relative transition-all duration-500 ${
                    idx === tiktokIndex ? 'w-12 h-4' : 'w-4 h-4 hover:w-6'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-full border-2 transition-all ${
                    idx === tiktokIndex
                      ? 'border-pink-600 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 shadow-[0_0_20px_rgba(236,72,153,0.8)]'
                      : 'border-gray-600 bg-gray-700 hover:border-pink-400'
                  }`}>
                    {idx === tiktokIndex && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-pulse opacity-60"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="instagram" delay={0.15} className="space-y-6 mx-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-gray-900 font-['El_Messiri'] contrast-[1.2] bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                Instagram Reels Showcase
              </h2>
              <p className="text-sm text-gray-600 font-bold font-['El_Messiri'] contrast-[1.1]">
                Carousel-ready cover art and captions curated for fast reposting to your brand or campus communities.
              </p>
            </div>
            <GlowButton asChild variant="accent" size="sm">
              <Link href="https://instagram.com/glow991fm" target="_blank" rel="noreferrer">
                See more on Instagram
              </Link>
            </GlowButton>
          </div>

          {/* Instagram Carousel */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl blur-3xl animate-holographic"></div>
            
            {/* DVD Controls */}
            <div className="flex items-center justify-center gap-4 mb-6 relative z-10">
              <button
                onClick={() => setInstagramIndex((prev) => (prev === 0 ? instagramSpotlight.length - 1 : prev - 1))}
                className="group relative bg-gradient-to-br from-purple-900 via-pink-900 to-black text-white rounded-xl px-6 py-3 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] transition-all duration-500 border border-purple-700 hover:border-purple-500"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 transition-transform group-hover:-translate-x-2 duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 7l-5 5 5 5V7zm-6 5l-5 5V7l5 5z"/>
                  </svg>
                  <span className="font-['El_Messiri'] font-bold text-sm tracking-widest hidden md:inline">PREV</span>
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,1)] animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </button>

              <div className="relative bg-gradient-to-br from-black via-purple-950 to-black text-purple-400 px-8 py-3.5 rounded-xl border-2 border-purple-800 shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent)] animate-pulse"></div>
                <div className="relative font-mono text-base tracking-[0.3em] font-black drop-shadow-[0_0_12px_rgba(192,132,252,0.9)]">
                  {String(instagramIndex + 1).padStart(2, '0')} / {String(instagramSpotlight.length).padStart(2, '0')}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent h-full animate-scan pointer-events-none"></div>
              </div>

              <button
                onClick={() => setInstagramIndex((prev) => (prev === instagramSpotlight.length - 1 ? 0 : prev + 1))}
                className="group relative bg-gradient-to-br from-purple-900 via-pink-900 to-black text-white rounded-xl px-6 py-3 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] transition-all duration-500 border border-purple-700 hover:border-purple-500"
              >
                <div className="flex items-center gap-2">
                  <span className="font-['El_Messiri'] font-bold text-sm tracking-widest hidden md:inline">NEXT</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 7v10l5-5-5-5zm6 0v10l5-5-5-5z"/>
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,1)] animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </button>
            </div>

            {/* Carousel Content */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-purple-900/30 bg-gradient-to-br from-black/40 via-purple-950/20 to-black/40 backdrop-blur-sm p-8 shadow-[0_20px_80px_rgba(168,85,247,0.3)]">
              <div className="relative">
                {instagramSpotlight.map((item, idx) => (
                  <div
                    key={item.title}
                    className={`transition-all duration-700 ease-out ${
                      idx === instagramIndex
                        ? 'opacity-100 scale-100 relative z-10'
                        : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-purple-800/50 bg-black shadow-[0_0_60px_rgba(168,85,247,0.3)]">
                        <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 opacity-50 blur-xl animate-pulse"></div>
                        <Image
                          src={item.thumbnail ?? fallbackInstagramThumbnail}
                          alt={item.title}
                          fill
                          className="relative object-cover z-10"
                          sizes="(max-width:768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)] animate-pulse"></div>
                          <h3 className="text-3xl font-black text-white font-['El_Messiri'] drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-lg text-purple-200 font-semibold leading-relaxed font-['El_Messiri']">
                          {item.caption}
                        </p>
                        <GlowButton
                          asChild
                          size="lg"
                          variant="accent"
                          className="w-full justify-center uppercase tracking-[0.3em] bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] border-2 border-purple-700"
                        >
                          <a href={item.href} target="_blank" rel="noreferrer">
                            View on Instagram
                          </a>
                        </GlowButton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {instagramSpotlight.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setInstagramIndex(idx)}
                  className={`relative transition-all duration-500 ${
                    idx === instagramIndex ? 'w-12 h-4' : 'w-4 h-4 hover:w-6'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-full border-2 transition-all ${
                    idx === instagramIndex
                      ? 'border-purple-600 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 shadow-[0_0_20px_rgba(168,85,247,0.8)]'
                      : 'border-gray-600 bg-gray-700 hover:border-purple-400'
                  }`}>
                    {idx === instagramIndex && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-pulse opacity-60"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="facebook-spotlight" delay={0.2} className="space-y-6 mx-4 pb-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-gray-900 font-['El_Messiri'] contrast-[1.2] bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Facebook Live Spotlight
              </h2>
              <p className="text-sm text-gray-600 font-bold font-['El_Messiri'] contrast-[1.1]">
                Prime livestreams and premiere replays with CTAs wired straight to the Glow FM Facebook hub.
              </p>
            </div>
            <GlowButton asChild variant="secondary" size="sm">
              <Link href="https://www.facebook.com/Glowfm/" target="_blank" rel="noreferrer">
                Follow Glow FM on Facebook
              </Link>
            </GlowButton>
          </div>

          {/* Facebook Carousel with 3D Transform Effects */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-blue-600/10 rounded-3xl blur-3xl animate-holographic"></div>
            
            {/* DVD Controls */}
            <div className="flex items-center justify-center gap-4 mb-6 relative z-10">
              <button
                onClick={() => setFacebookIndex((prev) => (prev === 0 ? facebookStreams.length - 1 : prev - 1))}
                className="group relative bg-gradient-to-br from-blue-900 via-indigo-900 to-black text-white rounded-xl px-6 py-3 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] transition-all duration-500 border border-blue-700 hover:border-blue-500"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 transition-transform group-hover:-translate-x-2 duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 7l-5 5 5 5V7zm-6 5l-5 5V7l5 5z"/>
                  </svg>
                  <span className="font-['El_Messiri'] font-bold text-sm tracking-widest hidden md:inline">PREV</span>
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)] animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </button>

              <div className="relative bg-gradient-to-br from-black via-blue-950 to-black text-blue-400 px-8 py-3.5 rounded-xl border-2 border-blue-800 shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent)] animate-pulse"></div>
                <div className="relative font-mono text-base tracking-[0.3em] font-black drop-shadow-[0_0_12px_rgba(96,165,250,0.9)]">
                  {String(facebookIndex + 1).padStart(2, '0')} / {String(facebookStreams.length).padStart(2, '0')}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent h-full animate-scan pointer-events-none"></div>
              </div>

              <button
                onClick={() => setFacebookIndex((prev) => (prev === facebookStreams.length - 1 ? 0 : prev + 1))}
                className="group relative bg-gradient-to-br from-blue-900 via-indigo-900 to-black text-white rounded-xl px-6 py-3 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] transition-all duration-500 border border-blue-700 hover:border-blue-500"
              >
                <div className="flex items-center gap-2">
                  <span className="font-['El_Messiri'] font-bold text-sm tracking-widest hidden md:inline">NEXT</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-2 duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 7v10l5-5-5-5zm6 0v10l5-5-5-5z"/>
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)] animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </button>
            </div>

            {/* Carousel Content */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-blue-900/30 bg-gradient-to-br from-black/40 via-blue-950/20 to-black/40 backdrop-blur-sm p-8 shadow-[0_20px_80px_rgba(37,99,235,0.3)]">
              {/* 3D Grid Effect */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="fb-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#fb-grid)"/>
                </svg>
              </div>

              <div className="relative">
                {facebookStreams.map((stream, idx) => (
                  <div
                    key={stream.title}
                    className={`transition-all duration-700 ease-out ${
                      idx === facebookIndex
                        ? 'opacity-100 scale-100 relative z-10'
                        : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse"></div>
                          <h3 className="text-3xl font-black text-white font-['El_Messiri'] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            {stream.title}
                          </h3>
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
                          <span className="text-xs font-mono text-blue-300 tracking-wider font-bold uppercase">LIVE STREAM</span>
                        </div>
                      </div>
                      <p className="text-lg text-blue-200 font-semibold leading-relaxed font-['El_Messiri']">
                        {stream.summary}
                      </p>
                      <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-blue-800/50 bg-white shadow-[0_0_60px_rgba(37,99,235,0.3)]">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 opacity-50 blur-xl animate-pulse"></div>
                        <div 
                          className="relative w-full h-full flex items-center justify-center z-10"
                          dangerouslySetInnerHTML={{ __html: stream.embedCode }}
                        />
                      </div>
                      <GlowButton
                        asChild
                        size="lg"
                        variant="accent"
                        className="w-full justify-center uppercase tracking-[0.3em] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(37,99,235,0.8)] border-2 border-blue-700"
                      >
                        <a href={stream.videoUrl} target="_blank" rel="noreferrer">
                          ▶ Watch Full Stream
                        </a>
                      </GlowButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {facebookStreams.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setFacebookIndex(idx)}
                  className={`relative transition-all duration-500 ${
                    idx === facebookIndex ? 'w-12 h-4' : 'w-4 h-4 hover:w-6'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-full border-2 transition-all ${
                    idx === facebookIndex
                      ? 'border-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(37,99,235,0.8)]'
                      : 'border-gray-600 bg-gray-700 hover:border-blue-400'
                  }`}>
                    {idx === facebookIndex && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 animate-pulse opacity-60"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
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
              <h2 className="text-3xl font-black text-gray-900 font-['El_Messiri'] contrast-[1.2]">YouTube Spotlight Cascade</h2>
              <p className="text-sm text-gray-600 font-bold font-['El_Messiri'] contrast-[1.1]">
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

        <AnimatedSection id="tiktok" delay={0.1} className="space-y-6 mx-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-gray-900 font-['El_Messiri'] contrast-[1.2]">TikTok Reels Carousel</h2>
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

        <AnimatedSection id="instagram" delay={0.15} className="space-y-6 mx-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-gray-900 font-['El_Messiri'] contrast-[1.2]">Instagram Reels Showcase</h2>
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
          <div className="grid gap-6 md:grid-cols-3">
            {instagramSpotlight.map((item) => (
              <div key={item.title} className="rounded-3xl bg-gray-50 p-6 shadow-lg">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <div className="aspect-[16/9] relative overflow-hidden rounded-2xl border border-gray-200">
                    <Image
                      src={item.thumbnail ?? fallbackInstagramThumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 320px"
                    />
                  </div>
                  <p className="text-sm text-gray-700 font-semibold">{item.caption}</p>
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

        <AnimatedSection id="facebook-spotlight" delay={0.2} className="space-y-6 mx-4 pb-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-black text-gray-900 font-['El_Messiri'] contrast-[1.2]">Facebook Live Spotlight</h2>
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
          <div className="grid gap-6 md:grid-cols-3">
            {facebookStreams.map((stream) => (
              <div key={stream.title} className="rounded-3xl bg-gray-50 p-6 shadow-lg">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{stream.title}</h3>
                  <div className="aspect-video overflow-hidden rounded-xl border border-gray-200 bg-white">
                    {/* Facebook Video Embed */}
                    <div 
                      className="w-full h-full flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: stream.embedCode }}
                    />
                  </div>
                  <p className="text-sm text-gray-700 font-semibold">{stream.summary}</p>
                  <GlowButton
                    asChild
                    size="sm"
                    variant="accent"
                    className="w-full justify-center uppercase tracking-[0.2em] sm:tracking-[0.3em]"
                  >
                    <a href={stream.videoUrl} target="_blank" rel="noreferrer">
                      Watch on Facebook
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

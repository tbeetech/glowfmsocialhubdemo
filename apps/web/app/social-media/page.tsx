"use client";

import Link from "next/link";
import { FollowBar } from "@/components/FollowBar";
import { Carousel } from "@/components/ui/Carousel";
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook, FaExternalLinkAlt } from "react-icons/fa";

// Simplified classes for better performance
const buttonClass =
  "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-slate-100 transition-colors duration-200 hover:bg-orange-500/20 sm:text-xs sm:tracking-[0.35em] font-['El_Messiri']";

const ghostButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-slate-300 transition-colors duration-200 hover:bg-white/5 sm:text-xs sm:tracking-[0.35em] font-['El_Messiri']";

const compactCarouselItemClass = "min-w-[70%] sm:min-w-[40%] md:min-w-[30%] lg:min-w-[22%] xl:min-w-[18%]";

// Removed backdrop-blur and complex shadows for performance
const glassPanel =
  "rounded-2xl border border-white/10 bg-[#0a0a0a] relative";

// Expanded Data (6 items each)
const youtubeHighlights = [
  { title: "Concise Educational Trends", embedId: "S7VAYn4Zi1o" },
  { title: "GlowFm99.1 Business News Updates", embedId: "0ASXKv2_0C4" },
  { title: "Latest Glow Moment Stream", embedId: "9h_lcRPbw8E" },
  { title: "Tech Talk: Future of Radio", embedId: "S7VAYn4Zi1o" }, // Reused ID for demo
  { title: "Community Spotlight", embedId: "0ASXKv2_0C4" }, // Reused ID for demo
  { title: "Music Countdown Highlights", embedId: "9h_lcRPbw8E" } // Reused ID for demo
];

const tiktokReels = [
  { title: "Glow Dance Tunnel", embedUrl: "https://www.tiktok.com/embed/v2/7556648983347596562", metric: "45K plays" },
  { title: "Kayefi Nla Midnight Confession", embedUrl: "https://www.tiktok.com/embed/v2/7548485844806503685", metric: "33K plays" },
  { title: "Double Joy Locker Room Banter", embedUrl: "https://www.tiktok.com/embed/v2/7555841229204851986", metric: "28K plays" },
  { title: "Studio Vibes Check", embedUrl: "https://www.tiktok.com/embed/v2/7556648983347596562", metric: "12K plays" },
  { title: "Presenter Challenge", embedUrl: "https://www.tiktok.com/embed/v2/7548485844806503685", metric: "50K plays" },
  { title: "Behind The Scenes", embedUrl: "https://www.tiktok.com/embed/v2/7555841229204851986", metric: "19K plays" }
];

const instagramSpotlight = [
  { title: "Ember Countdown Reels", embedId: "DRy8tBLDI8b", href: "https://www.instagram.com/reel/DRy8tBLDI8b/" },
  { title: "Glow Kiddies Fan Reactions", embedId: "DRuDlH5DE6c", href: "https://www.instagram.com/reel/DRuDlH5DE6c/" },
  { title: "Women's World Backstage", embedId: "DRhA0ylAkWq", href: "https://www.instagram.com/reel/DRhA0ylAkWq/" },
  { title: "Studio Guest: DJ X", embedId: "DRMnKO6jBJh", href: "https://www.instagram.com/reel/DRMnKO6jBJh/" }
];

const facebookStreams = [
  { 
    title: "Ale alariwo", 
    summary: "Watch the latest episode of Ale alariwo on Glow FM", 
    embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FGlowfm%2Fvideos%2F1415598613542699%2F&show_text=false&width=560&t=0" 
  },
  { 
    title: "Political Hangout", 
    summary: "Catch up with the latest political discussions and analysis", 
    embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FGlowfm%2Fvideos%2F1020433393608370%2F&show_text=false&width=560&t=0" 
  },
  { 
    title: "Isues in the dialies", 
    summary: "Discussing the pressing issues in the dailies", 
    embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FGlowfm%2Fvideos%2F1898416690751080%2F&show_text=false&width=560&t=0" 
  }
];

export default function SocialMediaPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030511] text-slate-100 font-['El_Messiri']">
      {/* Removed SpaceStationBackdrop for performance */}
      
      <div className="relative z-10 mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        {/* Hero Section Removed as requested */}

        {/* YouTube Section */}
        <SocialSection
          id="youtube-highlights"
          title="Mission feeds"
          icon={<FaYoutube className="text-2xl" />}
          iconColorClass="bg-red-600/20 text-red-500"
          description="Catch up on our latest studio sessions, exclusive interviews, and live broadcasts."
          viewMoreLink="https://www.youtube.com/@glow991fm"
          viewMoreText={<><FaYoutube className="mr-2 text-lg" /> Launch YouTube</>}
        >
          <Carousel itemClassName={compactCarouselItemClass}>
            {youtubeHighlights.map((highlight, idx) => (
              <div key={idx} className="group relative flex flex-col h-full">
                {/* TV Frame Design */}
                <div className="relative rounded-xl border-2 border-gray-800 bg-gray-900 shadow-xl overflow-hidden ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-[1.02]">
                  {/* Screen Glare */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                  
                  <div className="aspect-video w-full bg-black relative z-10">
                    <iframe
                      title={highlight.title}
                      src={`https://www.youtube.com/embed/${highlight.embedId}`}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 'none' }}
                    />
                  </div>
                  
                  {/* TV Chin */}
                  <div className="h-8 bg-gray-900 border-t border-white/5 flex items-center justify-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="w-12 h-0.5 bg-white/10 rounded-full"></div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col justify-between gap-2 px-2">
                  <h3 className="line-clamp-2 text-lg font-bold text-white group-hover:text-orange-400 transition-colors font-['El_Messiri']">{highlight.title}</h3>
                  <span className="w-fit inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-slate-400 font-bold border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    Studio relay
                  </span>
                </div>
              </div>
            ))}
          </Carousel>
        </SocialSection>

        {/* TikTok Section */}
        <SocialSection
          id="tiktok-reels"
          title="Shortwave reels"
          icon={<FaTiktok className="text-2xl" />}
          iconColorClass="bg-pink-600/20 text-pink-500"
          description="Watch trending moments, funny clips, and challenges from the Glow FM team."
          viewMoreLink="https://www.tiktok.com/@glow991fm"
          viewMoreText={<><FaTiktok className="mr-2 text-lg" /> View TikTok</>}
        >
          <Carousel itemClassName="min-w-[320px] max-w-[350px]">
            {tiktokReels.map((reel, idx) => (
              <div key={idx} className="group relative flex flex-col h-full">
                {/* TV Frame Design */}
                <div className="relative rounded-xl border-4 border-gray-900 bg-gray-900 shadow-xl overflow-hidden ring-1 ring-white/10">
                  {/* Screen Glare/Reflection */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-xl"></div>
                  
                  <div className="h-[600px] w-full bg-black relative z-10">
                    <iframe 
                      title={reel.title} 
                      src={reel.embedUrl} 
                      className="h-full w-full" 
                      loading="lazy" 
                      allowFullScreen 
                      style={{ border: 'none' }}
                    />
                  </div>
                </div>
                
                {/* TV Stand / Label */}
                <div className="mt-4 text-center px-4">
                  <h3 className="line-clamp-1 text-lg font-bold text-white group-hover:text-pink-400 transition-colors font-['El_Messiri']">{reel.title}</h3>
                  <span className="mt-1 inline-block rounded-full bg-white/5 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-slate-400 font-bold border border-white/5">
                    {reel.metric}
                  </span>
                </div>
              </div>
            ))}
          </Carousel>
        </SocialSection>

        {/* Instagram Section */}
        <SocialSection
          id="instagram-spotlight"
          title="Signal boards"
          icon={<FaInstagram className="text-2xl" />}
          iconColorClass="bg-purple-600/20 text-purple-500"
          description="See behind-the-scenes photos, presenter stories, and daily updates."
          viewMoreLink="https://www.instagram.com/glow991fm/"
          viewMoreText={<><FaInstagram className="mr-2 text-lg" /> View Instagram</>}
        >
          <Carousel itemClassName="min-w-[320px] max-w-[350px]">
            {instagramSpotlight.map((item, idx) => (
              <div key={idx} className="group relative flex flex-col h-full">
                {/* TV Frame Design */}
                <div className="relative rounded-xl border-2 border-gray-800 bg-gray-900 shadow-xl overflow-hidden ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-[1.02]">
                  {/* Screen Glare */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                  
                  <div className="relative h-[600px] w-full bg-black z-10">
                    <iframe
                      src={`https://www.instagram.com/reel/${item.embedId}/embed`}
                      className="h-full w-full"
                      frameBorder="0"
                      scrolling="no"
                      allowFullScreen
                      style={{ border: 'none', overflow: 'hidden' }}
                    />
                  </div>
                </div>

                <div className="mt-4 space-y-2 px-2">
                  <h3 className="line-clamp-1 text-lg font-bold text-white group-hover:text-purple-400 transition-colors font-['El_Messiri']">{item.title}</h3>
                  <Link href={item.href} target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:text-white flex items-center gap-1 uppercase tracking-wider font-bold font-['El_Messiri']">
                    View Post <FaExternalLinkAlt className="text-[0.6rem]" />
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </SocialSection>

        {/* Facebook Section */}
        <SocialSection
          id="facebook-spotlight"
          title="Facebook Shows Showcase"
          icon={<FaFacebook className="text-2xl" />}
          iconColorClass="bg-blue-600/20 text-blue-500"
          description="Follow our official page for community news, events, and live discussions."
          viewMoreLink="https://www.facebook.com/Glowfm/"
          viewMoreText={<><FaFacebook className="mr-2 text-lg" /> Follow on Facebook</>}
        >
          <Carousel itemClassName={compactCarouselItemClass}>
            {facebookStreams.map((stream, idx) => (
              <div key={idx} className="group relative flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:bg-white/5 h-full">
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-white relative">
                    <iframe
                      title={stream.title}
                      src={stream.embedUrl}
                      className="h-full w-full"
                      allowFullScreen
                      loading="lazy"
                      style={{ border: 'none', overflow: 'hidden' }}
                      scrolling="no" 
                      frameBorder="0" 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="line-clamp-1 text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{stream.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{stream.summary}</p>
                  <Link href="https://www.facebook.com/Glowfm/" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.6rem] font-bold uppercase tracking-widest text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all">
                    View on Facebook <FaExternalLinkAlt className="ml-2 text-[0.5rem]" />
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        </SocialSection>

        <FollowBar />
      </div>
    </div>
  );
}

function SocialSection({
  id,
  title,
  icon,
  iconColorClass,
  description,
  viewMoreLink,
  viewMoreText,
  children
}: {
  id: string;
  title: string;
  icon: React.ReactNode;
  iconColorClass: string;
  description: string;
  viewMoreLink: string;
  viewMoreText: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    // Replaced AnimatedSection with simple section for performance
    <section id={id} className="space-y-8">
      <div className={`${glassPanel} space-y-8`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-white/5 pb-6 mx-5 sm:mx-8 mt-5 sm:mt-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-xl ${iconColorClass}`}>
                {icon}
              </div>
              {/* Replaced AnimatedWordReveal with simple text */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
            </div>
            <p className="max-w-2xl text-sm sm:text-base text-slate-300 font-medium">
              {description}
            </p>
          </div>
          <Link href={viewMoreLink} target="_blank" rel="noreferrer" className={`${ghostButtonClass} w-full sm:w-auto whitespace-nowrap`}>
            {viewMoreText}
          </Link>
        </div>
        <div className="pb-5 sm:pb-8">
          {children}
        </div>
        <div className="flex justify-center pt-4 sm:hidden px-5 pb-5">
           <Link href={viewMoreLink} target="_blank" rel="noreferrer" className={`${buttonClass} w-full`}>
            {viewMoreText}
          </Link>
        </div>
      </div>
    </section>
  );
}

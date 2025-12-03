"use client";

import Image from "next/image";
import Link from "next/link";
import { FollowBar } from "@/components/FollowBar";
import { Carousel } from "@/components/ui/Carousel";
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook, FaExternalLinkAlt } from "react-icons/fa";

// Simplified classes for better performance
const buttonClass =
  "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-slate-100 transition-colors duration-200 hover:bg-orange-500/20 sm:text-xs sm:tracking-[0.35em] font-['El_Messiri']";

const ghostButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-slate-300 transition-colors duration-200 hover:bg-white/5 sm:text-xs sm:tracking-[0.35em] font-['El_Messiri']";

// Removed backdrop-blur and complex shadows for performance
const glassPanel =
  "rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] p-6 sm:p-10 relative overflow-hidden";

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

const fallbackInstagramThumbnail = "/images/Retro-Futuristic%20Glow%2099.1%20FM.png";

const instagramSpotlight = [
  { title: "Ember Countdown Reels", thumbnail: fallbackInstagramThumbnail, caption: "Daily Ember Challenge teasers...", href: "https://www.instagram.com/reel/DPBV0b7gP_f/" },
  { title: "Glow Kiddies Fan Reactions", thumbnail: fallbackInstagramThumbnail, caption: "Audience shout-outs...", href: "https://www.instagram.com/reel/DPLg4ihCuqw/" },
  { title: "Women's World Backstage", thumbnail: fallbackInstagramThumbnail, caption: "Highlights from our sisterhood panels...", href: "https://www.instagram.com/reel/DO6ReQPDQJp/" },
  { title: "Studio Guest: DJ X", thumbnail: fallbackInstagramThumbnail, caption: "Live mix session highlights.", href: "https://www.instagram.com/glow991fm" },
  { title: "Street Vox Pop", thumbnail: fallbackInstagramThumbnail, caption: "What's your favorite track?", href: "https://www.instagram.com/glow991fm" },
  { title: "Weekend Vibes", thumbnail: fallbackInstagramThumbnail, caption: "Getting ready for the weekend show.", href: "https://www.instagram.com/glow991fm" }
];

const facebookStreams = [
  { 
    title: "Glow FM Timeline", 
    summary: "Latest updates from our official page.", 
    embedUrl: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fglow991fm&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
  },
  { 
    title: "Glow FM Events", 
    summary: "Upcoming shows and community events.", 
    embedUrl: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fglow991fm&tabs=events&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
  },
  { 
    title: "Glow FM Messages", 
    summary: "Send us a message directly.", 
    embedUrl: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fglow991fm&tabs=messages&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
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
          description="Biffting after fleet effects wash over each embed, keeping our studio captures cohesive across newsletters, decks, and live monitor walls."
          viewMoreLink="https://www.youtube.com/@glow991fm"
          viewMoreText="Launch YouTube"
        >
          <Carousel>
            {youtubeHighlights.map((highlight, idx) => (
              <div key={idx} className="group relative flex flex-col h-full">
                {/* TV Frame Design */}
                <div className="relative rounded-3xl border-4 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-[1.02]">
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
          description="A particlelated lane for TikTok drops with measured metrics and mirrored typography for fast quoting."
          viewMoreLink="https://www.tiktok.com/@glow991fm"
          viewMoreText="View TikTok"
        >
          <Carousel itemClassName="min-w-[325px] max-w-[325px]">
            {tiktokReels.map((reel, idx) => (
              <div key={idx} className="group relative flex flex-col h-full">
                {/* TV Frame Design */}
                <div className="relative rounded-[2.5rem] border-8 border-gray-900 bg-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
                  {/* Screen Glare/Reflection */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-[2rem]"></div>
                  
                  <div className="aspect-[9/16] w-full bg-black relative z-10">
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
          description="Classic transparent fabrication keeps fan shots, studio stills, and vertical cuts aligned for reporters and partners."
          viewMoreLink="https://www.instagram.com/glow991fm/"
          viewMoreText="View Instagram"
        >
          <Carousel>
            {instagramSpotlight.map((item, idx) => (
              <div key={idx} className="group relative flex flex-col h-full">
                {/* TV Frame Design */}
                <div className="relative rounded-[2rem] border-4 border-gray-800 bg-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-[1.02]">
                  {/* Screen Glare */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                  
                  <div className="relative aspect-[4/5] w-full bg-black z-10">
                    <Image
                      src={item.thumbnail ?? fallbackInstagramThumbnail}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-sm text-white font-medium line-clamp-3 font-['El_Messiri']">{item.caption}</p>
                    </div>
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
          title="Legacy streams"
          icon={<FaFacebook className="text-2xl" />}
          iconColorClass="bg-blue-600/20 text-blue-500"
          description="Embedded cards fall back elegantly whenever Meta protects a stream. The cards stay aligned with the rest of the multi-plane deck."
          viewMoreLink="https://www.facebook.com/Glowfm/"
          viewMoreText="Follow on Facebook"
        >
          <Carousel>
            {facebookStreams.map((stream, idx) => (
              <div key={idx} className="group relative flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 transition-colors hover:bg-white/5 h-full">
                <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white relative">
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
  viewMoreText: string;
  children: React.ReactNode;
}) {
  return (
    // Replaced AnimatedSection with simple section for performance
    <section id={id} className="space-y-8">
      <div className={`${glassPanel} space-y-8`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-white/5 pb-6">
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
        {children}
        <div className="flex justify-center pt-4 sm:hidden">
           <Link href={viewMoreLink} target="_blank" rel="noreferrer" className={`${buttonClass} w-full`}>
            View All {title}
          </Link>
        </div>
      </div>
    </section>
  );
}

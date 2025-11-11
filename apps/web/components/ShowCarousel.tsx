"use client";
import { useState } from "react";
import Image from "next/image";
import { getAsset } from "@/lib/drive-assets";

interface Show {
  id: string;
  name: string;
  category: string;
  time: string;
  image: string;
}

const shows: Show[] = [
  { id: "1", name: "IJI AYO", category: "Cultural & Entertainment", time: "8:00am", image: "showIjiAyo" },
  { id: "2", name: "Millionaires Mindset", category: "Business & Finance", time: "10:00am", image: "showMillionairesMindset" },
  { id: "3", name: "Glow Kiddies", category: "Children & Family", time: "2:00pm", image: "showGlowKiddies" },
  { id: "4", name: "LET's TALK", category: "Discussion & Talk", time: "4:00pm", image: "showLetsTalk" },
  { id: "5", name: "YOU AND THE LAW", category: "Legal & Advice", time: "6:00pm", image: "showYouAndTheLaw" },
  { id: "6", name: "Love Saturday", category: "Music & Romance", time: "12:00pm", image: "showLoveSaturday" },
  { id: "7", name: "Kayefi Nla", category: "Culture & Society", time: "7:00pm", image: "showKayefiNla" },
  { id: "8", name: "Women's World", category: "Women & Lifestyle", time: "3:00pm", image: "showWomensWorld" },
  { id: "9", name: "The News", category: "News & Current Affairs", time: "1:00pm", image: "showTheNews" },
];

export function ShowCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= shows.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? shows.length - 1 : prev - 1));
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setIsDragging(false);
  };

  // Mouse handlers for desktop dragging
  const onMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(0);
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleSeeNow = (showName: string) => {
    // Map show names to specific Facebook URLs as requested
    const showLinks: Record<string, string> = {
      "ALE ALARIWO": "https://www.facebook.com/share/v/1JQMHV1kLm/",
      "GLOW KIDDIES": "https://www.facebook.com/share/v/16cLa7JJam/",
      "Glow Kiddies": "https://www.facebook.com/share/v/16cLa7JJam/",
      "WOMEN'S WORLD": "https://www.facebook.com/share/v/17Zto6DiSc/",
      "Women's World": "https://www.facebook.com/share/v/17Zto6DiSc/",
    };

    const url = showLinks[showName] || "https://www.facebook.com/Glowfm/live_videos";
    window.open(url, "_blank");
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 compact:left-4 tablet:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-br from-orange-500/90 to-yellow-500/90 backdrop-blur-sm rounded-full p-2 compact:p-3 shadow-[0_0_30px_rgba(251,146,60,0.6)] hover:shadow-[0_0_50px_rgba(251,146,60,1)] hover:scale-110 transition-all duration-300 group border-2 border-orange-400/50"
        aria-label="Previous show"
      >
        <svg className="w-5 h-5 compact:w-6 compact:h-6 text-black group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 compact:right-4 tablet:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-br from-orange-500/90 to-yellow-500/90 backdrop-blur-sm rounded-full p-2 compact:p-3 shadow-[0_0_30px_rgba(251,146,60,0.6)] hover:shadow-[0_0_50px_rgba(251,146,60,1)] hover:scale-110 transition-all duration-300 group border-2 border-orange-400/50"
        aria-label="Next show"
      >
        <svg className="w-5 h-5 compact:w-6 compact:h-6 text-black group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Horizontal Scrolling Container */}
      <div className="px-12 compact:px-16 tablet:px-20 py-6 compact:py-8">
        <div 
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          {/* Carousel Track */}
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              pointerEvents: isDragging ? 'none' : 'auto'
            }}
          >
            {shows.map((show) => (
              <div
                key={show.id}
                className="min-w-full px-2 compact:px-4"
              >
                <div className="max-w-sm mx-auto">
                  {/* Show Card with Liquid Crystal Background */}
                  <div className="group relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(251,146,60,0.4),0_0_100px_rgba(234,179,8,0.3)] hover:shadow-[0_0_80px_rgba(251,146,60,0.7),0_0_120px_rgba(234,179,8,0.5)] transition-all duration-500 border-2 border-orange-500/30 hover:border-orange-400/60">
                    
                    {/* Liquid Crystal Wavering Background Effect */}
                    <div className="absolute inset-0 opacity-30">
                      {/* Animated Gradient Waves */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-yellow-500/20 to-orange-600/20 animate-pulse"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.4),transparent_50%)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.4),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.3),transparent_60%)] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    </div>

                    {/* Electronic Circuit Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `
                          linear-gradient(90deg, rgba(251,146,60,0.5) 1px, transparent 1px),
                          linear-gradient(rgba(234,179,8,0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: '30px 30px'
                      }}></div>
                    </div>

                    {/* Wavering Liquid Effect Lines */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500/50 via-transparent to-yellow-500/50 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                      <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500/50 via-transparent to-orange-500/50 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full blur-sm animate-ping"></div>
                      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full blur-sm animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-orange-500 rounded-full blur-sm animate-ping" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-300 rounded-full blur-sm animate-ping" style={{ animationDelay: '1.5s' }}></div>
                    </div>

                    {/* Corner Electronic Accents */}
                    <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-orange-500/80 rounded-tl-xl"></div>
                    <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-yellow-500/80 rounded-tr-xl"></div>
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-yellow-500/80 rounded-bl-xl"></div>
                    <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-orange-500/80 rounded-br-xl"></div>

                    {/* Show Image with LCD Effect */}
                    <div className="relative h-64 compact:h-72 sp:h-80 tablet:h-96 w-full overflow-hidden">
                      {/* LCD Scanline Effect */}
                      <div className="absolute inset-0 z-10 pointer-events-none" style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.15) 3px)',
                        backgroundSize: '100% 3px'
                      }}></div>
                      
                      {/* Glowing Frame */}
                      <div className="absolute inset-0 z-10 border-4 border-orange-500/20 group-hover:border-orange-400/40 transition-all duration-500 shadow-[inset_0_0_30px_rgba(251,146,60,0.3)]"></div>
                      
                      <Image
                        src={getAsset(show.image as any)}
                        alt={show.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Show Details with Electronic Style */}
                    <div className="relative p-5 compact:p-6 tablet:p-8 text-center bg-gradient-to-b from-slate-950/95 to-indigo-950/95 backdrop-blur-xl border-t-2 border-orange-500/30">
                      {/* Title with Glowing Effect */}
                      <h3 className="text-xl compact:text-2xl tablet:text-3xl font-display font-black mb-2 compact:mb-3 font-['El_Messiri'] bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,146,60,0.8)] group-hover:drop-shadow-[0_0_30px_rgba(251,146,60,1)] transition-all duration-500">
                        {show.name}
                      </h3>
                      
                      {/* Category with Neon Effect */}
                      <p className="text-sm compact:text-base text-yellow-300/90 mb-3 compact:mb-4 font-body font-['El_Messiri'] tracking-wide drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]">
                        {show.category}
                      </p>
                      
                      {/* Time Display with LCD Style */}
                      <div className="flex items-center justify-center gap-2 mb-4 compact:mb-6 bg-black/50 border border-orange-500/40 rounded-full px-4 py-2 inline-flex mx-auto shadow-[inset_0_0_20px_rgba(251,146,60,0.3)]">
                        <svg className="w-4 h-4 compact:w-5 compact:h-5 text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="font-body font-['El_Messiri'] font-bold text-sm compact:text-base text-orange-300 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]">{show.time}</span>
                      </div>
                      
                      {/* Electronic Button */}
                      <button 
                        onClick={() => handleSeeNow(show.name)}
                        className="relative bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-black py-2.5 compact:py-3 px-8 compact:px-10 rounded-full hover:scale-105 transition-all duration-300 font-body text-sm compact:text-base shadow-[0_0_30px_rgba(251,146,60,0.6),inset_0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_50px_rgba(251,146,60,1),inset_0_0_30px_rgba(234,179,8,0.5)] font-['El_Messiri'] font-black border-2 border-yellow-400/50 overflow-hidden group/btn"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          See Now
                          <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        {/* Button Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300"></div>
                      </button>

                      {/* Digital Decoration Dots */}
                      <div className="flex justify-center gap-2 mt-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_rgba(251,146,60,0.8)]"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse shadow-[0_0_10px_rgba(234,179,8,0.8)]" style={{ animationDelay: '0.3s' }}></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_rgba(251,146,60,0.8)]" style={{ animationDelay: '0.6s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Pagination Dots */}
      <div className="flex justify-center gap-2 compact:gap-3 mt-4 compact:mt-6">
        {shows.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 compact:h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-gradient-to-r from-orange-500 to-yellow-500 w-8 compact:w-10 shadow-[0_0_15px_rgba(251,146,60,0.8)]"
                : "bg-slate-700 hover:bg-orange-500/50 w-2 compact:w-2.5 hover:shadow-[0_0_10px_rgba(251,146,60,0.5)]"
            }`}
            aria-label={`Go to ${shows[index].name}`}
          />
        ))}
      </div>
    </div>
  );
}

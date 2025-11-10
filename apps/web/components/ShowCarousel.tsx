"use client";
import { useState, useEffect } from "react";
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
  const [isDesktop, setIsDesktop] = useState(true);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const itemsPerPage = isDesktop ? 3 : 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      (prev + itemsPerPage >= shows.length ? 0 : prev + itemsPerPage)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      (prev - itemsPerPage < 0 ? Math.max(shows.length - itemsPerPage, 0) : prev - itemsPerPage)
    );
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

  const visibleShows = shows.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/* DVD-Style Control Bar */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {/* Previous Button - DVD Style */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="group relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-lg px-6 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.5)] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-gray-700 hover:border-indigo-500"
          aria-label="Previous shows"
        >
          <div className="flex items-center gap-2">
            {/* DVD Previous Icon */}
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 7l-5 5 5 5V7zm-6 5l-5 5V7l5 5z"/>
            </svg>
            <span className="font-['El_Messiri'] font-bold text-sm tracking-wider hidden md:inline">PREV</span>
          </div>
          {/* LED Indicator */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)] group-disabled:bg-red-500 group-disabled:shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
        </button>

        {/* Position Indicator - DVD Display Style */}
        <div className="bg-gradient-to-br from-gray-900 to-black text-green-400 px-6 py-3 rounded-lg border border-gray-700 shadow-inner font-mono text-sm tracking-widest font-bold">
          <span className="text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
            {String(Math.floor(currentIndex / itemsPerPage) + 1).padStart(2, '0')} / {String(Math.ceil(shows.length / itemsPerPage)).padStart(2, '0')}
          </span>
        </div>

        {/* Next Button - DVD Style */}
        <button
          onClick={nextSlide}
          disabled={currentIndex + itemsPerPage >= shows.length}
          className="group relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-lg px-6 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.5)] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-gray-700 hover:border-indigo-500"
          aria-label="Next shows"
        >
          <div className="flex items-center gap-2">
            <span className="font-['El_Messiri'] font-bold text-sm tracking-wider hidden md:inline">NEXT</span>
            {/* DVD Next Icon */}
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 7v10l5-5-5-5zm6 0v10l5-5-5-5z"/>
            </svg>
          </div>
          {/* LED Indicator */}
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)] group-disabled:bg-red-500 group-disabled:shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
        </button>
      </div>

      {/* Shows Container with updated layout */}
      <div className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleShows.map((show) => (
            <div
              key={show.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Show Image - Full visibility, no overlay */}
              <div className="relative h-80 w-full">
                <Image
                  src={getAsset(show.image as any)}
                  alt={show.name}
                  fill
                  className="object-cover rounded-t-3xl"
                />
              </div>

              {/* Show Details - Completely Below Image */}
              <div className="p-6 text-center bg-white">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {show.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 font-body">
                  {show.category}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-body">{show.time}</span>
                </div>
                <button 
                  onClick={() => handleSeeNow(show.name)}
                  className="bg-indigo-900 text-white py-2.5 px-8 rounded-full hover:bg-indigo-800 transition-colors font-body text-sm shadow-md hover:shadow-lg"
                >
                  See Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots - DVD Style */}
      <div className="flex justify-center gap-3 mt-8">
        {Array.from({ length: Math.ceil(shows.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
            className={`relative transition-all ${
              Math.floor(currentIndex / itemsPerPage) === index
                ? "w-10 h-3"
                : "w-3 h-3 hover:w-4"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Outer Ring */}
            <div className={`absolute inset-0 rounded-full border-2 transition-all ${
              Math.floor(currentIndex / itemsPerPage) === index
                ? "border-indigo-600 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-[0_0_15px_rgba(99,102,241,0.6)]"
                : "border-gray-300 bg-gray-200 hover:border-gray-400"
            }`}>
              {/* LED Glow Effect for Active */}
              {Math.floor(currentIndex / itemsPerPage) === index && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse opacity-50"></div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3 >= shows.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(shows.length - 3, 0) : prev - 3));
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

  const visibleShows = shows.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all"
        aria-label="Previous shows"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all"
        aria-label="Next shows"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Shows Container with updated layout */}
      <div className="px-16 py-4">
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

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.ceil(shows.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 3)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              Math.floor(currentIndex / 3) === index
                ? "bg-indigo-900 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

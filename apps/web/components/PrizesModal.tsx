"use client";

import { useState } from "react";
import Image from "next/image";

interface PrizesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const prizes = [
  {
    id: 1,
    name: "Premium Tote Bag",
    description: "Exclusive Glow FM branded tote bag with premium material",
    image: "/grandprices.png", // Using available image
    category: "Accessories"
  },
  {
    id: 2,
    name: "Executive Jotter",
    description: "Professional notebook with Glow FM branding",
    image: "/grandprices.png",
    category: "Stationery"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable wireless speaker for music on the go",
    image: "/grandprices.png",
    category: "Electronics"
  },
  {
    id: 4,
    name: "Branded T-Shirts",
    description: "Stylish Glow FM merchandise t-shirts",
    image: "/grandprices.png",
    category: "Apparel"
  },
  {
    id: 5,
    name: "Power Bank",
    description: "Mini power bank to keep you charged",
    image: "/grandprices.png",
    category: "Electronics"
  },
  {
    id: 6,
    name: "Laptop Computer",
    description: "Grand prize laptop for the ultimate winner",
    image: "/grandprices.png",
    category: "Grand Prize"
  },
];

export function PrizesModal({ isOpen, onClose }: PrizesModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % prizes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + prizes.length) % prizes.length);
  };

  const currentPrize = prizes[currentIndex];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
      style={{ animation: 'fadeIn 0.3s ease-out' }}
      onClick={handleBackdropClick}
    >
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border border-orange-500/10 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
      </div>

      <div 
        className="relative bg-gradient-to-br from-slate-900/95 via-indigo-950/95 to-slate-900/95 backdrop-blur-2xl rounded-3xl shadow-[0_0_100px_rgba(99,102,241,0.5)] border border-cyan-500/30 max-w-5xl w-full max-h-[90vh] overflow-hidden"
        style={{ animation: 'slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Holographic Scanline Effect */}
        <div className="absolute inset-0 scanline opacity-20 pointer-events-none"></div>

        {/* Circuit Board Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-prizes" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className="text-cyan-400"/>
                <line x1="50" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400"/>
                <line x1="50" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-prizes)"/>
          </svg>
        </div>

        {/* Header */}
        <div className="relative bg-gradient-to-r from-orange-600/90 via-red-600/90 to-orange-600/90 p-8 text-white border-b-2 border-cyan-500/50 shadow-[0_10px_50px_rgba(251,146,60,0.3)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/20 rounded-full -ml-12 -mb-12 blur-3xl"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-all hover:rotate-90 duration-300 backdrop-blur-sm bg-white/10 rounded-full p-2 border border-white/20 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-display font-bold mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] font-['El_Messiri']">
              🏆 Ember Challenge Prizes
            </h2>
            <p className="text-white/90 font-body drop-shadow font-['El_Messiri']">
              Amazing rewards await the winners!
            </p>
          </div>
        </div>

        {/* Main Content - Carousel */}
        <div className="relative p-8 mini:p-4 compact:p-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Prize Image */}
            <div className="flex-1 relative">
              <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.3)] bg-gradient-to-br from-slate-800/50 to-indigo-900/50 backdrop-blur-sm">
                <Image
                  src={currentPrize.image}
                  alt={currentPrize.name}
                  fill
                  className="object-contain p-4 transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Holographic Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-orange-500/10 pointer-events-none"></div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(251,146,60,0.5)] border border-orange-300/50 font-['El_Messiri']">
                {currentPrize.category}
              </div>
            </div>

            {/* Prize Details */}
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-3xl mini:text-2xl compact:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 mb-3 font-['El_Messiri'] drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]">
                  {currentPrize.name}
                </h3>
                <p className="text-gray-300 text-lg font-body leading-relaxed font-['El_Messiri']">
                  {currentPrize.description}
                </p>
              </div>

              {/* DVD-Style Navigation Controls */}
              <div className="flex items-center justify-center gap-4 pt-4">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="group relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-lg px-6 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.5)] transition-all duration-300 border border-gray-700 hover:border-cyan-500"
                  aria-label="Previous prize"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 7l-5 5 5 5V7zm-6 5l-5 5V7l5 5z"/>
                    </svg>
                    <span className="font-['El_Messiri'] font-bold text-sm tracking-wider">PREV</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                </button>

                {/* Position Indicator */}
                <div className="bg-gradient-to-br from-gray-900 to-black text-cyan-400 px-6 py-3 rounded-lg border border-gray-700 shadow-inner font-mono text-sm tracking-widest font-bold">
                  <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(prizes.length).padStart(2, '0')}
                  </span>
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="group relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white rounded-lg px-6 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_30px_rgba(99,102,241,0.5)] transition-all duration-300 border border-gray-700 hover:border-cyan-500"
                  aria-label="Next prize"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-['El_Messiri'] font-bold text-sm tracking-wider">NEXT</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 7v10l5-5-5-5zm6 0v10l5-5-5-5z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                </button>
              </div>

              {/* Prize Number Indicators */}
              <div className="flex justify-center gap-3 pt-4">
                {prizes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative transition-all ${
                      currentIndex === index ? "w-10 h-3" : "w-3 h-3 hover:w-4"
                    }`}
                    aria-label={`Go to prize ${index + 1}`}
                  >
                    <div className={`absolute inset-0 rounded-full border-2 transition-all ${
                      currentIndex === index
                        ? "border-orange-500 bg-gradient-to-r from-orange-600 to-red-600 shadow-[0_0_15px_rgba(251,146,60,0.8)]"
                        : "border-gray-600 bg-gray-700 hover:border-gray-500"
                    }`}>
                      {currentIndex === index && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-red-400 animate-pulse opacity-50"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative p-6 bg-gradient-to-r from-slate-900/90 to-indigo-950/90 border-t-2 border-cyan-500/50">
          <p className="text-center text-sm text-gray-400 font-body font-['El_Messiri']">
            ✨ Register for the Ember Challenge to win these amazing prizes! ✨
          </p>
        </div>
      </div>
    </div>
  );
}

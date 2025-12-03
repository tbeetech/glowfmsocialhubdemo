"use client";

import { useState, useRef, useEffect } from "react";

export function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="font-['El_Messiri'] max-w-full mx-auto" style={{ maxWidth: '350px' }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes radio-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: .5; }
          }
          .radio-status-dot {
            animation: radio-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .vinyl-spin {
            animation: spin 3s linear infinite;
          }
        `
      }} />

      <div 
        className="rounded-[10px] overflow-hidden" 
        style={{
          background: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        <div className="flex items-center gap-3 p-4">
          <img 
            src="https://glow991fm.com/wp-content/uploads/2024/05/glowfm-logo-1.png" 
            className={`w-[60px] h-[60px] rounded-full object-cover ${isPlaying ? 'vinyl-spin' : ''}`}
            alt="Glow 99.1 FM"
          />
          <div className="flex-1">
            <span className="block text-base font-bold text-gray-900 mb-1">Glow 99.1 FM</span>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-xs font-semibold text-red-500 uppercase">LIVE</span>
              <span 
                className="radio-status-dot w-2 h-2 bg-red-500 rounded-full"
              ></span>
            </div>
            <div className="text-xs text-gray-500">
              <span>Listen Live</span>
            </div>
          </div>
        </div>
        
        <div 
          className="flex items-center justify-center gap-3 px-4 py-3"
          style={{
            background: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)'
          }}
        >
          <button 
            type="button" 
            className="w-12 h-12 rounded-full border-none cursor-pointer flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #f97316, #ea580c)',
              boxShadow: '0 4px 12px rgba(249, 115, 22, 0.4)'
            }}
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          
          <div className="flex items-center gap-2">
            <span>
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              </svg>
            </span>
            <div className="relative w-20 h-1 bg-gray-200 rounded cursor-pointer">
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume}
                onChange={handleVolumeChange}
                aria-label="Volume"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-[2]"
              />
              <div 
                className="h-full rounded relative pointer-events-none"
                style={{ 
                  width: `${volume}%`,
                  background: 'linear-gradient(90deg, #f97316, #ea580c)'
                }}
              >
                <div 
                  className="absolute right-[-6px] top-1/2 w-3 h-3 bg-orange-500 rounded-full -translate-y-1/2"
                  style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio 
        ref={audioRef}
        src="https://stream-176.zeno.fm/mwam2yirv1pvv"
        preload="none"
      />
    </div>
  );
}

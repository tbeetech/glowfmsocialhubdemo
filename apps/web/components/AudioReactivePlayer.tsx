"use client";

import { useState, useRef, useEffect } from "react";
import { AudioVisualizer, type FrequencyData } from "@/lib/audio-visualizer";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

/**
 * 3D Audio Player with Vinyl Disc & Audio-Reactive Visualizer
 */
export function AudioReactivePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [audioData, setAudioData] = useState<FrequencyData | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const visualizerRef = useRef<AudioVisualizer | null>(null);
  const { allowMotion } = usePerformanceMode();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    // Initialize visualizer only if motion is allowed
    if (allowMotion && !visualizerRef.current && audioRef.current) {
      visualizerRef.current = new AudioVisualizer(audioRef.current);
    }
    
    return () => {
      visualizerRef.current?.cleanup();
    };
  }, [allowMotion]);

  useEffect(() => {
    if (!allowMotion) {
      visualizerRef.current?.stopVisualization();
      setAudioData(null);
    }
  }, [allowMotion]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        visualizerRef.current?.stopVisualization();
      } else {
        // Initialize visualizer on first play if motion allowed
        if (allowMotion && !visualizerRef.current?.getFrequencyData()) {
          await visualizerRef.current?.init(audioRef.current);
        }
        
        await audioRef.current.play();
        
        if (allowMotion) {
          visualizerRef.current?.startVisualization((data) => {
            setAudioData(data);
          });
        } else {
          setAudioData(null);
        }
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };

  const enableVisualizer = allowMotion && isPlaying;
  const shouldSpin = isPlaying && allowMotion;
  const barCount = allowMotion ? 8 : 4;

  return (
    <div className="relative w-full max-w-md mx-auto font-['El_Messiri']">
      <div
        className="relative rounded-[28px] overflow-hidden shadow-[0_0_40px_rgba(255,102,0,0.15)] border-2 border-[#FF6600]/30"
        style={{
          background: 'linear-gradient(-225deg, #001F3F 0%, #0A0A0A 100%)',
        }}
      >
        <div className="p-6">
          {/* 3D Vinyl Disc with Waveform Edge */}
          <div className="relative w-48 h-48 mx-auto mb-6">
            {/* Rotating vinyl disc */}
            <div
              className={`absolute inset-0 rounded-full overflow-hidden ${shouldSpin ? 'animate-spin' : ''}`}
              style={{
                background: 'radial-gradient(circle, #0A0A0A 30%, #FF6600 31%, #0A0A0A 32%, #0A0A0A 100%)',
                boxShadow: '0 0 20px rgba(255, 102, 0, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.8)',
                animationDuration: '3s'
              }}
            >
              {/* Vinyl grooves */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border border-white/5"
                  style={{
                    margin: `${10 + i * 12}px`,
                  }}
                />
              ))}
              
              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6600] to-[#CC4E00] flex items-center justify-center shadow-[0_0_20px_rgba(255,102,0,0.4)]">
                  <span className="text-[#0A0A0A] text-xs font-black">99.1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Station info */}
          <div className="text-center mb-4">
            <h3 className="text-xl font-black text-[#FFFFFF] mb-1">
              Glow 99.1 FM
            </h3>
            
            {isPlaying && (
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-[#FF6600] font-bold uppercase tracking-wider">
                  Now Streaming
                </span>
                <div className="w-2 h-2 rounded-full bg-[#FF6600]" />
              </div>
            )}
          </div>

          {/* Equalizer bars - Static if no motion */}
          <div className="flex items-end justify-center gap-1 h-16 mb-6">
            {Array.from({ length: barCount }).map((_, i) => {
              const heightPercent = enableVisualizer && audioData ? Math.max(12, (audioData.raw?.[i * 2] || 0 / 255) * 100) : 20 + (i % 3) * 10;
              const style = {
                height: `${heightPercent}%`,
                background:
                  i % 2 === 0
                    ? 'linear-gradient(to top, #FF6600, #00FFD5)'
                    : 'linear-gradient(to top, #00FFD5, #FF6600)',
                opacity: 0.7
              };

              return <div key={i} className="w-2 rounded-full transition-all duration-100" style={style} />;
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-4">
            {/* Play/Pause button */}
            <button
              onClick={togglePlay}
              className="relative w-16 h-16 rounded-full flex items-center justify-center transition-transform active:scale-95 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FF6600, #00FFD5)',
                boxShadow: '0 0 20px rgba(255, 102, 0, 0.4)',
              }}
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Volume control */}
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#00FFD5">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
            
            <div className="relative flex-1 h-2 bg-[#001F3F] rounded-full overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${volume}%`,
                  background: 'linear-gradient(90deg, #FF6600, #00FFD5)',
                }}
              />
              
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
              />
            </div>
            
            <span className="text-[#00FFD5] text-sm font-bold min-w-[3ch]">
              {volume}
            </span>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src="https://stream-176.zeno.fm/mwam2yirv1pvv"
        preload="none"
        crossOrigin="anonymous"
      />
    </div>
  );
}

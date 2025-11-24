"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AudioVisualizer, generateAudioCSS, type FrequencyData } from "@/lib/audio-visualizer";
import { MOTION_CONFIG } from "@/lib/motion-config";
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
    // Initialize visualizer
    if (!visualizerRef.current && audioRef.current) {
      visualizerRef.current = new AudioVisualizer(audioRef.current);
    }
    
    return () => {
      visualizerRef.current?.cleanup();
    };
  }, []);

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
        // Initialize visualizer on first play
        if (!visualizerRef.current?.getFrequencyData()) {
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

  // Calculate rotation based on BPM (120 BPM = 2 rotations per second)
  const vinylRotationSpeed = MOTION_CONFIG.masterBPM / 60; // rotations per second
  const enableVisualizer = allowMotion && isPlaying;
  const shouldSpin = isPlaying;
  const spinDuration = allowMotion ? 1 / vinylRotationSpeed : 8;
  const barCount = allowMotion ? 8 : 4;

  return (
    <div className="relative w-full max-w-md mx-auto font-['El_Messiri']">
      <motion.div
        className="relative rounded-[28px] overflow-hidden shadow-[0_0_40px_rgba(255,102,0,0.35)] border-2 border-[#FF6600]/30"
        style={{
          background: 'linear-gradient(-225deg, #001F3F 0%, #0A0A0A 100%)',
          ...(allowMotion && audioData ? generateAudioCSS(audioData) : {}),
        }}
        animate={
          allowMotion && audioData?.beat
            ? {
                boxShadow: '0 0 80px rgba(255, 102, 0, 0.8)',
              }
            : undefined
        }
        transition={allowMotion ? { duration: 0.1 } : undefined}
      >
        {/* Audio waveform edge illumination */}
        <div className="absolute inset-0 pointer-events-none">
          {allowMotion && audioData && (
            <>
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6600] to-transparent"
                animate={{
                  opacity: audioData.treble,
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00FFD5] to-transparent"
                animate={{
                  opacity: audioData.bass,
                }}
              />
            </>
          )}
        </div>

        <div className="p-6">
          {/* 3D Vinyl Disc with Waveform Edge */}
          <div className="relative w-48 h-48 mx-auto mb-6">
            {/* Rotating vinyl disc */}
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden"
              animate={shouldSpin ? { rotate: 360 } : undefined}
              transition={
                shouldSpin
                  ? {
                      duration: spinDuration,
                      repeat: Infinity,
                      ease: "linear",
                    }
                  : undefined
              }
              style={{
                background: 'radial-gradient(circle, #0A0A0A 30%, #FF6600 31%, #0A0A0A 32%, #0A0A0A 100%)',
                boxShadow: '0 0 40px rgba(255, 102, 0, 0.6), inset 0 0 40px rgba(0, 0, 0, 0.8)',
              }}
            >
              {/* Vinyl grooves */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border border-white/5"
                  style={{
                    margin: `${10 + i * 8}px`,
                  }}
                />
              ))}
              
              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6600] to-[#CC4E00] flex items-center justify-center shadow-[0_0_20px_rgba(255,102,0,0.8)]">
                  <span className="text-[#0A0A0A] text-xs font-black">99.1</span>
                </div>
              </div>
            </motion.div>

            {/* Waveform glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `2px solid rgba(255, 102, 0, ${audioData?.average ? audioData.average / 255 : 0.3})`,
                boxShadow: `0 0 ${audioData?.average ? audioData.average / 4 : 20}px rgba(255, 102, 0, 0.6)`,
              }}
              animate={isPlaying ? {
                scale: [1, 1.05, 1],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Station info with tube-light flicker */}
          <div className="text-center mb-4">
            <motion.h3
              className="text-xl font-black text-[#FFFFFF] mb-1"
              animate={
                allowMotion && isPlaying
                  ? {
                      textShadow: [
                        '0 0 10px rgba(255, 102, 0, 0.8)',
                        '0 0 20px rgba(255, 102, 0, 1)',
                        '0 0 10px rgba(255, 102, 0, 0.8)',
                      ],
                    }
                  : undefined
              }
              transition={
                allowMotion
                  ? {
                      duration: 0.5,
                      repeat: Infinity,
                    }
                  : undefined
              }
            >
              Glow 99.1 FM
            </motion.h3>
            
            <AnimatePresence mode="wait">
              {allowMotion && isPlaying && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2 text-sm"
                >
                  <motion.span
                    className="text-[#FF6600] font-bold uppercase tracking-wider"
                    animate={{
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    Now Streaming
                  </motion.span>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#FF6600]"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Equalizer bars */}
          <div className="flex items-end justify-center gap-1 h-16 mb-6">
            {Array.from({ length: barCount }).map((_, i) => {
              const intensity = audioData?.raw?.[i * 2] || 0;
              const heightPercent = enableVisualizer ? Math.max(12, (intensity / 255) * 100) : 18 + i * 4;
              const style = {
                height: `${heightPercent}%`,
                background:
                  i % 2 === 0
                    ? 'linear-gradient(to top, #FF6600, #00FFD5)'
                    : 'linear-gradient(to top, #00FFD5, #FF6600)',
                boxShadow: `0 0 8px ${i % 2 === 0 ? 'rgba(255, 102, 0, 0.45)' : 'rgba(0, 255, 213, 0.45)'}`,
              };

              if (!allowMotion) {
                return <div key={i} className="w-2 rounded-full opacity-70" style={style} />;
              }

              return (
                <motion.div
                  key={i}
                  className="w-2 rounded-full"
                  style={style}
                  animate={{
                    opacity: enableVisualizer ? [0.7, 1, 0.7] : 0.5,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: i * 0.05,
                    repeat: enableVisualizer ? Infinity : 0,
                  }}
                />
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-4">
            {/* Play/Pause button with ripple */}
            <motion.button
              onClick={togglePlay}
              className="relative w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #FF6600, #00FFD5)',
                boxShadow: '0 0 30px rgba(255, 102, 0, 0.6)',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
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
              
              {/* Ripple effect on beat */}
              <AnimatePresence>
                {allowMotion && audioData?.beat && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#FF6600]"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 2, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Volume control with luminescent trail */}
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#00FFD5">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
            
            <div className="relative flex-1 h-2 bg-[#001F3F] rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  width: `${volume}%`,
                  background: 'linear-gradient(90deg, #FF6600, #00FFD5)',
                  boxShadow: '0 0 6px rgba(255, 102, 0, 0.6)',
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
      </motion.div>

      <audio
        ref={audioRef}
        src="https://stream-176.zeno.fm/mwam2yirv1pvv"
        preload="none"
        crossOrigin="anonymous"
      />
    </div>
  );
}

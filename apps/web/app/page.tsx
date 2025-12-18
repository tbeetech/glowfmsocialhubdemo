"use client";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { CountdownClock } from "@/components/CountdownClock";
import { getAsset } from "@/lib/drive-assets";
import Image from "next/image";
import { ShowCarousel } from "@/components/ShowCarousel";
import { ProgramReviewsSlider } from "@/components/ProgramReviewsSlider";
import { AudioReactivePlayer } from "@/components/AudioReactivePlayer";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

export default function HomePage() {
  const { allowMotion } = usePerformanceMode();
  const [participantCount, setParticipantCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    let retry: ReturnType<typeof setTimeout>;

    const loadCount = async () => {
      try {
        const res = await fetch("/api/ember-final", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load participants");
        const data = await res.json();
        if (!active) return;
        setParticipantCount(Array.isArray(data) ? data.length : 0);
      } catch (error) {
        if (active) setParticipantCount(null);
      } finally {
        if (active) retry = setTimeout(loadCount, 10000);
      }
    };

    loadCount();
    return () => {
      active = false;
      if (retry) clearTimeout(retry);
    };
  }, []);


  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Animated Grid Background */}
      <AnimatedSection>
        <section className="relative bg-gradient-to-br from-white via-orange-50 to-red-50 pt-20 compact:pt-24 tablet:pt-4 pb-12 compact:pb-16 tablet:pb-20 overflow-hidden">
          {/* Static Grid Background */}
          <div className="absolute inset-0 opacity-10">
             <div className="w-full h-full bg-[linear-gradient(rgba(255,107,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.08)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          </div>
          
          {/* Floating decorative elements removed for performance */}
          
          <div className="container mx-auto px-3 compact:px-4 sp:px-5 tablet:px-8 relative z-10">
            <div className="grid grid-cols-[1.25fr_0.75fr] compact:grid-cols-[1.3fr_0.7fr] sp:grid-cols-[1.4fr_0.8fr] tablet:grid-cols-2 gap-2 compact:gap-3 sp:gap-5 mp:gap-6 tablet:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-2 compact:space-y-3 sp:space-y-4 mp:space-y-5 tablet:space-y-8 order-1 text-left relative z-20">
                {/* Headline with Red "Fun" Badge */}
                <h1 className="text-[1.35rem] compact:text-2xl sp:text-3xl mp:text-4xl phablet:text-5xl tablet:text-5xl laptop:text-7xl font-display font-black text-gray-900 leading-[1.1] compact:leading-tight drop-shadow-sm">
                  Connect with the GlowFM:
                  <br className="block" />
                  Join & Engage In the
                  <br className="block" />
                  Community&apos;s{" "}
                  <span className="relative inline-block mt-1 align-middle">
                    <span className="relative z-10 text-white px-2.5 compact:px-3 sp:px-4 mp:px-5 py-0.5 compact:py-1 sp:py-1.5 font-extrabold text-sm compact:text-base sp:text-xl mp:text-2xl phablet:text-4xl tracking-wide">Fun</span>
                    <span 
                      className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-red-500 transform -rotate-2 rounded-md compact:rounded-lg shadow-[0_4px_12px_rgba(220,38,38,0.3)]"
                    ></span>
                  </span>
                </h1>
                
                <p className="text-[0.65rem] compact:text-xs sp:text-sm mp:text-base phablet:text-lg max-w-xl leading-snug compact:leading-relaxed text-gray-700 font-body font-medium pr-1">
                  The most powerful element is the connection. Connect with the creators who are pouring their 
                  passion into shaping tomorrow&apos;s sound. Engage in real-time Q&A sessions, drop a comment 
                  during a live performance, or join a dedicated forum.
                </p>
              </div>

              {/* Right Content - TILTED MICROPHONE IMAGE */}
              <div className="relative h-[220px] compact:h-[260px] sp:h-[320px] mp:h-[380px] phablet:h-[450px] tablet:h-[600px] flex flex-col items-center justify-center order-2 mt-0">
                <div className="relative w-full h-[160px] compact:h-[200px] sp:h-[240px] mp:h-[280px] phablet:h-[340px] tablet:h-full max-w-[140px] compact:max-w-[180px] sp:max-w-[220px] mp:max-w-[260px] phablet:max-w-xs tablet:max-w-lg">
                  <div 
                    className="relative w-full h-full transform transition-transform duration-1000 hover:rotate-[15deg]"
                    style={{ 
                      transform: 'rotate(8deg) scale(1.15) translateX(5px)',
                      filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))'
                    }}
                  >
                    <Image
                      src={getAsset("heroMicProductCutout")}
                      alt="Professional Studio Microphone with Pop Filter"
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 320px) 240px, (max-width: 360px) 280px, (max-width: 768px) 320px, 500px"
                    />
                  </div>
                  
                  {/* Glowing ring animation - scaled for mobile */}
                  {allowMotion && (
                    <>
                      <div className="absolute top-1/2 left-1/2 w-32 compact:w-40 sp:w-56 mp:w-64 phablet:w-80 tablet:w-96 h-32 compact:h-40 sp:h-56 mp:h-64 phablet:h-80 tablet:h-96 -translate-x-1/2 -translate-y-1/2 border border-orange-400/20 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
                      <div className="absolute top-1/2 left-1/2 w-24 compact:w-32 sp:w-40 mp:w-48 phablet:w-60 tablet:w-80 h-24 compact:h-32 sp:h-40 mp:h-48 phablet:h-60 tablet:h-80 -translate-x-1/2 -translate-y-1/2 border border-red-400/15 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
                    </>
                  )}
                </div>

                {/* Facebook CTA Button - Positioned below mic */}
                <div className="mt-[-10px] compact:mt-[-15px] sp:mt-[-20px] relative z-20 w-full flex justify-center">
                  <a 
                    href="https://facebook.com/glowfm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 compact:gap-2 bg-gradient-to-r from-[#E85D04] via-[#FF0000] to-[#E85D04] text-white px-2.5 compact:px-3 sp:px-5 py-1.5 compact:py-2 sp:py-2.5 rounded-lg hover:from-orange-700 hover:to-red-600 transition-all duration-300 font-bold shadow-[0_8px_16px_rgba(232,93,4,0.3)] hover:shadow-2xl transform hover:scale-105 font-['El_Messiri'] text-[0.65rem] compact:text-[0.75rem] sp:text-sm group whitespace-nowrap border border-white/20"
                  >
                    <svg className="w-3 h-3 compact:w-3.5 compact:h-3.5 sp:w-4 sp:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Visit Our Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Radio Player Section - Listen Live with Futuristic Audio Visualizer */}
      <AnimatedSection>
        <div id="live-player" className="relative bg-gradient-to-br from-[#0A0A0A] via-[#001F3F] to-[#0A0A0A] py-16 compact:py-20 sp:py-24 overflow-hidden">
          {/* Futuristic Background (Static) */}
          <div className="absolute inset-0 bg-[#001F3F]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10 compact:mb-12 sp:mb-16">
              <h2 className="text-4xl compact:text-5xl sp:text-6xl font-display font-black mb-4 compact:mb-5">
                <span className="bg-gradient-to-r from-[#FF6600] via-[#00FFD5] to-[#FF6600] text-transparent bg-clip-text">
                  Live Audio Experience
                </span>
              </h2>
              <p className="text-base compact:text-lg sp:text-xl text-[#00FFD5]/80 font-['El_Messiri'] font-semibold">
                Tune in now • Audio-reactive visualizer • 99.1 FM
              </p>
            </div>
            
            {/* Audio-Reactive 3D Player Component */}
            <div className="flex justify-center">
              <Suspense fallback={<div className="w-full h-64 flex items-center justify-center text-white">Loading Player...</div>}>
                <AudioReactivePlayer />
              </Suspense>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Ticker Section */}
      <AnimatedSection>
        <div className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 py-3 compact:py-4 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <span className="inline-block text-white text-sm compact:text-base tablet:text-lg font-semibold">
              <span className="mx-4 compact:mx-6">Glow Ember Challenge</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦ is ✦</span>
              <span className="mx-4 compact:mx-6">Here!!</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦</span>
              <span className="mx-4 compact:mx-6">Don&apos;t miss out from the Fun!</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦</span>
              <span className="mx-4 compact:mx-6">Participate Now</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦</span>
              <span className="mx-4 compact:mx-6">Glow Ember Challenge</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦ is ✦</span>
              <span className="mx-4 compact:mx-6">Here!!</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦</span>
              <span className="mx-4 compact:mx-6">Don&apos;t miss out from the Fun!</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦</span>
              <span className="mx-4 compact:mx-6">Participate Now</span>
            </span>
            <span className="inline-block text-white text-sm compact:text-base tablet:text-lg font-semibold">
              <span className="mx-4 compact:mx-6">Glow Ember Challenge</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦ is ✦</span>
              <span className="mx-4 compact:mx-6">Here!!</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦</span>
              <span className="mx-4 compact:mx-6">Don&apos;t miss out from the Fun!</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦</span>
              <span className="mx-4 compact:mx-6">Participate Now</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦</span>
              <span className="mx-4 compact:mx-6">Glow Ember Challenge</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦ is ✦</span>
              <span className="mx-4 compact:mx-6">Here!!</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦</span>
              <span className="mx-4 compact:mx-6">Don&apos;t miss out from the Fun!</span>
              <span className="mx-4 compact:mx-6 text-yellow-300">✦</span>
              <span className="mx-4 compact:mx-6">Participate Now</span>
            </span>
          </div>
        </div>
      </AnimatedSection>

      {/* CSS for ticker animation and grid background */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: inline-block;
            animation: scroll 30s linear infinite;
          }
          
          /* Animated 4x4 Grid Background */
          .grid-background {
            width: 100%;
            height: 100%;
            background-image: 
              linear-gradient(rgba(255, 107, 0, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 107, 0, 0.08) 1px, transparent 1px);
            background-size: 80px 80px;
            animation: gridMove 25s linear infinite, gridPulse 4s ease-in-out infinite;
          }
          
          @keyframes gridMove {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(80px, 80px);
            }
          }
          
          @keyframes gridPulse {
            0%, 100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.6;
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(255, 107, 0, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(255, 107, 0, 0.6);
            }
          }
          
          @keyframes shimmer {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          @keyframes digital-float {
            0% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -50px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }
          
          /* Ensure proper layering */
          main {
            position: relative;
            z-index: 10;
          }
          
          section {
            position: relative;
            z-index: 20;
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-glow {
            animation: glow 3s ease-in-out infinite;
          }
          
          .animate-shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            background-size: 1000px 100%;
            animation: shimmer 2s infinite;
          }
        `
      }} />


      {/* Show Listings Section - Carousel with Navigation and Enhanced Background */}
      <AnimatedSection>
        <div className="py-16 relative overflow-hidden">
          {/* Simplified background for performance */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-orange-50"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-display font-bold mb-2 text-gray-900">Show Listings</h2>
            <p className="text-gray-600 mb-8 font-body max-w-2xl mx-auto">
              Your Guide to Unearthing the Podcasts and Radio Programmes That Will Revolutionize Your Listening Routine
            </p>
            
            <ShowCarousel />
          </div>
        </div>
      </AnimatedSection>

      {/* Glow Ember Challenge Section - With Advanced CSS Digital Background */}
      <AnimatedSection>
        <div id="ember-challenge" className="pt-16 pb-0 bg-gradient-to-br from-slate-50 via-purple-50 to-amber-50 relative overflow-hidden">
          {/* Corner Borders - Matching Countdown Style */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-amber-500/80 rounded-tl-2xl z-20"></div>
          <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-purple-500/80 rounded-tr-2xl z-20"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-purple-500/80 rounded-bl-2xl z-20"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-amber-500/80 rounded-br-2xl z-20"></div>

          {/* Glow FM Logo - Top Right Position */}
          <div className="absolute top-8 right-8 w-24 compact:w-28 tablet:w-32 h-24 compact:h-28 tablet:h-32 z-30">
            <div className="bg-white rounded-full p-3 compact:p-4 shadow-[0_0_30px_rgba(251,191,36,0.4),0_0_50px_rgba(147,51,234,0.3)] border-4 border-amber-400/50 flex items-center justify-center w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src={getAsset("glowFmStandardLogo")}
                  alt="Glow FM Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Static Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 opacity-25">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.35),transparent_60%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(147,51,234,0.25),transparent_65%)]"></div>
              </div>
          </div>
          
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-end relative z-10">
            <div className="text-left space-y-4 pb-16">
              <h2 className="text-5xl font-display font-bold text-gray-900 mb-2">
                Glow Ember Challenge
              </h2>
              
              {/* "Here!!" Badge - Positioned to the left side */}
              <div className="mb-4">
                <span className="bg-red-500 text-white px-5 py-2 rounded-md font-bold text-lg transform -rotate-3 inline-block shadow-lg">
                  Here!!
                </span>
              </div>
              
              <p className="text-lg font-body text-gray-900 font-semibold max-w-md mt-2">
                final stage: enter to win
              </p>
              <p className="text-sm font-body text-gray-700 max-w-md">
                Stand a chance to win a brand new laptop
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <Link
                  href="/ember-final"
                  className="border-2 border-amber-500/70 text-amber-900 px-6 py-3 rounded-full font-body font-semibold bg-white/80 hover:bg-amber-50 transition-all inline-flex items-center gap-2 shadow-[0_10px_30px_rgba(251,191,36,0.25)]"
                >
                  Enter Final Quiz
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Right side - Guy with Glasses - Flush to bottom */}
            <div className="relative h-[500px] flex items-end justify-center">
              {/* Guy with Glasses Image - Flush to bottom with no margin/padding */}
              <div className="relative w-full h-full max-w-md transform translate-y-2">
                <Image
                  src={getAsset("heroHostSmileCutout")}
                  alt="Ember Challenge Winner"
                  fill
                  className="object-contain object-bottom"
                  style={{ objectPosition: 'bottom center', marginBottom: 0, paddingBottom: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>



      {/* Ember Challenge Has Commenced Section */}
      <AnimatedSection>
        <div className="py-16 compact:py-20 tablet:py-24 bg-gradient-to-br from-amber-950 via-purple-950 to-amber-900 relative overflow-hidden">
          {/* Static Background Rays */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%]">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(217,119,6,0.4)_12deg,transparent_25deg,rgba(126,34,206,0.45)_50deg,transparent_75deg)]"></div>
              </div>
          </div>

          {/* Diagonal Burning Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(251,191,36,0.3) 35px, rgba(147,51,234,0.3) 70px)'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 compact:px-6 tablet:px-8 relative z-10">
            {/* Main Announcement */}
            <div className="text-center mb-8 compact:mb-10 tablet:mb-12">
              {/* Animated "LIVE" Badge */}
              <div className="flex items-center justify-center gap-3 mb-6 compact:mb-8">
                <div className="relative">
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-purple-400 backdrop-blur-sm text-amber-950 px-4 compact:px-6 py-2 compact:py-3 rounded-full font-bold text-sm compact:text-base tablet:text-lg shadow-[0_0_30px_rgba(251,191,36,0.8)] animate-pulse border-2 border-purple-400/50">
                    <span className="w-2 h-2 compact:w-3 compact:h-3 bg-amber-950 rounded-full animate-ping shadow-[0_0_15px_rgba(217,119,6,1)]"></span>
                    <span className="w-2 h-2 compact:w-3 compact:h-3 bg-amber-950 rounded-full absolute"></span>
                    LIVE NOW
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl compact:text-4xl sp:text-5xl mp:text-6xl tablet:text-7xl laptop:text-8xl font-display font-black text-white mb-4 compact:mb-6 leading-tight drop-shadow-[0_0_30px_rgba(251,191,36,0.8)]">
                Ember Challenge
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-purple-300 to-amber-300 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_40px_rgba(251,191,36,1)]">
                  Final Hours!
                </span>
              </h2>
              
              <p className="text-base compact:text-lg sp:text-xl tablet:text-2xl font-body text-amber-100/95 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_0_20px_rgba(147,51,234,0.6)] mb-8 compact:mb-10">
                The most exciting challenge of the year is coming to an end. Don&apos;t miss your chance to participate!
              </p>

              {/* Countdown Timer */}
              <div className="mb-8 compact:mb-10">
                <h3 className="text-xl compact:text-2xl tablet:text-3xl font-bold text-amber-200/90 mb-4 compact:mb-6 font-['El_Messiri'] drop-shadow-[0_0_20px_rgba(251,191,36,0.7)]">
                  Challenge Closes In:
                </h3>
                <div className="max-w-3xl mx-auto">
                  <CountdownClock 
                    targetDate={new Date("2025-12-22T23:59:59")}
                    labels={{
                      days: "DAYS",
                      hours: "HOURS",
                      minutes: "MINUTES",
                      seconds: "SECONDS"
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white border border-amber-200 rounded-3xl p-6 compact:p-8 tablet:p-10 shadow-md">
                <div className="flex flex-col items-center justify-center gap-4 compact:gap-6">
                  {/* Participate Button */}
                  <a 
                    href="https://www.facebook.com/share/r/14WpEP5taiv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 text-white px-8 compact:px-10 tablet:px-12 py-4 compact:py-5 rounded-full font-bold text-base compact:text-lg tablet:text-xl font-['El_Messiri'] w-full compact:w-auto text-center"
                  >
                    🔥 Participate Now
                  </a>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 gap-4 mt-6 compact:mt-8 pt-6 compact:pt-8 border-t border-amber-200">
                  <div className="text-center">
                    <div className="text-2xl compact:text-3xl tablet:text-4xl font-bold text-amber-700 font-['El_Messiri']">
                      {participantCount ?? "-"}
                    </div>
                    <div className="text-xs compact:text-sm text-amber-700/80 mt-1 font-['El_Messiri']">Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl compact:text-3xl tablet:text-4xl font-bold text-amber-700 font-['El_Messiri']">LIVE</div>
                    <div className="text-xs compact:text-sm text-amber-700/80 mt-1 font-['El_Messiri']">Status</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Grand Prizes Image Section */}
      <AnimatedSection>
        <div className="w-full">
          <Image
            src="/grandprices.png"
            alt="Grand Prizes - Win Tote Bags, Swag Bags, T-Shirts and Laptop"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
      </AnimatedSection>

      {/* Google Play App Section - Enhanced Design */}
      <AnimatedSection>
        <div className="py-20 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">

          <div className="container mx-auto px-4 compact:px-5 sp:px-6 tablet:px-8 relative z-10">
            <div className="grid grid-cols-2 gap-3 compact:gap-5 sp:gap-6 mp:gap-8 tablet:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-2 compact:space-y-3 sp:space-y-4 mp:space-y-5 tablet:space-y-6 lg:space-y-8">
                <h2 className="text-lg compact:text-xl sp:text-2xl mp:text-3xl phablet:text-4xl tablet:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                  Carry the Glow wherever 
                  <br className="hidden sp:block" />
                  <span className="sp:hidden"> </span>
                  the day takes you.
                </h2>
                
                <p className="text-xs compact:text-sm sp:text-base mp:text-lg text-gray-600 font-body leading-relaxed max-w-lg">
                  Download our mobile app and never miss a beat. Listen to your favorite shows, 
                  participate in challenges, and stay connected on the go!
                </p>

                {/* Feature List with Icons */}
                <div className="space-y-2 compact:space-y-2.5 sp:space-y-3 mp:space-y-4">
                  <div className="flex items-center gap-1.5 compact:gap-2 sp:gap-3">
                    <div className="w-4 h-4 compact:w-5 compact:h-5 sp:w-6 sp:h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-2 h-2 compact:w-2.5 compact:h-2.5 sp:w-3 sp:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-900 font-body text-[10px] compact:text-xs sp:text-sm mp:text-base">Sync notification reminders</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 compact:gap-2 sp:gap-3">
                    <div className="w-4 h-4 compact:w-5 compact:h-5 sp:w-6 sp:h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-2 h-2 compact:w-2.5 compact:h-2.5 sp:w-3 sp:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-900 font-body text-[10px] compact:text-xs sp:text-sm mp:text-base">Jump between music blocks</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 compact:gap-2 sp:gap-3">
                    <div className="w-4 h-4 compact:w-5 compact:h-5 sp:w-6 sp:h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-2 h-2 compact:w-2.5 compact:h-2.5 sp:w-3 sp:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-900 font-body text-[10px] compact:text-xs sp:text-sm mp:text-base">Talk segments from a single playback surface</span>
                  </div>
                </div>

                {/* Google Play Button */}
                <div className="pt-2 compact:pt-3 sp:pt-4">
                  <GlowButton
                    asChild
                    className="inline-flex items-center gap-1.5 compact:gap-2 sp:gap-3 bg-white text-gray-900 border border-gray-900 sp:border-2 hover:bg-gray-900 hover:text-white px-3 compact:px-4 sp:px-6 mp:px-8 py-1.5 compact:py-2 sp:py-3 mp:py-4 rounded-full font-semibold text-[10px] compact:text-xs sp:text-sm mp:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl font-['El_Messiri']"
                  >
                    <a href="https://play.google.com/store/apps/details?id=com.glow991.app&pcampaignid=web_share" target="_blank" rel="noreferrer">
                      <svg className="w-3 h-3 compact:w-4 compact:h-4 sp:w-5 sp:h-5 mp:w-6 mp:h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Get In On Google play
                    </a>
                  </GlowButton>
                </div>
              </div>

              {/* Right Content - Phone with Radio App Interface */}
              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[120px] compact:max-w-[150px] sp:max-w-[180px] mp:max-w-[220px] phablet:max-w-xs tablet:max-w-sm lg:max-w-md">
                  {/* Phone Display Image */}
                  <div className="relative">
                    <Image
                      src="/phone_display.jpg"
                      alt="Glow 99.1FM Mobile App Interface on Phone"
                      width={400}
                      height={600}
                      className="w-full h-auto drop-shadow-2xl rounded-lg compact:rounded-xl sp:rounded-2xl"
                      priority
                      sizes="(max-width: 320px) 120px, (max-width: 360px) 150px, (max-width: 390px) 180px, (max-width: 430px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 350px, 400px"
                    />
                    
                    {/* Subtle overlay to enhance the design */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 rounded-lg compact:rounded-xl sp:rounded-2xl pointer-events-none"></div>
                  </div>
                  
                  {/* Floating decoration elements */}
                  <div className="absolute -top-4 -right-4 sp:-top-6 sp:-right-6 lg:-top-8 lg:-right-8 hidden sp:block w-8 h-8 sp:w-12 sp:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-6 -left-4 sp:-bottom-8 sp:-left-6 lg:-bottom-12 lg:-left-8 hidden sp:block w-10 h-10 sp:w-16 sp:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>



      {/* Reviews Section with New Slider Design */}
      <AnimatedSection>
        <ProgramReviewsSlider />
      </AnimatedSection>

      {/* Social Wall Section */}
      <AnimatedSection>
        <div className="py-16 bg-white text-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-display font-bold mb-8 font-['El_Messiri']">Link Up With The Wall</h2>
            <div className="flex justify-center gap-4 compact:gap-6 sp:gap-8 flex-wrap">
              {/* Twitter/X */}
              <a 
                href="https://twitter.com/glowfm" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300"
                aria-label="Follow us on Twitter"
              >
                <div className="w-14 h-14 compact:w-16 compact:h-16 sp:w-20 sp:h-20 rounded-full bg-[#1DA1F2] flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:bg-[#1a8cd8] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <svg className="w-7 h-7 compact:w-8 compact:h-8 sp:w-10 sp:h-10 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </div>
                <span className="text-xs compact:text-sm font-semibold text-gray-700 group-hover:text-[#1DA1F2] transition-colors font-['El_Messiri']">Twitter</span>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@glowtv-e8y" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300"
                aria-label="Subscribe on YouTube"
              >
                <div className="w-14 h-14 compact:w-16 compact:h-16 sp:w-20 sp:h-20 rounded-full bg-[#FF0000] flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:bg-[#cc0000] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <svg className="w-8 h-8 compact:w-9 compact:h-9 sp:w-11 sp:h-11 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-xs compact:text-sm font-semibold text-gray-700 group-hover:text-[#FF0000] transition-colors font-['El_Messiri']">YouTube</span>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com/glowfm" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300"
                aria-label="Like us on Facebook"
              >
                <div className="w-14 h-14 compact:w-16 compact:h-16 sp:w-20 sp:h-20 rounded-full bg-[#1877F2] flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:bg-[#0d65d9] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <svg className="w-8 h-8 compact:w-9 compact:h-9 sp:w-11 sp:h-11 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-xs compact:text-sm font-semibold text-gray-700 group-hover:text-[#1877F2] transition-colors font-['El_Messiri']">Facebook</span>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com/@glowfm" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300"
                aria-label="Follow us on TikTok"
              >
                <div className="w-14 h-14 compact:w-16 compact:h-16 sp:w-20 sp:h-20 rounded-full bg-black flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:bg-gray-900 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00f2ea]/20 via-[#ff0050]/20 to-transparent"></div>
                  <svg className="w-7 h-7 compact:w-8 compact:h-8 sp:w-10 sp:h-10 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <span className="text-xs compact:text-sm font-semibold text-gray-700 group-hover:text-black transition-colors font-['El_Messiri']">TikTok</span>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/glowfm" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <div className="w-14 h-14 compact:w-16 compact:h-16 sp:w-20 sp:h-20 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:from-[#7232a8] group-hover:via-[#e01a1a] group-hover:to-[#de6b2f] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <svg className="w-7 h-7 compact:w-8 compact:h-8 sp:w-10 sp:h-10 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-xs compact:text-sm font-semibold text-gray-700 group-hover:text-[#E4405F] transition-colors font-['El_Messiri']">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
}

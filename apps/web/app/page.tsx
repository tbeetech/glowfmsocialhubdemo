"use client";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { CountdownClock } from "@/components/CountdownClock";
import { getAsset } from "@/lib/drive-assets";
import Image from "next/image";
import { ShowCarousel } from "@/components/ShowCarousel";
import { EmberChallengeModal } from "@/components/EmberChallengeModal";
import { PrizesModal } from "@/components/PrizesModal";
import { ProgramReviewsSlider } from "@/components/ProgramReviewsSlider";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrizesModalOpen, setIsPrizesModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Grid Background */}
      <AnimatedSection>
        <section className="relative bg-gradient-to-br from-white via-orange-50 to-red-50 pt-4 pb-20 overflow-hidden">
          {/* Animated 4x4 Grid Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="grid-background"></div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-red-300 to-pink-400 rounded-full opacity-10 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto px-3 mini:px-4 compact:px-5 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-6 sp:gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 mini:space-y-6 compact:space-y-7 lg:space-y-8">
                {/* Headline with Red "Fun" Badge */}
                <h1 className="text-7xl mini:text-3xl compact:text-4xl sp:text-5xl mp:text-5xl phablet:text-6xl lg:text-7xl font-display font-black text-gray-900 leading-tight font-['El_Messiri']">
                  Connect with the GlowFM:
                  <br />
                  Join & Engage In the
                  <br />
                  Community&apos;s{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-white px-6 py-3 font-extrabold mini:px-3 mini:py-2 compact:px-4 compact:py-2 lg:px-6 lg:py-3">Fun</span>
                    <span 
                      className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-red-500 transform rotate-[-2deg] rounded-xl shadow-2xl animate-pulse"
                      style={{ 
                        boxShadow: '0 12px 24px rgba(220, 38, 38, 0.4), 0 6px 12px rgba(220, 38, 38, 0.2)'
                      }}
                    ></span>
                  </span>
                </h1>
                
                <p className="text-gray-700 text-lg mini:text-sm compact:text-base sp:text-lg max-w-xl leading-relaxed font-body font-['El_Messiri']">
                  The most powerful element is the connection. Connect with the creators who are pouring their 
                  passion into shaping tomorrow&apos;s sound. Engage in real-time Q&A sessions, drop a comment 
                  during a live performance, or join a dedicated forum.
                </p>

                {/* Clean Email + Button Component */}
                <div className="max-w-xl">
                  <div className="flex items-center mini:flex-col mini:items-stretch compact:flex-row compact:items-center bg-white/80 backdrop-blur-sm rounded-full mini:rounded-2xl compact:rounded-full shadow-2xl border-2 border-orange-200 p-2 mini:p-2 compact:p-1.5 sp:p-2 hover:shadow-2xl hover:border-orange-300 transition-all duration-500 group mini:gap-2 compact:gap-0">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="flex-1 px-6 py-4 mini:px-4 mini:py-2.5 compact:px-5 compact:py-3 sp:px-6 sp:py-4 bg-transparent focus:outline-none text-gray-900 placeholder:text-gray-500 rounded-l-full mini:rounded-xl compact:rounded-l-full font-body font-['El_Messiri'] font-semibold"
                    />
                    <button className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 text-white px-8 py-4 mini:px-5 mini:py-2.5 compact:px-6 compact:py-3 sp:px-8 sp:py-4 rounded-full mini:rounded-xl compact:rounded-full hover:from-orange-700 hover:to-red-600 transition-all duration-300 font-bold shadow-xl whitespace-nowrap flex items-center justify-center gap-3 mini:gap-2 compact:gap-3 transform hover:scale-105 font-['El_Messiri'] group-hover:shadow-2xl">
                      Join Glow Fm
                      <svg className="w-5 h-5 mini:w-4 mini:h-4 compact:w-5 compact:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content - TILTED MICROPHONE IMAGE */}
              <div className="relative lg:h-[700px] mini:h-[300px] compact:h-[400px] sp:h-[500px] mp:h-[600px] flex items-center justify-center">
                <div className="relative w-full h-full max-w-lg mini:max-w-[280px] compact:max-w-sm sp:max-w-md mp:max-w-lg">
                  <div 
                    className="relative w-full h-full transform transition-transform duration-1000 hover:rotate-[15deg]"
                    style={{ 
                      transform: 'rotate(12deg) translateX(20px)',
                      filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))'
                    }}
                  >
                    <Image
                      src={getAsset("heroMicProductCutout")}
                      alt="Professional Studio Microphone with Pop Filter"
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 320px) 280px, (max-width: 640px) 400px, (max-width: 1024px) 500px, 600px"
                    />
                  </div>
                  
                  {/* Glowing ring animation */}
                  <div className="absolute top-1/2 left-1/2 w-96 mini:w-48 compact:w-64 sp:w-80 lg:w-96 h-96 mini:h-48 compact:h-64 sp:h-80 lg:h-96 -translate-x-1/2 -translate-y-1/2 border border-orange-300/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute top-1/2 left-1/2 w-80 mini:w-40 compact:w-56 sp:w-72 lg:w-80 h-80 mini:h-40 compact:h-56 sp:h-72 lg:h-80 -translate-x-1/2 -translate-y-1/2 border border-red-300/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
          
          .grid-background-nav {
            width: 100%;
            height: 100%;
            background-image: 
              linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
            animation: gridMove 30s linear infinite;
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
          {/* Blurry radiant gradient background with joyful colors */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-orange-50 to-red-50"></div>
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-15 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-red-300 to-pink-400 rounded-full opacity-10 blur-2xl"></div>
            {/* Translucent white overlay for classic glow aesthetic */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-display font-bold mb-2 text-gray-900">Show Listings</h2>
            <p className="text-gray-600 mb-8 font-body max-w-2xl mx-auto">
              Your Guide to Unearthing the Podcasts and Radio Programmes That Will Revolutionize Your Listening Routine
            </p>
            
            <ShowCarousel />
          </div>
        </div>
      </AnimatedSection>

      {/* Glow Ember Challenge Section - With Confetti Background */}
      <AnimatedSection>
        <div className="pt-16 pb-0 bg-[#f5f5f0] relative overflow-hidden">
          {/* Confetti Background - Contained within section */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={getAsset("confetti01")}
                alt=""
                fill
                className="object-cover opacity-10"
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            {/* Additional Confetti Layer */}
            <div className="absolute inset-0">
              <Image
                src={getAsset("confetti02Transparent")}
                alt=""
                fill
                className="object-cover opacity-8"
                style={{ objectFit: 'cover' }}
              />
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
                The Ember Challenge Starts Now: Enter to Win!
              </p>
              <p className="text-sm font-body text-gray-700 max-w-md">
                Win Small prizes like tote bag, mini power bank, airtime, jotter
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-indigo-900 text-white px-8 py-3 rounded-full hover:bg-indigo-800 transition-colors font-body flex items-center gap-2 mt-4"
              >
                Participate Now →
              </button>
            </div>
            
            {/* Right side - Guy with Glasses - Flush to bottom */}
            <div className="relative h-[500px] flex items-end justify-center">
              {/* Glow FM Logo in top right corner */}
              <div className="absolute top-0 right-8 w-32 h-32 z-20">
                <div className="bg-white rounded-full p-4 shadow-lg flex items-center justify-center w-full h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={getAsset("glowFmStandardLogo")}
                      alt="GlowFM Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </div>
              
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
        <div className="py-16 compact:py-20 tablet:py-24 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
          {/* Animated Background Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/4 right-20 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-red-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Diagonal Stripes Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 compact:px-6 tablet:px-8 relative z-10">
            {/* Main Announcement */}
            <div className="text-center mb-8 compact:mb-10 tablet:mb-12">
              {/* Animated "LIVE" Badge */}
              <div className="flex items-center justify-center gap-3 mb-6 compact:mb-8">
                <div className="relative">
                  <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-red-600 px-4 compact:px-6 py-2 compact:py-3 rounded-full font-bold text-sm compact:text-base tablet:text-lg shadow-2xl animate-pulse">
                    <span className="w-2 h-2 compact:w-3 compact:h-3 bg-red-600 rounded-full animate-ping"></span>
                    <span className="w-2 h-2 compact:w-3 compact:h-3 bg-red-600 rounded-full absolute"></span>
                    LIVE NOW
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl compact:text-4xl sp:text-5xl mp:text-6xl tablet:text-7xl laptop:text-8xl font-display font-black text-white mb-4 compact:mb-6 leading-tight font-['El_Messiri'] drop-shadow-2xl">
                Ember Challenge
                <br />
                <span className="bg-gradient-to-r from-yellow-300 via-orange-200 to-yellow-300 bg-clip-text text-transparent animate-pulse">
                  Final Hours!
                </span>
              </h2>
              
              <p className="text-base compact:text-lg sp:text-xl tablet:text-2xl font-body text-white/95 max-w-3xl mx-auto leading-relaxed font-['El_Messiri'] drop-shadow-lg mb-8 compact:mb-10">
                The most exciting challenge of the year is coming to an end. Don&apos;t miss your chance to participate!
              </p>

              {/* Countdown Timer */}
              <div className="mb-8 compact:mb-10">
                <h3 className="text-xl compact:text-2xl tablet:text-3xl font-bold text-white/90 mb-4 compact:mb-6 font-['El_Messiri']">
                  Challenge Closes In:
                </h3>
                <div className="max-w-3xl mx-auto">
                  <CountdownClock 
                    targetDate={new Date("2025-12-01T23:59:59")}
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
              <div className="bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-3xl p-6 compact:p-8 tablet:p-10 shadow-2xl">
                <div className="flex flex-col compact:flex-row items-center justify-center gap-4 compact:gap-6">
                  {/* Participate Button */}
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="group relative bg-white text-red-600 px-8 compact:px-10 tablet:px-12 py-4 compact:py-5 rounded-full font-bold text-base compact:text-lg tablet:text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 font-['El_Messiri'] w-full compact:w-auto overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      🔥 Participate Now
                      <svg className="w-5 h-5 compact:w-6 compact:h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </button>

                  {/* Learn More Button */}
                  <button 
                    onClick={() => setIsPrizesModalOpen(true)}
                    className="group bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white px-8 compact:px-10 py-4 compact:py-5 rounded-full font-bold text-base compact:text-lg hover:bg-white/30 transition-all duration-300 font-['El_Messiri'] w-full compact:w-auto"
                  >
                    <span className="flex items-center justify-center gap-2">
                      View Prizes
                      <svg className="w-5 h-5 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-4 mt-6 compact:mt-8 pt-6 compact:pt-8 border-t border-white/30">
                  <div className="text-center">
                    <div className="text-2xl compact:text-3xl tablet:text-4xl font-bold text-white font-['El_Messiri']">500+</div>
                    <div className="text-xs compact:text-sm text-white/80 mt-1 font-['El_Messiri']">Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl compact:text-3xl tablet:text-4xl font-bold text-white font-['El_Messiri']">10+</div>
                    <div className="text-xs compact:text-sm text-white/80 mt-1 font-['El_Messiri']">Prizes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl compact:text-3xl tablet:text-4xl font-bold text-yellow-300 font-['El_Messiri']">LIVE</div>
                    <div className="text-xs compact:text-sm text-white/80 mt-1 font-['El_Messiri']">Status</div>
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

      {/* Google Play App Section - Enhanced Compact Design */}
      <AnimatedSection>
        <div className="py-12 mini:py-10 compact:py-12 tablet:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 mini:px-3 compact:px-4 tablet:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Main Content Container with Side-by-Side Layout */}
              <div className="bg-white/60 backdrop-blur-xl rounded-3xl mini:rounded-2xl compact:rounded-3xl shadow-2xl border border-white/40 overflow-hidden">
                <div className="flex flex-col lg:flex-row items-stretch">
                  {/* Left Content - Text and Button */}
                  <div className="flex-1 p-8 mini:p-5 compact:p-6 sp:p-7 tablet:p-10 lg:p-12 space-y-6 mini:space-y-4 compact:space-y-5 tablet:space-y-6">
                    <h2 className="text-4xl mini:text-2xl compact:text-3xl sp:text-4xl tablet:text-5xl lg:text-5xl font-display font-bold text-gray-900 leading-tight font-['El_Messiri']">
                      Carry the Glow wherever 
                      <br />
                      the day takes you.
                    </h2>
                    
                    <p className="text-base mini:text-sm compact:text-base tablet:text-lg text-gray-600 font-body leading-relaxed font-['El_Messiri']">
                      Download our mobile app and never miss a beat. Listen to your favorite shows, 
                      participate in challenges, and stay connected on the go!
                    </p>

                    {/* Feature List with Icons */}
                    <div className="space-y-3 mini:space-y-2 compact:space-y-3">
                      <div className="flex items-center gap-3 mini:gap-2 compact:gap-3">
                        <div className="w-6 h-6 mini:w-5 mini:h-5 compact:w-6 compact:h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 mini:w-2.5 mini:h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-900 font-body mini:text-sm compact:text-base font-['El_Messiri']">Sync notification reminders</span>
                      </div>
                      
                      <div className="flex items-center gap-3 mini:gap-2 compact:gap-3">
                        <div className="w-6 h-6 mini:w-5 mini:h-5 compact:w-6 compact:h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 mini:w-2.5 mini:h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-900 font-body mini:text-sm compact:text-base font-['El_Messiri']">Jump between music blocks</span>
                      </div>
                      
                      <div className="flex items-center gap-3 mini:gap-2 compact:gap-3">
                        <div className="w-6 h-6 mini:w-5 mini:h-5 compact:w-6 compact:h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 mini:w-2.5 mini:h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-900 font-body mini:text-sm compact:text-base font-['El_Messiri']">Talk segments from a single playback surface</span>
                      </div>
                    </div>

                    {/* Google Play Button */}
                    <div className="pt-2 mini:pt-1 compact:pt-2">
                      <GlowButton
                        asChild
                        className="inline-flex items-center gap-3 mini:gap-2 compact:gap-3 bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white px-6 mini:px-4 compact:px-5 sp:px-6 py-3 mini:py-2 compact:py-2.5 sp:py-3 rounded-full font-semibold text-base mini:text-sm compact:text-base transition-all duration-300 shadow-lg hover:shadow-xl font-['El_Messiri']"
                      >
                        <a href="https://play.google.com/store/apps" target="_blank" rel="noreferrer">
                          <svg className="w-5 h-5 mini:w-4 mini:h-4 compact:w-5 compact:h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                          </svg>
                          Get In On Google play
                        </a>
                      </GlowButton>
                    </div>
                  </div>

                  {/* Right Content - Compact Phone Image */}
                  <div className="relative flex items-center justify-center lg:w-80 xl:w-96 bg-gradient-to-br from-orange-100/50 to-red-100/50 p-6 mini:p-4 compact:p-5 lg:p-8">
                    <div className="relative w-48 mini:w-36 compact:w-40 sp:w-44 lg:w-52">
                      {/* Phone Display Image - Compact */}
                      <div className="relative">
                        <Image
                          src="/phone_display.jpg"
                          alt="Glow 99.1FM Mobile App Interface on Phone"
                          width={300}
                          height={450}
                          className="w-full h-auto drop-shadow-2xl rounded-2xl mini:rounded-xl compact:rounded-2xl transform hover:scale-105 transition-transform duration-500"
                          priority
                        />
                        
                        {/* Subtle overlay to enhance the design */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 rounded-2xl mini:rounded-xl compact:rounded-2xl pointer-events-none"></div>
                      </div>
                      
                      {/* Compact Floating decoration elements */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 mini:w-8 mini:h-8 compact:w-10 compact:h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-30 blur-xl animate-pulse"></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 mini:w-10 mini:h-10 compact:w-12 compact:h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-30 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
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
            <h2 className="text-4xl font-display font-bold mb-8">Link Up With The Wall</h2>
            <div className="flex justify-center gap-8">
              <a href="#" className="hover:text-indigo-600 font-body transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-indigo-600 font-body transition-colors">
                Youtube
              </a>
              <a href="#" className="hover:text-indigo-600 font-body transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-indigo-600 font-body transition-colors">
                Tiktok
              </a>
              <a href="#" className="hover:text-indigo-600 font-body transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Modals */}
      <EmberChallengeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <PrizesModal isOpen={isPrizesModalOpen} onClose={() => setIsPrizesModalOpen(false)} />
    </div>
  );
}
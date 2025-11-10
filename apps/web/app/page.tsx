"use client";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CountdownClock } from "@/components/CountdownClock";
import { GlowButton } from "@/components/ui/GlowButton";
import { getAsset } from "@/lib/drive-assets";
import Image from "next/image";
import { ShowCarousel } from "@/components/ShowCarousel";
import { EmberChallengeModal } from "@/components/EmberChallengeModal";
import { ProgramReviewsSlider } from "@/components/ProgramReviewsSlider";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          
          <div className="container mx-auto px-3 compact:px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-6 sp:gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Headline with Red "Fun" Badge */}
                <h1 className="text-3xl sp:text-4xl mp:text-5xl phablet:text-6xl lg:text-7xl font-display font-black text-gray-900 leading-tight font-['El_Messiri']">
                  Connect with the GlowFM:
                  <br />
                  Join & Engage In the
                  <br />
                  Community&apos;s{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-white px-6 py-3 font-extrabold">Fun</span>
                    <span 
                      className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-red-500 transform rotate-[-2deg] rounded-xl shadow-2xl animate-pulse"
                      style={{ 
                        boxShadow: '0 12px 24px rgba(220, 38, 38, 0.4), 0 6px 12px rgba(220, 38, 38, 0.2)'
                      }}
                    ></span>
                  </span>
                </h1>
                
                <p className="text-gray-700 text-base sp:text-lg max-w-xl leading-relaxed font-body font-['El_Messiri']">
                  The most powerful element is the connection. Connect with the creators who are pouring their 
                  passion into shaping tomorrow&apos;s sound. Engage in real-time Q&A sessions, drop a comment 
                  during a live performance, or join a dedicated forum.
                </p>

                {/* Clean Email + Button Component */}
                <div className="max-w-xl">
                  <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full shadow-2xl border-2 border-orange-200 p-1.5 sp:p-2 hover:shadow-2xl hover:border-orange-300 transition-all duration-500 group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="flex-1 px-4 sp:px-6 py-3 sp:py-4 bg-transparent focus:outline-none text-gray-900 placeholder:text-gray-500 rounded-l-full font-body font-['El_Messiri'] font-semibold"
                    />
                    <button className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 text-white px-5 sp:px-8 py-3 sp:py-4 rounded-full hover:from-orange-700 hover:to-red-600 transition-all duration-300 font-bold shadow-xl whitespace-nowrap flex items-center gap-3 transform hover:scale-105 font-['El_Messiri'] group-hover:shadow-2xl">
                      Join Glow Fm
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content - TILTED MICROPHONE IMAGE */}
              <div className="relative lg:h-[700px] flex items-center justify-center">
                <div className="relative w-full h-full max-w-sm sp:max-w-md lg:max-w-lg">
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
                    />
                  </div>
                  
                  {/* Glowing ring animation */}
                  <div className="absolute top-1/2 left-1/2 w-64 sp:w-80 lg:w-96 h-64 sp:h-80 lg:h-96 -translate-x-1/2 -translate-y-1/2 border border-orange-300/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute top-1/2 left-1/2 w-56 sp:w-72 lg:w-80 h-56 sp:h-72 lg:h-80 -translate-x-1/2 -translate-y-1/2 border border-red-300/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
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



      {/* Countdown Section - Enhanced Styling */}
      <AnimatedSection>
        <div className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(255,140,0,0.15),transparent_50%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
                Ember Challenge Starts In
              </h2>
              <p className="text-xl font-body text-white/80 max-w-2xl mx-auto">
                Get ready for the most exciting challenge of the year! Don&apos;t miss out.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <CountdownClock 
                targetDate={new Date("2025-11-01T12:00:00")}
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
        <div className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h2 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                  Carry the Glow wherever 
                  <br />
                  the day takes you.
                </h2>
                
                <p className="text-lg text-gray-600 font-body leading-relaxed max-w-lg">
                  Download our mobile app and never miss a beat. Listen to your favorite shows, 
                  participate in challenges, and stay connected on the go!
                </p>

                {/* Feature List with Icons */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-900 font-body">Sync notification reminders</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-900 font-body">Jump between music blocks</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-900 font-body">Talk segments from a single playback surface</span>
                  </div>
                </div>

                {/* Google Play Button */}
                <div className="pt-4">
                  <GlowButton
                    asChild
                    className="inline-flex items-center gap-3 bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <a href="https://play.google.com/store/apps" target="_blank" rel="noreferrer">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Get In On Google play
                    </a>
                  </GlowButton>
                </div>
              </div>

              {/* Right Content - Phone with Radio App Interface */}
              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-sm lg:max-w-md">
                  {/* Phone Display Image */}
                  <div className="relative">
                    <Image
                      src="/phone_display.jpg"
                      alt="Glow 99.1FM Mobile App Interface on Phone"
                      width={400}
                      height={600}
                      className="w-full h-auto drop-shadow-2xl rounded-2xl"
                      priority
                    />
                    
                    {/* Subtle overlay to enhance the design */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 rounded-2xl pointer-events-none"></div>
                  </div>
                  
                  {/* Floating decoration elements */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-12 -left-8 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
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

      {/* Ember Challenge Registration Modal */}
      <EmberChallengeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
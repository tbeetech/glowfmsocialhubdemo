"use client";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CountdownClock } from "@/components/CountdownClock";
import { GlowButton } from "@/components/ui/GlowButton";
import { getAsset } from "@/lib/drive-assets";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Grid Background */}
      <AnimatedSection>
        <section className="relative bg-white pt-24 pb-16 overflow-hidden">
          {/* Animated 4x4 Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid-background"></div>
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Headline with Red "Fun" Badge */}
                <h1 className="text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                  Connect with the GlowFM:
                  <br />
                  Join & Engage In the
                  <br />
                  Community&apos;s{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-white px-4 py-2 font-extrabold">Fun</span>
                    <span 
                      className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transform rotate-[-2deg] rounded-md shadow-xl"
                      style={{ 
                        boxShadow: '0 8px 16px rgba(220, 38, 38, 0.4), 0 4px 8px rgba(220, 38, 38, 0.2)'
                      }}
                    ></span>
                  </span>
                </h1>
                
                <p className="text-gray-700 text-lg max-w-xl leading-relaxed font-body">
                  The most powerful element is the connection. Connect with the creators who are pouring their 
                  passion into shaping tomorrow&apos;s sound. Engage in real-time Q&A sessions, drop a comment 
                  during a live performance, or join a dedicated forum.
                </p>

                {/* Clean Email + Button Component */}
                <div className="max-w-xl">
                  <div className="flex items-center bg-gray-50 rounded-full shadow-lg border border-gray-200 p-2 hover:shadow-xl transition-all duration-300">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="flex-1 px-6 py-3 bg-transparent focus:outline-none text-gray-900 placeholder:text-gray-500 rounded-l-full font-body"
                    />
                    <button className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white px-8 py-3 rounded-full hover:from-indigo-800 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg whitespace-nowrap flex items-center gap-2 transform hover:scale-105">
                      Join Glow Fm
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content - TILTED MICROPHONE IMAGE */}
              <div className="relative lg:h-[600px] flex items-center justify-center">
                <div className="relative w-full h-full max-w-lg">
                  <div 
                    className="relative w-full h-full transform"
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Ticker Section */}
      <AnimatedSection>
        <div className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 py-4 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <span className="inline-block text-white text-lg font-semibold">
              <span className="mx-6">Glow Ember Challenge</span>
              <span className="mx-6 text-yellow-300">✦ is ✦</span>
              <span className="mx-6">Here!!</span>
              <span className="mx-6 text-yellow-300">✦</span>
              <span className="mx-6">Don&apos;t miss out from the Fun!</span>
              <span className="mx-6 text-yellow-300">✦</span>
              <span className="mx-6">Participate Now</span>
              <span className="mx-6 text-yellow-300">✦</span>
              <span className="mx-6">Glow Ember Challenge</span>
              <span className="mx-6 text-yellow-300">✦ is ✦</span>
              <span className="mx-6">Here!!</span>
              <span className="mx-6 text-yellow-300">✦</span>
              <span className="mx-6">Don&apos;t miss out from the Fun!</span>
              <span className="mx-6 text-yellow-300">✦</span>
              <span className="mx-6">Participate Now</span>
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
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
            background-size: 100px 100px;
            animation: gridMove 20s linear infinite;
          }
          
          .grid-background-nav {
            width: 100%;
            height: 100%;
            background-image: 
              linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridMove 25s linear infinite;
          }
          
          @keyframes gridMove {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(100px, 100px);
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
        `
      }} />


      {/* Show Listings Section - Carousel with Navigation */}
      <AnimatedSection>
        <div className="py-16 bg-white text-center">
          <h2 className="text-4xl font-display font-bold mb-2 text-gray-900">Show Listings</h2>
          <p className="text-gray-600 mb-8 font-body max-w-2xl mx-auto">
            Your Guide to Unearthing the Podcasts and Radio Programmes That Will Revolutionize Your Listening Routine
          </p>
          
          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto px-4">
            {/* Left Arrow */}
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Right Arrow */}
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Shows Grid - All 9 Hot Shows */}
            <div className="grid md:grid-cols-3 gap-8 px-12">
              {/* IJI AYO */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={getAsset("showIjiAyo")}
                    alt="IJI AYO"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">IJI AYO</h3>
                  <p className="text-sm text-gray-600 mb-2 font-body">Cultural & Entertainment</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-body">8:00am</span>
                  </div>
                  <button className="bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-800 transition-colors font-body text-sm">
                    See Now →
                  </button>
                </div>
              </div>

              {/* Millionaires Mindset */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={getAsset("showMillionairesMindset")}
                    alt="Millionaires Mindset"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Millionaires Mindset</h3>
                  <p className="text-sm text-gray-600 mb-2 font-body">Business & Finance</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-body">10:00am</span>
                  </div>
                  <button className="bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-800 transition-colors font-body text-sm">
                    See Now →
                  </button>
                </div>
              </div>

              {/* Glow Kiddies */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={getAsset("showGlowKiddies")}
                    alt="Glow Kiddies"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Glow Kiddies</h3>
                  <p className="text-sm text-gray-600 mb-2 font-body">Children & Family</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-body">2:00pm</span>
                  </div>
                  <button className="bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-800 transition-colors font-body text-sm">
                    See Now →
                  </button>
                </div>
              </div>

              {/* LET's TALK */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={getAsset("showLetsTalk")}
                    alt="LET's TALK"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">LET&apos;s TALK</h3>
                  <p className="text-sm text-gray-600 mb-2 font-body">Discussion & Talk</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-body">4:00pm</span>
                  </div>
                  <button className="bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-800 transition-colors font-body text-sm">
                    See Now →
                  </button>
                </div>
              </div>

              {/* YOU AND THE LAW */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={getAsset("showYouAndTheLaw")}
                    alt="YOU AND THE LAW"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">YOU AND THE LAW</h3>
                  <p className="text-sm text-gray-600 mb-2 font-body">Legal & Advice</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-body">6:00pm</span>
                  </div>
                  <button className="bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-800 transition-colors font-body text-sm">
                    See Now →
                  </button>
                </div>
              </div>

              {/* Love Saturday */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={getAsset("showLoveSaturday")}
                    alt="Love Saturday"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Love Saturday</h3>
                  <p className="text-sm text-gray-600 mb-2 font-body">Music & Romance</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-body">12:00pm</span>
                  </div>
                  <button className="bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-800 transition-colors font-body text-sm">
                    See Now →
                  </button>
                </div>
              </div>

              {/* Kayefi Nla */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={getAsset("showKayefiNla")}
                    alt="Kayefi Nla"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Kayefi Nla</h3>
                  <p className="text-sm text-gray-600 mb-2 font-body">Culture & Society</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-body">7:00pm</span>
                  </div>
                  <button className="bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-800 transition-colors font-body text-sm">
                    See Now →
                  </button>
                </div>
              </div>

              {/* Women's World */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={getAsset("showWomensWorld")}
                    alt="Women's World"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Women&apos;s World</h3>
                  <p className="text-sm text-gray-600 mb-2 font-body">Women & Lifestyle</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-body">3:00pm</span>
                  </div>
                  <button className="bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-800 transition-colors font-body text-sm">
                    See Now →
                  </button>
                </div>
              </div>

              {/* The News */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={getAsset("showTheNews")}
                    alt="The News"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">The News</h3>
                  <p className="text-sm text-gray-600 mb-2 font-body">News & Current Affairs</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-body">1:00pm</span>
                  </div>
                  <button className="bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-800 transition-colors font-body text-sm">
                    See Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Glow Ember Challenge Section - With Confetti Background */}
      <AnimatedSection>
        <div className="py-16 bg-[#f5f5f0] relative overflow-hidden">
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
          
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="text-left space-y-4">
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
              <button className="bg-indigo-900 text-white px-8 py-3 rounded-full hover:bg-indigo-800 transition-colors font-body flex items-center gap-2 mt-4">
                Participate Now →
              </button>
            </div>
            
            {/* Right side - Guy with Glasses */}
            <div className="relative h-[500px] flex items-end justify-center">
              {/* Glow FM Logo in top right corner */}
              <div className="absolute top-8 right-8 w-32 h-32 z-20">
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
              
              {/* Guy with Glasses Image */}
              <div className="relative w-full h-full max-w-md">
                <Image
                  src={getAsset("heroHostSmileCutout")}
                  alt="Ember Challenge Winner"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How to Get on Stage Section */}
      <AnimatedSection>
        <div className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                How to Get on the
                <br />
                Ember Challenge Stage
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="bg-blue-200 text-blue-800 font-bold rounded-full h-8 w-8 flex items-center justify-center">
                    1
                  </span>
                  <span>Follow all our Social Media Platforms</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-blue-200 text-blue-800 font-bold rounded-full h-8 w-8 flex items-center justify-center">
                    2
                  </span>
                  <span>Send a picture of your Ember Challenge Outfit</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-blue-200 text-blue-800 font-bold rounded-full h-8 w-8 flex items-center justify-center">
                    3
                  </span>
                  <span>
                    Get ready for the biggest Event of the Month, check out for
                    more details, you could be our next featured studio
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2">
                Your weekly playbook for the 2026 good year
              </h3>
              <p className="text-gray-600 mb-4">
                Your weekly playlist for the 2026 good year
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-md"
                />
                <GlowButton className="bg-black text-white px-6 py-3 rounded-md">
                  Complete now
                </GlowButton>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Countdown Section */}
      <AnimatedSection>
        <div className="py-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Countdown</h2>
          <CountdownClock targetDate={new Date("2026-01-01T00:00:00")} />
        </div>
      </AnimatedSection>

      {/* Prizes Section */}
      <AnimatedSection>
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96">
              <Image
                src={getAsset("toteBagWoodenTable")}
                alt="Prizes"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Get a chance to win{" "}
                <span className="text-blue-600">Prizes</span>
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> Tote Bags
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> Swag Bags
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> T-Shirts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Grand Prize Section */}
      <AnimatedSection>
        <div className="py-16 text-center relative">
          <div className="absolute top-4 right-4 w-24 h-24">
            <Image
              src={getAsset("decorTestimonialQuotePlate")}
              alt="Win Sticker"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-6xl font-extrabold">
            Grand Prize
            <br />
            <span className="text-blue-600">Laptop</span>
          </h2>
          <p className="text-gray-600 my-4">
            Take it for home! Win the Ultimate Prize!
          </p>
          <div className="relative h-[450px] mt-8">
            <Image
              src={getAsset("whiteScreenLaptopTilted")}
              alt="Laptop Grand Prize"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Carry the Glow Section */}
      <AnimatedSection>
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Carry the Glow wherever the day takes you.
              </h2>
              <p className="text-gray-600">
                Download our mobile app and never miss a beat. Listen to your
                favorite shows, participate in challenges, and stay connected
                on the go!
              </p>
              <ul className="space-y-2">
                <li>Talk suggestions from a large database</li>
                <li>Listen to our talk shows</li>
                <li>Join challenges and win prizes</li>
              </ul>
              <GlowButton className="bg-black text-white px-6 py-3 rounded-md">
                Go to Google Play
              </GlowButton>
            </div>
            <div className="relative h-96">
              <Image
                src={getAsset("notePadTabletBlackScreen")}
                alt="GlowFM App"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About GlowFM Section */}
      <AnimatedSection>
        <div className="py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={getAsset("caseStudyNotebookWorkspaceWarm")}
                alt="About GlowFM"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">About GlowFm</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl nec ultricies lacinia, nisl nisl aliquet
                aliquet, nec aliquam nisl nisl eu nisl.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl nec ultricies lacinia, nisl nisl aliquet
                aliquet, nec aliquam nisl nisl eu nisl.
              </p>
              <GlowButton className="bg-black text-white px-6 py-3 rounded-md">
                Read More
              </GlowButton>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Reviews Section */}
      <AnimatedSection>
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">
              Our Programmes Reviews
            </h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-gray-100 p-8 rounded-lg">
                <p className="text-gray-600 mb-4">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl
                  aliquet aliquet, nec aliquam nisl nisl eu nisl.&quot;
                </p>
                <div className="font-semibold">Sarah Tone</div>
                <div className="text-gray-500">Glow Fm</div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={getAsset("heroHostSmileCutout")}
                  alt="Reviewer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}
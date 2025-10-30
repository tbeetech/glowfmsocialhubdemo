#!/usr/bin/env python3
"""Create the homepage for GlowFM website"""

homepage_content = '''
"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { getAsset } from "@/lib/drive-assets";
import { CountdownClock } from "@/components/CountdownClock";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container relative z-10 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Connect with the <span className="text-gray-900">GlowFM:</span>
                <br />
                Join & Engage <span className="text-red-600">In the</span>
                <br />
                Community&apos;s <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-red-600 -rotate-2 rounded"></span>
                  <span className="relative text-white px-3 py-1">Fun</span>
                </span>
              </h1>
              <p className="text-base text-gray-600 max-w-xl leading-relaxed">
                The most powerful element is the connection. Connect with the creators who are pouring their passion into shaping tomorrow&apos;s sound.
              </p>
              <div className="flex items-center gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 max-w-sm px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:border-red-500"
                />
                <GlowButton size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-6">
                  Join Glow Fm
                </GlowButton>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="relative h-[400px] lg:h-[550px] flex items-center justify-center">
              <Image
                src={getAsset("blackMicrophoneFacesDown")}
                alt="Professional Broadcasting Microphone"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Ember Challenge Ticker */}
      <div className="relative overflow-hidden py-4 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900">
        <div className="animate-marquee whitespace-nowrap flex items-center text-white text-lg font-semibold">
          <span className="mx-8">🎤 Glow Ember Challenge is Here!!</span>
          <span className="mx-8 opacity-90">✨ Don&apos;t miss out from the Fun!</span>
          <span className="mx-8 text-yellow-300">🎯 + Participate Now</span>
          <span className="mx-8">🎤 Glow Ember Challenge is Here!!</span>
          <span className="mx-8 opacity-90">✨ Don&apos;t miss out from the Fun!</span>
          <span className="mx-8 text-yellow-300">🎯 + Participate Now</span>
        </div>
      </div>

      {/* Show Listings Section */}
      <AnimatedSection>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">Show Listings</h2>
              <p className="text-gray-600 text-lg">Glow up with our amazing shows, bringing you vibes, and Godly content.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group">
                <div className="relative h-64 mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={getAsset("listenerProfile01")}
                    alt="Glow Wellness"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Glow Wellness</h3>
                <GlowButton size="sm" className="bg-blue-900 hover:bg-blue-800">
                  Listen live
                </GlowButton>
              </div>

              <div className="group">
                <div className="relative h-64 mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={getAsset("listenerProfile02")}
                    alt="Glow Fm Connect"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Glow Fm Connect</h3>
                <GlowButton size="sm" className="bg-blue-900 hover:bg-blue-800">
                  Listen live
                </GlowButton>
              </div>

              <div className="group">
                <div className="relative h-64 mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={getAsset("listenerProfile03")}
                    alt="Glow Kiddies"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Glow Kiddies</h3>
                <GlowButton size="sm" className="bg-blue-900 hover:bg-blue-800">
                  Listen live
                </GlowButton>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Glow Ember Challenge Section */}
      <AnimatedSection>
        <div className="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-red-600 transform -rotate-2 rounded-lg"></div>
                    <span className="relative bg-white text-red-600 px-4 py-2 rounded font-bold text-lg">LIVE!</span>
                  </div>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                  Glow Ember Challenge
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  The Ember Challenge Starts Now. Enter to Win
                </p>
                <GlowButton size="lg" className="bg-blue-900 hover:bg-blue-800">
                  Participate now
                </GlowButton>
              </div>

              <div className="relative h-[500px]">
                <Image
                  src={getAsset("happyBlackManOrangeShirt")}
                  alt="Glow Ember Challenge Participant"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How to Get on Stage Section */}
      <AnimatedSection>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">How to Get on the Ember Challenge Stage</h2>
            <p className="text-xl text-center text-gray-600 mb-12">Make sure to follow these steps</p>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { step: '1', text: 'Follow all our Social Media Platforms' },
                { step: '2', text: 'Send a picture of your Ember Challenge Outfit' },
                { step: '3', text: 'Get ready for the biggest Event of the Month' },
                { step: '4', text: 'Attend the Event and Win Amazing Prizes' },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-6 bg-gray-50 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <p className="text-xl text-gray-800">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Countdown Section */}
      <AnimatedSection>
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Ember Challenge Countdown</h2>
            <p className="text-xl text-gray-600 mb-12">The Challenge Begins In</p>
            <CountdownClock targetDate={new Date("2026-01-01T00:00:00")} />
          </div>
        </div>
      </AnimatedSection>

      {/* Prizes Section */}
      <AnimatedSection>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">Amazing Prizes</h2>
            <p className="text-xl text-center text-gray-600 mb-12">Win These Exclusive Rewards</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Premium Camera', image: getAsset("prizeCamera01") },
                { title: 'Professional Camera Kit', image: getAsset("prizeCamera02") },
                { title: 'Photography Bundle', image: getAsset("prizeCamera01") },
              ].map((prize, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
                  <div className="relative h-64">
                    <Image
                      src={prize.image}
                      alt={prize.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900">{prize.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Grand Prize - Laptop Section */}
      <AnimatedSection>
        <div className="py-20 bg-gradient-to-r from-orange-500 via-red-600 to-orange-500">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-3xl overflow-hidden">
                <Image
                  src={getAsset("whiteScreenLaptopTilted")}
                  alt="Grand Prize Laptop"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-5xl md:text-6xl font-bold">
                  <span className="text-white">Grand Prize: </span>
                  <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 text-transparent bg-clip-text">
                    Brand New Laptop
                  </span>
                </h2>
                <p className="text-xl text-white max-w-lg mx-auto lg:mx-0">
                  The ultimate winner takes home a brand new high-performance laptop!
                </p>
                <GlowButton size="lg" className="bg-blue-900 hover:bg-blue-800">Join the Challenge</GlowButton>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Carry the Glow - Mobile App Section */}
      <AnimatedSection>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                  Carry the Glow Everywhere
                </h2>
                <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                  Download our mobile app and stay connected with GlowFM wherever you go!
                </p>
                <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                  <GlowButton size="lg" className="bg-blue-900 hover:bg-blue-800">Download on iOS</GlowButton>
                  <GlowButton size="lg" className="bg-blue-900 hover:bg-blue-800">Get on Android</GlowButton>
                </div>
              </div>

              <div className="relative h-[500px]">
                <Image
                  src={getAsset("showcaseAppMockup")}
                  alt="GlowFM Mobile App"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About Glow FM Section */}
      <AnimatedSection>
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-3xl overflow-hidden">
                <Image
                  src={getAsset("caseStudyNotebookWorkspaceWarm")}
                  alt="GlowFM Studio"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-5xl font-bold text-gray-900">About GlowFm</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  GlowFM is more than just a radio station - we&apos;re a community. We bring people together through music, engaging content, and exciting events.
                </p>
                <GlowButton size="lg" className="bg-blue-900 hover:bg-blue-800">Learn More</GlowButton>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Programme Reviews Section */}
      <AnimatedSection>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">What Our Listeners Say</h2>
            <p className="text-xl text-center text-gray-600 mb-12">Real reviews from real listeners</p>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-8 shadow-2xl">
                <div className="text-yellow-300 text-5xl mb-4">&ldquo;</div>
                <p className="text-xl text-white leading-relaxed mb-6">
                  GlowFM has transformed my mornings! The hosts are engaging, the music is fresh!
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-300"></div>
                  <div>
                    <p className="font-bold text-white">Sarah M.</p>
                    <p className="text-gray-300">Daily Listener</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] rounded-3xl overflow-hidden">
                <Image
                  src={getAsset("heroHostSmileCutout")}
                  alt="Programme Review"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Social Media Footer */}
      <div className="py-12 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Link Up With The Wall
          </h3>
          <div className="flex justify-center gap-8 text-white text-lg flex-wrap">
            <a href="#" className="hover:text-yellow-300 transition">🐦 Twitter</a>
            <a href="#" className="hover:text-yellow-300 transition">📺 YouTube</a>
            <a href="#" className="hover:text-yellow-300 transition">📘 Facebook</a>
            <a href="#" className="hover:text-yellow-300 transition">📱 TikTok</a>
            <a href="#" className="hover:text-yellow-300 transition">📷 Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
'''.strip()

# Write to file
with open('apps/web/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(homepage_content)

print("✅ Successfully created homepage!")

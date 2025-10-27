"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { GlowCard } from "@/components/ui/GlowCard";
import { CountdownClock } from "@/components/CountdownClock";
import { getAsset } from "@/lib/drive-assets";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getAsset("heroBackgroundGradient")}
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Connect with the GlowFM;
                <br />
                <span className="text-primary">Join & Engage</span> in the
                <br />
                Community&apos;s <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Fun</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Join the vibrant Glow FM community. Participate in exciting challenges, 
                connect with fellow listeners, and be part of Nigeria&apos;s most engaging campus radio experience.
              </p>
              <div className="flex gap-4">
                <GlowButton href="/social-media">Explore Now</GlowButton>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Image */}
          <AnimatedSection delay={0.3}>
            <div className="relative h-[500px] lg:h-[600px]">
              <Image
                src={getAsset("heroMicProductCutout")}
                alt="Professional Broadcasting Microphone"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Decorative Grid Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <Image
            src={getAsset("decorHeroGlowGrid")}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Glow Ember Challenge Ticker */}
      <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-2xl font-bold mx-8">🎤 Glow Ember Challenge</span>
          <span className="text-2xl mx-8">⭐ Don&apos;t miss out on the Fun</span>
          <span className="text-2xl font-bold mx-8">🎁 Amazing Prizes</span>
          <span className="text-2xl mx-8">🎯 Starts Very Soon</span>
          <span className="text-2xl font-bold mx-8">🎤 Glow Ember Challenge</span>
          <span className="text-2xl mx-8">⭐ Don&apos;t miss out on the Fun</span>
        </div>
      </div>

      {/* Show Listings Section */}
      <AnimatedSection>
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Show Listings</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here you can enjoy our amazing live shows, talk shows, and entertainment programs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Glow Wellness", 
                  image: "listenerProfile01",
                  description: "Your daily dose of health and wellness tips"
                },
                { 
                  title: "Glow Fun Connect", 
                  image: "listenerProfile02",
                  description: "Entertainment and music that keeps you connected"
                },
                { 
                  title: "Glow Kiddies", 
                  image: "listenerProfile03",
                  description: "Fun and educational content for young listeners"
                },
              ].map((show, idx) => (
                <AnimatedSection key={show.title} delay={0.1 * (idx + 1)}>
                  <GlowCard className="group overflow-hidden">
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <Image
                        src={getAsset(show.image as any)}
                        alt={show.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{show.title}</h3>
                      <p className="text-muted-foreground mb-4">{show.description}</p>
                      <GlowButton variant="outline" size="sm">
                        Listen Now
                      </GlowButton>
                    </div>
                  </GlowCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Glow Ember Challenge Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider rotate-3 inline-block shadow-lg">
                    Live!!!
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold">
                  Glow Ember Challenge
                </h2>
                <p className="text-xl text-muted-foreground">
                  The Ember Challenge Starts Very Soon. Be Part Of The
                  <br />
                  Ember Challenge
                </p>
                <GlowButton size="lg">Complete Now</GlowButton>
              </div>

              {/* Image */}
              <AnimatedSection delay={0.2}>
                <div className="relative">
                  <div className="relative h-[500px]">
                    <Image
                      src={getAsset("heroHostStageCutout")}
                      alt="Glow FM Host"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute top-10 right-10 w-32 h-32 opacity-50">
                    <Image
                      src={getAsset("decorSignalCluster")}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <Image
              src={getAsset("decorHeroGlowGrid")}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </section>
      </AnimatedSection>

      {/* How to Get on the Ember Challenge Stage */}
      <AnimatedSection>
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <AnimatedSection delay={0.1}>
                <div className="relative h-[600px]">
                  <Image
                    src={getAsset("galleryRunwayPoseCutout")}
                    alt="Challenge Participant"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                  {/* Dotted arrow decoration */}
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-30">
                    <Image
                      src={getAsset("decorDottedArrowPath")}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* Content */}
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold">
                  How to Get on the
                  <br />
                  Ember Challenge Stage
                </h2>
                
                <div className="space-y-6">
                  {[
                    "WASH, Sanitize yourself pieces, table, and an air.",
                    "register, and complete the GLOW999.1 FM social media account before you leave.",
                    "Use the app/web to submit your GlowFM Radio number and make sure you...",
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-muted-foreground pt-1">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg border border-primary/30">
                  <p className="font-semibold mb-2">Your weekly podcast for the 2026 great years</p>
                  <div className="flex gap-2 flex-wrap">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 min-w-[200px] px-4 py-2 rounded-lg bg-background border border-input"
                    />
                    <GlowButton>Subscribe</GlowButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Countdown Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-background to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Countdown</h2>
            <p className="text-muted-foreground mb-12">Time To January 1</p>
            <CountdownClock targetDate={new Date("2026-01-01T00:00:00")} />
          </div>
        </section>
      </AnimatedSection>

      {/* Prizes Section */}
      <AnimatedSection>
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Prize Images */}
              <AnimatedSection delay={0.1}>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {["showcaseBagStory01", "showcaseBagStory02", "showcaseBagStory03", "showcaseBagStory04"].map((img, idx) => (
                      <div key={img} className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={getAsset(img as any)}
                          alt={`Prize ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Prize List */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Get a chance to win
                </h2>
                
                <div className="space-y-4">
                  {[
                    "Steak Bags",
                    "Swag Bags",
                    "T-Shirts & More",
                    "Free Prize",
                  ].map((prize, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg font-semibold">{prize}</span>
                    </div>
                  ))}
                </div>

                <div className="text-6xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Prizes
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Grand Prize - Laptop */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-blue-950 via-purple-950 to-blue-950 text-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold uppercase tracking-wider rotate-2 inline-block shadow-xl">
                  WOW!!
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-4">Grand Prize</h2>
              <p className="text-xl opacity-90">Stand A Chance To Win A Brand New Laptop!</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={getAsset("equipmentBroadcastLaptopCutout")}
                  alt="Grand Prize Laptop"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              
              <div className="text-center mt-8">
                <h3 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Laptop
                </h3>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl" />
          </div>
        </section>
      </AnimatedSection>

      {/* Carry the Glow Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Carry the Glow wherever
                  <br />
                  the day takes you.
                </h2>
                <p className="text-lg text-muted-foreground">
                  Download the Glow FM app and stay connected to your favorite shows, 
                  participate in challenges, and never miss a moment of the action.
                </p>
                <ul className="space-y-3">
                  {[
                    "🎧 Stream live shows anywhere",
                    "📱 iOS supported. Using a single signed-on Surface",
                    "🎯 Participate in real-time challenges",
                    "🏆 Track your progress and rewards",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-lg">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* App Preview */}
              <AnimatedSection delay={0.2}>
                <div className="relative h-[500px] flex items-center justify-center">
                  <div className="relative w-full h-full max-w-md">
                    <Image
                      src="/images/glow-app-showcase.png"
                      alt="Glow FM Mobile App"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-20 -left-10 w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-50" />
                  <div className="absolute bottom-20 -right-10 w-24 h-24 bg-orange-400 rounded-full blur-2xl opacity-50" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About GlowFm Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <AnimatedSection delay={0.1}>
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src={getAsset("caseStudyNotebookWorkspaceWarm")}
                    alt="About Glow FM"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>

              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">About GlowFm</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                  irure dolor in reprehenderit in voluptate velit esse cillum 
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                  cupidatat non proident, sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Contrary to popular belief, Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. All text and random.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Programme Reviews */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Our Programmes Reviews
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Testimonial 1 */}
              <AnimatedSection delay={0.1}>
                <GlowCard className="p-8 bg-gradient-to-br from-blue-950 to-purple-950 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="text-6xl mb-4 opacity-50">"</div>
                    <p className="text-lg mb-6 leading-relaxed">
                      This has been one of my best decisions to listen to Glow FM. 
                      The shows are engaging, the hosts are amazing, and the community 
                      is so welcoming. I've made so many friends through the challenges!
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                      <div>
                        <p className="font-bold">Sarah Johnson</p>
                        <p className="text-sm opacity-75">Regular Listener</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </AnimatedSection>

              {/* Testimonial 2 */}
              <AnimatedSection delay={0.2}>
                <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden">
                  <Image
                    src={getAsset("featureCardHostReview")}
                    alt="Programme Review"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Link Up With The Wall */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-blue-950 via-purple-950 to-pink-950 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Link Up With The Wall</h2>
            
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: "Twitter", icon: "𝕏", url: "https://twitter.com/glow991fm" },
                { name: "Youtube", icon: "▶", url: "https://youtube.com/@glow991fm" },
                { name: "Facebook", icon: "f", url: "https://facebook.com/glow991fm" },
                { name: "TikTok", icon: "♪", url: "https://tiktok.com/@glow991fm" },
                { name: "Instagram", icon: "📷", url: "https://instagram.com/glow991fm" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 hover:scale-110 transition-transform"
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-3xl group-hover:bg-white/20 transition-colors">
                    {social.icon}
                  </div>
                  <span className="font-semibold">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

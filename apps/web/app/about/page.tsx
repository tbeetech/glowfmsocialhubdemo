import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";
import { getAsset } from "@/lib/drive-assets";

const pillars = [
  {
    title: "High-Quality Programming",
    description:
      "We curate Afrobeats, hip-hop, R&B, gospel, talk, and lifestyle shows so every hour on 99.1 FM feels intentional.",
    detail:
      "Daily playlists, show rundowns, and sound design are reviewed by the production team to keep the sound fresh and relevant.",
    icon: getAsset("decorAudioWaveIcon")
  },
  {
    title: "Engaging Presenters & DJs",
    description:
      "Glow FM is powered by experienced presenters, producers, and DJs who bring energy, clarity, and credibility to every broadcast.",
    detail:
      "From call-in moderation to studio interviews, our on-air talent is trained to deliver memorable listener experiences.",
    icon: getAsset("heroHostSmileCutout")
  },
  {
    title: "Community Programming",
    description:
      "We amplify local talent, host live events, and partner with community initiatives so the region hears itself reflected on air.",
    detail:
      "Scholarships, emerging artist showcases, and outreach drives are planned with schools, NGOs, and business hubs every quarter.",
    icon: getAsset("galleryEventCollage01")
  }
];

const teamHighlights = [
  { label: "12", text: "Producers and social editors shaping playlists and digital rollouts daily." },
  { label: "38", text: "Volunteer correspondents reporting from campuses across Ondo and beyond." },
  { label: "250K", text: "Weekly impressions across radio, livestream, and social storytelling." }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-orange-600"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="h-full w-full bg-white/10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr] lg:items-center">
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-6 py-3 border border-white/30">
                <span className="text-sm font-bold font-['El_Messiri'] uppercase tracking-[0.3em]">Here, the Beat Meets the Glow</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black font-['El_Messiri'] leading-tight">
                Glow 99.1 FM
                <span className="block text-3xl lg:text-5xl text-white/90 mt-2">The Heartbeat of Akure</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed font-['El_Messiri']">
                Broadcasting from Akure, Ondo State, Glow FM is a vibrant station trusted by families, students, entrepreneurs, and community leaders.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <GlowButton size="lg" variant="secondary" className="font-['El_Messiri'] font-bold" asChild>
                  <Link href="/advertisement">Partnership Opportunities</Link>
                </GlowButton>
                <GlowButton size="lg" variant="ghost" className="font-['El_Messiri'] font-bold" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </GlowButton>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src={getAsset("studioSample")}
                  alt="Glow FM studio and team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="text-3xl font-black text-orange-500 font-['El_Messiri']">250K+</div>
                <div className="text-sm text-gray-600 font-['El_Messiri'] font-bold">Weekly Listeners</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Story Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 font-['El_Messiri'] mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 font-['El_Messiri'] mb-4">Here, the Beat meets the Glow!</h3>
                  <p className="text-gray-600 leading-relaxed font-['El_Messiri']">
                    Glow 99.1 FM is a household name in the region, entertaining and informing a wide audience of listeners from the heart of Akure, Ondo State, Nigeria.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 font-['El_Messiri'] mb-4">Quality Programming</h3>
                  <p className="text-gray-600 leading-relaxed font-['El_Messiri']">
                    Our carefully curated mix includes Afrobeats, hip-hop, R&B, gospel, talk shows, and lifestyle content, ensuring there&apos;s always something for everyone.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 font-['El_Messiri'] mb-4">Engaging Content</h3>
                  <p className="text-gray-600 leading-relaxed font-['El_Messiri']">
                    Beyond music, we provide engaging news, current events, and talk shows with experienced presenters and DJs who bring unique energy to every broadcast.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 font-['El_Messiri'] mb-4">Community Focus</h3>
                  <p className="text-gray-600 leading-relaxed font-['El_Messiri']">
                    We&apos;re deeply rooted in the local community, promoting local talent, hosting live events, and supporting community initiatives across the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* What Drives Us Section */}
      <AnimatedSection className="py-24 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 font-['El_Messiri'] mb-6">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['El_Messiri']">
              Our pillars ensure every listener, partner, and community member feels the Glow.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="group">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={pillar.icon}
                      alt={pillar.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white font-['El_Messiri']">{pillar.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-4">
                    <p className="text-gray-600 leading-relaxed font-['El_Messiri']">{pillar.description}</p>
                    <p className="text-sm text-gray-500 font-['El_Messiri']">{pillar.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr]">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-8">
                <h3 className="text-3xl font-bold text-white font-['El_Messiri']">The Team Behind the Glow</h3>
                <p className="text-white/90 mt-2 font-['El_Messiri']">Cross-functional storytellers</p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-8 font-['El_Messiri']">
                  Producers, presenters, graphic artists, and analysts collaborate daily to keep Glow FM buzzing online and on-air.
                </p>
                <div className="space-y-6">
                  {teamHighlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-6 p-4 bg-gray-50 rounded-2xl">
                      <div className="text-4xl font-black text-orange-500 font-['El_Messiri'] min-w-0">{item.label}</div>
                      <div className="text-gray-600 font-['El_Messiri']">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-8">
                <h3 className="text-2xl font-bold text-white font-['El_Messiri']">How to Collaborate</h3>
                <p className="text-white/90 mt-2 font-['El_Messiri']">Partner with Glow FM</p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6 font-['El_Messiri']">
                  We partner with brands, student unions, NGOs, and creative collectives. Choose a promo slot, co-produce an event, or integrate your message into our digital campaigns.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 font-['El_Messiri'] font-bold">Influencer takeovers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 font-['El_Messiri'] font-bold">Sponsored segment scripting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 font-['El_Messiri'] font-bold">Performance reporting</span>
                  </div>
                </div>
                <GlowButton size="lg" variant="accent" className="w-full font-['El_Messiri'] font-bold" asChild>
                  <Link href="/advertisement">View Advertising Options</Link>
                </GlowButton>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}




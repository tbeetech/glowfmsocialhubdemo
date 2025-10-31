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

const aboutNarrative = [
  "Here, the Beat meets the Glow! Glow 99.1 FM is a household name in the region, entertaining and informing a wide audience of listeners.",
  "Glow FM Akure is a vibrant and popular radio station broadcasting from the heart of Akure, Ondo State, Nigeria. With a frequency of 99.1 FM, the station has become a household name in the region, entertaining and informing a wide audience of listeners.",
  "Since its inception, Glow FM Akure has been dedicated to providing high-quality programming that caters to the diverse tastes and interests of its listeners. The station's playlist is a carefully curated mix of music genres, including Afrobeats, hip-hop, R&B, and more, ensuring that there's always something for everyone.",
  "Beyond music, Glow FM Akure is also committed to providing engaging and informative content, including news, current events, and talk shows. The station's team of experienced presenters and DJs bring a unique perspective and energy to their shows, making them a delight to listen to.",
  "One of the standout features of Glow FM Akure is its strong focus on community programming. The station is deeply rooted in the local community and is dedicated to promoting and supporting local talent, events, and initiatives. From hosting live broadcasts and events to providing a platform for local artists and organizations, Glow FM Akure is a true champion of the community.",
  "In conclusion, Glow FM Akure is a shining example of a radio station that truly understands its audience and community. With its diverse programming, engaging presenters, and commitment to local talent and initiatives, the station has become a beloved and trusted voice in the region. Whether you're a music lover, a news enthusiast, or simply looking for a sense of community, Glow FM Akure has something for everyone."
];

const teamHighlights = [
  { label: "12", text: "Producers and social editors shaping playlists and digital rollouts daily." },
  { label: "38", text: "Volunteer correspondents reporting from campuses across Ondo and beyond." },
  { label: "250K", text: "Weekly impressions across radio, livestream, and social storytelling." }
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <AnimatedSection className="rounded-3xl bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 p-6 text-white shadow-xl sm:p-8 mx-4">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center md:gap-10">
          <div className="space-y-5 sm:space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/80 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
              Here, the Beat Meets the Glow
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Glow 99.1 FM - The Heartbeat of Akure</h1>
            <p className="max-w-2xl text-sm text-white/80 sm:text-base md:text-lg">
              Broadcasting from Akure, Ondo State, Glow FM is a vibrant station trusted by families, students, entrepreneurs, and community leaders. We blend music discovery, news, and storytelling with digital-first experiences that keep listeners plugged in on air, online, and on the go.
            </p>
            <GlowButton size="lg" className="bg-white text-orange-600 hover:bg-gray-100 uppercase tracking-[0.2em] sm:tracking-[0.3em]" asChild>
              <Link href="/advertisement">Learn about our partnerships</Link>
            </GlowButton>
          </div>
          <div className="relative hidden h-full min-h-[280px] rounded-3xl border border-white/15 bg-black/20 shadow-2xl md:block overflow-hidden">
            <Image
              src={getAsset("studioSample")}
              alt="Glow FM studio and team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-8 mx-4">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6">
            <h2 className="text-2xl font-bold text-white">Our Story</h2>
            <p className="text-white/90 mt-2">Glow FM Akure is a beloved voice for music, news, and community.</p>
          </div>
          <div className="p-6">
            <div className="space-y-4 text-sm text-gray-600">
              {aboutNarrative.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-8 mx-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">What Drives Us</h2>
            <p className="text-sm text-gray-600">
              Our pillars ensure every listener, partner, and community feels the Glow.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4">
                <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="relative h-36 overflow-hidden rounded-2xl border border-gray-100">
                  <Image
                    src={pillar.icon}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 320px"
                  />
                </div>
                <p className="text-sm text-gray-600">{pillar.description}</p>
                <p className="text-xs text-gray-500">{pillar.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 lg:grid-cols-[1.2fr,1fr] mx-4 pb-16">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6">
            <h3 className="text-2xl font-bold text-white">The Team Behind the Glow</h3>
            <p className="text-white/90 mt-1">Cross-functional storytellers</p>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-600">
              Producers, presenters, graphic artists, and analysts collaborate daily to keep Glow FM buzzing online and on-air. We script campaigns,
              design graphics, produce short-form video, and monitor dashboards around the clock.
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {teamHighlights.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="text-3xl font-semibold text-orange-500">{item.label}</span>
                  <span className="text-gray-600">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6">
            <h3 className="text-xl font-bold text-white">How to Collaborate</h3>
            <p className="text-white/90 mt-1">Partner with Glow FM</p>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-600">
              We partner with brands, student unions, NGOs, and creative collectives. Choose a promo slot, co-produce an event, or integrate your message into our digital campaigns.
            </p>
            <ul className="mt-4 space-y-2 text-[11px] uppercase tracking-[0.24em] text-orange-600 sm:text-xs sm:tracking-[0.35em]">
              <li>Influencer takeovers</li>
              <li>Sponsored segment scripting</li>
              <li>Performance reporting</li>
            </ul>
            <GlowButton size="sm" className="mt-6 bg-orange-500 hover:bg-orange-600" asChild>
              <Link href="/advertisement">View advertising options</Link>
            </GlowButton>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}




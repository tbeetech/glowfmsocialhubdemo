import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowButton } from "@/components/ui/GlowButton";

const FALLBACK_IMAGE = "/images/Retro-Futuristic%20Glow%2099.1%20FM.png";

const pillars = [
  {
    title: "High-Quality Programming",
    description:
      "We curate Afrobeats, hip-hop, R&B, gospel, talk, and lifestyle shows so every hour on 99.1 FM feels intentional.",
    detail:
      "Daily playlists, show rundowns, and sound design are reviewed by the production team to keep the sound fresh and relevant.",
    icon: FALLBACK_IMAGE
  },
  {
    title: "Engaging Presenters & DJs",
    description:
      "Glow FM is powered by experienced presenters, producers, and DJs who bring energy, clarity, and credibility to every broadcast.",
    detail:
      "From call-in moderation to studio interviews, our on-air talent is trained to deliver memorable listener experiences.",
    icon: FALLBACK_IMAGE
  },
  {
    title: "Community Programming",
    description:
      "We amplify local talent, host live events, and partner with community initiatives so the region hears itself reflected on air.",
    detail:
      "Scholarships, emerging artist showcases, and outreach drives are planned with schools, NGOs, and business hubs every quarter.",
    icon: FALLBACK_IMAGE
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
      <AnimatedSection className="rounded-3xl bg-glow-hero p-6 text-white shadow-glow-emphasis sm:p-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] md:items-center md:gap-10">
          <div className="space-y-5 sm:space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/80 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
              Here, the Beat Meets the Glow
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Glow 99.1 FM - The Heartbeat of Akure</h1>
            <p className="max-w-2xl text-sm text-white/80 sm:text-base md:text-lg">
              Broadcasting from Akure, Ondo State, Glow FM is a vibrant station trusted by families, students, entrepreneurs, and community leaders. We blend music discovery, news, and storytelling with digital-first experiences that keep listeners plugged in on air, online, and on the go.
            </p>
            <GlowButton size="lg" variant="accent" className="uppercase tracking-[0.2em] sm:tracking-[0.3em]" asChild>
              <Link href="/advertisement">Learn about our partnerships</Link>
            </GlowButton>
          </div>
          <div className="relative hidden h-full min-h-[280px] rounded-3xl border border-white/15 bg-black/20 shadow-2xl md:block">
            <Image
              src="https://res.cloudinary.com/demo/image/upload/v1720000000/glowfm/about-team.jpg"
              alt="Glow FM social media team collaborating"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-8">
        <GlowCard
          title="Our Story"
          description="Glow FM Akure is a beloved voice for music, news, and community."
          headerClassName="bg-gradient-to-r from-glow-secondary to-glow-primary"
          className="shadow-glow-emphasis"
        >
          <div className="space-y-4 text-sm text-[var(--foreground)]/80 dark:text-white/80">
            {aboutNarrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </GlowCard>
      </AnimatedSection>

      <AnimatedSection className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">What Drives Us</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Our pillars ensure every listener, partner, and community feels the Glow.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <GlowCard key={pillar.title} title={pillar.title}>
              <div className="space-y-4">
                <div className="relative h-36 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={pillar.icon ?? FALLBACK_IMAGE}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 320px"
                  />
                </div>
                <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">{pillar.description}</p>
                <p className="text-xs text-[var(--foreground)]/60 dark:text-white/60">{pillar.detail}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <GlowCard
          title="The Team Behind the Glow"
          description="Cross-functional storytellers"
          headerClassName="bg-gradient-to-r from-glow-secondary to-glow-primary"
          className="shadow-glow-emphasis"
        >
          <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">
            Producers, presenters, graphic artists, and analysts collaborate daily to keep Glow FM buzzing online and on-air. We script campaigns,
            design graphics, produce short-form video, and monitor dashboards around the clock.
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {teamHighlights.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span className="text-3xl font-semibold text-glow-accent">{item.label}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </GlowCard>
        <GlowCard title="How to Collaborate" description="Partner with Glow FM" className="shadow-glow-soft">
          <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">
            We partner with brands, student unions, NGOs, and creative collectives. Choose a promo slot, co-produce an event, or integrate your message into our digital campaigns.
          </p>
          <ul className="mt-4 space-y-2 text-[11px] uppercase tracking-[0.24em] text-glow-secondary sm:text-xs sm:tracking-[0.35em]">
            <li>Influencer takeovers</li>
            <li>Sponsored segment scripting</li>
            <li>Performance reporting</li>
          </ul>
          <GlowButton asChild size="sm" variant="ghost" className="mt-6">
            <a href="/advertisement">View advertising options</a>
          </GlowButton>
        </GlowCard>
      </AnimatedSection>
    </div>
  );
}




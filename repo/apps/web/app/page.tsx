import { HeroSection } from "../components/sections/HeroSection";
import { StoriesReel } from "../components/sections/StoriesReel";
import { ProgramsCarousel } from "../components/sections/ProgramsCarousel";
import { ContentFeed } from "../components/sections/ContentFeed";
import { EventsCalendar } from "../components/sections/EventsCalendar";
import { SocialWall } from "../components/SocialWall";
import { SponsorShowcase } from "../components/sections/SponsorShowcase";
import { CommunityLeaderboard } from "../components/sections/CommunityLeaderboard";
import { GlowPoll } from "../components/ui/GlowPoll";
import { GlowCard } from "../components/ui/GlowCard";
import { PageTransition } from "../components/ui/PageTransition";

const quickStats = [
  { label: "Live requests", value: "1,240", trend: "+12%" },
  { label: "Community posts", value: "860", trend: "+5%" },
  { label: "Sponsors active", value: "28", trend: "+2" }
];

export default function Home() {
  return (
    <PageTransition>
      <div className="space-y-16">
        <HeroSection />
        <StoriesReel />
        <ProgramsCarousel />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <ContentFeed />
          <div className="flex flex-col gap-6">
            <GlowPoll />
            <GlowCard className="p-5 text-white">
              <h3 className="text-lg font-semibold">Glow Insights</h3>
              <p className="mt-2 text-sm text-white/70">
                Track engagement spikes across programming to align sponsor spots and community shoutouts.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {quickStats.map((stat) => (
                  <li key={stat.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">{stat.label}</p>
                      <p className="text-base font-semibold text-white">{stat.value}</p>
                    </div>
                    <span className="text-xs font-semibold text-glow-primary">{stat.trend}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>
        </div>
        <EventsCalendar />
        <SocialWall />
        <SponsorShowcase />
        <CommunityLeaderboard />
      </div>
    </PageTransition>
  );
}


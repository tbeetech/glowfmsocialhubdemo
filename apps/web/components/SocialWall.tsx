import Image from "next/image";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowButton } from "@/components/ui/GlowButton";

type Card = {
  id: string;
  title: string;
  platform: "instagram" | "tiktok" | "youtube" | "x" | "facebook" | "rss";
  excerpt?: string;
  mediaUrl?: string;
  mediaAlt?: string;
  link?: string;
  publishedAt?: string;
};

type FeedResponse = { items: Card[] };

const fallbackFeed: FeedResponse = {
  items: [
    {
      id: "fallback-1",
      title: "Glow Ember Challenge - Finalists Revealed",
      platform: "instagram",
      excerpt: "Swipe through to meet the four voices lighting up campus airwaves. Vote for your favourite inside the Glow app!",
      mediaUrl: "https://res.cloudinary.com/demo/image/upload/v1720000000/glowfm/ember-finalists.jpg",
      mediaAlt: "Glow Ember Challenge finalists"
    },
    {
      id: "fallback-2",
      title: "Campus Vox Pop: What keeps you glowing?",
      platform: "tiktok",
      excerpt: "From lecture halls to hostel blocks, Glow FM hits the streets to ask what keeps you motivated.",
      mediaUrl: "https://res.cloudinary.com/demo/image/upload/v1720000000/glowfm/campus-vox.jpg",
      mediaAlt: "Students sharing opinions"
    },
    {
      id: "fallback-3",
      title: "Glow Sports Dash - Derby Day Breakdown",
      platform: "youtube",
      excerpt: "Coach Ife and the crew dive into weekend fixtures, derby predictions, and listener hot takes.",
      mediaUrl: "https://res.cloudinary.com/demo/image/upload/v1720000000/glowfm/sports-dash.jpg",
      mediaAlt: "Glow Sports Dash studio"
    }
  ]
};

function resolveApiBaseUrl() {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

async function fetchFeed(): Promise<FeedResponse> {
  try {
    const res = await fetch(`${resolveApiBaseUrl()}/api/feed`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Unexpected status ${res.status}`);
    }
    const data: unknown = await res.json();
    if (data && typeof data === "object" && Array.isArray((data as any).items)) {
      return { items: (data as any).items as Card[] };
    }
    throw new Error("Malformed feed response");
  } catch (error) {
    console.warn("[web] Failed to load feed, falling back to static items", error);
    return fallbackFeed;
  }
}

function formatPlatform(platform: Card["platform"]) {
  switch (platform) {
    case "instagram":
      return "Instagram";
    case "tiktok":
      return "TikTok";
    case "youtube":
      return "YouTube";
    case "facebook":
      return "Facebook";
    case "x":
      return "X (Twitter)";
    default:
      return "Social";
  }
}

export async function SocialWall() {
  const data = await fetchFeed();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {data.items.map((card) => (
        <GlowCard
          key={card.id}
          title={formatPlatform(card.platform)}
          description={card.publishedAt ? new Date(card.publishedAt).toLocaleString() : "Fresh from the Glow community"}
          headerClassName="bg-gradient-to-br from-glow-primary via-glow-accent to-glow-secondary"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[var(--foreground)] dark:text-white">{card.title}</h3>
            {card.mediaUrl && (
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={card.mediaUrl}
                  alt={card.mediaAlt || card.title}
                  width={800}
                  height={520}
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}
            {card.excerpt && <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">{card.excerpt}</p>}
            {card.link && (
              <GlowButton asChild size="sm" variant="ghost">
                <a href={card.link} target="_blank" rel="noreferrer">
                  Dive In
                </a>
              </GlowButton>
            )}
          </div>
        </GlowCard>
      ))}
    </div>
  );
}

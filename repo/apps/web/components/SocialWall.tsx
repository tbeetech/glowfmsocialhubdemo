import Image from "next/image";
import { socialWallTiles } from "../lib/mockData";
import { GlowSectionHeading } from "./ui/GlowSectionHeading";

type SocialTile = {
  id: string;
  hashtag: string;
  image: string;
};

async function getSocialWallTiles(): Promise<SocialTile[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      return socialWallTiles;
    }
    const response = await fetch(`${baseUrl}/api/feed`, { next: { revalidate: 60 } });
    if (!response.ok) {
      return socialWallTiles;
    }
    const payload = await response.json();
    if (Array.isArray(payload?.items)) {
      return payload.items as SocialTile[];
    }
    return socialWallTiles;
  } catch (error) {
    console.warn("Falling back to mock social wall", error);
    return socialWallTiles;
  }
}

export async function SocialWall() {
  const tiles = await getSocialWallTiles();

  return (
    <section id="social" className="space-y-6">
      <GlowSectionHeading
        superTitle="Social Wall"
        title="Glow Listener Highlights"
        description="Live hashtags, studio moments, and fan shoutouts streaming from the Glow community."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft"
          >
            <div className="relative h-52 w-full">
              <Image
                src={tile.image}
                alt={tile.hashtag}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                {tile.hashtag}
              </span>
              <span className="rounded-full bg-glow-primary px-3 py-1 text-xs font-semibold text-neutral-950">
                Glow Fam
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


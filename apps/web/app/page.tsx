import { FollowBar } from "../components/FollowBar";
import { SocialWall } from "../components/SocialWall";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-6">
        <h1 className="text-2xl font-semibold mb-2">Glow 99.1 FM • Social Hub</h1>
        <p className="opacity-80">Highlights, social wall, polls, quests and more.</p>
        <div className="mt-4">
          <FollowBar />
        </div>
      </section>

      <section>
        <SocialWall />
      </section>
    </div>
  );
}

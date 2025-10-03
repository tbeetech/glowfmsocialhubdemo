import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowButton } from "@/components/ui/GlowButton";

const featuredPosts = [
  {
    title: "Glow Ember Challenge: Meet the Week 3 Finalists",
    excerpt: "The social media desk recaps top entries, engagement stats, and how listeners can cast supportive votes.",
    category: "Campaigns",
    author: "Glow Digital Team",
    readingTime: "6 min read"
  },
  {
    title: "Campus Culture Street Jam Preview",
    excerpt: "Vendors to watch, influencer pop-ins, and how to grab your all-access wristband via Instagram Stories.",
    category: "Events",
    author: "Glow Lifestyle Desk",
    readingTime: "4 min read"
  },
  {
    title: "Advertiser Lab: Playbook for Festive Season Sales",
    excerpt: "Breakdown of three case studies where Glow FM social promos spiked campus retail conversions.",
    category: "Business",
    author: "Glow Partnerships",
    readingTime: "5 min read"
  }
];

const newsroomNotes = [
  {
    title: "Glow Kiddies Fan Art Winners",
    summary: "Weekly highlights from the junior creatives who remix our on-air stories into digital art.",
    anchor: "Family"
  },
  {
    title: "Political Hangout Fact Sheet",
    summary: "Policy deep dives, verified sources, and Twitter thread quick links for civic conversations.",
    anchor: "Civic"
  },
  {
    title: "Wellness Wednesday Playlist",
    summary: "Curated self-care tracks plus quotes from Women's World guest experts.",
    anchor: "Wellness"
  },
  {
    title: "Behind the Board: Engineering Glow",
    summary: "Audio team shares tech stack upgrades that keep our livestreams crisp and reliable.",
    anchor: "Production"
  }
];

export default function BlogPage() {
  return (
    <div className="space-y-16">
      <AnimatedSection className="rounded-3xl bg-glow-hero p-8 text-white shadow-glow-emphasis">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
            Glow Newsroom Preview
          </span>
          <h1 className="text-4xl font-bold md:text-5xl">Blog and Trend Desk</h1>
          <p className="max-w-3xl text-base text-white/80 md:text-lg">
            Use this template to publish weekly recaps, event guides, advertiser success stories, and campus bulletins. Swap the dummy content with your real-time updates or connect it to your preferred CMS when you are ready.
          </p>
          <GlowButton asChild size="lg" variant="accent" className="uppercase tracking-[0.3em]">
            <Link href="/contact">Pitch a story</Link>
          </GlowButton>
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Featured Stories</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Replace these cards with live articles or connect your headless CMS feed.
            </p>
          </div>
          <GlowButton asChild variant="ghost" size="sm">
            <Link href="/social-media">Pull assets from social hub</Link>
          </GlowButton>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <GlowCard key={post.title} title={post.title} description={`${post.category} - ${post.readingTime}`}>
              <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">{post.excerpt}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.35em] text-glow-secondary">By {post.author}</p>
              <GlowButton asChild size="sm" variant="ghost" className="mt-4 uppercase tracking-[0.3em]">
                <Link href="#" aria-label={`Read ${post.title}`}>
                  Read draft
                </Link>
              </GlowButton>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Newsroom Notes</h2>
            <p className="text-sm text-[var(--foreground)]/70 dark:text-white/70">
              Quick-hit updates you can expand into full blog posts or link out to newsletters.
            </p>
          </div>
          <GlowButton asChild variant="secondary" size="sm">
            <Link href="/advertisement">Download media kit</Link>
          </GlowButton>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {newsroomNotes.map((note) => (
            <GlowCard key={note.title} title={note.title} description={note.anchor} className="shadow-glow-soft">
              <p className="text-sm text-[var(--foreground)]/80 dark:text-white/80">{note.summary}</p>
              <p className="mt-4 text-xs text-[var(--foreground)]/60 dark:text-white/60">Update this summary with your latest briefing.</p>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}



import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowButton } from "@/components/ui/GlowButton";

const WHATSAPP_BROADCAST_LINK = "https://chat.whatsapp.com/BZvP92OCqir0cahZUlSYgI";

const contactChannels = [
  { label: "Media House | Traffic", value: "0805 482 0000", href: "tel:+2348054820000" },
  { label: "Studio Hotline", value: "0805 551 1110", href: "tel:+2348055511110" },
  { label: "Studio Hotline", value: "0706 677 1822", href: "tel:+2347066771822" },
  { label: "WhatsApp Broadcast", value: "Join Ember WhatsApp broadcast", href: WHATSAPP_BROADCAST_LINK },
  { label: "Email", value: "glow991fm@gmail.com", href: "mailto:glow991fm@gmail.com" }
] as const;

const contactReasons = [
  { label: "Ember Challenge Entry", value: "Ember Challenge Entry" },
  { label: "Show Request or Shout-out", value: "Show Request or Shout-out" },
  { label: "Advertising Brief", value: "Advertising Brief" },
  { label: "General Inquiry", value: "General Inquiry" }
] as const;

const faqSections = [
  {
    title: "Programming and Show Bookings",
    qa: [
      {
        question: "How do I request a shout-out or song feature?",
        answer: "Submit your request with preferred show and date. Our producers will confirm availability or suggest an alternative slot."
      },
      {
        question: "Can I pitch a segment for Political Hangout?",
        answer: "Yes. Share your topic outline and relevant sources. We fact-check submissions before locking them into the lineup."
      }
    ]
  },
  {
    title: "Advertising and Partnerships",
    qa: [
      {
        question: "What packages boost campus business sales?",
        answer: "Bundle Facebook Live overlays, TikTok reels, and on-air mentions. Our advertisement page outlines sample budgets and deliverables."
      },
      {
        question: "Do you offer post-campaign reports?",
        answer: "Every paid activation ships with reach, impressions, and conversion snapshots across platforms."
      }
    ]
  },
  {
    title: "Ember Challenge Participation",
    qa: [
      {
        question: "Where do I upload my entry clip?",
        answer: "Attach a cloud link or upload via the form. We accept MP3, MP4, and links to your social posts."
      },
      {
        question: "How will I know if I am shortlisted?",
        answer: "Look out for a WhatsApp message or phone call from the social desk before Thursday."
      }
    ]
  }
] as const;

interface ContactPageProps {
  searchParams?: { interest?: string };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const interest = searchParams?.interest?.toString();
  const defaultReason = interest ? "Advertising Brief" : contactReasons[0].value;
  const interestMessage = interest ? `I would like more details about the ${interest} package and available slots.` : "";

  return (
    <div className="space-y-16">
      <AnimatedSection className="rounded-3xl bg-glow-hero p-6 text-white shadow-glow-emphasis sm:p-8">
        <div className="space-y-5 sm:space-y-6">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/80 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
            Talk With Glow FM
          </span>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Contact and Submission Desk</h1>
          <p className="max-w-3xl text-sm text-white/80 sm:text-base md:text-lg">
            Reach the right Glow FM channel for shout-outs, story tips, advertising briefs, and Ember Challenge entries. The form below includes guided prompts and spelling checks to keep your submission crisp.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 lg:grid-cols-[1.3fr,1fr]">
        <GlowCard title="Send Us a Message" description="All fields support spell check" headerClassName="bg-gradient-to-r from-glow-secondary to-glow-primary" className="shadow-glow-emphasis">
          <form
            className="space-y-5"
            action="mailto:glow991fm@gmail.com,careers@glowfmradio.com,chairman@glowfmradio.com,marketing@glowfmradio.com?subject=Glow%20FM%20Contact%20Submission"
            method="post"
            encType="text/plain"
            target="_blank"
          >
            {interest && <input type="hidden" name="campaignInterest" value={interest} />}
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-[var(--foreground)]/80 dark:text-white/80">
                <span>Full name</span>
                <input
                  type="text"
                  name="name"
                  required
                  spellCheck={true}
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-glow-accent"
                  placeholder="Enter your full name"
                />
              </label>
              <label className="space-y-2 text-sm text-[var(--foreground)]/80 dark:text-white/80">
                <span>Email address</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-glow-accent"
                  placeholder="example@glow991fm.com"
                />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm text-[var(--foreground)]/80 dark:text-white/80">
                <span>Phone or WhatsApp number</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-glow-accent"
                  placeholder="Include country code"
                />
              </label>
              <label className="space-y-2 text-sm text-[var(--foreground)]/80 dark:text-white/80">
                <span>Reason for contact</span>
                <select
                  name="reason"
                  defaultValue={defaultReason}
                  className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-glow-accent"
                >
                  {contactReasons.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="space-y-2 text-sm text-[var(--foreground)]/80 dark:text-white/80">
              <span>Message</span>
              <textarea
                name="message"
                rows={6}
                required
                defaultValue={interestMessage}
                spellCheck={true}
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-glow-accent"
                placeholder="Describe your request, include links, or paste your script."
              />
            </label>
            <label className="space-y-2 text-sm text-[var(--foreground)]/80 dark:text-white/80">
              <span>Share supporting links (optional)</span>
              <input
                type="url"
                name="links"
                spellCheck={true}
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-glow-accent"
                placeholder="https://"
              />
            </label>
            <GlowButton type="submit" size="lg" className="uppercase tracking-[0.22em] sm:tracking-[0.35em]">
              Submit message
            </GlowButton>
          </form>
        </GlowCard>

        <GlowCard title="Reach Us Quickly" description="Direct channels" className="shadow-glow-soft">
          <ul className="space-y-4 text-sm text-[var(--foreground)]/80 dark:text-white/80">
            {contactChannels.map((channel) => (
              <li key={`${channel.label}-${channel.value}`} className="rounded-2xl border border-white/15 bg-white/5 p-4 dark:bg-white/5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-glow-secondary sm:text-xs sm:tracking-[0.35em]">
                  {channel.label}
                </p>
                <a
                  href={channel.href}
                  className="mt-1 block text-lg font-semibold text-[var(--foreground)] hover:text-glow-accent dark:text-white"
                >
                  {channel.value}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-[var(--foreground)]/60 dark:text-white/60">
            Tip: For quicker follow-up, mention the show title and preferred callback time in your message.
          </p>
        </GlowCard>
      </AnimatedSection>

      <AnimatedSection className="space-y-8">
        <h2 className="text-3xl font-semibold">Pre-built Q&A Guides</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {faqSections.map((section) => (
            <GlowCard key={section.title} title={section.title} className="shadow-glow-soft">
              <div className="space-y-4 text-sm text-[var(--foreground)]/80 dark:text-white/80">
                {section.qa.map((item) => (
                  <div key={item.question}>
                    <p className="font-semibold">{item.question}</p>
                    <p className="mt-1 text-[var(--foreground)]/70 dark:text-white/70">{item.answer}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

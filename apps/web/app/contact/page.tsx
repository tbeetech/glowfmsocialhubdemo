import { AnimatedSection } from "@/components/AnimatedSection";
import { GlowButton } from "@/components/ui/GlowButton";

const WHATSAPP_BROADCAST_LINK = "https://chat.whatsapp.com/BZvP92OCqir0cahZUlSYgI";

const contactChannels = [
  { label: "Media House | Traffic", value: "0805 482 0000", href: "tel:+2348054820000" },
  { label: "Studio Hotline", value: "0805 551 1110", href: "tel:+2348055511110" },
  { label: "Studio Hotline", value: "0706 677 1822", href: "tel:+2347066771822" },
  { label: "WhatsApp Broadcast", value: "Join Ember WhatsApp broadcast", href: WHATSAPP_BROADCAST_LINK },
  { label: "Careers", value: "Careers@glowfmradio.com", href: "mailto:Careers@glowfmradio.com" },
  { label: "Marketing", value: "marketing@glowfmradio.com", href: "mailto:marketing@glowfmradio.com" }
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
    <div className="min-h-screen">
      <div className="space-y-16">
        <AnimatedSection className="rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 p-6 text-white shadow-xl sm:p-8 mx-4">
          <div className="space-y-5 sm:space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/90 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
              Talk With Glow FM
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Contact and Submission Desk</h1>
            <p className="max-w-3xl text-sm text-white/90 sm:text-base md:text-lg">
              Reach the right Glow FM channel for shout-outs, story tips, advertising briefs, and Ember Challenge entries. The form below includes guided prompts and spelling checks to keep your submission crisp.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid gap-6 lg:grid-cols-[1.3fr,1fr] mx-4">
          <div className="rounded-3xl bg-gray-50 p-6 shadow-lg sm:p-8">
            <div className="mb-6 space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
              <p className="text-gray-600">All fields support spell check</p>
            </div>
            <form
              className="space-y-5"
              action="mailto:marketing@glowfmradio.com?subject=Glow%20FM%20Contact%20Submission"
              method="post"
              encType="text/plain"
              target="_blank"
            >
              {interest && <input type="hidden" name="campaignInterest" value={interest} />}
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-gray-700">
                  <span>Full name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    spellCheck={true}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Enter your full name"
                  />
                </label>
                <label className="space-y-2 text-sm text-gray-700">
                  <span>Email address</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="example@glow991fm.com"
                  />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-gray-700">
                  <span>Phone or WhatsApp number</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Include country code"
                  />
                </label>
                <label className="space-y-2 text-sm text-gray-700">
                  <span>Reason for contact</span>
                  <select
                    name="reason"
                    defaultValue={defaultReason}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  >
                    {contactReasons.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="space-y-2 text-sm text-gray-700">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  defaultValue={interestMessage}
                  spellCheck={true}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="Describe your request, include links, or paste your script."
                />
              </label>
              <label className="space-y-2 text-sm text-gray-700">
                <span>Share supporting links (optional)</span>
                <input
                  type="url"
                  name="links"
                  spellCheck={true}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  placeholder="https://"
                />
              </label>
              <GlowButton type="submit" size="lg" className="uppercase tracking-[0.22em] sm:tracking-[0.35em]">
                Submit message
              </GlowButton>
            </form>
          </div>

          <div className="rounded-3xl bg-gray-50 p-6 shadow-lg sm:p-8">
            <div className="mb-6 space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Reach Us Quickly</h2>
              <p className="text-gray-600">Direct channels</p>
            </div>
            <ul className="space-y-4 text-sm text-gray-700">
              {contactChannels.map((channel) => (
                <li key={`${channel.label}-${channel.value}`} className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-orange-600 sm:text-xs sm:tracking-[0.35em]">
                    {channel.label}
                  </p>
                  <a
                    href={channel.href}
                    className="mt-1 block text-lg font-semibold text-gray-900 hover:text-orange-600"
                  >
                    {channel.value}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-gray-500">
              Tip: For quicker follow-up, mention the show title and preferred callback time in your message.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-8 mx-4 pb-16">
          <h2 className="text-3xl font-semibold text-gray-900">Pre-built Q&A Guides</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {faqSections.map((section) => (
              <div key={section.title} className="rounded-3xl bg-gray-50 p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <div className="space-y-4 text-sm text-gray-700">
                  {section.qa.map((item) => (
                    <div key={item.question}>
                      <p className="font-semibold text-gray-900">{item.question}</p>
                      <p className="mt-1 text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Join the Social Media Team Section */}
        <AnimatedSection className="mx-4 pb-16">
          <div className="rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 p-6 text-white shadow-xl sm:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/90 sm:px-4 sm:text-xs sm:tracking-[0.3em] font-bold backdrop-blur-sm">
                  Join Our Team
                </span>
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mt-4 font-['El_Messiri']">Join the Social Media Team</h2>
                <p className="text-white/90 mt-4 text-lg font-semibold max-w-2xl mx-auto">
                  Are you passionate about digital storytelling, content creation, and building online communities? Join our dynamic social media team!
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md">
                    <h3 className="text-xl font-bold text-white mb-4">What We&apos;re Looking For:</h3>
                    <ul className="space-y-2 text-white/90">
                      <li>• Creative content creators with fresh ideas</li>
                      <li>• Social media enthusiasts with platform expertise</li>
                      <li>• Graphic designers and video editors</li>
                      <li>• Community managers and engagement specialists</li>
                      <li>• Analytics experts and growth hackers</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md">
                    <h3 className="text-xl font-bold text-white mb-4">What We Offer:</h3>
                    <ul className="space-y-2 text-white/90">
                      <li>• Real-world experience in radio and digital media</li>
                      <li>• Portfolio building opportunities</li>
                      <li>• Mentorship from industry professionals</li>
                      <li>• Flexible working arrangements</li>
                      <li>• Career development and networking</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white/15 rounded-2xl p-6 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-white mb-6">Apply Now</h3>
                  <form
                    className="space-y-4"
                    action="mailto:Careers@glowfmradio.com?subject=Social%20Media%20Team%20Application"
                    method="post"
                    encType="text/plain"
                    target="_blank"
                  >
                    <div>
                      <label className="block text-white/90 text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-white/50 focus:bg-white/30 focus:outline-none transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-white/50 focus:bg-white/30 focus:outline-none transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-white/50 focus:bg-white/30 focus:outline-none transition-all duration-300"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm font-semibold mb-2">
                        Tell us about yourself and why you want to join our team *
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-white/50 focus:bg-white/30 focus:outline-none transition-all duration-300 resize-none"
                        placeholder="Share your experience, skills, and what excites you about social media and content creation..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-white text-purple-700 font-bold py-3 px-6 rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="space-y-16 relative z-10">
        <AnimatedSection className="rounded-3xl bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 p-8 text-white shadow-2xl mx-4 relative overflow-hidden">
          {/* Hero background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="space-y-6 relative z-10">
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/90 font-['El_Messiri'] font-bold shadow-lg">
              Talk With Glow FM
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl font-['El_Messiri'] leading-tight">
              Contact and Submission Desk
            </h1>
            <p className="max-w-4xl text-lg text-white/90 font-['El_Messiri'] leading-relaxed">
              Reach the right Glow FM channel for shout-outs, story tips, advertising briefs, and Ember Challenge entries. 
              The form below includes guided prompts and spelling checks to keep your submission crisp.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid gap-8 lg:grid-cols-[1.3fr,1fr] mx-4">
          <div className="rounded-3xl bg-white/80 backdrop-blur-lg p-8 shadow-2xl border border-orange-100">
            <div className="mb-8 space-y-3">
              <h2 className="text-3xl font-bold text-gray-900 font-['El_Messiri']">Send Us a Message</h2>
              <p className="text-gray-600 font-['El_Messiri'] text-lg">All fields support spell check</p>
            </div>
            <form
              className="space-y-6"
              action="mailto:marketing@glowfmradio.com?subject=Glow%20FM%20Contact%20Submission"
              method="post"
              encType="text/plain"
              target="_blank"
            >
              {interest && <input type="hidden" name="campaignInterest" value={interest} />}
              <div className="grid gap-6 md:grid-cols-2">
                <label className="space-y-3 text-sm text-gray-700 font-['El_Messiri']">
                  <span className="font-semibold">Full name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    spellCheck={true}
                    className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-4 text-base text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 font-['El_Messiri'] hover:shadow-lg"
                    placeholder="Enter your full name"
                  />
                </label>
                <label className="space-y-3 text-sm text-gray-700 font-['El_Messiri']">
                  <span className="font-semibold">Email address</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-4 text-base text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 font-['El_Messiri'] hover:shadow-lg"
                    placeholder="example@glow991fm.com"
                  />
                </label>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="space-y-3 text-sm text-gray-700 font-['El_Messiri']">
                  <span className="font-semibold">Phone or WhatsApp number</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-4 text-base text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 font-['El_Messiri'] hover:shadow-lg"
                    placeholder="Include country code"
                  />
                </label>
                <label className="space-y-3 text-sm text-gray-700 font-['El_Messiri']">
                  <span className="font-semibold">Reason for contact</span>
                  <select
                    name="reason"
                    defaultValue={defaultReason}
                    className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-4 text-base text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 font-['El_Messiri'] hover:shadow-lg"
                  >
                    {contactReasons.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="space-y-3 text-sm text-gray-700 font-['El_Messiri']">
                <span className="font-semibold">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  defaultValue={interestMessage}
                  spellCheck={true}
                  className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-4 text-base text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 font-['El_Messiri'] hover:shadow-lg resize-none"
                  placeholder="Describe your request, include links, or paste your script."
                />
              </label>
              <label className="space-y-3 text-sm text-gray-700 font-['El_Messiri']">
                <span className="font-semibold">Share supporting links (optional)</span>
                <input
                  type="url"
                  name="links"
                  spellCheck={true}
                  className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-4 text-base text-gray-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 font-['El_Messiri'] hover:shadow-lg"
                  placeholder="https://"
                />
              </label>
              <GlowButton type="submit" size="lg" className="uppercase tracking-[0.22em] sm:tracking-[0.35em] font-['El_Messiri'] font-bold transform hover:scale-105 transition-all duration-300">
                Submit message
              </GlowButton>
            </form>
          </div>

          <div className="rounded-3xl bg-white/80 backdrop-blur-lg p-8 shadow-2xl border border-orange-100">
            <div className="mb-8 space-y-3">
              <h2 className="text-3xl font-bold text-gray-900 font-['El_Messiri']">Reach Us Quickly</h2>
              <p className="text-gray-600 font-['El_Messiri'] text-lg">Direct channels</p>
            </div>
            <ul className="space-y-4 text-sm text-gray-700">
              {contactChannels.map((channel) => (
                <li key={`${channel.label}-${channel.value}`} className="rounded-xl border border-orange-200 bg-gradient-to-r from-white to-orange-50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <p className="text-xs uppercase tracking-[0.24em] text-orange-600 font-['El_Messiri'] font-bold mb-2">
                    {channel.label}
                  </p>
                  <a
                    href={channel.href}
                    className="block text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300 font-['El_Messiri']"
                  >
                    {channel.value}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-gray-500 font-['El_Messiri'] bg-gray-50 p-4 rounded-xl">
              <strong>Tip:</strong> For quicker follow-up, mention the show title and preferred callback time in your message.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="space-y-10 mx-4 pb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-['El_Messiri'] text-center">Pre-built Q&A Guides</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {faqSections.map((section) => (
              <div key={section.title} className="rounded-3xl bg-white/80 backdrop-blur-lg p-8 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-['El_Messiri'] text-center">{section.title}</h3>
                <div className="space-y-6 text-sm text-gray-700">
                  {section.qa.map((item) => (
                    <div key={item.question} className="bg-orange-50 p-4 rounded-xl">
                      <p className="font-semibold text-gray-900 font-['El_Messiri'] mb-2">{item.question}</p>
                      <p className="text-gray-600 font-['El_Messiri'] leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Join the Social Media Team Section */}
        <AnimatedSection className="mx-4 pb-16">
          <div className="rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 p-8 text-white shadow-2xl relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-6 py-3 text-sm uppercase tracking-[0.3em] text-white/90 font-['El_Messiri'] font-bold shadow-lg">
                  Join Our Team
                </span>
                <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl mt-6 font-['El_Messiri'] leading-tight">
                  Join the Social Media Team
                </h2>
                <p className="text-white/90 mt-6 text-xl font-semibold max-w-3xl mx-auto font-['El_Messiri'] leading-relaxed">
                  Are you passionate about digital storytelling, content creation, and building online communities? 
                  Join our dynamic social media team!
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl">
                    <h3 className="text-2xl font-bold text-white mb-6 font-['El_Messiri']">What We&apos;re Looking For:</h3>
                    <ul className="space-y-3 text-white/90 font-['El_Messiri'] text-lg">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Creative content creators with fresh ideas
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Social media enthusiasts with platform expertise
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Graphic designers and video editors
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Community managers and engagement specialists
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Analytics experts and growth hackers
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-md shadow-xl">
                    <h3 className="text-2xl font-bold text-white mb-6 font-['El_Messiri']">What We Offer:</h3>
                    <ul className="space-y-3 text-white/90 font-['El_Messiri'] text-lg">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Real-world experience in radio and digital media
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Portfolio building opportunities
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Mentorship from industry professionals
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Flexible working arrangements
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        Career development and networking
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white/15 rounded-2xl p-8 backdrop-blur-md shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-8 font-['El_Messiri']">Apply Now</h3>
                  <form
                    className="space-y-6"
                    action="mailto:Careers@glowfmradio.com?subject=Social%20Media%20Team%20Application"
                    method="post"
                    encType="text/plain"
                    target="_blank"
                  >
                    <div>
                      <label className="block text-white/90 text-sm font-semibold mb-3 font-['El_Messiri']">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-4 rounded-xl border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-white/50 focus:bg-white/30 focus:outline-none transition-all duration-300 font-['El_Messiri'] hover:shadow-lg"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm font-semibold mb-3 font-['El_Messiri']">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-4 rounded-xl border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-white/50 focus:bg-white/30 focus:outline-none transition-all duration-300 font-['El_Messiri'] hover:shadow-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm font-semibold mb-3 font-['El_Messiri']">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full px-4 py-4 rounded-xl border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-white/50 focus:bg-white/30 focus:outline-none transition-all duration-300 font-['El_Messiri'] hover:shadow-lg"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/90 text-sm font-semibold mb-3 font-['El_Messiri']">
                        Tell us about yourself and why you want to join our team *
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-4 rounded-xl border border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-white/50 focus:bg-white/30 focus:outline-none transition-all duration-300 resize-none font-['El_Messiri'] hover:shadow-lg"
                        placeholder="Share your experience, skills, and what excites you about social media and content creation..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-white text-purple-700 font-bold py-4 px-6 rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-['El_Messiri'] text-lg"
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

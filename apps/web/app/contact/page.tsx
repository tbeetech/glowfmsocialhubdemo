import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";

const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Glow%2099.1%20FM%2C%201%20Efon%20Alaye%20St%2C%20Ijapo%20Estate%2C%20Akure%2C%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed";

const contactChannels = [
  { label: "Finance", value: "finance@glowfmradio.com", href: "mailto:finance@glowfmradio.com" },
  { label: "Marketing/Adverts", value: "+234 703 212 0921", href: "tel:+2347032120921" },
  { label: "Marketing", value: "+234 703 022 3281", href: "tel:+2347030223281" }
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
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid gap-8 lg:grid-cols-[1.3fr,1fr] mx-4">
          <div className="rounded-3xl bg-white/80 backdrop-blur-lg p-8 shadow-2xl border border-orange-100">
            <div className="mb-8 space-y-3">
              <h2 className="text-3xl font-bold text-gray-900 font-['El_Messiri']">Send Us a Message</h2>
            </div>
            <ContactForm 
              interest={interest}
              defaultReason={defaultReason}
              interestMessage={interestMessage}
              contactReasons={contactReasons}
            />
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

        <AnimatedSection className="mx-4">
          <div className="rounded-3xl bg-white/85 backdrop-blur-lg p-8 shadow-2xl border border-orange-100">
            <div className="grid gap-8 lg:grid-cols-[1fr,1.4fr] items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 font-['El_Messiri']">Find Us</h2>
                <p className="text-gray-600 font-['El_Messiri'] text-lg">
                  No 1 Efon Alaye Street, Ijapo, Akure, Ondo State, Nigeria.
                </p>
              </div>
              <div className="w-full rounded-2xl overflow-hidden border border-orange-200 shadow-lg">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    title="Glow FM Location"
                    src={MAP_EMBED_SRC}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              </div>
            </div>
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

      </div>
    </div>
  );
}

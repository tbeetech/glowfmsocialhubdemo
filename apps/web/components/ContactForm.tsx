"use client";

import { FormEvent } from "react";
import { GlowButton } from "@/components/ui/GlowButton";

interface ContactFormProps {
  interest?: string;
  defaultReason?: string;
  interestMessage?: string;
  contactReasons: readonly { label: string; value: string }[];
}

export function ContactForm({ interest, defaultReason, interestMessage, contactReasons }: ContactFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const reason = formData.get("reason") as string;
    const message = formData.get("message") as string;
    const links = formData.get("links") as string;
    const campaignInterest = formData.get("campaignInterest") as string;

    const subject = `Glow FM Contact: ${reason} - ${name}`;
    
    const body = `
Dear Glow FM Team,

You have received a new inquiry via the website contact form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 SENDER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Name:    ${name}
• Email:   ${email}
• Phone:   ${phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 INQUIRY DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Subject: ${reason}
${campaignInterest ? `• Interest: ${campaignInterest}\n` : ""}

MESSAGE:
${message}

${links ? `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n🔗 SUPPORTING LINKS\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n${links}\n` : ""}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent via Glow FM Official Website
    `.trim();

    window.location.href = `mailto:marketing@glowfmradio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
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
  );
}

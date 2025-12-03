"use client";

import { FormEvent } from "react";

export function CareerForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const subject = `Social Media Team Application - ${name}`;
    
    const body = `
Dear Glow FM Recruitment Team,

I am submitting my application for the Social Media Team.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 APPLICANT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Name:    ${name}
• Email:   ${email}
• Phone:   ${phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 APPLICATION STATEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sent via Glow FM Careers Page
    `.trim();

    window.location.href = `mailto:Careers@glowfmradio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
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
  );
}

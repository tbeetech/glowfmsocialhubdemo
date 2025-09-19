"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { GlowButton } from "./GlowButton";

export function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <GlowButton size="lg" className="shadow-glow">
          Join the Glow Club
        </GlowButton>
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="fixed inset-0 z-50 mx-auto flex max-w-lg items-center justify-center p-6"
              >
                <div className="relative w-full rounded-3xl border border-white/15 bg-glow-midnight/90 p-8 text-white shadow-glow">
                  <Dialog.Close className="absolute right-4 top-4 text-white/50 transition hover:text-white" aria-label="Close newsletter modal">
                    ×
                  </Dialog.Close>
                  <div className="space-y-3">
                    <Dialog.Title className="text-3xl font-semibold">Glow Community Newsletter</Dialog.Title>
                    <Dialog.Description className="text-sm text-white/60">
                      Exclusive updates, backstage stories, giveaways and more. Delivered weekly.
                    </Dialog.Description>
                  </div>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="newsletter-name" className="mb-1 block text-xs uppercase tracking-[0.2em] text-white/50">
                        Name
                      </label>
                      <input
                        id="newsletter-name"
                        name="name"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-glow-primary focus:outline-none focus:ring-2 focus:ring-glow-primary/40"
                        placeholder="Glow Listener"
                      />
                    </div>
                    <div>
                      <label htmlFor="newsletter-email" className="mb-1 block text-xs uppercase tracking-[0.2em] text-white/50">
                        Email
                      </label>
                      <input
                        id="newsletter-email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-glow-primary focus:outline-none focus:ring-2 focus:ring-glow-primary/40"
                        placeholder="you@glowmail.com"
                      />
                    </div>
                    <GlowButton type="submit" className="w-full">
                      {isSubmitted ? "Welcome to the Glow!" : "Subscribe"}
                    </GlowButton>
                  </form>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}


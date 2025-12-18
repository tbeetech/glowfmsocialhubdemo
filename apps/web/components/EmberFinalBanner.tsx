 "use client";

import Link from "next/link";

export function EmberFinalBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[130] bg-gradient-to-r from-emerald-600 via-amber-500 to-rose-500 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-1 text-[11px] font-semibold overflow-hidden">
        <div className="relative flex-1 overflow-hidden">
          <div className="inline-flex whitespace-nowrap animate-banner-scroll">
            {[0, 1].map((dup) => (
              <span key={dup} className="flex items-center gap-3 pr-8">
                <span className="text-base">🎄</span>
                <span className="uppercase tracking-[0.25em] text-white/90">Ember Challenge Final Stage</span>
                <span className="text-base">•</span>
                <span className="uppercase tracking-[0.2em] text-white">Shutdown warning – enter now</span>
              </span>
            ))}
          </div>
        </div>
        <Link
          href="/ember-final"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.2em] transition hover:bg-white/25 text-white"
        >
          Enter now
        </Link>
      </div>
      <style>{`
        @keyframes banner-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-banner-scroll {
          animation: banner-scroll 16s linear infinite;
        }
      `}</style>
    </div>
  );
}

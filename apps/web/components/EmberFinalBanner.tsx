import Link from "next/link";

export function EmberFinalBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[130] bg-gradient-to-r from-emerald-600 via-amber-500 to-rose-500 text-white shadow-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-sm font-semibold">
        <div className="flex items-center gap-2">
          <span className="text-lg animate-pulse">🎄</span>
          <span className="uppercase tracking-[0.25em] text-white/90">Ember Challenge Final Stage</span>
          <span className="text-lg animate-bounce">🎄</span>
        </div>
        <Link
          href="/ember-final"
          className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] transition hover:bg-white/25 text-white"
        >
          Shutdown warning · Enter now
        </Link>
      </div>
    </div>
  );
}

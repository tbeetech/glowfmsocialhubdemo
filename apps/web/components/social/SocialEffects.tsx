"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type ReactElement,
  type ReactNode
} from "react";
import { AudioVisualizer } from "@/lib/audio-visualizer";
import { GlowButton, type GlowButtonProps } from "../ui/GlowButton";
import { cn } from "@/lib/cn";

export function usePrefersReducedMotionValue() {
  const shouldReduceMotion = useReducedMotion();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    handleChange();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return shouldReduceMotion || prefersReducedMotion;
}

export function SocialSoundToggle({
  enabled,
  onToggle
}: {
  enabled: boolean;
  onToggle: (next: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onToggle(!enabled)}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-all duration-300",
        enabled
          ? "bg-[#FF6600]/30 shadow-[0_0_30px_rgba(255,102,0,0.35)]"
          : "bg-white/5 hover:bg-white/10"
      )}
      aria-pressed={enabled}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full shadow-lg",
          enabled ? "bg-[#00FFD5] animate-pulse" : "bg-white/40"
        )}
      />
      {enabled ? "Live audio reactive on" : "Enable live audio reactive"}
    </button>
  );
}

function useInteractionSound(enabled: boolean) {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  return useCallback(() => {
    if (!enabled) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }
      const ctx = audioContextRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = 420;
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.28);
    } catch (error) {
      console.warn("Interaction sound unavailable:", error);
    }
  }, [enabled]);
}

export function AudioReactiveHeaderWaveform({
  audioSrc,
  enabled,
  reducedMotion,
  className
}: {
  audioSrc: string;
  enabled: boolean;
  reducedMotion?: boolean;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const visualizerRef = useRef<AudioVisualizer | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const phaseRef = useRef(0);

  useEffect(() => {
    if (!enabled || reducedMotion) {
      audioRef.current?.pause();
      return;
    }

    const audioElement = audioRef.current;
    if (!audioElement) return;

    let mounted = true;
    const init = async () => {
      try {
        if (!visualizerRef.current) {
          visualizerRef.current = new AudioVisualizer(audioElement);
          await visualizerRef.current.init(audioElement);
        }
        await audioElement.play();
      } catch (error) {
        console.warn("Waveform audio init failed:", error);
      }
    };
    init();

    return () => {
      mounted = false;
      if (!mounted) {
        audioElement.pause();
      }
    };
  }, [enabled, reducedMotion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      const ratio = window.devicePixelRatio ?? 1;
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      ctx.scale(ratio, ratio);
    };
    setSize();
    window.addEventListener("resize", setSize);

    const draw = () => {
      if (!canvas) return;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);
      const bars = 128;
      const data = enabled && !reducedMotion ? visualizerRef.current?.getFrequencyData() : null;
      phaseRef.current += 0.02;

      ctx.beginPath();
      ctx.lineWidth = 3;
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "#FF6600");
      gradient.addColorStop(0.5, "#00FFD5");
      gradient.addColorStop(1, "#001F3F");
      ctx.strokeStyle = gradient;

      for (let i = 0; i < bars; i++) {
        const ratio = i / (bars - 1);
        const freqValue = data ? data[i % data.length] / 255 : (Math.sin(phaseRef.current + ratio * Math.PI * 2) + 1) / 2;
        const x = ratio * width;
        const amplitude = reducedMotion ? 0.15 : freqValue * 0.65 + 0.2;
        const y = height / 2 - amplitude * (height / 2 - 4) * Math.sin(ratio * Math.PI);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", setSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [enabled, reducedMotion]);

  return (
    <div
      className={cn(
        "relative h-32 w-full overflow-hidden rounded-[28px] border border-white/20 bg-gradient-to-br from-[#001F3F]/60 via-[#0A0A0A]/70 to-[#001F3F]/60 shadow-[0_0_35px_rgba(0,31,63,0.5)]",
        "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_30%,rgba(255,102,0,0.25),transparent_60%)] before:opacity-80 before:mix-blend-screen",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_80%_70%,rgba(0,255,213,0.18),transparent_60%)] after:opacity-60 after:mix-blend-screen",
        className
      )}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="none"
        crossOrigin="anonymous"
        className="hidden"
        muted={!enabled}
      />
      {!enabled && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.4em] text-white/40">
          Enable waveform to sync with broadcast
        </div>
      )}
    </div>
  );
}

export function HeroMicroParallax({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let rafId: number | null = null;

    const updateParallax = (x: number, y: number) => {
      node.style.setProperty("--parallax-x", x.toString());
      node.style.setProperty("--parallax-y", y.toString());
    };

    const handleMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        updateParallax(relX * 8, relY * -6);
      });
    };

    const reset = () => updateParallax(0, 0);

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", reset);

    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", reset);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "parallax-shell relative rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(0,255,213,0.06),_transparent_60%),_linear-gradient(135deg,_rgba(0,31,63,0.9),_rgba(0,0,0,0.92))] p-1 shadow-[0_40px_80px_rgba(0,0,0,0.45)]",
        className
      )}
    >
      <div className="neon-border relative rounded-[32px] bg-[#05070f]/80 p-8 sm:p-10 lg:p-12">
        {children}
      </div>
    </div>
  );
}

export function LiveMentionsMarquee({ mentions }: { mentions: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 py-2 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      <div className="flex animate-marquee items-center gap-8 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
        {[...mentions, ...mentions].map((mention, index) => (
          <span key={`${mention}-${index}`} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#00FFD5]" />
            {mention}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AnimatedWordReveal({
  text,
  className
}: {
  text: string;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <div className={cn("flex flex-wrap gap-2 text-white", className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.06, duration: 0.6, ease: [0.25, 0.9, 0.35, 1] }}
          className="relative inline-flex text-shadow-glow"
        >
          {word}
          <span className="ml-2 inline-block h-px w-6 bg-gradient-to-r from-transparent via-[#FF6600] to-transparent" />
        </motion.span>
      ))}
    </div>
  );
}

export function NeonBorderCard({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "neon-card relative rounded-[28px] border border-white/10 bg-[#05070f]/70 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.45)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function FollowButtonPulse({ className, children, ...props }: GlowButtonProps) {
  if (props.asChild && isValidElement(children)) {
    const childElement = children as ReactElement<Record<string, unknown>>;
    const childContent = (childElement.props as { children?: ReactNode }).children;

    return (
      <GlowButton
        {...props}
        className={cn("relative overflow-hidden follow-button group", className)}
      >
        {cloneElement(childElement, {
          children: (
            <>
              <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#FF6600]/25 blur-2xl transition-opacity group-hover:opacity-80" />
              {childContent}
            </>
          )
        } as Record<string, unknown>)}
      </GlowButton>
    );
  }

  return (
    <GlowButton
      {...props}
      className={cn("relative overflow-hidden follow-button group", className)}
    >
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#FF6600]/25 blur-2xl transition-opacity group-hover:opacity-80" />
      {children}
    </GlowButton>
  );
}

interface CTAButtonParticleBurstProps extends GlowButtonProps {
  soundEnabled?: boolean;
}

type Particle = {
  id: number;
  x: number;
  y: number;
  color: string;
};

export function CTAButtonParticleBurst({ soundEnabled = true, className, children, ...props }: CTAButtonParticleBurstProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const playSound = useInteractionSound(soundEnabled);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const baseX = event.clientX - rect.left;
    const baseY = event.clientY - rect.top;
    const burst = Array.from({ length: 20 }, (_, index) => ({
      id: Date.now() + index,
      x: baseX + (Math.random() - 0.5) * 60,
      y: baseY + (Math.random() - 0.5) * 60,
      color: Math.random() > 0.5 ? "#FF6600" : "#00FFD5"
    }));
    setParticles((prev) => [...prev, ...burst]);
    playSound();
    props.onClick?.(event);
    setTimeout(() => {
      setParticles((prev) => prev.filter((particle) => !burst.includes(particle)));
    }, 600);
  };

  const particleElements = particles.map((particle) => (
    <span
      key={particle.id}
      className="pointer-events-none absolute h-1.5 w-1.5 rounded-full opacity-0 particle-burst"
      style={{
        left: particle.x,
        top: particle.y,
        background: particle.color
      }}
    />
  ));

  if (props.asChild && isValidElement(children)) {
    const childElement = children as ReactElement<Record<string, unknown>>;
    const childContent = (childElement.props as { children?: ReactNode }).children;

    return (
      <GlowButton
        {...props}
        onClick={handleClick}
        className={cn("relative overflow-visible", className)}
      >
        {cloneElement(childElement, {
          children: (
            <span className="relative inline-flex w-full justify-center">
              {childContent}
              {particleElements}
            </span>
          )
        } as Record<string, unknown>)}
      </GlowButton>
    );
  }

  return (
    <GlowButton
      {...props}
      onClick={handleClick}
      className={cn("relative overflow-visible", className)}
    >
      {particleElements}
      {children}
    </GlowButton>
  );
}

type EngravedTone = "orange" | "mint" | "navy" | "violet";

const ENGRAVED_TONES: Record<
  EngravedTone,
  { frame: string; core: string; shadow: string; highlight: string }
> = {
  orange: {
    frame: "linear-gradient(135deg, rgba(255,102,0,0.6), rgba(58,18,0,0.9))",
    core: "linear-gradient(145deg, rgba(13,8,5,0.95), rgba(34,8,0,0.88))",
    shadow: "inset 0 0 25px rgba(255,102,0,0.3), 0 30px 80px rgba(0,0,0,0.65)",
    highlight: "linear-gradient(120deg, rgba(255,255,255,0.4), transparent)"
  },
  mint: {
    frame: "linear-gradient(135deg, rgba(0,255,213,0.55), rgba(0,45,38,0.9))",
    core: "linear-gradient(145deg, rgba(4,17,21,0.96), rgba(1,28,36,0.88))",
    shadow: "inset 0 0 25px rgba(0,255,213,0.25), 0 30px 80px rgba(0,0,0,0.65)",
    highlight: "linear-gradient(120deg, rgba(255,255,255,0.35), transparent)"
  },
  navy: {
    frame: "linear-gradient(135deg, rgba(0,31,63,0.7), rgba(5,8,20,0.95))",
    core: "linear-gradient(145deg, rgba(3,9,20,0.95), rgba(1,5,12,0.85))",
    shadow: "inset 0 0 30px rgba(0,113,255,0.25), 0 40px 90px rgba(0,0,0,0.7)",
    highlight: "linear-gradient(120deg, rgba(0,255,213,0.2), transparent)"
  },
  violet: {
    frame: "linear-gradient(135deg, rgba(141,83,255,0.55), rgba(21,2,40,0.9))",
    core: "linear-gradient(145deg, rgba(18,4,33,0.95), rgba(9,0,23,0.88))",
    shadow: "inset 0 0 28px rgba(141,83,255,0.25), 0 35px 90px rgba(0,0,0,0.7)",
    highlight: "linear-gradient(120deg, rgba(255,255,255,0.32), transparent)"
  }
};

export function EngravedPanel({
  children,
  tone = "orange",
  className
}: {
  children: ReactNode;
  tone?: EngravedTone;
  className?: string;
}) {
  const palette = ENGRAVED_TONES[tone] ?? ENGRAVED_TONES.orange;
  return (
    <div className={cn("engraved-panel", className)} style={{ backgroundImage: palette.frame }}>
      <div
        className="engraved-panel__inner"
        style={{
          backgroundImage: palette.core,
          boxShadow: palette.shadow
        }}
      >
        <span className="engraved-panel__shine" style={{ backgroundImage: palette.highlight }} />
        {children}
      </div>
    </div>
  );
}

export function HoloOrb({ tone = "mint" }: { tone?: EngravedTone }) {
  return <span className={cn("holo-orb", `holo-orb--${tone}`)} aria-hidden="true" />;
}

export function DepthStatPillar({
  value,
  label,
  detail,
  tone = "mint"
}: {
  value: string;
  label: string;
  detail: string;
  tone?: EngravedTone;
}) {
  return (
    <div className="depth-stat">
      <p className="depth-stat__value">{value}</p>
      <p className="depth-stat__label">{label}</p>
      <p className={cn("depth-stat__detail", `depth-stat__detail--${tone}`)}>{detail}</p>
    </div>
  );
}

export function MetaSignalLink({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="meta-signal-link"
    >
      <span className="meta-signal-link__pulse" />
      {children}
    </Link>
  );
}

export function VideoEqualizerOverlay({ intensity = 0.8 }: { intensity?: number }) {
  const bars = useMemo(() => Array.from({ length: 16 }), []);
  return (
    <div className="pointer-events-none absolute inset-0 flex items-end justify-center gap-1 px-4 pb-2">
      {bars.map((_, index) => (
        <span
          key={index}
          className="equalizer-bar"
          style={{
            animationDelay: `${index * 40}ms`,
            opacity: intensity
          }}
        />
      ))}
    </div>
  );
}

export function DigitalCountdownFlip({ targetDate }: { targetDate: string }) {
  const getTimeLeft = useCallback(() => {
    const target = new Date(targetDate).getTime();
    const now = Date.now();
    const diff = Math.max(target - now, 0);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, [getTimeLeft]);

  const segments = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-wrap gap-3 text-white">
      {segments.map((segment) => (
        <div key={segment.label} className="flip-tile min-w-[72px] flex-1">
          <div className="flip-digit">{String(segment.value).padStart(2, "0")}</div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{segment.label}</span>
        </div>
      ))}
    </div>
  );
}

export function AudienceStatCountUp({
  value,
  label
}: {
  value: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    const duration = 1600;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayValue(Math.floor(value * progress));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasAnimated, value]);

  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <p className="text-3xl font-black text-white">{displayValue.toLocaleString()}</p>
      <p className="text-xs uppercase tracking-[0.3em] text-white/60">{label}</p>
    </div>
  );
}

export function LiveReactionBadge() {
  return (
    <div className="live-badge inline-flex items-center gap-2 rounded-full border border-red-500/60 bg-red-500/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.4em] text-red-200">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
      </span>
      Live
    </div>
  );
}

export function StickySocialNav({
  items
}: {
  items: { id: string; label: string }[];
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    items.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-4 z-30 rounded-full border border-white/10 bg-[#05070f]/85 p-1 text-xs backdrop-blur-xl">
      <div className="flex flex-wrap items-center justify-between gap-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "flex-1 rounded-full px-3 py-1.5 text-center font-semibold uppercase tracking-[0.25em] text-white/60 transition-all duration-300",
              activeId === item.id && "bg-white/15 text-white shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function GradientMaskDivider() {
  return (
    <div className="gradient-mask my-12 h-1 w-full" aria-hidden="true">
      <div className="h-full w-full animate-gradient-wipe bg-gradient-to-r from-transparent via-[#FF6600] to-transparent" />
    </div>
  );
}

export function FilmGrainOverlay() {
  return <div className="film-grain pointer-events-none" aria-hidden="true" />;
}

export function AmbientParticleField() {
  return <div className="ambient-particles pointer-events-none" aria-hidden="true" />;
}

export function FacebookEmbedCard({
  title,
  summary,
  videoUrl,
  blocked = true,
  engraving
}: {
  title: string;
  summary: string;
  videoUrl: string;
  blocked?: boolean;
  engraving?: string;
}) {
  return (
    <EngravedPanel tone="navy" className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="meta-chip">4D LIVE</span>
      </div>
      <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/5 bg-[#05070f]">
        {blocked ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-white/80 px-6">
            <p className="text-base font-semibold">Embedding unavailable</p>
            <p className="text-xs text-white/60">
              This stream is protected by Facebook&apos;s ownership filters. Tap to open the native player with all the
              broadcast layers intact.
            </p>
          </div>
        ) : (
          <iframe
            title={title}
            src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false&width=560`}
            className="h-full w-full"
            allowFullScreen
            loading="lazy"
          />
        )}
        <VideoEqualizerOverlay intensity={0.35} />
      </div>
      {engraving && <p className="text-xs uppercase tracking-[0.35em] text-white/50">{engraving}</p>}
      <p className="text-sm text-white/70">{summary}</p>
      <CTAButtonParticleBurst
        asChild
        variant="accent"
        className="w-full justify-center uppercase tracking-[0.25em]"
      >
        <Link href={videoUrl} target="_blank" rel="noreferrer">
          Watch on Facebook
        </Link>
      </CTAButtonParticleBurst>
    </EngravedPanel>
  );
}

export function HoverTiltIcon({
  label,
  href
}: {
  label: string;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      node.style.transform = `perspective(600px) rotateY(${relX * 15}deg) translateZ(5px)`;
    };
    const reset = () => (node.style.transform = "perspective(600px) rotateY(0deg)");

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", reset);
    return () => {
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <Link
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-4 py-3 text-sm font-bold uppercase tracking-[0.3em] text-white/80 transition-transform duration-300 hover:-translate-y-1 hover:text-white"
    >
      {label}
    </Link>
  );
}

export function HighFidelityLoader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="loader-dots mx-auto flex w-full max-w-sm items-center justify-center gap-3 py-6 text-white/70"
        >
          <span className="loader-dot" />
          <span className="loader-dot" />
          <span className="loader-dot" />
          <span className="sr-only">Loading feed</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

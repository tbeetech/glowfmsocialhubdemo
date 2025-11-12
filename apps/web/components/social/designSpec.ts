"use client";

export const SOCIAL_MOTION_SPEC = {
  project: "GlowFMRadio Social Page - High Fidelity Motion Specs",
  palette: {
    glow_orange: "#FF6600",
    electric_navy: "#001F3F",
    neon_mint: "#00FFD5",
    white: "#FFFFFF",
    dark_graphite: "#0A0A0A"
  },
  globalSettings: {
    fpsTarget: 60,
    reducedMotionMediaQuery: "prefers-reduced-motion",
    audioBpm: 120,
    maxConcurrentAnimationsPerFrame: 8
  },
  animations: [
    {
      id: 1,
      name: "AudioReactiveHeaderWaveform",
      priority: "high",
      description: "Real-time waveform in header that pulses to live stream or preview audio.",
      trigger: "onLoad + liveAudioData",
      duration: "continuous",
      easing: "linear",
      mobileFallback: "static gradient or precomputed animation; disable realtime audio processing on low-end devices"
    },
    {
      id: 2,
      name: "NeonGradientBorderGlow",
      priority: "high",
      description: "Animated neon border cycling through brand gradient for cards/modules.",
      trigger: "idle + hover",
      duration: "loop 6s",
      easing: "linear",
      mobileFallback: "single static gradient color"
    },
    {
      id: 3,
      name: "SocialIcon3DTilt",
      priority: "medium",
      description: "3D tilt (Y-axis ±10°) + subtle shadow on hover for social icons.",
      trigger: "hover / touch-drag",
      duration: "0.28s",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      mobileFallback: "scale-only feedback"
    },
    {
      id: 4,
      name: "HeroMicroParallax",
      priority: "high",
      description: "Micro-parallax split hero (fg/mg/bg) shifting with mouse/scroll for depth.",
      trigger: "mousemove + scroll",
      duration: "interactive",
      easing: "spring for return",
      mobileFallback: "static layered image without motion"
    },
    {
      id: 5,
      name: "CTAButtonParticleBurst",
      priority: "medium",
      description: "Tiny particle burst (~30 particles) radiating from CTA on click.",
      trigger: "click",
      duration: "600ms",
      easing: "expo-out",
      mobileFallback: "ripple effect"
    },
    {
      id: 6,
      name: "AnimatedTextRevealWordByWord",
      priority: "high",
      description: "Post titles/section headings slide in word-by-word with shimmer.",
      trigger: "onEnterViewport",
      duration: "700ms total",
      easing: "cubic-bezier(0.25, 0.9, 0.35, 1)",
      mobileFallback: "single fade-in"
    },
    {
      id: 7,
      name: "LiveMentionsMarquee",
      priority: "medium",
      description: "Infinite left-scrolling ticker listing latest @mentions/comments with glow fade.",
      trigger: "onLoad (poll updates)",
      duration: "loop continuous",
      easing: "linear",
      mobileFallback: "static list"
    },
    {
      id: 8,
      name: "CardFlipPost",
      priority: "medium",
      description: "Social feed cards flip to reveal stats on hover/tap.",
      trigger: "hover / tap",
      duration: "600ms",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      mobileFallback: "tap to expand accordion"
    },
    {
      id: 9,
      name: "VideoThumbnailEqualizerOverlay",
      priority: "high",
      description: "Subtle equalizer bars overlay within video thumbnails.",
      trigger: "onHover + loop",
      duration: "loop 1s",
      easing: "linear",
      mobileFallback: "static equalizer icon"
    },
    {
      id: 10,
      name: "DigitalCountdownFlip",
      priority: "medium",
      description: "Smooth mechanical flip digits for event countdowns.",
      trigger: "onLoad + ticking",
      duration: "per flip 250ms",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      mobileFallback: "fade-number update"
    },
    {
      id: 11,
      name: "LogoLightTrailOnFooter",
      priority: "low",
      description: "Horizontal light-trail sweep across logo when scrolled to footer.",
      trigger: "onEnterFooter",
      duration: "900ms",
      easing: "expo-out",
      mobileFallback: "single fade-in logo"
    },
    {
      id: 12,
      name: "FollowButtonPulse",
      priority: "high",
      description: "Follow CTAs gently pulse and glow every 4 seconds.",
      trigger: "idle loop",
      duration: "pulse 800ms, interval 4s",
      easing: "ease-out",
      mobileFallback: "subtle color change"
    },
    {
      id: 13,
      name: "GradientMaskSectionTransition",
      priority: "medium",
      description: "Diagonal gradient wipe between sections.",
      trigger: "section change/scroll",
      duration: "650ms",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      mobileFallback: "fade transition"
    },
    {
      id: 14,
      name: "InteractionSoundFeedback",
      priority: "medium",
      description: "Soft radio blep/tuner click on key interactions with mute toggle.",
      trigger: "click/submit",
      duration: "<=300ms",
      easing: "N/A",
      mobileFallback: "disabled by default on mobile"
    },
    {
      id: 15,
      name: "VerticalScrollSnapWithOvershoot",
      priority: "medium",
      description: "Scroll snap for feed cards with slight overshoot/bounce.",
      trigger: "scroll end",
      duration: "400ms",
      easing: "back-out",
      mobileFallback: "native scroll-snap only"
    },
    {
      id: 16,
      name: "VideoLiveHoverDepth",
      priority: "medium",
      description: "Live/video modules get stronger drop-shadow + scale on hover.",
      trigger: "hover",
      duration: "240ms",
      easing: "ease-out",
      mobileFallback: "scale on tap"
    },
    {
      id: 17,
      name: "AmbientParticleField",
      priority: "low",
      description: "Low-opacity floating geometric particles behind content.",
      trigger: "onLoad",
      duration: "loop continuous",
      easing: "linear",
      mobileFallback: "disabled"
    },
    {
      id: 18,
      name: "LiveReactionVisualCue",
      priority: "high",
      description: "Live chat indicator with pulsing circle + waveform icon.",
      trigger: "live session active",
      duration: "loop 1s",
      easing: "ease-in-out",
      mobileFallback: "static live badge"
    },
    {
      id: 19,
      name: "StickyNavFrostedBlur",
      priority: "medium",
      description: "Sticky social feed nav with frosted blur.",
      trigger: "scroll past hero",
      duration: "280ms",
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      mobileFallback: "compact nav without blur"
    },
    {
      id: 20,
      name: "AudienceStatsCountUp",
      priority: "high",
      description: "Animated count-up for followers/engagement numbers.",
      trigger: "onEnterViewport",
      duration: "1.6s",
      easing: "ease-out",
      mobileFallback: "static number"
    },
    {
      id: 21,
      name: "ThumbnailGlareSweep",
      priority: "medium",
      description: "Subtle glare sweep over image thumbnails on hover.",
      trigger: "hover",
      duration: "650ms",
      easing: "linear",
      mobileFallback: "disabled"
    },
    {
      id: 22,
      name: "StoriesProgressColorCycle",
      priority: "low",
      description: "Progress ring/bars cycling through gradient while active.",
      trigger: "story play",
      duration: "per story",
      easing: "linear",
      mobileFallback: "static ring"
    },
    {
      id: 23,
      name: "SVGIconMorphOnTabSwitch",
      priority: "low",
      description: "Morph social icons smoothly when switching tabs.",
      trigger: "tab switch",
      duration: "420ms",
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      mobileFallback: "crossfade"
    },
    {
      id: 24,
      name: "MobileSwipeDepth",
      priority: "high",
      description: "Horizontal swipe with card rotation and shadow on mobile.",
      trigger: "touch-drag",
      duration: "interactive",
      easing: "spring",
      mobileFallback: "native scroll"
    },
    {
      id: 25,
      name: "FilmGrainTextureOverlay",
      priority: "low",
      description: "Subtle noise overlay to reduce flatness.",
      trigger: "global background",
      duration: "static",
      easing: "N/A",
      mobileFallback: "disabled at low bandwidth"
    },
    {
      id: 26,
      name: "HoverTooltipDelayed",
      priority: "low",
      description: "Tooltips show after 0.3s hover with fade+slide.",
      trigger: "hover",
      duration: "fade 200ms + slide 160ms",
      easing: "ease-out",
      mobileFallback: "tap-to-open small dialog"
    },
    {
      id: 27,
      name: "DirectionalRevealOnScroll",
      priority: "high",
      description: "Cards enter viewport from left or right with tilt and fade.",
      trigger: "onEnterViewport",
      duration: "560ms",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      mobileFallback: "fade-in only"
    },
    {
      id: 28,
      name: "GlowingDividerGrow",
      priority: "low",
      description: "Horizontal dividers grow from centre to edges with glow.",
      trigger: "section enter / layout load",
      duration: "520ms",
      easing: "expo-out",
      mobileFallback: "static divider"
    },
    {
      id: 29,
      name: "HighFidelityLoaderDots",
      priority: "high",
      description: "Custom loader: three glowing dots pulse in sequence.",
      trigger: "feed load",
      duration: "loop 900ms until loaded",
      easing: "ease-in-out",
      mobileFallback: "simple spinner"
    }
  ]
} as const;

export type SocialAnimationSpec = typeof SOCIAL_MOTION_SPEC;

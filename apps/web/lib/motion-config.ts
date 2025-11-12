/**
 * GlowFM Motion Design System
 * Futuristic • Neon Broadcast • Afro-Modern • Kinetic Light • Interactive Frequency
 */

export const MOTION_CONFIG = {
  // Master timing
  masterBPM: 120,
  beatsPerSecond: 2,
  syncInterval: 2000, // 2s (every 4th beat)
  
  // Animation durations (ms)
  duration: {
    instant: 150,
    fast: 300,
    normal: 500,
    entrance: 1500,
    slow: 2000,
    cinematic: 3000,
  },
  
  // Delays
  delay: {
    none: 0,
    micro: 80,
    short: 200,
    normal: 300,
    stagger: 80, // per card
  },
  
  // Easing curves
  ease: {
    smooth: [0.25, 1, 0.5, 1],
    elastic: [0.68, -0.55, 0.265, 1.55],
    snappy: [0.4, 0, 0.2, 1],
    drift: [0.25, 0.46, 0.45, 0.94],
    bounce: [0.68, -0.6, 0.32, 1.6],
  },
  
  // 3D transforms
  transform3D: {
    cardHover: {
      rotateY: 10,
      translateZ: 20,
      scale: 1.05,
    },
    cardEntry: {
      rotateX: -15,
      translateY: 100,
      opacity: 0,
    },
    vinylRotation: {
      rotateZ: 360,
      duration: 500, // 60 RPM at BPM 120
    },
  },
  
  // Glow effects
  glow: {
    intensity: {
      ambient: 0.8,
      emission: 0.4,
      hover: 1.2,
    },
    blur: {
      soft: 20,
      medium: 40,
      hard: 60,
    },
    spread: {
      tight: '0 0 20px',
      normal: '0 0 40px',
      wide: '0 0 60px',
    },
  },
  
  // Particle systems
  particles: {
    ember: {
      count: 200,
      lifespan: 4000,
      motionBlur: true,
    },
    frequency: {
      count: 100,
      size: [1, 3],
      speed: 0.5,
    },
  },
  
  // Audio-reactive mapping
  audioMap: {
    bass: 'glowIntensity',
    mid: 'objectScale',
    treble: 'particleShimmer',
  },
  
  // Performance
  performance: {
    targetFPS: 60,
    maxConcurrentAnimations: 8,
    gpuAcceleration: true,
    lazyLoadShaders: true,
  },
} as const;

export const COLORS = {
  // Core palette
  glowOrange: '#FF6600',
  electricNavy: '#001F3F',
  neonMint: '#00FFD5',
  radiantWhite: '#FFFFFF',
  darkGraphite: '#0A0A0A',
  
  // Gradient definitions
  gradients: {
    hero: 'linear-gradient(135deg, #001F3F 0%, #FF6600 50%, #00FFD5 100%)',
    neonPulse: 'linear-gradient(90deg, #FF6600 0%, #00FFD5 100%)',
    broadcast: 'radial-gradient(circle, #FF6600 0%, #001F3F 100%)',
    ember: 'linear-gradient(180deg, #FF6600 0%, #FF3300 50%, #CC0000 100%)',
  },
  
  // Opacity levels
  opacity: {
    ghost: 0.1,
    subtle: 0.2,
    medium: 0.4,
    visible: 0.6,
    strong: 0.8,
    full: 1,
  },
} as const;

export const GEOMETRY = {
  borderRadius: {
    small: 12,
    medium: 20,
    large: 28,
    xl: 40,
    full: 9999,
  },
  
  shadows: {
    soft: '0 4px 20px rgba(0, 0, 0, 0.1)',
    medium: '0 8px 40px rgba(0, 0, 0, 0.15)',
    neon: '0 0 40px rgba(255, 102, 0, 0.6)',
    neonMint: '0 0 40px rgba(0, 255, 213, 0.6)',
    depth: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
} as const;

// Framer Motion variants
export const motionVariants = {
  // Hero entrance
  heroFade: {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  },
  
  // Card stagger
  cardContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  },
  
  cardItem: {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -15,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.68, -0.55, 0.265, 1.55],
      },
    },
  },
  
  // Glow pulse
  glowPulse: {
    initial: { 
      opacity: 0.6,
      scale: 1,
    },
    animate: { 
      opacity: [0.6, 1, 0.6],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
  
  // Ripple effect
  ripple: {
    initial: { scale: 0, opacity: 1 },
    animate: { 
      scale: 2, 
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  
  // Shimmer sweep
  shimmer: {
    initial: { x: '-100%' },
    animate: { 
      x: '100%',
      transition: {
        duration: 1.5,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  },
  
  // Flip reveal
  flipReveal: {
    hidden: { rotateY: 90, opacity: 0 },
    visible: { 
      rotateY: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  },
};

// Audio frequency bands
export const FREQUENCY_BANDS = {
  bass: { min: 20, max: 250 },
  mid: { min: 250, max: 2000 },
  treble: { min: 2000, max: 20000 },
} as const;

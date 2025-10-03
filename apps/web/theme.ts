export const glowTheme = {
  colors: {
    primary: "#FF6B00",
    secondary: "#001F54",
    accent: "#D72638",
    background: {
      light: "#F5F7FF",
      dark: "#05060A"
    },
    foreground: {
      light: "#0B0E18",
      dark: "#F8FBFF"
    },
    muted: "#98A9C6"
  },
  gradients: {
    hero: "linear-gradient(135deg, rgba(255,107,0,0.95) 0%, rgba(0,31,84,0.95) 55%, rgba(215,38,56,0.95) 100%)",
    cardHeader: "linear-gradient(135deg, rgba(255,107,0,0.85) 0%, rgba(215,38,56,0.85) 100%)"
  },
  shadows: {
    soft: "0 24px 48px -24px rgba(0,0,0,0.45)",
    glow: "0 0 0 1px rgba(255,107,0,0.15), 0 18px 48px -18px rgba(0,31,84,0.55)"
  }
} as const;

export type GlowTheme = typeof glowTheme;
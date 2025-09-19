export const glowPalette = {
  orange: "#FF6B00",
  navy: "#001F54",
  accent: "#D72638",
  midnight: "#0A1024",
  dusk: "#111936",
  twilight: "#1B2A4B",
  steel: "#5A6B89",
  silver: "#E6ECFF",
  ember: "#FFB347",
  sky: "#5DE4FF"
};

export const glowTheme = {
  colors: {
    glow: {
      primary: glowPalette.orange,
      navy: glowPalette.navy,
      accent: glowPalette.accent,
      midnight: glowPalette.midnight,
      surface: glowPalette.dusk,
      muted: glowPalette.twilight,
      subtle: "#18243E",
      border: "rgba(255,255,255,0.08)",
      light: glowPalette.silver
    }
  },
  gradients: {
    horizon: `linear-gradient(135deg, ${glowPalette.orange}, ${glowPalette.accent})`,
    twilight: `linear-gradient(135deg, ${glowPalette.navy}, ${glowPalette.twilight})`,
    aurora: `linear-gradient(135deg, rgba(93, 228, 255, 0.2), rgba(255, 107, 0, 0.35))`
  },
  shadow: {
    glow: "0 15px 45px rgba(255, 107, 0, 0.25)",
    soft: "0 15px 30px rgba(0, 31, 84, 0.25)"
  }
};

export type GlowPaletteKey = keyof typeof glowPalette;



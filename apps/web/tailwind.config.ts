import type { Config } from "tailwindcss";
import { glowTheme } from "./theme";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./theme.ts"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        border: "var(--border)",
        primary: {
          DEFAULT: "#FF6B00",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#D72638",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#64748B",
          foreground: "#94A3B8",
        },
        glow: {
          primary: glowTheme.colors.primary,
          secondary: glowTheme.colors.secondary,
          accent: glowTheme.colors.accent,
          muted: glowTheme.colors.muted,
          background: glowTheme.colors.background,
          foreground: glowTheme.colors.foreground
        }
      },
      backgroundImage: {
        "glow-hero": glowTheme.gradients.hero,
        "glow-card": glowTheme.gradients.cardHeader
      },
      boxShadow: {
        "glow-soft": glowTheme.shadows.soft,
        "glow-emphasis": glowTheme.shadows.glow
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
 import type { Config } from "tailwindcss";
import { glowTheme } from "./theme";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./theme.ts"],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1.25rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem"
      }
    },
    screens: {
      mini: "240px",
      compact: "320px",
      sp: "360px",
      mp: "390px",
      lp: "414px",
      phablet: "430px",
      tablet: "768px",
      "tablet-land": "1024px",
      laptop: "1280px",
      "mlaptop": "1366px",
      "llaptop": "1536px",
      desktop: "1920px",
      ultra: "2560px"
    },
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
        display: ['var(--font-el-messiri)', '"El Messiri"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['var(--font-el-messiri)', '"El Messiri"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['var(--font-el-messiri)', '"El Messiri"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;

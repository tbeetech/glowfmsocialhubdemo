import type { Config } from "tailwindcss";
import { glowPalette, glowTheme } from "./theme";

const config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./theme.ts"],
  theme: {
    extend: {
      colors: {
        glow: {
          primary: glowPalette.orange,
          navy: glowPalette.navy,
          accent: glowPalette.accent,
          midnight: glowPalette.midnight,
          surface: glowPalette.dusk,
          muted: glowPalette.twilight,
          border: "rgba(255,255,255,0.08)",
          light: glowPalette.silver,
          ember: glowPalette.ember,
          sky: glowPalette.sky
        }
      },
      backgroundImage: {
        "glow-horizon": glowTheme.gradients.horizon,
        "glow-twilight": glowTheme.gradients.twilight,
        "glow-aurora": glowTheme.gradients.aurora
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: glowTheme.shadow.glow,
        soft: glowTheme.shadow.soft
      },
      borderRadius: {
        glow: "1.25rem",
        card: "1rem"
      },
      keyframes: {
        shimmer: {
          to: { backgroundPosition: "-200% center" }
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" }
        }
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;



import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ThemeMode = "light" | "dark";

interface ThemeState {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
  hydrated: boolean;
  setHydrated: (value: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: "light",
      hydrated: false,
      setMode: (mode) => set({ mode }),
      toggle: () => set({ mode: get().mode === "light" ? "dark" : "light" }),
      setHydrated: (value) => set({ hydrated: value })
    }),
    {
      name: "glow.theme",
      storage: typeof window !== "undefined"
        ? createJSONStorage(() => window.localStorage)
        : undefined,
      skipHydration: true
    }
  )
);
"use client";

import { useEffect, useMemo, useState } from "react";

interface NavigatorDeviceMemory {
  deviceMemory?: number;
  hardwareConcurrency?: number;
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
}

const MIN_WIDTH_QUERY = "(min-width: 1280px)";
const MOTION_REDUCE_QUERY = "(prefers-reduced-motion: reduce)";
const MIN_MEMORY_GB = 8;
const MIN_CORES = 6;

export function usePerformanceMode() {
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const motionQuery = window.matchMedia(MOTION_REDUCE_QUERY);
    const widthQuery = window.matchMedia(MIN_WIDTH_QUERY);

    const update = () => {
      const navigatorWithMemory = window.navigator as NavigatorDeviceMemory;
      const deviceMemory = navigatorWithMemory.deviceMemory;
      const hardwareConcurrency = navigatorWithMemory.hardwareConcurrency ?? 0;
      const connection = navigatorWithMemory.connection;
      const saveData = connection?.saveData ?? false;
      const effectiveType = connection?.effectiveType ?? "";
      const isSlowConnection = ["slow-2g", "2g", "3g"].includes(effectiveType);
      const hasAdequateMemory = typeof deviceMemory === "number" ? deviceMemory >= MIN_MEMORY_GB : false;
      const hasAdequateCores = hardwareConcurrency >= MIN_CORES;
      const reduceMotion = motionQuery.matches;
      const hasViewportBudget = widthQuery.matches;

      setAllowMotion(
        !reduceMotion &&
          hasViewportBudget &&
          hasAdequateMemory &&
          hasAdequateCores &&
          !saveData &&
          !isSlowConnection
      );
    };

    update();

    motionQuery.addEventListener("change", update);
    widthQuery.addEventListener("change", update);
    window.addEventListener("orientationchange", update);
    window.addEventListener("resize", update);

    return () => {
      motionQuery.removeEventListener("change", update);
      widthQuery.removeEventListener("change", update);
      window.removeEventListener("orientationchange", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    document.body.classList.toggle("performance-ease-mode", !allowMotion);
  }, [allowMotion]);

  return useMemo(() => ({ allowMotion }), [allowMotion]);
}

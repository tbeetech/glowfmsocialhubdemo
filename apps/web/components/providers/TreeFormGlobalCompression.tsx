"use client";

import { useCallback, useEffect, useState } from "react";
import { useTreeFormCompression } from "@/lib/treeform";

const IMAGE_SELECTOR = "img:not([data-treeform='false'])";

function arraysEqual(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export function TreeFormGlobalCompression() {
  const [sources, setSources] = useState<string[]>([]);

  const collectSources = useCallback(() => {
    if (typeof window === "undefined") return;
    const nodes = document.querySelectorAll<HTMLImageElement>(IMAGE_SELECTOR);
    const next: string[] = [];
    nodes.forEach((img) => {
      const original = img.dataset.treeformOriginal || img.currentSrc || img.src;
      if (!img.dataset.treeformOriginal && original) {
        img.dataset.treeformOriginal = original;
      }
      if (!original || original.startsWith("data:")) return;
      if (!next.includes(original)) {
        next.push(original);
      }
    });
    setSources((prev) => (arraysEqual(prev, next) ? prev : next));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    collectSources();
    const observer = new MutationObserver(() => collectSources());
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "data-treeform-original"]
    });
    window.addEventListener("load", collectSources);
    return () => {
      observer.disconnect();
      window.removeEventListener("load", collectSources);
    };
  }, [collectSources]);

  const { getOptimizedSrc } = useTreeFormCompression(sources, {
    maxDepth: 7,
    detailThreshold: 18,
    quality: 0.68,
    minImageSize: 200,
    format: "image/webp"
  });

  useEffect(() => {
    if (typeof window === "undefined" || sources.length === 0) return;
    const nodes = document.querySelectorAll<HTMLImageElement>(IMAGE_SELECTOR);
    nodes.forEach((img) => {
      const original = img.dataset.treeformOriginal;
      if (!original) return;
      const optimized = getOptimizedSrc(original);
      if (!optimized || optimized === img.src) return;
      img.src = optimized;
      img.dataset.treeformApplied = "true";
    });
  }, [sources, getOptimizedSrc]);

  return null;
}

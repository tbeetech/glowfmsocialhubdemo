"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export interface TreeFormOptions {
  maxDepth: number;
  detailThreshold: number;
  quality: number;
  format: "image/webp" | "image/png";
  minImageSize: number;
}

export interface TreeFormResult {
  original: string;
  optimized: string;
  bytesSaved: number;
  ratio: number;
}

interface TreeFormNode {
  x: number;
  y: number;
  size: number;
  variance: number;
  color: [number, number, number, number];
  children?: TreeFormNode[];
}

const DEFAULT_OPTIONS: TreeFormOptions = {
  maxDepth: 6,
  detailThreshold: 32,
  quality: 0.72,
  format: "image/webp",
  minImageSize: 320
};

async function loadImage(source: string) {
  const response = await fetch(source, { mode: "cors", cache: "force-cache" });
  const blob = await response.blob();
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error);
    image.src = URL.createObjectURL(blob);
  });
}

function getImageData(image: HTMLImageElement) {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("TreeForm: canvas context unavailable");
  ctx.drawImage(image, 0, 0);
  return { canvas, ctx, data: ctx.getImageData(0, 0, canvas.width, canvas.height) };
}

function computeNode(
  data: ImageData,
  x: number,
  y: number,
  size: number,
  depth: number,
  options: TreeFormOptions
): TreeFormNode {
  const { width, data: buffer } = data;
  let sumR = 0;
  let sumG = 0;
  let sumB = 0;
  let sumA = 0;
  let sumR2 = 0;
  let sumG2 = 0;
  let sumB2 = 0;
  let pixels = 0;

  for (let py = y; py < y + size; py++) {
    for (let px = x; px < x + size; px++) {
      const idx = (py * width + px) * 4;
      const r = buffer[idx] ?? 0;
      const g = buffer[idx + 1] ?? 0;
      const b = buffer[idx + 2] ?? 0;
      const a = buffer[idx + 3] ?? 0;
      sumR += r;
      sumG += g;
      sumB += b;
      sumA += a;
      sumR2 += r * r;
      sumG2 += g * g;
      sumB2 += b * b;
      pixels++;
    }
  }

  const avgR = sumR / pixels;
  const avgG = sumG / pixels;
  const avgB = sumB / pixels;
  const avgA = sumA / pixels;

  const variance =
    (sumR2 - pixels * avgR * avgR + sumG2 - pixels * avgG * avgG + sumB2 - pixels * avgB * avgB) /
    (pixels * 3);

  const node: TreeFormNode = {
    x,
    y,
    size,
    variance,
    color: [avgR, avgG, avgB, avgA]
  };

  if (variance > options.detailThreshold && depth < options.maxDepth && size > 4) {
    const half = Math.floor(size / 2);
    node.children = [
      computeNode(data, x, y, half, depth + 1, options),
      computeNode(data, x + half, y, half, depth + 1, options),
      computeNode(data, x, y + half, half, depth + 1, options),
      computeNode(data, x + half, y + half, half, depth + 1, options)
    ];
  }

  return node;
}

function drawTree(ctx: CanvasRenderingContext2D, node: TreeFormNode) {
  if (!node.children || node.children.length === 0) {
    const [r, g, b, a] = node.color;
    ctx.fillStyle = `rgba(${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(0)}, ${(a / 255).toFixed(4)})`;
    ctx.fillRect(node.x, node.y, node.size, node.size);
    return;
  }
  node.children.forEach((child) => drawTree(ctx, child));
}

async function compressImage(source: string, options: TreeFormOptions): Promise<TreeFormResult> {
  const image = await loadImage(source);
  if (Math.max(image.width, image.height) < options.minImageSize) {
    return {
      original: source,
      optimized: source,
      bytesSaved: 0,
      ratio: 1
    };
  }

  const { canvas, ctx, data } = getImageData(image);
  const size = 1 << Math.floor(Math.log2(Math.min(canvas.width, canvas.height)));
  const tree = computeNode(data, 0, 0, size, 0, options);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTree(ctx, tree);

  const optimized = canvas.toDataURL(options.format, options.quality);
  const bytesSaved = Math.max(image.width * image.height * 4 - optimized.length, 0);

  return {
    original: source,
    optimized,
    bytesSaved,
    ratio: optimized.length / (image.width * image.height * 4)
  };
}

export function useTreeFormCompression(
  sources: string[],
  partialOptions?: Partial<TreeFormOptions>
) {
  const options = useMemo(() => ({ ...DEFAULT_OPTIONS, ...partialOptions }), [partialOptions]);
  const [compressed, setCompressed] = useState<Map<string, string>>(new Map());
  const pendingRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const uniqueSources = sources.filter(Boolean);

    uniqueSources.forEach((source) => {
      if (compressed.has(source) || pendingRef.current.has(source)) return;
      pendingRef.current.add(source);
      compressImage(source, options)
        .then((result) => {
          setCompressed((prev) => {
            const next = new Map(prev);
            next.set(source, result.optimized);
            return next;
          });
        })
        .catch(() => {
          setCompressed((prev) => {
            const next = new Map(prev);
            next.set(source, source);
            return next;
          });
        })
        .finally(() => pendingRef.current.delete(source));
    });
  }, [sources, options, compressed]);

  const getOptimizedSrc = (source: string | undefined) => {
    if (!source) return undefined;
    return compressed.get(source) ?? source;
  };

  return { getOptimizedSrc };
}

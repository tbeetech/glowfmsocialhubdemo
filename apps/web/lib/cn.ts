import { type ClassValue, clsx } from "clsx";

function mergeTailwindClasses(value: string) {
  if (!value) {
    return "";
  }

  const tokens = value.split(/\s+/).filter(Boolean);
  if (tokens.length <= 1) {
    return tokens.join(" ");
  }

  const seen = new Map<string, number>();
  tokens.forEach((token, index) => {
    seen.set(token, index);
  });

  const ordered = Array.from(seen.entries())
    .sort((a, b) => a[1] - b[1])
    .map(([token]) => token);

  return ordered.join(" ");
}

export function cn(...inputs: ClassValue[]) {
  const value = clsx(inputs);
  return mergeTailwindClasses(value);
}

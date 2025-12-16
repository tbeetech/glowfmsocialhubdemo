import { type MetadataRoute } from "next";

const ROUTES = [
  "/",
  "/about",
  "/advertisement",
  "/blog",
  "/contact",
  "/health",
  "/social-media",
  "/ember-final",
  "/final-5-players-quiz-answers"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const host = process.env.NEXT_PUBLIC_SITE_URL ?? "https://glow991fm.com";
  const now = new Date().toISOString();

  return ROUTES.map((path) => ({
    url: `${host}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7
  }));
}

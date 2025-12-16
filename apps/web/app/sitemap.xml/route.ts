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

const host = process.env.NEXT_PUBLIC_SITE_URL ?? "https://glow991fm.com";

export function GET() {
  const now = new Date().toISOString();
  const urlset = ROUTES.map(
    (path) => `
    <url>
      <loc>${host}${path}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${path === "/" ? "1.0" : "0.7"}</priority>
    </url>`
  ).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlset}
  </urlset>`;

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" }
  });
}

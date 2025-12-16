const host = process.env.NEXT_PUBLIC_SITE_URL ?? "https://glow991fm.com";

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${host}/sitemap.xml`,
    `Host: ${host.replace(/^https?:\/\//, "")}`
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/plain" }
  });
}

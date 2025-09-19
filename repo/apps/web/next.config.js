/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["res.cloudinary.com"] },
  env: {
    PORT: 3001
  },
  port: 3001,
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "geolocation=(), camera=()" }
      ]
    }
  ]
};
module.exports = nextConfig;

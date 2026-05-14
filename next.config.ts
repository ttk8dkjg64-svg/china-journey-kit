import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/destinations.html", destination: "/destinations", permanent: true },
      { source: "/essentials.html", destination: "/essentials", permanent: true },
      { source: "/itineraries.html", destination: "/itineraries", permanent: true },
      { source: "/destinations/:slug.html", destination: "/destinations/:slug", permanent: true },
      { source: "/essentials/:slug.html", destination: "/essentials/:slug", permanent: true },
      { source: "/experiences/culture-food.html", destination: "/experiences/culture-food", permanent: true },
      { source: "/deals/partner.html", destination: "/deals/partner", permanent: true },
      { source: "/company/contact.html", destination: "/company/contact", permanent: true },
      { source: "/company/privacy.html", destination: "/company/privacy", permanent: true },
      { source: "/company/terms.html", destination: "/company/terms", permanent: true },
      { source: "/company/sources.html", destination: "/company/sources", permanent: true }
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; img-src 'self' https://images.unsplash.com https://source.unsplash.com https://commons.wikimedia.org https://upload.wikimedia.org data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests"
          },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" }
        ]
      }
    ];
  }
};

export default nextConfig;

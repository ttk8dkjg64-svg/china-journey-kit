import type { MetadataRoute } from "next";
import { destinations, essentials } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://china-journey-kit.vercel.app";
  const routes = [
    "",
    "/destinations",
    "/essentials",
    "/itineraries",
    "/experiences/culture-food",
    "/deals/partner",
    "/company/contact",
    "/company/privacy",
    "/company/terms",
    "/company/sources",
    ...destinations.map((item) => `/destinations/${item.slug}`),
    ...essentials.map((item) => `/essentials/${item.slug}`)
  ];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}

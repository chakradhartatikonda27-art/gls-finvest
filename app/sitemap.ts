import type { MetadataRoute } from "next";

const siteUrl = "https://www.glsfinvest.com";
const routes = ["", "/about", "/services", "/projects", "/investment", "/gallery", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}

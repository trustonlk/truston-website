import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.trustondigital.lk";
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/solutions",
    "/services",
    "/industries",
    "/clients",
    "/support",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

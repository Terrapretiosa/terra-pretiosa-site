import type { MetadataRoute } from "next";
import { getDictionary, SUPPORTED_LANGS } from "@/content";

const BASE_URL = "https://terra-pretiosa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of SUPPORTED_LANGS) {
    const d = getDictionary(lang);

    // Static pages
    const staticRoutes = ["", "/company", "/services", "/team", "/contact", "/news", "/mission"];
    for (const route of staticRoutes) {
      entries.push({
        url: `${BASE_URL}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    }

    // Service categories and individual services
    for (const category of d.services.categories) {
      entries.push({
        url: `${BASE_URL}/${lang}/services/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });

      for (const service of category.services) {
        entries.push({
          url: `${BASE_URL}/${lang}/services/${category.slug}/${service.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    }

    // News articles
    for (const article of d.news.articles) {
      entries.push({
        url: `${BASE_URL}/${lang}/news/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: "yearly",
        priority: 0.5,
      });
    }
  }

  return entries;
}

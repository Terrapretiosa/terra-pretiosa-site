import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Doit rester aligné sur BASE_URL (sitemap.ts) et metadataBase (layout.tsx).
    sitemap: "https://www.terrapretiosa.com/sitemap.xml",
  };
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://levouzadni.cz";

  return [
    {
      url: base,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/o-studiu`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/pod-kapotou`,
      lastModified: new Date("2026-04-29"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/projekty`,
      lastModified: new Date("2026-04-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/kontakty`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${base}/ochrana-udaju`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

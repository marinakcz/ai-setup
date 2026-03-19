import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://levouzadni.cz"

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/o-studiu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pod-kapotou`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kontakty`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ochrana-udaju`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ]
}

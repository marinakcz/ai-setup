import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "O mně a studiu",
  description: "Ahoj, jsem Pavel. Digitální produkty navrhuju od roku 1999. Dnes s pomocí AI.",
  openGraph: {
    title: "O mně a studiu | Levou zadní",
    description: "Ahoj, jsem Pavel. Digitální produkty od roku 1999. Dnes s pomocí AI.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Levou zadní — AI studio" }],
  },
  alternates: { canonical: "/o-studiu" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Domů", item: "https://levouzadni.cz" },
              { "@type": "ListItem", position: 2, name: "O studiu", item: "https://levouzadni.cz/o-studiu" },
            ],
          },
          {
            "@type": "AboutPage",
            name: "O mně a studiu",
            url: "https://levouzadni.cz/o-studiu",
            description: "Ahoj, jsem Pavel. Digitální produkty navrhuju od roku 1999.",
            mainEntity: {
              "@type": "Person",
              name: "Pavel Martinovský",
              jobTitle: "UX Designer",
              sameAs: "https://www.linkedin.com/in/pavelmartinovsky/",
            },
          },
        ],
      })}} />
      {children}
    </>
  )
}

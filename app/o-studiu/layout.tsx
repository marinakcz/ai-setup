import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "O studiu",
  description: "Ahoj, jsem Pavel. Digitální produkty navrhuju od roku 1999. Teď s pomocí AI.",
  openGraph: {
    title: "O studiu — Levou zadní",
    description: "Ahoj, jsem Pavel. Digitální produkty navrhuju od roku 1999. Teď s pomocí AI.",
  },
  alternates: { canonical: "/o-studiu" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domů", item: "https://levouzadni.cz" },
          { "@type": "ListItem", position: 2, name: "O studiu", item: "https://levouzadni.cz/o-studiu" },
        ],
      })}} />
      {children}
    </>
  )
}

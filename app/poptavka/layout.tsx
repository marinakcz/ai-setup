import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spojme se",
  description: "Máte nápad nebo projekt? Ozvěte se.",
  openGraph: {
    title: "Spojme se | Levou zadní",
    description: "Máte nápad? Projekt? Ozvěte se.",
  },
  alternates: { canonical: "/poptavka" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domů", item: "https://levouzadni.cz" },
          { "@type": "ListItem", position: 2, name: "Spojme se", item: "https://levouzadni.cz/poptavka" },
        ],
      })}} />
      {children}
    </>
  )
}

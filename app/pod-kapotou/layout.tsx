import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pod kapotou",
  description: "Jak funguje AI studio Levou zadní. Člověk × AI, nástroje, principy.",
  openGraph: {
    title: "Pod kapotou | Levou zadní",
    description: "Jak funguje AI studio. Člověk × AI.",
  },
  alternates: { canonical: "/pod-kapotou" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domů", item: "https://levouzadni.cz" },
          { "@type": "ListItem", position: 2, name: "Pod kapotou", item: "https://levouzadni.cz/pod-kapotou" },
        ],
      })}} />
      {children}
    </>
  )
}

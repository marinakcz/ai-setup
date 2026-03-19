import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakty",
  description: "Máte nápad nebo projekt? Ozvěte se.",
  openGraph: {
    title: "Kontakty | Levou zadní",
    description: "Máte nápad? Projekt? Ozvěte se.",
  },
  alternates: { canonical: "/kontakty" },
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
              { "@type": "ListItem", position: 2, name: "Kontakty", item: "https://levouzadni.cz/kontakty" },
            ],
          },
          {
            "@type": "ContactPage",
            name: "Kontakty",
            url: "https://levouzadni.cz/kontakty",
            description: "Máte nápad nebo projekt? Ozvěte se.",
            mainEntity: {
              "@type": "Organization",
              name: "Levou zadní",
              email: "studio@levouzadni.cz",
              telephone: "+420776120555",
            },
          },
        ],
      })}} />
      {children}
    </>
  )
}

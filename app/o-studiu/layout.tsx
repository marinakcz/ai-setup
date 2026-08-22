import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pavel Martinovský — senior UX designer",
  description:
    "Ahoj, jsem Pavel. Digitální produkty navrhuju od roku 1999, dnes s pomocí AI. Weby, aplikace a prototypy pro klienty v Praze i online.",
  openGraph: {
    title: "Pavel Martinovský — senior UX designer | Levou zadní",
    description:
      "Ahoj, jsem Pavel. Digitální produkty navrhuju od roku 1999, dnes s pomocí AI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Levou zadní — AI studio",
      },
    ],
  },
  alternates: { canonical: "/o-studiu" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Domů",
                    item: "https://levouzadni.cz",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "O studiu",
                    item: "https://levouzadni.cz/o-studiu",
                  },
                ],
              },
              {
                "@type": "AboutPage",
                "@id": "https://levouzadni.cz/o-studiu#webpage",
                name: "O mně a studiu",
                url: "https://levouzadni.cz/o-studiu",
                description:
                  "Ahoj, jsem Pavel. Digitální produkty navrhuju od roku 1999. Dnes s pomocí AI.",
                inLanguage: "cs",
                isPartOf: { "@id": "https://levouzadni.cz/#website" },
                about: { "@id": "https://levouzadni.cz/#pavel" },
                mainEntity: { "@id": "https://levouzadni.cz/#pavel" },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}

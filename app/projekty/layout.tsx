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
                    name: "Projekty",
                    item: "https://levouzadni.cz/projekty",
                  },
                ],
              },
              {
                "@type": "WebPage",
                "@id": "https://levouzadni.cz/projekty#webpage",
                name: "Projekty",
                url: "https://levouzadni.cz/projekty",
                description: "Co se chystá a jaké máme aktuálně kapacity.",
                inLanguage: "cs",
                isPartOf: { "@id": "https://levouzadni.cz/#website" },
                publisher: { "@id": "https://levouzadni.cz/#organization" },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}

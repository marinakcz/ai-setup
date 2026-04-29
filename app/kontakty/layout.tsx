import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakty",
  description: "Máte nápad nebo projekt? Ozvěte se.",
  openGraph: {
    title: "Kontakty | Levou zadní",
    description: "Máte nápad? Projekt? Ozvěte se.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Levou zadní — AI studio",
      },
    ],
  },
  alternates: { canonical: "/kontakty" },
};

const faqSchema = [
  {
    question: "S kým to funguje nejlépe?",
    answer:
      "S founders a product owners startupů a digitálních produktů, kteří mají jasný cíl a nechají na mně směr i řešení. S firmami, které hledají partnera, ne jen dodavatele. Pokud chcete spoluúčast na směřování projektu — jste na správné adrese.",
  },
  {
    question: "Co si pod vaší prací konkrétně představit?",
    answer:
      "Záleží na tom, co potřebujete. UX research a definice problému. Klikatelný prototyp za 3–5 dní. MVP design připravený k testování za 3–6 týdnů. Nebo celý produkt od konceptu po development handoff. Vždy výstup, se kterým se dá rovnou pracovat.",
  },
  {
    question: "Jak probíhá spolupráce?",
    answer:
      "Začneme krátkým hovorem bez závazku — kde se nacházíte, co řešíte, kam chcete. Rychle zjistíme, jestli to dává smysl. Pracuji samostatně, remote i osobně (Praha), pravidelně sdílím postup. Bez zbytečných meetingů, ale s jasným směrem. Na zprávy odpovídám do 24 hodin.",
  },
  {
    question: "Jak přemýšlíte nad projektem?",
    answer:
      "Nezačínám řešením. Ani nástrojem, ani AI. Za 25+ let v digitálních produktech jsem si ověřil jedno: nejdřív musím pochopit, kde se věc opravdu láme. V průniku byznysu, uživatelů a technologie se ukáže, co dává smysl dělat. AI mi pak pomáhá to rychleji realizovat. Přemýšlení ale nenahrazuje.",
  },
  {
    question: "Jak do toho zapadá AI?",
    answer:
      "AI mi pomáhá násobit to, co umím. Rychleji procházím varianty, testuji směry, zkracuji cestu od nápadu k funkčnímu řešení. Výsledek není AI na autopilotu — je to kombinace 25 let zkušenosti s digitálními produkty, kontextu vašeho projektu a správně zvolených nástrojů. Rozhoduju pořád já.",
  },
  {
    question: "Jaká je vaše kapacita a co to stojí?",
    answer:
      "Pracuji záměrně na jednom až dvou projektech najednou. Váš projekt dostane celého mě, ne výseč. Pracuji na bázi fixní ceny za projekt nebo denní sazby — podle toho, co dává smysl. Konkrétní čísla probereme hned na prvním hovoru.",
  },
  {
    question: "Co potřebuji připravit, než se ozvu?",
    answer:
      "Nic zvláštního. Stačí vědět, co chcete dosáhnout — nebo mít pocit, že něco nejde tak, jak by mělo. Technická specifikace, Figma soubory ani brief nejsou potřeba. Přijďte s problémem nebo nápadem, zbytek vyřešíme společně.",
  },
];

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
                    name: "Kontakty",
                    item: "https://levouzadni.cz/kontakty",
                  },
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
              {
                "@type": "FAQPage",
                mainEntity: faqSchema.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}

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
    question: "Proč se mnou spolupracovat?",
    answer:
      "Zajímá mě, jak věci fungují pro vaše zákazníky, co to znamená pro byznys a co jde reálně postavit. Ne hezký návrh, ale řešení, které obstojí. Víc jak 25 let stavím digitální produkty a naučil jsem se poznat, co je podstatné a co jen detail.",
  },
  {
    question: "S kým mi to funguje nejlépe?",
    answer:
      "S lidmi, kteří chtějí věci posunout a jsou ochotní na tom pracovat. Nejde o to zadat a počkat. Práci přiděluju na obou stranách. Potřebuju, abyste průběžně reagovali, říkali co funguje a co ne, a nebáli se změnit směr. Baví mě projekty s ambicí. Ne jednorázový výstup, ale věc, která má prostor růst.",
  },
  {
    question: "Kdy to nedává smysl?",
    answer:
      "Když není prostor říct, co nefunguje, nebo jde o projekt, za nímž si sám nestojím. Většinou to skončí hezkým výsledkem bez dopadu. A to nikoho moc nebaví.",
  },
  {
    question: "Jak probíhá spolupráce?",
    answer:
      "Na začátku si potřebujeme ujasnit, co vlastně řešíme. Je to jako se stavbou. Nezačíná se kopáním, ale tím, co a kde chcete postavit. Nejdřív potřebuju pochopit situaci, cíle a co jde reálně udělat. Na tom stavím návrh. Bez té fáze se problémy vracejí.",
  },
  {
    question: "Jak do toho zapadá AI?",
    answer:
      "AI beru jako nástroj, který mi pomáhá být rychlejší a jít víc do šířky. Projdu víc variant, ověřím směr, urychlím části práce. Díky tomu se dá dostat k prototypu nebo funkčnímu řešení rychleji. Rozhodování ale zůstává na mně. AI je prostředek, ne autopilot.",
  },
  {
    question: "Pracuji sám, nebo v týmu?",
    answer:
      "Záleží na rozsahu. Menší věci řeším sám. U větších zapojím lidi, se kterými mám zkušenost: vývoj, design nebo jiné specializace. Nemám problém říct, když projekt potřebuje víc rukou. Pak složím tým a řídím to jako celek.",
  },
  {
    question: "Jaká je kapacita a cena?",
    answer:
      "Záměrně pracuju na jednom nebo dvou projektech najednou. Věnuju se tomu naplno, ne napůl. Spolupráce může být na fixní cenu nebo hodinově, záleží na projektu. Konkrétní čísla probereme, až bude jasné zadání.",
  },
  {
    question: "Co ode mě potřebujete na začátku?",
    answer:
      "Stačí krátký kontext. Pár vět o tom, co řešíte, v jaké jste fázi a co od toho čekáte. Čím konkrétnější, tím rychleji se posuneme.",
  },
  {
    question: "Kde působím?",
    answer:
      "Primárně v Praze a okolí. Většina spolupráce probíhá online, takže místo není překážka. Na osobní setkání rád přijedu, když to pro projekt má přínos.",
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

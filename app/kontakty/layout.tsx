import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt a poptávka spolupráce",
  description:
    "Máte nápad na produkt, prototyp nebo MVP? Napište pár vět o projektu a ozvu se co nejdřív. Nezávazná konzultace zdarma.",
  openGraph: {
    title: "Kontakt a poptávka spolupráce | Levou zadní",
    description:
      "Máte nápad na produkt, prototyp nebo MVP? Napište pár vět a ozvu se co nejdřív.",
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
      "Zajímá mě, jak věci fungují pro vaše zákazníky, co to znamená pro byznys a co jde reálně postavit. Ne hezký návrh, ale řešení, které obstojí. Digitální produkty stavím od roku 1999 a naučil jsem se poznat, co je podstatné a co jen detail.",
  },
  {
    question: "S kým to funguje a kdy ne?",
    answer:
      "S lidmi, kteří chtějí věci posunout a jsou ochotní na tom pracovat. Nejde o to zadat a počkat. Práci přiděluju na obou stranách. Potřebuju, abyste průběžně reagovali, říkali co funguje a co ne, a nebáli se změnit směr. Baví mě projekty s ambicí, ne jednorázový výstup. Nefunguje to, když na tohle není prostor, nebo jde o projekt, za nímž si sám nestojím.",
  },
  {
    question: "Jak probíhá spolupráce?",
    answer:
      "Na začátku potřebuju pochopit, co opravdu řešíme. Ne zadání, ale problém za ním. Kdo to bude používat, co jim to přinese a kde to teď nefunguje. Teprve z toho navrhuju řešení. Pak pracujeme v iteracích: ukážu, dostanu zpětnou vazbu, posuneme se dál. Bez zbytečných kol schvalování, ale s jasnou stopou proč jdeme kudy jdeme.",
  },
  {
    question: "Jak do toho zapadá AI?",
    answer:
      "Levou zadní do velké míry vzniklo díky AI. Cesta od nápadu k funkčnímu prototypu se dramaticky zkrátila. Věci, které dřív neměly šanci, dnes mají. V práci mi AI pomáhá projít víc variant, rychleji ověřit směr a urychlí rutinní části. Rozhodování a zkušenost zůstávají na mně. AI je násobič, ne náhrada.",
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
    question: "Co od vás potřebuji na začátku?",
    answer:
      "Stačí krátký kontext. Pár vět o tom, co řešíte, v jaké jste fázi a co od toho čekáte. Čím konkrétnější, tím rychleji se posuneme.",
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
                mainEntity: { "@id": "https://levouzadni.cz/#organization" },
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

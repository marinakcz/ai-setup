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
    question: "Proč spolupracovat právě s vámi?",
    answer:
      "Dívám se na věci očima vašich zákazníků a snažím se propojit tři světy, které se často řeší odděleně — uživatele, byznys a technologie. Smyslem není vytvořit hezký návrh, ale řešení, které má reálný dopad. Za 25+ let v digitálních produktech jsem se naučil vidět věci v širších souvislostech a vždy hledat přidanou hodnotu — ne jen výstup.",
  },
  {
    question: "S kým to funguje nejlépe?",
    answer:
      "S founders a product owners startupů a digitálních produktů, kteří mají jasný cíl a nechají na mně směr i řešení. S firmami, které hledají partnera, ne jen dodavatele. Spolupráce není o tom, že zadáte práci a čekáte na výsledek — je to společný proces, kde potřebuji vaší zpětnou vazbu a zapojení.",
  },
  {
    question: "Kdy to naopak nedává smysl?",
    answer:
      "Pokud hledáte čistou exekuci bez diskuse a nechcete otevírat věci, které nefungují — nebudeme si sedět. Stejně tak na projekty, které eticky nedávají smysl. Radši to říkám rovnou, než abychom ztráceli čas.",
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
    question: "Pracujete sám nebo v týmu?",
    answer:
      "Záleží na rozsahu. Menší věci řeším celé sám. U větších projektů přizvu lidi, se kterými mám zkušenost a kteří projekt posunou. Nemám problém říct, když něco přesahuje to, co dává smysl dělat sólo.",
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
    question: "Kde působíte?",
    answer:
      "Primárně v Praze a okolí. Většina spolupráce ale probíhá online, takže není problém pracovat na projektech odkudkoliv z Česka nebo Slovenska.",
  },
  {
    question: "Co potřebuji připravit, než se ozvu?",
    answer:
      "Stačí krátký popis — ideálně jedna až dvě věty o tom, co řešíte, v jaké jste fázi a co od spolupráce očekáváte. To mi pomůže rychle vyhodnotit, jestli to dává smysl a jak bych vám mohl pomoct. Technická specifikace ani Figma soubory nejsou potřeba.",
  },
  {
    question: "Co od spolupráce čekat?",
    answer:
      "Přímou komunikaci a otevřenou zpětnou vazbu. Pracuji jako partner, ne jako dodavatel — to znamená, že zpochybňuji věci, které nefungují, a říkám, co si myslím. Cílem není hezký výstup, ale věc, která funguje.",
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

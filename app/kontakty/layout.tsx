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
      "Pokud hledáte někoho, kdo jen vezme zadání a nakreslí obrazovky, nejspíš si nebudeme sedět. Dívám se na věci v souvislostech — jak to funguje pro vaše zákazníky, co to znamená pro váš byznys a co je reálně možné postavit. Smyslem není dodat návrh, ale najít řešení, které obstojí v praxi. Mám za sebou víc než 25 let práce na digitálních produktech a aplikacích. Díky tomu dokážu rychle rozlišit, co je podstatné a co jen detail.",
  },
  {
    question: "S kým mi to funguje nejlépe?",
    answer:
      "Nejlépe to funguje s lidmi, kteří chtějí věci posunout a jsou ochotní na tom spolupracovat. Nejde o model, kde zadáte a čekáte. Je potřeba si věci vyjasnit, vracet si zpětnou vazbu a občas upravit směr. Často pomáhám i s tím, co dává smysl řešit jako první. Dlouhodobě mi dávají smysl spolupráce, které mají přesah — ne jen rychlá dodávka, ale něco, co se může rozvíjet.",
  },
  {
    question: "Kdy to nedává smysl?",
    answer:
      "Pokud má být moje role čistě exekuční, není to dobrý fit. Stejně tak pokud není prostor otevřít věci, které nefungují, nebo se řeší něco, co nedává smysl z dlouhodobého nebo etického hlediska. V takovém případě to většinou skončí jen hezkým výsledkem bez dopadu. A to nikoho moc nebaví.",
  },
  {
    question: "Jak probíhá spolupráce?",
    answer:
      "Na začátku si potřebujeme ujasnit, co vlastně řešíme. Je to podobné jako u stavby domu — nezačíná se kopáním, ale tím, že víte, co a kde chcete postavit. Stejně tak i tady potřebuji pochopit kontext, cíle a omezení. Na tom se pak staví návrh. Bez téhle fáze se to většinou dřív nebo později vrátí.",
  },
  {
    question: "Jak do toho zapadá AI?",
    answer:
      "AI beru jako nástroj, který mi pomáhá být rychlejší a jít víc do šířky. Pomůže projít víc variant, ověřit směr nebo urychlit některé části práce. Díky tomu se dá rychle dostat k prototypu nebo funkčnímu řešení. Pořád ale platí, že rozhodování zůstává na mně. AI je prostředek, ne autopilot.",
  },
  {
    question: "Pracuji sám, nebo v týmu?",
    answer:
      "Záleží na projektu a jeho rozsahu. Menší věci řeším sám. U větších dává smysl zapojit další lidi, ať už jde o vývoj, design nebo jiné specializace. Pracuju s lidmi, které znám a vím, co od nich čekat. Nemám problém říct, že něco přesahuje moje kapacity. V takové chvíli je lepší postavit tým než to tlačit silou.",
  },
  {
    question: "Jaká je kapacita a cena?",
    answer:
      "Záměrně pracuju jen na jednom nebo dvou projektech najednou. Díky tomu se tomu můžu věnovat naplno a neřešit věci napůl. Spolupráce může být na fixní cenu nebo hodinově, podle toho, co dává větší smysl. Konkrétní nastavení řešíme až ve chvíli, kdy je jasné zadání a rozsah práce.",
  },
  {
    question: "Co ode mě potřebujete na začátku?",
    answer:
      "Stačí krátký kontext, abych věděl, o čem se bavíme. Ideálně pár vět o tom, co řešíte, v jaké jste fázi a co od toho čekáte. Nemusí to být nic složitého, spíš základní orientace. Čím konkrétnější to bude, tím rychleji se posuneme dál.",
  },
  {
    question: "Kde působím?",
    answer:
      "Primárně pracuju v Praze a okolí. Většina spolupráce ale probíhá online, takže není problém fungovat odkudkoliv. Osobní setkání dává smysl tam, kde to projektu pomůže.",
  },
  {
    question: "Co ode mě můžete čekat?",
    answer:
      "Přímý přístup a snahu věci opravdu pochopit. Nejde o to dodat výstup, ale posunout věc tak, aby dávala smysl — pro vás i pro lidi, kteří to budou používat. A ideálně tak, aby to fungovalo i za rok, ne jen při předání.",
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

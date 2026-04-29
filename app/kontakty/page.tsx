import { ContactSection } from "./contact-form";
import { SiteFooter } from "@/components/site-footer";

const FAQ_ITEMS = [
  {
    question: "Proč se mnou spolupracovat?",
    answer:
      "Zajímá mě, jak věci fungují pro vaše zákazníky, co to znamená pro byznys a co jde reálně postavit. Ne hezký návrh, ale řešení, které obstojí. Víc jak 25 let stavím digitální produkty a naučil jsem se poznat, co je podstatné a co jen detail.",
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

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="relative z-10 max-w-[1408px] mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 w-full">
        <ContactSection />

        {/* FAQ — server rendered for AI crawlers */}
        <div className="max-w-2xl mx-auto mt-16 md:mt-24">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12 md:mb-16" />
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-8">
            / ČASTÉ OTÁZKY
          </p>
          <div>
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group border-b border-border last:border-0"
              >
                <summary className="group/summary py-6 flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span className="font-body font-medium text-[clamp(1rem,1.3vw,1.125rem)] leading-snug text-foreground group-hover/summary:text-primary transition-colors duration-200">
                    {item.question}
                  </span>
                  <svg
                    className="w-5 h-5 shrink-0 text-muted-foreground group-hover/summary:text-primary transition-all duration-300 group-open:rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 5v14M5 12h14"
                    />
                  </svg>
                </summary>
                <p className="faq-answer font-body font-light text-[clamp(0.875rem,1.1vw,1rem)] leading-[1.8] text-muted-foreground pb-6">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

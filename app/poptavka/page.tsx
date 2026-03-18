"use client"

import { useState } from "react"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

const INTERESTS = [
  "Návrh produktu",
  "Prototyp / MVP",
  "AI experiment",
  "UX konzultace",
  "Nápad nebo projekt",
  "Něco jiného",
]

export default function InquiryPage() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ POPTÁVKA</p>
        <h1 className="font-body font-bold text-3xl sm:text-4xl text-foreground leading-tight mb-3">
          Napište mi
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Máte nápad, projekt nebo jen chcete zjistit, co je možné?
        </p>

        <form className="space-y-6 max-w-xl">
          <div>
            <label htmlFor="url" className="block font-mono text-xs text-muted-foreground mb-2">URL</label>
            <input
              type="url"
              id="url"
              name="url"
              placeholder="https://"
              className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground font-mono text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-xs text-muted-foreground mb-2">
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="vas@email.cz"
              className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground font-mono text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-mono text-xs text-muted-foreground mb-2">Telefon (volitelné)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+420"
              className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground font-mono text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="company" className="block font-mono text-xs text-muted-foreground mb-2">Firma (volitelné)</label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground font-mono text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
            />
          </div>

          <div>
            <p className="font-mono text-xs text-muted-foreground mb-3">Co vás zajímá</p>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => setSelected(selected === interest ? null : interest)}
                  className={`px-3.5 py-2 rounded-lg border font-mono text-xs transition-colors ${
                    selected === interest
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-border bg-card/50 text-muted-foreground hover:border-border/80 hover:text-foreground"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
            <input type="hidden" name="interest" value={selected || ""} />
          </div>

          <div>
            <label htmlFor="description" className="block font-mono text-xs text-muted-foreground mb-2">Krátký popis</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground font-mono text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-mono text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Odeslat
          </button>

          <p className="text-xs text-muted-foreground/70 leading-relaxed">
            Odesláním formuláře souhlasíte se zpracováním osobních údajů za účelem vyřízení vašeho dotazu.{" "}
            <Link href="/ochrana-udaju" className="text-primary/70 hover:text-primary hover:underline">
              Ochrana osobních údajů
            </Link>.
          </p>
        </form>
      </main>

      <SiteFooter />
    </div>
  )
}

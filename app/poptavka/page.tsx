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
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (interest: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(interest)) next.delete(interest)
      else next.add(interest)
      return next
    })
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="relative z-10 max-w-[1408px] mx-auto px-6 pt-32 pb-24 w-full">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ SPOJME SE</p>
          <h1 className="font-body font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-[0.02em] text-foreground mb-4">
            Napište mi
          </h1>
          <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground max-w-xl">
            Máte nápad? Projekt?<br />
            Nebo jen chcete zjistit, co dává smysl?
          </p>
        </div>

        {/* Form */}
        <form className="max-w-2xl">

          {/* Contact fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="name" className="block font-mono text-xs text-muted-foreground mb-2">
                Jméno a příjmení <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground font-mono text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs text-muted-foreground mb-2">
                E-mail <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="vas@email.cz"
                className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground font-mono text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-mono text-xs text-muted-foreground mb-2">Telefon (volitelné)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+420"
                className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground font-mono text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
              />
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-border/60 to-transparent mb-8" />

          {/* Interests — multi-select */}
          <div className="mb-8">
            <p className="font-mono text-xs text-muted-foreground mb-4">Co řešíte?</p>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggle(interest)}
                  className={`px-4 py-2.5 rounded-xl border font-mono text-xs transition-all duration-200 ${
                    selected.has(interest)
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-border bg-card/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
            <input type="hidden" name="interests" value={Array.from(selected).join(", ")} />
          </div>

          <div className="h-px bg-gradient-to-r from-border/60 to-transparent mb-8" />

          {/* Description */}
          <div className="mb-10">
            <label htmlFor="description" className="block font-mono text-xs text-muted-foreground mb-2">Krátce popište, o co jde</label>
            <textarea
              id="description"
              name="description"
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground font-mono text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-mono text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Odeslat
          </button>

          <div className="h-px bg-gradient-to-r from-border/60 to-transparent mt-10 mb-6" />

          <p className="text-xs text-muted-foreground/60 leading-relaxed">
            Odesláním souhlasíte se zpracováním údajů pro vyřízení zprávy.{" "}
            <Link href="/ochrana-udaju" className="text-muted-foreground hover:text-primary hover:underline transition-colors">
              Ochrana osobních údajů
            </Link>.
          </p>
        </form>
      </main>

      <SiteFooter />
    </div>
  )
}

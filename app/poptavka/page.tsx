"use client"

import { useState, useRef } from "react"
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

function formatPhone(value: string): string {
  // Strip everything except digits and leading +
  const hasPlus = value.startsWith("+")
  const digits = value.replace(/\D/g, "")
  if (!digits) return hasPlus ? "+" : ""

  // Format: +420 777 888 999 or 777 888 999
  let formatted = ""
  let d = digits

  if (hasPlus) {
    // Country code (first 3 digits) then groups of 3
    const cc = d.slice(0, 3)
    d = d.slice(3)
    formatted = `+${cc}`
    if (d.length > 0) formatted += " "
  }

  // Split remaining into groups of 3
  for (let i = 0; i < d.length; i++) {
    if (i > 0 && i % 3 === 0) formatted += " "
    formatted += d[i]
  }

  return formatted
}

export default function InquiryPage() {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const formStart = useRef(Date.now())

  const toggle = (interest: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(interest)) next.delete(interest)
      else next.add(interest)
      return next
    })
  }

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {}
    const name = (form.get("name") as string || "").trim()
    const email = (form.get("email") as string || "").trim()

    if (!name) errs.name = "Vyplňte jméno"
    if (!email) errs.email = "Vyplňte e-mail"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Neplatný e-mail"

    // Bot detection: honeypot filled or form submitted too fast (<3s)
    const honeypot = form.get("website") as string
    if (honeypot) errs._bot = "bot"
    if (Date.now() - formStart.current < 3000) errs._bot = "bot"

    return errs
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const errs = validate(form)

    if (errs._bot) {
      // Silently pretend success for bots
      setSubmitted(true)
      return
    }

    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    // TODO: send form data to API
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="relative min-h-screen flex flex-col">
        <main className="relative z-10 max-w-[1408px] mx-auto px-6 pt-32 pb-24 w-full text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ SPOJME SE</p>
          <h1 className="font-body font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-[0.02em] text-foreground mb-4">
            Díky!
          </h1>
          <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground">
            Ozvu se co nejdřív.
          </p>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="relative z-10 max-w-[1408px] mx-auto px-6 pt-32 pb-24 w-full">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">/ SPOJME SE</p>
          <h1 className="font-body font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-[0.02em] text-foreground mb-4">
            Napište mi
          </h1>
          <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground">
            Máte nápad? Projekt?<br />
            Nebo jen chcete zjistit, co dává smysl?
          </p>
        </div>

        {/* Form */}
        <form className="max-w-2xl mx-auto" onSubmit={handleSubmit} noValidate>

          {/* Honeypot — hidden from humans */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>

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
                autoComplete="name"
                className={`w-full px-4 py-3 rounded-xl border bg-card/50 text-foreground font-mono text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors ${errors.name ? "border-red-500/60" : "border-border"}`}
              />
              {errors.name && <p className="font-mono text-xs text-red-400 mt-1">{errors.name}</p>}
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
                autoComplete="email"
                placeholder="vas@email.cz"
                className={`w-full px-4 py-3 rounded-xl border bg-card/50 text-foreground font-mono text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors ${errors.email ? "border-red-500/60" : "border-border"}`}
              />
              {errors.email && <p className="font-mono text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block font-mono text-xs text-muted-foreground mb-2">Telefon (volitelné)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+420"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
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

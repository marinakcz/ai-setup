"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function formatPhone(value: string): string {
  const hasPlus = value.startsWith("+");
  let digits = value.replace(/\D/g, "");
  if (!digits) return hasPlus ? "+" : "";

  if (hasPlus) {
    digits = digits.slice(0, 12);
    const cc = digits.slice(0, 3);
    const rest = digits.slice(3);
    let formatted = `+${cc}`;
    for (let i = 0; i < rest.length; i++) {
      if (i % 3 === 0) formatted += " ";
      formatted += rest[i];
    }
    return formatted;
  }

  digits = digits.slice(0, 9);
  let formatted = "";
  for (let i = 0; i < digits.length; i++) {
    if (i > 0 && i % 3 === 0) formatted += " ";
    formatted += digits[i];
  }
  return formatted;
}

const REDIRECT_SECONDS = 10;

const INTERESTS = [
  "Návrh produktu",
  "Prototyp / MVP",
  "AI experiment",
  "UX konzultace",
  "Nápad nebo projekt",
  "Něco jiného",
];

function SuccessScreen() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);

  const goHome = useCallback(() => router.push("/"), [router]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          goHome();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [goHome]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="font-mono text-xs tracking-[0.2em] text-primary mb-4">
          / ODESLÁNO
        </p>
        <h1 className="font-body font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-[0.02em] text-foreground mb-4">
          Díky, mám to!
        </h1>
        <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground mb-10">
          Ozvu se co nejdřív.
          <br className="hidden sm:block" />
          Mezitím se klidně spojme i na LinkedInu.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://www.linkedin.com/in/pavelmartinovsky/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/30 bg-primary/5 font-mono text-sm text-primary hover:bg-primary/10 transition-colors"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:studio@levouzadni.cz"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            studio@levouzadni.cz
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground/60">
          Přesměrování za {countdown} s&ensp;
          <button
            onClick={goHome}
            className="text-primary hover:text-foreground transition-colors"
          >
            nebo hned &rarr;
          </button>
        </p>
      </div>
    </div>
  );
}

export function ContactSection() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [serverError, setServerError] = useState("");
  const formStart = useRef(Date.now());

  const toggle = (interest: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(interest)) next.delete(interest);
      else next.add(interest);
      return next;
    });
  };

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    const name = ((form.get("name") as string) || "").trim();
    const email = ((form.get("email") as string) || "").trim();
    if (!name) errs.name = "Vyplňte jméno";
    if (!email) errs.email = "Vyplňte e-mail";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Neplatný e-mail";
    const honeypot = form.get("website") as string;
    if (honeypot) errs._bot = "bot";
    if (Date.now() - formStart.current < 3000) errs._bot = "bot";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    if (errs._bot) {
      setStatus("sent");
      return;
    }
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: (form.get("name") as string).trim(),
          email: (form.get("email") as string).trim(),
          phone: phone.trim(),
          interests: Array.from(selected).join(", "),
          description: ((form.get("description") as string) || "").trim(),
          website: form.get("website"),
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setServerError(data.error || "Něco se pokazilo.");
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setServerError("Nepodařilo se odeslat. Zkuste to znovu.");
      setStatus("error");
    }
  };

  return (
    <>
      {status === "sent" && <SuccessScreen />}

      {/* Header */}
      <div className="mb-12 md:mb-16 text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-primary mb-2">
          / NAPIŠTE MI
        </p>
        <h1 className="font-body font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] tracking-[0.02em] text-foreground mb-4">
          Spojme se
        </h1>
        <p className="font-body font-light text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.8] text-muted-foreground">
          Máte nápad? Projekt?
          <br />
          Nebo jen chcete zjistit, co dává smysl?
        </p>
      </div>

      {/* Form */}
      <form className="max-w-2xl mx-auto" onSubmit={handleSubmit} noValidate>
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-xs text-muted-foreground mb-2"
            >
              Jméno a příjmení <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              onChange={() =>
                errors.name &&
                setErrors((prev) => {
                  const { name: _, ...rest } = prev;
                  return rest;
                })
              }
              className={`w-full px-4 py-3 rounded-xl border bg-card/50 text-foreground font-mono text-base placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors ${errors.name ? "border-red-500/60" : "border-border"}`}
            />
            {errors.name && (
              <p className="font-mono text-xs text-red-400 mt-1">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-mono text-xs text-muted-foreground mb-2"
            >
              E-mail <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              placeholder="vas@email.cz"
              onChange={() =>
                errors.email &&
                setErrors((prev) => {
                  const { email: _, ...rest } = prev;
                  return rest;
                })
              }
              className={`w-full px-4 py-3 rounded-xl border bg-card/50 text-foreground font-mono text-base placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors ${errors.email ? "border-red-500/60" : "border-border"}`}
            />
            {errors.email && (
              <p className="font-mono text-xs text-red-400 mt-1">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block font-mono text-xs text-muted-foreground mb-2"
            >
              Telefon (volitelné)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+420"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground font-mono text-base placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
            />
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-border/60 to-transparent mb-8" />

        <div className="mb-8">
          <p className="font-mono text-xs text-muted-foreground mb-4">
            Co řešíte?
          </p>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => toggle(interest)}
                className={`px-4 py-3.5 rounded-xl border font-mono text-xs transition-all duration-200 ${
                  selected.has(interest)
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border bg-card/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
          <input
            type="hidden"
            name="interests"
            value={Array.from(selected).join(", ")}
          />
        </div>

        <div className="h-px bg-gradient-to-r from-border/60 to-transparent mb-8" />

        <div className="mb-10">
          <label
            htmlFor="description"
            className="block font-mono text-xs text-muted-foreground mb-2"
          >
            Krátce popište, o co jde
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-border bg-card/50 text-foreground font-mono text-base placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-background font-mono text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "sending" ? (
            <>
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Odesílám...
            </>
          ) : (
            "Odeslat"
          )}
        </button>
        {status === "error" && serverError && (
          <p className="font-mono text-xs text-red-400 mt-3">{serverError}</p>
        )}

        <div className="h-px bg-gradient-to-r from-border/60 to-transparent mt-10 mb-6" />

        <p className="text-xs text-muted-foreground leading-relaxed">
          Odesláním souhlasíte se zpracováním údajů pro vyřízení zprávy.{" "}
          <Link
            href="/ochrana-udaju"
            className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Ochrana osobních údajů
          </Link>
          .
        </p>
      </form>

      {/* Contact info */}
      <div className="max-w-2xl mx-auto mt-16 md:mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12 md:mb-16" />
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs tracking-[0.2em] text-primary mb-4">
            / PŘÍMO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
            <a
              href="mailto:studio@levouzadni.cz"
              className="font-body font-semibold text-xl text-foreground hover:text-primary transition-colors"
            >
              studio@levouzadni.cz
            </a>
            <a
              href="tel:+420776120555"
              className="font-body font-semibold text-xl text-foreground hover:text-primary transition-colors"
            >
              +420 776 120 555
            </a>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />
        <p className="font-mono text-xs tracking-[0.2em] text-primary mb-4">
          / FAKTURAČNÍ A IDENTIFIKAČNÍ ÚDAJE
        </p>
        <div className="font-mono text-xs">
          <p className="text-foreground font-medium mb-2">
            Mgr. Pavel Martinovský
          </p>
          <p className="text-muted-foreground">
            Hlavenec 177, 294 76 Praha-východ · IČO: 06054251 · Nejsem plátce
            DPH
          </p>
        </div>
      </div>
    </>
  );
}

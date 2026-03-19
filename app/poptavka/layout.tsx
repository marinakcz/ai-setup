import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spojme se",
  description: "Máte nápad? Projekt? Napište mi. E-mail, telefon, formulář.",
  openGraph: {
    title: "Spojme se — Levou zadní",
    description: "Máte nápad? Projekt? Napište mi.",
  },
  alternates: { canonical: "/poptavka" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spojme se",
  description: "Máte nápad? Projekt? Napište mi. E-mail, telefon, formulář — vše na jednom místě.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pod kapotou",
  description: "Jak funguje AI studio Levou zadní. Architektura, nástroje, principy.",
  openGraph: {
    title: "Pod kapotou — Levou zadní",
    description: "Jak funguje AI studio. Designér × AI.",
  },
  alternates: { canonical: "/pod-kapotou" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

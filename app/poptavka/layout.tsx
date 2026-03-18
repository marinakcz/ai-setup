import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Spojme se",
  description: "Máte nápad? Projekt? Napište mi.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

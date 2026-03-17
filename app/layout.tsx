import "./globals.css";

import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-setup-alpha.vercel.app"),
  title: "AI Studio — Autonomní systém AI agentů",
  description:
    "Zadejte úkol, AI Studio ho naplánuje, napíše kód, verzuje v Gitu a nasadí na Vercel — zcela automaticky.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "AI Studio — Autonomní systém AI agentů",
    description:
      "Zadejte úkol, AI Studio ho naplánuje, napíše kód, verzuje v Gitu a nasadí na Vercel — zcela automaticky.",
    type: "website",
    locale: "cs_CZ",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body
        className={`${jetbrainsMono.variable} ${manrope.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}

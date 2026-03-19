import "./globals.css";

import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { JetBrains_Mono, Caveat } from "next/font/google";
import localFont from "next/font/local";

const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-hand",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
});

const hkGroteskWide = localFont({
  src: [
    { path: "../public/fonts/HKGroteskWide-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-setup-alpha.vercel.app"),
  title: {
    default: "AI Studio — Autonomní systém AI agentů",
    template: "%s — AI Studio",
  },
  description:
    "Zadejte úkol, AI Studio ho naplánuje, napíše kód, verzuje v Gitu a nasadí na Vercel — zcela automaticky.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
        className={`${jetbrainsMono.variable} ${hkGroteskWide.variable} ${caveat.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <SiteNav />
        {children}
      </body>
    </html>
  );
}

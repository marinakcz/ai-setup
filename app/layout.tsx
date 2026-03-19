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
    { path: "../public/fonts/HKGroteskWide-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/HKGroteskWide-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://levouzadni.cz"),
  title: {
    default: "Levou zadní — AI studio",
    template: "%s — Levou zadní",
  },
  description:
    "Experimentální AI studio. Od nápadu k produktu. Weby, aplikace, prototypy, experimenty.",
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
    title: "Levou zadní — AI studio",
    description: "Experimentální AI studio. Od nápadu k produktu.",
    type: "website",
    locale: "cs_CZ",
    siteName: "Levou zadní",
  },
  twitter: {
    card: "summary_large_image",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Levou zadní",
                  url: "https://levouzadni.cz",
                  logo: "https://levouzadni.cz/logo-color.svg",
                  founder: {
                    "@type": "Person",
                    name: "Pavel Martinovský",
                    jobTitle: "Senior UX Designer",
                    sameAs: "https://www.linkedin.com/in/pavelmartinovsky/",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "studio@levouzadni.cz",
                    telephone: "+420776120555",
                    contactType: "customer service",
                    availableLanguage: ["cs", "en"],
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Hlavenec 177",
                    addressLocality: "Hlavenec",
                    postalCode: "294 76",
                    addressCountry: "CZ",
                  },
                  taxID: "06054251",
                },
                {
                  "@type": "WebSite",
                  name: "Levou zadní",
                  url: "https://levouzadni.cz",
                  inLanguage: "cs",
                  publisher: { "@type": "Organization", name: "Levou zadní" },
                },
              ],
            }),
          }}
        />
        <noscript><style>{`.reveal-group .reveal-item, .hero-stagger .stagger-1, .hero-stagger .stagger-2, .hero-stagger .stagger-3, .hero-stagger .stagger-4, .hero-stagger .stagger-5 { opacity: 1 !important; transform: none !important; animation: none !important; }`}</style></noscript>
      </head>
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

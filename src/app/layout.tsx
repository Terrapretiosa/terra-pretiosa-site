import type { Metadata } from "next";
import { Barlow, Lora } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: {
    default: "Terra Pretiosa",
    template: "%s | Terra Pretiosa",
  },
  description:
    "Terra Pretiosa — Mining services, mineral governance, and raw materials consulting across Africa and beyond.",
  metadataBase: new URL("https://terra-pretiosa.com"),
  openGraph: {
    type: "website",
    siteName: "Terra Pretiosa",
    title: "Terra Pretiosa",
    description:
      "Mining services, mineral governance, and raw materials consulting across Africa and beyond.",
    locale: "fr_FR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terra Pretiosa",
    description:
      "Mining services, mineral governance, and raw materials consulting across Africa and beyond.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${barlow.variable} ${lora.variable} font-[var(--font-barlow)] antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { BackToTop } from "@/components/layout/back-to-top";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { site } from "@/lib/data/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.glsfinvest.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.legalName} | Real Estate & Investment Since 2009`,
    template: `%s | ${site.legalName}`,
  },
  description: site.description,
  keywords: [
    "GLS Finvest",
    "real estate Visakhapatnam",
    "villa projects Vizag",
    "open plots Visakhapatnam",
    "investment advisory Andhra Pradesh",
    "commercial real estate Vizag",
  ],
  authors: [{ name: site.legalName }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${site.legalName} | Real Estate & Investment Since 2009`,
    description: site.description,
    siteName: site.legalName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} | Real Estate & Investment Since 2009`,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}

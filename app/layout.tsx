import type { Metadata } from "next";
import { fontVars } from "@/lib/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HashScroll from "@/components/HashScroll";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: { default: "Chosen and Cherished | Supporting Mothers & Families", template: "%s | Chosen and Cherished" },
  description: "Providing essential baby supplies, resources, and compassionate support to pregnant mothers and families experiencing financial hardship.",
  keywords: ["nonprofit", "charity", "baby supplies", "pregnancy support", "family support"],
  openGraph: { type: "website", locale: "en_US", siteName: "Chosen and Cherished" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <body className="min-h-screen flex flex-col bg-cream-50">
        <Banner />
        <Header />
        <HashScroll />
        <main id="main-content" className="flex-grow scroll-mt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

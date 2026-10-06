import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Chosen and Cherished | Supporting Mothers & Families",
    template: "%s | Chosen and Cherished",
  },
  description:
    "Providing essential baby supplies, resources, and compassionate support to pregnant mothers and families experiencing financial hardship.",
  keywords: [
    "nonprofit",
    "charity",
    "baby supplies",
    "pregnancy support",
    "family support",
    "diapers",
    "formula",
    "community support",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Chosen and Cherished",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Banner */}
        <img
          src="/banner.png"
          alt="Chosen and Cherished"
          className="w-full"
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

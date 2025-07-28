import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ExitIntentProvider from "./ExitIntentProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Socialmat | Růst brandů díky Instagramu a webu",
  description:
    "Pomáháme brandům zvýšit prodeje spojením síly sociálních sítí a konverzního webu. Garance výsledků nebo vracíme peníze.",
  keywords:
    "instagram marketing, sociální sítě, brand marketing, růst prodejů, web optimalizace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph image for sharing */}
        <meta property="og:image" content="/og-image.jpg" />
      </head>
      <body className={`${dmSans.variable} ${outfit.variable} antialiased`}>
        <Navbar />
        <ExitIntentProvider>
          {children}
        </ExitIntentProvider>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

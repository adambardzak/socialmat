import LeadMagnetFunnel from "@/components/LeadMagnetFunnel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎁 ZDARMA Instagram Audit | SocialMat",
  description: "Získejte personalizovanou analýzu vašeho Instagramu zdarma! Audit v hodnotě 7.500 Kč do 24 hodin.",
  keywords: "instagram audit zdarma, instagram marketing, více followers, analýza instagramu",
  openGraph: {
    title: "🎁 ZDARMA Instagram Audit v hodnotě 7.500 Kč",
    description: "Personalizovaná analýza + konkrétní plán pro růst",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AuditPage() {
  return <LeadMagnetFunnel />;
}

import LeadMagnetFunnel from "@/components/LeadMagnetFunnel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZDARMA Instagram Audit v hodnotě 7.500 Kč | SocialMat",
  description: "Získejte personalizovanou analýzu vašeho Instagramu + konkrétní plán, jak zvýšit prodeje o 50-200% během 90 dní. Audit zdarma do 24 hodin!",
  keywords: "instagram audit, instagram marketing, sociální sítě, růst instagramu, více followers, prodeje z instagramu",
  openGraph: {
    title: "ZDARMA Instagram Audit v hodnotě 7.500 Kč",
    description: "Personalizovaná analýza + plán pro zvýšení prodejů o 50-200%",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FunnelPage() {
  return <LeadMagnetFunnel />;
}

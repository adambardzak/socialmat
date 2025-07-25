"use client";

import { DM_Sans, Outfit } from "next/font/google";
import { motion } from "framer-motion";
import Container from "./Container";
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";

// Inicializace fontů
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const trustMetrics = [
  {
    icon: Users,
    number: "50+",
    label: "Spokojených klientů",
    description: "Důvěra desítek brandů"
  },
  {
    icon: TrendingUp,
    number: "150%",
    label: "Průměrný nárůst prodejů",
    description: "Měřitelné výsledky"
  },
  {
    icon: Award,
    number: "3 roky",
    label: "Zkušeností na trhu",
    description: "Ověřená expertiza"
  },
  {
    icon: CheckCircle,
    number: "100%",
    label: "Transparentnost",
    description: "Pravidelné reporty"
  }
];

const TrustSignals = () => {
  return (
    <section className="py-12 lg:py-16 bg-white border-t border-gray-100">
      <Container className="max-w-[78rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`${outfit.className} text-2xl md:text-3xl font-bold text-gray-900 mb-4`}>
            Proč nám věří desítky brandů?
          </h2>
          <p className={`${dmSans.className} text-gray-600 max-w-2xl mx-auto`}>
            Jsme transparentní agentura s prokazatelnými výsledky a dlouhodobými klienty
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className={`${outfit.className} text-2xl md:text-3xl font-bold text-gray-900 mb-1`}>
                  {metric.number}
                </div>
                <div className={`${dmSans.className} text-sm font-semibold text-gray-900 mb-1`}>
                  {metric.label}
                </div>
                <div className={`${dmSans.className} text-xs text-gray-600`}>
                  {metric.description}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Anti-scam messaging */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl p-6 lg:p-8 border border-gray-200"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className={`${outfit.className} text-lg font-bold text-gray-900 mb-2`}>
                Skutečná agentura s IČO, sídlem a referencemi
              </h3>
              <p className={`${dmSans.className} text-gray-600 leading-relaxed`}>
                Na rozdíl od pochybných &ldquo;growth hackerů&rdquo; jsme oficiálně zaregistrovaná společnost s transparentními cenami, 
                smlouvou a možností ukončení spolupráce. Neprodáváme &ldquo;tajné triky&rdquo; ani &ldquo;overnight success&rdquo; - 
                poskytujeme profesionální marketingové služby s měřitelnými výsledky.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TrustSignals;

"use client";

import { DM_Sans, Outfit } from "next/font/google";
import { motion } from "framer-motion";
import Container from "./Container";
import { Calculator, TrendingUp, Shield, Clock } from "lucide-react";

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

const investmentFeatures = [
  {
    icon: Calculator,
    title: "Individuální kalkulace",
    description: "Každý projekt kalkulujeme na míru podle rozsahu práce, cílů a rozpočtu"
  },
  {
    icon: TrendingUp,
    title: "ROI zaměření",
    description: "Investice se obvykle vrátí během 3-6 měsíců díky nárůstu prodejů"
  },
  {
    icon: Shield,
    title: "Transparentní ceny",
    description: "Žádné skryté poplatky. Vše jasně sjednáno ve smlouvě"
  },
  {
    icon: Clock,
    title: "Flexibilní spolupráce",
    description: "Měsíční platby, možnost úprav rozsahu podle potřeb"
  }
];

const InvestmentInfo = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Container className="max-w-[78rem]">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${dmSans.className} inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4`}
          >
            Investice do růstu
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${outfit.className} text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-4`}
          >
            Kolik stojí profesionální Instagram marketing?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${dmSans.className} text-lg text-gray-600 max-w-3xl mx-auto`}
          >
            Každý projekt je unikátní. Cena závisí na velikosti vašeho businessu, cílech a rozsahu služeb.
          </motion.p>
        </div>

        {/* Orientační rozpětí */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-12 text-center border border-gray-200"
        >
          <h3 className={`${outfit.className} text-2xl md:text-3xl font-bold text-gray-900 mb-4`}>
            Orientační rozpětí investice
          </h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className={`${outfit.className} text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500`}>
              15 000 - 45 000 Kč
            </div>
            <div className={`${dmSans.className} text-gray-600`}>
              / měsíc
            </div>
          </div>
          <p className={`${dmSans.className} text-gray-600 max-w-2xl mx-auto mb-8`}>
            Finální cena závisí na rozsahu projektu, počtu platforem, složitosti webu a vašich obchodních cílech. 
            Během bezplatné konzultace vám připravíme přesnou kalkulaci.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className={`${outfit.className} font-bold text-gray-900 mb-2`}>Menší projekty</h4>
              <p className={`${dmSans.className} text-sm text-gray-600 mb-2`}>15 000 - 25 000 Kč/měsíc</p>
              <p className={`${dmSans.className} text-sm text-gray-600`}>
                Základní Instagram management + web optimalizace
              </p>
            </div>
            
            <div className="p-4 bg-indigo-50 rounded-lg border-2 border-indigo-200">
              <h4 className={`${outfit.className} font-bold text-indigo-900 mb-2`}>Středné projekty</h4>
              <p className={`${dmSans.className} text-sm text-indigo-700 mb-2`}>25 000 - 35 000 Kč/měsíc</p>
              <p className={`${dmSans.className} text-sm text-indigo-700`}>
                Kompletní Instagram strategie + pokročilá web optimalizace
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className={`${outfit.className} font-bold text-gray-900 mb-2`}>Velké projekty</h4>
              <p className={`${dmSans.className} text-sm text-gray-600 mb-2`}>35 000 - 45 000 Kč/měsíc</p>
              <p className={`${dmSans.className} text-sm text-gray-600`}>
                Multi-platform marketing + e-commerce optimalizace
              </p>
            </div>
          </div>
        </motion.div>

        {/* Funkce */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {investmentFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className={`${outfit.className} text-lg font-bold text-gray-900 mb-2`}>
                  {feature.title}
                </h3>
                <p className={`${dmSans.className} text-sm text-gray-600`}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-200">
            <h3 className={`${outfit.className} text-xl md:text-2xl font-bold text-gray-900 mb-4`}>
              Chcete znát přesnou cenu pro váš projekt?
            </h3>
            <p className={`${dmSans.className} text-gray-600 mb-6 leading-relaxed`}>
              Během 30minutové konzultace zdarma probereme vaše cíle a připravíme kalkulaci na míru
            </p>
            
            <button
              className={`${outfit.className} px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transform hover:translate-y-[-2px]`}
            >
              Získat kalkulaci zdarma
            </button>
            
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className={`${dmSans.className} text-gray-600 text-sm`}>
                Bez závazků • Konkrétní čísla • Do 24 hodin
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default InvestmentInfo;

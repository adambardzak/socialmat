"use client";

import { DM_Sans, Outfit } from "next/font/google";
import { motion } from "framer-motion";
import Container from "./Container";
import { 
  Play, 
  Users, 
  Target, 
  TrendingUp, 
  Link2, 
  Megaphone, 
  BarChart3, 
  Settings, 
  Brain, 
  Zap, 
  Shield, 
  Gauge 
} from "lucide-react";

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

// Data pro služby
const services = [
  {
    id: 1,
    title: "Vytváříme potenciální zákazníky na Instagramu",
    description: "Produkujeme virální obsah a budujeme komunitu lidí, kteří se zajímají o vaše produkty nebo služby.",
    features: [
      {
        text: "Virální video obsah",
        description: "Vytváříme videa, která se organicky šíří a přivádějí tisíce nových sledujících",
        icon: Play
      },
      {
        text: "Budování komunity",
        description: "Vytváříme loajální sledující, kteří se skutečně zajímají o vaši značku",
        icon: Users
      },
      {
        text: "Cílené oslovení",
        description: "Oslovujeme přesně ty lidi, kteří mají zájem o vaše produkty",
        icon: Target
      },
      {
        text: "Organický růst",
        description: "Růst bez placených reklam - pouze kvalitní obsah a komunita",
        icon: TrendingUp
      }
    ],
    color: "pink"
  },
  {
    id: 2,
    title: "Směrujeme je na vaše webové stránky",
    description: "Pomocí strategicky umístěných odkazů a call-to-action vedeme zaujatou komunitu na vaše webové stránky.",
    features: [
      {
        text: "Strategické odkazy",
        description: "Umísťujeme odkazy tak, aby přivedli maximum návštěvníků",
        icon: Link2
      },
      {
        text: "Call-to-action",
        description: "Vytváříme přesvědčivé výzvy k akci, které lidi dovedou na web",
        icon: Megaphone
      },
      {
        text: "Trackování návštěvnosti",
        description: "Sledujeme, kolik lidí přišlo z Instagramu na vaše stránky",
        icon: BarChart3
      },
      {
        text: "Optimalizace přechodů",
        description: "Neustále vylepšujeme proces přechodu z Instagramu na web",
        icon: Settings
      }
    ],
    color: "blue"
  },
  {
    id: 3,
    title: "Přeměňujeme je na kupující zákazníky",
    description: "Optimalizujeme webové stránky tak, aby návštěvníci z Instagramu nakoupili. Každý element má svůj důvod.",
    features: [
      {
        text: "Psychologie prodeje",
        description: "Používáme ověřené principy, které motivují lidi k nákupu",
        icon: Brain
      },
      {
        text: "Optimalizace konverzí",
        description: "Testujeme a vylepšujeme každý element pro maximální prodeje",
        icon: Zap
      },
      {
        text: "Důvěryhodnost",
        description: "Budujeme důvěru pomocí recenzí, certifikátů a transparentnosti",
        icon: Shield
      },
      {
        text: "Rychlé načítání",
        description: "Rychlé stránky = více prodejů. Optimalizujeme rychlost načítání",
        icon: Gauge
      }
    ],
    color: "green"
  }
];

// Moderní komponenta s osobností
const Process = () => {
  return (
    <section className="py-20 lg:py-32 bg-white" id="sluzby">
      <Container className="max-w-[78rem]">
        {/* Hlavní nadpis */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className={`${outfit.className} text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-6`}>
              Jak to funguje?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${dmSans.className} text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-6`}
          >
            Tři kroky, kterými vám pomůžeme vydělat peníze na Instagramu
          </motion.p>
        </div>

        {/* Proces flow */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-600 to-blue-500"></div>
          
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-20 last:mb-0 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-full lg:w-1/2 ${
                index % 2 === 0 ? 'lg:pr-20' : 'lg:pl-20'
              }`}>
                <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 hover:bg-gray-100 transition-colors duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl ${
                      service.id === 1 
                        ? "bg-gradient-to-r from-indigo-600 to-blue-500" 
                        : service.id === 2 
                        ? "bg-gradient-to-r from-indigo-600 to-blue-500" 
                        : "bg-gradient-to-r from-indigo-600 to-blue-500"
                    }`}>
                      {service.id}
                    </div>
                    <div>
                      <h3 className={`${outfit.className} text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight`}>
                        {service.title}
                      </h3>
                      <p className={`${dmSans.className} text-gray-600 text-lg leading-relaxed`}>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => {
                      const IconComponent = feature.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors duration-200"
                        >
                          <div className="w-5 h-5 mt-0.5 text-indigo-600 flex-shrink-0">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`${dmSans.className} text-base font-semibold text-gray-900 mb-1`}>
                              {feature.text}
                            </h4>
                            <p className={`${dmSans.className} text-sm text-gray-600 leading-relaxed`}>
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Center circle */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-indigo-600 rounded-full items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl p-10 lg:p-12 max-w-2xl mx-auto border border-gray-200">
            <h3 className={`${outfit.className} text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-4`}>
              Připraveni začít vydělávat více?
            </h3>
            <p className={`${dmSans.className} text-gray-600 text-lg mb-6 leading-relaxed`}>
              Nechte konkurenci za sebou. Získejte konkrétní plán na zvýšení prodejů pomocí Instagramu a optimalizace webu.
            </p>
            
            <button
              className={`${outfit.className} px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transform hover:translate-y-[-2px]`}
            >
              Chci zvýšit prodeje
            </button>
            
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className={`${dmSans.className} text-gray-600 text-sm`}>
                Zdarma • 30 minut • Bez závazků
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Process;

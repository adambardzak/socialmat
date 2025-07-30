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
  Gauge,
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
    description:
      "Produkujeme virální obsah a budujeme komunitu lidí, kteří se zajímají o vaše produkty nebo služby.",
    features: [
      {
        text: "Virální video obsah",
        description:
          "Vytváříme videa, která se organicky šíří a přivádějí tisíce nových sledujících",
        icon: Play,
      },
      {
        text: "Budování komunity",
        description:
          "Vytváříme loajální sledující, kteří se skutečně zajímají o vaši značku",
        icon: Users,
      },
      {
        text: "Cílené oslovení",
        description:
          "Oslovujeme přesně ty lidi, kteří mají zájem o vaše produkty",
        icon: Target,
      },
      {
        text: "Organický růst",
        description:
          "Růst bez placených reklam - pouze kvalitní obsah a komunita",
        icon: TrendingUp,
      },
    ],
    color: "blue",
  },
  {
    id: 2,
    title: "Směrujeme je na vaše webové stránky",
    description:
      "Pomocí strategicky umístěných odkazů a call-to-action vedeme zaujatou komunitu na vaše webové stránky.",
    features: [
      {
        text: "Strategické odkazy",
        description: "Umísťujeme odkazy tak, aby přivedli maximum návštěvníků",
        icon: Link2,
      },
      {
        text: "Call-to-action",
        description:
          "Vytváříme přesvědčivé výzvy k akci, které lidi dovedou na web",
        icon: Megaphone,
      },
      {
        text: "Trackování návštěvnosti",
        description:
          "Sledujeme, kolik lidí přišlo z Instagramu na vaše stránky",
        icon: BarChart3,
      },
      {
        text: "Optimalizace přechodů",
        description: "Neustále vylepšujeme proces přechodu z Instagramu na web",
        icon: Settings,
      },
    ],
    color: "blue",
  },
  {
    id: 3,
    title: "Přeměňujeme je na kupující zákazníky",
    description:
      "Optimalizujeme webové stránky tak, aby návštěvníci z Instagramu nakoupili. Každý element má svůj důvod.",
    features: [
      {
        text: "Psychologie prodeje",
        description: "Používáme ověřené principy, které motivují lidi k nákupu",
        icon: Brain,
      },
      {
        text: "Optimalizace konverzí",
        description:
          "Testujeme a vylepšujeme každý element pro maximální prodeje",
        icon: Zap,
      },
      {
        text: "Důvěryhodnost",
        description:
          "Budujeme důvěru pomocí recenzí, certifikátů a transparentnosti",
        icon: Shield,
      },
      {
        text: "Rychlé načítání",
        description:
          "Rychlé stránky = více prodejů. Optimalizujeme rychlost načítání",
        icon: Gauge,
      },
    ],
    color: "blue",
  },
];

// Moderní komponenta s osobností
const Process = () => {
  return (
    <section className="py-20 lg:py-32 bg-white" id="process">
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
            <h2
              className={`${outfit.className} text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-6`}
            >
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
            3 kroky, kterými vám pomůžeme vydělat peníze na Instagramu
          </motion.p>
        </div>

        {/* Proces flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute left-12 top-8 bottom-8 w-0.5 bg-gradient-to-b from-indigo-600 via-blue-500 to-indigo-600"></div>

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-16 last:mb-0"
            >
              {/* Step indicator */}
              <div className="flex flex-col lg:flex-row items-start gap-6">
                {/* Step number */}
                <div className="flex-shrink-0 relative flex justify-center lg:block mb-4 lg:mb-0">
                  <div
                    className={`w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg ${"bg-gradient-to-br from-blue-500 to-indigo-500"} ${
                      outfit.className
                    }`}
                  >
                    {service.id}
                  </div>
                  {/* Pulse effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl animate-pulse opacity-20 ${"bg-blue-500"}`}
                  ></div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="mb-6">
                      <h3
                        className={`${outfit.className} text-xl lg:text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`${dmSans.className} text-gray-600 text-base lg:text-lg leading-relaxed`}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => {
                        const IconComponent = feature.icon;
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2 + idx * 0.1,
                            }}
                            className="flex items-start gap-3 p-4 rounded-xl bg-white/50 hover:bg-white transition-all duration-200 border border-gray-100"
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${"bg-blue-100 text-blue-600"}`}
                            >
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div>
                              <h4
                                className={`${dmSans.className} text-base font-semibold text-gray-900 mb-1`}
                              >
                                {feature.text}
                              </h4>
                              <p
                                className={`${dmSans.className} text-sm text-gray-600 leading-relaxed`}
                              >
                                {feature.description}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow connector (except for last item) */}
              {index < services.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
              )}
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
            <h3
              className={`${outfit.className} text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-4`}
            >
              Připraveni začít vydělávat více?
            </h3>
            <p
              className={`${dmSans.className} text-gray-600 text-lg mb-6 leading-relaxed`}
            >
              Nechte konkurenci za sebou. Získejte konkrétní plán na zvýšení
              prodejů pomocí Instagramu a optimalizace webu.
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

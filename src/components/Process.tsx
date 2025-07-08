"use client";

import { DM_Sans, Outfit } from "next/font/google";
import { motion } from "framer-motion";
import Container from "./Container";

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

// Data pro kroky procesu
const processSteps = [
  {
    id: 1,
    title: "Analýza a strategie",
    description:
      "Získáte detailní analýzu vašeho e-shopu a navrhneme strategii na míru s jasnými cíli a garancí výsledků.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    features: [
      "Datově řízené rozhodování",
      "Strategie na míru",
      "Garance výsledků",
    ],
    color: "indigo",
  },
  {
    id: 2,
    title: "Virální obsah & optimalizace",
    description:
      "Vytvoříme virální Instagram videa a optimalizujeme web pro maximální konverze a růst.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    features: ["Vytvoření virálního obsahu", "Optimalizace webu"],
    color: "blue",
  },
  {
    id: 3,
    title: "Garance růstu",
    description:
      "Garantujeme konkrétní nárůst tržeb nebo vracíme peníze. Vše podloženo reálnými daty a social proof.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    features: ["Datové základy", "Social proof"],
    color: "violet",
  },
];

// Profesionální komponenta Process
const Process = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container className="max-w-[78rem]">
        <div className="text-center mb-16">
          <h2
            className={`${outfit.className} text-3xl md:text-4xl font-bold text-gray-900 mb-4`}
          >
            Jak naše spolupráce funguje?
          </h2>
          <p
            className={`${dmSans.className} text-lg text-gray-600 max-w-3xl mx-auto`}
          >
            Náš osvědčený proces v 3 krocích, který vám zajistí růst prodejů bez
            zbytečných komplikací a s jasnými výsledky.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line between steps */}
          <div className="hidden md:block absolute left-1/2 top-4 h-3/4 bottom-0 w-px bg-gray-200 -translate-x-1/2 z-0"></div>

          {/* Process steps */}
          <div className="relative z-10 space-y-20">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`grid md:grid-cols-2 gap-x-16 gap-y-8 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step content */}
                  <div
                    className={`${
                      index % 2 === 1 ? "md:text-right col-1" : "col-2"
                    }`}
                  >
                    <h3
                      className={`${outfit.className} text-2xl font-bold text-gray-900 mb-2`}
                    >
                      <span className={`text-indigo-600`}>{step.title}</span>
                    </h3>

                    <p className={`${dmSans.className} text-gray-600 mb-6`}>
                      {step.description}
                    </p>

                    <div
                      className={`grid grid-cols-1 gap-y-2 ${
                        index % 2 === 1 ? "md:justify-items-end" : ""
                      }`}
                    >
                      {step.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center ${
                            index % 2 === 1 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <div
                            className={`w-5 h-5 ${
                              index % 2 === 1 ? "md:ml-2" : "mr-2"
                            } rounded-full bg-indigo-100 flex items-center justify-center`}
                          >
                            <svg
                              className={`w-3 h-3 text-indigo-600`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span
                            className={`${dmSans.className} text-sm font-medium text-gray-700`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA button */}
          <div className="text-center mt-20 pt-6 relative">
            <motion.button
              className={`${outfit.className} px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Začít spolupráci
            </motion.button>

            <p className={`${dmSans.className} mt-4 text-gray-500 text-sm`}>
              Konzultace nezávazná a zdarma
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;

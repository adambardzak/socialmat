"use client";

import { DM_Sans, Outfit } from "next/font/google";
import { motion } from "framer-motion";
import Container from "./Container";
import { useState } from "react";

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

// Data pro cenové tarify
const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    description: "Pro nově začínající e-shopy",
    price: "12 900",
    period: "měsíčně",
    popular: false,
    features: [
      { included: true, text: "Analýza konkurence" },
      { included: true, text: "Instagram strategie" },
      { included: true, text: "5 videí měsíčně" },
      { included: true, text: "Základní optimalizace webu" },
      { included: false, text: "Pokročilá analýza dat" },
      { included: false, text: "Remarketing" },
      { included: false, text: "Prioritní podpora" },
      { included: false, text: "Osobní konzultace" },
    ],
    cta: "Vybrat Basic",
    color: "indigo",
  },
  {
    id: "business",
    name: "Business",
    description: "Pro rostoucí e-shopy s potenciálem",
    price: "24 900",
    period: "měsíčně",
    popular: true,
    features: [
      { included: true, text: "Analýza konkurence" },
      { included: true, text: "Instagram strategie" },
      { included: true, text: "10 videí měsíčně" },
      { included: true, text: "Kompletní optimalizace webu" },
      { included: true, text: "Pokročilá analýza dat" },
      { included: true, text: "Remarketing" },
      { included: false, text: "Prioritní podpora" },
      { included: false, text: "Osobní konzultace" },
    ],
    cta: "Vybrat Business",
    color: "indigo",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Pro etablované e-shopy s vysokým obratem",
    price: "39 900",
    period: "měsíčně",
    popular: false,
    features: [
      { included: true, text: "Analýza konkurence" },
      { included: true, text: "Instagram strategie" },
      { included: true, text: "15 videí měsíčně" },
      { included: true, text: "Kompletní optimalizace webu" },
      { included: true, text: "Pokročilá analýza dat" },
      { included: true, text: "Remarketing" },
      { included: true, text: "Prioritní podpora 24/7" },
      { included: true, text: "Osobní konzultace 2x měsíčně" },
    ],
    cta: "Vybrat Enterprise",
    color: "indigo",
  },
];

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="cenik" className="py-16 lg:py-24 bg-white">
      <Container className="max-w-[78rem]">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${dmSans.className} inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4`}
          >
            Ceník služeb
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${outfit.className} text-3xl md:text-4xl font-bold text-gray-900 mb-4`}
          >
            Investice do vašeho růstu
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${dmSans.className} text-lg text-gray-600 max-w-3xl mx-auto`}
          >
            Vyberte si balíček, který nejlépe odpovídá potřebám vašeho e-shopu. Všechny plány obsahují
            možnost ukončení spolupráce bez výpovědní lhůty.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center mt-8 mb-12"
          >
            <span
              className={`${dmSans.className} mr-3 ${
                billingPeriod === "monthly" ? "text-gray-900 font-medium" : "text-gray-500"
              }`}
            >
              Měsíční platba
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${
                billingPeriod === "yearly" ? "bg-indigo-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === "yearly" ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`${dmSans.className} ml-3 flex items-center ${
                billingPeriod === "yearly" ? "text-gray-900 font-medium" : "text-gray-500"
              }`}
            >
              Roční platba
              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Sleva 20%
              </span>
            </span>
          </motion.div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
              <div
                className={`h-full flex flex-col rounded-2xl border ${
                  plan.popular
                    ? "border-indigo-200 bg-gradient-to-br from-white to-indigo-50 shadow-lg shadow-indigo-100/40"
                    : "border-gray-200 bg-white"
                } overflow-hidden`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-1.5 px-4 text-sm text-center font-medium">
                    Nejpopulárnější volba
                  </div>
                )}
                
                <div className="p-6 md:p-8 flex-grow">
                  <h3 className={`${outfit.className} text-xl font-bold text-gray-900`}>{plan.name}</h3>
                  <p className={`${dmSans.className} text-gray-500 mt-1 mb-6`}>{plan.description}</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className={`${outfit.className} text-4xl font-bold ${plan.popular ? "text-indigo-600" : "text-gray-900"}`}>
                      {billingPeriod === "yearly" ? Math.round(parseInt(plan.price.replace(/\s/g, '')) * 0.8).toLocaleString('cs-CZ') : plan.price} Kč
                    </span>
                    <span className={`${dmSans.className} text-gray-500 ml-2`}>/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          {feature.included ? (
                            <svg className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </div>
                        <span
                          className={`${dmSans.className} ml-2 ${
                            feature.included ? "text-gray-700" : "text-gray-400"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 md:px-8 md:pb-8 pt-0 mt-auto">
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white shadow-md"
                        : "bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                    } ${outfit.className}`}
                  >
                    {plan.cta}
                  </button>

                  {plan.popular && (
                    <p className={`${dmSans.className} text-xs text-center mt-3 text-gray-500`}>
                      Nejčastěji vybíraný balíček
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ section */}
        <div className="mt-20 pt-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className={`${outfit.className} text-2xl font-bold text-gray-900 mb-3`}>
              Časté dotazy k ceníku
            </h3>
            <p className={`${dmSans.className} text-gray-600`}>
              Odpovědi na nejčastější otázky ohledně našich služeb
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="border-b border-gray-200 pb-6"
            >
              <h4 className={`${outfit.className} font-bold text-gray-900 mb-2`}>
                Mohu změnit balíček v průběhu spolupráce?
              </h4>
              <p className={`${dmSans.className} text-gray-600`}>
                Ano, balíček můžete kdykoliv změnit. Změny provádíme vždy k začátku následujícího měsíce.
                Stačí nás kontaktovat a domluvit se na podrobnostech.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="border-b border-gray-200 pb-6"
            >
              <h4 className={`${outfit.className} font-bold text-gray-900 mb-2`}>
                Jak probíhá ukončení spolupráce?
              </h4>
              <p className={`${dmSans.className} text-gray-600`}>
                Spolupráci můžete ukončit kdykoliv bez výpovědní lhůty. Stačí nás písemně informovat
                do konce měsíce a spolupráce bude ukončena k poslednímu dni v měsíci.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h4 className={`${outfit.className} font-bold text-gray-900 mb-2`}>
                Jak je to s garancí výsledků?
              </h4>
              <p className={`${dmSans.className} text-gray-600`}>
                Všechny balíčky obsahují garanci růstu. Pokud za 3 měsíce nedosáhneme
                prokazatelného růstu tržeb o minimálně 10%, vrátíme vám poplatky za poslední měsíc
                spolupráce. Podmínky garance se liší podle zvoleného balíčku.
              </p>
            </motion.div>
          </div>
          
          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className={`${dmSans.className} text-lg text-gray-700 mb-4`}>
              Potřebujete individuální řešení na míru?
            </p>
            <a
              href="#kontakt"
              className={`${outfit.className} inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors`}
            >
              Kontaktujte nás
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;

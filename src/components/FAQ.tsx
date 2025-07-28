"use client";

import { DM_Sans, Outfit } from "next/font/google";
import { motion } from "framer-motion";
import Container from "./Container";
import { FAQItem } from "./FAQItem";

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

export default function FAQ() {
  const faqs = [
    {
      question: "Jak dlouho trvá, než uvidíme první výsledky?",
      answer:
        "První výsledky na Instagramu obvykle vidíme do 2-4 týdnů - nárůst sledujících a engagement. Traffic na web se začne zvyšovat během prvního měsíce. Skutečný nárůst prodejů a konverzí se projeví po 6-12 týdnech, kdy se rozbíhá celý systém od Instagramu až po optimalizovaný web.",
    },
    {
      question: "Kolik stojí vaše služby?",
      answer:
        "Každý projekt kalkulujeme individuálně podle rozsahu práce, vašich cílů a rozpočtu. Orientačně se pohybujeme v desítkách tisíc měsíčně. Během bezplatné konzultace vám připravíme přesnou kalkulaci na míru vašemu projektu. Investice se obvykle vrátí během 3-6 měsíců.",
    },
    {
      question: "Kolik času musíme investovat do spolupráce?",
      answer:
        "Z vaší strany potřebujeme minimální čas. Zpočátku 2-3 hodiny pro konzultaci a předání materiálů. Poté jen schvalování obsahu (15-30 minut týdně) a poskytování zpětné vazby. My se staráme o vytváření obsahu, optimalizaci a celý marketing.",
    },
    {
      question: "Jak funguje tvorba obsahu pro Instagram?",
      answer:
        "Vytváříme kompletní strategii obsahu založenou na analýze vaší cílové skupiny a konkurence. Produkujeme virální videa, grafiky a texty. Vše ladíme s vaší značkou a produkty. Obsah optimalizujeme každý týden a důkladně analyzujeme veškeré výsledky.",
    },
    {
      question: "Co když nemáme kvalitní webové stránky?",
      answer:
        "Žádný problém! Optimalizace webu je součástí našich služeb. Pokud máte zastaralý nebo špatně konvertující web, pomůžeme s redesignem nebo doporučíme řešení. Důležité je, aby web dokázal přeměnit návštěvníky z Instagramu na zákazníky.",
    },
    {
      question: "Garantujete konkrétní výsledky?",
      answer:
        "Garantujeme profesionální přístup, pravidelné reporty a transparentní komunikaci. Konkrétní čísla závisí na mnoha faktorech (produkt, cena, konkurence, rozpočet). Nicméně naši klienti obvykle vidí 150-300% nárůst organic dosahu a 50-150% nárůst prodejů během prvních 6 měsíců.",
    },
    {
      question: "Můžeme spolupráci kdykoliv ukončit?",
      answer:
        "Ano, spolupráci lze ukončit s měsíční výpovědní lhůtou. Nevážeme vás dlouhodobými smlouvami. Jsme si jistí kvalitou našich služeb a věříme, že budete s výsledky spokojeni. Po ukončení vám předáme všechny vytvořené materiály a strategie.",
    },
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <Container className="max-w-[78rem]">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${dmSans.className} inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4`}
          >
            Často kladené otázky
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${outfit.className} text-3xl md:text-4xl font-bold text-gray-900 mb-4`}
          >
            Máte otázky? Zde jsou odpovědi
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${dmSans.className} text-lg text-gray-600 max-w-3xl mx-auto`}
          >
            Odpovědi na nejčastější otázky o našich službách a spolupráci
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-10 max-w-2xl mx-auto border border-gray-200">
            <h3
              className={`${outfit.className} text-xl md:text-2xl font-bold text-gray-900 mb-4`}
            >
              Nenašli jste odpověď na svou otázku?
            </h3>
            <p
              className={`${dmSans.className} text-gray-600 mb-6 leading-relaxed`}
            >
              Neváhejte nás kontaktovat přímo, rádi zodpovíme jakékoliv dotazy
            </p>

            <button
              className={`${outfit.className} px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transform hover:translate-y-[-2px]`}
            >
              Kontaktovat nás
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

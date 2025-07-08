"use client";

/**
 * Hero komponenta - úvodní sekce landing page pro majitele e-shopů
 * Zobrazuje hlavní hodnotu služby a CTA pro zvýšení konverzí
 * Využívá kombinaci fontů DM Sans (čistý a moderní) a Outfit (hravější pro nadpisy)
 */

import React from "react";
import Image from "next/image";
import { DM_Sans, Outfit } from "next/font/google";

// Inicializace fontu DM Sans pro tělo a běžný text
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Inicializace fontu Outfit pro nadpisy - hravější, ale stále profesionální
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const Hero: React.FC = () => {
  // Funkce pro scrollování na kontaktní sekci
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto justify-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 lg:pr-10">
            {/* Hlavní nadpis s animací barev */}
            <h1
              className={`${outfit.className} text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 leading-tight tracking-tight`}
            >
              Zvyšujeme prodeje e-shopům díky Instagramu a&nbsp;webu
            </h1>

            {/* Podnadpis */}
            <p
              className={`${dmSans.className} text-lg md:text-xl lg:text-2xl mb-8 text-gray-600 max-w-xl lg:max-w-none font-normal`}
            >
              Spojujeme sílu sociálních sítí a konverzního webu – zákazníky
              přivedeme i&nbsp;přesvědčíme.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* CTA tlačítko s gradientem */}
              <button
                onClick={() => scrollTo("#kontakt")}
                className={`${outfit.className} w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transform hover:translate-y-[-2px]`}
                aria-label="Přejít na kontaktní formulář"
              >
                Chci zvýšit prodeje
              </button>

              {/* Sekundární akce */}
              <button
                onClick={() => scrollTo("#sluzby")}
                className={`${dmSans.className} w-full sm:w-auto px-6 py-3.5 text-indigo-600 font-semibold border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-300`}
              >
                Zjistit více
              </button>
            </div>

            {/* Doplňková informace pod tlačítkem s ikonami */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-gray-600">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-blue-300 border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className={`${dmSans.className} ml-2 text-sm font-medium`}>
                Pomáháme <span className="font-bold text-indigo-600">50+</span>{" "}
                e-shopům po celé ČR
              </p>
            </div>
          </div>

          {/* Ilustrační grafika */}
          <div className="lg:w-1/3 relative">
            <Image
              src="/iPhone.png"
              alt="E-shop vizualizace"
              width={600}
              height={600}
              className="relative mx-auto h-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

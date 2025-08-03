"use client";

/**
 * Hero komponenta - úvodní sekce landing page pro majitele e-shopů
 * Zobrazuje hlavní hodnotu služby a CTA pro zvýšení konverzí
 * Využívá kombinaci fontů DM Sans (čistý a moderní) a Outfit (hravější pro nadpisy)
 */

import React from "react";
import { motion } from "framer-motion";
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

  // Loader state
  const [loading, setLoading] = React.useState(true);
  const [logoToNavbar, setLogoToNavbar] = React.useState(false);

  React.useEffect(() => {
    // Simulate loading, or use window.onload for real
    const handleLoad = () => {
      setTimeout(() => {
        setLogoToNavbar(true);
        window.dispatchEvent(new Event("logoToNavbar"));
        setTimeout(() => setLoading(false), 600); // logo animates to navbar, then hide loader
      }, 1200); // loader visible for 1.2s
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ${
          loading
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <span
          className={`text-4xl md:text-6xl font-extrabold ${
            outfit.className
          } bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text transition-all duration-700 ${
            logoToNavbar
              ? "translate-y-[-60px] scale-75"
              : "translate-y-0 scale-100"
          }`}
          style={{ willChange: "transform" }}
        >
          socialmat
        </span>
      </div>

      {/* Hero Section Content Restored with Framer Motion */}
      <section className="debug-test relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-10 md:pt-0">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto justify-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 lg:pr-10">
              {/* Hlavní nadpis s animací barev */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: loading ? 0 : 1, y: loading ? 40 : 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`${outfit.className} text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 leading-tight tracking-tight`}
              >
                {/* Zvyšujeme prodeje e-shopům díky Instagramu a&nbsp;webu */}
                Proměňte svůj brand v automat na peníze
              </motion.h1>

              {/* Podnadpis */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: loading ? 0 : 1, y: loading ? 30 : 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className={`${dmSans.className} text-lg md:text-xl lg:text-2xl mb-8 text-gray-600 max-w-xl lg:max-w-none font-normal`}
              >
                Spojujeme sílu sociálních sítí a konverzního webu – zákazníky
                přivedeme i&nbsp;přesvědčíme.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                {/* Primární CTA tlačítko - Lead magnet */}
                <a
                  href="/ebook-zdarma"
                  className={`${outfit.className} w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transform hover:translate-y-[-2px] text-center`}
                  aria-label="Stáhnout zdarma e-book o Instagramu"
                >
                  📚 ZDARMA E-book (1.500 Kč)
                </a>

                {/* Sekundární akce - Přímý kontakt */}
                <button
                  onClick={() => scrollTo("#kontakt")}
                  className={`${dmSans.className} w-full sm:w-auto px-6 py-3.5 text-indigo-600 font-bold border-2 border-indigo-500 rounded-lg hover:bg-indigo-50 transition-all duration-300 text-center`}
                >
                  Nebo rovnou konzultace
                </button>
              </motion.div>

              {/* Urgence banner */}
              {/* <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className={`${outfit.className} text-sm font-bold text-orange-800 uppercase tracking-wide`}>
                    Omezená kapacita
                  </span>
                </div>
                <p className={`${dmSans.className} text-sm text-orange-700`}>
                  Bereme pouze <strong>3 nové klienty měsíčně</strong> pro zajištění kvality. Zbývá <strong>1 místo</strong> pro leden 2025.
                </p>
              </div> */}

              {/* Social proof statistiky */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mt-8 text-center lg:text-left"
              >
                <p
                  className={`${dmSans.className} text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4`}
                >
                  ZA POSLEDNÍ ROK
                </p>
                <div className="flex flex-row justify-between gap-4 max-w-lg mx-auto lg:mx-0">
                  <div className="text-center lg:text-left w-fit">
                    <div
                      className={`${outfit.className} text-2xl font-bold text-indigo-600 mb-1`}
                    >
                      90 TISÍC
                    </div>
                    <div
                      className={`${dmSans.className} text-sm text-gray-600`}
                    >
                      SLEDUJÍCÍCH
                    </div>
                  </div>
                  <div className="text-center lg:text-left w-fit">
                    <div
                      className={`${outfit.className} text-2xl font-bold text-indigo-600 mb-1`}
                    >
                      150 %
                    </div>
                    <div
                      className={`${dmSans.className} text-sm text-gray-600`}
                    >
                      NÁRŮST MĚSÍČNÍCH TRŽEB
                    </div>
                  </div>
                  <div className="text-center lg:text-left w-fit">
                    <div
                      className={`${outfit.className} text-2xl font-bold text-indigo-600 mb-1`}
                    >
                      15 MILIONŮ
                    </div>
                    <div
                      className={`${dmSans.className} text-sm text-gray-600`}
                    >
                      ZHLÉDNUTÍ ORGANICKY
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Ilustrační grafika */}
            <div className="lg:w-1/3 relative hidden md:block bg-transparent">
              {/* Video only plays after loading screen disappears */}
              {loading ? (
                <div className="w-full h-[400px] bg-transparent rounded-xl" />
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0 }}
                  className="bg-transparent"
                >
                  <video autoPlay muted playsInline className="rounded-xl">
                    <source
                      src="/hero_video.mov"
                      type="video/mp4"
                      className=""
                    />
                  </video>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

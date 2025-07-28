"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import Link from "next/link";
import { DM_Sans, Outfit } from "next/font/google";
import { clsx } from "clsx";

// Inicializace fontů, stejných jako v Hero.tsx
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

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Listen for logo animation trigger from Hero
  const [logoAnimated, setLogoAnimated] = useState(false);

  useEffect(() => {
    // Listen for logoToNavbar event from Hero
    const handler = () => setLogoAnimated(true);
    window.addEventListener("logoToNavbar", handler);
    return () => window.removeEventListener("logoToNavbar", handler);
  }, []);

  // Efekt pro detekci scrollování
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8">
      <Container
        className={clsx(
          isScrolled && !isMobileMenuOpen
            ? "bg-white/95 shadow-lg py-3 rounded-xl"
            : "bg-transparent shadow-none py-5",
          isMobileMenuOpen && "bg-white rounded-t-xl py-3",
          "backdrop-blur-md transition-all duration-300  w-full max-w-[78rem]"
        )}
        size="sm"
      >
        <div className="grid grid-cols-3 items-center w-full relative z-50">
          {/* Logo */}
          <div className="flex justify-start">
            <Link
              href="/"
              className={`${outfit.className} text-xl md:text-2xl font-bold text-indigo-600 flex items-center`}
            >
              <span
                className={`bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text transition-all duration-700 ${
                  logoAnimated
                    ? "scale-100 translate-y-0"
                    : "scale-75 translate-y-[-60px]"
                }`}
                style={{ willChange: "transform" }}
              >
                socialmat
              </span>
            </Link>
          </div>

          {/* Desktopové menu - centered */}
          <div className="flex justify-center">
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <Link
                  href="/instagram-audit"
                  className={`${dmSans.className} text-orange-600 hover:text-orange-700 font-bold transition-colors whitespace-nowrap`}
                >
                  📚 ZDARMA E-book
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className={`${dmSans.className} text-gray-700 hover:text-indigo-600 font-medium transition-colors`}
                >
                  Služby
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className={`${dmSans.className} text-gray-700 hover:text-indigo-600 font-medium transition-colors`}
                >
                  Reference
                </Link>
              </li>

              <li>
                <Link
                  href="/#kontakt"
                  className={`${dmSans.className} text-gray-700 hover:text-indigo-600 font-medium transition-colors`}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Tlačítko */}
          <div className="hidden md:flex justify-end">
            <Link
              href="/#kontakt"
              className={`${outfit.className} px-5 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-1px]`}
            >
              Chci konzultaci zdarma
            </Link>
          </div>

          {/* Mobilní hamburger menu - absolutní pozice vpravo, vertikálně centrovaná */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-2"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 my-1 transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobilní menu s animací a backdropem */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop blur overlay (starts below navbar) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed left-0 right-0 z-40 bg-black/30 backdrop-blur-md md:hidden"
                style={{ top: "calc(4rem + 1rem)" }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              {/* Animated mobile menu with solid white background, no shadow on top */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="md:hidden py-3  border-gray-100 z-50 fixed top-full left-0 right-0 bg-white rounded-b-xl shadow-lg"
                style={{ top: "100%" }}
              >
                <ul className="flex flex-col space-y-4 px-4">
                  <li>
                    <Link
                      href="/#process"
                      className={`${dmSans.className} block text-gray-700 hover:text-indigo-600 font-medium transition-colors`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Služby
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#testimonials"
                      className={`${dmSans.className} block text-gray-700 hover:text-indigo-600 font-medium transition-colors`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Reference
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/instagram-audit"
                      className={`${dmSans.className} block text-orange-600 hover:text-orange-700 font-bold transition-colors`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      📚 ZDARMA E-book
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#kontakt"
                      className={`${dmSans.className} block text-gray-700 hover:text-indigo-600 font-medium transition-colors`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Kontakt
                    </Link>
                  </li>
                  <li className="pt-2">
                    <Link
                      href="/#kontakt"
                      className={`${outfit.className} block w-full px-5 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 text-center`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Chci konzultaci zdarma
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
}

export default Navbar;

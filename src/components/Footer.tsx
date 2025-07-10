"use client";

import React from "react";
import { DM_Sans, Outfit } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "./Container";

// Initialize fonts (same as other components)
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

// Footer links
const footerLinks = [
  {
    title: "Služby",
    links: [
      { name: "Instagram marketing", href: "#instagram" },
      { name: "Webové stránky", href: "#web" },
      { name: "E-commerce strategie", href: "#strategie" },
      { name: "Analýzy a konzultace", href: "#analyzy" },
    ],
  },
  {
    title: "Společnost",
    links: [
      { name: "O nás", href: "/o-nas" },
      { name: "Případové studie", href: "#case-studies" },
      { name: "Reference", href: "#reference" },
      { name: "Kariéra", href: "/kariera" },
    ],
  },
  {
    title: "Právní informace",
    links: [
      { name: "Obchodní podmínky", href: "/obchodni-podminky" },
      { name: "Ochrana osobních údajů", href: "/privacy" },
      { name: "Cookies", href: "/cookies" },
    ],
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border-t border-gray-200">
      <Container>
        <div className="py-12 md:py-16">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-1 lg:col-span-1"
            >
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 mr-2 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <span className={`${outfit.className} text-xl font-bold text-gray-900`}>Socialmat</span>
              </div>
              <p className={`${dmSans.className} text-gray-600 mb-6`}>
                Zvyšujeme prodeje e-shopům díky Instagramu a webu. Spojujeme sílu sociálních sítí a konverzního webu.
              </p>
              <div className="flex space-x-3 mb-6">
                <a 
                  href="https://instagram.com/socialmat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/socialmat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/socialmat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
              <div className="text-gray-600 text-sm">
                <p className={`${dmSans.className} font-medium`}>
                  Socialmat s.r.o.<br />
                  Václavské náměstí 773/4<br />
                  110 00 Praha 1
                </p>
              </div>
            </motion.div>

            {/* Navigation Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <h3 className={`${outfit.className} text-lg font-bold text-gray-900 mb-4`}>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className={`${dmSans.className} text-gray-600 hover:text-indigo-600 transition-colors`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`${dmSans.className} text-sm text-gray-500 mb-4 md:mb-0`}
              >
                © {currentYear} Socialmat s.r.o. Všechna práva vyhrazena.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <Link href="/obchodni-podminky" className={`${dmSans.className} text-sm text-gray-500 hover:text-indigo-600 transition-colors`}>
                  Obchodní podmínky
                </Link>
                <Link href="/privacy" className={`${dmSans.className} text-sm text-gray-500 hover:text-indigo-600 transition-colors`}>
                  Ochrana soukromí
                </Link>
                <Link href="/cookies" className={`${dmSans.className} text-sm text-gray-500 hover:text-indigo-600 transition-colors`}>
                  Cookies
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

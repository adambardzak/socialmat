"use client";

import { useState, useEffect } from "react";
import { DM_Sans, Outfit } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

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

// Typy cookies
const cookieOptions = [
  {
    id: "necessary",
    name: "Nezbytné cookies",
    description: "Tyto cookies jsou nezbytné pro správné fungování stránky a nemohou být vypnuty.",
    required: true,
  },
  {
    id: "analytics",
    name: "Analytické cookies",
    description: "Pomáhají nám pochopit, jak návštěvníci používají web. Všechna data jsou anonymizována.",
    required: false,
  },
  {
    id: "marketing",
    name: "Marketingové cookies",
    description: "Používají se ke sledování návštěvníků napříč weby a sbírání informací pro personalizovanou reklamu.",
    required: false,
  },
  {
    id: "preferences",
    name: "Preferenční cookies",
    description: "Umožňují webu zapamatovat si vaše preference a nastavení.",
    required: false,
  },
];

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [cookieSelections, setCookieSelections] = useState<Record<string, boolean>>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  // Kontrola, zda je banner potřeba zobrazit
  useEffect(() => {
    // Kontrola, zda uživatel již nastavil cookies
    const consentStored = localStorage.getItem("cookie-consent");
    
    // Pokud není uložen souhlas, zobrazíme banner
    if (!consentStored) {
      // Krátká prodleva, aby se banner nezobrazil okamžitě při načtení
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Funkce pro uložení preferencí
  const savePreferences = () => {
    // Uložíme preference do localStorage
    localStorage.setItem("cookie-consent", JSON.stringify(cookieSelections));
    
    // Nastavíme proměnné pro sledování v závislosti na volbách
    if (cookieSelections.analytics) {
      // Zde můžete inicializovat analytické nástroje (Google Analytics, apod.)
      console.log("Analytics enabled");
      // window.dataLayer = window.dataLayer || [];
      // function gtag(){dataLayer.push(arguments);}
      // gtag('js', new Date());
      // gtag('config', 'G-XXXXXXXXXX', { 'anonymize_ip': true });
    }
    
    if (cookieSelections.marketing) {
      // Zde můžete inicializovat marketingové nástroje (Facebook Pixel, apod.)
      console.log("Marketing enabled");
      // !function(f,b,e,v,n,t,s)
      // {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      // n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      // if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      // n.queue=[];t=b.createElement(e);t.async=!0;
      // t.src=v;s=b.getElementsByTagName(e)[0];
      // s.parentNode.insertBefore(t,s)}(window, document,'script',
      // 'https://connect.facebook.net/en_US/fbevents.js');
      // fbq('init', 'XXXXXXXXXXX');
      // fbq('track', 'PageView');
    }

    // Skryjeme banner
    setIsVisible(false);
  };

  // Funkce pro přijetí všech cookies
  const acceptAll = () => {
    const allSelected = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    
    setCookieSelections(allSelected);
    localStorage.setItem("cookie-consent", JSON.stringify(allSelected));
    
    // Povolíme všechny sledovací nástroje
    console.log("All tracking enabled");
    // Inicializace analytických a marketingových nástrojů
    
    // Skryjeme banner
    setIsVisible(false);
  };

  // Funkce pro přijetí pouze nezbytných cookies
  const acceptNecessary = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    
    setCookieSelections(minimalConsent);
    localStorage.setItem("cookie-consent", JSON.stringify(minimalConsent));
    
    // Skryjeme banner
    setIsVisible(false);
  };

  // Funkce pro přepínání jednotlivých voleb
  const toggleCookieSelection = (id: string) => {
    if (id === "necessary") return; // Nezbytné cookies nelze vypnout
    
    setCookieSelections(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-sm lg:max-w-md z-50 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100"
      >
        <div className="p-4">
          {!showDetails ? (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <h3 className={`${outfit.className} text-base font-bold text-gray-900`}>
                  Používáme cookies
                </h3>
                <button 
                  onClick={acceptAll}
                  className="text-indigo-500 hover:text-indigo-700 -mt-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <p className={`${dmSans.className} text-gray-600 text-xs`}>
                Analytické cookies nám pomáhají zlepšovat web. Kliknutím na &quot;OK&quot; souhlasíte se všemi cookies.
              </p>
              
              <div className="flex gap-2 mt-1">
                <button
                  onClick={acceptNecessary}
                  className={`${dmSans.className} px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-indigo-600 transition-colors`}
                >
                  Jen nezbytné
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className={`${dmSans.className} px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-indigo-600 underline transition-colors`}
                >
                  Nastavení
                </button>
                <button
                  onClick={acceptAll}
                  className={`${outfit.className} ml-auto px-4 py-1.5 text-xs font-medium bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white rounded-md transition-colors shadow-sm`}
                >
                  OK
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className={`${outfit.className} text-base font-bold text-gray-900`}>
                  Nastavení cookies
                </h3>
                <button 
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-3 mb-3 max-h-60 overflow-y-auto pr-1 text-xs">
                {cookieOptions.map((option) => (
                  <div key={option.id} className="border-b border-gray-100 pb-2">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <div 
                          onClick={() => toggleCookieSelection(option.id)}
                          className={`w-8 h-4 flex items-center rounded-full p-0.5 cursor-pointer ${
                            cookieSelections[option.id] ? "bg-indigo-600" : "bg-gray-300"
                          } ${option.required ? "opacity-70 cursor-not-allowed" : ""}`}
                        >
                          <div 
                            className={`bg-white w-3 h-3 rounded-full shadow-sm transform transition-transform duration-300 ${
                              cookieSelections[option.id] ? "translate-x-4" : ""
                            }`} 
                          />
                        </div>
                        <label className={`${outfit.className} ml-2 text-sm font-semibold text-gray-900`}>
                          {option.name}
                          {option.required && (
                            <span className="ml-1 text-xs font-normal text-gray-500">(povinné)</span>
                          )}
                        </label>
                      </div>
                    </div>
                    <p className={`${dmSans.className} pl-10 text-xs text-gray-600`}>
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end gap-2 mt-3">
                <button
                  onClick={acceptNecessary}
                  className={`${dmSans.className} px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-indigo-600 transition-colors`}
                >
                  Odmítnout
                </button>
                <button
                  onClick={savePreferences}
                  className={`${outfit.className} px-4 py-1.5 text-xs font-medium bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white rounded-md transition-colors shadow-sm`}
                >
                  Uložit
                </button>
              </div>
            </div>
          )}
          
          <div className="mt-2 text-center flex justify-center space-x-4">
            <a 
              href="/cookies"
              className={`${dmSans.className} text-xs text-gray-500 hover:text-indigo-600 underline`}
            >
              Více o cookies
            </a>
            <a 
              href="/privacy"
              className={`${dmSans.className} text-xs text-gray-500 hover:text-indigo-600 underline`}
            >
              Ochrana soukromí
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;

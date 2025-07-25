"use client";

import { useState, useEffect } from "react";
import { DM_Sans, Outfit } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { Gift, CheckCircle, Star, Clock, Users } from "lucide-react";
import { trackFunnelEvent } from "@/lib/funnelAnalytics";

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

// Typy pro formulář
interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  instagramHandle: string;
}

// Typy pro fáze trychtýře
type FunnelStep = 'lead-magnet' | 'thank-you' | 'tripwire' | 'main-offer';

interface StepProps {
  formData: LeadFormData;
  setFormData: React.Dispatch<React.SetStateAction<LeadFormData>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<FunnelStep>>;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  handleLeadSubmit: (e: React.FormEvent) => Promise<void>;
}

// Lead Magnet stránka - nyní samostatná komponenta
const LeadMagnetStep: React.FC<StepProps> = ({ 
  formData, 
  setFormData, 
  handleLeadSubmit, 
  isSubmitting 
}) => {
  // Track page visit
  useEffect(() => {
    trackFunnelEvent('funnel_visit', 'lead-magnet');
  }, []);

  // Funkce pro změnu vstupních polí - lokální v této komponentě
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Track form interaction
    if (!formData[name as keyof LeadFormData] && value) {
      trackFunnelEvent('lead_form_start', 'lead-magnet', { field: name });
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-36">
      <Container className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Urgence banner */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-4 px-6 rounded-xl mb-8 shadow-lg">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <span className={`${outfit.className} font-bold text-sm md:text-base`}>
                AKCE KONČÍ ZÍTRA - POUZE PRO PRVNÍCH 50 LIDÍ!
              </span>
            </div>
            <div className={`${dmSans.className} text-sm mt-1 opacity-90`}>
              Již 37 majitelů e-shopů si stáhlo audit tento týden
            </div>
          </div>

          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl mb-6">
              <Gift className="w-12 h-12 text-indigo-600 mx-auto" />
            </div>
            
            <h1 className={`${outfit.className} text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                ZDARMA
              </span>
              {" "}Instagram Audit<br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-gray-600">který zvýší vaše prodeje o</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                50-200%
              </span>
            </h1>
            
            <p className={`${dmSans.className} text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed`}>
              Profesionální analýza v hodnotě <strong>7.500 Kč</strong> obsahuje konkrétní kroky, 
              jak z Instagramu získat <strong>více kvalitních zákazníků během 90 dní</strong>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Levá strana - Benefity */}
            <div className="space-y-8">
              <h2 className={`${outfit.className} text-2xl md:text-3xl font-bold text-gray-900 mb-6`}>
                Co v auditu najdete:
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "🔍",
                    title: "Analýza profilu a konkurence",
                    desc: "Odhalíme skryté příležitosti a co dělají úspěšní konkurenti jinak"
                  },
                  {
                    icon: "📈",
                    title: "90-denní Growth plán", 
                    desc: "Krok za krokem návod pro organický růst a více platících zákazníků"
                  },
                  {
                    icon: "💰",
                    title: "Strategie monetizace",
                    desc: "3 konkrétní způsoby, jak z Instagramu vydělat více už za 30 dní"
                  },
                  {
                    icon: "🎯",
                    title: "Optimalizace pro konverze",
                    desc: "Bio, highlights a CTA tlačítka, která skutečně prodávají"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className={`${outfit.className} font-bold text-gray-900 mb-2`}>{item.title}</h3>
                      <p className={`${dmSans.className} text-gray-600 text-sm leading-relaxed`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className={`${outfit.className} font-bold text-green-800 text-lg`}>
                    Záruka kvality
                  </span>
                </div>
                <p className={`${dmSans.className} text-green-700 leading-relaxed`}>
                  Pokud audit neobsahuje minimálně 5 konkrétních kroků k růstu, vrátíme vám čas + pošleme bonus.
                </p>
              </div>
            </div>

            {/* Pravá strana - Formulář */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Clock className="w-4 h-4" />
                  Audit do 24 hodin
                </div>
                <h2 className={`${outfit.className} text-2xl font-bold text-gray-900 mb-2`}>
                  Vyplňte údaje pro audit
                </h2>
                <p className={`${dmSans.className} text-gray-600 text-sm`}>
                  Všechna pole jsou povinná
                </p>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-6">
                <div>
                  <label className={`${dmSans.className} block text-sm font-semibold text-gray-700 mb-2`}>
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`${dmSans.className} w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500 bg-white`}
                    placeholder="Váše celé jméno"
                    required
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label className={`${dmSans.className} block text-sm font-semibold text-gray-700 mb-2`}>
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${dmSans.className} w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500 bg-white`}
                    placeholder="vas@email.cz"
                    required
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label className={`${dmSans.className} block text-sm font-semibold text-gray-700 mb-2`}>
                    Telefon (volitelné)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`${dmSans.className} w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500 bg-white`}
                    placeholder="+420 xxx xxx xxx"
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label className={`${dmSans.className} block text-sm font-semibold text-gray-700 mb-2`}>
                    Instagram handle *
                  </label>
                  <input
                    type="text"
                    name="instagramHandle"
                    value={formData.instagramHandle}
                    onChange={handleInputChange}
                    className={`${dmSans.className} w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500 bg-white`}
                    placeholder="@vasinstagram"
                    required
                    autoComplete="username"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${outfit.className} w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] disabled:opacity-50 disabled:transform-none`}
                >
                  {isSubmitting ? "Odesílám..." : "🎁 ZÍSKAT ZDARMA AUDIT"}
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Bez spamu</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>100% zdarma</span>
                </div>
              </div>

              {/* Social proof */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-600" />
                    <span className={`${dmSans.className} text-gray-600`}>
                      <strong>347</strong> e-shopů
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className={`${dmSans.className} text-gray-600 ml-1`}>4.9/5</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className={`${dmSans.className} text-xs text-gray-500`}>
                    &ldquo;Nejlepší audit, který jsem kdy dostal. Za 30 dní +180% followers.&rdquo; - Martin K.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

// Thank you stránka - samostatná komponenta
const ThankYouStep: React.FC<Pick<StepProps, 'formData' | 'setCurrentStep'>> = ({ 
  formData, 
  setCurrentStep 
}) => {
  useEffect(() => {
    trackFunnelEvent('thank_you_view', 'thank-you');
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center py-36">
    <Container className="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl text-center"
      >
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>

        <h1 className={`${outfit.className} text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6`}>
          Skvělé! Audit je na cestě 📧
        </h1>

        <p className={`${dmSans.className} text-lg md:text-xl text-gray-600 mb-8 leading-relaxed`}>
          <strong>Instagram Audit v hodnotě 7.500 Kč</strong> obdržíte do 24 hodin na email <strong>{formData.email}</strong>
        </p>

        <div className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
          <h2 className={`${outfit.className} text-2xl md:text-3xl font-bold text-orange-800 mb-4`}>
            🔥 EXKLUZIVNÍ: Jen pro příjemce auditu
          </h2>
          <p className={`${dmSans.className} text-lg text-orange-700 mb-6 leading-relaxed`}>
            Protože jste si vyžádali audit, máte jedinečnou příležitost získat{" "}
            <strong>45minutovou osobní konzultaci se mnou za 497 Kč</strong>{" "}
            místo běžných 2.500 Kč.
          </p>
          <div className="bg-white/50 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className={`${dmSans.className} text-sm font-semibold text-orange-600`}>
                Tato nabídka vyprší za 23 hodin!
              </span>
            </div>
            <p className={`${dmSans.className} text-xs text-orange-600 text-center`}>
              Pouze 3 volná místa tento týden
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => {
              trackFunnelEvent('tripwire_click', 'thank-you');
              setCurrentStep('tripwire');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`${outfit.className} w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:translate-y-[-2px]`}
          >
            🔥 ANO, CHCI KONZULTACI ZA 497 KČ
          </button>
          
          <button
            onClick={() => {
              setCurrentStep('main-offer');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`${dmSans.className} text-gray-500 hover:text-gray-700 transition-colors text-sm underline`}
          >
            Ne díky, pokračovat bez konzultace →
          </button>
        </div>
      </motion.div>
    </Container>
  </div>
  );
};

// Tripwire stránka - samostatná komponenta
const TripwireStep: React.FC<Pick<StepProps, 'setCurrentStep'>> = ({ setCurrentStep }) => {
  useEffect(() => {
    trackFunnelEvent('tripwire_view', 'tripwire');
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-36">
    <Container className="max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Urgence timer */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-4 px-6 rounded-xl mb-8 shadow-lg">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="w-5 h-5" />
            <span className={`${outfit.className} font-bold text-sm md:text-base`}>NABÍDKA VYPRŠÍ ZA:</span>
          </div>
          <div className={`${outfit.className} text-2xl md:text-3xl font-black`}>23:47:32</div>
        </div>

        <div className="text-center mb-12">
          <h1 className={`${outfit.className} text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight`}>
            Osobní konzultace za{" "}
            <span className="line-through text-gray-400 text-2xl md:text-3xl lg:text-4xl">2 500 Kč</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              497 Kč
            </span>
          </h1>

          <div className="inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold mb-8 text-lg">
            🔥 Ušetříte 2 003 Kč (80% sleva)
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Levá strana - Co dostanete */}
          <div className="space-y-8">
            <h2 className={`${outfit.className} text-2xl md:text-3xl font-bold text-gray-900 mb-6`}>
              Co během konzultace probereme:
            </h2>
            
            <div className="space-y-4">
              {[
                "Personalizovanou strategii pro váš Instagram",
                "Konkrétní kroky k nárůstu followers o 200-500%", 
                "Identifikaci nejvíce výdělečného obsahu",
                "Plán optimalizace vašeho webu pro vyšší konverze",
                "Cenovou strategii a positioning"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className={`${dmSans.className} text-gray-700 leading-relaxed`}>{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-100">
              <h3 className={`${outfit.className} text-xl font-bold text-gray-900 mb-4 flex items-center gap-2`}>
                🎁 BONUS při koupi konzultace:
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span className={`${dmSans.className} text-gray-700`}>
                    Checklist 50 virálních Instagram postů
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span className={`${dmSans.className} text-gray-700`}>
                    Template pro Stories, která prodávají
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span className={`${dmSans.className} text-gray-700`}>
                    Sleva 50% na naše služby při podpisu smlouvy
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className={`${outfit.className} font-bold text-green-800 text-lg`}>
                  100% záruka spokojenosti
                </span>
              </div>
              <p className={`${dmSans.className} text-green-700 leading-relaxed`}>
                Pokud nebudete spokojeni, vrátíme vám plnou částku do 7 dnů.
              </p>
            </div>
          </div>

          {/* Pravá strana - Objednávka */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-gray-400 line-through text-2xl">2.500 Kč</div>
                <div className={`${outfit.className} text-4xl font-bold text-orange-600`}>497 Kč</div>
              </div>
              <p className={`${dmSans.className} text-gray-600 mb-4`}>
                Jednoráové investice
              </p>
              <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-lg text-sm font-semibold">
                🔥 Sleva 80% pouze dnes!
              </div>
            </div>

            <button
              onClick={() => {
                // Zde by byla integrace platební brány
                alert('Přesměrování na platbu...');
              }}
              className={`${outfit.className} w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] mb-4`}
            >
              💳 OBJEDNAT KONZULTACI
            </button>

            <button
              onClick={() => {
                setCurrentStep('main-offer');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`${dmSans.className} w-full text-gray-500 hover:text-gray-700 transition-colors text-sm underline`}
            >
              Ne díky, pokračovat bez konzultace →
            </button>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span>🔒 Bezpečná platba</span>
                <span>💳 Visa, MC</span>
                <span>📱 Apple Pay</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  </div>
  );
};

// Main offer stránka - samostatná komponenta  
const MainOfferStep: React.FC = () => {
  useEffect(() => {
    trackFunnelEvent('main_offer_view', 'main-offer');
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-36">
    <Container className="max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h1 className={`${outfit.className} text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-gray-900`}>
            Připraveni na{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              skutečný růst?
            </span>
          </h1>
          <p className={`${dmSans.className} text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed`}>
            Instagram Audit vám ukáže cestu. Nyní je čas na implementaci profesionální strategie, 
            která vám přinese <strong>skutečné výsledky</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Levá strana - Hlavní nabídka */}
          <div className="space-y-8">
            <div className="bg-white/95 backdrop-blur rounded-2xl p-8 border border-gray-200 shadow-xl">
              <div className="text-center mb-8">
                <h2 className={`${outfit.className} text-2xl md:text-3xl font-bold mb-4 text-gray-900`}>
                  Instagram Marketing + Web Optimalizace
                </h2>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-gray-500 line-through text-xl">Od 25.000 Kč</span>
                  <span className={`${outfit.className} text-4xl md:text-5xl font-black text-indigo-600`}>
                    Od 15.000 Kč
                  </span>
                  <span className={`${dmSans.className} text-gray-600`}>/ měsíc</span>
                </div>
                <p className="text-gray-600 text-sm">Při roční spolupráci sleva 40%</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className={`${outfit.className} text-lg font-bold mb-4 flex items-center gap-2 text-gray-900`}>
                    ✨ Instagram Management:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Virální obsah 5x týdně",
                      "Stories strategie", 
                      "Community management",
                      "Influencer collaborations",
                      "Hashtag research & optimization"
                    ].map((item, index) => (
                      <li key={index} className={`${dmSans.className} text-gray-700 flex items-center gap-2 text-sm`}>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className={`${outfit.className} text-lg font-bold mb-4 flex items-center gap-2 text-gray-900`}>
                    🚀 Web Optimalizace:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Conversion rate optimization",
                      "Landing page optimalizace",
                      "A/B testing",
                      "Analytics & tracking",
                      "UX/UI vylepšení"
                    ].map((item, index) => (
                      <li key={index} className={`${dmSans.className} text-gray-700 flex items-center gap-2 text-sm`}>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <h3 className={`${outfit.className} text-lg font-bold mb-4 text-center text-green-800`}>
                  🎯 Garantované výsledky během 90 dní:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className={`${outfit.className} text-2xl font-bold text-green-600`}>50-200%</div>
                    <div className={`${dmSans.className} text-sm text-green-700`}>nárůst followers</div>
                  </div>
                  <div>
                    <div className={`${outfit.className} text-2xl font-bold text-green-600`}>100-300%</div>
                    <div className={`${dmSans.className} text-sm text-green-700`}>více web traffic</div>
                  </div>
                  <div>
                    <div className={`${outfit.className} text-2xl font-bold text-green-600`}>25-150%</div>
                    <div className={`${dmSans.className} text-sm text-green-700`}>nárůst prodejů</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  trackFunnelEvent('main_offer_click', 'main-offer');
                  // Přesměrování na hlavní kontaktní formulář
                  window.location.href = '/#kontakt';
                }}
                className={`${outfit.className} w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-bold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:translate-y-[-1px]`}
              >
                🚀 CHCI ZAČÍT VYDĚLÁVAT VÍCE
              </button>
            </div>
          </div>

          {/* Pravá strana - Audit porovnání */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className={`${outfit.className} text-xl font-bold text-gray-900 mb-2`}>
                  Instagram Audit
                </h3>
                <p className={`${dmSans.className} text-gray-600 mb-4`}>
                  To, co jste si objednali
                </p>
                <div className={`${outfit.className} text-2xl font-bold text-green-600`}>
                  Zdarma ✓
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "Analýza profilu a obsahu",
                  "Základní doporučení",
                  "Konkurenční přehled",
                  "E-mailová zpětná vazba"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className={`${dmSans.className} text-gray-700`}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={`${dmSans.className} w-full py-3 bg-gray-100 text-gray-600 rounded-lg font-semibold text-center`}>
                Už máte objednáno
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className={`${outfit.className} text-lg font-bold text-green-800 mb-3 flex items-center gap-2`}>
                💡 Proč zvolit kompletní službu?
              </h3>
              <ul className="space-y-2">
                {[
                  "Výsledky jsou 5x rychlejší než DIY přístup",
                  "Ušetříte 20+ hodin týdně vlastního času",
                  "Profesionální kvalita obsahu a strategie",
                  "Měřitelný ROI a průběžné optimalizace"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className={`${dmSans.className} text-sm text-green-700`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className={`${dmSans.className} text-gray-600 mb-6 leading-relaxed`}>
            Nebo se vraťte na hlavní stránku a prozkoumejte všechny naše služby
          </p>
          <button
            onClick={() => window.location.href = "/"}
            className={`${dmSans.className} text-indigo-600 font-semibold hover:text-indigo-800 underline transition-colors`}
          >
            ← Zpět na hlavní stránku
          </button>
        </div>
      </motion.div>
    </Container>
  </div>
  );
};

// Hlavní komponenta trychtýře
const LeadMagnetFunnel: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<FunnelStep>('lead-magnet');
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    instagramHandle: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle lead form submission
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validace formuláře
    if (!formData.name.trim() || !formData.email.trim() || !formData.instagramHandle.trim()) {
      alert("Prosím vyplňte všechna povinná pole (jméno, email, Instagram handle)");
      return;
    }

    setIsSubmitting(true);
    trackFunnelEvent('lead_form_submit', 'lead-magnet');

    try {
      // Zde by byl skutečný API call pro uložení leadu
      console.log('Lead data:', formData);
      
      // Simulace API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setCurrentStep('thank-you');
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error saving lead:', error);
      alert('Došlo k chybě při odesílání formuláře. Zkuste to prosím znovu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {currentStep === 'lead-magnet' && (
        <LeadMagnetStep 
          key="lead-magnet"
          formData={formData}
          setFormData={setFormData}
          setCurrentStep={setCurrentStep}
          isSubmitting={isSubmitting}
          setIsSubmitting={setIsSubmitting}
          handleLeadSubmit={handleLeadSubmit}
        />
      )}
      {currentStep === 'thank-you' && (
        <ThankYouStep 
          key="thank-you"
          formData={formData}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 'tripwire' && (
        <TripwireStep 
          key="tripwire"
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 'main-offer' && (
        <MainOfferStep 
          key="main-offer"
        />
      )}
    </AnimatePresence>
  );
};

export default LeadMagnetFunnel;

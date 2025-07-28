"use client";

import { useState, useEffect } from "react";
import { DM_Sans, Outfit } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Clock, CheckCircle } from "lucide-react";

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

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEbookClaim?: () => void;
}

const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ isOpen, onClose, onEbookClaim }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagramHandle: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.instagramHandle.trim()) {
      alert("Prosím vyplňte všechna pole");
      return;
    }

    setIsSubmitting(true);

    try {
      // Zde by byl skutečný API call
      console.log('Exit intent lead:', formData);
      
      // Simulace API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      
      // Po 3 sekundách přesměruj na funnel
      setTimeout(() => {
        onEbookClaim?.() || (window.location.href = '/lead-magnet');
      }, 3000);
      
    } catch (error) {
      console.error('Error saving exit intent lead:', error);
      alert('Došlo k chybě. Zkuste to prosím znovu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Zavřít"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              // Success state
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                
                <h2 className={`${outfit.className} text-2xl font-bold text-gray-900 mb-4`}>
                  Perfektní! E-book je na cestě! 🎉
                </h2>
                
                <p className={`${dmSans.className} text-gray-600 mb-6`}>
                  E-book obdržíte během 5 minut na <strong>{formData.email}</strong>
                </p>
                
                <div className="text-sm text-gray-500">
                  Přesměrováváme vás na stránku s dalšími bonusy...
                </div>
              </div>
            ) : (
              // Form state
              <div className="p-6">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-block p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl mb-4">
                    <Gift className="w-8 h-8 text-orange-600 mx-auto" />
                  </div>
                  
                  <h2 className={`${outfit.className} text-2xl font-bold text-gray-900 mb-2`}>
                    Počkejte! Máme pro vás dárek! 🎁
                  </h2>
                  
                  <p className={`${dmSans.className} text-gray-600 mb-4`}>
                    Než odejdete, stáhněte si zdarma e-book v hodnotě <strong>1.500 Kč</strong>
                  </p>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-3 mb-4">
                    <h3 className={`${outfit.className} font-bold text-indigo-800 text-sm mb-2`}>
                      📚 "Proměňte svůj Instagram v automat na peníze"
                    </h3>
                    <ul className="text-left text-xs text-indigo-700 space-y-1">
                      <li>✓ 5 způsobů monetizace Instagramu</li>
                      <li>✓ Strategie rychlého růstu</li>
                      <li>✓ Automatizace prodeje</li>
                      <li>✓ Content strategie</li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-orange-600 text-sm">
                    <Clock className="w-4 h-4" />
                    <span className={`${dmSans.className} font-semibold`}>
                      Pouze pro návštěvníky našeho webu!
                    </span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`${dmSans.className} w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500 text-sm`}
                      placeholder="Vaše jméno"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`${dmSans.className} w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500 text-sm`}
                      placeholder="váš@email.cz"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="instagramHandle"
                      value={formData.instagramHandle}
                      onChange={handleInputChange}
                      className={`${dmSans.className} w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500 text-sm`}
                      placeholder="@vasinstagram"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${outfit.className} w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:translate-y-[-1px] disabled:opacity-50 disabled:transform-none text-sm`}
                  >
                    {isSubmitting ? "Odesílám..." : "🎁 STÁHNOUT ZDARMA E-BOOK"}
                  </button>
                </form>

                {/* Footer */}
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Bez spamu</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>100% zdarma</span>
                    </div>
                  </div>
                  
                  <p className={`${dmSans.className} text-xs text-gray-400`}>
                    E-book obdržíte během 5 minut na váš email
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;

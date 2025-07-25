"use client";

import { useState } from "react";
import { DM_Sans, Outfit } from "next/font/google";
import { ChevronDown, ChevronUp } from "lucide-react";

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

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className={`${outfit.className} text-lg md:text-xl font-bold text-gray-900 pr-4`}>
          {question}
        </h3>
        <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 ${
          isOpen 
            ? "bg-gradient-to-r from-indigo-600 to-blue-500 text-white" 
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}>
          {isOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 pb-6"
            : "max-h-0 opacity-0"
        }`}
      >
        <p className={`${dmSans.className} text-gray-600 leading-relaxed`}>
          {answer}
        </p>
      </div>
    </div>
  );
};

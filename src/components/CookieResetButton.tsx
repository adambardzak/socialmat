"use client";

import { Outfit } from "next/font/google";

// Initialize fonts
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export default function CookieResetButton() {
  const resetCookieConsent = () => {
    localStorage.removeItem("cookie-consent");
    window.location.reload();
  };

  return (
    <button
      onClick={resetCookieConsent}
      className={`${outfit.className} px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
    >
      Resetovat nastavení cookies
    </button>
  );
}

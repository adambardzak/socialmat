"use client";

import { DM_Sans, Outfit } from "next/font/google";
import Container from "@/components/Container";
import Link from "next/link";
import { useEffect } from "react";

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

// Client components can't export metadata
export default function Error({ 
  error, 
  reset 
}: { 
  error: Error & { digest?: string }; 
  reset: () => void 
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Unhandled error:", error);
  }, [error]);
  return (
    <main className="py-16 lg:py-24 min-h-[70vh] flex flex-col items-center justify-center">
      <Container className="max-w-[78rem]">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-red-600 bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1
            className={`${outfit.className} text-4xl md:text-5xl font-bold text-gray-900 mb-4`}
          >
            500 - Chyba serveru
          </h1>
          <p
            className={`${dmSans.className} text-lg text-gray-700 mb-8 max-w-md mx-auto`}
          >
            Omlouváme se, ale došlo k neočekávané chybě na serveru. Naši technici již pracují na odstranění problému.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className={`${outfit.className} px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto`}
            >
              Zkusit znovu
            </button>
            <Link href="/">
              <button
                className={`${dmSans.className} px-6 py-3 text-indigo-600 font-medium border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-300 w-full sm:w-auto`}
              >
                Zpět na hlavní stránku
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

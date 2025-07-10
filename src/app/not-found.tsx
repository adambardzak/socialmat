import { DM_Sans, Outfit } from "next/font/google";
import Container from "@/components/Container";
import Link from "next/link";

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

export const metadata = {
  title: "Stránka nenalezena | Socialmat",
  description: "Stránka, kterou hledáte, bohužel neexistuje",
};

export default function NotFound() {
  return (
    <main className="py-16 lg:py-24 min-h-[70vh] flex flex-col items-center justify-center">
      <Container className="max-w-[78rem]">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-indigo-600 bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
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
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1
            className={`${outfit.className} text-4xl md:text-5xl font-bold text-gray-900 mb-4`}
          >
            404 - Stránka nenalezena
          </h1>
          <p
            className={`${dmSans.className} text-lg text-gray-700 mb-8 max-w-md mx-auto`}
          >
            Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button
                className={`${outfit.className} px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto`}
              >
                Zpět na domovskou stránku
              </button>
            </Link>
            <Link href="/kontakt">
              <button
                className={`${dmSans.className} px-6 py-3 text-indigo-600 font-medium border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-300 w-full sm:w-auto`}
              >
                Kontaktujte nás
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

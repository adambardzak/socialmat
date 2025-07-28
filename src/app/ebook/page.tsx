"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EbookPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the HTML version of the e-book
    window.location.href = "/ebook.html";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block p-4 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-2xl mb-6">
          <svg className="w-16 h-16 text-indigo-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Načítání e-booku...
        </h1>
        <p className="text-gray-600 mb-6">
          Právě vás přesměrováváme k vašemu e-booku
        </p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
        <div className="mt-6">
          <a 
            href="/ebook.html"
            className="text-indigo-600 hover:text-indigo-800 underline"
          >
            Pokud se stránka nenačte, klikněte zde
          </a>
        </div>
      </div>
    </div>
  );
}

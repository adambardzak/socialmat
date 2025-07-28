"use client";

import Image from "next/image";
import { DM_Sans, Outfit } from "next/font/google";
import { motion } from "framer-motion";
import Container from "./Container";

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

// Register GSAP plugins - REMOVED for carousel
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// Data pro testimonials a ukázky
const testimonials = [
  {
    id: 1,
    client: "Z nuly na 27,5 tis. sledujících",
    description: "Bez koruny do reklamy.",
    imageBefore: "/testimonials/celiso_pred.jpeg",
    imageAfter: "/testimonials/celiso_po.png",
    videoSrc: "/videos/testimonial-1.mp4",
    company: "Celiso",
    followers: "27,5 tis.",
    posts: "101",
    following: "55",
    highlight: "indigo",
    bgGradient: "from-indigo-500 to-purple-600",
    bgLight: "from-indigo-50 to-purple-50",
    textColor: "text-indigo-600",
  },
  {
    id: 2,
    client: "6 000 sledujících za 60 dní",
    description: "30 objednávek za první týden spolupráce.",
    imageBefore: "/testimonials/vermione_pred.jpg",
    imageAfter: "/testimonials/vermione_po.png",
    videoSrc: "/videos/testimonial-2.mp4",
    company: "Vermione",
    followers: "7 427",
    posts: "51",
    following: "109",
    highlight: "blue",
    bgGradient: "from-blue-500 to-cyan-600",
    bgLight: "from-blue-50 to-cyan-50",
    textColor: "text-blue-600",
  },
  {
    id: 3,
    client: "22 000 sledujících za 3 měsíce",
    description: "Nárůst měsíčních tržeb o 150%",
    imageBefore: "/testimonials/mitolife_pred.jpeg",
    imageAfter: "/testimonials/mitolife_po.jpeg",
    videoSrc: "/videos/testimonial-3.mp4",
    company: "MitoLife",
    followers: "27,3 tis.",
    posts: "+150%",
    following: "67",
    highlight: "violet",
    bgGradient: "from-violet-500 to-purple-600",
    bgLight: "from-violet-50 to-purple-50",
    textColor: "text-violet-600",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-white py-24">
      <Container className="max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`${outfit.className} text-4xl md:text-5xl font-black text-gray-900 mb-3`}
            >
              Naše výsledky
            </h2>
            <p
              className={`${dmSans.className} text-lg text-gray-600 max-w-2xl mx-auto`}
            >
              Reálné case studies našich klientů
            </p>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Company Info */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br ${testimonial.bgGradient}`}
                  >
                    {testimonial.company.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h3
                      className={`${outfit.className} text-2xl font-bold text-gray-900`}
                    >
                      {testimonial.company}
                    </h3>
                    <p className={`${dmSans.className} text-gray-600 text-sm`}>
                      E-commerce • Instagram Marketing
                    </p>
                  </div>
                </div>

                <h4
                  className={`${outfit.className} text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r ${testimonial.bgGradient} bg-clip-text text-transparent`}
                >
                  {testimonial.client}
                </h4>
                <p
                  className={`${dmSans.className} text-lg text-gray-700 max-w-3xl mx-auto`}
                >
                  {testimonial.description}
                </p>
              </div>

              {/* Images - Responsive and arrow direction */}
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mb-8">
                <div className="relative group w-full max-w-xs sm:max-w-md lg:w-[500px] h-auto">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    PŘED
                  </div>
                  <div className="w-full h-auto rounded-2xl overflow-hidden bg-gray-50">
                    <img
                      src={testimonial.imageBefore}
                      alt={`${testimonial.company} před`}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Arrow: process style, right on desktop, down on mobile */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div
                    className={`w-8 h-8 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg`}
                  >
                    {/* Down arrow for mobile */}
                    <svg
                      className="w-4 h-4 text-white block lg:hidden"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                    {/* Right arrow for desktop */}
                    <svg
                      className="w-4 h-4 text-white hidden lg:block -rotate-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative group w-full max-w-xs sm:max-w-md lg:w-[500px] h-auto">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    PO
                  </div>
                  <div className="w-full h-auto rounded-2xl overflow-hidden bg-gray-50">
                    <img
                      src={testimonial.imageAfter}
                      alt={`${testimonial.company} po`}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
                <div className="text-center">
                  <div
                    className={`text-2xl font-black ${testimonial.textColor} mb-1`}
                  >
                    {testimonial.followers}
                  </div>
                  <div className="text-gray-600 text-xs">Sledujících</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-gray-900 mb-1">
                    {testimonial.posts}
                  </div>
                  {testimonial.id !== 3 ? (
                    <div className="text-gray-600 text-xs">Příspěvků</div>
                  ) : (
                    <div className="text-gray-600 text-xs">Nárůst tržeb</div>
                  )}
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-gray-900 mb-1">
                    {testimonial.following}
                  </div>
                  <div className="text-gray-600 text-xs">Sleduje</div>
                </div>
              </div>

              {/* Success Badge */}
              <div className="flex justify-center mt-6">
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${testimonial.bgGradient} text-white font-bold text-sm`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  Úspěšná transformace
                </div>
              </div>

              {/* Divider */}
              {index < testimonials.length - 1 && (
                <div className="w-full h-px bg-gray-200 mt-12"></div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;

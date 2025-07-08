"use client";

import { useRef, useState } from "react";
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

// Data pro testimonials a ukázky
const testimonials = [
  {
    id: 1,
    client: "Z nuly na 30 mil.",
    description: "Za 3 roky díky sociálním sítím.",
    imageBefore: "/testimonials/celiso_pred.jpeg",
    imageAfter: "/testimonials/celiso_po.png",
    videoSrc: "/videos/testimonial-1.mp4", // Nahraďte skutečnou cestou k videu
    company: "Celiso",
    followers: "27,5 tis.",
    posts: "101",
    following: "55",
    highlight: "indigo",
  },
  {
    id: 2,
    client: "Nárůst prodejů o 127%",
    description: "Optimalizací webu a Instagram reklamou.",
    imageBefore: "/testimonials/vermione_pred.jpg",
    imageAfter: "/testimonials/vermione_po.jpeg",
    videoSrc: "/videos/testimonial-2.mp4", // Nahraďte skutečnou cestou k videu
    company: "Vermione",
    followers: "6 500",
    posts: "402",
    following: "108",
    highlight: "blue",
  },
  {
    id: 3,
    client: "27,3 tis. followerů",
    description: "Růst organického dosahu o 345%",
    imageBefore: "/testimonials/mitolife_pred.jpeg",
    imageAfter: "/testimonials/mitolife_po.jpeg",
    videoSrc: "/videos/testimonial-3.mp4", // Nahraďte skutečnou cestou k videu
    company: "MitoLife",
    followers: "27,3 tis.",
    posts: "38",
    following: "67",
    highlight: "violet",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleTestimonialChange = (index: number) => {
    setActiveIndex(index);

    // Zastaví všechna videa
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          video.currentTime = 0;
          video
            .play()
            .catch((e) => console.log("Video přehrávání bylo zablokováno:", e));
        } else {
          video.pause();
        }
      }
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Container className="max-w-[78rem]">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${outfit.className} text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-4`}
          >
            Ukázky naší práce
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${dmSans.className} text-lg text-gray-600 max-w-3xl mx-auto`}
          >
            Prokazatelné výsledky, které měníme v růst vašeho podnikání.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Levá část - Showcase panel s Before/After */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] md:aspect-[9/16] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
          >
            {testimonials.map((item, idx) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {/* Before/After obrázky profilu Instagram */}
                <div className="relative w-full h-full bg-gray-900 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

                  {/* Horní polovina - Before */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 p-2">
                    <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-white/20">
                      <Image
                        src={
                          item.imageBefore || "/images/default-testimonial.jpg"
                        }
                        alt={`${item.client} před`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-black/60 text-white text-xs py-1 px-2 rounded font-bold">
                        PŘED
                      </div>
                    </div>
                  </div>

                  {/* Dolní polovina - After */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 p-2">
                    <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-white/20">
                      <Image
                        src={
                          item.imageAfter || "/images/default-testimonial.jpg"
                        }
                        alt={`${item.client} po`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-xs py-1 px-2 rounded font-bold">
                        PO
                      </div>
                    </div>
                  </div>

                  {/* Instagram profil info */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-black/80 backdrop-blur-md rounded-xl px-8 py-4 border border-white/10 shadow-2xl">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 mr-2 flex items-center justify-center overflow-hidden">
                        <div className="text-sm font-bold text-white">
                          {item.company.charAt(0)}
                        </div>
                      </div>
                      <span
                        className={`${dmSans.className} text-base font-medium text-white`}
                      >
                        {item.company}
                      </span>
                    </div>

                    {/* Instagram statistiky */}
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <p className="text-white font-bold">{item.posts}</p>
                        <p className="text-gray-400 text-xs">příspěvky</p>
                      </div>
                      <div>
                        <p className="text-white font-bold">{item.followers}</p>
                        <p className="text-gray-400 text-xs">sledující</p>
                      </div>
                      <div>
                        <p className="text-white font-bold">{item.following}</p>
                        <p className="text-gray-400 text-xs">sleduje</p>
                      </div>
                    </div>
                  </div>

                  {/* Texty vespod */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                    <h3
                      className={`${outfit.className} text-2xl md:text-3xl font-bold mb-2 text-center bg-black/50 backdrop-blur-sm py-2 rounded-t-lg`}
                    >
                      {item.client}
                    </h3>
                    <p
                      className={`${dmSans.className} text-base text-gray-200 bg-black/50 backdrop-blur-sm py-2 px-4 rounded-b-lg text-center`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigační tečky */}
            <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTestimonialChange(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "bg-white scale-100"
                      : "bg-white/40 scale-75 hover:bg-white/60"
                  }`}
                  aria-label={`Zobrazit testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Pravá část - Seznam dalších testimonialů */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`${outfit.className} text-2xl font-bold text-gray-900 mb-6`}
            >
              Výsledky, které přinášíme našim klientům
            </motion.h3>

            {testimonials.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                onClick={() => handleTestimonialChange(idx)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-white shadow-lg border-l-4 border-indigo-500"
                    : "hover:bg-white/50 border-l-4 border-transparent"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative bg-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {item.company.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4
                      className={`${outfit.className} text-lg font-bold text-gray-900`}
                    >
                      {item.client}
                    </h4>
                    <p className={`${dmSans.className} text-gray-600 mb-1`}>
                      {item.description}
                    </p>
                    <p className={`${dmSans.className} text-sm text-gray-500`}>
                      <span className="font-medium">{item.company}</span> ·{" "}
                      {item.followers} sledujících
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA tlačítko */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 pt-4"
            >
              <button
                className={`${outfit.className} w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
              >
                Chci podobné výsledky
              </button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;

"use client";

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

// Data pro služby
const services = [
  {
    id: 1,
    title: "Vytváříme potenciální zákazníky na Instagramu",
    description: "Produkujeme virální obsah a budujeme komunitu lidí, kteří se zajímají o vaše produkty nebo služby.",
    features: [
      {
        text: "Virální video obsah",
        description: "Vytváříme videa, která se organicky šíří a přivádějí tisíce nových sledujících",
        icon: "🎬"
      },
      {
        text: "Budování komunity",
        description: "Vytváříme loajální sledující, kteří se skutečně zajímají o vaši značku",
        icon: "👥"
      },
      {
        text: "Cílené oslovení",
        description: "Oslovujeme přesně ty lidi, kteří mají zájem o vaše produkty",
        icon: "🎯"
      },
      {
        text: "Organický růst",
        description: "Růst bez placených reklam - pouze kvalitní obsah a komunita",
        icon: "📈"
      }
    ],
    color: "pink"
  },
  {
    id: 2,
    title: "Směrujeme je na vaše webové stránky",
    description: "Pomocí strategicky umístěných odkazů a call-to-action vedeme zaujatou komunitu na vaše webové stránky.",
    features: [
      {
        text: "Strategické odkazy",
        description: "Umísťujeme odkazy tak, aby přivedli maximum návštěvníků",
        icon: "🔗"
      },
      {
        text: "Call-to-action",
        description: "Vytváříme přesvědčivé výzvy k akci, které lidi dovedou na web",
        icon: "📢"
      },
      {
        text: "Trackování návštěvnosti",
        description: "Sledujeme, kolik lidí přišlo z Instagramu na vaše stránky",
        icon: "📊"
      },
      {
        text: "Optimalizace přechodů",
        description: "Neustále vylepšujeme proces přechodu z Instagramu na web",
        icon: "⚙️"
      }
    ],
    color: "blue"
  },
  {
    id: 3,
    title: "Přeměňujeme je na kupující zákazníky",
    description: "Optimalizujeme webové stránky tak, aby návštěvníci z Instagramu nakoupili. Každý element má svůj důvod.",
    features: [
      {
        text: "Psychologie prodeje",
        description: "Používáme ověřené principy, které motivují lidi k nákupu",
        icon: "🧠"
      },
      {
        text: "Optimalizace konverzí",
        description: "Testujeme a vylepšujeme každý element pro maximální prodeje",
        icon: "🎯"
      },
      {
        text: "Důvěryhodnost",
        description: "Budujeme důvěru pomocí recenzí, certifikátů a transparentnosti",
        icon: "🛡️"
      },
      {
        text: "Rychlé načítání",
        description: "Rychlé stránky = více prodejů. Optimalizujeme rychlost načítání",
        icon: "⚡"
      }
    ],
    color: "green"
  }
];

// 🎨 ULTRA FUNKY & UMĚLECKÁ KOMPONENTA 🎨
const Process = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" id="sluzby">
      {/* Absolutně šílené pozadí */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,150,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.2),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_90%,rgba(255,255,0,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating šílené tvary */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 50, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.8, 1],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -right-20 w-60 h-60 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30 blur-2xl"
        />
        <motion.div
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.5, 1],
            x: [0, -40, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-25 blur-xl"
        />
      </div>

      <Container className="max-w-[78rem] relative z-10">
        {/* Naprosto šílený hlavní nadpis */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.6 }}
            className="inline-block"
          >
            <h2 className={`${outfit.className} text-5xl md:text-7xl font-black text-white mb-8 relative transform hover:scale-105 transition-transform duration-300`}>
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 animate-pulse">
                  JAK TI 
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="absolute -bottom-3 left-0 h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 rounded-full"
                />
              </span>
              <br />
              <span className="text-white drop-shadow-lg">
                VYDĚLÁME 
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400">
                PRACHY? 
              </span>
              <span className="text-6xl">💰</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`${dmSans.className} text-2xl md:text-3xl text-cyan-100 max-w-5xl mx-auto font-bold leading-relaxed`}
          >
            Instagram → Web → Káching! 🚀
            <br />
            <span className="text-yellow-400 text-xl md:text-2xl">
              Žádné kecy, jen skutečné výsledky!
            </span>
          </motion.p>
        </div>

        {/* Naprosto šílené service karty */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -200 : 200, 
                rotate: index % 2 === 0 ? -10 : 10,
                scale: 0.8
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                rotate: 0,
                scale: 1
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: index * 0.3,
                type: "spring",
                bounce: 0.4
              }}
              className="group relative"
            >
              {/* Šílený floating number */}
              <div className="absolute -top-12 -left-12 z-30">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className={`w-24 h-24 rounded-full shadow-2xl flex items-center justify-center transform ${
                    service.id === 1 
                      ? "bg-gradient-to-br from-pink-500 via-red-500 to-orange-500" 
                      : service.id === 2 
                      ? "bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500" 
                      : "bg-gradient-to-br from-cyan-500 via-teal-500 to-green-500"
                  }`}
                >
                  <span className={`${outfit.className} text-4xl font-black text-white`}>
                    {service.id}
                  </span>
                </motion.div>
              </div>

              {/* Šílená karta */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-[3rem] p-10 lg:p-16 shadow-2xl border-8 border-transparent bg-gradient-to-br from-white to-gray-50 group-hover:shadow-pink-500/30 group-hover:shadow-3xl transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-1 overflow-hidden">
                
                {/* Šílený animovaný border */}
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                />
                
                {/* Šílený obsah */}
                <div className="relative z-10">
                  <h3 className={`${outfit.className} text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight`}>
                    {service.title}
                  </h3>
                  
                  <p className={`${dmSans.className} text-gray-700 text-xl md:text-2xl mb-10 leading-relaxed font-medium`}>
                    {service.description}
                  </p>

                  {/* Šílené features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6, 
                          delay: idx * 0.15,
                          type: "spring",
                          bounce: 0.4
                        }}
                        className="group/feature relative"
                      >
                        <div className="relative p-6 rounded-3xl bg-gradient-to-r from-gray-50 to-white hover:from-purple-50 hover:to-pink-50 transition-all duration-500 transform hover:scale-110 hover:rotate-2 shadow-lg hover:shadow-xl">
                          <div className="flex items-start gap-4">
                            <motion.div
                              whileHover={{ 
                                rotate: [0, -10, 10, -10, 0],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{ duration: 0.5 }}
                              className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg text-2xl ${
                                service.id === 1 
                                  ? "bg-gradient-to-br from-pink-500 to-red-500" 
                                  : service.id === 2 
                                  ? "bg-gradient-to-br from-purple-500 to-indigo-500" 
                                  : "bg-gradient-to-br from-cyan-500 to-teal-500"
                              }`}
                            >
                              {feature.icon}
                            </motion.div>
                            <div className="flex-1">
                              <h4 className={`${dmSans.className} text-lg md:text-xl font-black text-gray-900 mb-2`}>
                                {feature.text}
                              </h4>
                              <p className={`${dmSans.className} text-base md:text-lg text-gray-600 leading-relaxed`}>
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ULTRA ŠÍLENÉ CTA */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.5, rotate: 10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.2, 
            delay: 0.5,
            type: "spring",
            bounce: 0.6
          }}
          className="text-center mt-24"
        >
          <div className="relative">
            {/* Šílené pozadí */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-green-500 rounded-[3rem] blur-2xl opacity-40"
            />
            
            <div className="relative bg-white rounded-[3rem] p-12 lg:p-20 shadow-2xl border-8 border-transparent bg-gradient-to-br from-white to-gray-50 max-w-4xl mx-auto overflow-hidden">
              <motion.div
                animate={{ 
                  rotate: [0, -360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-green-500 rounded-[3rem] opacity-5"
              />
              
              <div className="relative z-10">
                <h3 className={`${outfit.className} text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight`}>
                  CHCI TY{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500">
                    PRACHY!
                  </span>
                  <br />
                  <span className="text-5xl">🚀💰🤑</span>
                </h3>
                
                <p className={`${dmSans.className} text-gray-700 text-xl md:text-2xl mb-12 leading-relaxed font-bold`}>
                  Sežeň mi konzultaci, kde mi ukážete, jak vytěžit z mého brandu{" "}
                  <span className="text-purple-600 font-black text-2xl">MAXIMUM KEŠU!</span>
                </p>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [-1, 1, -1, 1, 0]
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`${outfit.className} group relative px-16 py-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-black rounded-3xl text-2xl md:text-3xl transition-all duration-300 shadow-2xl hover:shadow-pink-500/50 transform hover:rotate-2 focus:outline-none focus:ring-8 focus:ring-purple-500/50 overflow-hidden`}
                >
                  <motion.span
                    animate={{ 
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative z-10 flex items-center gap-4"
                  >
                    DĚLEJ TY PRACHY! 
                    <motion.span
                      animate={{ 
                        scale: [1, 1.5, 1],
                        rotate: [0, 360]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      💰
                    </motion.span>
                  </motion.span>
                  
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.button>
                
                <div className="mt-10 flex items-center justify-center gap-4">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-4 h-4 bg-green-500 rounded-full"
                  />
                  <p className={`${dmSans.className} text-gray-600 text-lg md:text-xl font-bold`}>
                    Zdarma konzultace • Žádné kecy • Jen 💰💰💰
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Process;

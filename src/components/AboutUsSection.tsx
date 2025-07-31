import React from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { DM_Sans, Outfit } from "next/font/google";

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

// A reusable component for each team member
interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  skills: string[];
  color: "indigo" | "blue";
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  description,
  skills,
  color,
}) => {
  const roleClasses = clsx(
    `bg-${color}-100`,
    `text-${color}-700`,
    "px-4 py-2 rounded-lg text-base font-semibold"
  );

  const skillsClasses = clsx(
    `bg-${color}-50`,
    `text-${color}-700`,
    "px-5 py-2 rounded-lg text-base font-medium"
  );

  return (
    <div className="rounded-3xl shadow-lg p-10 bg-white border border-gray-100 transition-transform hover:scale-[1.02] duration-300">
      <h3
        id={`team-member-${name.toLowerCase()}`}
        className={`text-3xl font-bold text-${color}-700 mb-4 flex items-center gap-3`}
      >
        <span>{name}</span>
        <span className={roleClasses}>{role}</span>
      </h3>
      <p className="text-xl text-gray-700 leading-relaxed mb-6">
        {description}
      </p>
      <ul
        className="flex flex-wrap gap-3"
        aria-labelledby={`team-member-${name.toLowerCase()}`}
      >
        {skills.map((skill, index) => (
          <li key={index} className={skillsClasses}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

// The main section component
const AboutUsSection: React.FC = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden" id="about-us">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 opacity-50 z-0"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <header className="text-center mb-16">
          <h2
            className={clsx(
              outfit.className,
              "text-5xl md:text-6xl font-extrabold text-indigo-900 tracking-tight drop-shadow-md"
            )}
          >
            Kdo jsme?
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Jsme strategická dvojice, která propojuje to nejdůležitější pro
            digitální růst – sociální sítě a výkonnostní weby. Dva světy, které
            dnes musí spolupracovat, pokud chcete budovat značku, přitahovat
            klienty a generovat stabilní příjem online.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/my.jpg"
              alt="Adam & Matyáš - Socialmat tým"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-10">
            <TeamMemberCard
              name="Matyáš"
              role="Social Media"
              description="Matyáš se specializuje na tvorbu obsahu, který rezonuje s lidmi i s algoritmem. Pomáhá podnikatelům přetvořit jejich Instagram v nástroj důvěry, komunitního růstu a stabilního prodeje."
              skills={[
                "Instagram marketing",
                "Brand building",
                "Content strategie",
              ]}
              color="indigo"
            />
            <TeamMemberCard
              name="Adam"
              role="Web & Data"
              description="Adam navrhuje webové stránky a systémy, které nejsou jen vizuálně silné, ale především výkonné. Staví weby, které vedou návštěvníky od prvního dojmu až po konverzi, a přitom drží vysoký standard použitelnosti, rychlosti i technické čistoty."
              skills={[
                "Web design & development",
                "UX & konverze",
                "SEO & analytika",
              ]}
              color="blue"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUsSection;

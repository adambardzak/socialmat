import { DM_Sans, Outfit } from "next/font/google";
import Container from "@/components/Container";
import CookieResetButton from "@/components/CookieResetButton";

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
  title: "Zásady používání cookies | Socialmat (BITTERLOVE s.r.o.)",
  description:
    "Informace o tom, jak používáme cookies na našich webových stránkách. Socialmat je značka společnosti BITTERLOVE s.r.o.",
};

export default function CookiesPage() {
  return (
    <main className="py-16 lg:py-24">
      <Container className="max-w-[78rem]">
        <div className="max-w-3xl mx-auto">
          <h1
            className={`${outfit.className} text-3xl md:text-4xl font-bold text-gray-900 mb-8`}
          >
            Zásady používání cookies
          </h1>

          <div className={`${dmSans.className} prose prose-slate max-w-none`}>
            <p className="lead text-lg text-gray-700">
              Na našich webových stránkách používáme cookies, abychom vám
              zajistili co nejlepší zážitek. V tomto dokumentu najdete podrobné
              informace o tom, jaké cookies používáme, jak je používáme a jak je
              můžete spravovat.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Co jsou cookies?
            </h2>
            <p>
              Cookies jsou malé textové soubory, které jsou ukládány ve vašem
              prohlížeči a umožňují webové stránce rozpoznat vás při příští
              návštěvě. Cookies mohou být dočasné (session cookies), které jsou
              odstraněny po zavření prohlížeče, nebo trvalé (persistent
              cookies), které zůstávají v prohlížeči po určitou dobu.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Jaké typy cookies používáme?
            </h2>

            <h3
              className={`${outfit.className} text-xl font-semibold mt-6 mb-3`}
            >
              Nezbytné cookies
            </h3>
            <p>
              Tyto cookies jsou nezbytné pro fungování webových stránek a nelze
              je v našich systémech vypnout. Obvykle jsou nastavovány pouze v
              reakci na vaše akce, které představují požadavek na služby, jako
              například nastavení vašich preferencí ochrany osobních údajů,
              přihlášení nebo vyplňování formulářů. Můžete nastavit svůj
              prohlížeč tak, aby tyto cookies blokoval nebo vás na ně
              upozorňoval, ale některé části stránek pak nemusí fungovat
              správně.
            </p>

            <h3
              className={`${outfit.className} text-xl font-semibold mt-6 mb-3`}
            >
              Analytické cookies
            </h3>
            <p>
              Tyto cookies nám umožňují počítat návštěvy a zdroje návštěvnosti,
              abychom mohli měřit a zlepšovat výkon našich stránek. Pomáhají nám
              zjistit, které stránky jsou nejvíce a nejméně populární, a vidět,
              kolik návštěvníků se na stránkách pohybuje. Veškeré informace,
              které tyto cookies shromažďují, jsou agregovány a anonymní. Pokud
              tyto cookies nepovolíte, nebudeme vědět, kdy jste naše stránky
              navštívili.
            </p>
            <p>Používáme následující analytické nástroje:</p>
            <ul>
              <li>
                Google Analytics - pro sledování návštěvnosti a chování
                uživatelů
              </li>
              <li>Hotjar - pro analýzu uživatelského chování na stránce</li>
              <li>
                Microsoft Clarity - pro sledování interakcí a vylepšení
                uživatelského rozhraní
              </li>
            </ul>

            <h3
              className={`${outfit.className} text-xl font-semibold mt-6 mb-3`}
            >
              Marketingové cookies
            </h3>
            <p>
              Tyto cookies mohou být nastaveny prostřednictvím našich stránek
              našimi reklamními partnery. Mohou být použity těmito společnostmi
              k vytvoření profilu vašich zájmů a k zobrazení relevantních reklam
              na jiných stránkách. Neukládají přímo osobní údaje, ale jsou
              založeny na jedinečné identifikaci vašeho prohlížeče a
              internetového zařízení. Pokud tyto cookies nepovolíte, budete mít
              méně cílenou reklamu. Více informací o tom, jak zpracováváme vaše osobní údaje, 
              najdete v našich <a href="/privacy" className="text-indigo-600 hover:text-indigo-800 transition-colors">Zásadách ochrany osobních údajů</a>.
            </p>
            <p>Používáme následující marketingové nástroje:</p>
            <ul>
              <li>Facebook Pixel - pro sledování konverzí a remarketing</li>
              <li>
                Google Ads - pro remarketing a sledování výkonu reklamních
                kampaní
              </li>
              <li>LinkedIn Insight Tag - pro sledování konverzí z LinkedIn</li>
            </ul>

            <h3
              className={`${outfit.className} text-xl font-semibold mt-6 mb-3`}
            >
              Preferenční cookies
            </h3>
            <p>
              Tyto cookies umožňují stránce poskytovat vylepšenou funkčnost a
              personalizaci. Mohou být nastaveny námi nebo poskytovateli třetích
              stran, jejichž služby jsme přidali na naše stránky. Pokud tyto
              cookies nepovolíte, některé nebo všechny tyto služby nemusí
              fungovat správně.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Jak spravovat cookies?
            </h2>
            <p>
              Většinu prohlížečů můžete nastavit tak, aby cookies nepřijímaly,
              nebo vás upozorní, když jsou cookies odeslány. Pokud cookies
              zakážete, vezměte prosím na vědomí, že některé funkce našich
              stránek nemusí fungovat správně.
            </p>
            <p>Nastavení cookies můžete změnit v nastavení svého prohlížeče:</p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/cs/kb/povoleni-zakazani-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/cs-cz/microsoft-edge/odstranění-souborů-cookie-v-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>

            <p className="mt-10">
              Na našich stránkách můžete také kdykoli změnit své preference
              cookies pomocí našeho nástroje pro správu cookies, který najdete
              ve spodní části stránky.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Aktualizace zásad používání cookies
            </h2>
            <p>
              Tyto zásady používání cookies můžeme čas od času aktualizovat,
              abychom odráželi změny v technologiích, předpisech nebo našich
              obchodních operacích. Doporučujeme vám, abyste tyto zásady
              pravidelně kontrolovali, abyste byli informováni o tom, jak
              používáme cookies.
            </p>
            <p>Poslední aktualizace: 9. července 2025</p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Kontaktujte nás
            </h2>
            <p>
              Pokud máte jakékoli dotazy ohledně našich zásad používání cookies,
              kontaktujte nás:
            </p>
            <p>
              Email: <a href="mailto:info@socialmat.cz" className="text-indigo-600 hover:text-indigo-800 transition-colors">info@socialmat.cz</a><br />
              Telefon: +420 777 888 999<br />
              Adresa: Rybná 716/24, Staré Město, 110 00 Praha<br />
              Socialmat je obchodní značka společnosti BITTERLOVE s.r.o.<br />
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <CookieResetButton />
          </div>
        </div>
      </Container>
    </main>
  );
}

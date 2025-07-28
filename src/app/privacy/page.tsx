import { DM_Sans, Outfit } from "next/font/google";
import Container from "@/components/Container";

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
  title: "Zásady ochrany osobních údajů | Socialmat (BITTERLOVE s.r.o.)",
  description:
    "Informace o tom, jak zpracováváme osobní údaje a chráníme vaše soukromí. Socialmat je značka společnosti BITTERLOVE s.r.o.",
};

export default function PrivacyPage() {
  return (
    <main className="py-16 lg:py-24">
      <Container className="max-w-[78rem]">
        <div className="max-w-3xl mx-auto">
          <h1
            className={`${outfit.className} text-3xl md:text-4xl font-bold text-gray-900 mb-8`}
          >
            Zásady ochrany osobních údajů
          </h1>

          <div className={`${dmSans.className} prose prose-slate max-w-none`}>
            <p className="lead text-lg text-gray-700">
              Ochrana vašich osobních údajů je naší prioritou. V tomto dokumentu najdete informace o tom, 
              jak zpracováváme a chráníme vaše osobní údaje v souladu s nařízením Evropského parlamentu 
              a Rady (EU) 2016/679 (GDPR).
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Správce údajů
            </h2>
            <p>
              Správcem vašich osobních údajů je společnost BITTERLOVE s.r.o., IČO: 21977127, se sídlem 
              Rybná 716/24, Staré Město, 110 00 Praha, Česká republika, zapsaná v obchodním rejstříku vedeném Městským 
              soudem v Praze, oddíl C, vložka [DOPLNIT] (dále jen &ldquo;my&rdquo; nebo &ldquo;správce&rdquo;). Socialmat je obchodní značka společnosti BITTERLOVE s.r.o.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Jaké osobní údaje zpracováváme
            </h2>
            <p>
              Zpracováváme následující kategorie osobních údajů:
            </p>
            <ul>
              <li><strong>Identifikační údaje:</strong> jméno, příjmení</li>
              <li><strong>Kontaktní údaje:</strong> e-mailová adresa, telefonní číslo</li>
              <li><strong>Údaje o podnikání:</strong> název společnosti, IČO, DIČ, adresa sídla</li>
              <li><strong>Údaje z komunikace:</strong> informace, které nám poskytnete v rámci komunikace s námi (e-maily, telefonáty, chat)</li>
              <li><strong>Údaje o používání webových stránek:</strong> IP adresa, cookies, údaje o prohlížeči, délce návštěvy a další analytické údaje</li>
            </ul>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Účely zpracování
            </h2>
            <p>
              Vaše osobní údaje zpracováváme pro následující účely:
            </p>
            
            <h3 className={`${outfit.className} text-xl font-semibold mt-6 mb-3`}>
              Poskytování služeb a plnění smlouvy
            </h3>
            <p>
              Zpracováváme vaše osobní údaje, abychom vám mohli poskytovat naše služby, 
              komunikovat s vámi ohledně našich služeb a plnit závazky vyplývající z uzavřené smlouvy.
            </p>

            <h3 className={`${outfit.className} text-xl font-semibold mt-6 mb-3`}>
              Komunikace a odpovědi na dotazy
            </h3>
            <p>
              Pokud nás kontaktujete prostřednictvím kontaktního formuláře, e-mailu nebo telefonu, 
              zpracováváme vámi poskytnuté údaje za účelem odpovědi na vaše dotazy a další komunikace s vámi.
            </p>

            <h3 className={`${outfit.className} text-xl font-semibold mt-6 mb-3`}>
              Marketing a zasílání obchodních sdělení
            </h3>
            <p>
              Na základě vašeho souhlasu nebo našeho oprávněného zájmu vám můžeme zasílat informace o našich 
              službách, novinkách nebo vás kontaktovat s nabídkou našich služeb. Z odběru obchodních sdělení 
              se můžete kdykoliv odhlásit.
            </p>

            <h3 className={`${outfit.className} text-xl font-semibold mt-6 mb-3`}>
              Analytické a statistické účely
            </h3>
            <p>
              Pro vylepšení našich služeb a webových stránek zpracováváme některé údaje o návštěvnosti a chování 
              uživatelů na našich stránkách. Tyto údaje jsou zpravidla anonymizované a nelze z nich identifikovat 
              konkrétní osoby.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Právní základ zpracování
            </h2>
            <p>
              Vaše osobní údaje zpracováváme na základě následujících právních důvodů:
            </p>
            <ul>
              <li><strong>Plnění smlouvy:</strong> zpracování je nezbytné pro splnění smlouvy, kterou jste s námi uzavřeli, nebo pro provedení opatření přijatých před uzavřením smlouvy na vaši žádost</li>
              <li><strong>Oprávněný zájem:</strong> zpracování je nezbytné pro účely našich oprávněných zájmů, zejména pro poskytování kvalitních služeb, zlepšování našich služeb, zajištění bezpečnosti našich webových stránek</li>
              <li><strong>Váš souhlas:</strong> v některých případech zpracováváme vaše údaje na základě souhlasu, který nám udělíte</li>
              <li><strong>Plnění právních povinností:</strong> některé údaje musíme zpracovávat, abychom splnili povinnosti vyplývající z právních předpisů (např. účetní a daňové předpisy)</li>
            </ul>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Doba zpracování
            </h2>
            <p>
              Vaše osobní údaje zpracováváme po dobu nezbytně nutnou pro naplnění účelu zpracování, nejdéle však:
            </p>
            <ul>
              <li>Po dobu trvání smluvního vztahu a následně po dobu nezbytnou pro ochranu našich práv</li>
              <li>Po dobu stanovenou příslušnými právními předpisy (zejména v oblasti účetnictví a daní)</li>
              <li>Po dobu, než odvoláte svůj souhlas se zpracováním (pokud jsou údaje zpracovávány na základě souhlasu)</li>
            </ul>
            <p>
              Po uplynutí doby zpracování jsou osobní údaje bezpečně vymazány nebo anonymizovány.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Předávání osobních údajů třetím stranám
            </h2>
            <p>
              Vaše osobní údaje můžeme předávat následujícím kategoriím příjemců:
            </p>
            <ul>
              <li><strong>Poskytovatelé služeb:</strong> využíváme poskytovatele služeb, kteří nám pomáhají s provozem webových stránek, hostingem, zasíláním e-mailů, analýzou dat a poskytováním dalších služeb</li>
              <li><strong>Platební brány:</strong> při zpracování plateb využíváme služby třetích stran, které zajišťují bezpečné provedení transakcí</li>
              <li><strong>Orgány veřejné správy:</strong> v případě, že nám to ukládá zákon nebo je to nezbytné pro ochranu našich práv (např. soudy, policie)</li>
            </ul>
            <p>
              Všichni naši zpracovatelé jsou vázáni povinností dodržovat přísná bezpečnostní opatření k ochraně vašich osobních údajů.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Předávání údajů do zahraničí
            </h2>
            <p>
              Některé z našich služeb a nástrojů mohou být hostovány nebo provozovány mimo Evropský hospodářský prostor (EHP). 
              V takových případech přijímáme odpovídající záruky pro zajištění ochrany vašich osobních údajů, zejména prostřednictvím:
            </p>
            <ul>
              <li>Rozhodnutí Evropské komise o odpovídající ochraně</li>
              <li>Standardních smluvních doložek schválených Evropskou komisí</li>
              <li>Závazných podnikových pravidel</li>
            </ul>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Vaše práva
            </h2>
            <p>
              V souvislosti se zpracováním osobních údajů máte následující práva:
            </p>
            <ul>
              <li><strong>Právo na přístup k osobním údajům:</strong> máte právo získat od nás potvrzení, zda osobní údaje, které se vás týkají, jsou či nejsou zpracovávány, a pokud tomu tak je, máte právo získat přístup k těmto údajům</li>
              <li><strong>Právo na opravu:</strong> máte právo na to, abychom bez zbytečného odkladu opravili nepřesné osobní údaje, které se vás týkají</li>
              <li><strong>Právo na výmaz (právo být zapomenut):</strong> máte právo na to, abychom bez zbytečného odkladu vymazali osobní údaje, které se vás týkají, pokud jsou splněny zákonné podmínky</li>
              <li><strong>Právo na omezení zpracování:</strong> máte právo na to, abychom omezili zpracování vašich osobních údajů v případech stanovených nařízením GDPR</li>
              <li><strong>Právo na přenositelnost údajů:</strong> máte právo získat osobní údaje, které se vás týkají, ve strukturovaném, běžně používaném a strojově čitelném formátu</li>
              <li><strong>Právo vznést námitku:</strong> máte právo kdykoli vznést námitku proti zpracování osobních údajů, které se vás týkají, pro účely přímého marketingu</li>
              <li><strong>Právo odvolat souhlas:</strong> pokud je zpracování založeno na vašem souhlasu, máte právo kdykoli tento souhlas odvolat, aniž by tím byla dotčena zákonnost zpracování založená na souhlasu před jeho odvoláním</li>
              <li><strong>Právo podat stížnost u dozorového úřadu:</strong> máte právo podat stížnost u Úřadu pro ochranu osobních údajů, pokud se domníváte, že zpracováním vašich osobních údajů bylo porušeno nařízení GDPR</li>
            </ul>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Zabezpečení osobních údajů
            </h2>
            <p>
              Přijali jsme vhodná technická a organizační opatření k ochraně vašich osobních údajů před náhodnou ztrátou, 
              neoprávněným přístupem, zveřejněním, změnou nebo zničením. Přístup k vašim osobním údajům je omezen pouze 
              na zaměstnance a zpracovatele, kteří tyto informace potřebují znát pro účely poskytování služeb.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Cookies a další technologie
            </h2>
            <p>
              Na našich webových stránkách používáme cookies a podobné technologie pro zlepšení uživatelského zážitku, 
              analýzu návštěvnosti a personalizaci obsahu. Více informací o tom, jak používáme cookies, 
              najdete v našich <a href="/cookies" className="text-indigo-600 hover:text-indigo-800 transition-colors">Zásadách používání cookies</a>.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Změny zásad ochrany osobních údajů
            </h2>
            <p>
              Tyto zásady ochrany osobních údajů můžeme čas od času aktualizovat. Aktuální verze bude vždy dostupná na této 
              webové stránce. Doporučujeme vám pravidelně kontrolovat tyto zásady, abyste byli informováni o tom, jak chráníme 
              vaše osobní údaje.
            </p>
            <p>Poslední aktualizace: 9. července 2023</p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Kontaktujte nás
            </h2>
            <p>
              Pokud máte jakékoli dotazy nebo připomínky k těmto zásadám ochrany osobních údajů nebo 
              ke zpracování vašich osobních údajů, kontaktujte nás:
            </p>
            <p>
              Email: <a href="mailto:info@socialmat.cz" className="text-indigo-600 hover:text-indigo-800 transition-colors">info@socialmat.cz</a><br />
              Telefon: +420 777 888 999<br />
              Adresa: Rybná 716/24, Staré Město, 110 00 Praha<br />
              Socialmat je obchodní značka společnosti BITTERLOVE s.r.o.<br />
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

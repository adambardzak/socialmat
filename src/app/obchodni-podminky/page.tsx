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
  title: "Obchodní podmínky | Socialmat",
  description:
    "Obchodní podmínky společnosti Socialmat pro poskytování služeb digitálního marketingu a tvorby webových stránek",
};

export default function TermsPage() {
  return (
    <main className="py-16 lg:py-24">
      <Container className="max-w-[78rem]">
        <div className="max-w-3xl mx-auto">
          <h1 className={`${outfit.className} text-3xl md:text-4xl font-bold mb-6 text-gray-900`}>
            Obchodní podmínky
          </h1>
          <div className={`${dmSans.className} text-base text-gray-700 mb-8`}>
            společnosti BITTERLOVE s.r.o., IČO: 21977127, se sídlem Rybná 716/24, Staré Město, 110 00 Praha,<br />
            Česká republika, zapsané v obchodním rejstříku vedeném Městským soudem v Praze,<br />
            oddíl C, vložka [DOPLNIT] (dále jen “Poskytovatel”) a fyzických či právnických osob,<br />
            které využívají služeb Poskytovatele (dále jen “Klient”). Socialmat je obchodní značka společnosti BITTERLOVE s.r.o.
          </div>

          <div className={`${dmSans.className} prose prose-slate max-w-none`}>
            <p className="lead text-lg text-gray-700">
              Tyto obchodní podmínky upravují vztahy mezi námi jako poskytovatelem služeb 
              a vámi jako klientem. Prosíme, přečtěte si je pečlivě před objednáním našich služeb.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              1. Obecná ustanovení
            </h2>
            <p>
              1.1 Tyto obchodní podmínky (dále jen &ldquo;Podmínky&rdquo;) upravují práva a povinnosti 
              společnosti Socialmat s.r.o., IČO: 123 45 678, se sídlem Havlíčkova 123, 120 00 Praha 2, 
              Česká republika, zapsané v obchodním rejstříku vedeném Městským soudem v Praze, 
              oddíl C, vložka 12345 (dále jen &ldquo;Poskytovatel&rdquo;) a fyzických či právnických osob, 
              které využívají služeb Poskytovatele (dále jen &ldquo;Klient&rdquo;).
            </p>
            <p>
              1.2 Předmětem těchto Podmínek je úprava práv a povinností smluvních stran při poskytování služeb v oblasti 
              digitálního marketingu, správy sociálních sítí, tvorby webových stránek a souvisejících služeb (dále jen &ldquo;Služby&rdquo;).
            </p>
            <p>
              1.3 Tyto Podmínky jsou nedílnou součástí smlouvy uzavřené mezi Poskytovatelem a Klientem, ať už v písemné 
              či elektronické formě, nebo na základě objednávky a jejího přijetí (dále jen &ldquo;Smlouva&rdquo;).
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              2. Uzavření smlouvy
            </h2>
            <p>
              2.1 Smlouva mezi Poskytovatelem a Klientem vzniká na základě písemné objednávky Klienta 
              (elektronicky či v tištěné podobě) a jejího přijetí Poskytovatelem, nebo podpisem samostatné smlouvy.
            </p>
            <p>
              2.2 Objednávka musí obsahovat minimálně tyto náležitosti:
            </p>
            <ul>
              <li>identifikační údaje Klienta (jméno a příjmení/název, IČO, DIČ, adresa/sídlo)</li>
              <li>kontaktní údaje Klienta (telefonní číslo, e-mail)</li>
              <li>specifikaci požadovaných Služeb</li>
              <li>cenu Služeb dle individuální dohody</li>
              <li>další relevantní informace potřebné pro poskytnutí Služeb</li>
            </ul>
            <p>
              2.3 Poskytovatel je oprávněn odmítnout objednávku, zejména pokud Klient neuvede potřebné údaje 
              nebo pokud má Poskytovatel důvodné pochybnosti o schopnosti Klienta splnit své závazky.
            </p>
            <p>
              2.4 Odesláním objednávky Klient potvrzuje, že se seznámil s těmito Podmínkami a souhlasí s nimi.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              3. Poskytování služeb
            </h2>
            <p>
              3.1 Poskytovatel se zavazuje poskytovat Služby řádně a včas, s odbornou péčí a v souladu 
              s oprávněnými zájmy Klienta.
            </p>
            <p>
              3.2 Klient je povinen poskytnout Poskytovateli veškerou součinnost nezbytnou pro řádné 
              poskytování Služeb, zejména:
            </p>
            <ul>
              <li>poskytnout včas všechny potřebné podklady, informace a materiály</li>
              <li>udělit přístupy k potřebným účtům a systémům</li>
              <li>zajistit dostupnost odpovědných osob pro konzultace</li>
              <li>poskytovat zpětnou vazbu k návrhům v dohodnutých termínech</li>
            </ul>
            <p>
              3.3 V případě, že Klient neposkytne potřebnou součinnost, Poskytovatel neodpovídá za případné 
              prodlení s poskytnutím Služeb a je oprávněn posunout termíny plnění o dobu, po kterou trvá 
              prodlení na straně Klienta.
            </p>
            <p>
              3.4 Poskytovatel je oprávněn poskytovat Služby prostřednictvím třetích osob (subdodavatelů), 
              přičemž odpovídá za jejich plnění jako by Služby poskytoval sám.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              4. Cena a platební podmínky
            </h2>
            <p>
              4.1 Cena za Služby je vždy stanovena individuálně dle dohody mezi Poskytovatelem a Klientem. 
              Služeb nebo dohodou stran ve Smlouvě.
            </p>
            <p>
              4.2 Není-li ve Smlouvě uvedeno jinak, je Poskytovatel oprávněn požadovat zálohu 
              ve výši až 50% dohodnuté ceny před zahájením poskytování Služeb.
            </p>
            <p>
              4.3 Poskytovatel vystaví daňový doklad (fakturu) v souladu s platnými právními předpisy. 
              Splatnost faktury je 14 dní od jejího vystavení, není-li dohodnuto jinak.
            </p>
            <p>
              4.4 V případě prodlení Klienta s úhradou jakékoli platby je Poskytovatel oprávněn:
            </p>
            <ul>
              <li>požadovat úrok z prodlení ve výši 0,05% z dlužné částky za každý den prodlení</li>
              <li>pozastavit poskytování Služeb až do úplného uhrazení dlužné částky</li>
              <li>odstoupit od Smlouvy v případě prodlení delšího než 30 dnů</li>
            </ul>
            <p>
              4.5 Klient není oprávněn jednostranně započíst své pohledávky vůči Poskytovateli proti 
              pohledávkám Poskytovatele za Klientem.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              5. Práva duševního vlastnictví
            </h2>
            <p>
              5.1 Autorská práva a jiná práva duševního vlastnictví k dílům vytvořeným Poskytovatelem 
              při poskytování Služeb (např. grafické návrhy, texty, zdrojové kódy, fotografie) 
              náleží Poskytovateli, není-li ve Smlouvě stanoveno jinak.
            </p>
            <p>
              5.2 Poskytovatel uděluje Klientovi licenci k užití těchto děl v rozsahu nezbytném pro 
              účely, pro které byly Služby poskytovány, a to po dobu trvání Smlouvy, není-li dohodnuto jinak.
            </p>
            <p>
              5.3 Cena licence je zahrnuta v ceně Služeb, není-li ve Smlouvě uvedeno jinak.
            </p>
            <p>
              5.4 Klient není oprávněn bez předchozího písemného souhlasu Poskytovatele:
            </p>
            <ul>
              <li>upravovat nebo měnit díla vytvořená Poskytovatelem</li>
              <li>poskytovat sublicence třetím osobám</li>
              <li>díla rozmnožovat a šířit nad rámec účelu Smlouvy</li>
            </ul>
            <p>
              5.5 Poskytovatel je oprávněn uvádět realizované projekty ve svém portfoliu a používat 
              je jako referenci, není-li dohodnuto jinak.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              6. Odpovědnost za škodu
            </h2>
            <p>
              6.1 Poskytovatel odpovídá za škodu způsobenou Klientovi porušením svých povinností, 
              maximálně však do výše ceny Služeb uhrazené Klientem podle příslušné Smlouvy.
            </p>
            <p>
              6.2 Poskytovatel neodpovídá za:
            </p>
            <ul>
              <li>škodu vzniklou v důsledku neposkytnutí součinnosti ze strany Klienta</li>
              <li>škodu vzniklou v důsledku nepřesných nebo neúplných informací poskytnutých Klientem</li>
              <li>škodu vzniklou v důsledku zásahu třetích osob do systémů a účtů Klienta</li>
              <li>ušlý zisk, nepřímé a následné škody</li>
            </ul>
            <p>
              6.3 Poskytovatel neodpovídá za obsah sdělení a materiálů poskytnutých Klientem. 
              Klient odpovídá za to, že materiály poskytnuté Poskytovateli neporušují práva třetích osob 
              a jsou v souladu s právními předpisy.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              7. Trvání a ukončení smlouvy
            </h2>
            <p>
              7.1 Smlouva je uzavřena na dobu určitou uvedenou ve Smlouvě nebo do splnění 
              předmětu Smlouvy, není-li dohodnuto jinak.
            </p>
            <p>
              7.2 Smlouvu lze ukončit:
            </p>
            <ul>
              <li>písemnou dohodou smluvních stran</li>
              <li>písemnou výpovědí s výpovědní dobou 1 měsíc, která začíná běžet prvním dnem měsíce následujícího po doručení výpovědi druhé straně (pouze u dlouhodobých služeb)</li>
              <li>odstoupením od Smlouvy v případech stanovených zákonem nebo těmito Podmínkami</li>
            </ul>
            <p>
              7.3 Poskytovatel je oprávněn odstoupit od Smlouvy zejména v případě:
            </p>
            <ul>
              <li>podstatného porušení povinností Klienta (zejména prodlení s platbou delším než 30 dnů, neposkytnutí součinnosti po dobu delší než 30 dnů)</li>
              <li>opakovaného porušování povinností Klientem</li>
              <li>požadavku Klienta na poskytnutí Služeb v rozporu s právními předpisy nebo dobrými mravy</li>
            </ul>
            <p>
              7.4 Klient je oprávněn odstoupit od Smlouvy zejména v případě:
            </p>
            <ul>
              <li>podstatného porušení povinností Poskytovatele</li>
              <li>opakovaného porušování povinností Poskytovatelem</li>
            </ul>
            <p>
              7.5 V případě předčasného ukončení Smlouvy má Poskytovatel nárok na úhradu ceny již 
              poskytnutých Služeb a vynaložených nákladů.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              8. Mlčenlivost a ochrana osobních údajů
            </h2>
            <p>
              8.1 Smluvní strany se zavazují zachovávat mlčenlivost o všech důvěrných informacích, 
              které se dozví v souvislosti s plněním Smlouvy.
            </p>
            <p>
              8.2 Za důvěrné informace se považují zejména:
            </p>
            <ul>
              <li>obchodní tajemství, know-how a postupy</li>
              <li>informace o zákaznících, dodavatelích a obchodních partnerech</li>
              <li>cenové a finanční informace</li>
              <li>marketingové strategie a plány</li>
              <li>informace označené jako důvěrné</li>
            </ul>
            <p>
              8.3 Povinnost mlčenlivosti trvá i po ukončení Smlouvy, a to po dobu 3 let.
            </p>
            <p>
              8.4 Poskytovatel zpracovává osobní údaje Klienta v souladu s platnými právními předpisy 
              a <a href="/privacy" className="text-indigo-600 hover:text-indigo-800 transition-colors">Zásadami ochrany osobních údajů</a>, 
              které jsou k dispozici na webových stránkách Poskytovatele.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              9. Komunikace
            </h2>
            <p>
              9.1 Veškerá komunikace mezi Poskytovatelem a Klientem bude probíhat prostřednictvím 
              kontaktních údajů uvedených ve Smlouvě nebo na webových stránkách Poskytovatele.
            </p>
            <p>
              9.2 Elektronická komunikace (e-mail) je považována za písemnou formu komunikace. 
              Zpráva se považuje za doručenou okamžikem jejího odeslání, pokud odesílatel neobdrží 
              zprávu o nedoručení.
            </p>
            <p>
              9.3 Klient je povinen informovat Poskytovatele o změnách svých kontaktních údajů.
            </p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              10. Závěrečná ustanovení
            </h2>
            <p>
              10.1 Tyto Podmínky nabývají účinnosti dne 1. 6. 2025.
            </p>
            <p>
              10.2 Poskytovatel si vyhrazuje právo tyto Podmínky jednostranně měnit. 
              O změně Podmínek bude Klienta informovat e-mailem nebo zveřejněním na svých webových stránkách 
              nejméně 14 dní před nabytím účinnosti změny.
            </p>
            <p>
              10.3 V případě, že Klient nesouhlasí se změnou Podmínek, má právo Smlouvu vypovědět 
              ve lhůtě 14 dnů od oznámení změny. V takovém případě Smlouva skončí uplynutím výpovědní 
              doby, která činí 1 měsíc a začíná běžet prvním dnem měsíce následujícího po doručení výpovědi Poskytovateli.
            </p>
            <p>
              10.4 Právní vztahy neupravené těmito Podmínkami nebo Smlouvou se řídí příslušnými ustanoveními 
              občanského zákoníku a dalšími právními předpisy České republiky.
            </p>
            <p>
              10.5 Případné spory vzniklé ze Smlouvy budou řešeny primárně jednáním smluvních stran. 
              Pokud nedojde k dohodě, budou spory rozhodovány věcně a místně příslušnými soudy České republiky.
            </p>
            <p>
              10.6 Pokud se některé ustanovení těchto Podmínek stane neplatným nebo neúčinným, 
              zůstávají ostatní ustanovení v platnosti. Smluvní strany se zavazují nahradit neplatné 
              nebo neúčinné ustanovení ustanovením platným a účinným, které svým obsahem nejlépe odpovídá 
              původnímu ustanovení.
            </p>
            <p>
              10.7 Tyto Podmínky jsou vyhotoveny v českém jazyce. V případě rozporů mezi českou verzí 
              a jakýmkoliv překladem je rozhodující česká verze.
            </p>
            <p>Poslední aktualizace: 1. 6. 2025</p>

            <h2 className={`${outfit.className} text-2xl font-bold mt-10 mb-4`}>
              Kontaktní údaje
            </h2>
            <p>
              BITTERLOVE s.r.o.<br />
              IČO: 21977127<br />
              Sídlo: Rybná 716/24, Staré Město, 110 00 Praha<br />
              Email: <a href="mailto:info@socialmat.cz" className="text-indigo-600 hover:text-indigo-800 transition-colors">info@socialmat.cz</a><br />
              Telefon: +420 777 888 999<br />
              Socialmat je obchodní značka společnosti BITTERLOVE s.r.o.<br />
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}

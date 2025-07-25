# Instagram Marketing Funnel - Jak využít

## Účel conversion funnelu

Tento funnel je navržený speciálně pro **provoz z Instagramu** a vede uživatele systematicky od prvního kontaktu až k hlavní spolupráci.

## Struktura funnelu (4 kroky):

### 1. **Lead Magnet** (`/instagram-audit`)
- **Cíl**: Získat kontaktní údaje návštěvníka
- **Nabídka**: Bezplatný Instagram audit v hodnotě 7.500 Kč
- **Formulář**: Jméno, email, telefon, Instagram handle
- **Urgence**: "Pouze pro prvních 50 lidí"

### 2. **Thank You + Tripwire Offer**
- **Cíl**: Okamžitě upsellovat na nízkonákladovou konzultaci
- **Nabídka**: 45min konzultace za 497 Kč (místo 2.500 Kč)
- **Urgence**: "Nabídka vyprší za 24 hodin"
- **Bonusy**: Checklist, templates, sleva 50%

### 3. **Tripwire Detail Page**
- **Cíl**: Přesvědčit k nákupu tripwire nabídky
- **Timer**: Odpočítávání času do vypršení
- **Social proof**: Detailní popis benefitů
- **Garanti**: 100% záruka spokojenosti

### 4. **Main Offer Upsell**
- **Cíl**: Upsell na hlavní službu (15.000+ Kč/měsíc)
- **Nabídka**: Kompletní Instagram Management + Web optimalizace
- **Messaging**: "Pojďme společně zvýšit vaše prodeje z Instagramu" (bez zmínky o bezplatné konzultaci)
- **Alternativa**: Návrat na hlavní stránku

## Jak integrovat do Instagram marketingu:

### Instagram Bio
```
Zvyšujeme prodeje e-shopů díky Instagramu 📈
🎁 ZDARMA audit (hodnota 7.500 Kč) ⬇️
socialmat.cz/instagram-audit
```

### Instagram Stories
- **Swipe up** link na `/instagram-audit`
- **Call-to-action**: "Získej ZDARMA audit"
- **Urgence**: "Pouze dnes", "Prvních 50 lidí"

### Instagram Posts
- **Caption**: Vzdělávací obsah + CTA na audit
- **Stories highlight**: "🎁 ZDARMA AUDIT"

### Instagram Ads
- **Cíl**: Traffic na `/instagram-audit`
- **Audience**: Majitelé e-shopů, marketing manageři
- **Budget**: Doporučeno 200-500 Kč/den

## Optimalizace a testování:

### A/B testování možnosti:
1. **Lead magnet headline**: Testovat různé hodnoty auditu
2. **Tripwire cena**: 497 Kč vs 697 Kč vs 997 Kč
3. **Urgence**: 24 hodin vs 48 hodin vs "do konce týdne"
4. **Bonusy**: Různé kombinace šablon a slev

### Metriky ke sledování:
- **Conversion rate lead magnetu**: Cíl 15-25%
- **Tripwire conversion**: Cíl 8-15%
- **Main offer conversion**: Cíl 3-8%
- **Cost per lead**: Závisí na zdroji trafficu

### Technická implementace:

#### Lead storage
```javascript
// V handleLeadSubmit funkci
const saveLeadToDatabase = async (leadData) => {
  await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(leadData)
  });
};
```

#### Email automation
Po získání leadu automaticky:
1. Poslat welcome email s auditem
2. Další den: Reminder na tripwire nabídku
3. Za 3 dny: Případové studie úspěšných klientů
4. Za týden: Hlavní nabídka s časově omezenou slevou

#### Payment integration
Pro tripwire nabídku integrovat:
- **GoPay** / **ComGate** pro české platby
- **Stripe** pro mezinárodní platby

## Best practices:

### Obsah na Instagramu
1. **Vzdělávací posty** (80%) + CTA na audit (20%)
2. **Stories denně** s různými CTA
3. **IGTV/Reels** s case studies klientů
4. **Live sessions** s odkazem na audit

### Retargeting
1. **Facebook Pixel** na funnel stránkách
2. **Retargeting ads** pro ty, kdo nezaèali funnel
3. **Lookalike audiences** na základě leadu

### Follow-up strategie
1. **Email sekvence** pro nekonvertované leady
2. **SMS marketing** pro urgentní nabídky
3. **Personal outreach** pro high-value leady

Tento funnel je optimalizován pro maximální konverzi a postupné budování důvěry s potenciálními klienty z Instagramu.

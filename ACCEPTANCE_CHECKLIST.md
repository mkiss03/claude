# ✅ TemetkezésPro – Acceptance Criteria Checklist

> Használja ezt a checklistet a projekt teljesítésének ellenőrzésére.

---

## 📦 1. Projekt Telepítés & Build

### Lokális Fejlesztés
- [ ] `npm install` hiba nélkül lefut (vagy yarn/pnpm)
- [ ] Nincs npm audit critical/high vulnerability (vagy elfogadható)
- [ ] `npm run dev` elindítja a development szervert
- [ ] Development szerver elérhető: `http://localhost:4321`
- [ ] Nincs console error a böngészőben
- [ ] TypeScript ellenőrzés sikeres: `npm run astro check`

### Production Build
- [ ] `npm run build` sikeres production build
- [ ] Build idő < 2 perc
- [ ] `dist/` mappa létrejön
- [ ] `npm run preview` működik (build előnézet)
- [ ] Nincs TypeScript vagy Astro build error

---

## 🎨 2. UI/UX & Design

### Általános
- [ ] Letisztult, modern design
- [ ] Bizalmat keltő színvilág (kék/szürke árnyalatok)
- [ ] Nagy tipográfia (könnyen olvasható)
- [ ] Elegendő whitespace (nem zsúfolt)
- [ ] Gombok nagyok, kontrasztosak, jól kattinthatóak

### Responsive Design
- [ ] Mobil (320px): tartalom olvasható, gombok kattinthatóak
- [ ] Tablet (768px): layout optimalizált
- [ ] Desktop (1280px+): teljes szélesség kihasználva
- [ ] Touch friendly: gombok legalább 44x44px
- [ ] Nincs horizontal scroll (egyik felbontáson sem)

### Színek & Branding
- [ ] Primary szín: kék (#0ea5e9)
- [ ] Secondary szín: szürke árnyalatok
- [ ] Highlight/CTA gombok jól láthatóak
- [ ] Logo/ikon: TP monogram látható
- [ ] Favicon SVG megfelelően renderelődik

---

## 📄 3. Tartalom & Szövegek

### Hero Szekció
- [ ] Headline: "Tegye digitálissá temetkezési vállalkozását"
- [ ] Subheadline: értékajánlat (max 2 mondat)
- [ ] 2 CTA gomb: "Kérek visszahívást" + "Demó időpont foglalás"
- [ ] Trust indicators: 50+ ügyfél, 98% elégedettség, 24/7 támogatás

### Szolgáltatások (Features)
- [ ] 6 feature kártya:
  - Digitális e-Anyakönyv
  - Online Időpontfoglalás
  - Automatizált Folyamatok
  - GDPR Kompatibilis
  - Értesítések & Emlékeztetők
  - Dokumentum Kezelés
- [ ] Minden kártya: ikon + cím + leírás (2-3 mondat)

### Hogyan Működik (How It Works)
- [ ] 3 lépés:
  1. Regisztráció és Konzultáció
  2. Integráció és Betanítás
  3. Éles Indulás és Támogatás
- [ ] Lépések számozva (01, 02, 03)
- [ ] Vizuális connection (vonal a lépések között)

### Előtte-Utána Story
- [ ] "Előtte" blokk: papíralapú problémák
- [ ] "Utána" blokk: digitális előnyök
- [ ] Számok/metrikák: 75% időmegtakarítás, stb.
- [ ] Minimum 6 bullet point előny

### Árak (Pricing)
- [ ] 3 csomag: Kezdő, Professzionális, Enterprise
- [ ] Indikatív árak: 49€, 79€, 99€
- [ ] Minden csomag: feature lista + CTA gomb
- [ ] "Legnépszerűbb" badge a középső csomagra
- [ ] Disclaimer: árak tájékoztató jellegűek

### GYIK (FAQ)
- [ ] Minimum 6 kérdés-válasz:
  - e-Anyakönyv működése
  - Adatbiztonság
  - Indulási idő
  - Támogatás
  - Betanítás
  - Próbaidőszak
  - Csomagváltás
  - Frissítések
- [ ] Accordion működik (kinyílik/becsukódik)
- [ ] Kérdésekre kattintva válasz megjelenik

### Kapcsolat Űrlap
- [ ] 6 input mező:
  - Cégnév (required)
  - Település (required)
  - Kapcsolattartó neve (required)
  - Telefonszám (required)
  - E-mail cím (required)
  - Megjegyzés (opcionális, textarea)
- [ ] Adatkezelési checkbox (required)
- [ ] Alternatív elérhetőségek: email + telefon link

### Footer
- [ ] Logo + leírás
- [ ] Gyors linkek: Szolgáltatások, Működés, Árak, GYIK, Kapcsolat
- [ ] Jogi linkek: Adatkezelés, Impresszum, ÁSZF, Cookie
- [ ] Kapcsolati adatok: email + telefon
- [ ] Copyright év dinamikus (current year)

---

## ⚙️ 4. Funkciók

### Header/Navigation
- [ ] Fixed header (sticky navigation)
- [ ] Logo: kattintható, visszavisz a főoldalra
- [ ] Desktop menü: Szolgáltatások, Működés, Árak, GYIK, Kapcsolat
- [ ] Mobil hamburger menü működik (kinyílik/becsukódik)
- [ ] Smooth scroll anchor linkek (#szolgaltatasok, #arak, stb.)

### Űrlap Validáció
- [ ] HTML5 validáció (required mezők)
- [ ] Email formátum ellenőrzés
- [ ] Telefonszám formátum ellenőrzés (magyar: +36...)
- [ ] Minimum karakter hossz (név, cégnév: 2+)
- [ ] Privacy checkbox kötelező
- [ ] Error üzenetek magyarul, érthetőek

### Űrlap Küldés
- [ ] Submit gomb: loading állapot (spinner)
- [ ] Sikeres küldés: redirect `/koszonjuk` oldalra
- [ ] Hiba esetén: hibaüzenet megjelenik (piros box)
- [ ] Hiba esetén: űrlap adatok megmaradnak
- [ ] CSRF védelem: ALLOWED_ORIGINS ellenőrzés

### API Endpoint (/api/lead.ts)
- [ ] POST request fogadás
- [ ] JSON parsing
- [ ] Szerver oldali validáció
- [ ] Make.com webhook OR Resend email küldés
- [ ] HTTP 200 (sikeres) vagy 400/500 (hiba) válasz
- [ ] Try-catch error handling
- [ ] Console log hibák (nem leállás)

---

## 🔗 5. Integrációk

### Make.com Webhook (ha LEAD_MODE=make)
- [ ] MAKE_WEBHOOK_URL beállítva
- [ ] Webhook fogadja az adatokat
- [ ] Payload tartalmazza: company, city, name, phone, email, message, timestamp
- [ ] Make.com scenario aktív (ON)
- [ ] Teszt lead sikeres (látható Make history-ban)
- [ ] Google Sheets integráció működik (ha van)

### Resend Email (ha LEAD_MODE=resend)
- [ ] RESEND_API_KEY beállítva
- [ ] Domain verifikálva (DNS SPF, DKIM, DMARC)
- [ ] Email érkezik a LEAD_TO_EMAIL címre
- [ ] Email HTML formázás rendezett
- [ ] Email subject: "Új érdeklődő: [Cégnév] - [Név]"
- [ ] Email tartalmazza az összes mezőt
- [ ] Nincs spam folder (vagy ott is működik)

### Calendly/Cal.com
- [ ] PUBLIC_CAL_URL beállítva
- [ ] "Demó időpont foglalás" gombok működnek
- [ ] Link új ablakban nyílik (`target="_blank"`)
- [ ] Link helyes URL-re mutat (Calendly/Cal.com profil)

---

## 🔍 6. SEO & Meta Tagek

### Meta Tagek
- [ ] `<title>` minden oldalon egyedi
- [ ] `<meta name="description">` minden oldalon
- [ ] Főoldal title: "TemetkezésPro – Digitális Megoldások..."
- [ ] Description max 160 karakter
- [ ] Canonical URL beállítva
- [ ] `lang="hu"` a HTML tag-en

### OpenGraph & Social
- [ ] `og:title` beállítva
- [ ] `og:description` beállítva
- [ ] `og:image` placeholder kép (`public/og-image.jpg`)
- [ ] `og:url` helyes (canonical URL)
- [ ] `og:locale="hu_HU"`
- [ ] Twitter cards meta tagek

### Schema.org JSON-LD
- [ ] Organization schema (cégnév, logo, elérhetőség)
- [ ] SoftwareApplication schema (TemetkezésPro termék)
- [ ] LocalBusiness jellegű elemek (ha alkalmazható)
- [ ] Schema validáció: [Google Rich Results Test](https://search.google.com/test/rich-results)

### Sitemap & Robots
- [ ] `sitemap-index.xml` generálódik (Astro sitemap integration)
- [ ] `robots.txt` létezik (`public/robots.txt`)
- [ ] robots.txt tartalmazza a sitemap URL-t
- [ ] Nincs `/api/` endpoint a sitemap-ben

---

## 📊 7. Analytics & Tracking

### Vercel Analytics
- [ ] `PUBLIC_ENABLE_VERCEL_ANALYTICS=true` beállítva
- [ ] Vercel Analytics enabled a dashboard-on
- [ ] Script betöltődik: `/_vercel/insights/script.js`
- [ ] Pageview tracking működik (ellenőrizd Vercel Analytics-ben)

### Plausible Analytics (opcionális)
- [ ] `PUBLIC_ENABLE_PLAUSIBLE=true` (ha használod)
- [ ] `PUBLIC_PLAUSIBLE_DOMAIN` beállítva
- [ ] Script betöltődik: `plausible.io/js/script.js`
- [ ] Plausible dashboard-on láthatóak az események

---

## 🔐 8. GDPR & Adatkezelés

### Adatkezelési Tájékoztató
- [ ] `/adatkezeles` oldal létezik
- [ ] Tartalom magyar nyelvű, érthető
- [ ] Tartalmazza:
  - Adatkezelő azonosítása
  - Milyen adatokat gyűjtünk
  - Adatkezelés célja és jogalapja
  - Adatok tárolásának időtartama
  - Adatok továbbítása
  - Érintetti jogok
  - Adatbiztonság
  - Cookie-k használata
  - Panaszkezelés
- [ ] [TODO] placeholder-ek jelezve

### Impresszum
- [ ] `/impresszum` oldal létezik
- [ ] Tartalmazza:
  - Cégnév, székhely, adószám, cégjegyzékszám
  - Kapcsolati adatok (email, telefon)
  - Tárhelyszolgáltató adatai (Vercel)
  - Szerzői jogok
  - Felelősség
  - Jogvita
- [ ] [TODO] placeholder-ek jelezve (cégadatok kitöltendők)

### Űrlap Hozzájárulás
- [ ] Privacy checkbox az űrlapon
- [ ] Checkbox szöveg: "Elfogadom az adatkezelési tájékoztatót"
- [ ] Link az adatkezelés oldalra (`/adatkezeles`)
- [ ] Checkbox required (nem lehet elküldeni pipálás nélkül)

---

## ⚡ 9. Teljesítmény & Lighthouse

### Lighthouse Audit (Chrome DevTools)
- [ ] Performance: > 90
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 95

### Teljesítmény Optimalizálás
- [ ] Képek: webp/avif formátum (vagy placeholder-ek jelezve)
- [ ] Lazy loading képekre
- [ ] Tailwind CSS purge működik (csak használt utility-k)
- [ ] Nincs felesleges JavaScript bundle
- [ ] Astro static rendering (ahol lehetséges)

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

---

## 🚀 10. Vercel Deployment

### Vercel Projekt
- [ ] GitHub repository létrehozva és pushed
- [ ] Vercel projekt importálva
- [ ] Framework preset: Astro (automatikus)
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`

### Environment Variables
- [ ] Összes szükséges env var beállítva Vercel-ben
- [ ] SECRET változók: csak Production/Preview-ra
- [ ] PUBLIC_ változók: minden environment-re
- [ ] Vercel → Settings → Environment Variables lista teljes

### Deployment Sikeres
- [ ] Első deploy sikeres (zöld pipa)
- [ ] Build log nincs error
- [ ] `.vercel.app` URL működik
- [ ] Minden oldal elérhető (.vercel.app domain-en)
- [ ] Űrlap működik (teszt lead küldés)

### Custom Domain (opcionális, de ajánlott)
- [ ] Domain megvásárolva (`temetkezespro.hu`)
- [ ] Domain hozzáadva Vercel-ben
- [ ] DNS A rekord: `@` → Vercel IP
- [ ] DNS CNAME rekord: `www` → `cname.vercel-dns.com`
- [ ] DNS propagáció kész (10-60 perc)
- [ ] SSL tanúsítvány aktív (HTTPS működik)
- [ ] HTTP → HTTPS redirect automatikus
- [ ] `www` és non-www is működik

### Resend Domain Verifikáció (ha használod)
- [ ] DNS TXT rekord: SPF (`v=spf1 include:_spf.resend.com ~all`)
- [ ] DNS TXT rekord: DKIM (`resend._domainkey`)
- [ ] DNS TXT rekord: DMARC (opcionális)
- [ ] Resend Dashboard: domain "Verified" státusz

---

## 🧪 11. Tesztelés

### Manuális Tesztek
- [ ] Minden oldal betöltődik (/, /koszonjuk, /adatkezeles, /impresszum)
- [ ] Minden link működik (belső + külső)
- [ ] Minden gomb működik (CTA, form submit, navigation)
- [ ] Mobil menü nyitás/zárás
- [ ] Scroll to anchor (#kapcsolat, #arak, stb.)
- [ ] FAQ accordion nyitás/zárás
- [ ] Űrlap validáció (required mezők, email, telefon)
- [ ] Űrlap küldés sikeres → `/koszonjuk` redirect
- [ ] Űrlap küldés sikertelen → hibaüzenet

### Cross-browser Tesztelés
- [ ] Chrome (desktop + mobil)
- [ ] Firefox
- [ ] Safari (macOS + iOS)
- [ ] Edge

### Device Tesztelés
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet (iPad)
- [ ] Desktop (1920px+)

---

## 📚 12. Dokumentáció

### README.md
- [ ] Projekt leírás
- [ ] Telepítési útmutató (npm install, npm run dev)
- [ ] Environment változók listája
- [ ] Fejlesztési parancsok
- [ ] Vercel deployment útmutató
- [ ] Make.com beállítás leírás
- [ ] Resend beállítás leírás
- [ ] Custom domain beállítás DNS példákkal
- [ ] Troubleshooting szekció
- [ ] Acceptance criteria

### VERCEL_DEPLOYMENT.md
- [ ] Lépésről lépésre deployment guide
- [ ] GitHub repo létrehozás
- [ ] Vercel import
- [ ] Environment variables beállítás
- [ ] Build & Deploy
- [ ] Custom domain + DNS
- [ ] SSL tanúsítvány
- [ ] Troubleshooting

### .env.example
- [ ] Minden environment változó dokumentálva
- [ ] Példa értékek (placeholder-ekkel)
- [ ] Kommentek magyarul
- [ ] Külön szekciók: Site Config, Lead Form, Analytics, stb.

---

## ✅ 13. Végső Ellenőrzés

### Production Checklist
- [ ] Nincs `console.log()` production kódban (vagy csak szükséges error log)
- [ ] Nincs TODO komment production kódban (vagy dokumentálva)
- [ ] `.env` fájl NINCS git-ben (`.gitignore`-ban van)
- [ ] Érzékeny adatok (API kulcsok) NINCSENEK hardcode-olva
- [ ] Placeholder képek helyettesítve (vagy dokumentálva: public/og-image.jpg, logo.png)
- [ ] Cégadatok kitöltve impresszumban ([TODO] helyettesítve)
- [ ] Kapcsolati email/telefon frissítve (ha változik)
- [ ] Google Search Console beállítva (sitemap beküldve)
- [ ] Vercel Analytics vagy Plausible működik
- [ ] Backup készítve git repository-ról

### Kész a Projektátvételre
- [ ] Összes fenti checkbox pipálva
- [ ] Lighthouse score > 90 minden kategóriában
- [ ] Production URL működik: `https://temetkezespro.hu`
- [ ] Űrlap teszt lead sikeresen fogadva (Make/Resend)
- [ ] Dokumentáció teljes (README, VERCEL_DEPLOYMENT)
- [ ] Git repository átadva (vagy hozzáférés megadva)
- [ ] Vercel projekt hozzáférés átadva (vagy megosztva)

---

## 📊 Statisztikák

**Összesen checklist elemek:** 200+

**Kategóriák:**
- Projekt Telepítés: 11
- UI/UX & Design: 20
- Tartalom: 45
- Funkciók: 25
- Integrációk: 18
- SEO: 20
- Analytics: 8
- GDPR: 15
- Teljesítmény: 12
- Deployment: 25
- Tesztelés: 15
- Dokumentáció: 10
- Végső Ellenőrzés: 16

---

## 🎉 Gratulálok!

Ha minden checkbox pipálva → **A projekt PRODUCTION-READY!** 🚀

**Következő lépések:**
1. Hivatalos launch
2. Marketing kampány indítása
3. First customers onboarding
4. Feedback gyűjtése
5. Iteratív fejlesztés

---

**Készült:** 2025. november 3.
**Verzió:** 1.0
**Projekt:** TemetkezésPro Astro Landing Page

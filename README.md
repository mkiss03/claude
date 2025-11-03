# TemetkezésPro – Astro Landing Page

> Modern, production-ready landing oldal temetkezési vállalkozásoknak digitális megoldások népszerűsítésére.

## 🚀 Gyors Áttekintés

Ez egy **Astro 4** alapú, magyar nyelvű landing oldal a következő funkciókkal:

- ✅ **Responsive design** – Mobil-first megközelítés, Tailwind CSS
- ✅ **SEO optimalizált** – Meta tagek, sitemap, schema.org markup
- ✅ **Űrlap integráció** – Make.com webhook VAGY Resend email
- ✅ **Analytics** – Vercel Analytics / Plausible támogatás
- ✅ **GDPR ready** – Adatkezelési tájékoztató, cookie figyelmeztetés
- ✅ **Calendly/Cal.com** – Időpontfoglalás integráció
- ✅ **TypeScript** – Típusbiztos fejlesztés
- ✅ **Vercel optimalizált** – Egyszerű deployment

---

## 📋 Tartalomjegyzék

1. [Előfeltételek](#előfeltételek)
2. [Telepítés (Lokális Fejlesztés)](#telepítés-lokális-fejlesztés)
3. [Environment Változók Beállítása](#environment-változók-beállítása)
4. [Fejlesztési Parancsok](#fejlesztési-parancsok)
5. [Vercel Deployment](#vercel-deployment)
6. [Make.com Webhook Beállítás](#makecom-webhook-beállítás)
7. [Resend Email Beállítás](#resend-email-beállítás)
8. [Custom Domain Beállítás](#custom-domain-beállítás)
9. [Tartalom Testreszabása](#tartalom-testreszabása)
10. [SEO & Analytics](#seo--analytics)
11. [Troubleshooting](#troubleshooting)
12. [Acceptance Criteria](#acceptance-criteria)

---

## 🛠️ Előfeltételek

Mielőtt elkezdi, győződjön meg arról, hogy telepítve van:

- **Node.js** v18 vagy újabb ([letöltés](https://nodejs.org/))
- **npm**, **yarn** vagy **pnpm** csomagkezelő
- **Git** verziókezelő rendszer
- **Vercel fiók** (ingyenes) – [regisztráció](https://vercel.com/signup)
- **GitHub fiók** – a kód tárolásához

---

## 📦 Telepítés (Lokális Fejlesztés)

### 1. Projekt Klónozása vagy Letöltése

```bash
# Ha Git repository-ban van
git clone https://github.com/your-username/temetkezespro-portal.git
cd temetkezespro-portal

# Vagy egyszerűen másolja át a projekt mappát
```

### 2. Függőségek Telepítése

```bash
npm install

# Vagy yarn/pnpm használatával:
# yarn install
# pnpm install
```

Ez telepíti:
- Astro 4.x
- Tailwind CSS
- TypeScript
- Lucide Icons
- Resend SDK (email küldéshez)
- Összes további dependency

### 3. Environment Változók Másolása

```bash
cp .env.example .env
```

Ezután nyissa meg a `.env` fájlt és töltse ki a megfelelő értékekkel (lásd lentebb).

### 4. Lokális Development Server Indítása

```bash
npm run dev
```

A projekt elérhető lesz: **http://localhost:4321**

---

## 🔐 Environment Változók Beállítása

Nyissa meg a `.env` fájlt és töltse ki:

### Kötelező Változók

```env
# Site URL (production)
PUBLIC_SITE_URL=https://temetkezespro.hu

# Kapcsolati adatok
PUBLIC_CONTACT_EMAIL=info@temetkezespro.hu
PUBLIC_CONTACT_PHONE=+36 30 123 4567

# Lead form mód: 'make' VAGY 'resend'
LEAD_MODE=make

# Ha LEAD_MODE=make:
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/xxxxxxxxxxxxxxxx

# Ha LEAD_MODE=resend:
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
LEAD_TO_EMAIL=info@temetkezespro.hu
LEAD_FROM_EMAIL=noreply@temetkezespro.hu

# CSRF védelem (production)
ALLOWED_ORIGINS=temetkezespro.hu,www.temetkezespro.hu

# Calendly/Cal.com link
PUBLIC_CAL_URL=https://calendly.com/your-username/30min
```

### Opcionális Változók

```env
# Analytics
PUBLIC_ENABLE_VERCEL_ANALYTICS=true
PUBLIC_ENABLE_PLAUSIBLE=false
PUBLIC_PLAUSIBLE_DOMAIN=temetkezespro.hu
```

---

## 🧑‍💻 Fejlesztési Parancsok

| Parancs | Leírás |
|---------|--------|
| `npm run dev` | Fejlesztői szerver indítása (http://localhost:4321) |
| `npm run build` | Production build készítése (`dist/` mappába) |
| `npm run preview` | Build előnézete lokálisan |
| `npm run astro` | Astro CLI parancsok futtatása |

---

## ☁️ Vercel Deployment

### Módszer 1: Vercel Dashboard (Ajánlott Kezdőknek)

1. **GitHub Repository Létrehozása**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TemetkezésPro landing"
   git branch -M main
   git remote add origin https://github.com/your-username/temetkezespro-portal.git
   git push -u origin main
   ```

2. **Vercel Importálás**
   - Menj a [Vercel Dashboard](https://vercel.com/dashboard)-ra
   - Kattints **"Add New Project"** gombra
   - **Import Git Repository** → válaszd ki a GitHub repo-t
   - Vercel automatikusan felismeri az Astro projektet

3. **Environment Variables Beállítása**

   A Vercel projekt beállításokban:
   - Settings → Environment Variables
   - Add hozzá az ÖSSZES environment változót a `.env` fájlból
   - **FONTOS**: A `PUBLIC_` prefixű változók publikusak lesznek!

   Példa:
   ```
   PUBLIC_SITE_URL = https://temetkezespro.hu
   MAKE_WEBHOOK_URL = https://hook.eu1.make.com/xxxxx (SECRET)
   RESEND_API_KEY = re_xxxxxxxxx (SECRET)
   LEAD_MODE = make
   ```

4. **Deploy Indítása**
   - Kattints **"Deploy"** gombra
   - Vercel automatikusan:
     - Build-eli a projektet
     - Optimalizálja a statikus fájlokat
     - Létrehoz egy `.vercel.app` domain-t

5. **Production URL**
   - Az első deploy után kapsz egy URL-t: `https://temetkezespro-portal.vercel.app`
   - Ez azonnal elérhető és működik!

### Módszer 2: Vercel CLI (Haladóknak)

```bash
# Vercel CLI telepítése
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## 🔗 Make.com Webhook Beállítás

Ha `LEAD_MODE=make` van beállítva:

### 1. Make.com Scenario Létrehozása

1. Regisztrálj vagy jelentkezz be: [make.com](https://www.make.com/)
2. Kattints **"Create a new scenario"**
3. Keress rá: **"Webhooks"** → Add hozzá
4. Válaszd: **"Custom webhook"**
5. **Webhook létrehozása**:
   - Adj neki nevet: pl. "TemetkezésPro Lead"
   - Másoldd ki a webhook URL-t (kezdődik: `https://hook.eu1.make.com/...`)
6. **Teszteld a webhook-ot**:
   - A Make.com vár egy tesztelésre
   - Töltsd ki az űrlapot a weboldalon
   - Make.com automatikusan felismeri az adatstruktúrát

### 2. Google Sheets Kapcsolás (Példa)

1. Make.com scenarióban add hozzá: **"Google Sheets" modult**
2. Válaszd: **"Add a row"**
3. Kapcsold össze Google fiókkal
4. Válaszd ki a Spreadsheet-et és Sheet-et
5. Térképezd fel a mezőket:
   - Cégnév → Webhook: `company`
   - Település → Webhook: `city`
   - Név → Webhook: `name`
   - Telefon → Webhook: `phone`
   - Email → Webhook: `email`
   - Megjegyzés → Webhook: `message`
   - Timestamp → Webhook: `timestamp`

6. **Mentsd és aktiváld** a scenario-t

### 3. .env Frissítése

```env
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/xxxxxxxxxxxxxxxxx
```

---

## 📧 Resend Email Beállítás

Ha `LEAD_MODE=resend` van beállítva:

### 1. Resend Regisztráció

1. Regisztrálj: [resend.com](https://resend.com/)
2. Erősítsd meg email címed

### 2. Domain Hitelesítés

1. Dashboard → **"Domains"** → **"Add Domain"**
2. Add meg: `temetkezespro.hu`
3. Resend ad 3 DNS rekordot:
   - SPF (TXT)
   - DKIM (TXT)
   - DMARC (TXT)
4. **Add hozzá ezeket a DNS beállításaidhoz** (lásd DNS példa lentebb)
5. Várj 10-60 percet a propagációra
6. Verifikáld a domain-t Resend dashboard-on

### 3. API Kulcs Generálás

1. Dashboard → **"API Keys"** → **"Create API Key"**
2. Adj neki nevet: pl. "TemetkezésPro Production"
3. Másoldd ki a kulcsot (kezdődik: `re_...`)

### 4. .env Frissítése

```env
LEAD_MODE=resend
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
LEAD_TO_EMAIL=info@temetkezespro.hu
LEAD_FROM_EMAIL=noreply@temetkezespro.hu
```

### 5. Teszt Email Küldés

Töltsd ki az űrlapot → Ha minden jó, emailt fogsz kapni a `LEAD_TO_EMAIL` címre.

---

## 🌐 Custom Domain Beállítás

### 1. Domain Vásárlás

Vásárolj domain-t (pl. **temetkezespro.hu**) szolgáltatóknál:
- GoDaddy, Namecheap, CloudFlare, stb. (nemzetközi)
- Tárhely.eu, DotRoll (magyar)

### 2. Vercel Domain Hozzáadása

1. Vercel Dashboard → Projekt → **"Settings"** → **"Domains"**
2. Add hozzá: `temetkezespro.hu`
3. Vercel mutat egy A vagy CNAME rekordot, pl:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### 3. DNS Rekordok Beállítása

Menj a domain szolgáltatódhoz (pl. GoDaddy) → DNS Management:

#### Alap Rekordok (Vercel):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### Email Rekordok (Resend – opcionális):
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all
TTL: 3600

Type: TXT
Name: resend._domainkey
Value: [RESEND DKIM kulcs]
TTL: 3600

Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@temetkezespro.hu
TTL: 3600
```

### 4. Propagáció Ellenőrzése

DNS propagáció 10-60 perc:
```bash
# Ellenőrzés
dig temetkezespro.hu
nslookup temetkezespro.hu

# Online eszköz
https://www.whatsmydns.net/
```

### 5. SSL Tanúsítvány

Vercel automatikusan létrehoz **Let's Encrypt SSL** tanúsítványt.
- HTTPS automatikusan működik
- HTTP → HTTPS redirect beépített

---

## ✍️ Tartalom Testreszabása

### Szövegek Módosítása

1. **Hero headline** → `src/components/Hero.astro`
2. **Szolgáltatások** → `src/components/Features.astro`
3. **Hogyan működik** → `src/components/HowItWorks.astro`
4. **Árak** → `src/components/Pricing.astro`
5. **GYIK** → `src/components/FAQ.astro`

### Képek Cseréje

Helyettesítsd a `public/` mappában:
- `og-image.jpg` – Open Graph kép (1200x630px)
- `logo.png` – Céges logó (512x512px)
- `favicon.svg` – Favicon (tetszőleges SVG)

### Színek Módosítása

`tailwind.config.cjs` → `theme.extend.colors`:
```js
primary: {
  600: '#0284c7', // Fő szín (kék)
  700: '#0369a1',
}
```

---

## 📊 SEO & Analytics

### SEO Optimalizálás

✅ **Már kész:**
- Meta title & description minden oldalon
- OpenGraph & Twitter cards
- Schema.org JSON-LD (Organization, Product, LocalBusiness)
- Sitemap.xml (automatikus)
- robots.txt

🔧 **Teendő:**
1. Customizáld a meta leírásokat: `src/pages/*.astro`
2. Google Search Console beállítás:
   - Add hozzá domain-t
   - Sitemap URL: `https://temetkezespro.hu/sitemap-index.xml`
3. Lighthouse audit futtatás (Chrome DevTools)

### Vercel Analytics

```env
PUBLIC_ENABLE_VERCEL_ANALYTICS=true
```

Automatikusan működik Vercel-en, ingyenes 100k pageview-ig.

### Plausible Analytics (GDPR-friendly)

1. Regisztráció: [plausible.io](https://plausible.io/)
2. Add hozzá domain-t: `temetkezespro.hu`
3. `.env`:
   ```env
   PUBLIC_ENABLE_PLAUSIBLE=true
   PUBLIC_PLAUSIBLE_DOMAIN=temetkezespro.hu
   ```

---

## 🐛 Troubleshooting

### 1. Űrlap nem küldi el az adatokat

**Probléma:** "Network error" vagy 403 hiba.

**Megoldás:**
- Ellenőrizd: `.env` fájlban van `MAKE_WEBHOOK_URL` vagy `RESEND_API_KEY`
- CSRF védelem: add hozzá domain-t az `ALLOWED_ORIGINS`-hoz
- Make.com: aktiválva van a scenario?
- Resend: domain verifikálva van?

### 2. Build hiba: "Module not found"

**Probléma:** `npm run build` hibát dob.

**Megoldás:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 3. Vercel deployment timeout

**Probléma:** Vercel build 10 perc után timeout.

**Megoldás:**
- Ellenőrizd: nincs-e végtelen loop a kódban
- Astro config: `output: 'hybrid'` vagy `'static'`

### 4. Email nem érkezik meg (Resend)

**Probléma:** Űrlap küldés sikeres, de nincs email.

**Megoldás:**
- Resend Dashboard → "Logs" → ellenőrizd az emailt
- Spam mappát nézd meg
- DNS rekordok: SPF, DKIM helyesen van beállítva?

---

## ✅ Acceptance Criteria

Használd ezt a checklistet a projekt átvételéhez:

### Telepítés & Build
- [ ] `npm install` hiba nélkül lefut
- [ ] `npm run dev` elindítja a dev szervert
- [ ] `npm run build` sikeres production build
- [ ] Nincs TypeScript hiba

### Tartalom
- [ ] Hero szekció: headline, subheadline, CTA gombok
- [ ] Szolgáltatások: 6 feature kártya
- [ ] Hogyan működik: 3 lépés
- [ ] Előtte-utána story számokkal
- [ ] Árak: 3 csomag indikatív árral
- [ ] GYIK: minimum 6 kérdés-válasz
- [ ] Kapcsolat űrlap: 6 mező + adatkezelés checkbox

### Funkciók
- [ ] Mobil-first responsive design (tesztelve 320px-től)
- [ ] Header: sticky, mobil menü működik
- [ ] Footer: linkek, impresszum, adatkezelés
- [ ] Űrlap validáció: HTML5 + szerver oldali
- [ ] Űrlap küldés: Make VAGY Resend működik
- [ ] Sikeres küldés után: redirect `/koszonjuk`-ra
- [ ] Hiba esetén: hibaüzenet megjelenik

### SEO & Analytics
- [ ] Meta title & description minden oldalon
- [ ] OpenGraph képek beállítva
- [ ] Schema.org JSON-LD markup
- [ ] Sitemap.xml generálódik
- [ ] robots.txt helyes
- [ ] Vercel Analytics vagy Plausible működik (ha engedélyezve)

### Vercel Deployment
- [ ] GitHub repo létrehozva és pushed
- [ ] Vercel projekt importálva
- [ ] Environment változók beállítva
- [ ] Első deploy sikeres
- [ ] `.vercel.app` domain működik

### Custom Domain (opcionális)
- [ ] Domain megvásárolva
- [ ] DNS A rekord beállítva
- [ ] CNAME (www) beállítva
- [ ] SSL tanúsítvány aktív (HTTPS működik)
- [ ] Resend domain verifikálva (ha használod)

### GDPR & Jogi
- [ ] Adatkezelési tájékoztató oldal
- [ ] Impresszum oldal (cégadatokkal kitöltve)
- [ ] Űrlapon kötelező privacy checkbox
- [ ] Cookie szabályzat link (ha van cookie banner)

### Teljesítmény
- [ ] Lighthouse Score: Performance > 90
- [ ] Lighthouse Score: Accessibility > 90
- [ ] Lighthouse Score: SEO > 95
- [ ] Nincs console error production-ben

---

## 📚 További Fejlesztési Javaslatok

### 1. Város Oldalalak (Dynamic Routes)

Hozz létre város-specifikus oldalakat SEO-hoz:

```astro
// src/pages/[city].astro
---
export function getStaticPaths() {
  return [
    { params: { city: 'budapest' } },
    { params: { city: 'debrecen' } },
    { params: { city: 'szeged' } },
  ];
}
---
```

### 2. Blog Integráció

Astro Content Collections:
```bash
src/content/blog/
  - post-1.md
  - post-2.md
```

### 3. Multi-nyelv Támogatás

Astro i18n routing:
- `/hu/` – Magyar
- `/en/` – Angol
- `/de/` – Német

### 4. CRM Integráció

- HubSpot API
- Salesforce
- Pipedrive

---

## 📞 Támogatás & Kapcsolat

**Fejlesztő:** [Your Name / Agency]
**Email:** [your-email@example.com]
**GitHub:** [github.com/your-username]

---

## 📄 Licensz

MIT License – szabadon használható és módosítható.

---

**Elkészítve:** 2025. november 3.
**Astro verzió:** 4.x
**Node.js verzió:** 18+
**Tailwind CSS verzió:** 3.x

🎉 **Sok sikert a projekthez!**

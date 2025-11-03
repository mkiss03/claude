# TemetkezésPro Landing Page

Modern, reszponzív landing oldal temetkezési vállalkozások számára készült B2B SaaS megoldáshoz. Next.js 14, shadcn/ui komponensekkel és Framer Motion animációkkal.

## ✨ Jellemzők

- **Modern UI**: shadcn/ui komponensek Radix UI primitívekkel
- **Animációk**: Framer Motion viewport trigger-ekkel
- **Reszponzív**: Mobile-first design Tailwind CSS-sel
- **SEO optimalizált**: Metadata és OpenGraph tagek
- **GDPR kompatibilis**: Adatkezelési tájékoztató és süti kezelés
- **Form integráció**: Make.com webhook VAGY Resend email
- **TypeScript**: Teljes típusbiztonság
- **Vercel Ready**: Egyszerű telepítés

## 🚀 Technológiák

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS változók
- **Komponensek**: shadcn/ui (Radix UI)
- **Animáció**: Framer Motion
- **Ikonok**: Lucide React
- **Email/Webhook**: Resend vagy Make.com
- **TypeScript**: Strict mode

## 📦 Telepítés

### 1. Függőségek telepítése

```bash
npm install
```

### 2. Környezeti változók beállítása

Másold le a `.env.example` fájlt `.env.local` névre:

```bash
cp .env.example .env.local
```

Töltsd ki a következő értékeket:

```env
# Válassz egy módszert: 'make' vagy 'resend'
LEAD_MODE=make

# Make.com használata esetén
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/your-webhook-id

# Resend használata esetén
RESEND_API_KEY=re_your_api_key
RESEND_FROM=TemetkezésPro <hello@temetkezespro.hu>
RESEND_TO=info@temetkezespro.hu

# Biztonsági beállítás
ALLOWED_ORIGINS=temetkezespro.hu
```

### 3. Fejlesztői szerver indítása

```bash
npm run dev
```

Nyisd meg a böngésződben: [http://localhost:3000](http://localhost:3000)

## 🔧 Konfiguráció

### Make.com Webhook Beállítása

1. Lépj be a [Make.com](https://make.com) fiókodba
2. Hozz létre egy új Scenario-t
3. Adj hozzá egy **Webhook** modult trigger-ként
4. Válaszd a "Custom webhook" opciót
5. Másold ki a webhook URL-t
6. Állítsd be a `.env.local`-ban:
   ```env
   LEAD_MODE=make
   MAKE_WEBHOOK_URL=https://hook.eu1.make.com/your-webhook-id
   ```
7. Add hozzá a kívánt modulokat (pl. Google Sheets, Email, CRM)

**Várható adatstruktúra a webhookből:**

```json
{
  "name": "Kovács János",
  "email": "kovacs@example.com",
  "phone": "+36 30 123 4567",
  "company": "Temetkezés Kft.",
  "message": "Érdeklődöm a termék iránt",
  "consent": true,
  "timestamp": "2025-11-03T10:30:00.000Z",
  "source": "temetkezespro-landing"
}
```

### Resend Email Beállítása

1. Regisztrálj a [Resend.com](https://resend.com)-on
2. Igazold a domain-edet (pl. `temetkezespro.hu`)
3. Hozz létre egy API kulcsot
4. Állítsd be a `.env.local`-ban:
   ```env
   LEAD_MODE=resend
   RESEND_API_KEY=re_your_api_key
   RESEND_FROM=TemetkezésPro <hello@temetkezespro.hu>
   RESEND_TO=info@temetkezespro.hu
   ```

## 🎨 Testreszabás

### Színek módosítása

A színeket a `app/globals.css` fájlban találod CSS változókként:

```css
:root {
  --primary: 221 83% 53%;  /* Kék */
  --secondary: 210 40% 96%; /* Világos szürke */
  /* ... további színek */
}
```

### Tartalom szerkesztése

A főbb tartalmak a következő fájlokban találhatók:

- **Főoldal szekciók**: `components/sections/`
  - `hero.tsx` - Hero szekció
  - `features.tsx` - Funkciók
  - `pricing.tsx` - Árazás
  - `faq.tsx` - GYIK
  - `contact-form.tsx` - Kapcsolat form
  - `footer.tsx` - Lábléc

- **Oldalak**: `app/`
  - `page.tsx` - Főoldal
  - `koszonjuk/page.tsx` - Köszönjük oldal
  - `adatkezeles/page.tsx` - Adatkezelési tájékoztató
  - `impresszum/page.tsx` - Impresszum

### Új komponens hozzáadása

shadcn/ui használatával könnyen adj hozzá új komponenseket:

```bash
npx shadcn-ui@latest add [component-name]
```

Példa:
```bash
npx shadcn-ui@latest add dialog
```

## 🌐 Vercel Telepítés

### 1. Vercel CLI telepítése (opcionális)

```bash
npm i -g vercel
```

### 2. Projekt telepítése Vercel-re

#### A) Vercel CLI-val

```bash
vercel
```

#### B) GitHub Integration-nel

1. Push-old a kódot GitHub-ra
2. Lépj be [vercel.com](https://vercel.com)-ra
3. Kattints az "Import Project" gombra
4. Válaszd ki a GitHub repository-t
5. Állítsd be a környezeti változókat (lásd lent)
6. Kattints a "Deploy" gombra

### 3. Környezeti változók beállítása Vercel-en

A Vercel Dashboard-on állítsd be a következő environment variables-t:

```
LEAD_MODE=make
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/...
ALLOWED_ORIGINS=temetkezespro.hu,www.temetkezespro.hu
```

vagy Resend esetén:

```
LEAD_MODE=resend
RESEND_API_KEY=re_...
RESEND_FROM=TemetkezésPro <hello@temetkezespro.hu>
RESEND_TO=info@temetkezespro.hu
ALLOWED_ORIGINS=temetkezespro.hu,www.temetkezespro.hu
```

### 4. Domain beállítása

1. Menj a Project Settings > Domains menübe
2. Add hozzá a domain-edet: `temetkezespro.hu`
3. Állítsd be a DNS rekordokat a domain szolgáltatódnál:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

## 📊 Analytics

### Vercel Analytics (Beépített)

A Vercel Analytics automatikusan engedélyezett Vercel-re telepített Next.js alkalmazásoknál. Nincs további konfiguráció szükséges.

### Plausible Analytics (Opcionális)

Ha Plausible-t szeretnél használni:

1. Regisztrálj a [Plausible.io](https://plausible.io)-n
2. Add hozzá a domain-edet
3. Állítsd be az environment variable-t:
   ```env
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=temetkezespro.hu
   ```
4. Add hozzá a script-et az `app/layout.tsx`-hez:
   ```tsx
   <script defer data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js"></script>
   ```

## 🧪 Build és Teszt

### Development build

```bash
npm run dev
```

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## 📁 Projekt Struktúra

```
temetkezespro-landing/
├── app/
│   ├── api/
│   │   └── lead/
│   │       └── route.ts          # API endpoint lead küldéshez
│   ├── adatkezeles/
│   │   └── page.tsx              # Adatkezelési tájékoztató
│   ├── impresszum/
│   │   └── page.tsx              # Impresszum
│   ├── koszonjuk/
│   │   └── page.tsx              # Köszönjük oldal
│   ├── globals.css               # Global CSS + Tailwind
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Főoldal
├── components/
│   ├── sections/
│   │   ├── hero.tsx              # Hero szekció
│   │   ├── features.tsx          # Funkciók
│   │   ├── pricing.tsx           # Árazás
│   │   ├── faq.tsx               # GYIK
│   │   ├── contact-form.tsx      # Kapcsolat form
│   │   └── footer.tsx            # Lábléc
│   └── ui/
│       ├── button.tsx            # shadcn/ui komponensek
│       ├── card.tsx
│       ├── accordion.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── textarea.tsx
│       └── checkbox.tsx
├── lib/
│   └── utils.ts                  # Utility függvények
├── .env.example                  # Environment variables példa
├── .gitignore
├── components.json               # shadcn/ui konfig
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🔒 Biztonság

- **CSRF védelem**: ALLOWED_ORIGINS environment variable
- **Input validáció**: Email és telefonszám validáció
- **HTTPS**: Minden production környezetben kötelező
- **Environment variables**: Soha ne commit-old a `.env.local` fájlt!

## 📝 Tartalmi irányelvek

Az oldal tartalma GDPR-kompatibilis és nem tartalmaz félrevezető információkat:

- ❌ "Digitális e-Anyakönyv" helyett → ✅ "Belső elhunyt-nyilvántartás"
- ❌ "50+ ügyfél" helyett → ✅ "Pilot fázis, partnereket keresünk"
- ❌ "24/7 support" helyett → ✅ "Tervezett 24/7 a Pro+ csomagban"
- ✅ Explicit disclaimer: "Nem kapcsolódunk közvetlenül az e-Anyakönyvhöz"

## 🐛 Hibaelhárítás

### Build error: Module not found

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript error

```bash
npm run lint
```

### API endpoint nem működik

Ellenőrizd a `.env.local` fájlt és a environment variables-t Vercel-en.

## 📞 Támogatás

Ha kérdésed van:

- Email: info@temetkezespro.hu
- Telefon: +36 30 123 4567

## 📄 Licensz

© 2025 TemetkezésPro. Minden jog fenntartva.

---

**Készítette**: Claude AI
**Verzió**: 1.0.0 (Next.js)
**Utolsó frissítés**: 2025-11-03

# 🚀 Vercel Deployment Útmutató - TemetkezésPro

## ✅ Amit már megcsináltam automatikusan:

1. ✅ `vercel.json` fájl létrehozva → Next.js konfiguráció
2. ✅ `.env.local` fájl létrehozva → Lokális fejlesztéshez
3. ✅ Minden git-be push-olva
4. ✅ Build hibák javítva (standalone mode eltávolítva)

---

## 🎯 VÁLASSZ EGY MEGOLDÁST:

### OPCIÓ A: Resend Email (⭐ AJÁNLOTT - Egyszerűbb!)
- ✅ 2 perc setup
- ✅ Ingyenes 100 email/nap
- ✅ Megbízható email kézbesítés
- ✅ Nincs Make.com workflow szerkesztés
- **→ Ugorj a "2A. Resend Email Setup" részhez**

### OPCIÓ B: Make.com Webhooks
- ⚠️ Bonyolultabb setup
- ✅ Több integráció (Google Sheets, CRM, stb.)
- ✅ Workflow automáció
- **→ Ugorj a "2B. Make.com Setup" részhez**

---

## ⚠️ Amit NEKED kell megcsinálnod a Vercel Dashboard-on:

### 🔧 1. LÉPÉS: Output Directory beállítása (FONTOS!)

**Probléma:** A Vercel még az Astro projekt beállításait használja ("dist"), de most Next.js-t használunk (".next").

**Megoldás:**

1. Menj a **https://vercel.com** oldalra és jelentkezz be
2. Válaszd ki a **temetkezespro** (vagy `claude`) projektet
3. Kattints a **Settings** gombra (bal oldali menü)
4. Görgess le a **"Build & Development Settings"** részhez
5. Keresd meg a **"Output Directory"** mezőt
6. **TÖRÖLD KI** a "dist" értéket
   - Vagy írj be egy pontot: `.`
   - Vagy hagyd teljesen üresen
7. Kattints a **Save** gombra

**VAGY egyszerűbben:** A `vercel.json` fájl amit készítettem automatikusan felülírja ezt. Elég ha csak újra deployalsz.

---

### 🌐 2A. Resend Email Setup (⭐ AJÁNLOTT - Egyszerű!)

#### 1. Resend regisztráció és API kulcs

1. **Menj a:** https://resend.com
2. **Sign Up** (ingyenes, nincs bankkártya szükséges)
3. **Dashboard** → **API Keys** → **Create API Key**
4. **Másold ki** az API kulcsot (pl: `re_123abc...`)

#### 2. Vercel Environment Variables

**Vercel Dashboard** → **Settings** → **Environment Variables**

**Adj hozzá 3 változót:**

```
Variable Name: LEAD_MODE
Value: resend
```
Environments: ✅ Production ✅ Preview ✅ Development → **Save**

```
Variable Name: RESEND_API_KEY
Value: re_your_api_key_here  ← IDE a saját API kulcsodat!
```
Environments: ✅ Production ✅ Preview ✅ Development → **Save**

```
Variable Name: RESEND_TO
Value: mkiss0516@gmail.com  ← IDE a saját email címed!
```
Environments: ✅ Production ✅ Preview ✅ Development → **Save**

**Kész!** → Ugorj a "3. Redeploy" részhez!

---

### 🌐 2B. Make.com Webhooks Setup (Haladó)

⚠️ **FIGYELEM:** Ha **Mailhook**-ot használsz jelenleg → az **NEM FOG MŰKÖDNI**!

#### Mailhook vs Webhooks - Mi a különbség?

**❌ Mailhook** (amit most használsz):
```
hsuw9ump0ue7h29edkuo6be5bl8ruyh8@hook.eu2.make.com  ← EMAIL cím
```
- EMAIL-t fogad
- Az űrlap HTTP POST-ot küld, nem email-t!

**✅ Webhooks** (amit kellene használni):
```
https://hook.eu2.make.com/xxxxxxxxx  ← HTTP URL
```
- HTTP POST request-et fogad
- Ez működik az űrlappal!

#### Make.com új Scenario létrehozása

1. **Make.com** → **Scenarios** → **Create a new scenario**
2. **Kattints a + gombra** → **Keresd: "Webhooks"**
3. **Válaszd:** Webhooks → **Custom Webhook**
4. **Add a webhook** → **Add**
5. **Webhook name:** "TemetkezésPro Lead"
6. **Másold ki** a webhook URL-t:
   ```
   https://hook.eu2.make.com/XXXXXXXXX
   ```

7. **Adj hozzá Gmail modult:**
   - Kattints a webhook **JOBBRA** levő **+** gombra
   - Keresd: "Gmail"
   - Válaszd: **Send an Email**
   - To: `mkiss0516@gmail.com`
   - Subject: `🚀 Új Lead: {{1.name}} - {{1.company}}`
   - Body:
   ```
   📨 ÚJ ÉRDEKLŐDŐ
   ════════════════════

   👤 NÉV: {{1.name}}
   📧 EMAIL: {{1.email}}
   📞 TELEFON: {{1.phone}}
   🏢 CÉG: {{1.company}}
   🏙️ TELEPÜLÉS: {{1.city}}

   💬 ÜZENET:
   {{1.message}}

   ✅ GDPR: {{1.consent}}
   ⏰ IDŐPONT: {{1.timestamp}}
   🌐 FORRÁS: {{1.source}}
   ```

   **FONTOS:** A `{{1.name}}` mezőket **a Make.com-ban válaszd ki** a webhook output listából!

8. **Save** → **Turn ON** (kapcsoló jobbra felül)

#### Vercel Environment Variables

**Vercel Dashboard** → **Settings** → **Environment Variables**

```
Variable Name: LEAD_MODE
Value: make
```
Environments: ✅ Production ✅ Preview ✅ Development → **Save**

```
Variable Name: MAKE_WEBHOOK_URL
Value: https://hook.eu2.make.com/ur0az5vmddn4v8s9o6pspp19v4gt1a8w
```
Environments: ✅ Production ✅ Preview ✅ Development → **Save**

---

### 🔄 3. LÉPÉS: Redeploy

Miután beállítottad a környezeti változókat:

**OPCIÓ A: Automatikus (ajánlott)**
- A git push már megtörtént
- A Vercel automatikusan újra deployal
- Várj 2-3 percet

**OPCIÓ B: Manuális**
1. Menj a **"Deployments"** tabra (felül)
2. Keresd meg a legutóbbi deployment-et
3. Kattints a **három pontra (⋯)** a deployment sorban
4. Válaszd a **"Redeploy"** opciót
5. Várj 2-3 percet

---

## 🎉 4. LÉPÉS: Tesztelés

1. Nyisd meg: **https://www.temetkezespro.com**
2. Görgess le az űrlaphoz
3. Töltsd ki az összes mezőt:
   - Cégnév *
   - Település *
   - Kapcsolattartó neve *
   - Telefonszám *
   - E-mail cím *
   - Megjegyzés (opcionális)
   - ✅ GDPR hozzájárulás *
4. Kattints a **"Küldés"** gombra
5. Ha minden rendben, átirányít a **"/koszonjuk"** oldalra ✅

---

## 🔍 5. LÉPÉS: Make.com ellenőrzése

**FONTOS:** A webhook trigger önmagában NEM elég! Az adatok beérkeznek a Make.com-ra, de **sehova nem mennek**.

### Hozzáadandó modulok a webhook után:

#### OPCIÓ A: Email küldés
1. **Webhook Trigger** → ➕ **Gmail** modul
2. Gmail modulban:
   - **To:** `info@temetkezespro.hu`
   - **Subject:** `Új érdeklődés: {{name}} - {{company}}`
   - **Body:**
     ```
     Új érdeklődés érkezett:

     Név: {{name}}
     Email: {{email}}
     Telefon: {{phone}}
     Cég: {{company}}
     Település: {{city}}
     Üzenet: {{message}}
     GDPR: {{consent}}

     Időpont: {{timestamp}}
     ```

#### OPCIÓ B: Google Sheets mentés
1. **Webhook Trigger** → ➕ **Google Sheets: Add a Row** modul
2. Google Sheets modulban:
   - Válaszd ki a táblázatot
   - Mapold az oszlopokat:
     - A oszlop: `{{name}}`
     - B oszlop: `{{email}}`
     - C oszlop: `{{phone}}`
     - D oszlop: `{{company}}`
     - E oszlop: `{{city}}`
     - F oszlop: `{{message}}`
     - G oszlop: `{{timestamp}}`

#### OPCIÓ C: Mindkettő (Ajánlott!)
```
Webhook → Gmail → Google Sheets
```

---

## 📊 Várható eredmény:

### ✅ Sikeres űrlap küldés:
- **Válasz:** 200 OK
- **Átirányítás:** `/koszonjuk` oldalra
- **Make.com:** Webhook fogadva
- **Email:** Értesítés az info@temetkezespro.hu címre
- **Google Sheets:** Új sor hozzáadva a táblázathoz

### ❌ Ha még mindig 500-as hiba:
- Ellenőrizd hogy **mindkét** környezeti változót beállítottad
- Ellenőrizd hogy **mindhárom** környezetet (Production/Preview/Development) bepipáltad
- **Redeploy** a projektet
- Várj 2-3 percet és próbáld újra

---

## 🧪 Lokális tesztelés (azonnal működik):

Ha nem akarsz várni a Vercel deployment-re:

```bash
npm run dev
```

Majd nyisd meg: **http://localhost:3000**

A lokális környezetben már működik az űrlap, mert a `.env.local` fájl be van állítva! ✅

---

## 📞 Hibakeresés:

### Console-ban látható hibák:

**"A webhook nincs beállítva"**
→ A `MAKE_WEBHOOK_URL` nincs beállítva a Vercel-en

**"Origin not allowed"**
→ A `ALLOWED_ORIGINS` túl szigorú (de alapból üres, szóval ez nem probléma)

**"Kötelező mezők hiányoznak"**
→ Valamelyik kötelező mező (*) nincs kitöltve

**"Érvénytelen email cím"**
→ Rossz formátumú email

**"Érvénytelen telefonszám"**
→ Túl rövid telefonszám (min 9 számjegy)

---

## ✨ Összefoglalás - Checklist:

- [ ] Vercel Dashboard megnyitva
- [ ] Settings → Build & Development Settings → Output Directory törölve
- [ ] Settings → Environment Variables → `LEAD_MODE=make` hozzáadva (mind 3 environment)
- [ ] Settings → Environment Variables → `MAKE_WEBHOOK_URL=https://...` hozzáadva (mind 3 environment)
- [ ] Redeploy végrehajtva
- [ ] 2-3 perc várakozás
- [ ] www.temetkezespro.com megnyitva
- [ ] Űrlap kitöltve és elküldve
- [ ] `/koszonjuk` oldalra átirányítva ✅
- [ ] Make.com-ban webhook trigger fogadott adatot
- [ ] Gmail/Google Sheets modul hozzáadva a Make.com-ban
- [ ] Email értesítés megérkezett VAGY Google Sheets-ben új sor

**Ha minden kész → AZ ŰRLAP MŰKÖDIK! 🎉**

# 🔗 Make.com Webhook Beállítás – TemetkezésPro

> Lépésről lépésre útmutató a Make.com webhook beállításához az űrlap adatok fogadására.

---

## 📋 Mi a Make.com?

A **Make.com** (korábban Integromat) egy no-code automatizálási platform, amely lehetővé teszi különböző alkalmazások összekötését és automatizált workflow-k létrehozását.

**Miért jó?**
- ✅ Vizuális workflow builder
- ✅ 1000+ integráció (Google Sheets, Gmail, Slack, CRM, stb.)
- ✅ Ingyenes tier: 1000 operation/hó
- ✅ Egyszerű webhook fogadás
- ✅ Real-time adatfeldolgozás

---

## 🚀 1. Lépés: Make.com Regisztráció

1. Menj a [make.com](https://www.make.com/)-ra
2. Kattints **"Sign up for free"**
3. Regisztrálj:
   - Email + jelszó
   - VAGY Google/GitHub fiókkal
4. Erősítsd meg email címed
5. Válaszd a Free tier-t (elég kezdéshez)

---

## 🛠️ 2. Lépés: Új Scenario Létrehozása

### A) Scenario Indítása

1. Dashboard → Kattints **"Create a new scenario"**
2. Scenario neve: `TemetkezésPro Lead Capture`
3. Kattints **"Continue"**

### B) Webhook Modul Hozzáadása

1. Keresőbe írd: **"Webhooks"**
2. Válaszd ki: **"Webhooks"** (Make beépített modul)
3. Kattints a **"+"** gombra a vásznon
4. Válaszd: **"Custom webhook"**

### C) Webhook Létrehozása

1. Kattints **"Add"** (webhook létrehozás)
2. Webhook neve: `TemetkezésPro Lead Form`
3. Kattints **"Save"**
4. **Másoldd ki a webhook URL-t!**
   ```
   https://hook.eu1.make.com/xxxxxxxxxxxxxxxxxxxxxxx
   ```
   Ez a URL kerül a `.env` fájlba: `MAKE_WEBHOOK_URL`

---

## 📊 3. Lépés: Webhook Tesztelése

### A) Webhook Várakozás

A Make.com vásznon látni fogod:
```
"Waiting for a webhook call..."
```

### B) Teszt Lead Küldése

1. Menj a TemetkezésPro weboldalra
2. Görgess le az űrlaphoz
3. Töltsd ki **teszt adatokkal**:
   ```
   Cégnév: Teszt Temetkezés Kft.
   Település: Budapest
   Név: Kovács János
   Telefon: +36 30 123 4567
   Email: test@example.com
   Megjegyzés: Ez egy teszt üzenet
   ✅ Adatkezelés elfogadása
   ```
4. Kattints **"Küldés"**

### C) Make.com Fogadás

A Make.com automatikusan felismeri az adatokat:
```json
{
  "company": "Teszt Temetkezés Kft.",
  "city": "Budapest",
  "name": "Kovács János",
  "phone": "+36 30 123 4567",
  "email": "test@example.com",
  "message": "Ez egy teszt üzenet",
  "timestamp": "2025-11-03T10:30:00.000Z",
  "source": "TemetkezésPro Landing"
}
```

Kattints **"OK"** → Az adatstruktúra elmentve.

---

## 📧 4. Lépés: Google Sheets Integráció (Példa)

### A) Google Sheets Modul Hozzáadása

1. Kattints a **"+"** gombra a webhook után
2. Keresőbe írd: **"Google Sheets"**
3. Válaszd: **"Google Sheets"**
4. Akció: **"Add a row"** (új sor hozzáadása)

### B) Google Fiók Kapcsolás

1. Kattints **"Add"** (connection)
2. Válaszd: **"Google"**
3. Jelentkezz be Google fiókkal
4. Engedélyezd a hozzáférést (Sheets access)

### C) Spreadsheet Kiválasztása

1. **Spreadsheet:** Válaszd ki a táblázatot (pl. "TemetkezésPro Leads")
   - Ha nincs ilyen, hozz létre egy új Google Sheets táblát:
     ```
     Columns: Timestamp | Cégnév | Település | Név | Telefon | Email | Megjegyzés
     ```
2. **Sheet:** Válaszd ki a lap nevét (pl. "Sheet1" vagy "Leads")

### D) Mezők Feltérképezése

Kattints minden mezőre → Válaszd ki a webhook adatot:

| Spreadsheet Oszlop | Webhook Mező |
|-------------------|--------------|
| Timestamp | `timestamp` |
| Cégnév | `company` |
| Település | `city` |
| Név | `name` |
| Telefon | `phone` |
| Email | `email` |
| Megjegyzés | `message` |

**Tipp:** Drag & drop a webhook adatokat a megfelelő mezőkbe.

---

## ✅ 5. Lépés: Scenario Mentése és Aktiválása

### A) Scenario Tesztelése

1. Kattints **"Run once"** (alul)
2. Küldd el újra az űrlapot a weboldalon
3. Figyeld a Make.com vásznon a zöld pipákat
4. Ellenőrizd a Google Sheets-et → új sor bekerült!

### B) Scenario Aktiválása

1. Ha minden működik → Kattints a kapcsoló gombra (bal alsó sarok)
2. **"OFF" → "ON"**
3. Scenario mostantól folyamatosan fut!

---

## 🎯 6. Lépés: További Integrációk (Opcionális)

### Email Értesítés (Gmail/Email)

**Cél:** Kapj emailt minden új lead-ről.

1. Add hozzá: **"Email"** vagy **"Gmail"** modult
2. Akció: **"Send an email"**
3. Mezők:
   ```
   To: info@temetkezespro.hu
   Subject: Új érdeklődő: {{company}} - {{name}}
   Body:
   Cégnév: {{company}}
   Település: {{city}}
   Név: {{name}}
   Telefon: {{phone}}
   Email: {{email}}
   Megjegyzés: {{message}}
   ```

### Slack Értesítés

**Cél:** Slack channel-be érkezik értesítés.

1. Add hozzá: **"Slack"** modult
2. Akció: **"Create a message"**
3. Channel: `#sales` vagy `#leads`
4. Message:
   ```
   🎉 Új érdeklődő!
   Cég: {{company}} ({{city}})
   Kapcsolattartó: {{name}}
   Email: {{email}} | Telefon: {{phone}}
   ```

### CRM Integráció (HubSpot, Pipedrive, Salesforce)

1. Keress rá a CRM nevre (pl. **"HubSpot"**)
2. Akció: **"Create a contact"** vagy **"Create a lead"**
3. Térképezd fel a mezőket
4. Automata lead létrehozás! 🎉

---

## 🔄 7. Lépés: Scenario Struktúra (Komplex Példa)

```
┌─────────────────┐
│ Webhook Trigger │
│ (Lead form)     │
└────────┬────────┘
         │
         ├─────────────────────┐
         │                     │
┌────────▼───────┐   ┌─────────▼────────┐
│ Google Sheets  │   │ Email (Gmail)    │
│ Add a row      │   │ Send to sales    │
└────────┬───────┘   └─────────┬────────┘
         │                     │
┌────────▼───────────────────────────────┐
│ Slack                                  │
│ Send message to #leads                 │
└────────────────────────────────────────┘
```

**Működés:**
1. Webhook fogadja az űrlap adatokat
2. Google Sheets-be beírja
3. Email küld a sales team-nek
4. Slack értesítés #leads channel-be

---

## 📊 8. Webhook URL Beállítása a Projektben

### A) .env Fájl Frissítése

```env
# Make.com webhook
LEAD_MODE=make
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/xxxxxxxxxxxxxxxxxxxxxxx
```

### B) Vercel Environment Variables

Ha már Vercel-en vagy:
1. Vercel Dashboard → Projekt → **Settings** → **Environment Variables**
2. Add hozzá:
   ```
   Key: MAKE_WEBHOOK_URL
   Value: https://hook.eu1.make.com/xxxxxxxxxxxxxxxxxxxxxxx
   Environment: Production, Preview
   ```
3. **Redeploy** a projektet

---

## 🐛 Troubleshooting

### ❌ Probléma: "Webhook nem fogad adatokat"

**Megoldás:**
1. Make.com scenario **ON** állapotban van?
2. Webhook URL helyes a `.env`-ben?
3. Űrlap küldés sikeres? (Network tab: 200 OK)
4. Make.com History → látható a request?

---

### ❌ Probléma: "Google Sheets nem írja be az adatokat"

**Megoldás:**
1. Google fiók kapcsolva van?
2. Spreadsheet & Sheet név helyes?
3. Mezők helyesen térképezve?
4. Make.com scenario teszt: "Run once" → hibát mutat?

---

### ❌ Probléma: "Make.com execution limit exceeded"

**Hiba:** Ingyenes tier túllépése (1000 operation/hó)

**Megoldás:**
- Upgrade Make.com-ra (Core tier: $9/hó, 10k operations)
- Vagy optimalizáld a scenario-t (kevesebb modul)
- Vagy válts Resend email-re (`.env`: `LEAD_MODE=resend`)

---

## 💡 Tippek & Best Practices

### 1. Webhook URL Titok

⚠️ **NE oszd meg senkivel a webhook URL-t!**
- Bárki, aki ismeri, képes adatot küldeni
- Ha kiszivárgott: regenerálj új webhook-ot

### 2. Scenario Dokumentálás

- Add hozzá **"Note"** modulokat a vásznon
- Kommenteld, hogy melyik modul mit csinál

### 3. Error Handling

Add hozzá **"Error Handler"** modult:
1. Jobb klikk a modulra → **"Add error handler"**
2. Akció: Email küldés hiba esetén

### 4. Data Storage (History)

Make.com Data Store modul:
- Tárold az összes lead-et Make.com-ban is
- Backup a Google Sheets mellé

---

## 📚 Források

**Make.com Dokumentáció:**
- [Webhooks](https://www.make.com/en/help/modules/webhooks)
- [Google Sheets](https://www.make.com/en/help/modules/google-sheets)
- [Scenarios](https://www.make.com/en/help/scenarios)

**Video Tutorial:**
- [Make.com Webhook Tutorial (YouTube)](https://www.youtube.com/results?search_query=make.com+webhook+tutorial)

---

## 🎉 Kész!

Ha minden lépést követtél:
✅ **Make.com webhook működik!**
✅ **Leadek automatikusan Google Sheets-be kerülnek**
✅ **Email/Slack értesítések működnek**

**Következő lépés:** Vercel deployment (lásd `VERCEL_DEPLOYMENT.md`)

---

**Készült:** 2025. november 3.
**Projekt:** TemetkezésPro
**Verzió:** 1.0

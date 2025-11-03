# 🚀 Vercel Deployment Útmutató – TemetkezésPro

> Lépésről lépésre útmutató a TemetkezésPro landing oldal Vercelre történő telepítéséhez.

---

## 📋 Előfeltételek

- ✅ Működő GitHub fiók
- ✅ Vercel fiók ([regisztráció ingyen](https://vercel.com/signup))
- ✅ Elkészült TemetkezésPro projekt (ez a repository)
- ✅ Kitöltött `.env` fájl (vagy legalább tudod a szükséges értékeket)

---

## 🔄 1. Lépés: GitHub Repository Létrehozása

### A) Ha még nincs Git repository

```bash
# Navigálj a projekt mappába
cd temetkezespro-portal

# Git inicializálás
git init

# Fájlok hozzáadása
git add .

# Első commit
git commit -m "Initial commit: TemetkezésPro Astro landing page"

# Branch átnevezése main-re
git branch -M main
```

### B) GitHub Repository Létrehozása

1. Menj a [GitHub.com](https://github.com)-ra
2. Kattints jobb felül a **"+"** → **"New repository"**
3. Repository neve: `temetkezespro-portal` (vagy tetszőleges)
4. **NE pipáld be** a "Initialize with README"-t
5. Kattints **"Create repository"**

### C) Lokális Projekt Összekapcsolása GitHub-bal

```bash
# Remote hozzáadása (helyettesítsd a your-username-et!)
git remote add origin https://github.com/your-username/temetkezespro-portal.git

# Push
git push -u origin main
```

✅ **Ellenőrzés:** Frissítsd a GitHub oldalt → láthatóak a fájlok.

---

## ☁️ 2. Lépés: Projekt Importálása Vercel-be

### A) Vercel Belépés

1. Menj a [Vercel Dashboard](https://vercel.com/dashboard)-ra
2. Ha még nincs fiókod, regisztrálj **GitHub fiókkal** (ajánlott)

### B) Új Projekt Létrehozása

1. Kattints **"Add New..."** → **"Project"**
2. **Import Git Repository** szekció:
   - Kattints **"Import"** a `temetkezespro-portal` repository mellett
   - Ha nem látod: kattints **"Adjust GitHub App Permissions"** → add hozzá a repo-t

### C) Configure Project

**Framework Preset:**
- Vercel **automatikusan felismeri** az Astro-t
- Ha nem: válaszd manuálisan **"Astro"**

**Root Directory:**
- Hagyd: `./` (gyökér)

**Build and Output Settings:**
- Vercel automatikusan beállítja:
  ```
  Build Command: npm run build
  Output Directory: dist
  Install Command: npm install
  ```

⚠️ **Ne változtass ezen, hacsak nem tudod, mit csinálsz!**

---

## 🔑 3. Lépés: Environment Variables Beállítása

Ez a **legfontosabb lépés!** Az environment változók nélkül az űrlap NEM fog működni.

### A) Environment Variables Hozzáadása Vercel-ben

A "Configure Project" oldalon görgess le → **Environment Variables** szekció.

### B) Változók Hozzáadása

Kattints **"Add"** minden változóhoz:

#### 🟢 Kötelező Változók (Minimális Működéshez)

| Key | Value | Environment |
|-----|-------|-------------|
| `PUBLIC_SITE_URL` | `https://temetkezespro.hu` | Production, Preview, Development |
| `PUBLIC_CONTACT_EMAIL` | `info@temetkezespro.hu` | Production, Preview, Development |
| `PUBLIC_CONTACT_PHONE` | `+36 30 123 4567` | Production, Preview, Development |
| `LEAD_MODE` | `make` (vagy `resend`) | Production, Preview, Development |
| `ALLOWED_ORIGINS` | `temetkezespro.hu,www.temetkezespro.hu` | Production |

#### 🔵 Make.com Webhook (ha LEAD_MODE=make)

| Key | Value | Environment |
|-----|-------|-------------|
| `MAKE_WEBHOOK_URL` | `https://hook.eu1.make.com/xxxxx` | Production, Preview |

⚠️ **FONTOS:** Ez a webhook URL **SECRET** – NE oszd meg senkivel!

#### 🔵 Resend Email (ha LEAD_MODE=resend)

| Key | Value | Environment |
|-----|-------|-------------|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxxxxxxx` | Production, Preview |
| `LEAD_TO_EMAIL` | `info@temetkezespro.hu` | Production, Preview, Development |
| `LEAD_FROM_EMAIL` | `noreply@temetkezespro.hu` | Production, Preview, Development |

#### 🟡 Opcionális (Analytics & Calendly)

| Key | Value | Environment |
|-----|-------|-------------|
| `PUBLIC_ENABLE_VERCEL_ANALYTICS` | `true` | Production, Preview, Development |
| `PUBLIC_CAL_URL` | `https://calendly.com/your-username/demo` | Production, Preview, Development |
| `PUBLIC_ENABLE_PLAUSIBLE` | `false` | Production, Preview, Development |
| `PUBLIC_PLAUSIBLE_DOMAIN` | `temetkezespro.hu` | Production (ha használod) |

### C) Environment Variables Screenshot Példa

```
┌─────────────────────────────────────────────────────────────┐
│ Environment Variables                                       │
├─────────────────────────────────────────────────────────────┤
│ PUBLIC_SITE_URL              https://temetkezespro.hu      │
│ Environments: Production, Preview, Development              │
├─────────────────────────────────────────────────────────────┤
│ MAKE_WEBHOOK_URL             https://hook.eu1.make.com/... │
│ Environments: Production, Preview                           │
│ [SECRET - Hidden]                                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 4. Lépés: Deploy Indítása

1. Miután minden environment változó hozzáadva → Kattints **"Deploy"**
2. Vercel elkezdi a build folyamatot:
   ```
   ⏳ Installing dependencies...
   ⏳ Running build command...
   ⏳ Optimizing production build...
   ✅ Build completed!
   ⏳ Deploying to Edge Network...
   ✅ Deployment ready!
   ```

3. Build idő: **~2-5 perc**

### Build Log Ellenőrzése

Ha hiba van:
- Kattints **"View Function Logs"**
- Nézd át az error üzeneteket
- Gyakori hibák:
  - Hiányzó environment változók
  - TypeScript error
  - Node.js verzió probléma (frissítsd package.json-ban: `"engines": {"node": ">=18"}`)

---

## ✅ 5. Lépés: Deployment Ellenőrzése

### A) Vercel URL Tesztelése

1. Deploy után látsz egy URL-t: `https://temetkezespro-portal.vercel.app`
2. Kattints rá → az oldal megnyílik
3. **Teszteld az alábbi funkciókat:**

**✅ Checklist:**
- [ ] Főoldal betöltődik
- [ ] Header: menü működik (desktop + mobil)
- [ ] Hero: CTA gombok kattinthatóak
- [ ] Scroll to sections: #kapcsolat, #arak, stb.
- [ ] Footer linkek: /adatkezeles, /impresszum
- [ ] Űrlap megjelenik

### B) Űrlap Tesztelése

1. Görgess le a **"Kérjen visszahívást"** szekcióhoz
2. Töltsd ki az űrlapot:
   - Cégnév: Teszt Kft.
   - Település: Budapest
   - Név: Teszt János
   - Telefon: +36 30 123 4567
   - Email: test@example.com
   - Megjegyzés: Ez egy teszt
   - ✅ Pipáld be az adatkezelési checkbox-ot

3. Kattints **"Küldés"**

**Sikeres esetben:**
- Átirányít: `/koszonjuk`
- Látszik: "Köszönjük az érdeklődését!"

**Ha Make.com-ot használsz:**
- Ellenőrizd Make.com → "History" → új bejegyzés látható
- Ha Google Sheets kapcsolva van → új sor a táblázatban

**Ha Resend-et használsz:**
- Ellenőrizd emailt a `LEAD_TO_EMAIL` címen
- Ha nem érkezik → Spam mappát nézd meg
- Resend Dashboard → "Logs" → látható az email küldés

---

## 🌐 6. Lépés: Custom Domain Hozzáadása

### A) Domain Megvásárlása

Ha még nincs domain, vásárolj egyet:
- **Nemzetközi:** GoDaddy, Namecheap, Cloudflare
- **Magyar:** Tárhely.eu, DotRoll

### B) Vercel Domain Beállítás

1. Vercel Dashboard → Projekt → **"Settings"** → **"Domains"**
2. Kattints **"Add"**
3. Írd be: `temetkezespro.hu`
4. Kattints **"Add"**

Vercel mutat 2 DNS rekordot:

```
┌─────────────────────────────────────────────────────┐
│ Type    Name    Value                               │
├─────────────────────────────────────────────────────┤
│ A       @       76.76.21.21                         │
│ CNAME   www     cname.vercel-dns.com                │
└─────────────────────────────────────────────────────┘
```

### C) DNS Rekordok Beállítása

1. Menj a domain szolgáltatódhoz (pl. GoDaddy)
2. Keress: **"DNS Management"** vagy **"DNS Settings"**
3. Add hozzá az alábbi rekordokat:

**Vercel Rekordok:**
```
Type: A
Name: @ (vagy üresen hagyva, vagy "temetkezespro.hu")
Value: 76.76.21.21
TTL: 3600 (vagy Auto)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Opcionális – Resend Email Rekordok** (ha email küldést használsz):
```
Type: TXT
Name: @ (vagy temetkezespro.hu)
Value: v=spf1 include:_spf.resend.com ~all
TTL: 3600

Type: TXT
Name: resend._domainkey
Value: [Másolva Resend Dashboard-ról]
TTL: 3600

Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@temetkezespro.hu
TTL: 3600
```

### D) DNS Propagáció Várása

**Idő:** 10-60 perc (néha akár 24 óra is lehet).

**Ellenőrzés terminálból:**
```bash
# macOS / Linux
dig temetkezespro.hu
nslookup temetkezespro.hu

# Windows
nslookup temetkezespro.hu
```

**Online eszköz:**
[https://www.whatsmydns.net/](https://www.whatsmydns.net/)

### E) SSL Tanúsítvány (Automatikus)

Vercel automatikusan létrehozza a **Let's Encrypt SSL** tanúsítványt.
- HTTPS automatikusan működik
- HTTP → HTTPS redirect beépített
- Nincs teendő! 🎉

---

## 🔄 7. Lépés: Automatikus Deployment (CI/CD)

A Vercel automatikusan újra deploy-ol minden `git push` után!

### Működés

1. **Módosítasz valamit** a kódban (pl. szöveg, szín)
2. **Commit & Push:**
   ```bash
   git add .
   git commit -m "Update: hero headline módosítása"
   git push origin main
   ```
3. **Vercel automatikusan:**
   - Észleli a GitHub push-t
   - Új build indul
   - Preview URL generálódik
   - Ha sikeres → Production deploy

### Preview Deployments

Minden **Pull Request** kap egy preview URL-t:
```
https://temetkezespro-portal-git-feature-xyz.vercel.app
```

Így tesztelheted a változtatásokat production előtt.

---

## 📊 8. Lépés: Vercel Analytics Bekapcsolása

### A) Vercel Analytics (Ingyenes)

1. Vercel Dashboard → Projekt → **"Analytics"** tab
2. Kattints **"Enable Analytics"**
3. Ingyenes: 100k pageviews/hó

**Már működik is!** Nincs több teendő.

### B) Environment Variable Ellenőrzése

```env
PUBLIC_ENABLE_VERCEL_ANALYTICS=true
```

Ha nincs beállítva → add hozzá a Vercel-ben → **"Redeploy"** szükséges.

---

## 🔧 Troubleshooting

### ❌ Probléma: "Build failed"

**Hiba log:**
```
Error: Missing environment variable: MAKE_WEBHOOK_URL
```

**Megoldás:**
- Vercel → Settings → Environment Variables
- Add hozzá a hiányzó változót
- **"Deployments"** → **"Redeploy"**

---

### ❌ Probléma: Űrlap nem küld (403 error)

**Hiba:** "Érvénytelen forrás"

**Megoldás:**
- ALLOWED_ORIGINS tartalmazza a domain-t:
  ```env
  ALLOWED_ORIGINS=temetkezespro.hu,www.temetkezespro.hu,temetkezespro-portal.vercel.app
  ```

---

### ❌ Probléma: Custom domain nem működik

**Hiba:** "This site can't be reached"

**Megoldás:**
- DNS rekordok helyesen vannak beállítva?
- Várj 10-60 percet (DNS propagáció)
- Ellenőrizd: `nslookup temetkezespro.hu`

---

### ❌ Probléma: Email nem érkezik meg (Resend)

**Megoldás:**
1. Resend Dashboard → **"Logs"** → látható az email küldés?
2. Ha "Domain not verified" → DNS rekordokat ellenőrizd
3. Spam mappát nézd meg
4. `LEAD_TO_EMAIL` helyes email cím?

---

## 📝 Deploy Checklist

Használd ezt a listát deployment előtt:

- [ ] GitHub repository létrehozva és pushed
- [ ] Vercel projekt importálva
- [ ] **Összes** environment változó beállítva
- [ ] Build sikeres (zöld pipa)
- [ ] `.vercel.app` URL működik
- [ ] Űrlap tesztelve és működik
- [ ] Make.com vagy Resend fogadja az adatokat
- [ ] Custom domain hozzáadva (opcionális)
- [ ] DNS rekordok beállítva
- [ ] SSL tanúsítvány aktív (HTTPS működik)
- [ ] Vercel Analytics bekapcsolva
- [ ] Lighthouse audit lefuttatva (>90 score)

---

## 🎉 Sikeres Deployment!

Ha minden checklist kész:
✅ **Az oldal LIVE és production-ready!**

**Production URL:**
- `https://temetkezespro.hu`
- `https://www.temetkezespro.hu`
- `https://temetkezespro-portal.vercel.app`

---

## 📞 Támogatás

**Vercel Dokumentáció:**
- [Astro on Vercel](https://vercel.com/docs/frameworks/astro)
- [Custom Domains](https://vercel.com/docs/custom-domains)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)

**Kapcsolat:**
- Email: [your-email@example.com]
- GitHub Issues: [github.com/your-username/temetkezespro-portal/issues]

---

🚀 **Élvezd a projektét!**

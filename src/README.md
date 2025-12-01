# 🏫 Hentetjeneste PWA

Digital hentetjeneste for barnehager med GDPR-sikkerhet - PRO203 prosjekt av Aleks1712

## 🚀 Live Demo

**Deployed på Vercel:** [https://hentetjeneste-pwa.vercel.app](https://hentetjeneste-pwa.vercel.app)

## 📱 Installer som App

### På Android:
1. Åpne linken i Chrome
2. Trykk "Installer" når banner dukker opp
3. Appen legges til på hjemskjermen

### På iPhone:
1. Åpne linken i Safari
2. Trykk Del (📤) → "Legg til på Hjem-skjerm"
3. Appen legges til på hjemskjermen

## ✨ Funksjoner

### 🔐 Ansatt-Modus (Blå #2563EB)
- Digital hentetjeneste med QR-godkjenning
- Krysseliste for inn/ut-registrering
- Daglig info til foreldre
- Hendelsesvarsel ved ulykker
- Chat med foreldre

### 👨‍👩‍👧 Foreldre-Modus (Lilla #8B5CF6)
- Godkjenn hvem som kan hente
- Se krysseliste-status
- Motta hendelsesvarsel
- Chat med ansatte
- Full kontroll over barnets data

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Build:** Vite
- **PWA:** Service Worker + Manifest
- **Deploy:** Vercel

## 🏃‍♂️ Lokal Utvikling

```bash
# Installer avhengigheter
npm install

# Start dev server
npm run dev

# Bygg for produksjon
npm run build

# Preview produksjonsbygg
npm run preview
```

## ���� Prosjektstruktur

```
hentetjeneste-pwa/
├── public/
│   ├── icon.svg              # App-ikon
│   ├── apple-touch-icon.png  # iOS-ikon
│   ├── manifest.json         # PWA manifest
│   └── service-worker.js     # Service worker
├── components/
│   ├── StaffView.tsx         # Ansatt-visning
│   ├── ParentView.tsx        # Foreldre-visning
│   ├── InstallPWA.tsx        # PWA install-banner
│   ├── QRCodeShare.tsx       # QR-kode deling
│   └── ...                   # Flere komponenter
├── styles/
│   └── globals.css           # Global styling
├── App.tsx                   # Hovedkomponent
└── index.html                # Entry point
```

## 🎯 Designprinsipper

- **Spond-inspirert UX:** Ren, moderne, mobilvennlig
- **Fargesystem:**
  - Blå (#2563EB): Ansatt-modus
  - Lilla (#8B5CF6): Foreldre-elementer
- **GDPR-compliant:** Rollebasert tilgang
- **Mobile-first:** Designet for touch og små skjermer

## 📊 PWA Metrics

- ✅ Installable
- ✅ Works offline (service worker)
- ✅ Responsive design
- ✅ Fast loading
- ✅ App-like experience

## 📄 Lisens

MIT License - Laget for PRO203 ved HVL

## 👨‍💻 Utvikler

**Aleksander** (Aleks1712)  
GitHub: [@Aleks1712](https://github.com/Aleks1712)

---

**⭐ Hvis du liker prosjektet, gi det en stjerne på GitHub!**

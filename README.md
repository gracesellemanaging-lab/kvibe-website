# K-VIBES — Website (React)

Your K-Pop universe — official landing page with direct APK download.

**Location:** `C:\Users\User\Desktop\K-VIBES\New folder` (Vite + React 19)

## Run locally
```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build -> dist/
npm run preview # preview build -> http://localhost:4173
```

## Download
- **Primary:** GitHub raw — `https://github.com/gracesellemanaging-lab/K-Vibes/raw/main/K-vibes.apk` (94 MB, Android 6+)
- **Local:** `/K-vibes.apk` (copied to `public/K-vibes.apk` for offline serving)
- **Release:** https://github.com/gracesellemanaging-lab/K-Vibes/releases/tag/v1.0.0

## Branding
Colors mirror `music_app/lib/theme/app_colors.dart`:
- Pink `#E91E8C`, Gradient Dark `#1A1A2E -> #3D1060`, Surface `#F8F7FB`
- Fonts: Outfit (headings) + Inter (body) via Google Fonts
- Logo: `public/logo.png` (from `music_app/assets/logo.png`)

## Deploy

**Option A — GitHub Pages (recommended):**
```bash
# copy dist to docs for Pages (or use gh-pages branch)
# In GitHub repo Settings > Pages > Source: Deploy from branch -> main -> /docs
xcopy /E /I dist docs
git add docs && git commit -m "deploy: kvibes website" && git push
# site -> https://gracesellemanaging-lab.github.io/K-Vibes/
```

**Option B — Vercel / Netlify:** drag `dist/` folder, or connect repo with `npm run build` + `dist` output.

**Note:** `public/K-vibes.apk` is 94 MB — if hosting has size limits, delete it and keep only GitHub raw link.

## Structure
- `index.html` — SEO + OG meta, theme-color #E91E8C
- `src/App.jsx` — single-page landing: nav, hero (download CTA), stats, features (6), preview, steps, CTA card, FAQ, footer
- `src/index.css` — design tokens (mirrors AppColors)
- `src/App.css` — all sections, responsive (`860px/980px/700px/620px` breakpoints), animations
- `public/` — logo, icon, K-vibes.apk

## Features
- Responsive (mobile → desktop), sticky nav + hamburger, smooth scroll
- Hero phone mockup + floating cards, reveal on scroll
- Download buttons wired to APK (direct + clipboard copy + toast)
- FAQ accordion, GitHub links

---
# kvibe-website
Deployed: https://gracesellemanaging-lab.github.io/kvibe-website/


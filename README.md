# Mir Hossein Mousavi — Backend Developer · Portfolio

A clean, fast, single-page developer portfolio built with **Tailwind CSS**.
English (LTR), light/dark mode, fully responsive, zero build step.

🔗 **Live:** https://mirhosseinmousavi.com

## ✨ Features

- Single self-contained `index.html` — no Node, no build, no framework
- Tailwind CSS via Play CDN with a custom theme (brand colors, Inter font)
- Light / dark mode with system-preference detection + persistence (no flash)
- Scroll-reveal animations, glassmorphism navbar, responsive mobile menu
- Sections: Hero · About · Skills · Experience · Projects · Education · Contact
- Downloadable resume (`resume.pdf`)

## 📁 Structure

```
index.html          ← the entire site
resume.pdf          ← downloadable resume
assets/
  img/profile.jpg   ← profile photo
favicon.ico · apple-icon.png · manifest.json
.nojekyll           ← lets GitHub Pages serve all files as-is
CNAME               ← custom domain (mirhosseinmousavi.com)
```

## 🚀 Publish on GitHub Pages

1. Commit and push this folder:
   ```bash
   git add .
   git commit -m "feat: English backend-developer portfolio"
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment**
   - **Source:** Deploy from a branch
   - **Branch:** `main` · **Folder:** `/ (root)` → **Save**
3. Wait ~1 minute, then open the URL shown on the Pages settings page.

## ✏️ Editing content

All content lives in `index.html`:

- **Name / title / about** — in the Hero and About `<section>`s.
- **Skills** — edit the `skills` array in the `<script>` near the bottom.
- **Experience** — edit the `experience` array.
- **Projects** — edit the `projects` array.
- **Contact** — email/phone/location in the Contact `<section>`.
- **Social links** — search for `TODO:` to find the GitHub / LinkedIn / Telegram
  placeholder URLs and replace them with your real profiles.

## 🎨 Notes

Tailwind's Play CDN compiles styles in the browser, which is perfect for a
small personal site. If you later want a production build (smaller, no CDN
request), switch to the Tailwind CLI or Vite — the markup stays the same.

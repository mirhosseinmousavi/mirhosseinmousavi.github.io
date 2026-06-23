# رزومه حسین موسوی — Hossein Mousavi · Resume

A clean, fast, single-page personal resume built with **Tailwind CSS**.
RTL (Persian), light/dark mode, fully responsive, zero build step.

🔗 **Live:** https://<your-username>.github.io/<repo-name>/

## ✨ Features

- Single self-contained `index.html` — no Node, no build, no framework
- Tailwind CSS via Play CDN with a custom theme (brand colors, Kalameh font)
- Light / dark mode with system-preference detection + persistence (no flash)
- RTL Persian layout with the locally-hosted **Kalameh** webfont
- Scroll-reveal animations, glassmorphism navbar, responsive mobile menu
- Sections: Hero · About · Skills · Contact

## 📁 Structure

```
index.html          ← the entire site
assets/
  fonts/            ← Kalameh webfont (woff2 + woff)
  img/profile.jpg   ← profile photo
favicon.ico · apple-icon.png · manifest.json
.nojekyll           ← lets GitHub Pages serve all files as-is
```

## 🚀 Publish on GitHub Pages

1. Create a repo and push this folder:
   ```bash
   git add .
   git commit -m "feat: new Tailwind resume"
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment**
   - **Source:** Deploy from a branch
   - **Branch:** `main` · **Folder:** `/ (root)` → **Save**
3. Wait ~1 minute, then open the URL shown on the Pages settings page.

## ✏️ Editing content

All text lives in `index.html`:

- **Name / title / about** — in the Hero and About `<section>`s.
- **Skills** — edit the `skills` array in the `<script>` near the bottom.
- **Contact** — email/phone/address in the Contact `<section>`.

## 🎨 Notes

Tailwind's Play CDN compiles styles in the browser, which is perfect for a
small personal site. If you later want a production build (smaller, no CDN
request), switch to the Tailwind CLI or Vite — the markup stays the same.

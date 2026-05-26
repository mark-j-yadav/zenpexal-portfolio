# Zenpexal Premium Portfolio / Service Website

A premium, animated, responsive React.js + Vite + Tailwind CSS portfolio and service website for Zenpexal.

## Tech Stack
- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React
- GitHub Pages deployment with `gh-pages`

## Project Structure
```txt
zenpexal-portfolio/
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ README.md
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   ├─ data/
   │  └─ siteData.js
   ├─ components/
   │  ├─ Header.jsx
   │  ├─ Footer.jsx
   │  ├─ Hero.jsx (hero is currently inside Home.jsx; extract if needed)
   │  ├─ ServiceCard.jsx
   │  ├─ ProjectCard.jsx
   │  ├─ CTASection.jsx
   │  ├─ ContactForm.jsx
   │  ├─ AnimatedSection.jsx
   │  └─ Button.jsx
   └─ pages/
      ├─ Home.jsx
      ├─ About.jsx
      ├─ Services.jsx
      ├─ ServicePage.jsx
      ├─ Portfolio.jsx
      └─ Contact.jsx
```

## Run Locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## GitHub Pages Deployment
1. Create a GitHub repo named `zenpexal-portfolio`.
2. Update `package.json`:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/zenpexal-portfolio"
```
3. Update `src/main.jsx` basename if your repo name is different:
```jsx
<BrowserRouter basename={import.meta.env.DEV ? '/' : '/zenpexal-portfolio'}>
```
4. Push code:
```bash
git init
git add .
git commit -m "Initial Zenpexal portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/zenpexal-portfolio.git
git push -u origin main
```
5. Deploy:
```bash
npm run deploy
```
6. In GitHub repo settings, set Pages source to `gh-pages` branch if required.

## Replace Your Details
Open `src/data/siteData.js` and replace:
- `+91XXXXXXXXXX` with your real WhatsApp number.
- `https://github.com/yourusername` with your GitHub URL.
- LinkedIn, Instagram, X/Twitter, Facebook links.
- Service descriptions if needed.

Open `src/data/siteData.js` project array and replace:
- Placeholder project images.
- Project titles.
- Tech stacks.
- Live demo links and GitHub links inside `ProjectCard.jsx` currently use `#`; replace with real URLs or add `liveUrl` and `githubUrl` fields in project data.

## SEO Notes
Basic meta title, description, author and keywords are already added in `index.html`. For advanced SEO, add React Helmet Async and create page-specific meta tags.

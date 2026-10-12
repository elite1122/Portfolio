# Md Rasheduzzaman Elite — AI Engineer & Full-Stack Developer Portfolio

A production-grade, editorial portfolio for **Md Rasheduzzaman Elite**, showcasing engineering leadership in conversational AI, voice automation, LLM integrations, intelligent workflows, and modern web applications.

Designed under the **Dark Editorial × AI Studio** design direction with obsidian typography surfaces, electric lime accents, responsive multi-column layouts, accessible keyboard navigation, and optimized production bundle code-splitting.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/) (Single-page smooth anchor navigation with catch-all fallback)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Animation & Transitions:** [Framer Motion](https://www.framer.com/motion/) with native `prefers-reduced-motion` compliance
- **Typography:** Google Fonts (`Inter`, `Outfit`, `Space Grotesk`)
- **Forms & Email Delivery:** [EmailJS Browser SDK](https://www.emailjs.com/) with validation and automatic `mailto:` fallback
- **Icons & Graphics:** Inline accessible SVG icons

---

## 📁 Repository Structure

```text
├── public/
│   └── favicon.png                   # High-res favicon asset
├── src/
│   ├── assets/                       # Compressed project screenshots and profile imagery
│   │   ├── Elite.png                 # Verified profile photograph
│   │   ├── Project1.png              # CogniDrift platform screenshot
│   │   ├── project2.png              # Insightly AI analytics screenshot
│   │   ├── project3.png              # ScholarSync scholarship portal screenshot
│   │   └── Project4.png              # Marathon management system screenshot
│   ├── Component/
│   │   ├── AboutMe/                  # Narrative, engineering philosophy, and CV action
│   │   ├── Banner/                   # Hero section with typewriter role rotation & metrics
│   │   ├── Common/                   # Reusable components (MotionReveal with reduced motion)
│   │   ├── ContactForm/              # Validated contact transmission pipeline & fallback
│   │   ├── Education/                # Academic background, certifications, and languages
│   │   ├── Experience/               # Chronological timeline with concluded tenure badges
│   │   ├── Footer/                   # Wordmark, quick navigation, channels, and back-to-top
│   │   ├── Home/                     # Single-page layout shell with skip link & section anchors
│   │   ├── Navbar/                   # Sticky desktop bar & accessible mobile drawer navigation
│   │   ├── Other/                    # Typewriter effect wrapper
│   │   └── Project/                  # Flagship showcase, category filters, and detail modal
│   ├── data/
│   │   ├── educationData.js          # Academic history and verified certification credentials
│   │   ├── experienceData.js         # Professional employment history and achievements
│   │   ├── projectsData.js           # Verified showcase projects with live links & repos
│   │   └── skillsData.js             # Categorized production stack & exploring technologies
│   ├── index.css                     # Global design tokens, focus-visible styles, animations
│   └── main.jsx                      # App root and React Router setup
├── .env.example                      # Environment variable template
├── index.html                        # SEO metadata, Open Graph cards, Schema.org JSON-LD
├── tailwind.config.js                # Custom color palettes, typography, and animation tokens
├── vercel.json                       # Vercel SPA rewrite configuration
└── vite.config.js                    # Vite plugins and Rollup manual vendor chunking
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/elite1122/Portfolio.git
cd Portfolio
npm install
```

### 2. Environment Setup

Create a `.env` file in the project root based on `.env.example`:

```bash
cp .env.example .env
```

Configure your EmailJS credentials:

```ini
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_ID=your_emailjs_public_key
```

> **Note:** If environment variables are omitted or invalid, the contact form automatically falls back to an encrypted 1-click `mailto:` transmission link so users can reach you without lost messages.

### 3. Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173`.

---

## 🏗️ Build & Quality Checks

### Production Build

Compile and minify assets into the `dist/` directory with Rollup chunk splitting:

```bash
npm run build
```

### Preview Production Build

Serve the built `dist/` bundle locally:

```bash
npm run preview
```

### Code Linting

Run ESLint to check for syntax, styling, and React Hook rules:

```bash
npm run lint
```

---

## 🌐 Deployment Instructions

### Vercel (Recommended)

The repository includes a [vercel.json](./vercel.json) file configuring standard Single-Page Application (SPA) rewrites to `/index.html`:

1. Connect your repository to [Vercel](https://vercel.com/).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Add the Environment Variables (`VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, `VITE_PUBLIC_ID`) in project settings.
6. Deploy!

### Other Static Hosts (Netlify, Firebase Hosting, GitHub Pages)

- **Netlify:** Ensure a `_redirects` file with `/*  /index.html  200` is included or configure redirect headers.
- **Firebase:** Ensure `rewrites: [{ "source": "**", "destination": "/index.html" }]` in `firebase.json`.

---

## ♿ Accessibility & Performance Standards

- **WCAG 2.1 AA / AAA Compliance:** High contrast text ratios (>15:1), visible `:focus-visible` keyboard rings (`#c6f135`), skip navigation link, semantic landmark tags (`<header>`, `<main>`, `<section>`, `<footer>`), and accessible touch target sizes (`>= 44px`).
- **Reduced Motion Support:** Automatically suppresses heavy entrance transforms and spring animations when `@media (prefers-reduced-motion: reduce)` is enabled.
- **Code Splitting:** Rollup `manualChunks` separates `@emailjs/browser`, `framer-motion`, and `react`/`react-dom` into standalone vendor chunks for optimized caching.
- **SEO & Social Sharing:** Includes Open Graph metadata, Twitter Cards, canonical URL, and Schema.org `Person` JSON-LD structured data.

---

## 📄 License

Private & Copyright © Md Rasheduzzaman Elite. All rights reserved.

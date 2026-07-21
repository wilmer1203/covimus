# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**COVIMUS** (Corporación de Vialidad e Infraestructura del Municipio Sotillo) is a Venezuelan municipal infrastructure corporation website. It is a React SPA (Single Page Application) built with Vite, deployed on Vercel. The content is in Spanish.

## Commands

```bash
npm install       # Install dependencies
npm start         # Dev server at http://localhost:4028
npm run build     # Production build (outputs to dist/, sourcemaps enabled)
npm run serve     # Preview production build locally
```

No test or lint scripts are configured.

## Architecture

**Tech Stack:** React 18 + Vite 5 + TailwindCSS 3 + React Router v6

**Key libraries:**
- `framer-motion` — animations throughout the site
- `@emailjs/browser` — contact form email sending (credentials in `src/pages/contact/`)
- `lucide-react` — icons
- `@vercel/analytics` + `@vercel/speed-insights` — production monitoring
- `ogl` — WebGL particle effects (used in About Us page)
- `react-hook-form` — contact form
- `d3` / `recharts` — data visualization (available but limited current use)

**Routing** (`src/Routes.jsx`):
- `/` → Homepage
- `/about-us` → About Us
- `/projects` → Projects listing with search/filter
- `/contact` → Contact form
- `/authorities` → **Commented out** (page exists in `src/pages/authorities/` but not active)

**Data** (`src/data/`):
- `authoritiesData.js` — organizational hierarchy for the authorities page
- `projectsData.js` — project listings used on the projects page

**State management:** Local React state only (useState/useEffect). No Redux or global state library.

**Path aliases:** `jsconfig.json` sets `baseUrl: ./src`, so imports like `components/ui/Button` resolve from `src/`.

## Project Structure

```
src/
├── components/
│   ├── ui/           # Shared primitives (Button, Input, Header, Footer, etc.)
│   └── ...           # AppIcon, AppImage, ErrorBoundary, ScrollToTop, SEO
├── pages/
│   ├── homepage/     # Hero, BentoGrid, FeaturedProjects, etc.
│   ├── about-us/     # Mission/Vision, History, ParticleLogo (WebGL), etc.
│   ├── projects/     # ProjectCard, ProjectDetailsModal, filtering logic
│   ├── contact/      # ContactForm (EmailJS), DynamicBackground
│   └── authorities/  # (inactive) HighCommand, Organogram, GovernancePillars
├── data/             # Static JS data files
├── styles/           # index.css, tailwind.css
├── utils/
│   └── cn.js         # clsx + tailwind-merge utility
├── App.jsx           # Root: BrowserRouter + Analytics wrapping Routes
└── Routes.jsx        # Route definitions
```

Each page directory has a local `components/` subfolder for page-specific components.

## Styling Conventions

- TailwindCSS utility classes throughout; custom design tokens defined in `tailwind.config.js` as CSS variables
- Custom fonts: Source Sans Pro (body), Inter (headings), JetBrains Mono (code)
- Dark mode enabled via CSS class (`dark:`)
- Use `cn()` from `src/utils/cn.js` for conditional class merging

## Environment Variables

All prefixed with `VITE_` (client-side accessible). The `.env` file contains placeholder values. EmailJS credentials are hardcoded in the contact page component rather than `.env`.

## Deployment

Deployed to Vercel. The `dist/` folder is the build output. Vercel Analytics and Speed Insights are integrated directly in `src/App.jsx`.

## Claude Code Skills

Two third-party skills are installed: **Impeccable** (design/UX quality) and **claude-seo** (SEO auditing). See [SKILLS.md](SKILLS.md) for what each does and when to use them.

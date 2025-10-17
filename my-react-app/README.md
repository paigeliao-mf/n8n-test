# Lumen UI Landing Page

A polished marketing landing page built with React, Vite, Tailwind CSS, and shadcn/ui-inspired primitives. The page showcases a modern hero, features grid, testimonials, pricing, and contact call-to-action sections.

## Tech Stack
- React 19 with Vite for the dev/build pipeline.
- Tailwind CSS 3 for utility-first styling and theming.
- shadcn-style component primitives composed with `class-variance-authority`, `tailwind-merge`, and Radix UI.
- Lucide icons for illustrative glyphs.

## Getting Started
Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```
Vite will output a local URL (defaults to `http://localhost:5173`) where you can view the site.

## Available Scripts
- `npm run dev` – start the local development server with hot module replacement.
- `npm run build` – generate an optimized production build in `dist/`.
- `npm run preview` – serve the production build locally for inspection.
- `npm run lint` – run ESLint across the project.

## Project Structure
- `src/App.jsx` – main page layout with section data.
- `src/components/ui/` – reusable shadcn-style components (button, card, badge).
- `src/lib/utils.js` – shared utility for merging Tailwind class variants.
- `src/index.css` – Tailwind directives and design tokens (light/dark).
- `tailwind.config.js` – Tailwind configuration with custom theme tokens.

## Customization Tips
- Update the `features` and `testimonials` arrays in `src/App.jsx` to reflect your offering.
- Adjust color tokens in `src/index.css` to brand-specific hues.
- Add or extend primitives in `src/components/ui/` as you introduce new patterns.

## Deployment
After `npm run build`, deploy the generated `dist/` folder to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.). Configure adapter-specific redirects if you introduce routing.

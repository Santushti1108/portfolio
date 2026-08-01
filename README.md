# Santushti Singh — Portfolio

A premium, single-page portfolio built with React, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The optimized site is output to `dist/`. Deploy `dist/` to Vercel, Netlify, GitHub Pages, or any static host.

## Where to edit content

Almost everything on the site is driven by one file:

```
src/data/content.ts
```

Update your bio, experience, skills, achievements, and contact details there — no need to touch component code. Search that file for `Add ` to find every placeholder that still needs your real information (dates, phone, email, LinkedIn URL, achievement details, etc).

### Assets to add

Drop these into the `public/` folder:

| What | Path | Notes |
|---|---|---|
| Headshot | `public/photo.jpg` | Then set `profile.photoUrl = "/photo.jpg"` in `content.ts` |
| Resume | `public/resume.pdf` | Already wired to the "Download Resume" buttons |
| Gallery images | `public/gallery/*.jpg` | Update `galleryPlaceholders` in `content.ts` to point at them |

### GitHub projects & stats

The Projects and GitHub Activity sections pull live data for `Santushti1108` from the public GitHub API and from `ghchart.rshah.org` / `github-readme-stats.vercel.app`. To change the username, update `profile.githubUsername` in `content.ts`. Highlighted project keywords live in `highlightedProjects` in the same file — repos matching those names are sorted to the front.

### Contact form

The form currently opens the visitor's email client via a `mailto:` link (no backend required). To collect submissions directly, wire `src/components/Contact.tsx` up to a service like Formspree, Getform, or your own API route.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion (page/scroll animations)
- Lenis (smooth scrolling)
- react-icons

## Design notes

- Color tokens, fonts, and shared utility classes (glass, gradient text, noise texture) live in `src/index.css`.
- `Reveal.tsx` is the shared scroll-reveal wrapper used across sections — respects `prefers-reduced-motion`.
- Layout follows the palette and section order requested in the original brief: Hero → About → Experience → Skills → Projects → GitHub Activity → Achievements → Gallery → Resume → Contact.

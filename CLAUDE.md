# CLAUDE.md

Claude Code guidance for this repo.

## Project Overview

Personal portfolio: Next.js 16, React 19, Tailwind CSS v4. Projects, experience, education, research, contact.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animation**: Motion 12.9.1 (`motion/react` imports)
- **Analytics**: Firebase Analytics
- **Font**: next/font/google (Geist Sans + Geist Mono)

## Commands

| Command            | Description                   |
| ------------------ | ----------------------------- |
| `npm run dev`      | Start dev server on port 3000 |
| `npm run build`    | Build for production          |
| `npm start`        | Start prod server             |
| `npm run lint`     | Run ESLint                    |
| `npm run frontend` | Build then start prod server  |

## Architecture

**Page Structure** (`app/page.jsx`):

- `Nav` — top navigation
- `ScrollLinked` — scroll progress bar + analytics init; renders `Hero` inside
- `AboutMe` — professional background
- `Education` — academic degrees
- `Experience` — work/internship history
- `Research` — publications
- `Projects` — project showcase grid
- `Contact` — email form
- `Footer` — contact info, social links

`Hero` (hero section, profile image, social links, skills) is mounted by `ScrollLinked`, not `page.jsx` directly.

**Component Organization**:

- Components: `app/components/` (incl. `nav.jsx`, `projectCard.jsx`, `skillButton.jsx`, `ui/`)
- Data: `app/data/` (exported JS objects)
- Firebase: `app/firebase/` (config + analytics)

**Styling Notes**:

- Primary: `#fed9bc` (light orange/peach)
- Accent: `#ef9c82` (buttons/badges)
- Background: `#173333` (dark teal)
- Secondary text: `#ece3dc` (light gray-beige)
- Headers use `fontFamily: "Georgia"`

**Data Files**:

- `skills.js` — tech array
- `projects.js` — project objects with links
- `about.js` — paragraph strings
- `config.js` — Firebase config (env vars)

**Image Hosting**:

- Profile: Cloudinary (`res.cloudinary.com`)
- LinkedIn: `media.licdn.com`

## Key Patterns

- Client components: `"use client"` for state/browser APIs
- Firebase Analytics: init only in browser (`typeof window !== "undefined"`)
- External links: `target="_blank" rel="noopener noreferrer"`
- Responsive: Tailwind prefixes (sm:, md:, lg:)

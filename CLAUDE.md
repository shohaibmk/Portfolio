# CLAUDE.md

Claude Code guidance for this repo.

## Project Overview

Personal portfolio: Next.js 16, React 19, Tailwind CSS v4. Projects, experience, education, research, contact.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animation**: Framer Motion 12.9.1
- **Analytics**: Firebase Analytics
- **Font**: next/font/google (Geist Sans + Geist Mono)

## Commands

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start dev server on port 3000 |
| `npm run build` | Build for production          |
| `npm start`     | Start prod server             |
| `npm run lint`  | Run ESLint                    |

## Architecture

**Page Structure** (`app/page.jsx`):

- `ScrollLinked` — scroll progress + analytics init
- `Landing` — hero, profile image, social links, skills
- `AboutMe` — professional background
- `Experience` — work/internship history
- `Education` — academic degrees
- `Research` — publications
- `Projects` — project showcase grid
- `Contact` — email form
- `Footer` — contact info, social links

**Component Organization**:

- Components: `app/components/`
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

# fredriks-portfolio

This file documents project-wide context, major features, milestones, and the database schema.

## Current progress

- Next.js app scaffolded with App Router and global styling in `app/globals.css`.
- Home page implemented in `app/(site)/page.tsx` with:
  - Intro section with portrait image and product designer copy.
  - Project list/cards for RedQ, Chall, IKEA, SenseOn with links and visual media blocks.
- Typography updated to use Manrope via `app/layout.tsx`.
- Shared site layout in `app/(site)/layout.tsx` (header + tabs across pages).
- Project routes scaffolded at `app/(site)/projects/[slug]/page.tsx`.
- Shared project data in `data/projects.ts` for nav + cards + pages.
- Assets added in `public/images/` (portrait) plus default Next.js icons.

## Database schema

No database currently in use.

## Migrations

No migrations added.

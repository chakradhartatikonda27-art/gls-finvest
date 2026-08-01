# GLS Finvest Pvt Ltd — Corporate Website

Premium static corporate site for GLS Finvest Pvt Ltd — real estate development and investment
advisory. Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm start         # serve production build
```

## What's real vs. placeholder — read before launch

- **Design system, layout, animations, SEO plumbing (sitemap/robots/OG/Twitter): final.**
- **Photography:** every image slot uses `components/ui/image-placeholder.tsx` — a styled
  gradient block, not a hotlinked stock photo (avoids shipping unlicensed images in your
  codebase). Replace with `next/image` + licensed/client photography before launch.
- **Project data** (`lib/data/projects.ts`), **testimonials** (`lib/data/content.ts`): placeholder
  content — swap with real project names, pricing, and client quotes.
- **Chart data** (`portfolioGrowth`, `portfolioAllocation`, `yoyReturns` in `lib/data/content.ts`):
  illustrative figures for the growth/allocation/returns charts on the Investment page and home
  teaser — swap with real portfolio numbers from finance before launch. Charts are built with
  Recharts (`components/charts/`) and are fully wired to this data, so updating the numbers is a
  data-only change, no component edits needed.
- **Contact form:** client-side only, composes a `mailto:` link — there is no backend per the
  brief. Wire to Supabase/an API route when you're ready to go beyond static.
- **Logo:** brand lockup (Image 1) is referenced in copy/tone only — no logo file is placed in
  the repo. Drop the actual logo asset into `public/` and reference it from `Navbar`/`Footer`
  when you have production-resolution files.
- **Map:** `components/sections/contact-info.tsx` has a placeholder block — swap for a Google
  Maps embed with your actual office coordinates.

## Security note

Pinned to `next@15.5.21` (current patched Maintenance LTS) and `react@19.1.2` — the versions
create-next-app defaults to as of writing carry a critical RCE (CVE-2025-66478) and follow-on
DoS/source-exposure CVEs. Don't downgrade without checking https://nextjs.org/blog for the
current advisory status.

## Structure

```
app/                 routes (App Router) — one folder per page
components/ui/       primitives — Button, Container, SectionTitle, Counter, ImagePlaceholder
components/layout/   Navbar, Footer, WhatsAppButton, BackToTop
components/sections/ page sections — Hero, ServicesGrid, ProjectsGrid, etc.
lib/data/            typed static content — swap-ready for Supabase later
lib/utils.ts         cn() className helper
```

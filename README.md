# Cascrete Landing Page

Next.js 14 (App Router) + TypeScript + Tailwind implementation of the Figma
design at `node-id=1-4`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` — assembles the full page from section components
- `components/Header.tsx` — sticky nav + logo + CTA
- `components/Hero.tsx` — dark hero with background photo + headline
- `components/DiscoveryModule.tsx` — interactive "What are you building?" tab tool (client component)
- `components/AboutSection.tsx` — dark intro band
- `components/CapabilitiesSection.tsx` — accordion list + deliverables panel (client component)
- `components/ProcessSection.tsx` — 4-step "How We Work" cards
- `components/CtaSection.tsx` — closing CTA panel
- `components/Footer.tsx` — newsletter form + link columns
- `components/BackgroundBlobs.tsx` — decorative blurred gradient shapes
- `lib/assets.ts` — image/icon URL constants

## ⚠️ Asset expiry

The image and icon URLs in `lib/assets.ts` point to Figma's temporary MCP
asset CDN, which expires ~7 days after export. Before deploying:

1. Download each asset referenced in `lib/assets.ts`
2. Save them into `public/assets/`
3. Swap the constants for local paths, e.g. `"/assets/logo.svg"`

## Fonts

Loaded via `next/font/google` in `app/layout.tsx`: Montserrat, Plus Jakarta
Sans, Hanken Grotesk, and JetBrains Mono — matching the type families used
throughout the Figma file.

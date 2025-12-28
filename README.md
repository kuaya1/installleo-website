This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## InstallLEO Brand Spec (One Page)

InstallLEO should feel like **mission control for getting connected**: calm authority, engineering-grade clarity, and American infrastructure pragmatism (not sci-fi hype, not generic contractor marketing).

### 1) Brand Feel (non-negotiables)

- **Promise:** certainty, readiness, professional execution
- **Personality:** authoritative, pragmatic, precise, never hype
- **Voice:** short sentences, measurable claims, plain English
- **Avoid:** “revolutionary” buzzwords, absolute guarantees pre-launch, playful SaaS vibes

### 2) Color Tokens (names + meaning)

**Core**

- `Primary/Navy` — default brand base for headers/footer/primary dark surfaces
- `Primary/Ink` — primary text on light surfaces
- `Primary/Cloud` — off-white reading surface (reduces harsh contrast)

**Surfaces**

- `Surface/0` — page background
- `Surface/1` — cards/sections
- `Surface/2` — elevated panels (tables/calculators)
- `Surface/Inverse` — dark surface (hero/footer)

**Text**

- `Text/Primary` — main reading color
- `Text/Secondary` — helper copy, captions, metadata
- `Text/Inverse` — text on dark surfaces
- `Text/Muted` — de-emphasis (timestamps, secondary labels)

**Signal (semantic only)**

- `Signal/Cyan` — **action color** (primary CTA, links, focus)
- `Signal/Green` — success/confirmed/available only (never primary CTA)
- `Signal/Amber` — warnings/edge conditions
- `Signal/Red` — errors only

**Lines**

- `Line/Subtle` — default borders/dividers
- `Line/Strong` — emphasis dividers/table headers/key callouts

**Color Do/Don’t**

- Do: make **CTA = `Signal/Cyan`** everywhere, consistently
- Do: reserve **`Signal/Green`** for “confirmed/ready/passed checks” states
- Don’t: introduce extra accent colors “for variety” (consistency = trust)
- Don’t: use gradients unless they encode meaning (default: avoid)

### 3) Typography (faces + scale)

**Typefaces**

- Sans: **Inter** (everything customers read)
- Mono: **JetBrains Mono** (numbers/specs only)

**Type Scale Tokens (use + intent)**

- `Type/H1` — hero headline (aim for one line)
- `Type/H2` — section headers
- `Type/H3` — card titles, feature blocks
- `Type/H4` — subheads, FAQ questions
- `Type/Body` — default paragraphs
- `Type/BodyStrong` — short emphatic statements (not long paragraphs)
- `Type/Small` — captions/helper/legal
- `Type/Label` — UI labels/form labels/table headers
- `Type/MonoSpec` — latency numbers/spec chips/part names/comparison tables

**Typography Do/Don’t**

- Do: write headlines that are **concrete and actionable** (“Check obstruction risk in 60 seconds”)
- Do: use Mono only for **data blocks** (tables/spec chips)
- Don’t: set paragraphs in Mono
- Don’t: rely on italics for hierarchy (prefer weight/spacing)

### 4) Layout & Interaction Standards

- **Whitespace:** generous; scanning beats density
- **Cards:** title → 1-sentence meaning → one next-step action
- **Tables:** include a “what this means” row/summary
- **CTAs:** one primary action per section where possible

**CTA Hierarchy Tokens**

- `Action/Primary` — cyan button (primary action)
- `Action/Secondary` — outline/neutral (supporting action)
- `Action/Tertiary` — text link (lowest priority)

### 5) Photography Direction (trust, not stock)

- **Style:** real infrastructure, daylight, grounded composition
- **Subjects:** rural homes/farms, RV/marine setups, remote work, technicians on rooftops (safety gear visible)
- **Details:** mounting hardware, roofline context, cable routing
- **Avoid:** call-center headsets, obvious stock smiles, glowing satellite overlays

### 6) Iconography & Data-Viz

- **Icons:** monoline, consistent stroke, rounded corners; “diagram” feel
- **Preferred visuals:** readiness checklists, obstruction diagrams, coverage maps, step-by-step flows
- **Avoid:** playful doodles, ornamental icons that add no information

### 7) Copy Do/Don’t (examples)

**Headlines (Do)**

- “Know your install risk before you buy.”
- “From confusion to connection.”

**Headlines (Don’t)**

- “Next-gen satellite internet solutions.”
- “Revolutionary cutting-edge connectivity.”

**Microcopy (Do)**

- “No spam. One email when Kuiper opens in your area.”

**Trust Language (Do)**

- “Here’s what we can confirm today. Here’s what’s still unknown.”

### 8) Accessibility Quality Bar

- Maintain WCAG AA contrast for text
- Focus states must be visible and consistent (ties to `Signal/Cyan`)
- Motion should be minimal and never required to understand content

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

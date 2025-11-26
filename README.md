# InstallLEO - Amazon LEO Satellite Internet Installation Lead Generation

A high-converting, SEO-optimized lead generation website for professional Amazon LEO satellite internet installation services. Built to dominate search rankings for all LEO installation keywords.

## 🎯 SEO-First Architecture

This site is built from the ground up for search engine dominance:

- **Comprehensive Structured Data**: Organization, LocalBusiness, Service, FAQPage, ItemList schemas
- **Perfect Heading Hierarchy**: Single H1, proper H2/H3 structure
- **Core Web Vitals Optimized**: No image dependencies, CSS-only animations
- **Mobile-First Design**: Responsive at every breakpoint
- **Semantic HTML**: Proper landmarks, ARIA attributes, accessibility

## Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Form Handling**: React Hook Form + Zod validation
- **Email**: Resend
- **Analytics**: @next/third-parties (GA4, Meta Pixel ready)
- **SEO**: next-sitemap + dynamic sitemap/robots
- **Linting**: Biome
- **Bundler**: Turbopack

## Features

- 🚀 Lightning-fast performance with Next.js 15 and Turbopack
- 📱 Mobile-first responsive design
- 🎨 Modern space-themed UI with brand colors
- 📝 Lead capture form with real-time validation
- ✉️ Email notifications via Resend with professional HTML templates
- 🔒 Server-side form validation with Zod
- ♿ WCAG 2.1 AA accessible components
- 🔍 Comprehensive SEO with structured data
- 📊 Analytics-ready (GA4, Meta Pixel, Google Ads)
- 🗺️ Automatic sitemap and robots.txt generation
- ⚡ Rate limiting on API endpoints

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/amazon-leo-leads.git
cd amazon-leo-leads

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Edit .env.local with your values
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📋 Environment Variables

Create a `.env.local` file with these variables:

### Required

| Variable | Description | Example |
|----------|-------------|---------|
| `RESEND_API_KEY` | Resend API key for email | `re_xxxxx` |
| `NOTIFICATION_EMAIL` | Where to receive leads | `leads@installleo.com` |
| `NEXT_PUBLIC_SITE_URL` | Production URL | `https://installleo.com` |

### Analytics (Recommended)

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta/Facebook Pixel ID | `123456789012345` |

See `.env.local.example` for all available options.

---

## 🔍 SEO Setup Guide

### 1. Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property" → Enter `https://installleo.com`
3. Choose verification method:
   - **Recommended**: DNS TXT record (most reliable)
   - Alternative: HTML meta tag (add to layout.tsx)
4. After verification:
   - Submit sitemap: `https://installleo.com/sitemap.xml`
   - Request indexing for homepage
   - Set up email alerts for issues

### 2. Bing Webmaster Tools Setup

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Sign in and add your site
3. Verify ownership via DNS or meta tag
4. Import settings from Google Search Console (saves time)
5. Submit sitemap: `https://installleo.com/sitemap.xml`

### 3. Google Analytics 4 Setup

1. Go to [Google Analytics](https://analytics.google.com)
2. Create new GA4 property for installleo.com
3. Get Measurement ID (G-XXXXXXXXXX)
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   ```
5. Set up conversions:
   - Mark `generate_lead` as a conversion event
   - Configure e-commerce tracking if needed

### 4. Meta Pixel Setup

1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Create new Pixel or use existing
3. Get Pixel ID (15-16 digits)
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_META_PIXEL_ID=123456789012345
   ```
5. Configure conversion events:
   - Lead event fires on /thank-you page
   - Optional: ViewContent, InitiateCheckout

### 5. Structured Data Validation

Test your structured data before and after launch:

1. **Google Rich Results Test**: [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
   - Test homepage for Organization, LocalBusiness, Service schemas
   - Test FAQ section for FAQPage schema

2. **Schema.org Validator**: [https://validator.schema.org](https://validator.schema.org)
   - Validates JSON-LD syntax
   - Shows warnings for missing recommended fields

3. **Facebook Sharing Debugger**: [https://developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)
   - Test OpenGraph tags
   - Scrape to refresh cache after updates

4. **Twitter Card Validator**: [https://cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
   - Test Twitter Card meta tags

---

## 🌐 Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Configure environment variables (all from `.env.local`)
5. Click Deploy

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables on Vercel

Add these in **Project Settings → Environment Variables**:

| Variable | Environments |
|----------|--------------|
| `RESEND_API_KEY` | Production, Preview |
| `NOTIFICATION_EMAIL` | Production, Preview |
| `NEXT_PUBLIC_SITE_URL` | Production only: `https://installleo.com` |
| `NEXT_PUBLIC_GA4_ID` | Production, Preview |
| `NEXT_PUBLIC_META_PIXEL_ID` | Production only |

---

## 🌍 Custom Domain Setup (installleo.com)

### Adding Domain to Vercel

1. In Vercel dashboard → Your Project → Settings → Domains
2. Add `installleo.com`
3. Add `www.installleo.com` (redirects to apex)
4. Vercel provides DNS records to configure

### DNS Configuration

Add these DNS records at your domain registrar:

**Apex Domain (installleo.com)**
| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 3600 |

**WWW Subdomain**
| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | cname.vercel-dns.com | 3600 |

**Verification (if required)**
| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | @ | [Vercel verification code] | 3600 |

### SSL Certificate

Vercel automatically provisions and renews SSL certificates via Let's Encrypt. No action needed.

### DNS Propagation

- Changes can take up to 48 hours to propagate globally
- Use [dnschecker.org](https://dnschecker.org) to verify propagation
- SSL certificate is provisioned after DNS propagates

---

## ✅ Pre-Launch SEO Checklist

### Structured Data & Schema
- [ ] Test Organization schema with Rich Results Test
- [ ] Test LocalBusiness schema (update address when available)
- [ ] Test Service schema
- [ ] Test FAQPage schema (should show FAQ rich results)
- [ ] Test ItemList schema on Benefits section
- [ ] Verify no schema errors in Search Console

### Technical SEO
- [ ] Canonical URLs are correct on all pages
- [ ] robots.txt allows crawling of important pages
- [ ] sitemap.xml includes all public pages
- [ ] sitemap submitted to Google Search Console
- [ ] sitemap submitted to Bing Webmaster Tools
- [ ] No duplicate content issues
- [ ] 404 page is configured
- [ ] Redirects work (www → non-www or vice versa)

### Core Web Vitals
- [ ] Run Lighthouse audit (target: 90+ all categories)
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev)
- [ ] Test with [WebPageTest](https://webpagetest.org)

### Mobile Optimization
- [ ] Mobile-Friendly Test passes
- [ ] Touch targets are 48px minimum
- [ ] No horizontal scroll on mobile
- [ ] Text is readable without zooming
- [ ] Forms work on mobile devices

### OpenGraph & Social
- [ ] Test OpenGraph with Facebook Debugger
- [ ] Test Twitter Cards
- [ ] og:image is 1200x630px
- [ ] twitter:image is set
- [ ] Preview looks good when shared

### Analytics & Tracking
- [ ] GA4 is receiving data
- [ ] Conversions are tracked (generate_lead event)
- [ ] Meta Pixel is firing correctly
- [ ] Goals/conversions set up in GA4
- [ ] Conversion events configured in Meta Events Manager

### Local SEO (If Applicable)
- [ ] Google Business Profile created
- [ ] NAP (Name, Address, Phone) consistent everywhere
- [ ] LocalBusiness schema matches Google Business Profile
- [ ] Service areas defined

### Content & Keywords
- [ ] H1 contains primary keywords
- [ ] Meta descriptions are compelling (155 chars)
- [ ] Title tags are optimized (60 chars)
- [ ] FAQ section addresses common searches
- [ ] All images have alt text

### Security & Legal
- [ ] SSL certificate is valid
- [ ] Privacy Policy page exists
- [ ] Terms of Service page exists
- [ ] Amazon/Kuiper disclaimer is visible
- [ ] Cookie consent if required (GDPR/CCPA)

---

## 🧪 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run postbuild` | Generate sitemap (runs after build) |
| `npm run start` | Start production server |
| `npm run lint` | Run Biome linter |
| `npm run format` | Format code with Biome |

---

## 📁 Project Structure

```
amazon-leo-leads/
├── app/
│   ├── api/
│   │   └── submit-lead/
│   │       └── route.ts        # Lead submission API (rate-limited)
│   ├── components/
│   │   ├── Hero.tsx            # Hero with H1, CTA, Service schema
│   │   ├── Benefits.tsx        # Benefits grid with ItemList schema
│   │   ├── FAQ.tsx             # FAQ accordion with FAQPage schema
│   │   └── LeadForm.tsx        # Lead form with ContactPoint schema
│   ├── lib/
│   │   ├── seo-config.ts       # All SEO configuration & schemas
│   │   ├── types.ts            # TypeScript interfaces
│   │   └── validations.ts      # Zod schemas
│   ├── thank-you/
│   │   └── page.tsx            # Conversion page (noindex)
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage with all schemas
│   ├── robots.ts               # Dynamic robots.txt
│   └── sitemap.ts              # Dynamic sitemap.xml
├── public/                     # Static assets (add og-image.jpg here)
├── .env.local.example          # Environment template
├── biome.json                  # Biome config
├── next.config.ts              # Next.js config
├── next-sitemap.config.js      # Sitemap generation config
├── package.json
├── tailwind.config.ts          # Tailwind config (brand colors)
└── tsconfig.json               # TypeScript config
```

---

## 🖼️ Required Assets

Before launch, add these to `/public/`:

| File | Size | Purpose |
|------|------|---------|
| `og-image.jpg` | 1200x630px | OpenGraph/social sharing image |
| `twitter-image.jpg` | 1200x600px | Twitter Card image |
| `logo.png` | 512x512px | Organization schema logo |
| `favicon.ico` | 32x32px | Browser favicon |
| `apple-touch-icon.png` | 180x180px | iOS home screen |

---

## 📈 Post-Launch Tasks

### Week 1
- [ ] Monitor Search Console for indexing issues
- [ ] Check Core Web Vitals in Search Console
- [ ] Verify conversion tracking is accurate
- [ ] Review first leads and email deliverability

### Week 2-4
- [ ] Check search rankings for target keywords
- [ ] Analyze user behavior in GA4
- [ ] Optimize based on heatmaps/session recordings
- [ ] A/B test form variations

### Ongoing
- [ ] Build backlinks to improve domain authority
- [ ] Create service area pages for local SEO
- [ ] Add blog content for long-tail keywords
- [ ] Monitor and respond to Google Business reviews
- [ ] Keep structured data updated

---

## 📞 Support

For questions or issues, contact: info@installleo.com

---

## 📄 License

Private - All rights reserved.

/**
 * =============================================================================
 * INSTALLLEO.COM HOMEPAGE - THE DEFINITIVE LEO INSTALLATION LANDING PAGE
 * =============================================================================
 *
 * SEO STRATEGY:
 * This page is architected to rank #1 for all LEO installation keywords.
 *
 * KEY SEO ELEMENTS:
 * 1. Perfect heading hierarchy (single H1 in Hero, H2s in sections)
 * 2. Comprehensive structured data (Organization, LocalBusiness, Service, FAQ)
 * 3. OpenGraph + Twitter Card meta tags
 * 4. Canonical URL
 * 5. Keyword-optimized meta title (60 chars) and description (155 chars)
 * 6. Fast Core Web Vitals (no image dependencies, CSS-only animations)
 * 7. Mobile-first responsive design
 *
 * PAGE STRUCTURE (Conversion-Optimized Order):
 * 1. Hero - First impression, primary CTA, H1 with keywords
 * 2. Benefits - Build value, trust signals, ItemList schema
 * 3. FAQ - Answer objections, FAQPage schema for rich snippets
 * 4. LeadForm - Primary conversion point
 * 5. Footer - Legal, schema markup, service area mentions
 *
 * STRUCTURED DATA INCLUDED:
 * - Organization schema (brand identity)
 * - LocalBusiness schema (local SEO, "near me" searches)
 * - Service schema (service offering details)
 * - WebSite schema (sitelinks search box)
 * - FAQ & ItemList schemas are in their respective components
 *
 * =============================================================================
 */

import type { Metadata } from "next";
import { Satellite, Mail, Phone, MapPin } from "lucide-react";
import Hero from "@/app/components/Hero";
import Benefits from "@/app/components/Benefits";
import FAQ from "@/app/components/FAQ";
import LeadForm from "@/app/components/LeadForm";
import {
  SITE_CONFIG,
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  websiteSchema,
} from "@/app/lib/seo-config";

// =============================================================================
// METADATA - Optimized for search rankings
// =============================================================================

export const metadata: Metadata = {
  // Title: 60 chars, primary keyword first
  title: "Professional LEO Satellite Installation | Install LEO Internet",

  // Description: 155 chars, compelling + keywords
  description:
    "Expert Amazon LEO satellite internet installation by certified technicians. Fast 2-3hr setup, anywhere coverage, same-day service. Get your free quote now!",

  // Keywords (still useful for some search engines)
  keywords: [
    "LEO satellite installation",
    "Amazon LEO installation",
    "professional LEO installation",
    "satellite internet installation",
    "LEO installer near me",
    "certified satellite installer",
    "Project Kuiper installation",
    "rural internet installation",
    "fast satellite internet setup",
  ],

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: SITE_CONFIG.url,
  },

  // OpenGraph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Professional LEO Satellite Installation | InstallLEO",
    description:
      "Expert Amazon LEO satellite internet installation. Certified technicians, 2-3hr setup, same-day service available. Get your free quote!",
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "InstallLEO - Professional Amazon LEO Satellite Internet Installation",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Professional LEO Satellite Installation",
    description:
      "Expert Amazon LEO installation by certified technicians. Fast setup, anywhere coverage. Get your free quote!",
    images: [`${SITE_CONFIG.url}/twitter-image.jpg`],
    creator: "@installleo",
    site: "@installleo",
  },

  // Additional meta
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: "Technology",

  // Theme and color scheme
  other: {
    "theme-color": SITE_CONFIG.colors.primary,
    "color-scheme": "dark",
  },
};

// =============================================================================
// COMBINED STRUCTURED DATA
// All schemas combined for a single script tag (better for crawlers)
// =============================================================================

const structuredData = [
  organizationSchema,
  localBusinessSchema,
  serviceSchema,
  websiteSchema,
];

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/*
        STRUCTURED DATA - All schemas combined
        Placed at top of page for early discovery by crawlers
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main>
        {/*
          HERO SECTION
          - Contains the only H1 on the page
          - Primary CTA linking to #lead-form
          - Service schema injected
          - Above the fold content
        */}
        <Hero />

        {/*
          BENEFITS SECTION
          - H2: "Why Choose Professional LEO Installation?"
          - ItemList schema for rich snippets
          - Trust signals and social proof
          - Builds value before asking for conversion
        */}
        <Benefits />

        {/*
          FAQ SECTION
          - FAQPage schema for rich snippets (can appear in search results)
          - Addresses common objections
          - Keyword-rich questions and answers
          - Native details/summary for accessibility
        */}
        <FAQ />

        {/*
          LEAD FORM SECTION
          - Primary conversion point
          - ContactPoint schema
          - id="lead-form" for smooth scroll navigation
          - Trust signals and privacy reassurance
        */}
        <LeadForm />
      </main>

      {/*
        FOOTER
        - Schema.org compliant contact information
        - Service area mentions for local SEO
        - Legal links
        - Copyright
      */}
      <footer className="border-t border-white/10 bg-primary py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top section with logo and contact info */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                  <Satellite className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">{SITE_CONFIG.name}</p>
                  <p className="text-sm text-gray-400">
                    Professional Satellite Installation
                  </p>
                </div>
              </div>
              <p className="mb-4 max-w-md text-gray-400">
                America's trusted source for professional Amazon LEO satellite
                internet installation. Certified technicians, fast setup, and
                coverage anywhere you need it.
              </p>
              {/* Contact Info with schema-friendly markup */}
              <address className="not-italic">
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="hover:text-white"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone}`}
                      className="hover:text-white"
                    >
                      {SITE_CONFIG.contact.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                    <span>Nationwide Service - All 50 States</span>
                  </li>
                </ul>
              </address>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer navigation">
              <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#lead-form"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Get a Free Quote
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Service Areas - Important for local SEO */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Service Areas</h3>
              <p className="mb-3 text-sm text-gray-400">
                Professional LEO installation available in:
              </p>
              <ul className="space-y-1 text-sm text-gray-500">
                <li>• Texas & Southwest</li>
                <li>• California & West Coast</li>
                <li>• Florida & Southeast</li>
                <li>• Midwest & Plains States</li>
                <li>• Northeast & New England</li>
                <li>• Rural America Nationwide</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-white/10" />

          {/* Bottom row - Legal */}
          <div className="flex flex-col items-center gap-4 text-center text-sm md:flex-row md:justify-between">
            <p className="text-gray-500">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <nav aria-label="Legal links" className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/privacy"
                className="text-gray-500 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-500 transition-colors hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap.xml"
                className="text-gray-500 transition-colors hover:text-white"
              >
                Sitemap
              </a>
            </nav>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-center text-xs text-gray-600">
            InstallLEO is an independent installation service provider. We are
            not affiliated with, endorsed by, or sponsored by Amazon or Project
            Kuiper. Amazon, Project Kuiper, and related marks are trademarks of
            Amazon.com, Inc. or its affiliates.
          </p>
        </div>
      </footer>
    </>
  );
}

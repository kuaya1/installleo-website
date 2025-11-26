import type { Metadata } from "next";

/**
 * =============================================================================
 * INSTALLLEO.COM - SEO CONFIGURATION
 * =============================================================================
 * 
 * This file contains all SEO-related configuration for maximum search visibility.
 * Target: Rank #1 for all LEO satellite installation keywords.
 * 
 * PRIMARY KEYWORDS:
 * - "LEO satellite installation"
 * - "Amazon LEO installation"
 * - "Project Kuiper installation"
 * - "LEO internet installation"
 * - "satellite internet installation"
 * 
 * SECONDARY KEYWORDS:
 * - "LEO installer near me"
 * - "professional LEO installation"
 * - "get LEO installed"
 * - "Amazon satellite internet setup"
 * 
 * SEMANTIC HTML RECOMMENDATIONS:
 * - Use <main> for primary content
 * - Use <article> for self-contained content blocks
 * - Use <section> with aria-labelledby for major page sections
 * - Use <aside> for supplementary content
 * - Use <nav> for navigation blocks
 * - Use <header>/<footer> appropriately
 * - Use heading hierarchy (h1 > h2 > h3) strictly
 * - Use <address> for contact information
 * - Use <time datetime=""> for dates
 * =============================================================================
 */

// =============================================================================
// SITE-WIDE DEFAULTS
// =============================================================================

export const SITE_CONFIG = {
  name: "InstallLEO",
  tagline: "Professional Amazon LEO Satellite Internet Installation",
  domain: "installleo.com",
  url: "https://installleo.com",
  locale: "en_US",
  
  // Contact Information (update with real details)
  contact: {
    email: "info@installleo.com",
    phone: "+1-800-555-1234",
    phoneDisplay: "(800) 555-1234",
  },
  
  // Social Media (add when available)
  social: {
    facebook: "https://facebook.com/installleo",
    twitter: "https://twitter.com/installleo",
    instagram: "https://instagram.com/installleo",
    linkedin: "https://linkedin.com/company/installleo",
  },
  
  // Brand Colors for theme-color meta
  colors: {
    primary: "#0A2540",
    accent: "#00D9FF",
    amazon: "#FF9900",
  },
} as const;

// =============================================================================
// DEFAULT METADATA
// =============================================================================

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  
  title: {
    default: "InstallLEO - Professional Amazon LEO Satellite Internet Installation",
    template: "%s | InstallLEO",
  },
  
  description:
    "Get Amazon LEO satellite internet professionally installed. Blazing-fast speeds up to 400+ Mbps, coverage anywhere, same-week installation by certified technicians. Free quote today!",
  
  keywords: [
    // Primary keywords
    "LEO satellite installation",
    "Amazon LEO installation",
    "Project Kuiper installation",
    "LEO internet installation",
    "satellite internet installation",
    // Secondary keywords
    "LEO installer near me",
    "professional LEO installation",
    "get LEO installed",
    "Amazon satellite internet setup",
    // Long-tail keywords
    "rural satellite internet installation",
    "low earth orbit satellite internet",
    "high speed satellite internet installer",
    "Amazon Kuiper installation service",
    "satellite dish installation service",
    "LEO satellite technician",
    "best satellite internet installer",
  ],
  
  authors: [{ name: "InstallLEO", url: SITE_CONFIG.url }],
  creator: "InstallLEO",
  publisher: "InstallLEO",
  
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
  
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "InstallLEO - Professional Amazon LEO Satellite Internet Installation",
    description:
      "Get Amazon LEO satellite internet professionally installed. Blazing-fast speeds, coverage anywhere, same-week installation. Free quote today!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InstallLEO - Amazon LEO Satellite Internet Installation",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "InstallLEO - Amazon LEO Satellite Installation",
    description:
      "Professional Amazon LEO satellite internet installation. Fast speeds, anywhere coverage, same-week setup.",
    images: ["/twitter-image.jpg"],
    creator: "@installleo",
    site: "@installleo",
  },
  
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  
  category: "Technology",
  
  other: {
    "theme-color": SITE_CONFIG.colors.primary,
    "color-scheme": "dark light",
    "format-detection": "telephone=yes",
  },
};

// =============================================================================
// STRUCTURED DATA SCHEMAS (JSON-LD)
// =============================================================================

/**
 * Organization Schema
 * Establishes brand identity and authority in search results
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  description: "Professional Amazon LEO satellite internet installation services",
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo.png`,
  sameAs: [
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.twitter,
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.linkedin,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE_CONFIG.contact.phone,
    contactType: "customer service",
    email: SITE_CONFIG.contact.email,
    availableLanguage: ["English"],
    areaServed: "US",
  },
};

/**
 * LocalBusiness Schema
 * Critical for "near me" searches and local SEO
 * UPDATE: Add real address when business location is established
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_CONFIG.url}/#localbusiness`,
  name: SITE_CONFIG.name,
  description:
    "Professional installation services for Amazon LEO satellite internet. Certified technicians, same-week installation, coverage anywhere.",
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.contact.phone,
  email: SITE_CONFIG.contact.email,
  image: `${SITE_CONFIG.url}/og-image.jpg`,
  logo: `${SITE_CONFIG.url}/logo.png`,
  priceRange: "$$",
  // UPDATE with real address
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Installation Way",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78701",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.2672,
    longitude: -97.7431,
  },
  // Service area - nationwide
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  // Operating hours
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.twitter,
    SITE_CONFIG.social.instagram,
  ],
};

/**
 * Service Schema
 * Defines the main service offering for rich results
 */
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_CONFIG.url}/#service`,
  name: "Amazon LEO Satellite Internet Installation",
  description:
    "Professional installation of Amazon LEO (Project Kuiper) satellite internet systems. Our certified technicians handle dish mounting, cable routing, and system configuration for optimal performance.",
  provider: {
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
  serviceType: "Satellite Internet Installation",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "LEO Installation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential LEO Installation",
          description:
            "Complete satellite dish installation for homes, including mounting, cabling, and configuration.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business LEO Installation",
          description:
            "Commercial-grade satellite internet installation for businesses with custom mounting solutions.",
        },
      },
    ],
  },
};

/**
 * WebSite Schema with SearchAction
 * Enables sitelinks search box in Google results
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.url}/#website`,
  name: SITE_CONFIG.name,
  description: DEFAULT_METADATA.description,
  url: SITE_CONFIG.url,
  publisher: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

/**
 * FAQPage Schema Generator
 * Use this for FAQ sections to get rich results
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList Schema Generator
 * Improves navigation display in search results
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Review/AggregateRating Schema Generator
 * For displaying star ratings in search results
 */
export function generateAggregateRatingSchema(
  ratingValue: number,
  reviewCount: number,
  bestRating = 5,
  worstRating = 1
) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue,
    reviewCount,
    bestRating,
    worstRating,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      image: `${SITE_CONFIG.url}/og-image.jpg`,
    },
  };
}

/**
 * HowTo Schema Generator
 * For installation process pages
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string; image?: string }[],
  totalTime?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  };
}

// =============================================================================
// PAGE-SPECIFIC METADATA GENERATORS
// =============================================================================

/**
 * Generate metadata for the homepage
 */
export function generateHomeMetadata(): Metadata {
  return {
    ...DEFAULT_METADATA,
    alternates: {
      canonical: SITE_CONFIG.url,
    },
  };
}

/**
 * Generate metadata for service area pages
 */
export function generateServiceAreaMetadata(
  city: string,
  state: string,
  stateAbbrev: string
): Metadata {
  const title = `LEO Satellite Installation in ${city}, ${stateAbbrev}`;
  const description = `Professional Amazon LEO satellite internet installation in ${city}, ${state}. Fast speeds, expert technicians, same-week setup. Get your free installation quote today!`;
  const url = `${SITE_CONFIG.url}/service-areas/${state.toLowerCase()}/${city.toLowerCase().replace(/\s+/g, "-")}`;

  return {
    title,
    description,
    keywords: [
      `LEO installation ${city}`,
      `satellite internet ${city} ${stateAbbrev}`,
      `Amazon LEO ${city}`,
      `internet installation ${city}`,
      `satellite installer ${city}`,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...DEFAULT_METADATA.openGraph,
      title,
      description,
      url,
    },
    twitter: {
      ...DEFAULT_METADATA.twitter,
      title,
      description,
    },
  };
}

/**
 * Generate metadata for blog/content pages
 */
export function generateArticleMetadata(
  title: string,
  description: string,
  slug: string,
  publishedTime: string,
  modifiedTime?: string,
  tags?: string[]
): Metadata {
  const url = `${SITE_CONFIG.url}/blog/${slug}`;

  return {
    title,
    description,
    keywords: tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      publishedTime,
      modifiedTime,
      authors: [SITE_CONFIG.name],
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// =============================================================================
// SEO UTILITY FUNCTIONS
// =============================================================================

/**
 * Generate JSON-LD script tag content
 * Use in layout or page components
 */
export function generateJsonLd(schema: object | object[]): string {
  return JSON.stringify(Array.isArray(schema) ? schema : schema);
}

/**
 * Combine multiple schemas for a page
 */
export function combineSchemas(...schemas: object[]): object[] {
  return schemas;
}

/**
 * Default schemas to include on every page
 */
export const defaultSchemas = [
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
];

/**
 * Homepage schemas (includes service schema)
 */
export const homepageSchemas = [...defaultSchemas, serviceSchema];

// =============================================================================
// PREDEFINED FAQ DATA
// Use with generateFAQSchema() for rich results
// =============================================================================

export const INSTALLATION_FAQS = [
  {
    question: "How long does LEO satellite installation take?",
    answer:
      "Most residential LEO satellite installations are completed within 2 hours. Business installations may take 2-4 hours depending on the complexity and custom mounting requirements.",
  },
  {
    question: "Do I need a clear view of the sky for LEO satellite internet?",
    answer:
      "Yes, LEO satellites require an unobstructed view of the sky. Our technicians will survey your property to find the optimal mounting location for the best signal reception.",
  },
  {
    question: "What speeds can I expect from Amazon LEO satellite internet?",
    answer:
      "Amazon LEO satellite internet delivers speeds up to 400+ Mbps download with low latency, making it suitable for streaming, gaming, video calls, and remote work.",
  },
  {
    question: "Is there a contract required for installation?",
    answer:
      "No, we don't require long-term contracts for installation services. You pay for the professional installation and can manage your satellite internet subscription directly with Amazon.",
  },
  {
    question: "What areas do you service for LEO installation?",
    answer:
      "We provide professional LEO satellite installation services nationwide across the United States, including rural and remote areas where traditional internet is unavailable.",
  },
  {
    question: "What's included in professional LEO installation?",
    answer:
      "Our installation includes site survey, optimal dish placement, secure mounting, professional cable routing, system configuration, speed testing, and a walkthrough of your new system.",
  },
];

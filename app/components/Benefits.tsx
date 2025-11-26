/**
 * =============================================================================
 * BENEFITS SECTION - SEO-OPTIMIZED, CONVERSION-FOCUSED
 * =============================================================================
 *
 * SEO STRATEGY:
 * - Semantic HTML hierarchy (section > h2 > article > h3)
 * - ItemList structured data for rich snippets
 * - Natural keyword integration (professional installation, certified installers,
 *   satellite internet setup, LEO coverage, fast installation)
 * - Descriptive, crawlable content
 *
 * CONVERSION OPTIMIZATION:
 * - Trust signals (certifications, experience, warranty)
 * - Clear value propositions per card
 * - Social proof indicators
 * - Strong CTA with urgency
 *
 * PERFORMANCE:
 * - No image dependencies (icons only)
 * - CSS-only animations (no JS)
 * - Minimal DOM complexity
 *
 * =============================================================================
 */

import {
  Zap,
  MapPin,
  BadgeCheck,
  FileX,
  CalendarClock,
  HeadphonesIcon,
  Shield,
  Award,
  Clock,
  type LucideIcon,
} from "lucide-react";

// =============================================================================
// BENEFITS DATA - Keyword-rich content for SEO
// =============================================================================

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  keywords: string[]; // For internal reference/tracking
  accentColor: string;
  bgColor: string;
}

const benefits: Benefit[] = [
  {
    icon: Zap,
    title: "Fast Professional Installation",
    description:
      "Our satellite internet setup takes just 2-3 hours. Expert technicians arrive on time, install your equipment properly, and ensure optimal signal strength before they leave.",
    keywords: ["fast installation", "professional installation", "satellite internet setup"],
    accentColor: "text-amazon",
    bgColor: "bg-amazon/10",
  },
  {
    icon: MapPin,
    title: "Complete LEO Coverage Anywhere",
    description:
      "Amazon LEO satellites provide coverage to rural areas, farms, and remote locations traditional internet can't reach. Get reliable connectivity no matter where you live.",
    keywords: ["LEO coverage", "satellite internet"],
    accentColor: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: BadgeCheck,
    title: "Certified Expert Installers",
    description:
      "Every installation is performed by certified installers trained specifically for LEO satellite systems. Professional installation ensures maximum performance from day one.",
    keywords: ["certified installers", "professional installation"],
    accentColor: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: FileX,
    title: "No Long-Term Contracts",
    description:
      "Enjoy your satellite internet setup without commitments. No early termination fees, no hidden charges. Cancel anytime—stay because you love the service.",
    keywords: ["satellite internet setup"],
    accentColor: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: CalendarClock,
    title: "Same-Day Service Available",
    description:
      "Need fast installation? We offer same-day and next-day appointments. Professional installation teams are standing by to get you connected quickly.",
    keywords: ["fast installation", "professional installation"],
    accentColor: "text-amazon",
    bgColor: "bg-amazon/10",
  },
  {
    icon: HeadphonesIcon,
    title: "Full Setup & Ongoing Support",
    description:
      "Our satellite internet setup includes complete configuration of all devices, network optimization, and continued technical support. Certified installers ensure everything works perfectly.",
    keywords: ["satellite internet setup", "certified installers"],
    accentColor: "text-accent",
    bgColor: "bg-accent/10",
  },
];

// =============================================================================
// TRUST SIGNALS - Builds credibility and authority
// =============================================================================

interface TrustSignal {
  icon: LucideIcon;
  value: string;
  label: string;
}

const trustSignals: TrustSignal[] = [
  {
    icon: Award,
    value: "1,000+",
    label: "Installations Completed",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Satisfaction Guarantee",
  },
  {
    icon: BadgeCheck,
    value: "Certified",
    label: "LEO Installation Experts",
  },
  {
    icon: Clock,
    value: "2-3 hrs",
    label: "Average Install Time",
  },
];

// =============================================================================
// STRUCTURED DATA - ItemList schema for rich snippets
// =============================================================================

function generateItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Benefits of Professional LEO Satellite Installation",
    description:
      "Why choose certified installers for your Amazon LEO satellite internet setup",
    numberOfItems: benefits.length,
    itemListElement: benefits.map((benefit, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: benefit.title,
      description: benefit.description,
    })),
  };
}

// =============================================================================
// COMPONENT
// =============================================================================

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative bg-gradient-to-b from-primary to-[#0d3a5c] py-20 lg:py-28"
      aria-labelledby="benefits-heading"
    >
      {/*
        JSON-LD ItemList Schema
        Helps search engines understand the benefits as a structured list
        Can appear as rich snippets in search results
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateItemListSchema()),
        }}
      />

      {/* Background decorations - CSS only, no CLS impact */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-amazon/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*
          SECTION HEADER
          H2 contains primary keyword: "Professional LEO Installation"
          Subheading reinforces value proposition with secondary keywords
        */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Why Choose Us for Your Installation
          </span>
          <h2
            id="benefits-heading"
            className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              Professional LEO Installation?
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            When you choose our <strong className="text-white">certified installers</strong> for your 
            Amazon LEO satellite internet setup, you get expert service, fast installation, and 
            reliable LEO coverage that works from day one.
          </p>
        </header>

        {/*
          BENEFITS GRID
          Semantic: Each benefit is an <article> with its own <h3>
          Grid: 1 col mobile → 2 cols tablet → 3 cols desktop
        */}
        <ul
          className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Installation benefits"
        >
          {benefits.map((benefit, index) => (
            <li key={benefit.title}>
              <article className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
              {/* Benefit number for structured data context */}
              <span className="sr-only">Benefit {index + 1}:</span>

              {/* Icon with hover animation */}
              <div
                className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${benefit.bgColor} transition-transform duration-300 group-hover:scale-110`}
                aria-hidden="true"
              >
                <benefit.icon
                  className={`h-7 w-7 ${benefit.accentColor}`}
                  strokeWidth={1.5}
                />
              </div>

              {/*
                H3 TITLE
                Contains target keywords naturally
                Bold and prominent for scanning
              */}
              <h3 className="mb-3 text-xl font-bold text-white">
                {benefit.title}
              </h3>

              {/*
                DESCRIPTION
                Keyword-rich but natural reading
                Provides value, not just keywords
              */}
              <p className="leading-relaxed text-gray-400">
                {benefit.description}
              </p>

              {/* Animated accent line on hover */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-0.5 ${benefit.bgColor} scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
                aria-hidden="true"
              />
              </article>
            </li>
          ))}
        </ul>

        {/*
          TRUST SIGNALS SECTION
          Social proof and credibility indicators
          Reinforces expertise and reliability
        */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h3 className="mb-8 text-center text-lg font-semibold text-white">
            Trusted by Homeowners & Businesses for{" "}
            <span className="text-accent">Professional Installation</span>
          </h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <signal.icon
                    className="h-6 w-6 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-2xl font-bold text-white">
                  {signal.value}
                </span>
                <span className="text-sm text-gray-400">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/*
          BOTTOM CTA
          Clear call to action with urgency
          Keyword: "satellite internet setup"
        */}
        <footer className="mt-16 text-center">
          <p className="mb-6 text-lg text-gray-300">
            Ready for <strong className="text-white">fast installation</strong> of your 
            satellite internet setup by certified installers?
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amazon to-orange-500 px-8 py-4 text-lg font-bold text-primary shadow-lg shadow-amazon/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amazon/30 focus:outline-none focus:ring-2 focus:ring-amazon focus:ring-offset-2 focus:ring-offset-primary"
          >
            Get Your Free Installation Quote
          </a>
          <p className="mt-4 text-sm text-gray-500">
            ✓ No obligation &nbsp;•&nbsp; ✓ Same-day quotes &nbsp;•&nbsp; ✓ Licensed & insured installers
          </p>
        </footer>
      </div>
    </section>
  );
}

import { Satellite, Zap, Globe, ArrowDown, Shield, Clock } from "lucide-react";
import { serviceSchema } from "@/app/lib/seo-config";

/**
 * =============================================================================
 * HERO COMPONENT - SEO-OPTIMIZED FOR LEO SATELLITE INSTALLATION KEYWORDS
 * =============================================================================
 *
 * PRIMARY KEYWORDS TARGETED:
 * - "Professional Amazon LEO Satellite Installation" (H1)
 * - "LEO satellite installation"
 * - "Amazon Project Kuiper installation"
 * - "satellite internet installation"
 *
 * SECONDARY KEYWORDS:
 * - "certified satellite installers"
 * - "fast satellite internet setup"
 * - "LEO internet installation service"
 *
 * SEO STRUCTURE:
 * - Single H1 containing primary keyword phrase
 * - H2 subheadline with benefit-focused secondary keywords
 * - Semantic HTML5 elements (header, section, nav)
 * - Schema.org Service structured data
 * - Descriptive link text (not "click here")
 * - SVG icons (inline, no external requests)
 * - CSS-only background (no LCP-blocking images)
 *
 * CORE WEB VITALS OPTIMIZATIONS:
 * - No external images in hero (CSS gradients only)
 * - SVG icons from lucide-react (tree-shaken, inline)
 * - Server component (no client JS in critical path)
 * - Minimal DOM nodes for faster FCP
 *
 * IMAGE ALT TEXT GUIDELINES (for future images):
 * - Hero image: "Professional technician installing Amazon LEO satellite dish on residential roof"
 * - Logo: "InstallLEO - Amazon LEO Satellite Installation Services"
 * - Trust badges: "[Certification Name] Certified LEO Satellite Installer Badge"
 * =============================================================================
 */

export default function Hero() {
  // Serialize schema for JSON-LD injection
  const schemaJson = JSON.stringify(serviceSchema);

  return (
    <>
      {/* 
        JSON-LD Structured Data for Service Schema
        This helps Google understand our service offering and can enable rich results.
        Placed at component level for page-specific schema.
        
        Note: dangerouslySetInnerHTML is the standard React pattern for JSON-LD.
        The content is trusted (from our seo-config) and properly serialized.
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: schemaJson,
        }}
      />

      {/*
        SEMANTIC HTML: Using <header> as this is the primary page header.
        Contains the main heading (H1) and introductory content.
        role="banner" is implicit for <header> at root level.
      */}
      <header className="relative min-h-screen overflow-hidden bg-primary">
        {/* 
          PERFORMANCE: CSS-only background effects
          No images = no LCP issues, instant render
          Gradients and transforms are GPU-accelerated
        */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* Primary gradient - deep space effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0d3a5c]" />

          {/* Animated stars - pure CSS, lightweight */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-[10%] h-1 w-1 animate-pulse rounded-full bg-white" />
            <div className="absolute top-32 left-[25%] h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            <div className="absolute top-16 left-[40%] h-1 w-1 animate-pulse rounded-full bg-white" />
            <div className="absolute top-48 left-[55%] h-2 w-2 animate-pulse rounded-full bg-accent" />
            <div className="absolute top-24 left-[70%] h-1 w-1 animate-pulse rounded-full bg-white" />
            <div className="absolute top-40 left-[85%] h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            <div className="absolute top-60 left-[15%] h-1 w-1 animate-pulse rounded-full bg-white" />
            <div className="absolute top-72 left-[65%] h-1 w-1 animate-pulse rounded-full bg-white" />
            <div className="absolute top-80 left-[30%] h-2 w-2 animate-pulse rounded-full bg-accent" />
            <div className="absolute top-52 left-[90%] h-1 w-1 animate-pulse rounded-full bg-white" />
          </div>

          {/* Orbital rings - suggests satellite technology */}
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10 md:h-[800px] md:w-[800px]" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20 md:h-[600px] md:w-[600px]" />
          <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30 md:h-[400px] md:w-[400px]" />

          {/* Accent glow - draws eye to center content */}
          <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]" />
        </div>

        {/* Main content container */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
          {/* 
            TRUST SIGNAL: Service badge with brand association
            "Amazon LEO" and "Project Kuiper" are high-value keywords
          */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 backdrop-blur-sm">
            {/* SVG icon - inline, no external request */}
            <Satellite
              className="h-4 w-4 text-accent"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-accent">
              Amazon LEO &amp; Project Kuiper Installation Experts
            </span>
          </div>

          {/*
            H1 - THE MOST IMPORTANT ON-PAGE SEO ELEMENT
            
            Requirements met:
            ✓ Single H1 per page
            ✓ Contains primary keyword: "Professional Amazon LEO Satellite Installation"
            ✓ Front-loaded with important terms
            ✓ Natural reading flow (not keyword stuffed)
            ✓ Compelling for humans (conversion focused)
            
            Keyword density strategy:
            - "Professional" - establishes quality/trust
            - "Amazon LEO" - brand + technology keyword
            - "Satellite Installation" - core service keyword
            - "Service" - service-type modifier for local SEO
          */}
          <h1
            id="hero-heading"
            className="mb-6 text-center text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="sr-only">Professional Amazon LEO Satellite Installation Services - </span>
            Get{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              Professional LEO
            </span>{" "}
            Satellite
            <br className="hidden sm:block" />
            <span className="text-amazon">Installation</span>{" "}
            <span className="text-white">Today</span>
          </h1>

          {/*
            H2 SUBHEADLINE - Secondary keywords + benefits
            
            Keywords included:
            - "certified installers" (trust signal + keyword)
            - "Amazon Project Kuiper" (product keyword)
            - "satellite internet" (category keyword)
            - "fast setup" (benefit + keyword)
            
            Benefits highlighted:
            - Speed (400+ Mbps)
            - Coverage (anywhere)
            - Professional service
          */}
          <h2 className="mb-10 max-w-3xl text-center text-lg font-normal text-gray-300 sm:text-xl md:text-2xl">
            <strong className="font-semibold text-white">Certified installers</strong> for Amazon Project Kuiper
            satellite internet. Get{" "}
            <strong className="font-semibold text-accent">blazing-fast speeds up to 400+ Mbps</strong>
            {" "}with professional same-week installation—even in rural and remote areas.
          </h2>

          {/*
            PRIMARY CTA - Descriptive, keyword-rich link text
            
            SEO best practices:
            ✓ Descriptive text (not "click here" or "learn more")
            ✓ Contains action + benefit: "Free LEO Installation Quote"
            ✓ Anchor links to form section
            ✓ Visually prominent (conversion optimization)
          */}
          <a
            href="#lead-form"
            className="group mb-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amazon to-orange-500 px-8 py-4 text-lg font-bold text-primary shadow-lg shadow-amazon/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amazon/30 sm:text-xl"
          >
            Get Your Free LEO Installation Quote
            <ArrowDown
              className="h-5 w-5 transition-transform group-hover:translate-y-1"
              aria-hidden="true"
            />
          </a>

          {/*
            TRUST INDICATORS / VALUE PROPOSITIONS
            
            These support E-E-A-T (Experience, Expertise, Authoritativeness, Trust):
            - Speed stats (specific numbers build trust)
            - Coverage claim (addresses user pain point)
            - Professional certification (expertise signal)
            - Same-week availability (urgency + convenience)
            
            Using <ul> for semantic list of features
          */}
          <ul
            className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            aria-label="Key benefits of our LEO satellite installation service"
          >
            <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                <Zap className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-white">400+ Mbps Speeds</p>
                <p className="text-sm text-gray-400">Ultra-fast LEO internet</p>
              </div>
            </li>

            <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent/20">
                <Globe className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-white">Nationwide Coverage</p>
                <p className="text-sm text-gray-400">Rural &amp; remote areas</p>
              </div>
            </li>

            <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-amazon/20">
                <Shield className="h-5 w-5 text-amazon" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-white">Certified Installers</p>
                <p className="text-sm text-gray-400">Professional technicians</p>
              </div>
            </li>

            <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20">
                <Clock className="h-5 w-5 text-green-400" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-white">Same-Week Setup</p>
                <p className="text-sm text-gray-400">Fast installation</p>
              </div>
            </li>
          </ul>

          {/*
            SECONDARY CTA / SCROLL INDICATOR
            Provides additional navigation option with descriptive text
          */}
          <nav
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            aria-label="Page navigation"
          >
            <a
              href="#lead-form"
              className="flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-accent"
            >
              <span className="text-xs uppercase tracking-widest">
                Request Your Free Quote
              </span>
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

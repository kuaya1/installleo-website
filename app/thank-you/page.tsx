/**
 * =============================================================================
 * THANK YOU PAGE - POST-CONVERSION CONFIRMATION WITH TRACKING
 * =============================================================================
 *
 * PURPOSE:
 * - Confirm successful lead submission
 * - Build confidence with clear next steps
 * - Track conversions (GA4, Meta Pixel, Google Ads)
 * - Reinforce trust with social proof
 *
 * SEO:
 * - noindex, follow (don't pollute search results with thank you pages)
 * - Still allow crawlers to follow links to main site
 *
 * TRACKING:
 * - This page loading = successful conversion
 * - Fire conversion events on page load
 * - Pass lead data if available (from URL params or cookies)
 *
 * =============================================================================
 */

import type { Metadata } from "next";
import {
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  ArrowLeft,
  Calendar,
  Wrench,
  Star,
  Shield,
  Award,
  Users,
  Home,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/app/lib/seo-config";

// =============================================================================
// METADATA - noindex to prevent indexing, but allow following links
// =============================================================================

export const metadata: Metadata = {
  title: "Quote Request Received | InstallLEO",
  description:
    "Your Amazon LEO satellite internet installation quote request has been received. Our team will contact you within 2 hours.",
  robots: {
    index: false, // Don't index thank you pages
    follow: true, // But do follow links to main pages
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

// =============================================================================
// TIMELINE STEPS - "What Happens Next"
// =============================================================================

const timelineSteps = [
  {
    icon: Clock,
    title: "We Review Your Information",
    description:
      "Our team reviews your location and property details to prepare your customized installation quote.",
    time: "Within 2 hours",
    status: "in-progress",
  },
  {
    icon: Phone,
    title: "Free Consultation Call",
    description:
      "A certified installation specialist will call to discuss your needs, answer questions, and provide your quote.",
    time: "Same business day",
    status: "upcoming",
  },
  {
    icon: Calendar,
    title: "Installation Appointment Scheduled",
    description:
      "Choose a convenient date and time. We offer same-day, next-day, and scheduled appointments.",
    time: "At your convenience",
    status: "upcoming",
  },
  {
    icon: Wrench,
    title: "Professional Installation Completed",
    description:
      "Our certified technicians arrive on time, complete your installation in 2-3 hours, and ensure everything works perfectly.",
    time: "2-3 hours",
    status: "upcoming",
  },
];

// =============================================================================
// TRUST SIGNALS - Social proof and credibility
// =============================================================================

const trustStats = [
  {
    icon: Users,
    value: "1,000+",
    label: "Happy Customers",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Satisfaction Guarantee",
  },
  {
    icon: Award,
    value: "Certified",
    label: "Expert Installers",
  },
];

// =============================================================================
// STRUCTURED DATA - Completed action confirmation
// =============================================================================

const confirmationSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Quote Request Confirmation",
  description: "Confirmation page for Amazon LEO satellite installation quote request",
  mainEntity: {
    "@type": "Action",
    actionStatus: "CompletedActionStatus",
    name: "Quote Request Submission",
    description: "User has successfully submitted a quote request for LEO satellite installation",
    result: {
      "@type": "Thing",
      name: "Quote Request Received",
      description: "The installation team will review and respond within 2 hours",
    },
  },
};

// =============================================================================
// CLIENT-SIDE TRACKING COMPONENT
// =============================================================================

function ConversionTracking() {
  return (
    <>
      {/*
        =======================================================================
        CONVERSION TRACKING SCRIPTS
        =======================================================================
        
        These scripts fire conversion events when the thank you page loads.
        Uncomment and configure with your actual tracking IDs.
        
        IMPORTANT: This page loading = successful lead conversion
        =======================================================================
      */}

      {/* 
        GOOGLE ANALYTICS 4 - generate_lead event
        
        <script dangerouslySetInnerHTML={{
          __html: `
            // GA4 Conversion Event
            gtag('event', 'generate_lead', {
              currency: 'USD',
              value: 100, // Estimated lead value
              lead_source: 'website',
              form_name: 'leo_installation_quote',
            });
            
            // Also fire a page_view for the thank you page
            gtag('event', 'page_view', {
              page_title: 'Quote Request Confirmation',
              page_location: window.location.href,
              page_path: '/thank-you',
            });
          `
        }} />
      */}

      {/*
        GOOGLE ADS CONVERSION TRACKING
        
        <script dangerouslySetInnerHTML={{
          __html: `
            // Google Ads Conversion
            gtag('event', 'conversion', {
              send_to: 'AW-XXXXXXXXXX/XXXXXXXXXXXXXXXXXXXX',
              value: 100.0,
              currency: 'USD',
              transaction_id: '', // Pass lead ID if available
            });
          `
        }} />
      */}

      {/*
        META PIXEL (FACEBOOK) - Lead event
        
        <script dangerouslySetInnerHTML={{
          __html: `
            // Meta Pixel Lead Event
            fbq('track', 'Lead', {
              content_name: 'LEO Installation Quote',
              content_category: 'Quote Request',
              value: 100.00,
              currency: 'USD',
            });
          `
        }} />
      */}

      {/*
        LINKEDIN INSIGHT TAG - Conversion
        
        <script dangerouslySetInnerHTML={{
          __html: `
            // LinkedIn Conversion Tracking
            window.lintrk('track', { conversion_id: XXXXXXXX });
          `
        }} />
      */}

      {/*
        MICROSOFT/BING ADS - Conversion
        
        <script dangerouslySetInnerHTML={{
          __html: `
            // Bing UET Conversion
            window.uetq = window.uetq || [];
            window.uetq.push('event', 'lead_form_submit', {
              event_category: 'lead_generation',
              event_label: 'quote_request',
              event_value: 100
            });
          `
        }} />
      */}
    </>
  );
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(confirmationSchema),
        }}
      />

      {/* Conversion Tracking Pixels */}
      <ConversionTracking />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[#0066FF]/5 blur-[100px]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl">
          {/*
            SUCCESS CONFIRMATION
            Large, prominent confirmation with animation
          */}
          <header className="mb-10 text-center">
            {/* Animated success icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-green-500/30" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-green-100 ring-4 ring-green-200">
                  <CheckCircle2 className="h-12 w-12 text-green-500" aria-hidden="true" />
                </div>
              </div>
            </div>

            <h1 className="mb-4 text-3xl font-bold text-[#0A2540] sm:text-4xl lg:text-5xl">
              Thank You for Your Request!
            </h1>
            <p className="text-xl text-gray-600">
              Your LEO satellite installation quote request has been{" "}
              <span className="font-semibold text-green-600">
                successfully submitted
              </span>
              .
            </p>

            {/* Priority response badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#FF9900]/30 bg-[#FF9900]/10 px-5 py-2.5">
              <Clock className="h-5 w-5 text-[#FF9900]" aria-hidden="true" />
              <span className="font-semibold text-[#B45309]">
                Priority Response: Within 2 Hours
              </span>
            </div>
          </header>

          {/*
            WHAT HAPPENS NEXT - Timeline
            Shows users exactly what to expect
          */}
          <section
            className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8"
            aria-labelledby="next-steps-heading"
          >
            <h2
              id="next-steps-heading"
              className="mb-6 text-center text-xl font-bold text-[#0A2540]"
            >
              What Happens Next?
            </h2>

            <ol className="space-y-0">
              {timelineSteps.map((step, index) => (
                <li key={step.title} className="relative flex gap-4">
                  {/* Timeline connector line */}
                  {index < timelineSteps.length - 1 && (
                    <div
                      className="absolute left-5 top-12 h-[calc(100%-12px)] w-0.5 bg-gradient-to-b from-[#0066FF]/50 to-gray-200"
                      aria-hidden="true"
                    />
                  )}

                  {/* Step icon */}
                  <div
                    className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                      step.status === "in-progress"
                        ? "bg-green-100 ring-2 ring-green-300"
                        : "bg-[#0066FF]/10"
                    }`}
                  >
                    <step.icon
                      className={`h-5 w-5 ${
                        step.status === "in-progress"
                          ? "text-green-600"
                          : "text-[#0066FF]"
                      }`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Step content */}
                  <div className="flex-1 pb-8">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-[#0A2540]">{step.title}</h3>
                      {step.status === "in-progress" && (
                        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-600">
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      {step.description}
                    </p>
                    <p className="mt-2 text-xs font-medium text-[#0066FF]">
                      ⏱ {step.time}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/*
            TRUST SIGNALS - Social proof
            Reinforces confidence in their decision
          */}
          <section
            className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
            aria-labelledby="trust-heading"
          >
            <h2 id="trust-heading" className="sr-only">
              Why customers trust us
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {trustStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#0066FF]/10">
                    <stat.icon className="h-5 w-5 text-[#0066FF]" aria-hidden="true" />
                  </div>
                  <p className="text-xl font-bold text-[#0A2540]">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/*
            CONTACT INFORMATION
            For users who want to reach out directly
          */}
          <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center shadow-sm">
            <p className="mb-4 text-sm text-gray-500">
              Have an urgent question? Reach out directly:
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-2 text-[#0A2540] transition-colors hover:text-[#0066FF]"
              >
                <Mail className="h-5 w-5 text-[#0066FF]" aria-hidden="true" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="flex items-center gap-2 text-[#0A2540] transition-colors hover:text-[#0066FF]"
              >
                <Phone className="h-5 w-5 text-[#0066FF]" aria-hidden="true" />
                <span>{SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>
          </section>

          {/*
            SOCIAL SHARING (Optional)
            Users can share their excitement
          */}
          <section className="mb-10 text-center">
            <p className="mb-4 text-sm text-gray-500">
              Excited about getting LEO internet? Share with friends:
            </p>
            <div className="flex justify-center gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("I just requested a quote for Amazon LEO satellite internet installation! 🛰️ Finally getting fast internet in a rural area.")}&url=${encodeURIComponent(SITE_CONFIG.url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-colors hover:border-[#0066FF] hover:text-[#0066FF]"
                aria-label="Share on Twitter"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_CONFIG.url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-colors hover:border-[#0066FF] hover:text-[#0066FF]"
                aria-label="Share on Facebook"
              >
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </section>

          {/*
            NAVIGATION CTAs
            Return home or explore services
          */}
          <footer className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-6 py-3 font-semibold text-white shadow-lg shadow-[#0066FF]/25 transition-all duration-300 hover:scale-105 hover:bg-[#0052CC]"
            >
              <Home className="h-5 w-5" aria-hidden="true" />
              Return to Homepage
            </Link>
            <Link
              href="/#benefits"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 font-medium text-[#0A2540] transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              Learn More About Us
            </Link>
          </footer>
        </div>

        {/* Email reminder */}
        <p className="mt-16 text-center text-sm text-gray-500">
          📧 Check your email for a confirmation. If you don't see it within a
          few minutes, please check your spam folder.
        </p>
      </div>
    </main>
  );
}

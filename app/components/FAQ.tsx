/**
 * =============================================================================
 * FAQ SECTION - SEO-OPTIMIZED WITH FAQPAGE SCHEMA
 * =============================================================================
 *
 * SEO STRATEGY:
 * - FAQPage structured data for rich snippets in search results
 * - Keyword-rich questions matching actual search queries
 * - Semantic HTML with details/summary for native expand/collapse
 * - Proper heading hierarchy (H2 for section, questions are semantic summaries)
 *
 * TARGET KEYWORDS NATURALLY INCLUDED:
 * - "LEO installation" / "LEO satellite installation"
 * - "professional installation"
 * - "satellite internet setup"
 * - "certified installers"
 * - "how long does installation take"
 *
 * ACCESSIBILITY:
 * - Native details/summary (keyboard accessible)
 * - Visible focus states
 * - Proper ARIA landmarks
 *
 * RICH SNIPPETS:
 * - FAQPage schema enables questions to appear in Google search results
 * - Can occupy significant SERP real estate
 *
 * =============================================================================
 */

import { ChevronDown, HelpCircle } from "lucide-react";
import { generateFAQSchema } from "@/app/lib/seo-config";

// =============================================================================
// FAQ DATA - Keyword-rich questions matching real search queries
// =============================================================================

interface FAQItem {
  question: string;
  answer: string;
  keywords: string[]; // For internal reference
}

const faqs: FAQItem[] = [
  {
    question: "How long does professional LEO satellite installation take?",
    answer:
      "Most residential LEO satellite installation projects are completed in just 2-3 hours. Our certified installers arrive with all necessary equipment, perform a site survey, mount the dish in the optimal location, run cables professionally, configure your system, and test speeds before leaving. Business installations may take 3-4 hours depending on custom mounting requirements.",
    keywords: ["LEO installation", "how long", "professional installation"],
  },
  {
    question: "Is professional installation required for Amazon LEO internet?",
    answer:
      "While DIY installation is technically possible, professional installation is strongly recommended for optimal performance. Our certified installers ensure proper dish alignment, weatherproof mounting, clean cable runs, and optimal signal strength. Professional installation also protects your roof warranty and ensures compliance with local building codes.",
    keywords: ["professional installation", "required", "Amazon LEO"],
  },
  {
    question: "What areas do your certified LEO installers serve?",
    answer:
      "Our network of certified installers provides LEO satellite installation services nationwide across the United States. We specialize in rural areas, farms, ranches, and remote locations where traditional internet options are limited. Whether you're in the mountains, countryside, or suburbs, we can get you connected with fast satellite internet.",
    keywords: ["certified installers", "service areas", "nationwide"],
  },
  {
    question: "What speeds can I expect after satellite internet setup?",
    answer:
      "After professional satellite internet setup, you can expect download speeds up to 400+ Mbps with Amazon LEO. The low-earth orbit technology provides latency as low as 20-40ms, making it excellent for video calls, streaming 4K content, online gaming, and remote work. Our installers optimize dish placement for maximum signal strength and speed.",
    keywords: ["satellite internet setup", "speeds", "LEO"],
  },
  {
    question: "What's included in your LEO installation service?",
    answer:
      "Our comprehensive LEO installation service includes: free site survey, professional dish mounting (roof, wall, or ground), weatherproof cable routing, system configuration and optimization, speed testing to verify performance, a complete walkthrough of your equipment, and ongoing support. All work is performed by certified installers with full insurance coverage.",
    keywords: ["LEO installation service", "included", "certified"],
  },
  {
    question: "Do I need a clear view of the sky for LEO coverage?",
    answer:
      "Yes, LEO satellites require an unobstructed view of the sky for reliable coverage. During our free site survey, certified installers will identify the best mounting location on your property. Common obstructions include tall trees, buildings, and mountains. Our technicians use specialized tools to find the optimal position for consistent LEO coverage and signal quality.",
    keywords: ["LEO coverage", "clear view", "site survey"],
  },
  {
    question: "How much does professional LEO installation cost?",
    answer:
      "Professional LEO installation pricing varies based on your property type and mounting requirements. Residential installations typically range from $199-$399, while commercial installations start at $399. We provide free, no-obligation quotes after assessing your specific needs. All installations include our satisfaction guarantee and are performed by certified, insured technicians.",
    keywords: ["installation cost", "professional", "pricing"],
  },
  {
    question: "Can I schedule same-day LEO satellite installation?",
    answer:
      "Yes! We offer same-day and next-day installation appointments based on availability in your area. When you request a quote, let us know your timeline and we'll do our best to accommodate fast installation. Most customers are connected within 24-48 hours of booking. Don't wait weeks for internet—our certified installers are ready to get you online quickly.",
    keywords: ["same-day installation", "fast installation", "schedule"],
  },
];

// =============================================================================
// GENERATE SCHEMA - FAQPage structured data
// =============================================================================

function generateSchema() {
  return generateFAQSchema(
    faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }))
  );
}

// =============================================================================
// COMPONENT
// =============================================================================

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative bg-primary py-20 lg:py-28"
      aria-labelledby="faq-heading"
    >
      {/*
        FAQPage Schema - Critical for rich snippets
        This enables FAQ questions to appear directly in Google search results,
        increasing click-through rates and search visibility
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSchema()),
        }}
      />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/*
          SECTION HEADER
          H2 contains primary keywords for SEO
        */}
        <header className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
            <HelpCircle className="h-4 w-4 text-accent" aria-hidden="true" />
            <span className="text-sm font-medium text-accent">
              Common Questions
            </span>
          </div>
          <h2
            id="faq-heading"
            className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            LEO Installation{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              FAQ
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Everything you need to know about professional Amazon LEO satellite
            internet installation. Can't find your answer?{" "}
            <a
              href="#lead-form"
              className="text-accent underline hover:text-white"
            >
              Contact us
            </a>{" "}
            for help.
          </p>
        </header>

        {/*
          FAQ ACCORDION
          Using native details/summary for accessibility and SEO
          Content is visible to crawlers without JavaScript
        */}
        <section className="space-y-4" aria-label="Frequently Asked Questions">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] open:border-accent/30 open:bg-accent/5"
            >
              {/*
                QUESTION (Summary)
                Acts as the clickable header
                Contains keyword-rich question text
              */}
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-left font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20 text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <span className="text-lg leading-relaxed">{faq.question}</span>
                </span>
                <ChevronDown
                  className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-accent"
                  aria-hidden="true"
                />
              </summary>

              {/*
                ANSWER
                Keyword-rich content for SEO
                Visible to crawlers in HTML
              */}
              <div className="px-6 pb-6">
                <div className="ml-12 border-l-2 border-accent/30 pl-4">
                  <p className="leading-relaxed text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </section>

        {/*
          BOTTOM CTA
          Captures users who've read FAQs and are ready to convert
        */}
        <footer className="mt-12 text-center">
          <p className="mb-4 text-gray-400">
            Have more questions about LEO satellite installation?
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amazon to-orange-500 px-8 py-4 font-bold text-primary shadow-lg shadow-amazon/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amazon/30 focus:outline-none focus:ring-2 focus:ring-amazon focus:ring-offset-2 focus:ring-offset-primary"
          >
            Get Your Free Quote & Consultation
          </a>
        </footer>
      </div>
    </section>
  );
}

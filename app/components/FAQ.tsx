/**
 * FAQ SECTION - Clean White Theme Design
 * Professional accordion with FAQPage schema
 */

import { ChevronDown, HelpCircle } from "lucide-react";
import { generateFAQSchema } from "@/app/lib/seo-config";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does professional LEO satellite installation take?",
    answer:
      "Most residential LEO satellite installation projects are completed in just 2-3 hours. Our certified installers arrive with all necessary equipment, perform a site survey, mount the dish in the optimal location, run cables professionally, configure your system, and test speeds before leaving. Business installations may take 3-4 hours depending on custom mounting requirements.",
  },
  {
    question: "Is professional installation required for Amazon LEO internet?",
    answer:
      "While DIY installation is technically possible, professional installation is strongly recommended for optimal performance. Our certified installers ensure proper dish alignment, weatherproof mounting, clean cable runs, and optimal signal strength. Professional installation also protects your roof warranty and ensures compliance with local building codes.",
  },
  {
    question: "What areas do your certified LEO installers serve?",
    answer:
      "Our network of certified installers provides LEO satellite installation services nationwide across the United States. We specialize in rural areas, farms, ranches, and remote locations where traditional internet options are limited. Whether you're in the mountains, countryside, or suburbs, we can get you connected with fast satellite internet.",
  },
  {
    question: "What speeds can I expect after satellite internet setup?",
    answer:
      "After professional satellite internet setup, you can expect download speeds up to 400+ Mbps with Amazon LEO. The low-earth orbit technology provides latency as low as 20-40ms, making it excellent for video calls, streaming 4K content, online gaming, and remote work. Our installers optimize dish placement for maximum signal strength and speed.",
  },
  {
    question: "What's included in your LEO installation service?",
    answer:
      "Our comprehensive LEO installation service includes: free site survey, professional dish mounting (roof, wall, or ground), weatherproof cable routing, system configuration and optimization, speed testing to verify performance, a complete walkthrough of your equipment, and ongoing support. All work is performed by certified installers with full insurance coverage.",
  },
  {
    question: "Do I need a clear view of the sky for LEO coverage?",
    answer:
      "Yes, LEO satellites require an unobstructed view of the sky for reliable coverage. During our free site survey, certified installers will identify the best mounting location on your property. Common obstructions include tall trees, buildings, and mountains. Our technicians use specialized tools to find the optimal position for consistent LEO coverage and signal quality.",
  },
  {
    question: "How much does professional LEO installation cost?",
    answer:
      "Professional LEO installation pricing varies based on your property type and mounting requirements. Residential installations typically range from $199-$399, while commercial installations start at $399. We provide free, no-obligation quotes after assessing your specific needs. All installations include our satisfaction guarantee and are performed by certified, insured technicians.",
  },
  {
    question: "Can I schedule same-day LEO satellite installation?",
    answer:
      "Yes! We offer same-day and next-day installation appointments based on availability in your area. When you request a quote, let us know your timeline and we'll do our best to accommodate fast installation. Most customers are connected within 24-48 hours of booking. Don't wait weeks for internet—our certified installers are ready to get you online quickly.",
  },
];

function generateSchema() {
  return generateFAQSchema(
    faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }))
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative bg-white py-20 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateSchema()),
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0066FF]/20 bg-[#0066FF]/5 px-4 py-1.5">
            <HelpCircle className="h-4 w-4 text-[#0066FF]" aria-hidden="true" />
            <span className="text-sm font-medium text-[#0066FF]">Common Questions</span>
          </div>
          <h2
            id="faq-heading"
            className="mb-4 text-3xl font-bold text-[#0A2540] sm:text-4xl lg:text-5xl"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Everything you need to know about professional Amazon LEO satellite
            internet installation. Can't find your answer?{" "}
            <a href="#lead-form" className="text-[#0066FF] underline hover:text-[#0052CC]">
              Contact us
            </a>{" "}
            for help.
          </p>
        </header>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 open:border-[#0066FF]/30 open:bg-[#0066FF]/5 open:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-left font-semibold text-[#0A2540] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-4">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#0066FF]/10 text-sm font-bold text-[#0066FF]">
                    {index + 1}
                  </span>
                  <span className="text-base leading-relaxed sm:text-lg">{faq.question}</span>
                </span>
                <ChevronDown
                  className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-[#0066FF]"
                  aria-hidden="true"
                />
              </summary>

              <div className="px-5 pb-5">
                <div className="ml-11 border-l-2 border-[#0066FF]/20 pl-4">
                  <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <footer className="mt-12 text-center">
          <p className="mb-4 text-gray-600">Have more questions about LEO satellite installation?</p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-8 py-4 font-bold text-white shadow-lg shadow-[#0066FF]/25 transition-all duration-300 hover:bg-[#0052CC] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2"
          >
            Get Your Free Quote & Consultation
          </a>
        </footer>
      </div>
    </section>
  );
}

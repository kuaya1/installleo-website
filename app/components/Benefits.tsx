/**
 * BENEFITS SECTION - Clean White Theme Design
 * Professional, modern, conversion-focused
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

// Benefits data
interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: string;
  bgColor: string;
}

const benefits: Benefit[] = [
  {
    icon: Zap,
    title: "Fast Professional Installation",
    description:
      "Our satellite internet setup takes just 2-3 hours. Expert technicians arrive on time, install your equipment properly, and ensure optimal signal strength before they leave.",
    accentColor: "text-[#0066FF]",
    bgColor: "bg-[#0066FF]/10",
  },
  {
    icon: MapPin,
    title: "Complete LEO Coverage Anywhere",
    description:
      "Amazon LEO satellites provide coverage to rural areas, farms, and remote locations traditional internet can't reach. Get reliable connectivity no matter where you live.",
    accentColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: BadgeCheck,
    title: "Certified Expert Installers",
    description:
      "Every installation is performed by certified installers trained specifically for LEO satellite systems. Professional installation ensures maximum performance from day one.",
    accentColor: "text-[#FF9900]",
    bgColor: "bg-[#FF9900]/10",
  },
  {
    icon: FileX,
    title: "No Long-Term Contracts",
    description:
      "Enjoy your satellite internet setup without commitments. No early termination fees, no hidden charges. Cancel anytime—stay because you love the service.",
    accentColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: CalendarClock,
    title: "Same-Day Service Available",
    description:
      "Need fast installation? We offer same-day and next-day appointments. Professional installation teams are standing by to get you connected quickly.",
    accentColor: "text-rose-600",
    bgColor: "bg-rose-50",
  },
  {
    icon: HeadphonesIcon,
    title: "Full Setup & Ongoing Support",
    description:
      "Our satellite internet setup includes complete configuration of all devices, network optimization, and continued technical support. Certified installers ensure everything works perfectly.",
    accentColor: "text-[#0066FF]",
    bgColor: "bg-[#0066FF]/10",
  },
];

// Trust signals
interface TrustSignal {
  icon: LucideIcon;
  value: string;
  label: string;
}

const trustSignals: TrustSignal[] = [
  { icon: Award, value: "1,000+", label: "Installations Completed" },
  { icon: Shield, value: "100%", label: "Satisfaction Guarantee" },
  { icon: BadgeCheck, value: "Certified", label: "LEO Installation Experts" },
  { icon: Clock, value: "2-3 hrs", label: "Average Install Time" },
];

// Schema
function generateItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Benefits of Professional LEO Satellite Installation",
    description: "Why choose certified installers for your Amazon LEO satellite internet setup",
    numberOfItems: benefits.length,
    itemListElement: benefits.map((benefit, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: benefit.title,
      description: benefit.description,
    })),
  };
}

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative bg-gray-50 py-20 lg:py-28"
      aria-labelledby="benefits-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateItemListSchema()),
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#0066FF]/20 bg-[#0066FF]/5 px-4 py-1.5 text-sm font-medium text-[#0066FF]">
            Why Choose Us
          </span>
          <h2
            id="benefits-heading"
            className="mb-6 text-3xl font-bold text-[#0A2540] sm:text-4xl lg:text-5xl"
          >
            Professional LEO Installation{" "}
            <span className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            When you choose our <strong className="text-[#0A2540]">certified installers</strong> for your 
            Amazon LEO satellite internet setup, you get expert service, fast installation, and 
            reliable coverage that works from day one.
          </p>
        </header>

        {/* Benefits grid */}
        <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <li key={benefit.title}>
              <article className="group relative h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-200 hover:shadow-lg">
                <span className="sr-only">Benefit {index + 1}:</span>

                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${benefit.bgColor} transition-transform duration-300 group-hover:scale-110`}
                  aria-hidden="true"
                >
                  <benefit.icon className={`h-7 w-7 ${benefit.accentColor}`} strokeWidth={1.5} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#0A2540]">{benefit.title}</h3>
                <p className="leading-relaxed text-gray-600">{benefit.description}</p>

                {/* Accent line */}
                <div
                  className={`absolute bottom-0 left-6 right-6 h-1 rounded-full ${benefit.bgColor} scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}
                  aria-hidden="true"
                />
              </article>
            </li>
          ))}
        </ul>

        {/* Trust signals */}
        <div className="mt-16 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <h3 className="mb-8 text-center text-lg font-semibold text-[#0A2540]">
            Trusted by Homeowners & Businesses for{" "}
            <span className="text-[#0066FF]">Professional Installation</span>
          </h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0066FF]/10">
                  <signal.icon className="h-6 w-6 text-[#0066FF]" aria-hidden="true" />
                </div>
                <span className="text-2xl font-bold text-[#0A2540]">{signal.value}</span>
                <span className="text-sm text-gray-500">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <footer className="mt-16 text-center">
          <p className="mb-6 text-lg text-gray-600">
            Ready for <strong className="text-[#0A2540]">fast installation</strong> of your 
            satellite internet by certified installers?
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#0066FF]/25 transition-all duration-300 hover:bg-[#0052CC] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2"
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

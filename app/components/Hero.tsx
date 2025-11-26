import { Satellite, Zap, Globe, ArrowDown, Shield, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { serviceSchema } from "@/app/lib/seo-config";

/**
 * HERO COMPONENT - Clean White Theme Design
 * Professional, modern, conversion-focused
 */

export default function Hero() {
  const schemaJson = JSON.stringify(serviceSchema);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: schemaJson,
        }}
      />

      <header className="relative min-h-screen overflow-hidden bg-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* Light gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
          
          {/* Decorative shapes */}
          <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#0066FF]/5 to-transparent" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-[#FF9900]/5 to-transparent" />
          
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Navigation bar */}
        <nav className="relative z-20 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0066FF]">
                <Satellite className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold text-[#0A2540]">InstallLEO</span>
            </div>
            <a
              href="#lead-form"
              className="hidden rounded-full bg-[#0A2540] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#0A2540]/90 sm:inline-flex"
            >
              Get Free Quote
            </a>
          </div>
        </nav>

        {/* Main content */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
          {/* Trust badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0066FF]/20 bg-[#0066FF]/5 px-4 py-2">
            <div className="flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-green-400" />
              <span className="relative h-2 w-2 rounded-full bg-green-500" />
            </div>
            <span className="text-sm font-medium text-[#0A2540]">
              Amazon LEO &amp; Project Kuiper Installation Experts
            </span>
          </div>

          {/* H1 Heading */}
          <h1
            id="hero-heading"
            className="mb-6 max-w-4xl text-center text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0A2540] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-[#0066FF] to-[#00D9FF] bg-clip-text text-transparent">
              LEO Satellite
            </span>{" "}
            Installation
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-2xl text-center text-lg leading-relaxed text-gray-600 sm:text-xl">
            Get blazing-fast Amazon LEO satellite internet with{" "}
            <strong className="font-semibold text-[#0A2540]">certified professional installation</strong>. 
            Same-week setup, speeds up to 400+ Mbps, coverage anywhere.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#lead-form"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0066FF] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#0066FF]/25 transition-all duration-300 hover:bg-[#0052CC] hover:shadow-xl hover:shadow-[#0066FF]/30"
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="tel:+18001234567"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-[#0A2540] transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              Call (800) 123-4567
            </a>
          </div>

          {/* Quick benefits */}
          <ul className="mb-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
              <span>Free Site Survey</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
              <span>2-3 Hour Installation</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />
              <span>Satisfaction Guaranteed</span>
            </li>
          </ul>

          {/* Feature cards */}
          <ul className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-gray-200 hover:shadow-md">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066FF]/10">
                <Zap className="h-6 w-6 text-[#0066FF]" aria-hidden="true" />
              </div>
              <p className="font-bold text-[#0A2540]">400+ Mbps</p>
              <p className="text-sm text-gray-500">Ultra-fast speeds</p>
            </li>

            <li className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-gray-200 hover:shadow-md">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                <Globe className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              </div>
              <p className="font-bold text-[#0A2540]">Nationwide</p>
              <p className="text-sm text-gray-500">Rural &amp; remote areas</p>
            </li>

            <li className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-gray-200 hover:shadow-md">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF9900]/10">
                <Shield className="h-6 w-6 text-[#FF9900]" aria-hidden="true" />
              </div>
              <p className="font-bold text-[#0A2540]">Certified</p>
              <p className="text-sm text-gray-500">Expert installers</p>
            </li>

            <li className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-gray-200 hover:shadow-md">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50">
                <Clock className="h-6 w-6 text-purple-600" aria-hidden="true" />
              </div>
              <p className="font-bold text-[#0A2540]">Same-Week</p>
              <p className="text-sm text-gray-500">Fast scheduling</p>
            </li>
          </ul>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <a
              href="#benefits"
              className="flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-[#0066FF]"
            >
              <span className="text-xs font-medium uppercase tracking-widest">Learn More</span>
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

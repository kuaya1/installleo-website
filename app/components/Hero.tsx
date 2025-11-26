import { Satellite, Zap, Globe, ArrowDown, Shield, Clock } from "lucide-react";
import { serviceSchema } from "@/app/lib/seo-config";

/**
 * =============================================================================
 * HERO COMPONENT - SEO-OPTIMIZED FOR LEO SATELLITE INSTALLATION KEYWORDS
 * =============================================================================
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

      <header className="relative min-h-screen overflow-hidden bg-[#0A2540]">
        {/* Background with better contrast */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* Solid dark background for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540] via-[#0d3a5c] to-[#0A2540]" />

          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Glowing orbs for depth */}
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#00D9FF]/10 blur-[120px]" />
          <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-[#FF9900]/10 blur-[120px]" />
          <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[#00D9FF]/10 blur-[120px]" />
        </div>

        {/* Main content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
          {/* Trust badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00D9FF]/40 bg-[#00D9FF]/10 px-5 py-2.5 backdrop-blur-sm">
            <Satellite className="h-5 w-5 text-[#00D9FF]" aria-hidden="true" />
            <span className="text-sm font-semibold text-[#00D9FF]">
              Amazon LEO &amp; Project Kuiper Installation Experts
            </span>
          </div>

          {/* H1 - Primary heading with high contrast */}
          <h1
            id="hero-heading"
            className="mb-8 text-center text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block text-white drop-shadow-lg">
              Get{" "}
              <span className="text-[#00D9FF]">Professional LEO</span>{" "}
              Satellite
            </span>
            <span className="block text-white drop-shadow-lg">
              Installation{" "}
              <span className="text-[#FF9900]">Today</span>
            </span>
          </h1>

          {/* Subheadline with good contrast */}
          <p className="mb-12 max-w-3xl text-center text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
            <strong className="font-bold text-white">Certified installers</strong> for Amazon Project Kuiper
            satellite internet. Get{" "}
            <strong className="font-bold text-[#00D9FF]">blazing-fast speeds up to 400+ Mbps</strong>{" "}
            with professional same-week installation—even in rural and remote areas.
          </p>

          {/* Primary CTA button */}
          <a
            href="#lead-form"
            className="group mb-16 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#FF9900] to-[#F97316] px-10 py-5 text-lg font-bold text-[#0A2540] shadow-2xl shadow-[#FF9900]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#FF9900]/50 sm:text-xl"
          >
            Get Your Free LEO Installation Quote
            <ArrowDown
              className="h-6 w-6 transition-transform group-hover:translate-y-1"
              aria-hidden="true"
            />
          </a>

          {/* Trust indicators */}
          <ul
            className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            aria-label="Key benefits of our LEO satellite installation service"
          >
            <li className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-5 backdrop-blur-sm transition-all hover:bg-white/15">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#00D9FF]/20">
                <Zap className="h-6 w-6 text-[#00D9FF]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">400+ Mbps Speeds</p>
                <p className="text-sm text-white/70">Ultra-fast LEO internet</p>
              </div>
            </li>

            <li className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-5 backdrop-blur-sm transition-all hover:bg-white/15">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#00D9FF]/20">
                <Globe className="h-6 w-6 text-[#00D9FF]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">Nationwide Coverage</p>
                <p className="text-sm text-white/70">Rural &amp; remote areas</p>
              </div>
            </li>

            <li className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-5 backdrop-blur-sm transition-all hover:bg-white/15">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#FF9900]/20">
                <Shield className="h-6 w-6 text-[#FF9900]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">Certified Installers</p>
                <p className="text-sm text-white/70">Professional technicians</p>
              </div>
            </li>

            <li className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-5 backdrop-blur-sm transition-all hover:bg-white/15">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                <Clock className="h-6 w-6 text-emerald-400" aria-hidden="true" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">Same-Week Setup</p>
                <p className="text-sm text-white/70">Fast installation</p>
              </div>
            </li>
          </ul>

          {/* Scroll indicator */}
          <nav
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            aria-label="Page navigation"
          >
            <a
              href="#lead-form"
              className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-[#00D9FF]"
            >
              <span className="text-xs font-medium uppercase tracking-widest">
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

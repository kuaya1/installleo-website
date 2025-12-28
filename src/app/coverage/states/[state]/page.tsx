import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// State data for SEO and content
const stateData: Record<
	string,
	{
		name: string;
		population: string;
		ruralPercent: string;
		majorCities: string[];
		seoFocus: string;
		challenges: string[];
	}
> = {
	texas: {
		name: "Texas",
		population: "30+ million",
		ruralPercent: "15%",
		majorCities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"],
		seoFocus: "ranch and rural property connectivity",
		challenges: ["Large rural properties", "Remote ranches", "Limited fiber infrastructure"],
	},
	california: {
		name: "California",
		population: "39+ million",
		ruralPercent: "5%",
		majorCities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose"],
		seoFocus: "mountain and rural home internet solutions",
		challenges: ["Mountain terrain", "Fire-prone areas", "Remote communities"],
	},
	florida: {
		name: "Florida",
		population: "22+ million",
		ruralPercent: "9%",
		majorCities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee"],
		seoFocus: "coastal and rural satellite internet",
		challenges: ["Hurricane preparedness", "Coastal properties", "Rural farmland"],
	},
	montana: {
		name: "Montana",
		population: "1.1 million",
		ruralPercent: "45%",
		majorCities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Helena"],
		seoFocus: "remote mountain and ranch internet solutions",
		challenges: ["Extreme rural areas", "Mountain terrain", "Limited options"],
	},
	colorado: {
		name: "Colorado",
		population: "5.8 million",
		ruralPercent: "14%",
		majorCities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Boulder"],
		seoFocus: "mountain property satellite internet",
		challenges: ["High altitude", "Mountain properties", "Ski communities"],
	},
	// Add more states as needed
};

type Props = {
	params: Promise<{ state: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { state } = await params;
	const data = stateData[state];

	if (!data) {
		return {
			title: "State Not Found | InstallLEO",
		};
	}

	return {
		title: `Starlink & Kuiper Installation in ${data.name} | Professional LEO Satellite`,
		description: `Professional LEO satellite installation across ${data.name}. Expert Starlink setup and future Project Kuiper installation for ${data.seoFocus}. Serving ${data.majorCities.slice(0, 3).join(", ")} and all ${data.name} areas.`,
		keywords: [
			`starlink installation ${data.name.toLowerCase()}`,
			`satellite internet ${data.name.toLowerCase()}`,
			`kuiper ${data.name.toLowerCase()}`,
			`rural internet ${data.name.toLowerCase()}`,
			...data.majorCities.map((city) => `starlink ${city.toLowerCase()}`),
		],
		openGraph: {
			title: `LEO Satellite Installation in ${data.name} | InstallLEO`,
			description: `Professional Starlink and Kuiper installation for homes and businesses in ${data.name}. Expert installers statewide.`,
		},
	};
}

export async function generateStaticParams() {
	return Object.keys(stateData).map((state) => ({ state }));
}

export default async function StatePage({ params }: Props) {
	const { state } = await params;
	const data = stateData[state];

	if (!data) {
		notFound();
	}

	return (
		<>
			{/* Hero */}
			<section className="hero-section pt-32 pb-20 lg:pt-40 lg:pb-28">
				<div className="section-container relative z-10">
					<div className="max-w-4xl mx-auto text-center">
						<Link
							href="/coverage"
							className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm mb-6"
						>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
							Back to Coverage Map
						</Link>

						<span className="badge badge-cyan mb-4">{data.name}</span>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
							LEO Satellite Installation
							<br />
							<span className="text-gradient">in {data.name}</span>
						</h1>
						<p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
							Professional Starlink installation available now, with Project Kuiper coming soon.
							Expert installers serving all of {data.name}, specializing in {data.seoFocus}.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
							<Link href="/book" className="btn-primary">
								Schedule Installation
							</Link>
							<Link href="/assessment" className="btn-ghost">
								Free Site Assessment
							</Link>
						</div>

						{/* State Stats */}
						<div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
							<div className="stat-card">
								<div className="text-xl font-bold text-white">{data.population}</div>
								<div className="text-xs text-slate-400">Population</div>
							</div>
							<div className="stat-card">
								<div className="text-xl font-bold text-cyan-400">{data.ruralPercent}</div>
								<div className="text-xs text-slate-400">Rural Areas</div>
							</div>
							<div className="stat-card">
								<div className="text-xl font-bold text-signal-green">100%</div>
								<div className="text-xs text-slate-400">Coverage</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Service Areas */}
			<section className="section-padding bg-white border-b border-slate-100">
				<div className="section-container">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
								Serving All of {data.name}
							</h2>
							<p className="text-lg text-slate-600 mb-6">
								InstallLEO has certified installers throughout {data.name}, ready to bring
								high-speed satellite internet to your home or business. We specialize in the unique
								challenges of {data.seoFocus}.
							</p>

							<div className="mb-6">
								<h3 className="font-semibold text-space-800 mb-3">Major Cities We Serve:</h3>
								<div className="flex flex-wrap gap-2">
									{data.majorCities.map((city) => (
										<span
											key={city}
											className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
										>
											{city}
										</span>
									))}
									<span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
										+ All {data.name} areas
									</span>
								</div>
							</div>

							<div>
								<h3 className="font-semibold text-space-800 mb-3">Common Challenges We Solve:</h3>
								<ul className="space-y-2">
									{data.challenges.map((challenge) => (
										<li key={challenge} className="flex items-center gap-2 text-slate-600">
											<svg className="w-5 h-5 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
											{challenge}
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Map placeholder */}
						<div className="bg-slate-100 rounded-2xl h-80 flex items-center justify-center">
							<div className="text-center">
								<div className="text-4xl mb-2">🗺️</div>
								<div className="text-slate-500">{data.name} Coverage Map</div>
								<div className="text-sm text-slate-400">100% State Coverage</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose InstallLEO */}
			<section className="section-padding bg-slate-50">
				<div className="section-container">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
							Why Choose InstallLEO in {data.name}?
						</h2>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
						<div className="card border border-slate-200 text-center">
							<div className="text-3xl mb-3">🏠</div>
							<h3 className="font-semibold text-space-800 mb-2">Local Expertise</h3>
							<p className="text-sm text-slate-600">
								Installers who understand {data.name}'s unique terrain and conditions.
							</p>
						</div>
						<div className="card border border-slate-200 text-center">
							<div className="text-3xl mb-3">⚡</div>
							<h3 className="font-semibold text-space-800 mb-2">Fast Scheduling</h3>
							<p className="text-sm text-slate-600">
								Most installations scheduled within 1-2 weeks statewide.
							</p>
						</div>
						<div className="card border border-slate-200 text-center">
							<div className="text-3xl mb-3">🛡️</div>
							<h3 className="font-semibold text-space-800 mb-2">Licensed & Insured</h3>
							<p className="text-sm text-slate-600">
								Fully licensed and insured for work in {data.name}.
							</p>
						</div>
						<div className="card border border-slate-200 text-center">
							<div className="text-3xl mb-3">⭐</div>
							<h3 className="font-semibold text-space-800 mb-2">4.9★ Rating</h3>
							<p className="text-sm text-slate-600">
								Hundreds of happy customers across {data.name}.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services */}
			<section className="section-padding bg-white">
				<div className="section-container">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
							Our Services in {data.name}
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
						<div className="card-elevated border border-slate-200">
							<div className="text-2xl mb-3">🏡</div>
							<h3 className="font-semibold text-space-800 mb-2">Residential Installation</h3>
							<p className="text-sm text-slate-600 mb-4">
								Professional home installation starting at $299. Perfect for rural homes and
								properties.
							</p>
							<Link
								href="/services/residential-installation"
								className="text-cyan-600 hover:text-cyan-700 text-sm font-medium"
							>
								Learn More →
							</Link>
						</div>
						<div className="card-elevated border border-slate-200">
							<div className="text-2xl mb-3">🏢</div>
							<h3 className="font-semibold text-space-800 mb-2">Commercial Installation</h3>
							<p className="text-sm text-slate-600 mb-4">
								Business-grade installation for offices, farms, and commercial properties.
							</p>
							<Link
								href="/services/commercial-installation"
								className="text-cyan-600 hover:text-cyan-700 text-sm font-medium"
							>
								Learn More →
							</Link>
						</div>
						<div className="card-elevated border border-slate-200">
							<div className="text-2xl mb-3">🚐</div>
							<h3 className="font-semibold text-space-800 mb-2">RV & Mobile Installation</h3>
							<p className="text-sm text-slate-600 mb-4">
								Mobile setups for RVs, boats, and portable applications throughout {data.name}.
							</p>
							<Link
								href="/services/rv-installation"
								className="text-cyan-600 hover:text-cyan-700 text-sm font-medium"
							>
								Learn More →
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="section-padding bg-space-800 text-white">
				<div className="section-container">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">
							What {data.name} Customers Say
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
						<div className="stat-card">
							<div className="flex gap-1 mb-3">
								{[...Array(5)].map((_, i) => (
									<svg key={i} className="w-5 h-5 text-warning-amber" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
							</div>
							<p className="text-slate-300 italic mb-4">
								"Finally have reliable internet at my ranch. The InstallLEO team drove 2 hours to
								reach us and did an amazing job. Worth every penny."
							</p>
							<div className="text-sm text-slate-400">— Rural {data.name} Customer</div>
						</div>
						<div className="stat-card">
							<div className="flex gap-1 mb-3">
								{[...Array(5)].map((_, i) => (
									<svg key={i} className="w-5 h-5 text-warning-amber" fill="currentColor" viewBox="0 0 20 20">
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
							</div>
							<p className="text-slate-300 italic mb-4">
								"Professional, fast, and knowledgeable. They knew exactly how to position the dish
								for our mountain property. Getting 180+ Mbps now!"
							</p>
							<div className="text-sm text-slate-400">— {data.majorCities[2]} Homeowner</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="section-padding bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
				<div className="section-container text-center">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Ready for Fast Internet in {data.name}?
					</h2>
					<p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
						Join hundreds of satisfied {data.name} customers enjoying reliable LEO satellite
						internet. Schedule your professional installation today.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/book" className="btn-primary bg-white text-cyan-700 hover:bg-slate-100">
							Book Installation
						</Link>
						<Link href="/compare/kuiper-vs-starlink" className="btn-ghost border-white/30 hover:bg-white/10">
							Kuiper vs Starlink
						</Link>
					</div>
				</div>
			</section>

			{/* SEO Content */}
			<section className="section-padding bg-slate-50">
				<div className="section-container">
					<div className="max-w-3xl mx-auto prose prose-slate">
						<h2 className="text-2xl font-bold text-space-800 mb-4">
							LEO Satellite Internet in {data.name}
						</h2>
						<p className="text-slate-600">
							{data.name} presents unique opportunities and challenges for satellite internet.
							With {data.ruralPercent} of the state's {data.population} residents living in rural
							areas, reliable high-speed internet has been difficult to access until now.
						</p>
						<p className="text-slate-600">
							LEO (Low Earth Orbit) satellite services like Starlink — and soon Project Kuiper —
							are changing that. Unlike traditional satellite internet with its 600+ms latency, LEO
							satellites orbit just 340-550km above Earth, delivering latency as low as 20-50ms.
							This makes video calls, remote work, and online gaming possible for the first time
							for many {data.name} residents.
						</p>
						<p className="text-slate-600">
							InstallLEO specializes in {data.seoFocus}, helping {data.name} homeowners get the
							most out of their satellite internet investment. Our certified installers understand
							local conditions and ensure optimal dish placement for the best possible performance.
						</p>
						<p className="text-slate-600">
							Whether you're in {data.majorCities.join(", ")}, or anywhere else in {data.name},
							InstallLEO can help you get connected. We offer professional installation, site
							assessments, and ongoing support to keep you online.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

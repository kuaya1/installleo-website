import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Coverage Map | Starlink & Kuiper Installation | InstallLEO",
	description:
		"Check InstallLEO coverage in your area. Professional LEO satellite installation available in all 50 states. Enter your ZIP code to see local availability.",
	openGraph: {
		title: "Coverage Map | InstallLEO",
		description:
			"Professional satellite installation available nationwide. Check your area.",
	},
};

const featuredStates = [
	{ name: "Texas", slug: "texas", installations: "100+" },
	{ name: "California", slug: "california", installations: "85+" },
	{ name: "Florida", slug: "florida", installations: "75+" },
	{ name: "Montana", slug: "montana", installations: "45+" },
	{ name: "Colorado", slug: "colorado", installations: "60+" },
];

const allStates = [
	"Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
	"Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
	"Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
	"Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
	"Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
	"New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
	"Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
	"Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
	"West Virginia", "Wisconsin", "Wyoming",
];

export default function CoveragePage() {
	return (
		<>
			{/* Hero */}
			<section className="hero-section pt-32 pb-16 lg:pt-40 lg:pb-20">
				<div className="section-container relative z-10">
					<div className="max-w-3xl mx-auto text-center">
						<span className="badge badge-signal-green mb-4">All 50 States</span>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-space-900 mb-6">
							Coverage <span className="text-gradient">Map</span>
						</h1>
						<p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
							InstallLEO has certified installers across all 50 states. Check availability in your
							area and schedule your professional installation.
						</p>

						{/* ZIP Code Checker */}
						<div className="max-w-md mx-auto">
							<form className="flex gap-2">
								<input
									type="text"
									placeholder="Enter ZIP Code"
									maxLength={5}
									className="input flex-1 text-center text-lg"
								/>
								<button type="submit" className="btn-primary">
									Check Availability
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Map Placeholder */}
			<section className="section-padding bg-white border-b border-slate-100">
				<div className="section-container">
					<div className="bg-slate-100 rounded-2xl h-96 flex items-center justify-center">
						<div className="text-center">
							<div className="text-6xl mb-4">🗺️</div>
							<h3 className="text-xl font-semibold text-space-800 mb-2">Interactive Coverage Map</h3>
							<p className="text-slate-500">
								100% coverage across all 50 states
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Featured States */}
			<section className="section-padding bg-slate-50">
				<div className="section-container">
					<h2 className="text-2xl font-bold text-space-800 mb-8 text-center">
						Popular Service Areas
					</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
						{featuredStates.map((state) => (
							<Link
								key={state.slug}
								href={`/coverage/states/${state.slug}`}
								className="card border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all text-center group"
							>
								<h3 className="font-semibold text-space-800 group-hover:text-cyan-600 transition-colors mb-1">
									{state.name}
								</h3>
								<div className="text-sm text-slate-500">
									{state.installations} installations
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* All States */}
			<section className="section-padding bg-white">
				<div className="section-container">
					<h2 className="text-2xl font-bold text-space-800 mb-8 text-center">
						All Service Areas
					</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-w-5xl mx-auto">
						{allStates.map((state) => (
							<Link
								key={state}
								href={`/coverage/states/${state.toLowerCase().replace(" ", "-")}`}
								className="px-3 py-2 text-sm text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors"
							>
								{state}
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Service Types */}
			<section className="section-padding bg-slate-50">
				<div className="section-container">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-space-800 mb-4">Services Available Nationwide</h2>
						<p className="text-slate-600 max-w-2xl mx-auto">
							No matter where you are, our certified installers can help.
						</p>
					</div>

					<div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
						<div className="stat-card text-center">
							<div className="text-3xl mb-3">🏠</div>
							<h3 className="font-semibold text-space-800 mb-2">Residential</h3>
							<p className="text-sm text-slate-600">
								Home installations starting at $299
							</p>
						</div>
						<div className="stat-card text-center">
							<div className="text-3xl mb-3">🏢</div>
							<h3 className="font-semibold text-space-800 mb-2">Commercial</h3>
							<p className="text-sm text-slate-600">
								Business-grade installations
							</p>
						</div>
						<div className="stat-card text-center">
							<div className="text-3xl mb-3">🚐</div>
							<h3 className="font-semibold text-space-800 mb-2">RV & Mobile</h3>
							<p className="text-sm text-slate-600">
								Portable setups for travelers
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="section-padding bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
				<div className="section-container text-center">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Ready to Get Connected?
					</h2>
					<p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
						Professional installation is just a few clicks away. Schedule your free site
						assessment today.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/assessment" className="btn-primary bg-white text-cyan-700 hover:bg-slate-100">
							Free Site Assessment
						</Link>
						<Link href="/contact" className="btn-ghost border-white/30 hover:bg-white/10">
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

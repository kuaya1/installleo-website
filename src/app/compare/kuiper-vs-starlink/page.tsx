import type { Metadata } from "next";
import Link from "next/link";
import { ComparisonTable, type Feature } from "@/components/compare/ComparisonTable";
import { ComparisonQuiz } from "@/components/compare/ComparisonQuiz";
import { PreLaunchCTA } from "@/components/home/PreLaunchCTA";

export const metadata: Metadata = {
	title: "Kuiper vs Starlink: Complete 2025 Comparison Guide",
	description:
		"Compare Amazon Project Kuiper vs SpaceX Starlink: speed, pricing, availability, and features. Expert analysis to help you choose the right LEO satellite internet.",
	keywords: [
		"kuiper vs starlink",
		"project kuiper vs starlink",
		"amazon satellite vs starlink",
		"starlink alternative",
		"best satellite internet 2025",
	],
	openGraph: {
		title: "Kuiper vs Starlink: Which LEO Satellite Internet is Right for You?",
		description:
			"Complete comparison of Amazon Project Kuiper and SpaceX Starlink. Speed, pricing, availability, and expert recommendations.",
	},
};

interface ComparisonSection {
	category: string;
	features: Feature[];
}

const detailedComparison: ComparisonSection[] = [
	{
		category: "Speed & Performance",
		features: [
			{
				name: "Download Speed",
				kuiper: "Up to 400 Mbps",
				starlink: "Up to 220 Mbps",
				winner: "kuiper",
				notes: "Kuiper's promised speeds exceed Starlink's current tier offerings",
			},
			{
				name: "Upload Speed",
				kuiper: "Up to 50 Mbps (projected)",
				starlink: "Up to 25 Mbps",
				winner: "kuiper",
				notes: "Both services offer asymmetric connections typical of satellite",
			},
			{
				name: "Latency",
				kuiper: "~30ms (projected)",
				starlink: "25-50ms (typical)",
				winner: "tie",
				notes: "Both achieve low latency due to LEO orbit altitude",
			},
			{
				name: "Congestion Handling",
				kuiper: "Unknown (new network)",
				starlink: "Variable by area",
				winner: "pending",
				notes: "Starlink has more congestion in populated areas",
			},
		],
	},
	{
		category: "Pricing & Costs",
		features: [
			{
				name: "Monthly Service",
				kuiper: "$99-140/month (projected)",
				starlink: "$120-500/month",
				winner: "kuiper",
				notes: "Kuiper expected to undercut Starlink pricing",
			},
			{
				name: "Equipment Cost",
				kuiper: "TBD (likely subsidized)",
				starlink: "$499-2,500",
				winner: "pending",
				notes: "Amazon may subsidize hardware like they do with devices",
			},
			{
				name: "Installation",
				kuiper: "Professional options expected",
				starlink: "Self-install or professional",
				winner: "tie",
				notes: "Both will offer professional installation through partners like InstallLEO",
			},
			{
				name: "Contract Terms",
				kuiper: "Unknown",
				starlink: "No contract required",
				winner: "starlink",
				notes: "Starlink's flexibility is a known advantage",
			},
		],
	},
	{
		category: "Availability & Coverage",
		features: [
			{
				name: "Current Availability",
				kuiper: "Coming 2025",
				starlink: "Available now",
				winner: "starlink",
				notes: "Starlink has a significant head start",
			},
			{
				name: "Target Coverage",
				kuiper: "Global (focus on underserved)",
				starlink: "Global",
				winner: "tie",
				notes: "Both aim for worldwide coverage",
			},
			{
				name: "Satellite Count (Planned)",
				kuiper: "3,236 satellites",
				starlink: "12,000+ satellites",
				winner: "starlink",
				notes: "More satellites = better coverage density",
			},
			{
				name: "Waitlist",
				kuiper: "Sign up for notifications",
				starlink: "Varies by location",
				winner: "starlink",
				notes: "Many Starlink areas now available immediately",
			},
		],
	},
	{
		category: "Features & Ecosystem",
		features: [
			{
				name: "Mobile/RV Option",
				kuiper: "Expected",
				starlink: "Available ($150/mo)",
				winner: "starlink",
				notes: "Starlink Roam allows portable use",
			},
			{
				name: "Business Plans",
				kuiper: "Expected",
				starlink: "Available ($250-500/mo)",
				winner: "starlink",
				notes: "Starlink Business offers priority data",
			},
			{
				name: "Prime Integration",
				kuiper: "Expected benefits",
				starlink: "N/A",
				winner: "kuiper",
				notes: "Amazon likely to offer Prime member perks",
			},
			{
				name: "Customer Support",
				kuiper: "Amazon infrastructure",
				starlink: "App-based, limited",
				winner: "kuiper",
				notes: "Amazon's retail support infrastructure is a strength",
			},
		],
	},
];

export default function KuiperVsStarlinkPage() {
	return (
		<>
			{/* Hero Section */}
			<section className="hero-section pt-32 pb-20 lg:pt-40 lg:pb-28">
				<div className="section-container relative z-10">
					<div className="max-w-4xl mx-auto text-center">
						<span className="badge badge-amber mb-4">Comparison Guide</span>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
							Kuiper vs Starlink:
							<br />
							<span className="text-gradient">The Complete 2025 Guide</span>
						</h1>
						<p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
							Amazon's Project Kuiper is entering the LEO satellite market. How does it compare to
							SpaceX's Starlink? We break down everything you need to know to make the right
							choice.
						</p>

						{/* Quick verdict */}
						<div className="inline-flex items-center gap-4 px-6 py-4 bg-space-700/50 border border-space-500 rounded-xl backdrop-blur-sm">
							<div className="text-left">
								<div className="text-sm text-slate-400">Our Recommendation</div>
								<div className="text-white font-semibold">
									<span className="text-cyan-400">Starlink</span> if you need service now •{" "}
									<span className="text-signal-green">Wait for Kuiper</span> if you can wait for
									potentially better pricing
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Comparison Summary */}
			<section className="section-padding bg-white border-b border-slate-100">
				<div className="section-container">
					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						{/* Kuiper Summary */}
						<div className="card-elevated border-l-4 border-l-cyan-500">
							<div className="flex items-center gap-3 mb-4">
								<div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
									<span className="text-xl font-bold text-cyan-600">K</span>
								</div>
								<div>
									<h3 className="font-semibold text-space-800">Project Kuiper</h3>
									<div className="text-sm text-slate-500">Amazon's LEO Satellite</div>
								</div>
							</div>
							<ul className="space-y-2 text-sm">
								<li className="flex items-center gap-2">
									<svg className="w-4 h-4 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<span>Higher projected speeds (400 Mbps)</span>
								</li>
								<li className="flex items-center gap-2">
									<svg className="w-4 h-4 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<span>Expected lower pricing</span>
								</li>
								<li className="flex items-center gap-2">
									<svg className="w-4 h-4 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<span>Amazon customer service</span>
								</li>
								<li className="flex items-center gap-2">
									<svg className="w-4 h-4 text-warning-amber" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="text-slate-600">Not available until 2025</span>
								</li>
							</ul>
						</div>

						{/* Starlink Summary */}
						<div className="card-elevated border-l-4 border-l-space-800">
							<div className="flex items-center gap-3 mb-4">
								<div className="w-12 h-12 rounded-xl bg-space-800/10 flex items-center justify-center">
									<span className="text-xl font-bold text-space-800">S</span>
								</div>
								<div>
									<h3 className="font-semibold text-space-800">Starlink</h3>
									<div className="text-sm text-slate-500">SpaceX's LEO Satellite</div>
								</div>
							</div>
							<ul className="space-y-2 text-sm">
								<li className="flex items-center gap-2">
									<svg className="w-4 h-4 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<span>Available now in most areas</span>
								</li>
								<li className="flex items-center gap-2">
									<svg className="w-4 h-4 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<span>Proven, reliable service</span>
								</li>
								<li className="flex items-center gap-2">
									<svg className="w-4 h-4 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<span>Mobile/RV options available</span>
								</li>
								<li className="flex items-center gap-2">
									<svg className="w-4 h-4 text-warning-amber" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="text-slate-600">Higher pricing ($120-500/mo)</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Detailed Comparison Tables */}
			<section className="section-padding bg-slate-50">
				<div className="section-container">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
							Detailed Feature Comparison
						</h2>
						<p className="text-lg text-slate-600 max-w-2xl mx-auto">
							Side-by-side analysis of every important factor to consider when choosing between
							Kuiper and Starlink.
						</p>
					</div>

					<div className="space-y-8">
						{detailedComparison.map((section) => (
							<ComparisonTable key={section.category} category={section.category} features={section.features} />
						))}
					</div>
				</div>
			</section>

			{/* Interactive Quiz */}
			<section className="section-padding bg-white">
				<div className="section-container">
					<div className="text-center mb-12">
						<span className="badge badge-cyan mb-4">Find Your Match</span>
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
							Which Service is Right for You?
						</h2>
						<p className="text-lg text-slate-600 max-w-2xl mx-auto">
							Answer a few questions and we'll give you a personalized recommendation based on your
							needs.
						</p>
					</div>
					<ComparisonQuiz />
				</div>
			</section>

			{/* InstallLEO Value Prop */}
			<section className="section-padding bg-space-800 text-white">
				<div className="section-container">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">
							Whichever You Choose,
							<br />
							<span className="text-gradient">We Install It Right</span>
						</h2>
						<p className="text-lg text-slate-300 mb-8">
							InstallLEO is certified for both Starlink installation today and prepared for Project
							Kuiper when it launches. We're technology-agnostic — our job is getting you the best
							connectivity possible.
						</p>

						<div className="grid sm:grid-cols-3 gap-6 mb-10">
							<div className="stat-card">
								<div className="text-2xl font-bold text-cyan-400 mb-1">500+</div>
								<div className="text-sm text-slate-400">Installations Completed</div>
							</div>
							<div className="stat-card">
								<div className="text-2xl font-bold text-signal-green mb-1">Both</div>
								<div className="text-sm text-slate-400">Systems Supported</div>
							</div>
							<div className="stat-card">
								<div className="text-2xl font-bold text-white mb-1">50</div>
								<div className="text-sm text-slate-400">States Covered</div>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/services/residential-installation" className="btn-primary">
								Schedule Starlink Installation
							</Link>
							<Link href="#waitlist" className="btn-ghost">
								Get Kuiper Availability Alerts
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Pre-Launch CTA */}
			<div id="waitlist">
				<PreLaunchCTA />
			</div>
		</>
	);
}

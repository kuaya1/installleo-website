import type { Metadata } from "next";
import Link from "next/link";
import { CostCalculator } from "@/components/services/CostCalculator";

export const metadata: Metadata = {
	title: "Residential LEO Satellite Installation | Starlink & Kuiper | InstallLEO",
	description:
		"Professional Starlink and Project Kuiper installation for homes. Expert mounting, optimal positioning, and whole-home WiFi setup. Certified installers nationwide.",
	keywords: [
		"starlink installation",
		"kuiper installation",
		"satellite internet installation",
		"residential starlink",
		"home satellite installation",
	],
	openGraph: {
		title: "Professional Residential Satellite Installation | InstallLEO",
		description:
			"Expert Starlink and Kuiper installation for your home. Free site assessment, certified installers, warranty included.",
	},
};

const installationSteps = [
	{
		step: 1,
		title: "Site Assessment",
		description:
			"We analyze your property's sky view, identify the optimal mounting location, and plan the cable routing.",
		duration: "15-30 min",
		icon: "🔍",
	},
	{
		step: 2,
		title: "Equipment Mounting",
		description:
			"Professional roof, wall, or pole mount installation using weather-resistant hardware rated for your climate.",
		duration: "1-2 hours",
		icon: "🔧",
	},
	{
		step: 3,
		title: "Cable Routing",
		description:
			"Clean, weather-sealed cable installation from dish to router location, with optional in-wall routing.",
		duration: "30-60 min",
		icon: "📡",
	},
	{
		step: 4,
		title: "System Activation",
		description:
			"Full system setup, network configuration, speed testing, and walkthrough of your new connection.",
		duration: "20-30 min",
		icon: "✅",
	},
];

const packages = [
	{
		name: "Essential",
		price: 299,
		description: "Perfect for straightforward installations",
		features: [
			"Standard roof or wall mount",
			"Up to 50ft cable routing",
			"Basic weatherproofing",
			"System activation & testing",
			"30-day support",
		],
		popular: false,
	},
	{
		name: "Professional",
		price: 449,
		description: "Our most popular package for homes",
		features: [
			"Premium mounting hardware",
			"Up to 100ft cable routing",
			"Full weatherproofing & grounding",
			"System activation & testing",
			"In-wall cable option",
			"90-day support",
			"Performance optimization",
		],
		popular: true,
	},
	{
		name: "Premium",
		price: 699,
		description: "Complex installations & large properties",
		features: [
			"Custom mounting solution",
			"Up to 150ft cable routing",
			"Full weatherproofing & grounding",
			"System activation & testing",
			"In-wall cable included",
			"Mesh WiFi setup (up to 3 points)",
			"1-year support",
			"Priority scheduling",
		],
		popular: false,
	},
];

const faqs = [
	{
		question: "Do I need to purchase my Starlink kit before you install?",
		answer:
			"Yes, you'll need to order your Starlink equipment directly from SpaceX first. Once you have your kit (or it's on the way), schedule your installation with us. We can also help you order if needed.",
	},
	{
		question: "How long does installation take?",
		answer:
			"Most residential installations take 2-4 hours total. Complex installations with difficult roof access, long cable runs, or mesh WiFi setup may take up to 6 hours.",
	},
	{
		question: "What if my roof isn't suitable for mounting?",
		answer:
			"We offer multiple mounting options including ground poles, non-penetrating roof mounts, wall mounts, and chimney mounts. We'll recommend the best option during your site assessment.",
	},
	{
		question: "Will installation void my Starlink warranty?",
		answer:
			"No, professional installation does not void your Starlink warranty. In fact, proper installation can prevent issues that might otherwise cause warranty claims.",
	},
	{
		question: "Do you install in all 50 states?",
		answer:
			"Yes! InstallLEO has certified installers across all 50 states. Some remote areas may have limited availability or additional travel fees.",
	},
	{
		question: "What about Project Kuiper installation?",
		answer:
			"We're preparing for Project Kuiper installations when the service launches (expected 2025). Join our waitlist to be notified when Kuiper is available in your area.",
	},
];

const guarantees = [
	{
		icon: "✅",
		title: "Satisfaction Guaranteed",
		description: "Not happy? We'll make it right or refund your installation fee.",
	},
	{
		icon: "🛡️",
		title: "Workmanship Warranty",
		description: "Our work is guaranteed for a full year against defects.",
	},
	{
		icon: "📋",
		title: "Licensed & Insured",
		description: "Fully licensed and insured in every state we operate.",
	},
	{
		icon: "🎓",
		title: "Certified Installers",
		description: "Every technician is trained and certified for LEO installations.",
	},
];

export default function ResidentialInstallationPage() {
	return (
		<>
			{/* Hero */}
			<section className="hero-section pt-32 pb-20 lg:pt-40 lg:pb-28">
				<div className="section-container relative z-10">
					<div className="max-w-4xl mx-auto text-center">
						<span className="badge badge-cyan mb-4">Residential Installation</span>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
							Professional Satellite
							<br />
							<span className="text-gradient">Installation for Your Home</span>
						</h1>
						<p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
							Expert Starlink installation today, ready for Project Kuiper tomorrow. We handle
							everything from mounting to activation so you can enjoy fast, reliable internet.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
							<a href="#packages" className="btn-primary">
								View Packages & Pricing
							</a>
							<Link href="/assessment" className="btn-ghost">
								Free Site Assessment
							</Link>
						</div>

						{/* Trust indicators */}
						<div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
							<div className="flex items-center gap-2">
								<svg className="w-5 h-5 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								500+ Installations Completed
							</div>
							<div className="flex items-center gap-2">
								<svg className="w-5 h-5 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								4.9★ Average Rating
							</div>
							<div className="flex items-center gap-2">
								<svg className="w-5 h-5 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								All 50 States
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* What's Included */}
			<section className="section-padding bg-white border-b border-slate-100">
				<div className="section-container">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
							What's Included in Every Installation
						</h2>
						<p className="text-lg text-slate-600 max-w-2xl mx-auto">
							Our professional installation process ensures optimal performance from day one.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
						{installationSteps.map((step) => (
							<div key={step.step} className="relative">
								<div className="card border border-slate-200 h-full">
									<div className="absolute -top-3 left-4 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full">
										Step {step.step}
									</div>
									<div className="text-3xl mb-3 mt-2">{step.icon}</div>
									<h3 className="font-semibold text-space-800 mb-2">{step.title}</h3>
									<p className="text-sm text-slate-600 mb-3">{step.description}</p>
									<div className="text-xs text-cyan-600 font-medium">{step.duration}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Packages */}
			<section id="packages" className="section-padding bg-slate-50 scroll-mt-24">
				<div className="section-container">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
							Choose Your Installation Package
						</h2>
						<p className="text-lg text-slate-600 max-w-2xl mx-auto">
							Transparent pricing with no hidden fees. All packages include labor, hardware, and
							support.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{packages.map((pkg) => (
							<div
								key={pkg.name}
								className={`card-elevated relative ${pkg.popular ? "border-2 border-cyan-500 scale-105" : "border border-slate-200"}`}
							>
								{pkg.popular && (
									<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
										Most Popular
									</div>
								)}
								<div className="text-center mb-6">
									<h3 className="text-xl font-bold text-space-800 mb-1">{pkg.name}</h3>
									<p className="text-sm text-slate-500 mb-4">{pkg.description}</p>
									<div className="text-4xl font-bold text-space-800">
										${pkg.price}
										<span className="text-base font-normal text-slate-500">/install</span>
									</div>
								</div>
								<ul className="space-y-3 mb-6">
									{pkg.features.map((feature) => (
										<li key={feature} className="flex items-start gap-2 text-sm">
											<svg
												className="w-5 h-5 text-signal-green flex-shrink-0"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
											<span className="text-slate-700">{feature}</span>
										</li>
									))}
								</ul>
								<Link
									href={`/book?package=${pkg.name.toLowerCase()}`}
									className={pkg.popular ? "btn-primary w-full text-center" : "btn-secondary w-full text-center"}
								>
									Select {pkg.name}
								</Link>
							</div>
						))}
					</div>

					<p className="text-center text-sm text-slate-500 mt-8">
						Custom installations and commercial projects available.{" "}
						<Link href="/contact" className="text-cyan-600 hover:underline">
							Contact us
						</Link>{" "}
						for a custom quote.
					</p>
				</div>
			</section>

			{/* Cost Calculator */}
			<section className="section-padding bg-white border-t border-slate-100">
				<div className="section-container">
					<div className="text-center mb-12">
						<span className="badge badge-cyan mb-4">Interactive Tool</span>
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
							Estimate Your Installation Cost
						</h2>
						<p className="text-lg text-slate-600 max-w-2xl mx-auto">
							Answer a few questions to get a personalized installation estimate.
						</p>
					</div>
					<CostCalculator />
				</div>
			</section>

			{/* Guarantees */}
			<section className="section-padding bg-space-800 text-white">
				<div className="section-container">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">
							Our <span className="text-gradient">Guarantees</span>
						</h2>
						<p className="text-lg text-slate-300 max-w-2xl mx-auto">
							We stand behind our work with industry-leading guarantees and support.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
						{guarantees.map((g) => (
							<div key={g.title} className="stat-card text-center">
								<div className="text-3xl mb-3">{g.icon}</div>
								<h3 className="font-semibold text-white mb-2">{g.title}</h3>
								<p className="text-sm text-slate-400">{g.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQs */}
			<section className="section-padding bg-white">
				<div className="section-container">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
							Frequently Asked Questions
						</h2>
					</div>

					<div className="max-w-3xl mx-auto space-y-4">
						{faqs.map((faq) => (
							<details key={faq.question} className="group card border border-slate-200">
								<summary className="cursor-pointer list-none flex items-center justify-between">
									<span className="font-semibold text-space-800 pr-4">{faq.question}</span>
									<svg
										className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</summary>
								<p className="text-slate-600 mt-4 pt-4 border-t border-slate-100">{faq.answer}</p>
							</details>
						))}
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="section-padding bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
				<div className="section-container text-center">
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Ready for Fast, Reliable Satellite Internet?
					</h2>
					<p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
						Schedule your professional installation today and experience the difference proper
						setup makes.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/book" className="btn-primary bg-white text-cyan-700 hover:bg-slate-100">
							Book Installation
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

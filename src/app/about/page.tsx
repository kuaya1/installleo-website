import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "About InstallLEO | America's LEO Satellite Installation Authority",
	description:
		"Founded by Eric Enk, the expert behind 500+ successful satellite installations. Learn how InstallLEO is building America's professional LEO satellite installation network.",
	openGraph: {
		title: "About InstallLEO | Our Story",
		description:
			"From Northern Virginia's premier satellite installation service to a nationwide network. Learn the InstallLEO story.",
	},
};

const milestones = [
	{
		year: "2020",
		title: "The Orbit Tech Founded",
		description:
			"Eric Enk founded The Orbit Tech in Northern Virginia, becoming one of the region's first professional satellite internet installers.",
	},
	{
		year: "2021",
		title: "First 100 Installations",
		description:
			"Reached 100 professional Starlink installations with a perfect 5-star rating, establishing a reputation for quality and expertise.",
	},
	{
		year: "2023",
		title: "500+ Installations Milestone",
		description:
			"Completed over 500 satellite installations across Virginia and surrounding states, becoming a trusted name in professional installation.",
	},
	{
		year: "2024",
		title: "InstallLEO Launches",
		description:
			"With Amazon's Project Kuiper on the horizon, InstallLEO was born to take proven expertise nationwide and prepare for the next generation of satellite internet.",
	},
	{
		year: "2025",
		title: "Nationwide Network",
		description:
			"Building America's professional LEO satellite installation network with certified installers across all 50 states.",
	},
];

const values = [
	{
		title: "Expertise First",
		description:
			"We don't just install equipment—we understand the technology deeply. Every installer is trained on optimal placement, signal optimization, and network configuration.",
		icon: (
			<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
				/>
			</svg>
		),
	},
	{
		title: "Customer-Centric",
		description:
			"We help you make the right decision for your situation, even if that means recommending a solution we don't profit from. Trust is our most valuable asset.",
		icon: (
			<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/>
			</svg>
		),
	},
	{
		title: "Quality Guaranteed",
		description:
			"Every installation comes with our satisfaction guarantee. If something isn't right, we come back and fix it—no questions asked, no additional cost.",
		icon: (
			<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
				/>
			</svg>
		),
	},
	{
		title: "Technology Agnostic",
		description:
			"We're not tied to any single platform. Whether Starlink, Project Kuiper, or whatever comes next—we recommend and install what's best for you.",
		icon: (
			<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
		),
	},
];

export default function AboutPage() {
	return (
		<>
			{/* Hero */}
			<section className="hero-section pt-32 pb-16 lg:pt-40 lg:pb-20">
				<div className="section-container relative z-10">
					<div className="max-w-4xl mx-auto text-center">
						<span className="badge badge-cyan mb-4">Our Story</span>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-space-900 mb-6">
							Building America's LEO
							<br />
							<span className="text-gradient">Installation Authority</span>
						</h1>
						<p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
							From a single installer in Virginia to a nationwide network of certified
							professionals. This is the InstallLEO story.
						</p>
					</div>
				</div>
			</section>

			{/* Origin Story */}
			<section className="section-padding bg-white">
				<div className="section-container">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<span className="badge badge-amber mb-4">The Beginning</span>
							<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-6">
								From The Orbit Tech
								<br />
								<span className="text-gradient">to Nationwide</span>
							</h2>
							<div className="space-y-4 text-slate-600">
								<p>
									InstallLEO was founded by <strong className="text-space-800">Eric Enk</strong>,
									whose regional company The Orbit Tech has completed over 500 satellite
									installations in Northern Virginia with a perfect 5-star rating.
								</p>
								<p>
									When SpaceX launched Starlink, Eric saw that most customers were struggling with
									self-installation—poor placement, signal issues, and suboptimal performance.
									Professional installation wasn't just a convenience; it was the difference between
									"it works" and "it works perfectly."
								</p>
								<p>
									With Amazon's Project Kuiper set to launch in 2025, we saw an opportunity to take
									that proven expertise nationwide. InstallLEO is building America's professional
									LEO satellite installation network—ready to serve customers from coast to coast.
								</p>
							</div>
							<div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
										<svg
											className="w-6 h-6 text-cyan-600"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<div>
										<div className="font-semibold text-space-800">The Orbit Tech Credentials</div>
										<div className="text-sm text-slate-600">
											500+ installations • 5.0 star rating • SpaceX Certified
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Stats/Credentials */}
						<div className="relative">
							<div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-transparent to-signal-green/10 rounded-3xl blur-xl" />
							<div className="relative grid grid-cols-2 gap-4">
								{[
									{ value: "500+", label: "Installations", sublabel: "And counting" },
									{ value: "5.0", label: "Star Rating", sublabel: "Perfect score" },
									{ value: "50", label: "States", sublabel: "Nationwide coverage" },
									{ value: "2020", label: "Founded", sublabel: "Years of expertise" },
								].map((stat) => (
									<div
										key={stat.label}
										className="bg-white rounded-2xl border border-slate-200 p-6 shadow-md hover:shadow-lg transition-shadow"
									>
										<div className="text-3xl sm:text-4xl font-bold text-cyan-600 mb-1">
											{stat.value}
										</div>
										<div className="text-space-800 font-medium">{stat.label}</div>
										<div className="text-sm text-slate-500">{stat.sublabel}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Timeline */}
			<section className="section-padding bg-slate-50">
				<div className="section-container">
					<div className="text-center mb-12">
						<span className="badge badge-cyan mb-4">Our Journey</span>
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800">
							Key Milestones
						</h2>
					</div>

					<div className="max-w-3xl mx-auto">
						<div className="relative">
							{/* Timeline line */}
							<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300" />

							<div className="space-y-8">
								{milestones.map((milestone, index) => (
									<div key={milestone.year} className="relative flex gap-6">
										{/* Year badge */}
										<div className="w-16 flex-shrink-0">
											<div
												className={`w-16 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
													index === milestones.length - 1
														? "bg-cyan-500 text-white"
														: "bg-white border border-slate-300 text-space-800"
												}`}
											>
												{milestone.year}
											</div>
										</div>

										{/* Content */}
										<div className="flex-1 pb-8">
											<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
												<h3 className="font-semibold text-space-800 mb-2">
													{milestone.title}
												</h3>
												<p className="text-slate-600 text-sm">{milestone.description}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values */}
			<section className="section-padding bg-white">
				<div className="section-container">
					<div className="text-center mb-12">
						<span className="badge badge-green mb-4">What We Stand For</span>
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
							Our Core Values
						</h2>
						<p className="text-lg text-slate-600 max-w-2xl mx-auto">
							Every decision we make is guided by these principles.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
						{values.map((value) => (
							<div key={value.title} className="card group">
								<div className="w-14 h-14 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
									{value.icon}
								</div>
								<h3 className="text-lg font-semibold text-space-800 mb-2">{value.title}</h3>
								<p className="text-slate-600 text-sm">{value.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Mission Statement */}
			<section className="section-padding bg-slate-50">
				<div className="section-container">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-6">Our Mission</h2>
						<blockquote className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-8">
							"To make satellite internet accessible to every American by providing
							professional installation that guarantees optimal performance—turning the promise
							of LEO satellite technology into reality for homes and businesses nationwide."
						</blockquote>
						<div className="text-cyan-700 font-semibold">— Eric Enk, Founder</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="section-padding bg-slate-50">
				<div className="section-container">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
							Ready to Get Connected?
						</h2>
						<p className="text-lg text-slate-600 mb-8">
							Join thousands of customers who trust InstallLEO for professional satellite
							installation.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/assessment" className="btn-primary">
								Get Free Assessment
							</Link>
							<Link href="/contact" className="btn-secondary">
								Contact Us
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "What is LEO Satellite Internet? Complete Beginner's Guide (2025)",
	description:
		"Learn how Low Earth Orbit (LEO) satellite internet works, why it's faster than traditional satellite, and whether services like Starlink and Kuiper are right for you.",
	keywords: [
		"leo satellite internet",
		"what is leo satellite",
		"low earth orbit internet",
		"how starlink works",
		"satellite internet explained",
	],
	openGraph: {
		title: "What is LEO Satellite Internet? | InstallLEO",
		description:
			"Everything you need to know about Low Earth Orbit satellite internet and why it's revolutionizing rural connectivity.",
	},
};

const keyFacts = [
	{ label: "Orbit Altitude", value: "340-550 km", icon: "🛰️" },
	{ label: "Typical Latency", value: "20-50 ms", icon: "⚡" },
	{ label: "Download Speeds", value: "50-400 Mbps", icon: "📶" },
	{ label: "vs Traditional", value: "20x closer", icon: "🎯" },
];

const toc = [
	{ id: "what-is-leo", label: "What is LEO Satellite Internet?" },
	{ id: "how-it-works", label: "How Does it Work?" },
	{ id: "leo-vs-geo", label: "LEO vs Traditional Satellite" },
	{ id: "benefits", label: "Key Benefits" },
	{ id: "providers", label: "Current Providers" },
	{ id: "installation", label: "Installation Requirements" },
	{ id: "faq", label: "Frequently Asked Questions" },
];

const leoVsGeo = [
	{
		feature: "Orbit Altitude",
		leo: "340-2,000 km",
		geo: "35,786 km",
		advantage: "leo",
	},
	{
		feature: "Latency",
		leo: "20-50 ms",
		geo: "600-800 ms",
		advantage: "leo",
	},
	{
		feature: "Download Speed",
		leo: "50-400 Mbps",
		geo: "25-100 Mbps",
		advantage: "leo",
	},
	{
		feature: "Gaming/Video Calls",
		leo: "Excellent",
		geo: "Poor",
		advantage: "leo",
	},
	{
		feature: "Coverage per Satellite",
		leo: "Smaller area",
		geo: "1/3 of Earth",
		advantage: "geo",
	},
	{
		feature: "Number of Satellites Needed",
		leo: "Thousands",
		geo: "3-5",
		advantage: "geo",
	},
	{
		feature: "Maturity",
		leo: "Emerging",
		geo: "Established",
		advantage: "geo",
	},
];

export default function WhatIsLEOPage() {
	return (
		<>
			{/* Hero */}
			<section className="hero-section pt-32 pb-16 lg:pt-40 lg:pb-24">
				<div className="section-container relative z-10">
					<div className="max-w-4xl mx-auto">
						<Link
							href="/learn"
							className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-600 text-sm mb-6"
						>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
							Back to Learning Center
						</Link>

						<div className="flex flex-wrap gap-2 mb-4">
							<span className="badge badge-cyan">Beginner Guide</span>
							<span className="text-slate-400 text-sm">10 min read</span>
						</div>

						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-space-900 mb-6">
							What is LEO
							<br />
							<span className="text-gradient">Satellite Internet?</span>
						</h1>

						<p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl">
							Low Earth Orbit satellite internet is revolutionizing connectivity for millions in
							rural and underserved areas. Here's everything you need to know.
						</p>

						{/* Key Facts */}
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
							{keyFacts.map((fact) => (
								<div key={fact.label} className="stat-card text-center">
									<span className="text-2xl mb-2">{fact.icon}</span>
									<div className="text-xl font-bold text-space-800">{fact.value}</div>
									<div className="text-xs text-slate-600">{fact.label}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Article Content */}
			<article className="section-padding bg-white">
				<div className="section-container">
					<div className="grid lg:grid-cols-[280px_1fr] gap-12 max-w-6xl mx-auto">
						{/* Table of Contents - Sticky Sidebar */}
						<aside className="hidden lg:block">
							<div className="sticky top-24">
								<h4 className="font-semibold text-space-800 mb-4">In This Article</h4>
								<nav className="space-y-2">
									{toc.map((item) => (
										<a
											key={item.id}
											href={`#${item.id}`}
											className="block text-sm text-slate-600 hover:text-cyan-600 py-1 border-l-2 border-slate-200 hover:border-cyan-500 pl-3 transition-colors"
										>
											{item.label}
										</a>
									))}
								</nav>

								<div className="mt-8 p-4 bg-cyan-50 rounded-xl border border-cyan-100">
									<h4 className="font-semibold text-space-800 mb-2">Need Help?</h4>
									<p className="text-sm text-slate-600 mb-3">
										Our experts can answer your LEO satellite questions.
									</p>
									<Link href="/contact" className="btn-primary text-sm w-full text-center">
										Ask a Question
									</Link>
								</div>
							</div>
						</aside>

						{/* Main Content */}
						<div className="prose prose-lg max-w-none">
							{/* What is LEO */}
							<section id="what-is-leo" className="scroll-mt-24 mb-12">
								<h2 className="text-2xl sm:text-3xl font-bold text-space-800 mb-4">
									What is LEO Satellite Internet?
								</h2>
								<p className="text-slate-600 leading-relaxed mb-4">
									<strong>Low Earth Orbit (LEO) satellite internet</strong> is a new generation of
									satellite-based connectivity that uses constellations of thousands of small
									satellites orbiting much closer to Earth than traditional satellites.
								</p>
								<p className="text-slate-600 leading-relaxed mb-4">
									While traditional geostationary satellites orbit at 35,786 km above Earth, LEO
									satellites operate at just 340-2,000 km altitude. This dramatic difference in
									distance fundamentally changes the user experience — making satellite internet
									fast enough for video calls, gaming, and modern applications for the first time.
								</p>
								<div className="bg-cyan-50 border border-cyan-100 rounded-xl p-6 my-6">
									<h4 className="font-semibold text-space-800 mb-2">💡 Key Insight</h4>
									<p className="text-slate-600 text-base mb-0">
										LEO satellites are ~100x closer to Earth than traditional satellites. Since
										signals travel at the speed of light, this means your data reaches the satellite
										and returns in milliseconds rather than half a second.
									</p>
								</div>
							</section>

							{/* How It Works */}
							<section id="how-it-works" className="scroll-mt-24 mb-12">
								<h2 className="text-2xl sm:text-3xl font-bold text-space-800 mb-4">
									How Does LEO Satellite Internet Work?
								</h2>
								<p className="text-slate-600 leading-relaxed mb-6">
									LEO satellite internet works through a carefully orchestrated system of ground
									equipment, satellites, and ground stations:
								</p>

								<div className="space-y-4 mb-6">
									<div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
										<div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
											1
										</div>
										<div>
											<h4 className="font-semibold text-space-800">Your Dish Sends a Signal</h4>
											<p className="text-slate-600 text-base mb-0">
												A phased-array antenna (the "dish") at your home transmits your data request
												to passing satellites overhead.
											</p>
										</div>
									</div>
									<div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
										<div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
											2
										</div>
										<div>
											<h4 className="font-semibold text-space-800">
												Satellites Relay the Signal
											</h4>
											<p className="text-slate-600 text-base mb-0">
												The satellite receives your signal and beams it to a ground station, or
												relays it through other satellites using laser inter-links.
											</p>
										</div>
									</div>
									<div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
										<div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
											3
										</div>
										<div>
											<h4 className="font-semibold text-space-800">Ground Station Connects</h4>
											<p className="text-slate-600 text-base mb-0">
												Ground stations connect the satellite network to the terrestrial internet
												backbone, routing your request to its destination.
											</p>
										</div>
									</div>
									<div className="flex gap-4 p-4 bg-slate-50 rounded-xl">
										<div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
											4
										</div>
										<div>
											<h4 className="font-semibold text-space-800">Data Returns to You</h4>
											<p className="text-slate-600 text-base mb-0">
												The response travels back through the same system — all in just
												20-50 milliseconds.
											</p>
										</div>
									</div>
								</div>
							</section>

							{/* LEO vs GEO */}
							<section id="leo-vs-geo" className="scroll-mt-24 mb-12">
								<h2 className="text-2xl sm:text-3xl font-bold text-space-800 mb-4">
									LEO vs Traditional Satellite: Key Differences
								</h2>
								<p className="text-slate-600 leading-relaxed mb-6">
									Understanding the difference between LEO and traditional geostationary (GEO)
									satellite internet helps explain why services like Starlink and Kuiper are
									game-changers.
								</p>

								<div className="overflow-x-auto -mx-4 px-4">
									<table className="w-full border-collapse">
										<thead>
											<tr className="bg-slate-50 text-slate-700 border-b border-slate-200">
												<th className="py-3 px-4 text-left font-medium rounded-tl-lg">Feature</th>
												<th className="py-3 px-4 text-left font-medium">LEO Satellite</th>
												<th className="py-3 px-4 text-left font-medium rounded-tr-lg">
													Traditional (GEO)
												</th>
											</tr>
										</thead>
										<tbody>
											{leoVsGeo.map((row, i) => (
												<tr
													key={row.feature}
													className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}
												>
													<td className="py-3 px-4 font-medium text-space-800">{row.feature}</td>
													<td
														className={`py-3 px-4 ${row.advantage === "leo" ? "text-signal-green font-medium" : "text-slate-600"}`}
													>
														{row.leo}
													</td>
													<td
														className={`py-3 px-4 ${row.advantage === "geo" ? "text-signal-green font-medium" : "text-slate-600"}`}
													>
														{row.geo}
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</section>

							{/* Benefits */}
							<section id="benefits" className="scroll-mt-24 mb-12">
								<h2 className="text-2xl sm:text-3xl font-bold text-space-800 mb-4">
									Key Benefits of LEO Satellite Internet
								</h2>

								<div className="grid sm:grid-cols-2 gap-4">
									<div className="card border border-slate-200">
										<div className="text-2xl mb-2">⚡</div>
										<h4 className="font-semibold text-space-800 mb-2">Low Latency</h4>
										<p className="text-slate-600 text-sm mb-0">
											20-50ms latency enables video calls, gaming, and VoIP — impossible with
											traditional satellite.
										</p>
									</div>
									<div className="card border border-slate-200">
										<div className="text-2xl mb-2">🚀</div>
										<h4 className="font-semibold text-space-800 mb-2">Fast Speeds</h4>
										<p className="text-slate-600 text-sm mb-0">
											Download speeds of 50-400 Mbps rival or exceed many terrestrial options.
										</p>
									</div>
									<div className="card border border-slate-200">
										<div className="text-2xl mb-2">🌍</div>
										<h4 className="font-semibold text-space-800 mb-2">Global Coverage</h4>
										<p className="text-slate-600 text-sm mb-0">
											Service available anywhere with a clear view of the sky — no infrastructure
											required.
										</p>
									</div>
									<div className="card border border-slate-200">
										<div className="text-2xl mb-2">📈</div>
										<h4 className="font-semibold text-space-800 mb-2">Constantly Improving</h4>
										<p className="text-slate-600 text-sm mb-0">
											As more satellites launch, coverage and speeds continue to improve over time.
										</p>
									</div>
								</div>
							</section>

							{/* Providers */}
							<section id="providers" className="scroll-mt-24 mb-12">
								<h2 className="text-2xl sm:text-3xl font-bold text-space-800 mb-4">
									Current LEO Satellite Providers
								</h2>

								<div className="space-y-4">
									<div className="card border border-slate-200">
										<div className="flex items-start gap-4">
											<div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center text-space-800 font-bold">
												S
											</div>
											<div className="flex-1">
												<h4 className="font-semibold text-space-800">Starlink (SpaceX)</h4>
												<p className="text-slate-600 text-sm mb-2">
													The current market leader with 5,000+ satellites and service in 70+
													countries. Available now in most of the US.
												</p>
												<Link
													href="/compare/kuiper-vs-starlink"
													className="text-cyan-600 hover:text-cyan-700 text-sm font-medium"
												>
													Compare Starlink →
												</Link>
											</div>
										</div>
									</div>
									<div className="card border border-cyan-200 bg-cyan-50/50">
										<div className="flex items-start gap-4">
											<div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center text-white font-bold">
												K
											</div>
											<div className="flex-1">
												<div className="flex items-center gap-2 mb-1">
													<h4 className="font-semibold text-space-800">
														Project Kuiper (Amazon)
													</h4>
													<span className="badge badge-amber text-xs">Coming 2025</span>
												</div>
												<p className="text-slate-600 text-sm mb-2">
													Amazon's upcoming constellation of 3,236 satellites promises competitive
													speeds and pricing, with potential Prime member benefits.
												</p>
												<Link
													href="/compare/kuiper-vs-starlink"
													className="text-cyan-600 hover:text-cyan-700 text-sm font-medium"
												>
													Kuiper vs Starlink →
												</Link>
											</div>
										</div>
									</div>
									<div className="card border border-slate-200">
										<div className="flex items-start gap-4">
											<div className="w-12 h-12 rounded-xl bg-slate-400 flex items-center justify-center text-white font-bold">
												O
											</div>
											<div className="flex-1">
												<h4 className="font-semibold text-space-800">OneWeb</h4>
												<p className="text-slate-600 text-sm mb-0">
													Focused primarily on enterprise, maritime, and aviation markets rather
													than residential service.
												</p>
											</div>
										</div>
									</div>
								</div>
							</section>

							{/* Installation */}
							<section id="installation" className="scroll-mt-24 mb-12">
								<h2 className="text-2xl sm:text-3xl font-bold text-space-800 mb-4">
									Installation Requirements
								</h2>
								<p className="text-slate-600 leading-relaxed mb-6">
									LEO satellite internet requires specific conditions for optimal performance:
								</p>

								<ul className="space-y-3 mb-6">
									<li className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-signal-green flex-shrink-0 mt-0.5"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="text-slate-600">
											<strong>Clear sky view:</strong> The dish needs an unobstructed view of the
											northern sky (in the US) with minimal trees or buildings blocking the signal.
										</span>
									</li>
									<li className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-signal-green flex-shrink-0 mt-0.5"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="text-slate-600">
											<strong>Mounting location:</strong> Roof mount, pole mount, or ground mount
											options depending on your property.
										</span>
									</li>
									<li className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-signal-green flex-shrink-0 mt-0.5"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="text-slate-600">
											<strong>Power source:</strong> Standard 120V outlet within cable reach of the
											dish (typically 75-150ft cable included).
										</span>
									</li>
									<li className="flex items-start gap-3">
										<svg
											className="w-5 h-5 text-signal-green flex-shrink-0 mt-0.5"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="text-slate-600">
											<strong>Professional installation recommended:</strong> Proper mounting,
											weatherproofing, and cable routing ensures reliable long-term performance.
										</span>
									</li>
								</ul>

											<div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
												<h4 className="font-semibold text-space-800 mb-2">Ready to Install?</h4>
												<p className="text-slate-600 text-sm mb-4">
										InstallLEO provides professional installation for both Starlink (available now)
										and Project Kuiper (when available). We handle site assessment, optimal
										positioning, mounting, and setup.
									</p>
									<Link href="/services/residential-installation" className="btn-primary">
										Get Installation Quote
									</Link>
								</div>
							</section>

							{/* FAQ */}
							<section id="faq" className="scroll-mt-24">
								<h2 className="text-2xl sm:text-3xl font-bold text-space-800 mb-6">
									Frequently Asked Questions
								</h2>

								<div className="space-y-4">
									<details className="group card border border-slate-200">
										<summary className="cursor-pointer list-none flex items-center justify-between">
											<span className="font-semibold text-space-800">
												Is LEO satellite internet good for gaming?
											</span>
											<svg
												className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"
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
										<p className="text-slate-600 mt-3 pt-3 border-t border-slate-100">
											Yes! With 20-50ms latency, LEO satellite internet is suitable for online
											gaming — a major improvement over traditional satellite's 600+ms latency.
											While not quite as fast as fiber, most online games are very playable.
										</p>
									</details>
									<details className="group card border border-slate-200">
										<summary className="cursor-pointer list-none flex items-center justify-between">
											<span className="font-semibold text-space-800">
												Can I use LEO satellite for video calls?
											</span>
											<svg
												className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"
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
										<p className="text-slate-600 mt-3 pt-3 border-t border-slate-100">
											Absolutely. LEO satellite's low latency makes video conferencing on Zoom,
											Teams, Google Meet, and other platforms work smoothly. This is one of the
											biggest improvements over traditional satellite internet.
										</p>
									</details>
									<details className="group card border border-slate-200">
										<summary className="cursor-pointer list-none flex items-center justify-between">
											<span className="font-semibold text-space-800">
												Does weather affect LEO satellite internet?
											</span>
											<svg
												className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"
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
										<p className="text-slate-600 mt-3 pt-3 border-t border-slate-100">
											Heavy rain or snow can temporarily affect signal quality, but impacts are
											generally less severe and shorter than with traditional satellite due to
											signals traveling through less atmosphere. Light weather has minimal impact.
										</p>
									</details>
									<details className="group card border border-slate-200">
										<summary className="cursor-pointer list-none flex items-center justify-between">
											<span className="font-semibold text-space-800">
												How much does LEO satellite internet cost?
											</span>
											<svg
												className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"
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
										<p className="text-slate-600 mt-3 pt-3 border-t border-slate-100">
											Starlink currently costs $120/month for residential service with a $499
											equipment fee. Project Kuiper is expected to offer competitive or lower
											pricing when it launches. Professional installation is an additional
											one-time cost.
										</p>
									</details>
								</div>
							</section>
						</div>
					</div>
				</div>
			</article>

			{/* Related Articles */}
			<section className="section-padding bg-slate-50 border-t border-slate-100">
				<div className="section-container">
					<h2 className="text-2xl font-bold text-space-800 mb-8 text-center">
						Continue Learning
					</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
						<Link href="/compare/kuiper-vs-starlink" className="card-elevated group">
							<span className="badge badge-amber text-xs mb-3">Comparison</span>
							<h3 className="font-semibold text-space-800 group-hover:text-cyan-600 transition-colors mb-2">
								Kuiper vs Starlink
							</h3>
							<p className="text-sm text-slate-600">
								Complete comparison to help you choose the right service.
							</p>
						</Link>
						<Link href="/learn/installation-guide" className="card-elevated group">
							<span className="badge badge-cyan text-xs mb-3">Guide</span>
							<h3 className="font-semibold text-space-800 group-hover:text-cyan-600 transition-colors mb-2">
								Installation Guide
							</h3>
							<p className="text-sm text-slate-600">
								What to expect during professional LEO satellite installation.
							</p>
						</Link>
						<Link href="/learn/starlink-speeds" className="card-elevated group">
							<span className="badge badge-cyan text-xs mb-3">Deep Dive</span>
							<h3 className="font-semibold text-space-800 group-hover:text-cyan-600 transition-colors mb-2">
								Understanding Starlink Speeds
							</h3>
							<p className="text-sm text-slate-600">
								Realistic speed expectations and how to optimize performance.
							</p>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

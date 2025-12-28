import Link from "next/link";

const comparisonData = [
	{ feature: "Download Speed", kuiper: "Up to 400 Mbps", starlink: "Up to 220 Mbps", winner: "kuiper" },
	{ feature: "Latency", kuiper: "~30ms (projected)", starlink: "25-50ms", winner: "tie" },
	{ feature: "Monthly Cost", kuiper: "$99-140 (projected)", starlink: "$120-500", winner: "kuiper" },
	{ feature: "Equipment Cost", kuiper: "TBD (likely subsidized)", starlink: "$499-2,500", winner: "pending" },
	{ feature: "Availability", kuiper: "Coming 2025", starlink: "Available Now", winner: "starlink" },
];

export function ComparisonPreview() {
	return (
		<section className="section-padding bg-white">
			<div className="section-container">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Content side */}
					<div>
						<span className="badge badge-amber mb-4">Compare Options</span>
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
							Kuiper vs Starlink:
							<br />
							<span className="text-gradient">Which is Right for You?</span>
						</h2>
						<p className="text-lg text-slate-600 mb-6">
							Amazon's Project Kuiper is entering the LEO satellite market with aggressive pricing
							and performance promises. We break down the key differences to help you decide — or
							prepare for both.
						</p>

						{/* Key differentiators */}
						<div className="space-y-4 mb-8">
							<div className="flex items-start gap-3">
								<div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
									<svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<div>
									<div className="font-medium text-space-800">Amazon's Retail Advantage</div>
									<div className="text-sm text-slate-600">
										Prime integration, potential equipment subsidies, and Amazon's customer service
										infrastructure
									</div>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
									<svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<div>
									<div className="font-medium text-space-800">Starlink's First-Mover Lead</div>
									<div className="text-sm text-slate-600">
										Operational network, proven technology, and millions of active subscribers
									</div>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<div className="w-6 h-6 rounded-full bg-signal-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
									<svg className="w-4 h-4 text-signal-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<div>
									<div className="font-medium text-space-800">InstallLEO: Your Expert Partner</div>
									<div className="text-sm text-slate-600">
										We install both systems and recommend the best solution for your specific
										situation
									</div>
								</div>
							</div>
						</div>

						<Link href="/compare/kuiper-vs-starlink" className="btn-primary">
							View Full Comparison
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</Link>
					</div>

					{/* Comparison table preview */}
					<div className="relative">
						{/* Decorative glow */}
						<div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-transparent to-signal-green/10 rounded-3xl blur-xl" />

						<div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
							{/* Table header */}
							<div className="grid grid-cols-3 bg-slate-50 text-slate-700 border-b border-slate-200">
								<div className="px-4 py-3 text-sm font-medium">Feature</div>
								<div className="px-4 py-3 text-sm font-medium text-center border-l border-slate-200">
									<span className="text-cyan-700">Project Kuiper</span>
								</div>
								<div className="px-4 py-3 text-sm font-medium text-center border-l border-slate-200">
									Starlink
								</div>
							</div>

							{/* Table rows */}
							{comparisonData.map((row, index) => (
								<div
									key={row.feature}
									className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`}
								>
									<div className="px-4 py-3 text-sm font-medium text-space-800">{row.feature}</div>
									<div
										className={`px-4 py-3 text-sm text-center border-l border-slate-100 ${
											row.winner === "kuiper" ? "text-cyan-600 font-medium" : "text-slate-600"
										}`}
									>
										{row.kuiper}
										{row.winner === "kuiper" && (
											<svg
												className="w-4 h-4 inline-block ml-1 text-signal-green"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
										)}
									</div>
									<div
										className={`px-4 py-3 text-sm text-center border-l border-slate-100 ${
											row.winner === "starlink" ? "text-cyan-600 font-medium" : "text-slate-600"
										}`}
									>
										{row.starlink}
										{row.winner === "starlink" && (
											<svg
												className="w-4 h-4 inline-block ml-1 text-signal-green"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
										)}
									</div>
								</div>
							))}

							{/* CTA row */}
							<div className="px-4 py-4 bg-slate-50 border-t border-slate-200 text-center">
								<span className="text-sm text-slate-600">
									Not sure which to choose?{" "}
									<Link href="/compare/kuiper-vs-starlink" className="text-cyan-600 font-medium hover:underline">
										Take our quiz →
									</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

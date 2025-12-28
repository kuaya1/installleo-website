import Link from "next/link";

const valueProps = [
	{
		icon: (
			<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/>
			</svg>
		),
		title: "Lightning-Fast LEO Internet",
		description:
			"Low Earth Orbit satellites deliver 150-400+ Mbps speeds with latency as low as 20ms — finally, satellite internet that works like fiber.",
		metric: "400+ Mbps",
		metricLabel: "Download Speeds",
	},
	{
		icon: (
			<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
		title: "Nationwide Coverage",
		description:
			"From rural farmland to remote mountain cabins — LEO satellite reaches where cable, fiber, and cellular cannot. True internet everywhere.",
		metric: "50",
		metricLabel: "States Served",
	},
	{
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
		title: "Professional Installation",
		description:
			"Optimal antenna placement, weatherproof mounting, cable management, and network configuration — done right the first time by certified experts.",
		metric: "4.9★",
		metricLabel: "Average Rating",
	},
	{
		icon: (
			<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
		title: "Same-Week Installation",
		description:
			"Don't wait months for connectivity. Our nationwide installer network means fast scheduling and professional service when you need it.",
		metric: "3-5",
		metricLabel: "Day Average",
	},
];

export function ValueProposition() {
	return (
		<section className="section-padding bg-slate-50">
			<div className="section-container">
				{/* Section header */}
				<div className="text-center mb-16">
					<span className="badge badge-cyan mb-4">Why InstallLEO</span>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-space-800 mb-4">
						The LEO Satellite Revolution
						<br />
						<span className="text-gradient">Requires Expert Installation</span>
					</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						Project Kuiper and Starlink are transforming connectivity — but getting the best
						performance requires professional installation from certified experts.
					</p>
				</div>

				{/* Value prop grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{valueProps.map((prop) => (
						<div key={prop.title} className="card group">
							{/* Icon */}
							<div className="w-14 h-14 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
								{prop.icon}
							</div>

							{/* Content */}
							<h3 className="text-lg font-semibold text-space-800 mb-2">{prop.title}</h3>
							<p className="text-sm text-slate-600 mb-4">{prop.description}</p>

							{/* Metric */}
							<div className="pt-4 border-t border-slate-100">
								<div className="text-2xl font-bold text-cyan-600">{prop.metric}</div>
								<div className="text-xs text-slate-500">{prop.metricLabel}</div>
							</div>
						</div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-12">
					<Link href="/learn/what-is-leo-satellite-internet" className="btn-secondary">
						Learn About LEO Satellite Technology
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
}

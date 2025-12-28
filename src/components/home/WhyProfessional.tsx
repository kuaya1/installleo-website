import Link from "next/link";

const reasons = [
	{
		title: "Optimal Antenna Placement",
		description:
			"LEO satellites require clear sky visibility. Professionals use specialized tools to find the perfect mounting location for maximum signal strength and reliability.",
		diyRisk: "Poor placement = intermittent connectivity, buffering, dropped calls",
		proAdvantage: "Signal strength testing, obstruction analysis, future-proof positioning",
		icon: (
			<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				/>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
		),
	},
	{
		title: "Weatherproof Installation",
		description:
			"Satellite equipment lives outdoors year-round. Professional installation ensures your system withstands rain, snow, wind, and temperature extremes.",
		diyRisk: "Water intrusion, cable degradation, mount failure in high winds",
		proAdvantage: "Commercial-grade sealing, proper cable management, secure mounting",
		icon: (
			<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
				/>
			</svg>
		),
	},
	{
		title: "Roof & Structure Safety",
		description:
			"Mounting a satellite dish involves roof penetration and structural considerations. Improper installation can void warranties and cause costly damage.",
		diyRisk: "Roof leaks, structural damage, voided home warranties",
		proAdvantage: "Proper flashing, load distribution, warranty-compliant methods",
		icon: (
			<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
				/>
			</svg>
		),
	},
	{
		title: "Network Configuration",
		description:
			"Getting connected is just the first step. Optimizing your home network for satellite internet requires specific configuration for best performance.",
		diyRisk: "Suboptimal speeds, gaming lag, video call issues",
		proAdvantage: "QoS setup, mesh optimization, device prioritization",
		icon: (
			<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
				/>
			</svg>
		),
	},
];

export function WhyProfessional() {
	return (
		<section className="section-padding bg-white">
			<div className="section-container">
				{/* Section header */}
				<div className="text-center mb-16">
					<span className="badge badge-amber mb-4">DIY vs Professional</span>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-space-800 mb-4">
						Why Professional Installation
						<br />
						<span className="text-gradient">Makes the Difference</span>
					</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						Sure, you <em>can</em> install it yourself. But here's why our customers choose
						professional installation — and why they're glad they did.
					</p>
				</div>

				{/* Reasons grid */}
				<div className="grid md:grid-cols-2 gap-6 mb-12">
					{reasons.map((reason) => (
						<div key={reason.title} className="card-elevated group">
							<div className="flex items-start gap-4">
								{/* Icon */}
								<div className="w-14 h-14 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
									{reason.icon}
								</div>

								{/* Content */}
								<div className="flex-1">
									<h3 className="text-lg font-semibold text-space-800 mb-2">{reason.title}</h3>
									<p className="text-sm text-slate-600 mb-4">{reason.description}</p>

									{/* Risk vs Advantage */}
									<div className="space-y-2">
										<div className="flex items-start gap-2 text-sm">
											<svg
												className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
													clipRule="evenodd"
												/>
											</svg>
											<span className="text-slate-500">
												<strong className="text-slate-700">DIY Risk:</strong> {reason.diyRisk}
											</span>
										</div>
										<div className="flex items-start gap-2 text-sm">
											<svg
												className="w-4 h-4 text-signal-green flex-shrink-0 mt-0.5"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
											<span className="text-slate-500">
												<strong className="text-slate-700">Pro Advantage:</strong>{" "}
												{reason.proAdvantage}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Comparison summary */}
				<div className="bg-gradient-to-r from-space-800 to-space-700 rounded-2xl p-8 text-white">
					<div className="grid md:grid-cols-3 gap-8 items-center">
						{/* DIY column */}
						<div className="text-center md:text-left">
							<h4 className="text-lg font-semibold mb-3 text-slate-300">DIY Installation</h4>
							<ul className="space-y-2 text-sm text-slate-400">
								<li className="flex items-center gap-2 justify-center md:justify-start">
									<span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
									2-4 hours of your time
								</li>
								<li className="flex items-center gap-2 justify-center md:justify-start">
									<span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
									Risk of suboptimal placement
								</li>
								<li className="flex items-center gap-2 justify-center md:justify-start">
									<span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
									No warranty on installation
								</li>
								<li className="flex items-center gap-2 justify-center md:justify-start">
									<span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
									You handle troubleshooting
								</li>
							</ul>
						</div>

						{/* VS divider */}
						<div className="flex items-center justify-center">
							<div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
								<span className="text-lg font-bold text-cyan-400">VS</span>
							</div>
						</div>

						{/* Pro column */}
						<div className="text-center md:text-right">
							<h4 className="text-lg font-semibold mb-3 text-white">Professional Installation</h4>
							<ul className="space-y-2 text-sm text-slate-300">
								<li className="flex items-center gap-2 justify-center md:justify-end">
									Done in 1-2 hours
									<span className="w-1.5 h-1.5 bg-signal-green rounded-full" />
								</li>
								<li className="flex items-center gap-2 justify-center md:justify-end">
									Optimal signal guaranteed
									<span className="w-1.5 h-1.5 bg-signal-green rounded-full" />
								</li>
								<li className="flex items-center gap-2 justify-center md:justify-end">
									Installation warranty included
									<span className="w-1.5 h-1.5 bg-signal-green rounded-full" />
								</li>
								<li className="flex items-center gap-2 justify-center md:justify-end">
									Expert support when needed
									<span className="w-1.5 h-1.5 bg-signal-green rounded-full" />
								</li>
							</ul>
						</div>
					</div>

					{/* CTA */}
					<div className="text-center mt-8 pt-8 border-t border-space-600">
						<Link href="/learn/professional-vs-diy-installation" className="btn-primary">
							Read the Full Comparison
							<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

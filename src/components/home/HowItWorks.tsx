const steps = [
	{
		number: "01",
		title: "Check Availability",
		description:
			"Enter your address to check service availability and get personalized recommendations for your location.",
		icon: (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		),
	},
	{
		number: "02",
		title: "Site Assessment",
		description:
			"Our experts evaluate your property for optimal antenna placement, considering sky visibility, roof type, and cable routing.",
		icon: (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
				/>
			</svg>
		),
	},
	{
		number: "03",
		title: "Professional Installation",
		description:
			"Certified installers mount your dish, run weatherproof cabling, configure your network, and verify optimal performance.",
		icon: (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
				/>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
		),
	},
	{
		number: "04",
		title: "Ongoing Support",
		description:
			"Enjoy reliable connectivity with our satisfaction guarantee. Need help? Our support team is just a call away.",
		icon: (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
				/>
			</svg>
		),
	},
];

export function HowItWorks() {
	return (
		<section className="section-padding bg-space-800 text-white relative overflow-hidden">
			{/* Background pattern */}
			<div className="absolute inset-0 opacity-5">
				<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
					<defs>
						<pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
							<path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
						</pattern>
					</defs>
					<rect width="100" height="100" fill="url(#grid)" />
				</svg>
			</div>

			<div className="section-container relative z-10">
				{/* Section header */}
				<div className="text-center mb-16">
					<span className="badge badge-cyan mb-4">Our Process</span>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
						How Professional
						<br />
						<span className="text-gradient">Installation Works</span>
					</h2>
					<p className="text-lg text-slate-300 max-w-2xl mx-auto">
						From initial assessment to final configuration, we handle every detail of your satellite
						internet installation.
					</p>
				</div>

				{/* Steps */}
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
					{steps.map((step, index) => (
						<div key={step.number} className="relative">
							{/* Connector line (hidden on mobile, hidden after last item) */}
							{index < steps.length - 1 && (
								<div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent z-0" />
							)}

							<div className="stat-card relative z-10 h-full">
								{/* Step number */}
								<div className="flex items-center justify-between mb-4">
									<span className="text-4xl font-bold text-cyan-500/30">{step.number}</span>
									<div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
										{step.icon}
									</div>
								</div>

								{/* Content */}
								<h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
								<p className="text-sm text-slate-400">{step.description}</p>
							</div>
						</div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-12">
					<a href="/services/installation-process" className="btn-primary">
						Learn More About Our Process
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}

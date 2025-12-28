import Link from "next/link";

export function FinalCTA() {
	return (
		<section className="section-padding bg-slate-50">
			<div className="section-container">
				<div className="relative rounded-3xl overflow-hidden">
					{/* Background gradient */}
					<div className="absolute inset-0 bg-gradient-to-br from-space-800 via-space-700 to-space-800" />

					{/* Decorative elements */}
					<div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-signal-green/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

					{/* Content */}
					<div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
							Ready to Transform
							<br />
							<span className="text-gradient">Your Connectivity?</span>
						</h2>
						<p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
							Whether you're waiting for Project Kuiper, ready for Starlink now, or just exploring
							options — we're here to help you get connected with professional installation done
							right.
						</p>

						{/* CTA buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
							<Link href="/quote" className="btn-primary text-lg py-4 px-8">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
								Get a Free Quote
							</Link>
							<Link href="/compare/kuiper-vs-starlink" className="btn-ghost text-lg py-4 px-8 border-white/30 text-white hover:bg-white/10">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
									/>
								</svg>
								Compare Options
							</Link>
						</div>

						{/* Contact options */}
						<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
							<div className="flex items-center gap-2">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<span>Call: (888) LEO-INSTALL</span>
							</div>
							<span className="hidden sm:inline text-slate-600">|</span>
							<div className="flex items-center gap-2">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<span>Email: hello@installleo.com</span>
							</div>
						</div>

						{/* Trust badges */}
						<div className="flex flex-wrap justify-center gap-4 mt-10 pt-10 border-t border-space-600">
							<div className="flex items-center gap-2 text-sm text-slate-400">
								<svg className="w-4 h-4 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span>500+ Installations</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-slate-400">
								<svg className="w-4 h-4 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span>All 50 States</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-slate-400">
								<svg className="w-4 h-4 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span>SpaceX Certified</span>
							</div>
							<div className="flex items-center gap-2 text-sm text-slate-400">
								<svg className="w-4 h-4 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<span>Satisfaction Guaranteed</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function TrustBar() {
	return (
		<section className="bg-white border-y border-slate-100">
			<div className="section-container py-6">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					{/* Credential badges */}
					<div className="flex flex-wrap items-center justify-center gap-6">
						{/* SpaceX Certified */}
						<div className="flex items-center gap-3">
							<div className="certification-seal w-12 h-12">
								<svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<div>
								<div className="text-sm font-semibold text-space-800">SpaceX Certified</div>
								<div className="text-xs text-slate-500">Authorized Installer</div>
							</div>
						</div>

						{/* Installation Count */}
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-full bg-signal-green/10 border border-signal-green/30 flex items-center justify-center">
								<svg className="w-6 h-6 text-signal-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<div>
								<div className="text-sm font-semibold text-space-800">500+ Installations</div>
								<div className="text-xs text-slate-500">Proven Track Record</div>
							</div>
						</div>

						{/* Insurance Badge */}
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-full bg-space-800/5 border border-space-800/10 flex items-center justify-center">
								<svg className="w-6 h-6 text-space-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<div>
								<div className="text-sm font-semibold text-space-800">Fully Insured</div>
								<div className="text-xs text-slate-500">Licensed & Bonded</div>
							</div>
						</div>
					</div>

					{/* Origin story teaser */}
					<div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
						<div className="text-xs text-slate-500">
							From the experts behind{" "}
							<span className="font-semibold text-space-800">The Orbit Tech</span> — Northern
							Virginia's premier satellite installation service
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

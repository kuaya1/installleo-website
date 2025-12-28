"use client";

import Link from "next/link";
import { useState } from "react";

const featuredStates = [
	{ name: "Texas", abbr: "TX", count: "50+", available: true },
	{ name: "California", abbr: "CA", count: "40+", available: true },
	{ name: "Florida", abbr: "FL", count: "35+", available: true },
	{ name: "Virginia", abbr: "VA", count: "30+", available: true },
	{ name: "Colorado", abbr: "CO", count: "25+", available: true },
	{ name: "Arizona", abbr: "AZ", count: "20+", available: true },
	{ name: "Montana", abbr: "MT", count: "15+", available: true },
	{ name: "Oregon", abbr: "OR", count: "15+", available: true },
];

export function ServiceAreas() {
	const [zipCode, setZipCode] = useState("");

	return (
		<section className="section-padding bg-slate-50">
			<div className="section-container">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Map visualization placeholder */}
					<div className="relative">
						{/* Map container */}
						<div className="relative aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
							{/* Simplified US map visual */}
							<div className="absolute inset-0 flex items-center justify-center">
								<svg className="w-full h-full p-8 opacity-20" viewBox="0 0 959 593" fill="none">
									<path
										d="M833 111L830 148L827 154L819 155L815 165L805 179L798 180L797 194L788 204L780 204L778 214L771 227L760 232L750 230L745 243L726 256L723 270L712 277L707 292L694 301L683 300L677 310L666 315L655 313L649 323L636 332L620 333L610 349L592 356L575 357L565 374L549 382L533 381L517 396L500 399L490 416L468 422L454 420L447 432L428 437L410 434L399 447L381 450L366 446L356 459L338 461L322 456L309 469L290 470L274 465L261 478L244 479L227 473L216 485L197 487L184 481L170 494L153 495L139 489L125 502L106 503L93 497L79 510L61 511L47 505L34 518L15 519L2 513"
										stroke="currentColor"
										strokeWidth="2"
										className="text-cyan-500"
									/>
								</svg>
								{/* Coverage dots */}
								{[
									{ x: "20%", y: "50%" },
									{ x: "30%", y: "60%" },
									{ x: "45%", y: "40%" },
									{ x: "55%", y: "55%" },
									{ x: "70%", y: "35%" },
									{ x: "80%", y: "45%" },
									{ x: "25%", y: "70%" },
									{ x: "60%", y: "65%" },
								].map((pos, i) => (
									<div
										key={`dot-${i}`}
										className="absolute w-3 h-3 bg-cyan-500 rounded-full animate-pulse-glow"
										style={{ left: pos.x, top: pos.y, animationDelay: `${i * 0.3}s` }}
									/>
								))}
							</div>

							{/* Overlay stats */}
							<div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-slate-200 p-6">
								<div className="grid grid-cols-3 gap-4 text-center">
									<div>
										<div className="text-2xl font-bold text-cyan-600">50</div>
										<div className="text-xs text-slate-600">States Covered</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-signal-green">500+</div>
										<div className="text-xs text-slate-600">Certified Installers</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-space-800">3-5</div>
										<div className="text-xs text-slate-600">Day Avg. Install</div>
									</div>
								</div>
							</div>
						</div>

						{/* Featured states grid */}
						<div className="grid grid-cols-4 gap-2 mt-4">
							{featuredStates.map((state) => (
								<Link
									key={state.abbr}
									href={`/coverage/states/${state.name.toLowerCase()}`}
									className="p-3 bg-white rounded-lg border border-slate-200 hover:border-cyan-500 hover:shadow-md transition-all text-center group"
								>
									<div className="text-sm font-semibold text-space-800 group-hover:text-cyan-600">
										{state.abbr}
									</div>
									<div className="text-xs text-slate-500">{state.count} installs</div>
								</Link>
							))}
						</div>
					</div>

					{/* Content side */}
					<div>
						<span className="badge badge-green mb-4">Nationwide Coverage</span>
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
							Professional Installation
							<br />
							<span className="text-gradient">Across All 50 States</span>
						</h2>
						<p className="text-lg text-slate-600 mb-6">
							Our growing network of certified satellite installers means professional service is
							available wherever you are. From rural farmland to suburban neighborhoods, we've got
							you covered.
						</p>

						{/* Availability checker */}
						<div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
							<h3 className="font-semibold text-space-800 mb-4">Check Availability in Your Area</h3>
							<div className="flex gap-3">
								<input
									type="text"
									placeholder="Enter ZIP code"
									value={zipCode}
									onChange={(e) => setZipCode(e.target.value)}
									className="input flex-1"
									maxLength={5}
								/>
								<button type="button" className="btn-primary">
									Check
								</button>
							</div>
							<p className="text-xs text-slate-500 mt-2">
								We'll show you service availability and estimated installation timeline.
							</p>
						</div>

						{/* Benefits list */}
						<div className="space-y-3">
							{[
								"Local certified installers in your area",
								"Same-week installation in most locations",
								"Consistent quality standards nationwide",
								"Local support with national backing",
							].map((benefit) => (
								<div key={benefit} className="flex items-center gap-3">
									<svg className="w-5 h-5 text-signal-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="text-slate-700">{benefit}</span>
								</div>
							))}
						</div>

						<Link href="/coverage/availability-map" className="btn-secondary mt-6">
							View Full Coverage Map
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

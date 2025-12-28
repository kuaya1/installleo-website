"use client";

import { useState } from "react";

export function PreLaunchCTA() {
	const [email, setEmail] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [interest, setInterest] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Integrate with email service
		setSubmitted(true);
	};

	return (
		<section className="section-padding bg-gradient-to-br from-space-900 via-space-800 to-space-900 relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-signal-green/10 rounded-full blur-3xl" />
			</div>

			<div className="section-container relative z-10">
				<div className="max-w-4xl mx-auto">
					{/* Content */}
					<div className="text-center mb-10">
						<div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/30">
							<span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
							<span className="text-sm text-cyan-400">Project Kuiper Launching 2025</span>
						</div>

						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
							Be First in Line When
							<br />
							<span className="text-gradient">Kuiper Arrives in Your Area</span>
						</h2>
						<p className="text-lg text-slate-300 max-w-2xl mx-auto">
							Amazon's Project Kuiper is coming. Join 2,400+ early adopters who will be notified
							the moment satellite internet becomes available at their address.
						</p>
					</div>

					{/* Form */}
					{!submitted ? (
						<form onSubmit={handleSubmit} className="lead-capture-card max-w-2xl mx-auto">
							<div className="grid md:grid-cols-2 gap-4 mb-4">
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
										Email Address
									</label>
									<input
										type="email"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="you@example.com"
										className="input"
										required
									/>
								</div>
								<div>
									<label htmlFor="zip" className="block text-sm font-medium text-slate-300 mb-2">
										ZIP Code
									</label>
									<input
										type="text"
										id="zip"
										value={zipCode}
										onChange={(e) => setZipCode(e.target.value)}
										placeholder="Enter ZIP"
										className="input"
										maxLength={5}
										required
									/>
								</div>
							</div>

							<div className="mb-6">
								<label htmlFor="interest" className="block text-sm font-medium text-slate-300 mb-2">
									I'm interested in...
								</label>
								<select
									id="interest"
									value={interest}
									onChange={(e) => setInterest(e.target.value)}
									className="input"
								>
									<option value="">Select your situation</option>
									<option value="kuiper-new">Project Kuiper (New installation)</option>
									<option value="starlink-new">Starlink (New installation)</option>
									<option value="starlink-upgrade">Upgrading existing Starlink</option>
									<option value="comparing">Comparing options</option>
									<option value="business">Business installation</option>
									<option value="rv-marine">RV or Marine installation</option>
								</select>
							</div>

							<button type="submit" className="btn-primary w-full text-lg py-4">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
								Notify Me When Available
							</button>

							<p className="text-xs text-slate-500 text-center mt-4">
								We'll only contact you about availability updates. No spam, unsubscribe anytime.
							</p>
						</form>
					) : (
						<div className="lead-capture-card max-w-2xl mx-auto text-center">
							<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-signal-green/20 flex items-center justify-center">
								<svg className="w-8 h-8 text-signal-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
							<p className="text-slate-300 mb-4">
								We'll notify you as soon as LEO satellite internet becomes available in your area.
							</p>
							<p className="text-sm text-slate-400">
								Check your email for a confirmation and your personalized availability estimate.
							</p>
						</div>
					)}

					{/* Trust indicators */}
					<div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-400">
						<div className="flex items-center gap-2">
							<svg className="w-4 h-4 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd"
								/>
							</svg>
							<span>Your data is secure</span>
						</div>
						<div className="flex items-center gap-2">
							<svg className="w-4 h-4 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
									clipRule="evenodd"
								/>
							</svg>
							<span>2,400+ people waiting</span>
						</div>
						<div className="flex items-center gap-2">
							<svg className="w-4 h-4 text-signal-green" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clipRule="evenodd"
								/>
							</svg>
							<span>No obligation</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

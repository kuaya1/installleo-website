"use client";

import Link from "next/link";
import { useState } from "react";

export function HeroSection() {
	const [email, setEmail] = useState("");

	return (
		<section className="hero-section relative flex items-center justify-center px-4 pt-32 pb-20 lg:pt-40 lg:pb-32">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Orbit lines */}
				<div
					className="orbit-line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					style={{ width: "120%", height: "120%", animationDelay: "0s" }}
				/>
				<div
					className="orbit-line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					style={{ width: "140%", height: "140%", animationDelay: "2s" }}
				/>
				<div
					className="orbit-line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					style={{ width: "160%", height: "160%", animationDelay: "4s" }}
				/>

				{/* Satellite dots */}
				<div className="absolute top-[20%] right-[15%] w-2 h-2 bg-cyan-500 rounded-full animate-pulse-glow" />
				<div
					className="absolute top-[40%] right-[25%] w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse-glow"
					style={{ animationDelay: "1s" }}
				/>
				<div
					className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-signal-green rounded-full animate-pulse-glow"
					style={{ animationDelay: "2s" }}
				/>
			</div>

			<div className="section-container relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					{/* Pre-launch badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-space-700/50 border border-space-500 backdrop-blur-sm animate-fade-in-up">
						<span className="w-2 h-2 bg-signal-green rounded-full animate-pulse" />
						<span className="text-sm text-slate-300">
							Amazon Project Kuiper launching 2025 —{" "}
							<Link href="/learn/project-kuiper-guide" className="text-cyan-400 hover:underline">
								Learn more
							</Link>
						</span>
					</div>

					{/* Main headline - Pre-launch positioning */}
					<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-in-up stagger-1">
						When Amazon's Satellite
						<br />
						Internet Launches,
						<br />
						<span className="text-gradient">Will You Be Ready?</span>
					</h1>

					{/* Subheadline - Value proposition */}
					<p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-2">
						Professional LEO satellite installation from the experts behind{" "}
						<span className="text-white font-semibold">500+ successful installations</span>. Be
						first in line when Project Kuiper and next-gen satellite internet arrives in your area.
					</p>

					{/* Primary CTA - Email capture */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up stagger-3">
						<div className="flex-1 max-w-md">
							<div className="relative">
								<input
									type="email"
									placeholder="Enter your email for availability alerts"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full px-5 py-4 pr-36 rounded-xl bg-space-700/50 border border-space-500 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
								/>
								<button
									type="button"
									className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-2.5 px-5 text-sm"
								>
									Notify Me
								</button>
							</div>
							<p className="text-xs text-slate-500 mt-2">
								Join 2,400+ people waiting for Kuiper availability updates
							</p>
						</div>
					</div>

					{/* Secondary CTA */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
						<Link href="/compare/kuiper-vs-starlink" className="btn-ghost">
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
								/>
							</svg>
							Compare Kuiper vs Starlink
						</Link>
						<Link href="/services/residential-installation" className="btn-ghost">
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							Schedule Installation
						</Link>
					</div>
				</div>

				{/* Hero stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
					{[
						{ value: "500+", label: "Installations Completed", icon: "satellite" },
						{ value: "50", label: "States Covered", icon: "map" },
						{ value: "4.9★", label: "Customer Rating", icon: "star" },
						{ value: "Same-Week", label: "Installation Available", icon: "clock" },
					].map((stat, index) => (
						<div key={stat.label} className={`stat-card text-center animate-fade-in-up stagger-${index + 1}`}>
							<div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
							<div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
						</div>
					))}
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
				<svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</section>
	);
}

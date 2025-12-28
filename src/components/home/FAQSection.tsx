"use client";

import { useState } from "react";

const faqs = [
	{
		question: "What is Project Kuiper and when will it launch?",
		answer:
			"Project Kuiper is Amazon's low Earth orbit (LEO) satellite internet constellation. Amazon is investing over $10 billion to deploy 3,236 satellites. Consumer service is expected to begin in 2025, with full coverage expanding through 2026. Kuiper aims to provide high-speed, low-latency internet to underserved areas worldwide.",
	},
	{
		question: "How is LEO satellite internet different from traditional satellite?",
		answer:
			"Traditional satellite internet uses geostationary satellites orbiting at 35,000+ km, resulting in high latency (600ms+). LEO satellites orbit at just 350-550 km, delivering latency as low as 20-40ms — comparable to cable internet. This makes LEO suitable for video calls, gaming, and real-time applications that were previously impossible with satellite.",
	},
	{
		question: "Why do I need professional installation?",
		answer:
			"While LEO systems like Starlink are designed for self-installation, professional installation ensures optimal performance. Our experts find the ideal mounting location with clear sky visibility, perform weatherproof installation that protects your home, configure your network for best performance, and provide installation warranties. Many customers who self-install experience suboptimal speeds or signal issues that professional installation prevents.",
	},
	{
		question: "How much does professional installation cost?",
		answer:
			"Professional installation typically ranges from $199-$499 depending on complexity. Basic roof mounts are at the lower end, while pole mounts, long cable runs, or challenging installations are higher. We provide exact quotes after understanding your specific situation. Many customers find the peace of mind and performance optimization worth the investment.",
	},
	{
		question: "Do you install both Starlink and Project Kuiper?",
		answer:
			"Yes! InstallLEO is technology-agnostic. We're certified for Starlink installation today and are preparing for Project Kuiper as it becomes available. We recommend the best solution for your situation — whether that's Starlink now, waiting for Kuiper, or even installing both for redundancy in mission-critical applications.",
	},
	{
		question: "What areas do you serve?",
		answer:
			"InstallLEO has certified installers across all 50 states. Our nationwide network ensures you can get professional installation whether you're in rural Montana, suburban Texas, or anywhere in between. Use our coverage checker to find installers in your area and get estimated installation timelines.",
	},
	{
		question: "How long does installation take?",
		answer:
			"Most residential installations take 1-2 hours. Business or complex installations may take longer. From booking to installation, most customers are connected within 3-5 business days. We offer same-week installation in most areas.",
	},
	{
		question: "What happens if I have problems after installation?",
		answer:
			"All InstallLEO installations include a satisfaction guarantee and installation warranty. If you experience any issues related to the installation — whether it's signal problems, mounting concerns, or cable issues — we'll return to make it right at no additional cost. Our support team is available to troubleshoot remotely first, and we dispatch technicians when needed.",
	},
];

export function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section className="section-padding bg-white">
			<div className="section-container">
				<div className="grid lg:grid-cols-3 gap-12">
					{/* Sidebar */}
					<div>
						<span className="badge badge-cyan mb-4">FAQ</span>
						<h2 className="text-3xl sm:text-4xl font-bold text-space-800 mb-4">
							Common Questions About
							<br />
							<span className="text-gradient">LEO Satellite Installation</span>
						</h2>
						<p className="text-slate-600 mb-6">
							Everything you need to know about Project Kuiper, Starlink, and professional
							satellite installation. Don't see your question? Contact us.
						</p>
						<a
							href="/contact"
							className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:text-cyan-700"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
								/>
							</svg>
							Ask a Question
						</a>
					</div>

					{/* FAQ accordion */}
					<div className="lg:col-span-2">
						<div className="space-y-4">
							{faqs.map((faq, index) => (
								<div
									key={faq.question}
									className="border border-slate-200 rounded-xl overflow-hidden"
								>
									<button
										type="button"
										className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
										onClick={() => setOpenIndex(openIndex === index ? null : index)}
									>
										<span className="font-medium text-space-800">{faq.question}</span>
										<svg
											className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
												openIndex === index ? "rotate-180" : ""
											}`}
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
									</button>
									{openIndex === index && (
										<div className="px-6 pb-4">
											<p className="text-slate-600">{faq.answer}</p>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

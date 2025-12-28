import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
	title: "Contact Us | InstallLEO - LEO Satellite Installation Experts",
	description:
		"Get in touch with InstallLEO for questions about Starlink or Project Kuiper installation. Our team is ready to help with quotes, scheduling, and support.",
	openGraph: {
		title: "Contact InstallLEO | LEO Satellite Installation",
		description:
			"Questions about satellite internet installation? Contact our expert team.",
	},
};

const contactMethods = [
	{
		icon: "📞",
		title: "Call Us",
		description: "Talk to a specialist now",
		value: "1-800-555-0123",
		href: "tel:1-800-555-0123",
	},
	{
		icon: "✉️",
		title: "Email Us",
		description: "We'll respond within 24 hours",
		value: "hello@installleo.com",
		href: "mailto:hello@installleo.com",
	},
	{
		icon: "💬",
		title: "Live Chat",
		description: "Chat with our team",
		value: "Start a conversation",
		href: "#chat",
	},
];

const officeHours = [
	{ day: "Monday - Friday", hours: "8:00 AM - 8:00 PM ET" },
	{ day: "Saturday", hours: "9:00 AM - 5:00 PM ET" },
	{ day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
	return (
		<>
			{/* Hero */}
			<section className="hero-section pt-32 pb-16 lg:pt-40 lg:pb-20">
				<div className="section-container relative z-10">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
							Get in <span className="text-gradient">Touch</span>
						</h1>
						<p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
							Questions about installation, pricing, or coverage? Our team is here to help you
							get connected.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Methods */}
			<section className="section-padding bg-white border-b border-slate-100">
				<div className="section-container">
					<div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
						{contactMethods.map((method) => (
							<a
								key={method.title}
								href={method.href}
								className="card border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all text-center group"
							>
								<div className="text-3xl mb-3">{method.icon}</div>
								<h3 className="font-semibold text-space-800 mb-1">{method.title}</h3>
								<p className="text-sm text-slate-500 mb-2">{method.description}</p>
								<span className="text-cyan-600 font-medium group-hover:underline">
									{method.value}
								</span>
							</a>
						))}
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className="section-padding bg-slate-50">
				<div className="section-container">
					<div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
						{/* Form */}
						<div className="lg:col-span-3">
							<div className="card-elevated">
								<h2 className="text-2xl font-bold text-space-800 mb-6">Send Us a Message</h2>
								<ContactForm />
							</div>
						</div>

						{/* Sidebar Info */}
						<div className="lg:col-span-2 space-y-6">
							{/* Office Hours */}
							<div className="card border border-slate-200">
								<h3 className="font-semibold text-space-800 mb-4">Office Hours</h3>
								<ul className="space-y-2">
									{officeHours.map((item) => (
										<li key={item.day} className="flex justify-between text-sm">
											<span className="text-slate-600">{item.day}</span>
											<span className="text-space-800 font-medium">{item.hours}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Quick Links */}
							<div className="card border border-slate-200">
								<h3 className="font-semibold text-space-800 mb-4">Quick Links</h3>
								<ul className="space-y-2">
									<li>
										<Link
											href="/assessment"
											className="text-sm text-cyan-600 hover:text-cyan-700 flex items-center gap-2"
										>
											<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
											</svg>
											Request Site Assessment
										</Link>
									</li>
									<li>
										<Link
											href="/services/residential-installation"
											className="text-sm text-cyan-600 hover:text-cyan-700 flex items-center gap-2"
										>
											<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
											</svg>
											View Installation Packages
										</Link>
									</li>
									<li>
										<Link
											href="/compare/kuiper-vs-starlink"
											className="text-sm text-cyan-600 hover:text-cyan-700 flex items-center gap-2"
										>
											<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
											</svg>
											Kuiper vs Starlink Comparison
										</Link>
									</li>
									<li>
										<Link
											href="/coverage"
											className="text-sm text-cyan-600 hover:text-cyan-700 flex items-center gap-2"
										>
											<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
											</svg>
											Check Coverage Map
										</Link>
									</li>
								</ul>
							</div>

							{/* FAQ Prompt */}
							<div className="bg-cyan-50 border border-cyan-100 rounded-xl p-6">
								<h3 className="font-semibold text-space-800 mb-2">Have a Quick Question?</h3>
								<p className="text-sm text-slate-600 mb-4">
									Check our FAQ section — you might find your answer instantly.
								</p>
								<Link href="/faq" className="btn-secondary text-sm">
									View FAQs
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Business Inquiries */}
			<section className="section-padding bg-space-800 text-white">
				<div className="section-container text-center">
					<h2 className="text-3xl font-bold mb-4">Business & Partnership Inquiries</h2>
					<p className="text-slate-300 mb-8 max-w-2xl mx-auto">
						Interested in partnering with InstallLEO? We work with internet service providers,
						property developers, and equipment manufacturers. Let's talk.
					</p>
					<a
						href="mailto:partners@installleo.com"
						className="btn-primary"
					>
						Email Our Business Team
					</a>
				</div>
			</section>
		</>
	);
}

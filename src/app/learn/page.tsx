import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "LEO Satellite Internet Learning Center | InstallLEO",
	description:
		"Everything you need to know about LEO satellite internet, Starlink, Project Kuiper, installation, and getting the best performance from your satellite connection.",
	openGraph: {
		title: "Learning Center | InstallLEO",
		description:
			"Comprehensive guides and resources about LEO satellite internet.",
	},
};

const featuredArticles = [
	{
		title: "What is LEO Satellite Internet?",
		description: "Complete beginner's guide to Low Earth Orbit satellite internet and how it works.",
		href: "/learn/what-is-leo-satellite-internet",
		badge: "Beginner Guide",
		badgeColor: "cyan",
		readTime: "10 min",
	},
	{
		title: "Kuiper vs Starlink: Complete Comparison",
		description: "Everything you need to know to choose between Amazon's Kuiper and SpaceX's Starlink.",
		href: "/compare/kuiper-vs-starlink",
		badge: "Comparison",
		badgeColor: "amber",
		readTime: "15 min",
	},
];

const categories = [
	{
		name: "Getting Started",
		icon: "🚀",
		articles: [
			{ title: "What is LEO Satellite Internet?", href: "/learn/what-is-leo-satellite-internet" },
			{ title: "Is Satellite Internet Right for Me?", href: "/learn/is-satellite-right-for-me" },
			{ title: "How to Order Starlink", href: "/learn/how-to-order-starlink" },
			{ title: "What to Expect on Installation Day", href: "/learn/installation-day" },
		],
	},
	{
		name: "Comparisons",
		icon: "⚖️",
		articles: [
			{ title: "Kuiper vs Starlink", href: "/compare/kuiper-vs-starlink" },
			{ title: "LEO vs Traditional Satellite", href: "/learn/leo-vs-geo-satellite" },
			{ title: "Starlink vs Fixed Wireless", href: "/learn/starlink-vs-fixed-wireless" },
			{ title: "DIY vs Professional Installation", href: "/learn/diy-vs-professional" },
		],
	},
	{
		name: "Performance & Speed",
		icon: "⚡",
		articles: [
			{ title: "Understanding Starlink Speeds", href: "/learn/starlink-speeds" },
			{ title: "What Affects Satellite Performance?", href: "/learn/performance-factors" },
			{ title: "Optimizing Your Connection", href: "/learn/optimize-connection" },
			{ title: "Speed Test Guide", href: "/learn/speed-test-guide" },
		],
	},
	{
		name: "Installation",
		icon: "🔧",
		articles: [
			{ title: "Site Assessment Guide", href: "/learn/site-assessment-guide" },
			{ title: "Mounting Options Explained", href: "/learn/mounting-options" },
			{ title: "Cable Routing Best Practices", href: "/learn/cable-routing" },
			{ title: "Weatherproofing Your Installation", href: "/learn/weatherproofing" },
		],
	},
	{
		name: "Troubleshooting",
		icon: "🛠️",
		articles: [
			{ title: "Common Issues & Solutions", href: "/learn/troubleshooting-common-issues" },
			{ title: "Obstructions and Sky View", href: "/learn/obstructions-guide" },
			{ title: "Weather-Related Problems", href: "/learn/weather-issues" },
			{ title: "When to Call for Help", href: "/learn/when-to-call-support" },
		],
	},
	{
		name: "Special Use Cases",
		icon: "🎯",
		articles: [
			{ title: "Starlink for RVs", href: "/learn/starlink-for-rvs" },
			{ title: "Satellite Internet for Boats", href: "/learn/satellite-for-boats" },
			{ title: "Business Use Cases", href: "/learn/business-satellite-internet" },
			{ title: "Remote Work Setup Guide", href: "/learn/remote-work-setup" },
		],
	},
];

export default function LearnPage() {
	return (
		<>
			{/* Hero */}
			<section className="hero-section pt-32 pb-16 lg:pt-40 lg:pb-20">
				<div className="section-container relative z-10">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-space-900 mb-6">
							Learning <span className="text-gradient">Center</span>
						</h1>
						<p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
							Your complete resource for understanding LEO satellite internet. From basics to
							advanced optimization, we've got you covered.
						</p>
					</div>
				</div>
			</section>

			{/* Featured Articles */}
			<section className="section-padding bg-white border-b border-slate-100">
				<div className="section-container">
					<h2 className="text-2xl font-bold text-space-800 mb-8">Featured Articles</h2>
					<div className="grid md:grid-cols-2 gap-6 max-w-4xl">
						{featuredArticles.map((article) => (
							<Link
								key={article.href}
								href={article.href}
								className="card-elevated border border-slate-200 hover:border-cyan-500 hover:shadow-lg transition-all group"
							>
								<span
									className={`badge ${article.badgeColor === "cyan" ? "badge-cyan" : "badge-amber"} text-xs mb-3`}
								>
									{article.badge}
								</span>
								<h3 className="text-xl font-semibold text-space-800 group-hover:text-cyan-600 transition-colors mb-2">
									{article.title}
								</h3>
								<p className="text-slate-600 mb-4">{article.description}</p>
								<div className="flex items-center justify-between">
									<span className="text-sm text-slate-500">{article.readTime} read</span>
									<span className="text-cyan-600 font-medium text-sm group-hover:underline">
										Read Article →
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Categories */}
			<section className="section-padding bg-slate-50">
				<div className="section-container">
					<h2 className="text-2xl font-bold text-space-800 mb-8">Browse by Topic</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{categories.map((category) => (
							<div key={category.name} className="card bg-white border border-slate-200">
								<div className="flex items-center gap-3 mb-4">
									<span className="text-2xl">{category.icon}</span>
									<h3 className="font-semibold text-space-800">{category.name}</h3>
								</div>
								<ul className="space-y-2">
									{category.articles.map((article) => (
										<li key={article.href}>
											<Link
												href={article.href}
												className="text-sm text-slate-600 hover:text-cyan-600 flex items-center gap-2"
											>
												<svg className="w-3 h-3 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
													<path
														fillRule="evenodd"
														d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
														clipRule="evenodd"
													/>
												</svg>
												{article.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter CTA */}
			<section className="section-padding bg-slate-50">
				<div className="section-container text-center">
					<h2 className="text-3xl font-bold text-space-800 mb-4">Stay Updated</h2>
					<p className="text-slate-600 mb-8 max-w-2xl mx-auto">
						Get the latest news about Project Kuiper, Starlink updates, and satellite internet
						tips delivered to your inbox.
					</p>
					<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
						<input
							type="email"
							placeholder="Enter your email"
							className="input flex-1"
						/>
						<button type="submit" className="btn-primary whitespace-nowrap">
							Subscribe
						</button>
					</form>
				</div>
			</section>
		</>
	);
}

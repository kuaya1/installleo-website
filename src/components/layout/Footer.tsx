import Link from "next/link";

const footerLinks = {
	learn: {
		title: "Learn",
		links: [
			{ name: "What is LEO Satellite?", href: "/learn/what-is-leo-satellite-internet" },
			{ name: "Project Kuiper Guide", href: "/learn/project-kuiper-guide" },
			{ name: "Starlink Guide", href: "/learn/starlink-guide" },
			{ name: "Pro vs DIY Installation", href: "/learn/professional-vs-diy-installation" },
			{ name: "Satellite for Rural Areas", href: "/learn/satellite-internet-for-rural-areas" },
		],
	},
	compare: {
		title: "Compare",
		links: [
			{ name: "Kuiper vs Starlink", href: "/compare/kuiper-vs-starlink" },
			{ name: "Satellite vs Fiber", href: "/compare/satellite-vs-fiber" },
			{ name: "Satellite vs 5G", href: "/compare/satellite-vs-5g" },
			{ name: "Cost Calculator", href: "/compare/cost-calculator" },
		],
	},
	services: {
		title: "Services",
		links: [
			{ name: "Residential Installation", href: "/services/residential-installation" },
			{ name: "Business Installation", href: "/services/business-installation" },
			{ name: "RV & Marine", href: "/services/rv-marine-installation" },
			{ name: "Multi-Property", href: "/services/multi-property-installation" },
		],
	},
	company: {
		title: "Company",
		links: [
			{ name: "About Us", href: "/about" },
			{ name: "Coverage Map", href: "/coverage/availability-map" },
			{ name: "Join Our Network", href: "/join" },
			{ name: "Contact", href: "/contact" },
			{ name: "Blog", href: "/blog" },
		],
	},
};

const popularStates = [
	{ name: "Texas", href: "/coverage/states/texas" },
	{ name: "California", href: "/coverage/states/california" },
	{ name: "Florida", href: "/coverage/states/florida" },
	{ name: "Virginia", href: "/coverage/states/virginia" },
	{ name: "Colorado", href: "/coverage/states/colorado" },
	{ name: "Arizona", href: "/coverage/states/arizona" },
];

export function Footer() {
	return (
		<footer className="bg-space-900 text-white">
			{/* Main Footer */}
			<div className="section-container section-padding">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
					{/* Brand Column */}
					<div className="col-span-2 md:col-span-3 lg:col-span-2">
						<Link href="/" className="flex items-center gap-3 mb-6">
							<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
								<svg
									className="w-6 h-6 text-space-900"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<circle cx="12" cy="12" r="3" />
									<path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
								</svg>
							</div>
							<div>
								<span className="text-xl font-bold">
									Install<span className="text-cyan-500">LEO</span>
								</span>
							</div>
						</Link>
						<p className="text-slate-400 mb-6 max-w-sm">
							America's LEO Satellite Installation Authority. Professional installation services
							for Project Kuiper, Starlink, and next-generation satellite internet nationwide.
						</p>

						{/* Trust Badges */}
						<div className="flex flex-wrap gap-3 mb-6">
							<div className="badge badge-green">
								<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
								SpaceX Certified
							</div>
							<div className="badge badge-cyan">500+ Installations</div>
						</div>

						{/* Social Links */}
						<div className="flex gap-4">
							<a
								href="https://twitter.com/installleo"
								className="text-slate-400 hover:text-cyan-500 transition-colors"
								aria-label="Twitter"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
							</a>
							<a
								href="https://linkedin.com/company/installleo"
								className="text-slate-400 hover:text-cyan-500 transition-colors"
								aria-label="LinkedIn"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</a>
							<a
								href="https://youtube.com/@installleo"
								className="text-slate-400 hover:text-cyan-500 transition-colors"
								aria-label="YouTube"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
								</svg>
							</a>
						</div>
					</div>

					{/* Link Columns */}
					{Object.values(footerLinks).map((section) => (
						<div key={section.title}>
							<h3 className="font-semibold text-white mb-4">{section.title}</h3>
							<ul className="space-y-3">
								{section.links.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Popular States */}
				<div className="mt-12 pt-8 border-t border-space-700">
					<h3 className="font-semibold text-white mb-4">Service Areas</h3>
					<div className="flex flex-wrap gap-3">
						{popularStates.map((state) => (
							<Link
								key={state.name}
								href={state.href}
								className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
							>
								{state.name}
							</Link>
						))}
						<Link
							href="/coverage/availability-map"
							className="text-sm text-cyan-500 hover:text-cyan-400 transition-colors font-medium"
						>
							View All States →
						</Link>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-space-700">
				<div className="section-container py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
							<span>© {new Date().getFullYear()} InstallLEO. All rights reserved.</span>
							<span className="hidden md:inline">•</span>
							<span>A division of professional satellite installation services.</span>
						</div>
						<div className="flex gap-6 text-sm">
							<Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">
								Privacy Policy
							</Link>
							<Link href="/terms" className="text-slate-500 hover:text-white transition-colors">
								Terms of Service
							</Link>
							<Link href="/sitemap.xml" className="text-slate-500 hover:text-white transition-colors">
								Sitemap
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

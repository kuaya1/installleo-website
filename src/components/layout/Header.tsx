"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navigation = [
	{ name: "Learn", href: "/learn", hasDropdown: true },
	{ name: "Compare", href: "/compare/kuiper-vs-starlink" },
	{ name: "Services", href: "/services", hasDropdown: true },
	{ name: "Coverage", href: "/coverage" },
	{ name: "About", href: "/about" },
];

const learnDropdown = [
	{ name: "What is LEO Satellite?", href: "/learn/what-is-leo-satellite-internet" },
	{ name: "Project Kuiper Guide", href: "/learn/project-kuiper-guide" },
	{ name: "Starlink Guide", href: "/learn/starlink-guide" },
	{ name: "Professional vs DIY", href: "/learn/professional-vs-diy-installation" },
	{ name: "For Rural Areas", href: "/learn/satellite-internet-for-rural-areas" },
];

const servicesDropdown = [
	{ name: "Residential Installation", href: "/services/residential-installation" },
	{ name: "Business Installation", href: "/services/business-installation" },
	{ name: "RV & Marine", href: "/services/rv-marine-installation" },
	{ name: "Multi-Property", href: "/services/multi-property-installation" },
];

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "header-scrolled" : "bg-transparent"
			}`}
		>
			<nav className="section-container">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-3 group">
						<div className="relative">
							<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-shadow duration-300">
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
							{/* Orbit ring */}
							<div className="absolute inset-0 -m-1 rounded-full border border-cyan-500/30 animate-pulse-glow" />
						</div>
						<div className="flex flex-col">
							<span className="text-xl font-bold text-space-800 tracking-tight">
								Install<span className="text-cyan-500">LEO</span>
							</span>
							<span className="text-[10px] text-slate-400 tracking-wider uppercase hidden sm:block">
								Satellite Installation Experts
							</span>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center gap-8">
						{navigation.map((item) => (
							<div
								key={item.name}
								className="relative"
								onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
								onMouseLeave={() => setActiveDropdown(null)}
							>
								<Link href={item.href} className="nav-link flex items-center gap-1">
									{item.name}
									{item.hasDropdown && (
										<svg
											className={`w-4 h-4 transition-transform ${
												activeDropdown === item.name ? "rotate-180" : ""
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
									)}
								</Link>

								{/* Dropdown */}
								{item.hasDropdown && activeDropdown === item.name && (
									<div className="absolute top-full left-0 pt-2">
										<div className="bg-white/95 backdrop-blur-lg border border-slate-200 rounded-xl p-2 min-w-[220px] shadow-xl">
											{(item.name === "Learn" ? learnDropdown : servicesDropdown).map(
												(subItem) => (
													<Link
														key={subItem.name}
														href={subItem.href}
														className="block px-4 py-2.5 text-sm text-slate-700 hover:text-space-800 hover:bg-slate-50 rounded-lg transition-colors"
													>
														{subItem.name}
													</Link>
												)
											)}
										</div>
									</div>
								)}
							</div>
						))}
					</div>

					{/* CTA Buttons */}
					<div className="hidden lg:flex items-center gap-4">
						<Link
							href="/coverage/check-availability"
							className="text-sm font-medium text-cyan-700 hover:text-cyan-600 transition-colors"
						>
							Check Availability
						</Link>
						<Link href="/quote" className="btn-primary text-sm py-2.5 px-5">
							Get a Quote
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						type="button"
						className="lg:hidden p-2 text-space-800"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? (
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-slate-200 -mx-6 px-6 py-6">
						<div className="flex flex-col gap-4">
							{navigation.map((item) => (
								<div key={item.name}>
									<Link
										href={item.href}
										className="block text-lg font-medium text-space-800 py-2"
										onClick={() => setMobileMenuOpen(false)}
									>
										{item.name}
									</Link>
									{item.hasDropdown && (
										<div className="ml-4 mt-2 flex flex-col gap-2">
											{(item.name === "Learn" ? learnDropdown : servicesDropdown).map(
												(subItem) => (
													<Link
														key={subItem.name}
														href={subItem.href}
														className="text-slate-600 hover:text-space-800 py-1"
														onClick={() => setMobileMenuOpen(false)}
													>
														{subItem.name}
													</Link>
												)
											)}
										</div>
									)}
								</div>
							))}
							<div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
								<Link
									href="/coverage/check-availability"
									className="btn-secondary w-full"
									onClick={() => setMobileMenuOpen(false)}
								>
									Check Availability
								</Link>
								<Link
									href="/quote"
									className="btn-primary w-full"
									onClick={() => setMobileMenuOpen(false)}
								>
									Get a Quote
								</Link>
							</div>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}

const testimonials = [
	{
		quote:
			"After 15 years of terrible DSL, I finally have real internet. The installer found the perfect spot on my barn — I'm getting 180 Mbps where I couldn't even stream Netflix before.",
		author: "Robert M.",
		location: "Rural Montana",
		rating: 5,
		service: "Starlink Installation",
		highlight: "180 Mbps from 3 Mbps DSL",
	},
	{
		quote:
			"I tried installing Starlink myself and couldn't get consistent signal. InstallLEO found an obstruction I missed and repositioned the dish. Night and day difference.",
		author: "Jennifer K.",
		location: "Colorado Mountains",
		rating: 5,
		service: "Reinstallation & Optimization",
		highlight: "Fixed DIY issues",
	},
	{
		quote:
			"Running a business from our ranch was impossible until satellite internet. Professional installation meant zero downtime — we were up and running the same day.",
		author: "Marcus & Elena T.",
		location: "West Texas",
		rating: 5,
		service: "Business Installation",
		highlight: "Same-day business connectivity",
	},
	{
		quote:
			"Three vacation properties, three perfect installations. They coordinated everything and now I have reliable internet at all our locations.",
		author: "David L.",
		location: "Multiple Properties",
		rating: 5,
		service: "Multi-Property Installation",
		highlight: "3 properties, 1 seamless experience",
	},
];

export function Testimonials() {
	return (
		<section className="section-padding bg-slate-50">
			<div className="section-container">
				{/* Section header */}
				<div className="text-center mb-16">
					<span className="badge badge-green mb-4">Customer Stories</span>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-space-800 mb-4">
						Real Results from
						<br />
						<span className="text-gradient">Real Customers</span>
					</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						Over 500 installations and counting. Here's what our customers say about their
						experience with professional satellite installation.
					</p>
				</div>

				{/* Testimonials grid */}
				<div className="grid md:grid-cols-2 gap-6">
					{testimonials.map((testimonial) => (
						<div key={testimonial.author} className="card-elevated">
							{/* Rating */}
							<div className="flex items-center gap-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<svg
										key={`star-${testimonial.author}-${i}`}
										className={`w-5 h-5 ${i < testimonial.rating ? "text-warning-amber" : "text-slate-200"}`}
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
								))}
							</div>

							{/* Quote */}
							<blockquote className="text-slate-700 mb-4">"{testimonial.quote}"</blockquote>

							{/* Highlight badge */}
							<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-signal-green/10 border border-signal-green/30 rounded-full text-sm text-signal-green font-medium mb-4">
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								{testimonial.highlight}
							</div>

							{/* Author */}
							<div className="flex items-center justify-between pt-4 border-t border-slate-100">
								<div>
									<div className="font-semibold text-space-800">{testimonial.author}</div>
									<div className="text-sm text-slate-500">{testimonial.location}</div>
								</div>
								<div className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">
									{testimonial.service}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Trust stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-slate-200">
					{[
						{ value: "4.9", label: "Average Rating", suffix: "★" },
						{ value: "500+", label: "Installations", suffix: "" },
						{ value: "98%", label: "Would Recommend", suffix: "" },
						{ value: "100%", label: "Satisfaction Guarantee", suffix: "" },
					].map((stat) => (
						<div key={stat.label} className="text-center">
							<div className="text-3xl font-bold text-cyan-600">
								{stat.value}
								{stat.suffix && <span className="text-warning-amber">{stat.suffix}</span>}
							</div>
							<div className="text-sm text-slate-500">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

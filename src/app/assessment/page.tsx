import type { Metadata } from "next";
import { SiteAssessmentForm } from "@/components/forms/SiteAssessmentForm";

export const metadata: Metadata = {
	title: "Free Site Assessment | LEO Satellite Installation | InstallLEO",
	description:
		"Get a free professional site assessment for your Starlink or Project Kuiper installation. Our experts will evaluate your property and recommend the optimal setup.",
	openGraph: {
		title: "Free Site Assessment | InstallLEO",
		description:
			"Request a free professional assessment for your satellite internet installation.",
	},
};

export default function AssessmentPage() {
	return (
		<>
			{/* Hero */}
			<section className="hero-section pt-32 pb-16 lg:pt-40 lg:pb-20">
				<div className="section-container relative z-10">
					<div className="max-w-3xl mx-auto text-center">
						<span className="badge badge-cyan mb-4">No Obligation</span>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
							Free Site
							<br />
							<span className="text-gradient">Assessment</span>
						</h1>
						<p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
							Tell us about your property and we'll provide a personalized installation
							recommendation — completely free.
						</p>
					</div>
				</div>
			</section>

			{/* Form Section */}
			<section className="section-padding bg-slate-50">
				<div className="section-container">
					<SiteAssessmentForm />
				</div>
			</section>

			{/* What to Expect */}
			<section className="section-padding bg-white border-t border-slate-100">
				<div className="section-container">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-space-800 mb-4">What Happens Next?</h2>
					</div>

					<div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
						<div className="text-center">
							<div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
								1
							</div>
							<h3 className="font-semibold text-space-800 mb-2">We Review Your Info</h3>
							<p className="text-sm text-slate-600">
								Our team analyzes your property details and checks for any special requirements.
							</p>
						</div>
						<div className="text-center">
							<div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
								2
							</div>
							<h3 className="font-semibold text-space-800 mb-2">We Contact You</h3>
							<p className="text-sm text-slate-600">
								A specialist reaches out within 24-48 hours to discuss your options.
							</p>
						</div>
						<div className="text-center">
							<div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
								3
							</div>
							<h3 className="font-semibold text-space-800 mb-2">Get Your Quote</h3>
							<p className="text-sm text-slate-600">
								Receive a customized installation quote with no obligation to proceed.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

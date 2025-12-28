"use client";

import { useState } from "react";

interface FormData {
	name: string;
	email: string;
	phone: string;
	address: string;
	city: string;
	state: string;
	zip: string;
	propertyType: "residential" | "commercial" | "rv" | "";
	roofType: string;
	stories: string;
	hasTreeCoverage: boolean;
	currentInternet: string;
	service: "starlink" | "kuiper" | "undecided" | "";
	additionalInfo: string;
}

const propertyTypes = [
	{ value: "residential", label: "Single Family Home" },
	{ value: "commercial", label: "Commercial/Business" },
	{ value: "rv", label: "RV/Mobile" },
];

const roofTypes = [
	"Asphalt Shingle",
	"Metal",
	"Tile",
	"Flat/TPO",
	"Wood Shake",
	"Other",
];

const storyOptions = ["1 Story", "2 Stories", "3+ Stories"];

const states = [
	"AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
	"HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
	"MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
	"NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
	"SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
];

export function SiteAssessmentForm() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		address: "",
		city: "",
		state: "",
		zip: "",
		propertyType: "",
		roofType: "",
		stories: "",
		hasTreeCoverage: false,
		currentInternet: "",
		service: "",
		additionalInfo: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value, type } = e.target;
		const checked = (e.target as HTMLInputElement).checked;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));
		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	const isStep1Valid = formData.name && formData.email && formData.phone;
	const isStep2Valid =
		formData.address && formData.city && formData.state && formData.zip;
	const isStep3Valid =
		formData.propertyType && formData.roofType && formData.stories && formData.service;

	if (isSubmitted) {
		return (
			<div className="max-w-2xl mx-auto text-center">
				<div className="card-elevated">
					<div className="w-16 h-16 bg-signal-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
						<svg
							className="w-8 h-8 text-signal-green"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<h2 className="text-2xl font-bold text-space-800 mb-4">
						Assessment Request Submitted!
					</h2>
					<p className="text-slate-600 mb-6">
						Thank you, {formData.name}! We've received your site assessment request.
						One of our specialists will review your property details and contact you within
						24-48 hours to discuss your installation options.
					</p>
					<div className="bg-slate-50 rounded-xl p-4 text-left text-sm mb-6">
						<div className="grid grid-cols-2 gap-2">
							<div className="text-slate-500">Email:</div>
							<div className="text-space-800">{formData.email}</div>
							<div className="text-slate-500">Phone:</div>
							<div className="text-space-800">{formData.phone}</div>
							<div className="text-slate-500">Location:</div>
							<div className="text-space-800">
								{formData.city}, {formData.state}
							</div>
						</div>
					</div>
					<p className="text-sm text-slate-500">
						Questions? Call us at{" "}
						<a href="tel:1-800-555-0123" className="text-cyan-600 hover:underline">
							1-800-555-0123
						</a>
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="max-w-2xl mx-auto">
			<div className="card-elevated">
				{/* Progress Steps */}
				<div className="flex items-center justify-between mb-8">
					{[1, 2, 3].map((s) => (
						<div key={s} className="flex items-center">
							<div
								className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
									step >= s
										? "bg-cyan-500 text-white"
										: "bg-slate-200 text-slate-500"
								}`}
							>
								{step > s ? (
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									s
								)}
							</div>
							{s < 3 && (
								<div
									className={`h-1 w-16 sm:w-24 mx-2 ${
										step > s ? "bg-cyan-500" : "bg-slate-200"
									}`}
								/>
							)}
						</div>
					))}
				</div>

				<form onSubmit={handleSubmit}>
					{/* Step 1: Contact Info */}
					{step === 1 && (
						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-space-800 mb-4">
								Your Contact Information
							</h3>
							<div>
								<label className="block text-sm font-medium text-slate-700 mb-1">
									Full Name *
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="input"
									placeholder="John Smith"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-slate-700 mb-1">
									Email Address *
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="input"
									placeholder="john@example.com"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-slate-700 mb-1">
									Phone Number *
								</label>
								<input
									type="tel"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									className="input"
									placeholder="(555) 123-4567"
									required
								/>
							</div>
							<button
								type="button"
								onClick={() => setStep(2)}
								disabled={!isStep1Valid}
								className="btn-primary w-full"
							>
								Continue
							</button>
						</div>
					)}

					{/* Step 2: Property Location */}
					{step === 2 && (
						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-space-800 mb-4">
								Property Location
							</h3>
							<div>
								<label className="block text-sm font-medium text-slate-700 mb-1">
									Street Address *
								</label>
								<input
									type="text"
									name="address"
									value={formData.address}
									onChange={handleChange}
									className="input"
									placeholder="123 Main Street"
									required
								/>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium text-slate-700 mb-1">
										City *
									</label>
									<input
										type="text"
										name="city"
										value={formData.city}
										onChange={handleChange}
										className="input"
										placeholder="City"
										required
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-slate-700 mb-1">
										State *
									</label>
									<select
										name="state"
										value={formData.state}
										onChange={handleChange}
										className="input"
										required
									>
										<option value="">Select</option>
										{states.map((state) => (
											<option key={state} value={state}>
												{state}
											</option>
										))}
									</select>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-slate-700 mb-1">
									ZIP Code *
								</label>
								<input
									type="text"
									name="zip"
									value={formData.zip}
									onChange={handleChange}
									className="input"
									placeholder="12345"
									maxLength={5}
									required
								/>
							</div>
							<div className="flex gap-4">
								<button
									type="button"
									onClick={() => setStep(1)}
									className="btn-secondary flex-1"
								>
									Back
								</button>
								<button
									type="button"
									onClick={() => setStep(3)}
									disabled={!isStep2Valid}
									className="btn-primary flex-1"
								>
									Continue
								</button>
							</div>
						</div>
					)}

					{/* Step 3: Property Details */}
					{step === 3 && (
						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-space-800 mb-4">
								Property Details
							</h3>
							<div>
								<label className="block text-sm font-medium text-slate-700 mb-2">
									Property Type *
								</label>
								<div className="grid grid-cols-3 gap-2">
									{propertyTypes.map((type) => (
										<button
											key={type.value}
											type="button"
											onClick={() =>
												setFormData((prev) => ({
													...prev,
													propertyType: type.value as FormData["propertyType"],
												}))
											}
											className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
												formData.propertyType === type.value
													? "border-cyan-500 bg-cyan-50 text-cyan-700"
													: "border-slate-200 hover:border-slate-300 text-slate-700"
											}`}
										>
											{type.label}
										</button>
									))}
								</div>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-medium text-slate-700 mb-1">
										Roof Type *
									</label>
									<select
										name="roofType"
										value={formData.roofType}
										onChange={handleChange}
										className="input"
										required
									>
										<option value="">Select</option>
										{roofTypes.map((type) => (
											<option key={type} value={type}>
												{type}
											</option>
										))}
									</select>
								</div>
								<div>
									<label className="block text-sm font-medium text-slate-700 mb-1">
										Stories *
									</label>
									<select
										name="stories"
										value={formData.stories}
										onChange={handleChange}
										className="input"
										required
									>
										<option value="">Select</option>
										{storyOptions.map((option) => (
											<option key={option} value={option}>
												{option}
											</option>
										))}
									</select>
								</div>
							</div>
							<div>
								<label className="flex items-center gap-3 cursor-pointer">
									<input
										type="checkbox"
										name="hasTreeCoverage"
										checked={formData.hasTreeCoverage}
										onChange={handleChange}
										className="w-4 h-4 rounded border-slate-300 text-cyan-600"
									/>
									<span className="text-sm text-slate-700">
										Property has significant tree coverage
									</span>
								</label>
							</div>
							<div>
								<label className="block text-sm font-medium text-slate-700 mb-2">
									Which service are you interested in? *
								</label>
								<div className="grid grid-cols-3 gap-2">
									<button
										type="button"
										onClick={() =>
											setFormData((prev) => ({ ...prev, service: "starlink" }))
										}
										className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
											formData.service === "starlink"
												? "border-cyan-500 bg-cyan-50 text-cyan-700"
												: "border-slate-200 hover:border-slate-300 text-slate-700"
										}`}
									>
										Starlink
									</button>
									<button
										type="button"
										onClick={() =>
											setFormData((prev) => ({ ...prev, service: "kuiper" }))
										}
										className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
											formData.service === "kuiper"
												? "border-cyan-500 bg-cyan-50 text-cyan-700"
												: "border-slate-200 hover:border-slate-300 text-slate-700"
										}`}
									>
										Kuiper
									</button>
									<button
										type="button"
										onClick={() =>
											setFormData((prev) => ({ ...prev, service: "undecided" }))
										}
										className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
											formData.service === "undecided"
												? "border-cyan-500 bg-cyan-50 text-cyan-700"
												: "border-slate-200 hover:border-slate-300 text-slate-700"
										}`}
									>
										Undecided
									</button>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-slate-700 mb-1">
									Additional Information (optional)
								</label>
								<textarea
									name="additionalInfo"
									value={formData.additionalInfo}
									onChange={handleChange}
									className="input min-h-[100px]"
									placeholder="Tell us anything else that might help us assess your property..."
								/>
							</div>
							<div className="flex gap-4">
								<button
									type="button"
									onClick={() => setStep(2)}
									className="btn-secondary flex-1"
								>
									Back
								</button>
								<button
									type="submit"
									disabled={!isStep3Valid || isSubmitting}
									className="btn-primary flex-1"
								>
									{isSubmitting ? (
										<span className="flex items-center justify-center gap-2">
											<svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
													fill="none"
												/>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												/>
											</svg>
											Submitting...
										</span>
									) : (
										"Submit Assessment Request"
									)}
								</button>
							</div>
						</div>
					)}
				</form>
			</div>
		</div>
	);
}

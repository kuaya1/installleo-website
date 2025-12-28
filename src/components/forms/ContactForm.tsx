"use client";

import { useState } from "react";

interface FormData {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
	preferredContact: "email" | "phone" | "";
}

const subjectOptions = [
	"General Inquiry",
	"Installation Quote Request",
	"Technical Support",
	"Scheduling Question",
	"Billing/Payment",
	"Partnership Inquiry",
	"Other",
];

export function ContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
		preferredContact: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));
		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	const isValid =
		formData.name &&
		formData.email &&
		formData.subject &&
		formData.message &&
		formData.preferredContact;

	if (isSubmitted) {
		return (
			<div className="text-center">
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
				<h2 className="text-2xl font-bold text-space-800 mb-4">Message Sent!</h2>
				<p className="text-slate-600 mb-6">
					Thank you for contacting us! We typically respond within 24 hours during business days.
				</p>
				<button
					type="button"
					onClick={() => {
						setIsSubmitted(false);
						setFormData({
							name: "",
							email: "",
							phone: "",
							subject: "",
							message: "",
							preferredContact: "",
						});
					}}
					className="btn-secondary"
				>
					Send Another Message
				</button>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div className="grid sm:grid-cols-2 gap-4">
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
			</div>

			<div className="grid sm:grid-cols-2 gap-4">
				<div>
					<label className="block text-sm font-medium text-slate-700 mb-1">
						Phone Number
					</label>
					<input
						type="tel"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						className="input"
						placeholder="(555) 123-4567"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-slate-700 mb-1">
						Subject *
					</label>
					<select
						name="subject"
						value={formData.subject}
						onChange={handleChange}
						className="input"
						required
					>
						<option value="">Select a topic</option>
						{subjectOptions.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</div>
			</div>

			<div>
				<label className="block text-sm font-medium text-slate-700 mb-1">
					Your Message *
				</label>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					className="input min-h-[150px]"
					placeholder="How can we help you?"
					required
				/>
			</div>

			<div>
				<label className="block text-sm font-medium text-slate-700 mb-2">
					Preferred Contact Method *
				</label>
				<div className="flex gap-4">
					<label className="flex items-center gap-2 cursor-pointer">
						<input
							type="radio"
							name="preferredContact"
							value="email"
							checked={formData.preferredContact === "email"}
							onChange={handleChange}
							className="w-4 h-4 text-cyan-600"
						/>
						<span className="text-slate-700">Email</span>
					</label>
					<label className="flex items-center gap-2 cursor-pointer">
						<input
							type="radio"
							name="preferredContact"
							value="phone"
							checked={formData.preferredContact === "phone"}
							onChange={handleChange}
							className="w-4 h-4 text-cyan-600"
						/>
						<span className="text-slate-700">Phone</span>
					</label>
				</div>
			</div>

			<button
				type="submit"
				disabled={!isValid || isSubmitting}
				className="btn-primary w-full"
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
						Sending...
					</span>
				) : (
					"Send Message"
				)}
			</button>

			<p className="text-xs text-slate-500 text-center">
				By submitting this form, you agree to our{" "}
				<a href="/privacy" className="text-cyan-600 hover:underline">
					Privacy Policy
				</a>
				.
			</p>
		</form>
	);
}

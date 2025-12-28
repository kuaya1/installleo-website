"use client";

import { useState } from "react";
import Link from "next/link";

interface CostFactors {
	mountType: "roof" | "wall" | "pole" | "chimney" | "";
	cableLength: "short" | "medium" | "long" | "";
	roofAccess: "easy" | "moderate" | "difficult" | "";
	meshWifi: boolean;
	expedited: boolean;
}

const mountOptions = [
	{ value: "roof", label: "Roof Mount", addition: 0 },
	{ value: "wall", label: "Wall Mount", addition: 0 },
	{ value: "pole", label: "Ground Pole", addition: 75 },
	{ value: "chimney", label: "Chimney Mount", addition: 50 },
];

const cableOptions = [
	{ value: "short", label: "Under 50 ft", addition: 0 },
	{ value: "medium", label: "50-100 ft", addition: 50 },
	{ value: "long", label: "Over 100 ft", addition: 100 },
];

const accessOptions = [
	{ value: "easy", label: "Single story, easy access", addition: 0 },
	{ value: "moderate", label: "Two story or moderate access", addition: 50 },
	{ value: "difficult", label: "Steep roof or difficult access", addition: 100 },
];

export function CostCalculator() {
	const [factors, setFactors] = useState<CostFactors>({
		mountType: "",
		cableLength: "",
		roofAccess: "",
		meshWifi: false,
		expedited: false,
	});

	const basePrice = 299;

	const calculateTotal = () => {
		let total = basePrice;

		const mount = mountOptions.find((m) => m.value === factors.mountType);
		if (mount) total += mount.addition;

		const cable = cableOptions.find((c) => c.value === factors.cableLength);
		if (cable) total += cable.addition;

		const access = accessOptions.find((a) => a.value === factors.roofAccess);
		if (access) total += access.addition;

		if (factors.meshWifi) total += 150;
		if (factors.expedited) total += 75;

		return total;
	};

	const isComplete = factors.mountType && factors.cableLength && factors.roofAccess;
	const total = calculateTotal();

	return (
		<div className="max-w-3xl mx-auto">
			<div className="card-elevated border border-slate-200">
				<div className="space-y-6">
					{/* Mount Type */}
					<div>
						<label className="block text-sm font-medium text-space-800 mb-2">
							Where will the dish be mounted?
						</label>
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
							{mountOptions.map((option) => (
								<button
									type="button"
									key={option.value}
									onClick={() =>
										setFactors((prev) => ({
											...prev,
											mountType: option.value as CostFactors["mountType"],
										}))
									}
									className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
										factors.mountType === option.value
											? "border-cyan-500 bg-cyan-50 text-cyan-700"
											: "border-slate-200 hover:border-slate-300 text-slate-700"
									}`}
								>
									{option.label}
									{option.addition > 0 && (
										<span className="block text-xs text-slate-500">+${option.addition}</span>
									)}
								</button>
							))}
						</div>
					</div>

					{/* Cable Length */}
					<div>
						<label className="block text-sm font-medium text-space-800 mb-2">
							Approximate cable length needed?
						</label>
						<div className="grid grid-cols-3 gap-2">
							{cableOptions.map((option) => (
								<button
									type="button"
									key={option.value}
									onClick={() =>
										setFactors((prev) => ({
											...prev,
											cableLength: option.value as CostFactors["cableLength"],
										}))
									}
									className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
										factors.cableLength === option.value
											? "border-cyan-500 bg-cyan-50 text-cyan-700"
											: "border-slate-200 hover:border-slate-300 text-slate-700"
									}`}
								>
									{option.label}
									{option.addition > 0 && (
										<span className="block text-xs text-slate-500">+${option.addition}</span>
									)}
								</button>
							))}
						</div>
					</div>

					{/* Roof Access */}
					<div>
						<label className="block text-sm font-medium text-space-800 mb-2">
							What's your roof access like?
						</label>
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
							{accessOptions.map((option) => (
								<button
									type="button"
									key={option.value}
									onClick={() =>
										setFactors((prev) => ({
											...prev,
											roofAccess: option.value as CostFactors["roofAccess"],
										}))
									}
									className={`p-3 rounded-lg border-2 text-sm font-medium transition-all text-left ${
										factors.roofAccess === option.value
											? "border-cyan-500 bg-cyan-50 text-cyan-700"
											: "border-slate-200 hover:border-slate-300 text-slate-700"
									}`}
								>
									{option.label}
									{option.addition > 0 && (
										<span className="block text-xs text-slate-500">+${option.addition}</span>
									)}
								</button>
							))}
						</div>
					</div>

					{/* Add-ons */}
					<div>
						<label className="block text-sm font-medium text-space-800 mb-2">
							Optional Add-ons
						</label>
						<div className="space-y-2">
							<label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
								<input
									type="checkbox"
									checked={factors.meshWifi}
									onChange={(e) =>
										setFactors((prev) => ({ ...prev, meshWifi: e.target.checked }))
									}
									className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
								/>
								<div className="flex-1">
									<span className="font-medium text-slate-700">Mesh WiFi Setup (up to 3 nodes)</span>
									<span className="text-slate-500"> — +$150</span>
								</div>
							</label>
							<label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
								<input
									type="checkbox"
									checked={factors.expedited}
									onChange={(e) =>
										setFactors((prev) => ({ ...prev, expedited: e.target.checked }))
									}
									className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
								/>
								<div className="flex-1">
									<span className="font-medium text-slate-700">Expedited Scheduling</span>
									<span className="text-slate-500"> — +$75</span>
								</div>
							</label>
						</div>
					</div>

					{/* Divider */}
					<hr className="border-slate-200" />

					{/* Total */}
					<div className="flex items-center justify-between">
						<div>
							<div className="text-sm text-slate-500">Estimated Total</div>
							<div className="text-3xl font-bold text-space-800">${total}</div>
							<div className="text-xs text-slate-500">
								{isComplete ? "Based on your selections" : "Complete selections above"}
							</div>
						</div>
						<Link
							href={`/book?estimate=${total}`}
							className={`btn-primary ${!isComplete ? "opacity-50 pointer-events-none" : ""}`}
						>
							Book Now
						</Link>
					</div>

					<p className="text-xs text-slate-500 text-center">
						This is an estimate only. Final pricing confirmed after site assessment. No hidden fees.
					</p>
				</div>
			</div>
		</div>
	);
}

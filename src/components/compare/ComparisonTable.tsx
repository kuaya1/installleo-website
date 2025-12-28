"use client";

export interface Feature {
	name: string;
	kuiper: string;
	starlink: string;
	winner: "kuiper" | "starlink" | "tie" | "pending";
	notes: string;
}

interface ComparisonTableProps {
	category: string;
	features: Feature[];
}

export function ComparisonTable({ category, features }: ComparisonTableProps) {
	const getWinnerBadge = (winner: Feature["winner"]) => {
		switch (winner) {
			case "kuiper":
				return (
					<span className="inline-flex items-center gap-1 text-xs font-medium text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full">
						<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						Kuiper
					</span>
				);
			case "starlink":
				return (
					<span className="inline-flex items-center gap-1 text-xs font-medium text-space-700 bg-slate-100 px-2 py-0.5 rounded-full">
						<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						Starlink
					</span>
				);
			case "tie":
				return (
					<span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
						Even
					</span>
				);
			case "pending":
				return (
					<span className="inline-flex items-center gap-1 text-xs font-medium text-warning-amber bg-amber-50 px-2 py-0.5 rounded-full">
						<svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
								clipRule="evenodd"
							/>
						</svg>
						TBD
					</span>
				);
		}
	};

	return (
		<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
			<div className="bg-space-800 px-6 py-4">
				<h3 className="text-lg font-semibold text-white">{category}</h3>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full">
					<thead>
						<tr className="border-b border-slate-200 bg-slate-50">
							<th className="text-left py-3 px-4 font-medium text-slate-600 w-1/4">Feature</th>
							<th className="text-left py-3 px-4 font-medium text-cyan-600 w-1/4">
								<div className="flex items-center gap-2">
									<div className="w-6 h-6 rounded-md bg-cyan-500/10 flex items-center justify-center">
										<span className="text-xs font-bold text-cyan-600">K</span>
									</div>
									Project Kuiper
								</div>
							</th>
							<th className="text-left py-3 px-4 font-medium text-space-700 w-1/4">
								<div className="flex items-center gap-2">
									<div className="w-6 h-6 rounded-md bg-space-800/10 flex items-center justify-center">
										<span className="text-xs font-bold text-space-800">S</span>
									</div>
									Starlink
								</div>
							</th>
							<th className="text-left py-3 px-4 font-medium text-slate-600 w-1/4">Winner</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-slate-100">
						{features.map((feature) => (
							<tr key={feature.name} className="hover:bg-slate-50 transition-colors">
								<td className="py-4 px-4">
									<div className="font-medium text-space-800">{feature.name}</div>
									<div className="text-xs text-slate-500 mt-0.5">{feature.notes}</div>
								</td>
								<td
									className={`py-4 px-4 ${feature.winner === "kuiper" ? "bg-cyan-50/50" : ""}`}
								>
									<span className="text-sm text-slate-700">{feature.kuiper}</span>
								</td>
								<td
									className={`py-4 px-4 ${feature.winner === "starlink" ? "bg-slate-50" : ""}`}
								>
									<span className="text-sm text-slate-700">{feature.starlink}</span>
								</td>
								<td className="py-4 px-4">{getWinnerBadge(feature.winner)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

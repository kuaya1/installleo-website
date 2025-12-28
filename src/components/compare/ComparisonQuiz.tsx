"use client";

import { useState } from "react";
import Link from "next/link";

interface Question {
	id: string;
	question: string;
	options: {
		label: string;
		value: string;
		points: { kuiper: number; starlink: number };
	}[];
}

const questions: Question[] = [
	{
		id: "timing",
		question: "When do you need satellite internet service?",
		options: [
			{
				label: "As soon as possible",
				value: "now",
				points: { kuiper: 0, starlink: 3 },
			},
			{
				label: "Within the next 6 months",
				value: "soon",
				points: { kuiper: 1, starlink: 2 },
			},
			{
				label: "I can wait for the best option",
				value: "flexible",
				points: { kuiper: 2, starlink: 1 },
			},
		],
	},
	{
		id: "budget",
		question: "What's your monthly budget for internet service?",
		options: [
			{
				label: "Under $100/month",
				value: "low",
				points: { kuiper: 2, starlink: 0 },
			},
			{
				label: "$100-150/month",
				value: "medium",
				points: { kuiper: 2, starlink: 1 },
			},
			{
				label: "$150+/month",
				value: "high",
				points: { kuiper: 1, starlink: 2 },
			},
		],
	},
	{
		id: "speed",
		question: "What's most important to you?",
		options: [
			{
				label: "Fastest possible speeds",
				value: "speed",
				points: { kuiper: 2, starlink: 1 },
			},
			{
				label: "Reliable, consistent connection",
				value: "reliability",
				points: { kuiper: 1, starlink: 2 },
			},
			{
				label: "Best value for money",
				value: "value",
				points: { kuiper: 2, starlink: 1 },
			},
		],
	},
	{
		id: "use",
		question: "Primary use case for your internet?",
		options: [
			{
				label: "Home/family use (streaming, browsing)",
				value: "home",
				points: { kuiper: 1, starlink: 2 },
			},
			{
				label: "Remote work/business",
				value: "work",
				points: { kuiper: 2, starlink: 2 },
			},
			{
				label: "RV/Mobile use",
				value: "mobile",
				points: { kuiper: 1, starlink: 3 },
			},
			{
				label: "Rural property/farm",
				value: "rural",
				points: { kuiper: 2, starlink: 2 },
			},
		],
	},
	{
		id: "amazon",
		question: "Are you an Amazon Prime member?",
		options: [
			{
				label: "Yes, and I use Amazon services often",
				value: "heavy",
				points: { kuiper: 3, starlink: 0 },
			},
			{
				label: "Yes, but just for shipping",
				value: "light",
				points: { kuiper: 2, starlink: 0 },
			},
			{
				label: "No",
				value: "no",
				points: { kuiper: 0, starlink: 1 },
			},
		],
	},
];

export function ComparisonQuiz() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState<Record<string, string>>({});
	const [scores, setScores] = useState({ kuiper: 0, starlink: 0 });
	const [showResults, setShowResults] = useState(false);

	const handleAnswer = (
		questionId: string,
		value: string,
		points: { kuiper: number; starlink: number }
	) => {
		setAnswers((prev) => ({ ...prev, [questionId]: value }));
		setScores((prev) => ({
			kuiper: prev.kuiper + points.kuiper,
			starlink: prev.starlink + points.starlink,
		}));

		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion((prev) => prev + 1);
		} else {
			setShowResults(true);
		}
	};

	const resetQuiz = () => {
		setCurrentQuestion(0);
		setAnswers({});
		setScores({ kuiper: 0, starlink: 0 });
		setShowResults(false);
	};

	const getRecommendation = () => {
		const diff = scores.kuiper - scores.starlink;
		if (diff >= 3) {
			return {
				winner: "kuiper",
				title: "Project Kuiper is Your Best Match",
				description:
					"Based on your answers, waiting for Amazon's Project Kuiper makes sense. You're flexible on timing, value-conscious, and could benefit from Amazon ecosystem integration.",
				action: "Join the Kuiper waitlist to be notified when it launches in your area.",
			};
		}
		if (diff <= -3) {
			return {
				winner: "starlink",
				title: "Starlink is Your Best Match",
				description:
					"Based on your answers, Starlink is the right choice. You need service now, value proven reliability, or have mobile/RV needs that Starlink already serves.",
				action: "Schedule a professional Starlink installation today.",
			};
		}
		return {
			winner: "both",
			title: "Either Could Work Well for You",
			description:
				"Your needs are balanced between both services. Consider Starlink if you need service immediately, or wait for Kuiper if better pricing is your priority.",
			action: "Talk to our experts to help you decide.",
		};
	};

	if (showResults) {
		const recommendation = getRecommendation();

		return (
			<div className="max-w-2xl mx-auto">
				<div className="card-elevated text-center">
					{/* Score visualization */}
					<div className="flex items-center justify-center gap-4 mb-8">
						<div className="text-center">
							<div
								className={`w-20 h-20 rounded-2xl flex items-center justify-center ${recommendation.winner === "kuiper" || recommendation.winner === "both" ? "bg-cyan-500 text-white" : "bg-slate-100 text-slate-500"}`}
							>
								<span className="text-2xl font-bold">{scores.kuiper}</span>
							</div>
							<div className="mt-2 text-sm font-medium text-slate-600">Kuiper</div>
						</div>
						<div className="text-slate-400 font-bold">vs</div>
						<div className="text-center">
							<div
								className={`w-20 h-20 rounded-2xl flex items-center justify-center ${recommendation.winner === "starlink" || recommendation.winner === "both" ? "bg-space-800 text-white" : "bg-slate-100 text-slate-500"}`}
							>
								<span className="text-2xl font-bold">{scores.starlink}</span>
							</div>
							<div className="mt-2 text-sm font-medium text-slate-600">Starlink</div>
						</div>
					</div>

					<h3 className="text-2xl font-bold text-space-800 mb-4">{recommendation.title}</h3>
					<p className="text-slate-600 mb-6">{recommendation.description}</p>
					<p className="text-sm font-medium text-cyan-600 mb-8">{recommendation.action}</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						{recommendation.winner === "kuiper" || recommendation.winner === "both" ? (
							<Link href="#waitlist" className="btn-primary">
								Join Kuiper Waitlist
							</Link>
						) : null}
						{recommendation.winner === "starlink" || recommendation.winner === "both" ? (
							<Link href="/services/residential-installation" className="btn-secondary">
								Schedule Starlink Install
							</Link>
						) : null}
						<button type="button" onClick={resetQuiz} className="btn-ghost">
							Retake Quiz
						</button>
					</div>
				</div>
			</div>
		);
	}

	const question = questions[currentQuestion];

	return (
		<div className="max-w-2xl mx-auto">
			{/* Progress bar */}
			<div className="mb-8">
				<div className="flex justify-between text-sm text-slate-500 mb-2">
					<span>
						Question {currentQuestion + 1} of {questions.length}
					</span>
					<span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% complete</span>
				</div>
				<div className="h-2 bg-slate-200 rounded-full overflow-hidden">
					<div
						className="h-full bg-gradient-to-r from-cyan-500 to-signal-green transition-all duration-300"
						style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
					/>
				</div>
			</div>

			{/* Question */}
			<div className="card-elevated">
				<h3 className="text-xl font-semibold text-space-800 mb-6">{question.question}</h3>
				<div className="space-y-3">
					{question.options.map((option) => (
						<button
							type="button"
							key={option.value}
							onClick={() => handleAnswer(question.id, option.value, option.points)}
							className="w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/50 transition-all duration-200 group"
						>
							<span className="font-medium text-slate-700 group-hover:text-space-800">
								{option.label}
							</span>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

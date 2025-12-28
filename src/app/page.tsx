import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ValueProposition } from "@/components/home/ValueProposition";
import { ComparisonPreview } from "@/components/home/ComparisonPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { WhyProfessional } from "@/components/home/WhyProfessional";
import { Testimonials } from "@/components/home/Testimonials";
import { PreLaunchCTA } from "@/components/home/PreLaunchCTA";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
	return (
		<>
			{/* Hero: Pre-launch positioning + primary lead capture */}
			<HeroSection />

			{/* Trust indicators: Credibility without operating history */}
			<TrustBar />

			{/* Value Props: Why engage now before Kuiper launches */}
			<ValueProposition />

			{/* Comparison Preview: Kuiper vs Starlink teaser → full page */}
			<ComparisonPreview />

			{/* Process: How professional installation works */}
			<HowItWorks />

			{/* Coverage: Geographic targeting + availability check */}
			<ServiceAreas />

			{/* Why Professional: Justify service vs DIY */}
			<WhyProfessional />

			{/* Social Proof: Reviews, installations, authority */}
			<Testimonials />

			{/* Pre-Launch CTA: Email capture for availability alerts */}
			<PreLaunchCTA />

			{/* FAQ: SEO + objection handling */}
			<FAQSection />

			{/* Final CTA: Last conversion opportunity */}
			<FinalCTA />
		</>
	);
}

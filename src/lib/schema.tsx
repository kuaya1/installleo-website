// Schema.org structured data types
// Note: Using plain object types instead of schema-dts for simplicity

// biome-ignore lint/suspicious/noExplicitAny: Schema.org types are complex
type SchemaType = Record<string, any>;

// Organization Schema
export function getOrganizationSchema(): SchemaType {
	return {
		"@type": "Organization",
		name: "InstallLEO",
		alternateName: "LEO Installation Network",
		url: "https://installleo.com",
		logo: "https://installleo.com/logo.png",
		description:
			"America's LEO Satellite Installation Authority. Professional Project Kuiper and Starlink installation services nationwide.",
		foundingDate: "2024",
		founder: {
			"@type": "Person",
			name: "Eric Enk",
		},
		address: {
			"@type": "PostalAddress",
			addressCountry: "US",
		},
		contactPoint: {
			"@type": "ContactPoint",
			telephone: "+1-888-LEO-INSTALL",
			contactType: "customer service",
			availableLanguage: "English",
		},
		sameAs: [
			"https://twitter.com/installleo",
			"https://linkedin.com/company/installleo",
			"https://youtube.com/@installleo",
		],
		numberOfEmployees: {
			"@type": "QuantitativeValue",
			minValue: 50,
			maxValue: 500,
		},
		areaServed: {
			"@type": "Country",
			name: "United States",
		},
		knowsAbout: [
			"LEO Satellite Internet",
			"Starlink Installation",
			"Project Kuiper",
			"Satellite Internet Installation",
		],
	};
}

// WebSite Schema
export function getWebSiteSchema(): SchemaType {
	return {
		"@type": "WebSite",
		name: "InstallLEO",
		url: "https://installleo.com",
		description: "America's LEO Satellite Installation Authority",
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: "https://installleo.com/search?q={search_term_string}",
			},
		},
	};
}

// Local Business Schema (for state pages)
export function getLocalBusinessSchema(state: string, stateName: string): SchemaType {
	return {
		"@type": "LocalBusiness",
		"@id": `https://installleo.com/coverage/states/${state}`,
		name: `InstallLEO - ${stateName}`,
		description: `Professional LEO satellite installation services in ${stateName}. Expert Starlink and Kuiper installation.`,
		url: `https://installleo.com/coverage/states/${state}`,
		telephone: "+1-888-LEO-INSTALL",
		priceRange: "$$",
		areaServed: {
			"@type": "State",
			name: stateName,
			containedInPlace: {
				"@type": "Country",
				name: "United States",
			},
		},
		parentOrganization: {
			"@type": "Organization",
			name: "InstallLEO",
			url: "https://installleo.com",
		},
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "500",
			bestRating: "5",
			worstRating: "1",
		},
	};
}

// FAQ Schema
export function getFAQSchema(faqs: { question: string; answer: string }[]): SchemaType {
	return {
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};
}

// HowTo Schema (for installation process)
export function getHowToSchema(): SchemaType {
	return {
		"@type": "HowTo",
		name: "How to Get Professional LEO Satellite Internet Installation",
		description:
			"Step-by-step guide to getting professional Starlink or Project Kuiper installation for your home or business.",
		totalTime: "PT4H",
		estimatedCost: {
			"@type": "MonetaryAmount",
			currency: "USD",
			value: "299-699",
		},
		step: [
			{
				"@type": "HowToStep",
				position: 1,
				name: "Check Availability",
				text: "Enter your address to check LEO satellite service availability and get personalized recommendations for your location.",
				url: "https://installleo.com/coverage/check-availability",
			},
			{
				"@type": "HowToStep",
				position: 2,
				name: "Request Site Assessment",
				text: "Our experts evaluate your property for optimal antenna placement, considering sky visibility, roof type, and cable routing.",
				url: "https://installleo.com/assessment",
			},
			{
				"@type": "HowToStep",
				position: 3,
				name: "Schedule Installation",
				text: "Choose an installation package and schedule a convenient time. Most installations complete within 2-4 hours.",
				url: "https://installleo.com/services/residential-installation",
			},
			{
				"@type": "HowToStep",
				position: 4,
				name: "Professional Installation",
				text: "Certified installers mount your dish, run weatherproof cabling, configure your network, and verify optimal performance.",
			},
		],
	};
}

// Article Schema (for learn pages)
export function getArticleSchema(article: {
	title: string;
	description: string;
	url: string;
	datePublished: string;
	dateModified?: string;
	author?: string;
}): SchemaType {
	return {
		"@type": "Article",
		headline: article.title,
		description: article.description,
		url: article.url,
		datePublished: article.datePublished,
		dateModified: article.dateModified || article.datePublished,
		author: {
			"@type": "Organization",
			name: "InstallLEO",
			url: "https://installleo.com",
		},
		publisher: {
			"@type": "Organization",
			name: "InstallLEO",
			logo: {
				"@type": "ImageObject",
				url: "https://installleo.com/logo.png",
			},
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": article.url,
		},
	};
}

// Component to render JSON-LD
interface JsonLdProps {
	// biome-ignore lint/suspicious/noExplicitAny: Schema.org types are complex
	schema: Record<string, any>;
}

export function JsonLd({ schema }: JsonLdProps) {
	const jsonLd = {
		"@context": "https://schema.org",
		...schema,
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires innerHTML
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}

// Combined schema for homepage
export function getHomePageSchemas() {
	return [
		getOrganizationSchema(),
		getWebSiteSchema(),
		getHowToSchema(),
	];
}

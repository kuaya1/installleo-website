import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://installleo.com"),
	title: {
		default: "InstallLEO | Professional LEO Satellite Installation Experts",
		template: "%s | InstallLEO",
	},
	description:
		"America's LEO Satellite Installation Authority. Professional Project Kuiper and Starlink installation services nationwide. 500+ installations. SpaceX-certified experts.",
	keywords: [
		"LEO satellite installation",
		"Project Kuiper installation",
		"Starlink installation",
		"satellite internet installation",
		"professional satellite installer",
		"Amazon satellite internet",
		"rural internet solution",
	],
	authors: [{ name: "InstallLEO", url: "https://installleo.com" }],
	creator: "InstallLEO",
	publisher: "InstallLEO",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://installleo.com",
		siteName: "InstallLEO",
		title: "InstallLEO | America's LEO Satellite Installation Authority",
		description:
			"Professional Project Kuiper and Starlink installation services nationwide. From the experts behind 500+ satellite installations.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "InstallLEO - Professional LEO Satellite Installation",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "InstallLEO | Professional LEO Satellite Installation",
		description:
			"America's LEO Satellite Installation Authority. Professional installation services nationwide.",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</head>
			<body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

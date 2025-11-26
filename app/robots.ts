/**
 * =============================================================================
 * ROBOTS.TXT - Next.js 15 Dynamic Route
 * =============================================================================
 *
 * This generates the robots.txt file dynamically using Next.js 15 conventions.
 * It provides the same functionality as next-sitemap but with more control.
 *
 * IMPORTANT: This file generates /robots.txt which tells search engines:
 * - Which pages they can crawl
 * - Which pages to avoid
 * - Where to find the sitemap
 *
 * =============================================================================
 */

import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://installleo.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Default rules for all search engines
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",           // API endpoints
          "/thank-you",      // Post-conversion page (no value in indexing)
          "/admin/",         // Admin pages (if any)
          "/_next/",         // Next.js internal assets
          "/private/",       // Private pages (if any)
        ],
      },
      // Googlebot-specific rules (optional - for fine-tuning)
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/thank-you",
        ],
      },
      // Block AI training crawlers (optional - uncomment if desired)
      // {
      //   userAgent: "GPTBot",
      //   disallow: "/",
      // },
      // {
      //   userAgent: "ChatGPT-User",
      //   disallow: "/",
      // },
      // {
      //   userAgent: "CCBot",
      //   disallow: "/",
      // },
      // {
      //   userAgent: "anthropic-ai",
      //   disallow: "/",
      // },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

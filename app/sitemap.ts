/**
 * =============================================================================
 * SITEMAP.XML - Next.js 15 Dynamic Sitemap Generation
 * =============================================================================
 *
 * This generates the sitemap.xml dynamically using Next.js 15 conventions.
 * It provides automatic updates and can include dynamic routes.
 *
 * SITEMAP STRATEGY:
 * - Homepage: priority 1.0, daily updates
 * - Service pages: priority 0.9, weekly updates
 * - Content pages: priority 0.8, weekly updates
 * - Legal pages: priority 0.3, yearly updates
 *
 * FOR FUTURE EXPANSION:
 * - Add service area pages dynamically from database
 * - Add blog posts dynamically from CMS
 * - Add testimonial pages
 *
 * =============================================================================
 */

import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://installleo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core pages - manually defined for accuracy
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // ==========================================================================
  // FUTURE: Dynamic Service Area Pages
  // ==========================================================================
  // When you add service area pages, generate them dynamically:
  //
  // const serviceAreas = [
  //   { state: 'texas', city: 'austin' },
  //   { state: 'texas', city: 'houston' },
  //   { state: 'california', city: 'los-angeles' },
  //   // ... fetch from database
  // ];
  //
  // const serviceAreaPages: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
  //   url: `${SITE_URL}/service-areas/${area.state}/${area.city}`,
  //   lastModified: currentDate,
  //   changeFrequency: 'weekly',
  //   priority: 0.9,
  // }));

  // ==========================================================================
  // FUTURE: Dynamic Blog Posts
  // ==========================================================================
  // When you add a blog, generate posts dynamically:
  //
  // const blogPosts = await getBlogPosts(); // From CMS or database
  //
  // const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
  //   url: `${SITE_URL}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'weekly',
  //   priority: 0.7,
  // }));

  // Combine all pages
  return [
    ...staticPages,
    // ...serviceAreaPages,
    // ...blogPages,
  ];
}

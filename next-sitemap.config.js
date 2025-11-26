/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://installleo.com',
  
  // Generate robots.txt alongside sitemap
  generateRobotsTxt: true,
  
  // Generate index sitemap for large sites
  generateIndexSitemap: true,
  
  // Sitemap size limit (URLs per sitemap)
  sitemapSize: 5000,
  
  // Change frequency defaults
  changefreq: 'weekly',
  
  // Priority defaults
  priority: 0.7,
  
  // Exclude these paths from sitemap
  exclude: [
    '/thank-you',        // Post-conversion page
    '/api/*',            // API routes
    '/admin/*',          // Admin pages (if any)
    '/_*',               // Next.js internal routes
    '/404',              // Error pages
    '/500',
  ],
  
  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/thank-you',
          '/admin/',
          '/_next/',
        ],
      },
      // Block AI crawlers (optional - uncomment if desired)
      // {
      //   userAgent: 'GPTBot',
      //   disallow: '/',
      // },
      // {
      //   userAgent: 'ChatGPT-User',
      //   disallow: '/',
      // },
    ],
    
    // Additional sitemaps (e.g., for blog, service areas)
    additionalSitemaps: [
      // Uncomment when you add these features
      // 'https://installleo.com/sitemap-service-areas.xml',
      // 'https://installleo.com/sitemap-blog.xml',
    ],
  },
  
  // Transform function to customize each URL entry
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = config.priority;
    let changefreq = config.changefreq;
    
    // Homepage gets highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    
    // Service area pages - high priority for local SEO
    if (path.startsWith('/service-areas/')) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    
    // Blog/content pages
    if (path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    
    // Static pages (about, contact, etc.)
    if (['/about', '/contact', '/faq', '/pricing'].includes(path)) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    
    // Legal pages - lower priority
    if (['/privacy', '/terms'].includes(path)) {
      priority = 0.3;
      changefreq = 'yearly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  
  // Additional paths to include (static generation)
  additionalPaths: async (config) => {
    const result = [];
    
    // Add any programmatically generated paths here
    // Example: Service area pages
    // const serviceAreas = await getServiceAreas();
    // for (const area of serviceAreas) {
    //   result.push({
    //     loc: `/service-areas/${area.state}/${area.city}`,
    //     changefreq: 'weekly',
    //     priority: 0.9,
    //     lastmod: new Date().toISOString(),
    //   });
    // }
    
    return result;
  },
  
  // Auto-detect lastmod from file modification time
  autoLastmod: true,
  
  // Output directory
  outDir: 'public',
};

module.exports = config;

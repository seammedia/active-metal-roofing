/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.activemetalroofing.com.au',
  generateRobotsText: false, // We manage robots.txt manually
  generateIndexSitemap: false,
  exclude: [
    '/locations/*', // Exclude /locations/ paths as they redirect to root-level
    '/*-ads', // Exclude old advertising pages
    '/*-ads/*',
    '/wp-content/*', // Exclude WordPress content
    '/index.php/*', // Exclude old WordPress URLs
  ],
};

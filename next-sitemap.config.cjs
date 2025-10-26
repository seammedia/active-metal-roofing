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
    '/commercial-re-roofing', // Redirect to /services/commercial-re-roofing
    '/commercial-roofing', // Redirect to /services/commercial-roofing
    '/architectural-cladding', // Redirect to /services/architectural-cladding
    '/industrial-roofing', // Redirect to /services/industrial-roofing
    '/roof-inspections', // Redirect to /services/roof-inspections
    '/colorbond-roof-replacement', // Redirect to /services/colorbond-roof-replacement
    '/metal-roof-replacement', // Redirect to /services/metal-roof-replacement
    '/metal-roof-restoration', // Redirect to /services/metal-roof-restoration
    '/roof-repair', // Redirect to /services/roof-repair
    '/roof-restoration', // Redirect to /services/roof-restoration
    '/melbourne-cbd', // Redirect to /melbourne
  ],
};

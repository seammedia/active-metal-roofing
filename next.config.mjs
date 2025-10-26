/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  // Vercel image optimization enabled (images config removed)

  async redirects() {
    return [
      // Fix case-sensitive URL issue - Melbourne with capital M
      {
        source: '/Melbourne',
        destination: '/melbourne',
        permanent: true,
      },
      // Redirect /contact-us to /contact
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      // Redirect /home to homepage
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Redirect old blog post URLs to blog index (these posts don't exist)
      {
        source: '/metal-roofing-care-guide-when-to-clean-restore-or-upgrade',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/metal-roofing-and-what-roof-profile-you-should-consider-for-this-type-of-roof',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/what-is-architectural-cladding-your-top-options-guide',
        destination: '/architectural-cladding',
        permanent: true,
      },
      // Redirect old project pages to projects page
      {
        source: '/glen-waverly-primary-school',
        destination: '/projects',
        permanent: true,
      },
      // Redirect /pages/* to root level
      {
        source: '/pages/:path*',
        destination: '/:path*',
        permanent: true,
      },
      // Old WordPress URLs with index.php
      {
        source: '/index.php/:path*',
        destination: '/:path*',
        permanent: true,
      },
      // roof-reports doesn't exist, redirect to services
      {
        source: '/roof-reports',
        destination: '/services/roof-inspections',
        permanent: true,
      },
      // Remove trailing slashes (Next.js config already has trailingSlash: false)
      // But add explicit redirects for common ones
      {
        source: '/frankston/',
        destination: '/frankston',
        permanent: true,
      },
      {
        source: '/melbourne/',
        destination: '/melbourne',
        permanent: true,
      },
      {
        source: '/berwick/',
        destination: '/berwick',
        permanent: true,
      },
      {
        source: '/cranbourne/',
        destination: '/cranbourne',
        permanent: true,
      },
      {
        source: '/dandenong/',
        destination: '/dandenong',
        permanent: true,
      },
      {
        source: '/services/:path/',
        destination: '/services/:path',
        permanent: true,
      },
      {
        source: '/locations/:path/',
        destination: '/locations/:path',
        permanent: true,
      },
      // Redirect old advertising landing pages (these don't exist in new site)
      {
        source: '/guttering-ads',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/industrial-roofing-ads',
        destination: '/services/industrial-roofing',
        permanent: true,
      },
      {
        source: '/architectural-cladding-ads',
        destination: '/services/architectural-cladding',
        permanent: true,
      },
      {
        source: '/commercial-roofing-ads',
        destination: '/services/commercial-roofing',
        permanent: true,
      },
      {
        source: '/skylight-ads',
        destination: '/services',
        permanent: true,
      },
      // Redirect old WordPress content uploads
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      // Redirect old blog post with /feed/ suffix
      {
        source: '/metal-roofing-and-what-roof-profile-you-should-consider-for-this-type-of-roof/feed',
        destination: '/blog',
        permanent: true,
      },
      // Redirect /locations/[slug] to /[slug] for consistency
      {
        source: '/locations/melbourne-cbd',
        destination: '/melbourne',
        permanent: true,
      },
      {
        source: '/locations/frankston',
        destination: '/frankston',
        permanent: true,
      },
      {
        source: '/locations/berwick',
        destination: '/berwick',
        permanent: true,
      },
      {
        source: '/locations/cranbourne',
        destination: '/cranbourne',
        permanent: true,
      },
      {
        source: '/locations/pakenham',
        destination: '/pakenham',
        permanent: true,
      },
      {
        source: '/locations/langwarrin',
        destination: '/langwarrin',
        permanent: true,
      },
      // Redirect root-level service pages to /services/[slug] for canonical URLs
      {
        source: '/commercial-re-roofing',
        destination: '/services/commercial-re-roofing',
        permanent: true,
      },
      {
        source: '/commercial-roofing',
        destination: '/services/commercial-roofing',
        permanent: true,
      },
      {
        source: '/architectural-cladding',
        destination: '/services/architectural-cladding',
        permanent: true,
      },
      {
        source: '/industrial-roofing',
        destination: '/services/industrial-roofing',
        permanent: true,
      },
      {
        source: '/roof-inspections',
        destination: '/services/roof-inspections',
        permanent: true,
      },
      {
        source: '/colorbond-roof-replacement',
        destination: '/services/colorbond-roof-replacement',
        permanent: true,
      },
      {
        source: '/metal-roof-replacement',
        destination: '/services/metal-roof-replacement',
        permanent: true,
      },
      {
        source: '/metal-roof-restoration',
        destination: '/services/metal-roof-restoration',
        permanent: true,
      },
      {
        source: '/roof-repair',
        destination: '/services/roof-repair',
        permanent: true,
      },
      {
        source: '/roof-restoration',
        destination: '/services/roof-restoration',
        permanent: true,
      },
      // Redirect /melbourne-cbd to /melbourne for consistency
      {
        source: '/melbourne-cbd',
        destination: '/melbourne',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

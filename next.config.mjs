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
    ];
  },
};

export default nextConfig;

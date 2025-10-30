import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Roofing News & Tips | Active Metal Roofing Blog',
  description: 'Commercial roofing news, tips and updates from Melbourne\'s trusted roofing experts. 22 years experience serving Victoria.',
};

const blogPosts = [
  {
    slug: 'why-premium-metal-roof-materials-matter-for-commercial-buildings',
    title: 'Why Premium Metal Roof Materials Matter for Commercial Buildings',
    excerpt: 'Discover why investing in premium metal roofing materials is crucial for commercial buildings. Learn about durability, maintenance savings, warranties, and material comparisons.',
    image: '/img/blog/why-premium-metal-roof-materials-matter-for-commercial-buildings.png',
    date: 'October 2025',
    readTime: '10 min read',
    category: 'Roofing Materials'
  },
  {
    slug: 'top-causes-of-leaks-on-commercial-buildings',
    title: 'Top Causes of Leaks on Commercial Buildings — and How to Prevent Them',
    excerpt: 'Discover the leading causes of commercial roof leaks and proven prevention strategies. Expert advice on protecting your business from water damage and costly repairs.',
    image: '/img/blog/top-causes-of-leaks-on-commercial-buildings.png',
    date: 'October 2025',
    readTime: '9 min read',
    category: 'Maintenance Tips'
  },
  {
    slug: '5-ways-to-detect-roof-leaks',
    title: '5 Ways to Detect Roof Leaks Early',
    excerpt: 'Learn how to detect roof leaks before they cause serious damage. Expert tips on identifying water damage, inspection techniques, and when to call professionals.',
    image: '/img/blog/5-ways-to-detect-roof-leaks.jpg',
    date: 'January 2025',
    readTime: '7 min read',
    category: 'Maintenance Tips'
  },
  {
    slug: 'how-to-prevent-damaged-roofs-in-carrum-downs',
    title: 'How to Prevent Damaged Roofs in Carrum Downs',
    excerpt: 'Expert tips on preventing roof damage in Carrum Downs. Learn about maintenance, inspections, and protective measures to extend your roof\'s lifespan in coastal environments.',
    image: '/img/blog/how-to-prevent-damaged-roofs-in-carrum-downs.jpg',
    date: 'January 2025',
    readTime: '8 min read',
    category: 'Maintenance Tips'
  },
  {
    slug: 'how-much-is-a-colorbond-roof',
    title: 'How Much is a Colorbond Roof? 2025 Cost Guide Australia',
    excerpt: 'Complete guide to Colorbond roofing costs in Australia. Learn about price per m2, installation costs, replacement prices, and use our cost calculator guide.',
    image: '/img/blog/how-much-is-a-colorbond-roof.jpg',
    date: 'January 2025',
    readTime: '10 min read',
    category: 'Pricing Guides'
  },
  {
    slug: 'how-far-should-metal-roof-overhang-gutters',
    title: 'How Far Should Metal Roof Overhang Gutters? Expert Guide',
    excerpt: 'Learn the optimal metal roof overhang distance for gutters. Expert guidance on measurements, installation tips, and common mistakes to avoid for proper water management.',
    image: '/img/blog/metal-roof-overhang-gutters.jpg',
    date: 'October 2025',
    readTime: '7 min read',
    category: 'Installation Guides'
  },
  {
    slug: 'commercial-metal-roofing-prices',
    title: 'Commercial Metal Roofing Prices: Complete Guide for Melbourne Businesses',
    excerpt: 'Understanding commercial metal roofing prices is crucial for making informed decisions about your business property investment. Learn about cost factors, materials, and ROI.',
    image: '/img/blog/commercial-metal-roofing-prices.jpg',
    date: 'October 2025',
    readTime: '8 min read',
    category: 'Pricing Guides'
  }
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006991] to-[#004d6d] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Roofing Insights & Expert Advice
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Stay informed with the latest commercial roofing news, tips, and guides from Melbourne's trusted experts.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Post Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#006991] text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#006991] transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center text-[#006991] font-semibold text-sm group-hover:gap-2 transition-all">
                    Read Article
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-12 text-center bg-gray-50 p-12 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Articles Coming Soon</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're regularly adding new content about commercial roofing, maintenance tips, industry trends, and more. Check back soon for new articles!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#006991] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Expert Roofing Advice?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our team is here to help with any questions about your commercial roofing project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0451866494"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#006991] bg-white hover:bg-gray-100 transition-colors rounded-md shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 0451 866 494
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white hover:bg-white hover:text-[#006991] transition-colors rounded-md"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

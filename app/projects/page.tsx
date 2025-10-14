import type { Metadata } from 'next';
import Link from 'next/link';
import RecentProjects from '@/components/RecentProjects';

export const metadata: Metadata = {
  title: 'Projects | Active Metal Roofing - Commercial & Industrial Roofing Melbourne',
  description: 'View our portfolio of completed commercial and industrial roofing projects across Melbourne and Victoria. Quality workmanship and on-time delivery guaranteed.',
  keywords: 'roofing projects, commercial roofing portfolio, industrial roofing melbourne, completed projects, roof restoration',
  openGraph: {
    title: 'Projects | Active Metal Roofing',
    description: 'View our portfolio of completed commercial and industrial roofing projects across Melbourne and Victoria.',
    url: 'https://activemetalroofing.com.au/projects',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#006991] to-[#6EC1E4] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover our portfolio of commercial and industrial roofing projects across Melbourne and Victoria.
            From roof restorations to new installations, we deliver excellence every time.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors text-lg font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>

      {/* All Projects Grid */}
      <RecentProjects showViewAll={false} />

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-[#7A7A7A] mb-8">
            Get in touch with our team for a free inspection and quote. We're ready to bring your roofing vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#61CE70] text-white font-semibold rounded-md hover:bg-[#50bd5f] transition-all shadow-lg text-lg"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:0451866494"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#006991] text-white font-semibold rounded-md hover:bg-[#005577] transition-all shadow-lg text-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call 0451 866 494
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

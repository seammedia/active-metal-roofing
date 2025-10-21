import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ServiceContactForm from '@/components/ServiceContactForm';
import ServiceSection from '@/components/ServiceSection';
import { services } from '@/lib/services-content';

const serviceSlug = 'industrial-roofing';
const locationName = 'Berwick';
const page = services[serviceSlug];

export const metadata: Metadata = {
  title: `${page.name} ${locationName} | Active Metal Roofing`,
  description: `${page.seo?.description || page.intro.body[0]} Professional service in ${locationName} and surrounding areas.`,
  openGraph: {
    title: `${page.name} ${locationName} | Active Metal Roofing`,
    description: `${page.seo?.description || page.intro.body[0]} Professional service in ${locationName} and surrounding areas.`,
    type: 'website',
    url: `https://activemetalroofing.com.au/berwick/${serviceSlug}`,
    images: [
      {
        url: `https://activemetalroofing.com.au${page.heroImage}`,
        width: 1200,
        height: 630,
        alt: `${page.name} in ${locationName}`,
      },
    ],
  },
};

export default function BerwickIndustrialRoofingPage() {
  return (
    <>
      <ServiceHero title={`${page.name} in ${locationName}`} image={page.heroImage} />
      <main className="bg-white">
        {/* Breadcrumb */}
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-[#7A7A7A]">
            <li>
              <a href="/" className="hover:text-[#006991] transition-colors">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/berwick" className="hover:text-[#006991] transition-colors">
                {locationName}
              </a>
            </li>
            <li>/</li>
            <li>
              <span className="text-[#212121] font-medium">{page.name}</span>
            </li>
          </ol>
        </nav>

        {/* Two-column: Intro + Contact Form */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Intro */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-6">
                {page.intro.title}
              </h2>
              {page.intro.body.map((para, i) => (
                <p key={i} className="text-[#7A7A7A] text-lg leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              <p className="text-[#7A7A7A] text-lg leading-relaxed mb-4">
                Serving {locationName} and the surrounding areas, our team brings local expertise and prompt service to every project.
              </p>
              {page.intro.bullets && page.intro.bullets.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {page.intro.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-[#61CE70] mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#212121] text-lg">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right Column - Contact Form (Sticky) */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <ServiceContactForm />
              </div>
            </aside>
          </div>
        </section>

        {/* Additional Sections */}
        {page.sections.map((section, i) => (
          <section
            key={i}
            className={`py-12 md:py-16 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <ServiceSection
                title={section.title}
                image={section.image}
                imageLeft={section.imageLeft}
                richText={
                  <div className="space-y-4">
                    {section.body.map((para, j) => (
                      <p key={j} className="text-[#7A7A7A] text-lg leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                }
              />
            </div>
          </section>
        ))}

        {/* Location-Specific CTA */}
        <section className="bg-[#A4D7F4] py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <p className="text-2xl md:text-3xl font-bold text-[#212121] mb-4">
              Need Expert {page.name} Services in {locationName}?
            </p>
            <p className="text-lg text-[#212121]/80 mb-6">
              Call us today for a free inspection and quote
            </p>
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
              Call Now: 0451 866 494
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

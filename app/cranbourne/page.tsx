import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/home';

export const metadata: Metadata = {
  title: 'Commercial Roofing Cranbourne | Active Metal Roofing',
  description: 'Professional metal roofing solutions for Cranbourne businesses and commercial properties. Licensed plumbers with 22 years experience.',
};

export default function CranbournePage() {
  const locationName = 'Cranbourne';

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006991] to-[#004d6b] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/60">/</li>
              <li>
                <span className="text-white font-medium">{locationName}</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Commercial Roofing Services in {locationName}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
            Professional metal roofing solutions for {locationName} businesses and commercial properties.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:0451866494"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#61CE70] text-white font-semibold rounded-md hover:bg-[#50bd5f] transition-all shadow-lg"
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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#006991] font-semibold rounded-md hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">
              Our Services in {locationName}
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-3xl mx-auto">
              We provide comprehensive commercial and industrial roofing solutions for businesses in {locationName} and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/cranbourne/${service.slug}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Service Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#212121] mb-2 group-hover:text-[#006991] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed mb-4">
                    {service.blurb}
                  </p>
                  <span className="inline-flex items-center text-[#006991] font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More
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
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">
              Why Choose Active Metal Roofing in {locationName}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#006991] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#212121] mb-2">Licensed & Insured</h3>
              <p className="text-[#7A7A7A]">Fully licensed registered plumbers with comprehensive insurance coverage.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#006991] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#212121] mb-2">22 Years Experience</h3>
              <p className="text-[#7A7A7A]">Over two decades of commercial and industrial roofing excellence.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#006991] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#212121] mb-2">Quality Workmanship</h3>
              <p className="text-[#7A7A7A]">Meticulous attention to detail and superior roofing solutions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#006991] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#212121] mb-2">On-Time Completion</h3>
              <p className="text-[#7A7A7A]">We respect your schedule and complete projects on time, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#A4D7F4] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[#212121]/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free inspection and quote for your {locationName} commercial roofing project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0451866494"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#006991] text-white font-semibold rounded-md hover:bg-[#005577] transition-all shadow-lg"
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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#006991] font-semibold rounded-md hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d401878.6164866446!2d145.04093314999997!3d-38.101188699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6735aa328748b%3A0xd5c2415d148e3cd5!2sActive%20Metal%20Roofing%20Commercial%20Contractors%20Melbourne!5e0!3m2!1sen!2sau!4v1760916390529!5m2!1sen!2sau"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

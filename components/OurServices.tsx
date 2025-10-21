import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/home';

export default function OurServices() {
  return (
    <section className="bg-[#0C0C0C] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Heading & CTA */}
          <div className="lg:col-span-4 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 !text-white">
              Our Services
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We specialize in commercial and industrial roofing solutions across Melbourne.
              From new installations to re-roofing, cladding, and inspections.
            </p>
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
              Call Now
            </a>
          </div>

          {/* Right Column - Service Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
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
        </div>
      </div>
    </section>
  );
}

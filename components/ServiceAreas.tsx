import Link from 'next/link';
import { serviceAreas } from '@/lib/home';
import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#006991] to-[#6EC1E4]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Service Areas
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Proudly serving Melbourne and surrounding areas
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all"
            >
              <MapPin className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="text-white font-medium">{area}</p>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-[#7A7A7A] mb-8 max-w-2xl mx-auto">
            Get a free inspection and quote today. Our licensed team is ready to help with your commercial or industrial roofing project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#61CE70] text-white font-semibold rounded-md hover:bg-[#50bd5f] transition-all shadow-lg text-lg"
            >
              Get Free Inspection
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
      </div>
    </section>
  );
}

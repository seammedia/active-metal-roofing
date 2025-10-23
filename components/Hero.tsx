import Image from 'next/image';
import QuoteForm from './QuoteForm';
import ShapeDivider from './ShapeDivider';

export default function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/active_metal_roofing_hero_03.png"
          alt="Commercial metal roofing project"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/15" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left Column - Hero Content */}
          <div className="text-white pt-8">
            <h1 className="text-white font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Commercial & Industrial Roofing{' '}
              <span className="text-[#6EC1E4]">Specialists</span>
            </h1>

            <p className="text-xl md:text-2xl mb-6 text-gray-100">
              Professional Metal Roofing Solutions Across Melbourne & Victoria
            </p>

            {/* Checklist */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-medium">22 Years of Experience</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Licensed Plumbers</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-medium">On-Time Completion Guaranteed</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0451866494"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary-dark transition-colors rounded-md shadow-lg"
                style={{ backgroundColor: '#006991' }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 0451 866 494
              </a>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div className="lg:pt-8">
            <QuoteForm />
          </div>

        </div>
      </div>

      {/* Shape Divider */}
      <ShapeDivider position="bottom" color="#ffffff" height={90} />
    </section>
  );
}

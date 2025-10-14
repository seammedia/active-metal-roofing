import { processSteps } from '@/lib/home';

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4">
            Our Process
          </h2>
          <p className="text-lg text-[#7A7A7A] max-w-2xl mx-auto">
            Simple, transparent, and efficient. Here's how we deliver exceptional roofing solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all group"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-[#006991] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#212121] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#7A7A7A] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on last item) */}
              {step.number < processSteps.length && (
                <div className="hidden lg:block absolute top-6 -right-3 w-6 h-0.5 bg-[#006991] opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

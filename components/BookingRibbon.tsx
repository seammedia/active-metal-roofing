export default function BookingRibbon() {
  return (
    <section className="relative bg-[#A4D7F4] py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg md:text-xl text-[#006991] font-medium text-center md:text-left">
            Need a roofing expert?{' '}
            <a
              href="tel:0451866494"
              className="font-bold hover:underline transition-all"
            >
              Call 0451 866 494
            </a>
            {' '}for a free inspection today!
          </p>
          <a
            href="tel:0451866494"
            className="flex-shrink-0 inline-flex items-center justify-center px-8 py-3 bg-white text-[#006991] font-semibold rounded-r-xl hover:shadow-lg transition-all"
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
            Book Now
          </a>
        </div>
      </div>
      {/* Decorative rounded edge */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-[#A4D7F4] rounded-l-full hidden md:block" />
    </section>
  );
}

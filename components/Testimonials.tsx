'use client';

import { useState } from 'react';
import { testimonials } from '@/lib/home';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#7A7A7A]">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-2xl p-8 md:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <svg
                className="w-12 h-12 text-[#006991] opacity-50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#FFB800] fill-current"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-xl md:text-2xl text-[#212121] text-center mb-8 leading-relaxed font-medium">
              "{current.quote}"
            </p>

            {/* Author */}
            <div className="text-center">
              <p className="font-bold text-[#212121] text-lg">{current.name}</p>
              <p className="text-[#7A7A7A]">{current.company}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white border-2 border-[#006991] text-[#006991] rounded-full flex items-center justify-center hover:bg-[#006991] hover:text-white transition-all shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white border-2 border-[#006991] text-[#006991] rounded-full flex items-center justify-center hover:bg-[#006991] hover:text-white transition-all shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#006991] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

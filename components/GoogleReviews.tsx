'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Review {
  id: string;
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

// Temporary static reviews - Replace with API call or update from your Google Business reviews
const staticReviews: Review[] = [
  {
    id: '1',
    author_name: 'John Smith',
    rating: 5,
    relative_time_description: 'a month ago',
    text: 'Active Metal Roofing did an outstanding job on our warehouse re-roofing project. Professional, on-time, and excellent quality.',
    time: Date.now() - 30 * 24 * 60 * 60 * 1000,
    author_url: 'https://www.google.com/maps/contrib/USER_ID',
    profile_photo_url: '/img/placeholder-avatar.png'
  },
  {
    id: '2',
    author_name: 'Sarah Johnson',
    rating: 5,
    relative_time_description: '2 months ago',
    text: 'Fantastic service from start to finish. The team was knowledgeable, efficient, and cleaned up perfectly. Highly recommend for commercial roofing work.',
    time: Date.now() - 60 * 24 * 60 * 60 * 1000,
    author_url: 'https://www.google.com/maps/contrib/USER_ID',
    profile_photo_url: '/img/placeholder-avatar.png'
  },
  {
    id: '3',
    author_name: 'Michael Brown',
    rating: 5,
    relative_time_description: '3 months ago',
    text: 'Best roofing contractors we\'ve worked with. Great communication, fair pricing, and quality workmanship. Our new Colorbond roof looks amazing!',
    time: Date.now() - 90 * 24 * 60 * 60 * 1000,
    author_url: 'https://www.google.com/maps/contrib/USER_ID',
    profile_photo_url: '/img/placeholder-avatar.png'
  },
  {
    id: '4',
    author_name: 'Emma Wilson',
    rating: 5,
    relative_time_description: '4 months ago',
    text: 'Very professional team. They completed our factory roof replacement ahead of schedule and the quality is outstanding. Would definitely use again.',
    time: Date.now() - 120 * 24 * 60 * 60 * 1000,
    author_url: 'https://www.google.com/maps/contrib/USER_ID',
    profile_photo_url: '/img/placeholder-avatar.png'
  },
  {
    id: '5',
    author_name: 'David Lee',
    rating: 5,
    relative_time_description: '5 months ago',
    text: 'Excellent service and workmanship. The Active Metal Roofing team was professional, punctual, and delivered exactly what they promised. Highly recommended!',
    time: Date.now() - 150 * 24 * 60 * 60 * 1000,
    author_url: 'https://www.google.com/maps/contrib/USER_ID',
    profile_photo_url: '/img/placeholder-avatar.png'
  }
];

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState<Review[]>(staticReviews);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const googleReviewsUrl = 'https://www.google.com/maps/place/Active+Metal+Roofing+Commercial+Contractors+Melbourne/@-38.1011887,145.0409331,17z/data=!4m8!3m7!1s0x6ad6735aa328748b:0xd5c2415d148e3cd5!8m2!3d-38.1011887!4d145.0409331!9m1!1b1!16s%2Fg%2F11c1q7x5vy?entry=ttu';

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#E8F4F8] to-[#D1E9F2]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header with Rating */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121]">
              Trusted by Locals
            </h2>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <span className="text-2xl font-bold text-[#212121]">{averageRating.toFixed(1)}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(averageRating)
                        ? 'text-[#FFB800] fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </a>
          </div>
          <p className="text-lg text-[#7A7A7A]">
            Based on {totalReviews}+ Google reviews
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <a
                    href={review.author_url || googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
                  >
                    {/* Google Icon */}
                    <div className="flex justify-end mb-4">
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating
                              ? 'text-[#FFB800] fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-[#212121] text-lg leading-relaxed mb-6">
                      "{review.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#006991] to-[#6EC1E4] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {review.author_name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-[#212121]">{review.author_name}</p>
                        <p className="text-sm text-[#7A7A7A]">{review.relative_time_description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-[#006991]" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-[#006991]" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-[#006991] w-8'
                  : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#006991] text-white font-semibold text-lg rounded-lg hover:bg-[#005577] transition-all shadow-lg hover:shadow-xl"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

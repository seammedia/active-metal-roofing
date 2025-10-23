import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import BookingRibbon from '@/components/BookingRibbon';
import OurServices from '@/components/OurServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSteps from '@/components/ProcessSteps';
import RecentProjects from '@/components/RecentProjects';
import GoogleReviews from '@/components/GoogleReviews';
import ServiceAreas from '@/components/ServiceAreas';

export const metadata: Metadata = {
  title: 'Active Metal Roofing | Melbourne Roofing Specialists',
  description: 'Melbourne\'s trusted commercial roofing experts. 22 years experience in re-roofing, cladding, metal roof replacement. Licensed plumbers, on-time delivery.',
  keywords: 'commercial roofing, industrial roofing, metal roofing, architectural cladding, roof inspections, Melbourne roofing, colorbond roofing',
  openGraph: {
    title: 'Active Metal Roofing | Commercial & Industrial Roofing Specialists',
    description: 'Melbourne\'s trusted commercial roofing experts with 22 years experience. Quality workmanship, on-time completion guaranteed.',
    url: 'https://activemetalroofing.com.au/',
    type: 'website',
    images: [
      {
        url: 'https://activemetalroofing.com.au/img/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Active Metal Roofing',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Quote Form */}
      <Hero />

      {/* Booking Ribbon CTA Strip */}
      <BookingRibbon />

      {/* Our Services - Dark Panel with 2x3 Grid */}
      <OurServices />

      {/* Why Choose Us - Van Image + 4 Cards */}
      <WhyChooseUs />

      {/* Process Steps - 4 Steps with Numbered Pills */}
      <ProcessSteps />

      {/* Recent Projects - 6 Featured Projects */}
      <RecentProjects limit={6} showViewAll={false} />

      {/* Google Reviews Slider */}
      <GoogleReviews />

      {/* Service Areas + Footer CTA */}
      <ServiceAreas />
    </>
  );
}

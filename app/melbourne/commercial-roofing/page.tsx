import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ServiceHero from '@/components/ServiceHero';
import ServiceContactForm from '@/components/ServiceContactForm';
import ServiceSection from '@/components/ServiceSection';
import { services } from '@/lib/services-content';
import { MapPin, Check, Shield, Award, Clock } from 'lucide-react';

const serviceSlug = 'commercial-roofing';
const locationName = 'Melbourne';
const page = services[serviceSlug];

export const metadata: Metadata = {
  title: 'Commercial Roofing Melbourne | Metal Roof Specialists | Active Metal Roofing',
  description: 'Professional commercial roofing services in Melbourne. Licensed plumbers with 22 years experience. Colorbond, metal roofing, industrial & commercial projects. Free quotes.',
  keywords: 'commercial roofing Melbourne, industrial roofing, metal roofing Melbourne, commercial roof replacement, Colorbond roofing, roof repairs Melbourne, commercial roofers',
  openGraph: {
    title: 'Commercial Roofing Melbourne | Metal Roof Specialists',
    description: 'Professional commercial roofing services in Melbourne. Licensed plumbers with 22 years experience. Free quotes & inspections.',
    type: 'website',
    url: 'https://activemetalroofing.com.au/melbourne/commercial-roofing',
    images: [
      {
        url: `https://activemetalroofing.com.au${page.heroImage}`,
        width: 1200,
        height: 630,
        alt: 'Commercial Roofing Melbourne - Active Metal Roofing',
      },
    ],
  },
};

const melbourneSuburbs = [
  { name: 'Melbourne CBD', slug: 'melbourne' },
  { name: 'Bayswater', slug: 'bayswater' },
  { name: 'Berwick', slug: 'berwick' },
  { name: 'Carrum Downs', slug: 'carrum-downs' },
  { name: 'Cranbourne', slug: 'cranbourne' },
  { name: 'Dandenong', slug: 'dandenong' },
  { name: 'Frankston', slug: 'frankston' },
  { name: 'Glen Waverley', slug: 'glen-waverley' },
  { name: 'Langwarrin', slug: 'langwarrin' },
  { name: 'Mornington Peninsula', slug: 'mornington-peninsula' },
  { name: 'Pakenham', slug: 'pakenham' },
];

const faqs = [
  {
    question: 'How much does commercial roofing cost in Melbourne?',
    answer: 'Commercial roofing costs in Melbourne typically range from $80-150 per m² installed, depending on the roofing profile, building complexity, and project size. Colorbond and metal roofing systems are cost-effective long-term solutions. We provide free detailed quotes for all commercial projects.'
  },
  {
    question: 'What types of commercial roofs do you install?',
    answer: 'We specialize in metal and Colorbond commercial roofing systems including Trimdek, Kliplok, corrugated profiles, standing seam, and architectural cladding. We work with BlueScope steel and premium materials for industrial warehouses, factories, retail centers, and office buildings.'
  },
  {
    question: 'How long does commercial roof installation take?',
    answer: 'Timeline depends on project size and complexity. A typical 500m² commercial roof takes 5-10 working days. Larger industrial projects (1,000m²+) may take 2-4 weeks. We provide detailed project schedules and work efficiently to minimize business disruption.'
  },
  {
    question: 'Do you offer warranties on commercial roofing?',
    answer: 'Yes. We provide comprehensive warranties: 10-year workmanship warranty on all installations, plus manufacturer warranties up to 25 years on Colorbond and BlueScope materials. All work is fully insured and complies with Australian building standards.'
  },
  {
    question: 'Can you replace asbestos roofing?',
    answer: 'Yes, we are licensed asbestos removalists and safely handle asbestos roof replacement for commercial properties. We follow strict OH&S and environmental protocols, manage all required permits, and dispose of materials at approved facilities.'
  },
  {
    question: 'Do you work on occupied buildings?',
    answer: 'Yes, we specialize in re-roofing occupied commercial premises. We coordinate work schedules to minimize disruption, implement safety protocols, and can work in sections to keep your business operational during the project.'
  }
];

export default function MelbourneCommercialRoofingPage() {
  return (
    <>
      <ServiceHero title={`Commercial Roofing ${locationName}`} image={page.heroImage} />
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
              <a href="/melbourne" className="hover:text-[#006991] transition-colors">
                {locationName}
              </a>
            </li>
            <li>/</li>
            <li>
              <span className="text-[#212121] font-medium">Commercial Roofing</span>
            </li>
          </ol>
        </nav>

        {/* Two-column: Intro + Contact Form */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Intro */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212121] mb-6">
                Commercial Roofing Melbourne - Professional Metal Roof Installation & Replacement
              </h1>

              <p className="text-[#7A7A7A] text-lg leading-relaxed mb-4">
                Active Metal Roofing is Melbourne's trusted commercial roofing specialist with over 22 years of experience delivering superior metal and Colorbond roofing solutions for businesses across Melbourne and Victoria.
              </p>

              <p className="text-[#7A7A7A] text-lg leading-relaxed mb-4">
                As licensed registered plumbers and commercial roofing contractors, we provide comprehensive roofing services for industrial warehouses, factories, retail centers, office buildings, and commercial facilities of all sizes. Our expertise covers new installations, complete roof replacements, repairs, and maintenance programs.
              </p>

              <p className="text-[#7A7A7A] text-lg leading-relaxed mb-6">
                We specialize in Colorbond steel roofing, BlueScope products, metal cladding systems, and architectural roofing profiles. Every project is backed by our 10-year workmanship warranty and material warranties up to 25 years.
              </p>

              {/* Trust Signals */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-8 h-8 text-[#006991] mx-auto mb-2" />
                  <div className="font-bold text-[#212121] text-sm">Licensed</div>
                  <div className="text-xs text-[#7A7A7A]">Plumbers</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Award className="w-8 h-8 text-[#006991] mx-auto mb-2" />
                  <div className="font-bold text-[#212121] text-sm">22 Years</div>
                  <div className="text-xs text-[#7A7A7A]">Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Check className="w-8 h-8 text-[#61CE70] mx-auto mb-2" />
                  <div className="font-bold text-[#212121] text-sm">10-Year</div>
                  <div className="text-xs text-[#7A7A7A]">Warranty</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-[#61CE70] mx-auto mb-2" />
                  <div className="font-bold text-[#212121] text-sm">On-Time</div>
                  <div className="text-xs text-[#7A7A7A]">Completion</div>
                </div>
              </div>

              <div className="bg-[#A4D7F4] p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-[#212121] mb-4">Our Commercial Roofing Services Include:</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#006991] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#212121]">New commercial roof installation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#006991] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#212121]">Complete roof replacements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#006991] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#212121]">Industrial roofing systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#006991] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#212121]">Metal roof repairs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#006991] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#212121]">Colorbond re-roofing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#006991] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#212121]">Asbestos roof replacement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#006991] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#212121]">Roof inspections & maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#006991] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#212121]">Architectural cladding</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Contact Form (Sticky) */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <ServiceContactForm />
              </div>
            </aside>
          </div>
        </section>

        {/* Why Choose Active Metal Roofing */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4 text-center">
              Why Choose Active Metal Roofing for Commercial Roofing in Melbourne
            </h2>
            <p className="text-lg text-[#7A7A7A] text-center mb-12 max-w-3xl mx-auto">
              We're Melbourne's preferred commercial roofing contractors for businesses that demand quality, reliability, and professional service.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#006991] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-3">Licensed & Fully Insured</h3>
                <p className="text-[#7A7A7A]">
                  Licensed registered plumbers with comprehensive public liability insurance and workers compensation. Fully compliant with OH&S regulations and Australian building standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#006991] rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-3">22+ Years Experience</h3>
                <p className="text-[#7A7A7A]">
                  Over two decades of commercial and industrial roofing expertise. We've completed projects from small warehouses to 10,000m² industrial facilities across Melbourne.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#61CE70] rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-3">Premium Materials</h3>
                <p className="text-[#7A7A7A]">
                  Exclusive use of BlueScope steel and Colorbond products with manufacturer warranties up to 25 years. All materials sourced from Australian suppliers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#61CE70] rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-3">On-Time Project Completion</h3>
                <p className="text-[#7A7A7A]">
                  We respect your business operations and complete projects on schedule. Detailed project planning and efficient execution minimize disruption.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#006991] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-3">Comprehensive Warranties</h3>
                <p className="text-[#7A7A7A]">
                  10-year workmanship warranty on all installations, backed by material warranties up to 25 years. Your investment is protected for decades.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#61CE70] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-3">Expert Team</h3>
                <p className="text-[#7A7A7A]">
                  Skilled tradespeople with specialized commercial roofing training. Every team member is safety-certified and experienced in large-scale projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Roofing Materials */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4 text-center">
              Commercial Roofing Materials & Systems
            </h2>
            <p className="text-lg text-[#7A7A7A] text-center mb-12 max-w-3xl mx-auto">
              We install premium roofing systems designed for Australian commercial and industrial applications.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-[#006991] pl-6">
                <h3 className="text-2xl font-bold text-[#212121] mb-4">Colorbond Steel Roofing</h3>
                <p className="text-[#7A7A7A] mb-4">
                  Australia's #1 metal roofing material. Colorbond steel offers superior durability, weather resistance, and thermal performance. Available in Trimdek, Kliplok, and custom profiles with 25+ color options.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#61CE70] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#7A7A7A]">25-year BlueScope warranty</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#61CE70] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#7A7A7A]">Fire-resistant (BAL 40 rated)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#61CE70] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#7A7A7A]">Energy-efficient Thermatech coating</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#006991] pl-6">
                <h3 className="text-2xl font-bold text-[#212121] mb-4">Metal Roofing Profiles</h3>
                <p className="text-[#7A7A7A] mb-4">
                  Wide range of corrugated, standing seam, and architectural profiles for commercial applications. Each profile engineered for specific span requirements and aesthetic preferences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#61CE70] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#7A7A7A]">Trimdek for standard commercial</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#61CE70] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#7A7A7A]">Kliplok for concealed fastening</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#61CE70] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#7A7A7A]">Custom profiles for architectural projects</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#006991] pl-6">
                <h3 className="text-2xl font-bold text-[#212121] mb-4">Industrial Roofing Systems</h3>
                <p className="text-[#7A7A7A] mb-4">
                  Heavy-duty roofing solutions for warehouses, factories, and large-span industrial buildings. Engineered for maximum load capacity and weather protection.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#61CE70] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#7A7A7A]">Long-span capabilities (up to 12m)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#61CE70] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#7A7A7A]">Translucent sheeting for natural light</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#61CE70] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#7A7A7A]">Insulation systems for energy efficiency</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#006991] pl-6">
                <h3 className="text-2xl font-bold text-[#212121] mb-4">Wall Cladding & Facades</h3>
                <p className="text-[#7A7A7A] mb-4">
                  Architectural metal cladding systems for commercial buildings. Matching wall and roof profiles create cohesive, professional appearances.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#61CE70] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#7A7A7A]">Vertical and horizontal installation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#61CE70] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#7A7A7A]">Color-matched to roof systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#61CE70] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-[#7A7A7A]">Low-maintenance, durable finishes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Roofing Process */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4 text-center">
              Our Commercial Roofing Process
            </h2>
            <p className="text-lg text-[#7A7A7A] text-center mb-12 max-w-3xl mx-auto">
              Professional project management from initial consultation to final inspection.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#006991] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-3">Inspection & Quote</h3>
                <p className="text-[#7A7A7A]">
                  Free on-site inspection and detailed quote. We assess your building, discuss requirements, and provide transparent pricing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#006991] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-3">Design & Planning</h3>
                <p className="text-[#7A7A7A]">
                  Engineering specifications, material selection, and project timeline. We handle all permits and compliance requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#006991] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-3">Installation</h3>
                <p className="text-[#7A7A7A]">
                  Professional installation by licensed tradespeople. Safety protocols, quality control, and minimal business disruption.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[#61CE70] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-3">Completion & Warranty</h3>
                <p className="text-[#7A7A7A]">
                  Final inspection, site cleanup, and warranty documentation. Ongoing support and maintenance programs available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas - Melbourne Suburbs */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4 text-center">
              Commercial Roofing Service Areas in Melbourne
            </h2>
            <p className="text-lg text-[#7A7A7A] text-center mb-12 max-w-3xl mx-auto">
              We provide professional commercial roofing services across Melbourne and surrounding suburbs.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {melbourneSuburbs.map((suburb) => (
                <Link
                  key={suburb.slug}
                  href={`/${suburb.slug}`}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#006991] hover:text-white transition-all group"
                >
                  <MapPin className="w-5 h-5 text-[#006991] group-hover:text-white flex-shrink-0" />
                  <span className="font-medium text-[#212121] group-hover:text-white">
                    {suburb.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="bg-[#A4D7F4] p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-[#212121] mb-3">
                Don't See Your Suburb Listed?
              </h3>
              <p className="text-lg text-[#212121]/80 mb-6">
                We service all Melbourne metro areas and regional Victoria. Contact us to discuss your commercial roofing project.
              </p>
              <a
                href="tel:0451866494"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#006991] text-white font-semibold rounded-md hover:bg-[#005577] transition-all shadow-lg"
              >
                Call 0451 866 494
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4 text-center">
              Commercial Roofing Melbourne - Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#7A7A7A] text-center mb-12">
              Common questions about commercial roofing services, materials, and projects.
            </p>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#212121] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[#7A7A7A] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-8 text-center">
              Our Melbourne Service Area
            </h2>
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

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-[#006991] to-[#004d6b] text-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Free Commercial Roofing Quote Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Professional commercial roofing services in Melbourne. Licensed, insured, and experienced. Call now for a free inspection and detailed quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:0451866494"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#61CE70] text-white font-semibold rounded-md hover:bg-[#50bd5f] transition-all shadow-lg text-lg"
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
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#006991] font-semibold rounded-md hover:bg-gray-100 transition-all shadow-lg text-lg"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

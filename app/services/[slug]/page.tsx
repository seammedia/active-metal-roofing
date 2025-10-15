import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServiceHero from '@/components/ServiceHero';
import ServiceContactForm from '@/components/ServiceContactForm';
import ServiceSection from '@/components/ServiceSection';
import { services } from '@/lib/services-content';

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services[params.slug];

  if (!service) {
    return {
      title: 'Service Not Found | Active Metal Roofing',
    };
  }

  return {
    title: service.seo?.title || `${service.name} | Active Metal Roofing`,
    description: service.seo?.description || service.intro.body[0],
    openGraph: {
      title: service.seo?.title || `${service.name} | Active Metal Roofing`,
      description: service.seo?.description || service.intro.body[0],
      type: 'website',
      url: `https://activemetalroofing.com.au/services/${params.slug}`,
      images: [
        {
          url: `https://activemetalroofing.com.au${service.heroImage}`,
          width: 1200,
          height: 630,
          alt: `${service.name} in Melbourne`,
        },
      ],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const page = services[params.slug];

  if (!page) {
    notFound();
  }

  return (
    <>
      {/* Hero Section with full-bleed image */}
      <ServiceHero
        title={`${page.name} in Melbourne`}
        image={page.heroImage}
      />

      {/* Main Content Area */}
      <main className="bg-white">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li>
              <a href="/" className="hover:text-primary transition-colors">Home</a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <a href="/services" className="hover:text-primary transition-colors">Services</a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{page.name}</span>
            </li>
          </ol>
        </nav>

        {/* Two-Column Intro + Contact Form */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Service Intro */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {page.intro.title}
              </h2>
              {page.intro.body.map((paragraph, i) => (
                <p key={i} className="mb-4 text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {page.intro.bullets && (
                <ul className="mt-6 space-y-3">
                  {page.intro.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right Column: Contact Form */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <ServiceContactForm />
              </div>
            </aside>
          </div>
        </section>

        {/* Alternating Image/Text Sections */}
        {page.sections.map((section, i) => (
          <section
            key={i}
            className={`py-12 md:py-16 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <ServiceSection
                title={section.title}
                image={section.image}
                imageLeft={section.imageLeft}
                richText={
                  <>
                    {section.body.map((paragraph, j) => (
                      <p key={j} className="mb-4 text-lg text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </>
                }
              />
            </div>
          </section>
        ))}

        {/* CTA Strip */}
        <section className="bg-[#A4D7F4] py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <p className="text-lg md:text-xl text-gray-900 text-center md:text-left">
                Book an appointment today or call <strong className="font-bold">0451 866 494</strong>
              </p>
              <a
                href="tel:0451866494"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-6 py-3 font-bold text-lg hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

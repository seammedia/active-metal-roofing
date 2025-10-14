import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Active Metal Roofing | Commercial & Industrial Roofing Specialists Melbourne',
  description: 'Professional commercial and industrial metal roofing services across Melbourne. 22 years experience in re-roofing, cladding, and roof inspections. Licensed plumbers.',
};

const services = [
  {
    name: 'Commercial Re-Roofing',
    slug: 'commercial-re-roofing',
    description: 'Complete commercial roof replacement with minimal disruption to your operations. Expert installation of durable metal roofing systems.',
  },
  {
    name: 'Commercial Roofing',
    slug: 'commercial-roofing',
    description: 'New commercial roof installations for all building types. Quality materials and professional workmanship guaranteed.',
  },
  {
    name: 'Architectural Cladding',
    slug: 'architectural-cladding',
    description: 'Premium cladding solutions that enhance aesthetics while providing superior weather protection.',
  },
  {
    name: 'Industrial Roofing',
    slug: 'industrial-roofing',
    description: 'Heavy-duty industrial roofing systems designed for warehouses, factories, and large-scale facilities.',
  },
  {
    name: 'Roof Inspections',
    slug: 'roof-inspections',
    description: 'Comprehensive roof condition assessments with detailed reports and recommendations.',
  },
  {
    name: 'Colorbond Roof Replacement',
    slug: 'colorbond-roof-replacement',
    description: 'Durable Colorbond roofing solutions with a wide range of colors and finishes.',
  },
];

const whyChooseUs = [
  {
    icon: '🏆',
    title: '22 Years Experience',
    description: 'Over two decades of commercial and industrial roofing excellence across Melbourne.',
  },
  {
    icon: '✓',
    title: 'Licensed Plumbers',
    description: 'Fully licensed and registered plumbers ensuring compliant, quality workmanship.',
  },
  {
    icon: '🔒',
    title: 'OH&S Compliant',
    description: 'Strict safety protocols and comprehensive insurance coverage for all projects.',
  },
  {
    icon: '📋',
    title: 'Free Inspections',
    description: 'Complimentary roof inspections with detailed condition reports and quotes.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Commercial & Industrial Roofing Specialists</h1>
          <p className="tagline">Professional Metal Roofing Solutions Across Melbourne & Victoria</p>
          <p className="subtext">22 years of experience | Licensed Plumbers | On-Time Completion</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary">Get Free Inspection</Link>
            <a href="tel:0451866494" className="btn btn-secondary">Call 0451 866 494</a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="trust-items">
          <div className="trust-item">
            <svg viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            <span>Licensed Plumbers</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>OH&S Compliant</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24">
              <path d="M9 11l3 3L22 4"/>
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
            </svg>
            <span>22 Years Experience</span>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24">
              <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
            </svg>
            <span>Free Inspections</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Roofing Services</h2>
        <p className="intro">
          Comprehensive commercial and industrial roofing solutions across Melbourne. From new installations to re-roofing and inspections.
        </p>
        <div className="service-grid">
          {services.map((service) => (
            <div key={service.slug} className="service-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <Link href={`/services/${service.slug}`}>
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="why-choose-content">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '16px', color: '#212121' }}>
            Why Choose Active Metal Roofing?
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.15rem', color: '#616161', maxWidth: '700px', margin: '0 auto 48px' }}>
            We deliver exceptional commercial and industrial roofing services with unmatched expertise and reliability.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', maxWidth: '1200px', margin: '0 auto' }}>
            {whyChooseUs.map((item, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px', color: '#212121' }}>{item.title}</h3>
                <p style={{ color: '#616161', lineHeight: '1.6' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ background: '#006991', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#fff' }}>Ready to Start Your Roofing Project?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '32px', opacity: 0.95 }}>
            Get a free inspection and quote today. Licensed plumbers with 22 years of experience.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn" style={{ background: '#fff', color: '#006991' }}>
              Get Free Quote
            </Link>
            <a href="tel:0451866494" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid #fff' }}>
              Call 0451 866 494
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

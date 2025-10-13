import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const services = {
  'commercial-re-roofing': {
    title: 'Commercial Re-Roofing',
    description: 'Professional commercial re-roofing services in Melbourne. Replace old, damaged roofs with high-quality metal roofing systems.',
    heroText: 'Expert commercial roof replacement services for businesses across Melbourne and Victoria',
    benefits: [
      {
        title: 'Extended Roof Life',
        description: 'Modern metal roofing systems last 40+ years with proper installation and minimal maintenance.',
      },
      {
        title: 'Minimal Disruption',
        description: 'Efficient project management ensures your business operations continue with minimal interruption.',
      },
      {
        title: 'Energy Efficiency',
        description: 'New roofing materials improve insulation, reducing heating and cooling costs significantly.',
      },
      {
        title: 'Licensed Professionals',
        description: 'All work performed by licensed plumbers with 22 years of commercial roofing experience.',
      },
    ],
  },
  'commercial-roofing': {
    title: 'Commercial Roofing',
    description: 'New commercial roof installations for all building types. Quality materials and professional workmanship guaranteed.',
    heroText: 'Complete commercial roofing solutions for new buildings and major renovations',
    benefits: [
      {
        title: 'Tailored Solutions',
        description: 'Custom roofing designs that meet your specific requirements and building codes.',
      },
      {
        title: 'Premium Materials',
        description: 'High-grade Colorbond and metal roofing products with comprehensive warranties.',
      },
      {
        title: 'Expert Installation',
        description: 'Precision installation by licensed plumbers ensures long-lasting performance.',
      },
      {
        title: 'Project Management',
        description: 'Dedicated project oversight from start to finish, on-time and on-budget.',
      },
    ],
  },
  'architectural-cladding': {
    title: 'Architectural Cladding',
    description: 'Premium cladding solutions that enhance aesthetics while providing superior weather protection.',
    heroText: 'Transform your building with stylish, durable architectural cladding systems',
    benefits: [
      {
        title: 'Design Flexibility',
        description: 'Wide range of profiles, colors, and finishes to match your architectural vision.',
      },
      {
        title: 'Weather Protection',
        description: 'Superior moisture and wind resistance keeps buildings protected year-round.',
      },
      {
        title: 'Low Maintenance',
        description: 'Modern cladding materials require minimal upkeep while maintaining appearance.',
      },
      {
        title: 'Durability',
        description: 'High-quality materials withstand harsh Australian weather conditions.',
      },
    ],
  },
  'industrial-roofing': {
    title: 'Industrial Roofing',
    description: 'Heavy-duty industrial roofing systems designed for warehouses, factories, and large-scale facilities.',
    heroText: 'Robust roofing solutions for industrial and warehouse facilities',
    benefits: [
      {
        title: 'Large-Scale Expertise',
        description: 'Specialized in managing extensive industrial roofing projects efficiently.',
      },
      {
        title: 'Structural Integrity',
        description: 'Engineering-grade materials and installation for maximum load-bearing capacity.',
      },
      {
        title: 'Safety Compliance',
        description: 'Full OH&S compliance with comprehensive safety protocols on every site.',
      },
      {
        title: 'Fast Installation',
        description: 'Experienced crews complete large projects quickly without compromising quality.',
      },
    ],
  },
  'roof-inspections': {
    title: 'Roof Inspections',
    description: 'Comprehensive roof condition assessments with detailed reports and recommendations.',
    heroText: 'Professional roof inspections to protect your investment',
    benefits: [
      {
        title: 'Detailed Assessment',
        description: 'Thorough inspection of all roofing components, gutters, and drainage systems.',
      },
      {
        title: 'Written Reports',
        description: 'Comprehensive documentation with photos and specific repair recommendations.',
      },
      {
        title: 'Preventative Maintenance',
        description: 'Identify minor issues before they become major problems and costly repairs.',
      },
      {
        title: 'Free for Quotes',
        description: 'Complimentary inspections when requesting quotes for roofing projects.',
      },
    ],
  },
  'colorbond-roof-replacement': {
    title: 'Colorbond Roof Replacement',
    description: 'Durable Colorbond roofing solutions with a wide range of colors and finishes.',
    heroText: 'Premium Colorbond roofing installations for lasting protection and style',
    benefits: [
      {
        title: 'Color Selection',
        description: 'Extensive range of Colorbond colors to match any building aesthetic.',
      },
      {
        title: 'Durability',
        description: 'Australian-made steel designed specifically for our harsh climate conditions.',
      },
      {
        title: 'Warranty',
        description: 'Comprehensive manufacturer warranties backed by professional installation.',
      },
      {
        title: 'Fire Resistance',
        description: 'Colorbond steel meets Australian fire safety standards for bushfire-prone areas.',
      },
    ],
  },
  'metal-roof-replacement': {
    title: 'Metal Roof Replacement',
    description: 'Expert metal roof replacement services using premium materials and proven techniques.',
    heroText: 'Professional metal roofing replacement for commercial and industrial buildings',
    benefits: [
      {
        title: 'Material Options',
        description: 'Choose from various metal roofing profiles including corrugated, klip-lok, and standing seam.',
      },
      {
        title: 'Longevity',
        description: 'Metal roofs last 40-70 years with proper installation and basic maintenance.',
      },
      {
        title: 'Cost-Effective',
        description: 'Long lifespan and low maintenance make metal roofing an excellent investment.',
      },
      {
        title: 'Eco-Friendly',
        description: 'Recyclable materials and energy-efficient properties reduce environmental impact.',
      },
    ],
  },
  'metal-roof-restoration': {
    title: 'Metal Roof Restoration',
    description: 'Restore and extend your roof\'s lifespan with professional cleaning, repairs, and protective coatings.',
    heroText: 'Revitalize aging metal roofs and extend their service life',
    benefits: [
      {
        title: 'Cost Savings',
        description: 'Restoration costs 30-50% less than complete roof replacement.',
      },
      {
        title: 'Extended Life',
        description: 'Add 15-20 years to your existing roof with professional restoration.',
      },
      {
        title: 'Improved Appearance',
        description: 'Refresh faded, weathered roofs to like-new condition.',
      },
      {
        title: 'Protection',
        description: 'Protective coatings prevent rust, leaks, and UV damage.',
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Active Metal Roofing`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Service Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0d47a1 0%, #006991 100%)',
        color: '#fff',
        padding: '100px 20px 70px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '16px', fontWeight: 800 }}>
          {service.title}
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto' }}>
          {service.heroText}
        </p>
      </section>

      {/* Service Content */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: '#212121' }}>
            About This Service
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#424242', marginBottom: '16px' }}>
            {service.description}
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#424242', marginBottom: '16px' }}>
            As licensed registered plumbers with over 22 years of experience, we provide professional {service.title.toLowerCase()} services across Melbourne and Victoria. Our commitment to quality workmanship, OH&S compliance, and customer satisfaction sets us apart.
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '24px', color: '#212121' }}>
            Key Benefits
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {service.benefits.map((benefit, index) => (
              <div key={index} style={{
                padding: '24px',
                background: '#f5f5f5',
                borderRadius: '12px'
              }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#212121' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#616161', lineHeight: '1.6', margin: 0 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div style={{
          background: '#e3f2fd',
          padding: '40px',
          borderRadius: '12px',
          textAlign: 'center',
          marginTop: '48px'
        }}>
          <h2 style={{ marginBottom: '16px', color: '#212121', fontSize: '2rem' }}>
            Ready to Get Started?
          </h2>
          <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: '#424242' }}>
            Contact us today for a free inspection and quote. Licensed plumbers with 22 years of experience.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              style={{
                background: '#006991',
                color: '#fff',
                padding: '12px 28px',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 700,
                display: 'inline-block'
              }}
            >
              Get Free Quote
            </Link>
            <a
              href="tel:0451866494"
              style={{
                background: '#fff',
                color: '#006991',
                padding: '12px 28px',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 700,
                display: 'inline-block',
                border: '2px solid #006991'
              }}
            >
              Call 0451 866 494
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Active Metal Roofing',
  description: 'Learn about Active Metal Roofing - commercial and industrial roofing specialists with over 22 years of experience serving Melbourne and Victoria.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ background: 'linear-gradient(135deg, #006991 0%, #6EC1E4 100%)', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            About Active Metal Roofing
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.95 }}>
            Commercial & Industrial Roofing Specialists Since 2015
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="about-grid">
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: '#212121' }}>
              Your Trusted Roofing Partner
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#616161', marginBottom: '20px' }}>
              With over <strong>22 years of experience</strong>, Active Metal Roofing has established itself as Melbourne's leading commercial and industrial roofing specialist. We pride ourselves on delivering exceptional quality, reliability, and professionalism on every project.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#616161', marginBottom: '20px' }}>
              As <strong>licensed registered plumbers</strong>, we bring technical expertise and regulatory compliance to every roofing installation, replacement, and inspection we undertake.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#616161', marginBottom: '20px' }}>
              Our commitment to <strong>OH&S compliance</strong>, on-time project completion, and environmentally friendly materials sets us apart in the industry.
            </p>
          </div>
          <div>
            <img
              src="/img/2025/03/Roofing-Contractors-for-Commercial-Properties-150x150.png"
              alt="Commercial Roofing"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ background: '#f5f5f5', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '48px', color: '#212121' }}>
            Our Core Values
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div style={{ background: '#fff', padding: '32px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#212121' }}>Quality First</h3>
              <p style={{ color: '#616161', lineHeight: '1.6' }}>
                We never compromise on quality. Every project is executed to the highest standards using premium materials.
              </p>
            </div>
            <div style={{ background: '#fff', padding: '32px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔒</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#212121' }}>Safety & Compliance</h3>
              <p style={{ color: '#616161', lineHeight: '1.6' }}>
                OH&S compliant operations with comprehensive insurance coverage for complete peace of mind.
              </p>
            </div>
            <div style={{ background: '#fff', padding: '32px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⏱️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#212121' }}>On-Time Delivery</h3>
              <p style={{ color: '#616161', lineHeight: '1.6' }}>
                We respect your business operations and complete projects on schedule, every time.
              </p>
            </div>
            <div style={{ background: '#fff', padding: '32px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌱</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#212121' }}>Eco-Friendly</h3>
              <p style={{ color: '#616161', lineHeight: '1.6' }}>
                Committed to environmentally responsible practices and sustainable roofing materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: '#006991', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#fff' }}>
            Let's Discuss Your Roofing Project
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '32px', opacity: 0.95 }}>
            Get a free inspection and quote from Melbourne's trusted roofing specialists.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn" style={{ background: '#fff', color: '#006991', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>
              Get Free Quote
            </Link>
            <a href="tel:0451866494" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid #fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>
              Call 0451 866 494
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

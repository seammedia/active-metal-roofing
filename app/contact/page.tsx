import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Free Quote | Active Metal Roofing',
  description: 'Contact Active Metal Roofing for Melbourne commercial roofing. Call 0451 866 494 for free inspection & quote. Licensed plumbers, 22 years experience.',
  openGraph: {
    title: 'Contact Us | Active Metal Roofing',
    description: 'Get your free roof inspection and quote today. Licensed plumbers with 22 years experience.',
    url: 'https://activemetalroofing.com.au/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ background: 'linear-gradient(135deg, #006991 0%, #6EC1E4 100%)', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.95 }}>
            Get your free roof inspection and quote today
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }} className="contact-grid">
          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '24px', color: '#212121' }}>
              Get In Touch
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#616161', marginBottom: '32px' }}>
              Ready to start your roofing project? Contact us today for a free inspection and quote. Our team of licensed plumbers is ready to help.
            </p>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#212121', display: 'flex', alignItems: 'center', gap: '8px' }}>
                📞 Phone
              </h3>
              <a href="tel:0451866494" style={{ fontSize: '1.5rem', color: '#006991', textDecoration: 'none', fontWeight: 700 }}>
                0451 866 494
              </a>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#212121', display: 'flex', alignItems: 'center', gap: '8px' }}>
                ✉️ Email
              </h3>
              <a href="mailto:admin@activemetalroofing.com.au" style={{ fontSize: '1.1rem', color: '#006991', textDecoration: 'none' }}>
                admin@activemetalroofing.com.au
              </a>
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#212121', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🕒 Trading Hours
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#616161', lineHeight: '1.6' }}>
                <strong>Monday - Friday:</strong> 7:00 AM - 5:00 PM<br />
                <strong>Saturday:</strong> 8:00 AM - 2:00 PM<br />
                <strong>Sunday:</strong> Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: '0 20px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
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
      </section>
    </>
  );
}

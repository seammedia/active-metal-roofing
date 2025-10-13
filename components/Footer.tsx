import Link from 'next/link';

const services = [
  { name: 'Commercial Re-Roofing', slug: 'commercial-re-roofing' },
  { name: 'Commercial Roofing', slug: 'commercial-roofing' },
  { name: 'Architectural Cladding', slug: 'architectural-cladding' },
  { name: 'Industrial Roofing', slug: 'industrial-roofing' },
  { name: 'Roof Inspections', slug: 'roof-inspections' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col">
            <h3>Active Metal Roofing</h3>
            <p className="mb-4">
              Commercial and industrial roofing specialists serving Melbourne and Victoria for over 22 years.
            </p>
            <p>
              <strong>Licensed Registered Plumbers</strong><br />
              OH&S Compliant<br />
              Environmentally Friendly
            </p>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/contact">Free Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="tel:0451866494">📞 0451 866 494</a>
              </li>
              <li>
                <a href="mailto:admin@activemetalroofing.com.au">
                  ✉️ admin@activemetalroofing.com.au
                </a>
              </li>
              <li>
                📍 1 Knott Court<br />
                Langwarrin VIC 3910<br />
                Australia
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Active Metal Roofing Vic Pty Ltd. All rights reserved.
            {' | '}
            <Link href="/about">About</Link>
            {' | '}
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  { name: 'Commercial Re-Roofing', slug: 'commercial-re-roofing' },
  { name: 'Commercial Roofing', slug: 'commercial-roofing' },
  { name: 'Architectural Cladding', slug: 'architectural-cladding' },
  { name: 'Industrial Roofing', slug: 'industrial-roofing' },
  { name: 'Roof Inspections', slug: 'roof-inspections' },
  { name: 'Colorbond Roof Replacement', slug: 'colorbond-roof-replacement' },
  { name: 'Metal Roof Replacement', slug: 'metal-roof-replacement' },
  { name: 'Metal Roof Restoration', slug: 'metal-roof-restoration' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <a href="mailto:admin@activemetalroofing.com.au">
          ✉️ admin@activemetalroofing.com.au
        </a>
      </div>

      {/* Header */}
      <header className="site-header">
        <div className="container header-bar">
          <Link href="/" className="logo">
            <img
              src="/img/logo.webp"
              alt="Active Metal Roofing"
              style={{ height: '50px', width: 'auto' }}
            />
            <span>Active Metal Roofing</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop" aria-label="Main navigation">
            <ul className="nav-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li
                className="has-sub"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="sub-toggle" aria-expanded={servicesOpen}>
                  Services
                </button>
                {servicesOpen && (
                  <ul className="sub-menu">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link href={`/services/${service.slug}`}>
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="cta-buttons hidden lg:flex">
            <a href="tel:0451866494" className="btn phone">
              📞 0451 866 494
            </a>
            <Link href="/contact" className="btn btn-quote">
              Free Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        <nav className="mobile-nav" hidden={!mobileMenuOpen}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>
                  {service.name}
                </Link>
              </li>
            ))}
            <li><Link href="/contact">Contact</Link></li>
            <li>
              <a href="tel:0451866494" style={{ color: '#006991', fontWeight: 600 }}>
                📞 0451 866 494
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

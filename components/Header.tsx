'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const services = [
  { name: 'Architectural Cladding', slug: 'architectural-cladding' },
  { name: 'Colorbond Roof Replacement', slug: 'colorbond-roof-replacement' },
  { name: 'Commercial Re-Roofing', slug: 'commercial-re-roofing' },
  { name: 'Commercial Roofing', slug: 'commercial-roofing' },
  { name: 'Industrial Roofing', slug: 'industrial-roofing' },
  { name: 'Metal Roof Replacement', slug: 'metal-roof-replacement' },
  { name: 'Metal Roof Restoration', slug: 'metal-roof-restoration' },
  { name: 'Roof Inspections', slug: 'roof-inspections' },
  { name: 'Roof Repair', slug: 'roof-repair' },
  { name: 'Roof Restoration', slug: 'roof-restoration' },
];

const locations = [
  { name: 'Bayswater', slug: 'bayswater' },
  { name: 'Berwick', slug: 'berwick' },
  { name: 'Carrum Downs', slug: 'carrum-downs' },
  { name: 'Cranbourne', slug: 'cranbourne' },
  { name: 'Dandenong', slug: 'dandenong' },
  { name: 'Frankston', slug: 'frankston' },
  { name: 'Glen Waverley', slug: 'glen-waverley' },
  { name: 'Langwarrin', slug: 'langwarrin' },
  { name: 'Melbourne', slug: 'melbourne' },
  { name: 'Mornington Peninsula', slug: 'mornington-peninsula' },
  { name: 'Pakenham', slug: 'pakenham' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const locationsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 300);
  };

  const handleLocationsEnter = () => {
    if (locationsTimeoutRef.current) {
      clearTimeout(locationsTimeoutRef.current);
    }
    setLocationsOpen(true);
  };

  const handleLocationsLeave = () => {
    locationsTimeoutRef.current = setTimeout(() => {
      setLocationsOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (locationsTimeoutRef.current) clearTimeout(locationsTimeoutRef.current);
    };
  }, []);

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
              src="/img/website_header_logo.png"
              alt="Active Metal Roofing"
              style={{ height: '60px', width: 'auto' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop" aria-label="Main navigation">
            <ul className="nav-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li
                className="has-sub"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <button className="sub-toggle" aria-expanded={servicesOpen}>
                  Services
                </button>
                {servicesOpen && (
                  <ul className="sub-menu">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link href={`/${service.slug}`}>
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li
                className="has-sub"
                onMouseEnter={handleLocationsEnter}
                onMouseLeave={handleLocationsLeave}
              >
                <button className="sub-toggle" aria-expanded={locationsOpen}>
                  Locations
                </button>
                {locationsOpen && (
                  <ul className="sub-menu">
                    {locations.map((location) => (
                      <li key={location.slug}>
                        <Link href={`/${location.slug}`}>
                          {location.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li><Link href="/blog">Blog</Link></li>
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
            <li>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="mobile-dropdown">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="mobile-dropdown-toggle"
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  background: 'none',
                  border: 'none',
                  fontSize: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#212121'
                }}
              >
                Services
                <span style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                  ▼
                </span>
              </button>
              {mobileServicesOpen && (
                <ul style={{ paddingLeft: '16px', backgroundColor: '#f8f9fa' }}>
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/${service.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ display: 'block', padding: '10px 16px' }}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Locations Dropdown */}
            <li className="mobile-dropdown">
              <button
                onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                className="mobile-dropdown-toggle"
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  background: 'none',
                  border: 'none',
                  fontSize: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#212121'
                }}
              >
                Locations
                <span style={{ transform: mobileLocationsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                  ▼
                </span>
              </button>
              {mobileLocationsOpen && (
                <ul style={{ paddingLeft: '16px', backgroundColor: '#f8f9fa' }}>
                  {locations.map((location) => (
                    <li key={location.slug}>
                      <Link
                        href={`/${location.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ display: 'block', padding: '10px 16px' }}
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
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

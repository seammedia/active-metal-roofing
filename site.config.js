/**
 * Site Configuration for Active Metal Roofing
 * Central configuration for all branding, contact details, and site metadata
 */

module.exports = {
  // Brand Identity
  brand: "Active Metal Roofing",
  brandShort: "AMR",
  tagline: "Commercial and Industrial Roofing Specialists",
  established: "2015",
  experience: "22 years of experience",

  // Contact Information
  phone: "0451 866 494",
  phoneFormatted: "0451 866 494",
  phoneHref: "tel:0451866494",

  email: "admin@activemetalroofing.com.au",
  emailHref: "mailto:admin@activemetalroofing.com.au",

  // Address
  address: {
    street: "1 Knott Court",
    suburb: "Langwarrin",
    state: "VIC",
    postcode: "3910",
    country: "Australia",
    full: "1 Knott Court, Langwarrin, VIC 3910, Australia"
  },

  // Domain & URLs
  domain: "activemetalroofing.com.au",
  url: "https://activemetalroofing.com.au",

  // Service Area
  serviceArea: "Melbourne & Victoria",
  serviceAreaShort: "Melbourne",

  // Business Details
  abn: "TODO: Add ABN",
  legalName: "Active Metal Roofing Vic Pty Ltd",
  tradingHours: {
    weekdays: "7:00 AM - 5:00 PM",
    saturday: "8:00 AM - 2:00 PM",
    sunday: "Closed"
  },

  // Social Media
  social: {
    facebook: "",
    instagram: "",
    google: "",
    linkedin: ""
  },

  // SEO Defaults
  seo: {
    defaultTitle: "Active Metal Roofing | Commercial & Industrial Roofing Specialists Melbourne",
    titleTemplate: "%s | Active Metal Roofing",
    defaultDescription: "Professional commercial and industrial metal roofing services across Melbourne. 22 years experience in re-roofing, cladding, and roof inspections. Licensed plumbers.",
    keywords: "commercial roofing, industrial roofing, metal roofing, architectural cladding, roof inspections, Melbourne roofing, colorbond roofing"
  },

  // Services List
  services: [
    {
      name: "Commercial Re-Roofing",
      slug: "commercial-re-roofing",
      icon: "refresh",
      description: "Complete commercial roof replacement solutions"
    },
    {
      name: "Commercial Roofing",
      slug: "commercial-roofing",
      icon: "building",
      description: "New commercial roof installations"
    },
    {
      name: "Architectural Cladding",
      slug: "architectural-cladding",
      icon: "layers",
      description: "Premium cladding solutions for all building types"
    },
    {
      name: "Industrial Roofing",
      slug: "industrial-roofing",
      icon: "factory",
      description: "Heavy-duty industrial roofing systems"
    },
    {
      name: "Roof Inspections",
      slug: "roof-inspections",
      icon: "search",
      description: "Comprehensive roof condition assessments"
    },
    {
      name: "Colorbond Roof Replacement",
      slug: "colorbond-roof-replacement",
      icon: "shield",
      description: "Durable Colorbond roofing solutions"
    },
    {
      name: "Metal Roof Replacement",
      slug: "metal-roof-replacement",
      icon: "tool",
      description: "Expert metal roof replacement services"
    },
    {
      name: "Metal Roof Restoration",
      slug: "metal-roof-restoration",
      icon: "wrench",
      description: "Restore and extend your roof's lifespan"
    }
  ],

  // Primary Service Locations (Melbourne Suburbs)
  locations: [
    { name: "Melbourne CBD", slug: "melbourne-cbd" },
    { name: "Langwarrin", slug: "langwarrin" },
    { name: "Frankston", slug: "frankston" },
    { name: "Dandenong", slug: "dandenong" },
    { name: "Mornington Peninsula", slug: "mornington-peninsula" },
    { name: "Bayside", slug: "bayside" }
  ],

  // USPs
  usps: [
    "22 years of experience",
    "Licensed registered plumbers",
    "OH&S compliant",
    "Free roof inspections",
    "On-time project completion",
    "Environmentally friendly materials",
    "Commercial & industrial specialists"
  ],

  // Forms
  forms: {
    endpoint: "https://formspree.io/f/YOUR_FORM_ID", // TODO: Replace with actual endpoint
    serviceTypes: [
      "Commercial Re-Roofing",
      "Commercial Roofing",
      "Architectural Cladding",
      "Industrial Roofing",
      "Roof Inspection",
      "Colorbond Roofing",
      "Metal Roof Replacement",
      "Metal Roof Restoration",
      "Free Quote"
    ]
  },

  // Brand Colors (extracted from WordPress Elementor CSS)
  colors: {
    primary: "#006991", // Teal - main brand color (WP actual)
    primaryLight: "#A4D7F4", // Light blue header (WP actual)
    secondary: "#6EC1E4", // Accent blue (WP actual)
    accent: "#61CE70", // Green accent (WP actual)
    text: "#7A7A7A", // Body text gray (WP actual)
    headings: "#000000", // Heading text (WP actual)
    dark: "#212121",
    light: "#f5f5f5",
    white: "#ffffff"
  },

  // Staging/Production Flags
  environment: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",

  // Robot indexing - noindex for staging
  allowIndexing: process.env.NODE_ENV === "production"
};

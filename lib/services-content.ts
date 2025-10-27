export type ServicePage = {
  slug: string;
  name: string;
  heroImage: string;
  intro: {
    title: string;
    body: string[];
    bullets?: string[];
  };
  sections: Array<{
    title: string;
    body: string[];
    image?: string;
    imageLeft?: boolean;
  }>;
  seo?: {
    title?: string;
    description?: string;
  };
};

export const services: Record<string, ServicePage> = {
  "commercial-re-roofing": {
    slug: "commercial-re-roofing",
    name: "Commercial Re-Roofing",
    heroImage: "/img/commercial-re-roofing-melbourne.jpg",
    intro: {
      title: "Commercial Re-Roofing Melbourne – Trusted Experts",
      body: [
        "Active Metal Roofing is an expert in commercial re-roofing in Melbourne, delivering reliable, durable, and cost-effective solutions across Victoria.",
        "We work with retail, warehouse and industrial properties, minimising downtime while maximising lifespan. Our licensed plumbers bring 22 years of experience to every project, ensuring quality results that protect your investment."
      ],
      bullets: [
        "22 Years of Experience",
        "Licensed Plumbers",
        "On-Time Completion Guaranteed",
        "Minimal Business Disruption",
        "Quality Materials & Workmanship"
      ]
    },
    sections: [
      {
        title: "Why Choose Commercial Re-Roofing for Your Melbourne Business?",
        body: [
          "Melbourne's weather varies from scorching summers to heavy winter rain, placing significant stress on commercial roofs. Re-roofing provides long-term protection with robust materials designed to withstand our harsh climate.",
          "Adding a new roofing layer over a weathered roof can be a cost-effective alternative to full replacement, extending your roof's life by decades while avoiding the expense of complete removal.",
          "Our team works efficiently to minimize disruption to your business operations, coordinating with your schedule to ensure work is completed on time and within budget."
        ],
        image: "/img/commercial-re-roofing-melbourne.jpg",
        imageLeft: true
      },
      {
        title: "Our Expert Commercial Re-Roofing Services",
        body: [
          "We begin with a comprehensive site assessment to understand your building's specific needs and recommend the most appropriate materials and techniques.",
          "Our process covers everything from initial planning and safe access setup to professional installation and rigorous quality assurance inspections.",
          "Every project is completed by licensed plumbers who understand the critical waterproofing and drainage requirements essential for commercial roofing. We ensure full compliance with Australian building codes and OH&S regulations."
        ],
        image: "/img/2025/03/Best-Metal-Roofing-For-Commercial-Flat-Roofs.jpg",
        imageLeft: false
      }
    ],
    seo: {
      title: "Commercial Re-Roofing Melbourne | Active Metal Roofing",
      description: "Reliable commercial re-roofing services in Melbourne & Victoria. Licensed team with 22 years experience, guaranteed on-time completion."
    }
  },

  "commercial-roofing": {
    slug: "commercial-roofing",
    name: "Commercial Roofing",
    heroImage: "/img/2025/03/Roofing-Contractors-for-Commercial-Properties.png",
    intro: {
      title: "Commercial Roofing Melbourne – Complete Solutions for Your Business",
      body: [
        "Active Metal Roofing delivers premium commercial roofing solutions for businesses throughout Melbourne and Victoria. From new installations to major renovations, our expert team ensures your property is protected with the highest quality materials and workmanship.",
        "With over 22 years of experience, our licensed plumbers understand the unique challenges of commercial roofing projects and deliver results that exceed expectations."
      ],
      bullets: [
        "New Commercial Roof Installations",
        "Warehouse & Industrial Roofing",
        "Retail & Office Buildings",
        "Premium Colorbond & Metal Materials",
        "Full OH&S Compliance"
      ]
    },
    sections: [
      {
        title: "Why Choose Professional Commercial Roofing?",
        body: [
          "Your commercial roof is one of your most significant investments, protecting your property, inventory, and operations from Melbourne's unpredictable weather conditions.",
          "Professional installation by licensed plumbers ensures your roofing system is correctly designed, properly installed, and fully compliant with Australian building standards.",
          "We use only premium-grade materials with comprehensive manufacturer warranties, giving you peace of mind that your roof will perform reliably for decades to come."
        ],
        image: "/img/2025/03/Commercial-Flat-Metal-Roofs-Melbourne-300x285.jpg",
        imageLeft: true
      },
      {
        title: "Our Commercial Roofing Process",
        body: [
          "Every project begins with detailed planning and site assessment to understand your specific requirements, building design, and operational needs.",
          "We provide tailored roofing solutions that meet your budget while delivering exceptional quality. Our team coordinates closely with builders, architects, and project managers to ensure seamless integration.",
          "From materials selection through to final inspection, we maintain the highest standards of workmanship and safety, completing your project on time and to specification."
        ],
        image: "/img/2025/03/Flat-Metal-Roofing-Melbourne-300x300.jpeg",
        imageLeft: false
      }
    ],
    seo: {
      title: "Commercial Roofing Melbourne | Active Metal Roofing",
      description: "Professional commercial roofing installations in Melbourne. 22 years experience, licensed plumbers, quality materials. Free quotes available."
    }
  },

  "architectural-cladding": {
    slug: "architectural-cladding",
    name: "Architectural Cladding",
    heroImage: "/img/2025/03/Commercial-Flat-Metal-Roofs-Melbourne.jpg",
    intro: {
      title: "Architectural Cladding Melbourne – Transform Your Building's Exterior",
      body: [
        "Active Metal Roofing specializes in premium architectural cladding that enhances your building's aesthetics while providing superior weather protection and durability.",
        "Our expert team designs and installs custom cladding systems that complement your architectural vision, using the highest quality materials and proven installation techniques."
      ],
      bullets: [
        "Wide Range of Profiles & Colors",
        "Custom Design Solutions",
        "Superior Weather Protection",
        "Low Maintenance Systems",
        "Professional Installation"
      ]
    },
    sections: [
      {
        title: "Why Choose Architectural Cladding for Your Project?",
        body: [
          "Modern architectural cladding offers unparalleled design flexibility, allowing you to create distinctive building facades that stand out while meeting strict performance requirements.",
          "Properly installed cladding systems provide exceptional moisture and wind resistance, protecting your building envelope from Melbourne's harsh weather while improving energy efficiency.",
          "With minimal maintenance requirements and long-lasting durability, quality cladding systems deliver outstanding value over the life of your building."
        ],
        image: "/img/2025/03/Best-Metal-Roofing-For-Commercial-Flat-Roofs-300x200.jpg",
        imageLeft: true
      },
      {
        title: "Our Cladding Installation Expertise",
        body: [
          "We work with a diverse range of cladding materials and profiles, from sleek modern panels to traditional corrugated finishes, ensuring your project achieves the desired aesthetic outcome.",
          "Our licensed team understands the critical importance of proper substrate preparation, flashing installation, and weatherproofing to ensure your cladding system performs flawlessly.",
          "Every installation is completed to the highest standards, with meticulous attention to detail and full compliance with Australian building codes and manufacturer specifications."
        ],
        image: "/img/2025/03/Flat-Metal-Roofing-Solutions-Melbourne-300x265.jpg",
        imageLeft: false
      }
    ],
    seo: {
      title: "Architectural Cladding Melbourne | Premium Metal Cladding",
      description: "Expert architectural cladding installation in Melbourne. Custom designs, premium materials, professional installation by licensed team."
    }
  },

  "industrial-roofing": {
    slug: "industrial-roofing",
    name: "Industrial Roofing",
    heroImage: "/img/industrial-roofing-melbourne.jpg",
    intro: {
      title: "Industrial Roofing Melbourne – Heavy-Duty Solutions",
      body: [
        "Active Metal Roofing delivers robust industrial roofing systems designed for warehouses, factories, and large-scale facilities across Melbourne and Victoria.",
        "Our experienced team specializes in managing extensive industrial projects with full OH&S compliance, ensuring your facility is protected while maintaining operational efficiency."
      ],
      bullets: [
        "Large-Scale Project Expertise",
        "Warehouse & Factory Roofing",
        "Full OH&S Compliance",
        "Minimal Operational Disruption",
        "Engineering-Grade Materials"
      ]
    },
    sections: [
      {
        title: "Why Choose Specialist Industrial Roofing?",
        body: [
          "Industrial facilities require roofing systems engineered to withstand heavy loads, wide spans, and demanding environmental conditions while protecting valuable equipment and inventory.",
          "Our team brings specialised expertise in large-scale roofing projects, understanding the unique structural and operational requirements of industrial buildings.",
          "We prioritize safety on every site, implementing comprehensive OH&S protocols and working efficiently to minimize disruption to your operations."
        ],
        image: "/img/2025/03/Flat-Metal-Roofing-Solutions-Melbourne-300x265.jpg",
        imageLeft: true
      },
      {
        title: "Our Industrial Roofing Approach",
        body: [
          "Every project begins with detailed structural assessment and planning to ensure the roofing system meets load-bearing requirements and building codes.",
          "We use engineering-grade materials specifically designed for industrial applications, providing maximum durability and performance under demanding conditions.",
          "Our experienced crews work efficiently to complete large projects quickly without compromising quality, coordinating closely with facility managers to minimize operational impact."
        ],
        image: "/img/2025/03/Commercial-Flat-Metal-Roofs-Melbourne-300x285.jpg",
        imageLeft: false
      }
    ],
    seo: {
      title: "Industrial Roofing Melbourne | Warehouse & Factory Roofing",
      description: "Heavy-duty industrial roofing for warehouses and factories in Melbourne. Licensed team, OH&S compliant, 22 years experience."
    }
  },

  "roof-inspections": {
    slug: "roof-inspections",
    name: "Roof Inspections",
    heroImage: "/img/2025/03/Flat-Metal-Roofing-Solutions-Melbourne.jpg",
    intro: {
      title: "Professional Roof Inspections Melbourne – Protect Your Investment",
      body: [
        "Active Metal Roofing provides comprehensive roof condition assessments with detailed reports and expert recommendations to help you maintain and protect your roofing investment.",
        "Our licensed plumbers conduct thorough inspections of all roofing components, identifying potential issues before they become costly problems."
      ],
      bullets: [
        "Comprehensive Roof Assessment",
        "Detailed Written Reports",
        "Photo Documentation",
        "Free with Quote Requests",
        "Expert Recommendations"
      ]
    },
    sections: [
      {
        title: "Why Regular Roof Inspections Matter",
        body: [
          "Regular professional inspections identify minor issues like damaged flashings, loose fasteners, or early signs of deterioration before they develop into major leaks or structural damage.",
          "A comprehensive assessment provides documented evidence of your roof's condition, valuable for property transactions, insurance claims, or maintenance planning.",
          "Preventative maintenance guided by professional inspections extends your roof's lifespan significantly, protecting your investment and avoiding unexpected repair costs."
        ],
        image: "/img/2025/03/Best-Metal-Roof-Restoration-300x200.jpg",
        imageLeft: true
      },
      {
        title: "Our Inspection Process",
        body: [
          "We conduct thorough examinations of all roofing components including sheets, flashings, fasteners, gutters, downpipes, and drainage systems.",
          "Every inspection includes detailed photo documentation and a comprehensive written report outlining current condition, identified issues, and specific recommendations.",
          "Our reports prioritize issues by urgency and provide cost-effective solutions, helping you make informed decisions about maintenance and repairs. Inspections are complimentary when requesting project quotes."
        ],
        image: "/img/2025/03/Commercial-Flat-Metal-Roofs-Melbourne-300x285.jpg",
        imageLeft: false
      }
    ],
    seo: {
      title: "Roof Inspections Melbourne | Free Assessment with Quote",
      description: "Professional roof inspections in Melbourne. Detailed reports, photo documentation, expert recommendations. Free with quote requests."
    }
  },

  "colorbond-roof-replacement": {
    slug: "colorbond-roof-replacement",
    name: "Colorbond Roof Replacement",
    heroImage: "/img/2025/03/Flat-Metal-Roofing-Melbourne.jpeg",
    intro: {
      title: "Colorbond Roof Replacement Melbourne – Premium Australian Steel",
      body: [
        "Active Metal Roofing specializes in Colorbond roof replacement, offering the widest range of colors and profiles to suit any building style while providing exceptional durability.",
        "Australian-made Colorbond steel is specifically engineered for our harsh climate conditions, delivering superior performance and lasting protection."
      ],
      bullets: [
        "Extensive Color Range",
        "Australian-Made Steel",
        "Comprehensive Warranties",
        "Bushfire Safety Certified",
        "Energy Efficient Coating"
      ]
    },
    sections: [
      {
        title: "Why Choose Colorbond for Your Roof Replacement?",
        body: [
          "Colorbond steel offers an extensive color palette designed to complement any architectural style, from classic heritage tones to modern bold hues, with finishes that maintain their appearance for decades.",
          "Manufactured specifically for Australian conditions, Colorbond steel withstands extreme temperatures, heavy rain, and coastal salt spray while providing excellent energy efficiency through its reflective coating technology.",
          "With comprehensive manufacturer warranties backed by professional installation, Colorbond roofing delivers exceptional long-term value and peace of mind."
        ],
        image: "/img/2025/03/Best-Metal-Roofing-For-Commercial-Flat-Roofs-300x200.jpg",
        imageLeft: true
      },
      {
        title: "Our Colorbond Installation Excellence",
        body: [
          "We help you select the perfect Colorbond color and profile for your project, considering architectural style, surrounding environment, and energy efficiency requirements.",
          "Our licensed team follows strict installation protocols to ensure your Colorbond roof meets all manufacturer specifications, protecting your warranty and maximizing performance.",
          "Every installation includes proper ventilation design, flashing details, and drainage systems to ensure your Colorbond roof delivers decades of reliable, maintenance-free service."
        ],
        image: "/img/2025/03/Flat-Metal-Roofing-Solutions-Melbourne-300x265.jpg",
        imageLeft: false
      }
    ],
    seo: {
      title: "Colorbond Roof Replacement Melbourne | Active Metal",
      description: "Premium Colorbond roof replacement in Melbourne. Wide color range, comprehensive warranties, licensed installation team."
    }
  },

  "metal-roof-replacement": {
    slug: "metal-roof-replacement",
    name: "Metal Roof Replacement",
    heroImage: "/img/metal-roof-replacement-melbourne.jpg",
    intro: {
      title: "Metal Roof Replacement Melbourne – Expert Installation",
      body: [
        "Active Metal Roofing provides expert metal roof replacement services using premium materials and proven techniques that ensure 40-70 year lifespan with proper installation.",
        "Our licensed team specializes in commercial and industrial metal roofing, delivering quality results that protect your property and investment."
      ],
      bullets: [
        "40-70 Year Lifespan",
        "Multiple Profile Options",
        "Energy Efficient",
        "100% Recyclable Materials",
        "Low Maintenance"
      ]
    },
    sections: [
      {
        title: "Why Choose Metal Roof Replacement?",
        body: [
          "Metal roofing offers unmatched longevity, with properly installed systems lasting 40-70 years compared to 15-25 years for alternative materials, making it an excellent long-term investment.",
          "Available in various profiles including corrugated, klip-lok, and standing seam, metal roofing suits any architectural style while providing superior weather protection and structural performance.",
          "Energy-efficient reflective coatings reduce cooling costs, while the recyclable nature of metal roofing minimizes environmental impact at the end of its long service life."
        ],
        image: "/img/2025/03/Metal-Roof-Restoration-Service-Melbourne-277x300.jpeg",
        imageLeft: true
      },
      {
        title: "Our Metal Roofing Expertise",
        body: [
          "We work with all major metal roofing profiles and materials, helping you select the optimal solution for your building's structural requirements, aesthetic goals, and budget.",
          "Our licensed plumbers understand the critical importance of proper substrate preparation, fastening techniques, and weatherproofing details that ensure long-term performance.",
          "Every installation is completed to the highest standards with comprehensive quality assurance, backed by material warranties and our commitment to workmanship excellence."
        ],
        image: "/img/2025/03/Best-Metal-Roofing-For-Commercial-Flat-Roofs-300x200.jpg",
        imageLeft: false
      }
    ],
    seo: {
      title: "Metal Roof Replacement Melbourne | 40-70 Year Lifespan",
      description: "Expert metal roof replacement in Melbourne. Premium materials, professional installation, licensed team with 22 years experience."
    }
  },

  "metal-roof-restoration": {
    slug: "metal-roof-restoration",
    name: "Metal Roof Restoration",
    heroImage: "/img/2025/03/Metal-Roof-Restoration-Service-Melbourne.jpeg",
    intro: {
      title: "Metal Roof Restoration Melbourne – Extend Your Roof's Lifespan",
      body: [
        "Active Metal Roofing revitalizes aging metal roofs through professional cleaning, repairs, and protective coatings that extend service life by 15-20 years at 30-50% the cost of replacement.",
        "Our comprehensive restoration process addresses corrosion, weathering, and minor damage while refreshing your roof's appearance to like-new condition."
      ],
      bullets: [
        "30-50% Cost Savings vs Replacement",
        "Add 15-20 Years Service Life",
        "Professional Cleaning & Repairs",
        "Protective Coating Systems",
        "Improved Appearance"
      ]
    },
    sections: [
      {
        title: "Why Choose Metal Roof Restoration?",
        body: [
          "Restoration costs a fraction of complete replacement while delivering comparable performance improvements, making it an intelligent choice for structurally sound roofs showing signs of aging.",
          "Professional restoration addresses surface corrosion, fading, and minor damage while applying protective coatings that prevent future deterioration and extend your roof's useful life significantly.",
          "Beyond performance benefits, restoration transforms weathered, faded roofs to like-new appearance, improving your property's curb appeal and value."
        ],
        image: "/img/2025/03/Best-Metal-Roof-Restoration-300x200.jpg",
        imageLeft: true
      },
      {
        title: "Our Restoration Process",
        body: [
          "We begin with thorough cleaning to remove dirt, debris, rust, and biological growth, creating the ideal surface for coating adhesion and inspection.",
          "Our team performs necessary repairs including fastener replacement, flashing repairs, and sealing of penetrations before applying premium protective coating systems.",
          "High-performance coatings provide UV protection, waterproofing, and corrosion resistance, with color options to refresh your roof's appearance while delivering decades of additional protection."
        ],
        image: "/img/2025/03/Metal-Roof-Restoration-Melbourne-200x300.png",
        imageLeft: false
      }
    ],
    seo: {
      title: "Metal Roof Restoration Melbourne | Active Metal",
      description: "Professional metal roof restoration in Melbourne. Add 15-20 years lifespan, save 30-50% vs replacement. Licensed team."
    }
  },

  "roof-restoration": {
    slug: "roof-restoration",
    name: "Roof Restoration",
    heroImage: "/img/2025/03/Best-Metal-Roof-Restoration.jpg",
    intro: {
      title: "Roof Restoration Melbourne – Comprehensive Restoration Services",
      body: [
        "Active Metal Roofing provides complete roof restoration services for commercial and residential properties across Melbourne and Victoria, extending your roof's lifespan while improving appearance and performance.",
        "Our expert restoration process includes thorough cleaning, repairs, protective coatings, and preventative treatments that deliver like-new results at a fraction of replacement cost."
      ],
      bullets: [
        "Cost-Effective Alternative to Replacement",
        "Comprehensive Cleaning & Repairs",
        "Premium Protective Coatings",
        "Improved Energy Efficiency",
        "Enhanced Curb Appeal"
      ]
    },
    sections: [
      {
        title: "Why Choose Professional Roof Restoration?",
        body: [
          "Professional roof restoration addresses wear, weathering, and minor damage while significantly extending your roof's service life, offering excellent value compared to complete replacement.",
          "Our comprehensive approach includes deep cleaning to remove dirt, debris, moss, and lichen, followed by repairs to damaged areas and application of high-performance protective coatings.",
          "Restored roofs not only perform better and last longer, but also dramatically improve your property's appearance and market value while reducing energy costs through reflective coating technology."
        ],
        image: "/img/2025/03/Metal-Roof-Restoration-Service-Melbourne-277x300.jpeg",
        imageLeft: true
      },
      {
        title: "Our Complete Restoration Service",
        body: [
          "We begin with a detailed inspection to assess your roof's condition and identify all areas requiring attention, from structural issues to cosmetic concerns.",
          "Our restoration process includes pressure cleaning, rust treatment, fastener replacement, flashing repairs, and sealing of all penetrations to ensure complete weather protection.",
          "Premium coating systems provide UV protection, waterproofing, and thermal reflection, available in a wide range of colors to refresh your roof's appearance while delivering decades of enhanced performance and protection."
        ],
        image: "/img/2025/03/Best-Metal-Roof-Restoration-300x200.jpg",
        imageLeft: false
      }
    ],
    seo: {
      title: "Roof Restoration Melbourne | Complete Restoration Services",
      description: "Professional roof restoration services in Melbourne. Comprehensive cleaning, repairs & protective coatings. Cost-effective alternative to replacement."
    }
  },

  "roof-repair": {
    slug: "roof-repair",
    name: "Roof Repair",
    heroImage: "/img/roof_repair.png",
    intro: {
      title: "Roof Repair Melbourne – Fast & Reliable Repairs",
      body: [
        "Active Metal Roofing provides prompt, professional roof repair services for commercial and industrial properties across Melbourne and Victoria, addressing leaks, damage, and wear before they become costly problems.",
        "Our experienced team diagnoses issues quickly and implements lasting repairs using quality materials and proven techniques, ensuring your roof continues to protect your property and operations."
      ],
      bullets: [
        "Emergency Leak Repairs",
        "Storm Damage Restoration",
        "Flashing & Penetration Repairs",
        "Fastener Replacement",
        "Quick Response Times"
      ]
    },
    sections: [
      {
        title: "Why Choose Professional Roof Repair?",
        body: [
          "Small roof issues quickly escalate into major problems if left unaddressed. Professional repairs stop leaks, prevent water damage, and protect your property's structural integrity.",
          "Our skilled team identifies the root cause of roofing problems, not just the visible symptoms, ensuring repairs address underlying issues and prevent recurring damage.",
          "Quick, professional repairs are far more cost-effective than delaying maintenance until major replacement becomes necessary, protecting both your property and your budget."
        ],
        image: "/img/2025/03/Best-Metal-Roof-Restoration-300x200.jpg",
        imageLeft: true
      },
      {
        title: "Our Roof Repair Services",
        body: [
          "We handle all types of commercial and industrial roof repairs, from emergency leak fixes to scheduled maintenance work, storm damage restoration, and preventative repairs.",
          "Our comprehensive approach includes thorough inspection to identify all issues, professional repairs using quality materials, and detailed documentation for your records and insurance purposes.",
          "Every repair is completed to the highest standards by licensed professionals, backed by our workmanship guarantee and commitment to lasting solutions that protect your investment."
        ],
        image: "/img/2025/03/Metal-Roof-Restoration-Service-Melbourne-277x300.jpeg",
        imageLeft: false
      }
    ],
    seo: {
      title: "Roof Repair Melbourne | Fast Emergency Repairs",
      description: "Professional roof repair services in Melbourne. Emergency leak repairs, storm damage restoration, licensed team with 22 years experience."
    }
  }
};

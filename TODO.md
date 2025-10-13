# Active Metal Roofing - TODO Checklist

## 🔴 Critical - Must Complete Before Launch

### Content & Configuration
- [ ] **Add ABN** - Update `site.config.js` with actual ABN number
- [ ] **Remove noindex tags** - Delete `<meta name="robots" content="noindex,nofollow">` from ALL pages
- [ ] **Update robots.txt** - Change to allow indexing (uncomment production section)
- [ ] **Verify contact details** - Double-check phone, email, address on all pages
- [ ] **Set up form endpoint** - Configure Formspree/EmailJS or custom API
- [ ] **Test contact form** - Submit test form and verify email delivery

### Images & Media
- [ ] **Add hero images** - Replace placeholder images with actual photos
  - Homepage hero: Commercial building with new roof
  - Service pages: Relevant roofing project photos
  - About page: Team/workshop photos
- [ ] **Optimize all images** - Compress to WebP/JPEG, target < 200KB each
- [ ] **Add alt text** - Descriptive alt text for all images (SEO + accessibility)
- [ ] **Create favicon** - Add `favicon.ico` and app icons
- [ ] **Logo files** - Add company logo to `/assets/img/`

### SEO & Analytics
- [ ] **Google Analytics** - Add tracking code to all pages
- [ ] **Google Search Console** - Verify domain ownership
- [ ] **Submit sitemap** - Upload sitemap.xml to Search Console
- [ ] **Add JSON-LD schema** - LocalBusiness structured data
- [ ] **Verify meta descriptions** - Ensure all are unique and compelling

### Testing
- [ ] **Test all links** - Verify internal and external links work
- [ ] **Mobile responsiveness** - Test on iPhone, Android, iPad
- [ ] **Cross-browser testing** - Chrome, Firefox, Safari, Edge
- [ ] **Form validation** - Test required fields, email format
- [ ] **Performance audit** - Run Lighthouse, target 90+ score
- [ ] **Accessibility check** - WCAG AA compliance

---

## 🟡 High Priority - Complete Within First Week

### Service Pages
- [ ] **Commercial Roofing page** - Create using template
- [ ] **Architectural Cladding page** - Create using template
- [ ] **Industrial Roofing page** - Create using template
- [ ] **Roof Inspections page** - Create using template
- [ ] **Colorbond Roof Replacement page** - Create using template
- [ ] **Metal Roof Replacement page** - Create using template
- [ ] **Metal Roof Restoration page** - Create using template

### Additional Pages
- [ ] **Services index page** - Overview of all services at `/services/`
- [ ] **FAQ page** - Common roofing questions
- [ ] **Projects/Gallery page** - Showcase completed work
- [ ] **Testimonials page** - Client reviews and case studies

### Content Enhancements
- [ ] **Add case studies** - 3-5 detailed project examples
- [ ] **Client testimonials** - Collect and add 5-10 reviews
- [ ] **Before/after photos** - Gallery of transformations
- [ ] **Service area map** - Visual representation of coverage

---

## 🟢 Medium Priority - Complete Within First Month

### Location Pages
- [ ] **Melbourne CBD** - `/locations/melbourne-cbd.html`
- [ ] **Langwarrin** - `/locations/langwarrin.html`
- [ ] **Frankston** - `/locations/frankston.html`
- [ ] **Dandenong** - `/locations/dandenong.html`
- [ ] **Mornington Peninsula** - `/locations/mornington-peninsula.html`
- [ ] **Bayside** - `/locations/bayside.html`

### Blog Setup
- [ ] **Blog index page** - `/blog/index.html`
- [ ] **Blog post template** - Create reusable template
- [ ] **Write 5 initial blog posts**:
  - Commercial roofing trends 2025
  - Signs your roof needs replacement
  - Colorbond vs traditional roofing
  - Industrial roofing maintenance tips
  - Choosing the right commercial roofer

### Features & Functionality
- [ ] **Google Maps integration** - Embed map on contact page
- [ ] **Live chat widget** - Optional (Tawk.to, Intercom, etc.)
- [ ] **Call tracking** - Add tracking number if needed
- [ ] **Social media links** - Add when profiles are created
- [ ] **Newsletter signup** - Mailchimp/EmailOctopus integration

### SEO & Marketing
- [ ] **Create Google Business Profile** - Verify and optimize
- [ ] **Generate backlinks** - Industry directories, local business listings
- [ ] **Create social media profiles** - Facebook, LinkedIn, Instagram
- [ ] **Email signature** - Add website link to team emails
- [ ] **Business cards** - Update with new website URL

---

## 🔵 Low Priority - Nice to Have

### Content Additions
- [ ] **Video content** - Add roofing process videos
- [ ] **3D renders** - Visualize roofing options
- [ ] **Downloadable resources** - PDF guides, checklists
- [ ] **Roofing calculator** - Interactive cost estimator
- [ ] **Weather dashboard** - Live weather for roofing decisions

### Technical Enhancements
- [ ] **Progressive Web App** - Make installable
- [ ] **Dark mode** - Add theme toggle
- [ ] **Lazy loading** - Implement for images
- [ ] **Service Worker** - Offline support
- [ ] **CDN setup** - Cloudflare or similar

### Marketing & Growth
- [ ] **Email marketing** - Set up drip campaigns
- [ ] **Retargeting pixels** - Facebook, Google Ads
- [ ] **A/B testing** - Test CTAs and layouts
- [ ] **Conversion tracking** - Set up goals in GA
- [ ] **Heatmaps** - Hotjar or similar tool

---

## 📋 Ongoing Maintenance Tasks

### Weekly
- [ ] Monitor form submissions
- [ ] Check Google Analytics traffic
- [ ] Respond to any contact form enquiries
- [ ] Check website uptime

### Monthly
- [ ] Review and update service pages
- [ ] Add new blog post
- [ ] Check for broken links
- [ ] Review Search Console performance
- [ ] Update testimonials

### Quarterly
- [ ] Review and refresh all content
- [ ] Update portfolio/projects section
- [ ] Run full SEO audit
- [ ] Update sitemap if new pages added
- [ ] Performance optimization review

---

## 🔧 Technical Debt & Improvements

- [ ] **Refactor CSS** - Consolidate duplicate styles
- [ ] **Minify assets** - CSS and JS minification
- [ ] **Image CDN** - Move images to CDN for faster loading
- [ ] **Preload critical resources** - Optimize loading sequence
- [ ] **Security headers** - Add CSP, HSTS if not already present
- [ ] **Backup strategy** - Automated backups of content

---

## 📝 Content Writing Needs

### Service Pages (Full Copy)
- [ ] Commercial Roofing (2 remaining paragraphs)
- [ ] Architectural Cladding (full page)
- [ ] Industrial Roofing (full page)
- [ ] Roof Inspections (full page)
- [ ] Colorbond Roof Replacement (full page)
- [ ] Metal Roof Replacement (full page)
- [ ] Metal Roof Restoration (full page)

### Additional Content
- [ ] About page - team bios (if applicable)
- [ ] FAQ content (10-15 questions)
- [ ] Blog post outlines
- [ ] Email templates for form responses

---

## 🎨 Design Tasks

- [ ] **Create branded graphics** - Headers for blog/service pages
- [ ] **Social media templates** - Canva templates for posts
- [ ] **Email signatures** - HTML email signature for team
- [ ] **Print materials** - Business cards, brochures (if needed)

---

## 📊 Metrics to Track

Once live, monitor these metrics:

- **Traffic**: Total visits, unique visitors, page views
- **Conversions**: Form submissions, phone clicks
- **Engagement**: Bounce rate, time on site, pages per session
- **SEO**: Rankings for target keywords, backlinks, domain authority
- **Technical**: Page load time, Core Web Vitals, uptime

---

## 🚀 Launch Plan

### Day Before Launch
- [ ] Final content review
- [ ] Test all functionality
- [ ] Verify analytics installed
- [ ] Backup current site (if replacing existing)

### Launch Day
- [ ] Update DNS/deploy to production
- [ ] Remove staging/noindex tags
- [ ] Submit to search engines
- [ ] Post on social media
- [ ] Send announcement email

### Week After Launch
- [ ] Monitor for issues
- [ ] Check analytics daily
- [ ] Respond quickly to any contact forms
- [ ] Gather initial feedback

---

## 💡 Future Enhancements

**Phase 2 (3-6 months)**
- Customer portal for project tracking
- Online quote calculator
- Appointment booking system
- Live roof inspection scheduling

**Phase 3 (6-12 months)**
- Full CMS integration (WordPress/Strapi)
- Customer dashboard
- Before/after comparison tool
- Augmented reality roof visualizer

---

## Notes & Reminders

- **Backup before changes** - Always backup before making major updates
- **Test on staging first** - Use Vercel preview deployments
- **Mobile-first** - Most users will be on mobile
- **Speed matters** - Every 100ms delay reduces conversions

---

## Quick Reference

### File Locations
- **Contact details**: All HTML files (footer), `site.config.js`
- **Navigation**: All HTML files (header + mobile drawer)
- **Styles**: `/assets/css/styles.css`, `/assets/css/site.css`
- **Scripts**: `/assets/js/mobile-nav.js`
- **Config**: `site.config.js`, `vercel.json`

### Common Updates
- **Phone number**: Find/replace `0451 866 494` in all files
- **Email**: Find/replace `admin@activemetalroofing.com.au`
- **Address**: Find/replace `1 Knott Court, Langwarrin`

---

**Last Updated**: October 13, 2025
**Status**: Pre-launch
**Priority**: Complete 🔴 Critical tasks ASAP

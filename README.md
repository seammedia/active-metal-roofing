# Active Metal Roofing Website

Professional static HTML website for Active Metal Roofing - Commercial and Industrial Roofing Specialists serving Melbourne and Victoria.

## Project Overview

This is a static HTML/CSS/JavaScript website built using the South East Fencer template structure. It's optimized for performance, SEO, and easy deployment on Vercel.

**Site URL**: https://activemetalroofing.com.au
**Built**: October 2025
**Template**: South East Fencer (adapted)

## Quick Start

### Local Development

```bash
# 1. Navigate to project directory
cd active-metal-roofing

# 2. Install dependencies (for image optimization only)
npm install

# 3. Start local development server
npm run dev

# 4. Open browser to http://localhost:8000
```

### Build (Optional)

```bash
# Optimize images (if you add new images)
npm run build:images
```

## Project Structure

```
active-metal-roofing/
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact page with form
├── services/               # Service pages
│   ├── commercial-re-roofing.html
│   ├── commercial-roofing.html
│   ├── architectural-cladding.html
│   ├── industrial-roofing.html
│   └── roof-inspections.html
├── assets/
│   ├── css/
│   │   ├── styles.css      # Main styles
│   │   ├── site.css        # Site-specific styles
│   │   └── header.css      # Header/navigation styles
│   ├── js/
│   │   ├── mobile-nav.js   # Mobile navigation
│   │   └── site.js         # Additional scripts
│   ├── fonts/              # Custom fonts (if any)
│   └── img/                # Images
├── blog/                   # Blog posts (future)
├── locations/              # Location pages (future)
├── site.config.js          # Centralized configuration
├── sitemap.xml             # XML sitemap
├── robots.txt              # Robots.txt
├── vercel.json             # Vercel configuration
└── package.json            # NPM dependencies

```

## Site Configuration

All branding, contact details, and site settings are centralized in `site.config.js`:

```javascript
// Edit these values before going live:
- phone: "0451 866 494"
- email: "admin@activemetalroofing.com.au"
- address: "1 Knott Court, Langwarrin, VIC 3910"
- domain: "activemetalroofing.com.au"
- ABN: "TODO: Add ABN"
```

## Content Management

### Adding a New Service Page

1. Copy `/services/commercial-re-roofing.html` as a template
2. Update the following:
   - Page title and meta description
   - H1 heading and hero content
   - Service description and benefits
   - Update canonical URL
3. Add service to navigation in all pages (header + mobile drawer)
4. Add to `sitemap.xml`

### Editing Contact Details

Update contact information in **two places**:
1. `site.config.js` (for future use)
2. Footer section in all HTML pages

### Adding Blog Posts

1. Create HTML file in `/blog/` directory
2. Follow existing page structure (header, content, footer)
3. Add to sitemap.xml
4. Link from homepage or blog index

## Deployment

### Vercel (Recommended)

1. **Initial Setup**:
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Login to Vercel
   vercel login

   # Deploy
   vercel
   ```

2. **Production Deployment**:
   ```bash
   vercel --prod
   ```

3. **Custom Domain**:
   - Go to Vercel dashboard → Project → Settings → Domains
   - Add `activemetalroofing.com.au`
   - Update DNS records as instructed

### Manual Deployment (Any Static Host)

Simply upload all files to your web host's public directory:
- cPanel: Upload to `public_html/`
- Netlify: Drag and drop folder
- AWS S3: Upload via AWS Console

## Pre-Launch Checklist

### Required Changes

- [ ] Update `robots.txt` - Remove `Disallow: /` for production
- [ ] Update all pages - Remove `<meta name="robots" content="noindex,nofollow">`
- [ ] Add actual ABN to `site.config.js`
- [ ] Set up contact form endpoint (see Form Configuration section)
- [ ] Add actual images to `/assets/img/`
- [ ] Update all image paths from placeholders
- [ ] Test contact form submission
- [ ] Add Google Analytics ID (optional)

### Form Configuration

The contact form currently points to a placeholder endpoint. Choose one:

**Option 1: Formspree (Easiest)**
1. Sign up at https://formspree.io
2. Create a new form
3. Replace `YOUR_FORM_ID` in `contact.html` line 265:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

**Option 2: Custom API**
1. Create server-side endpoint (Node.js, PHP, etc.)
2. Update fetch URL in `contact.html`
3. Handle CORS if needed

**Option 3: EmailJS**
1. Sign up at https://www.emailjs.com
2. Follow their integration guide
3. Update JavaScript in `contact.html`

### SEO Optimization

- [ ] Update meta descriptions for all pages
- [ ] Verify canonical URLs are correct
- [ ] Add structured data (JSON-LD) for LocalBusiness
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Optimize images (compress, add alt text)
- [ ] Test page speed (target: 90+ on Lighthouse)

## Features

### Implemented

✅ Responsive design (mobile, tablet, desktop)
✅ Mobile navigation with hamburger menu
✅ Contact form with validation
✅ SEO-optimized pages with meta tags
✅ Clean, professional design
✅ Fast-loading static HTML
✅ Vercel-ready deployment config
✅ XML sitemap
✅ Security headers

### To Be Added (See TODO List)

- [ ] Remaining service pages (4 more)
- [ ] Location-specific pages
- [ ] Projects/gallery section
- [ ] Blog functionality
- [ ] Image optimization
- [ ] Google Maps integration
- [ ] Client testimonials
- [ ] Schema.org structured data

## Brand Colors

```css
Primary: #1e88e5 (Blue)
Primary Light: #A3D7F3 (Light Blue)
Secondary: #0d47a1 (Dark Blue)
Dark: #212121
Light: #f5f5f5
White: #ffffff
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

Target metrics:
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## Support & Maintenance

### Common Tasks

**Update Phone Number**:
1. Edit `site.config.js`
2. Find and replace in all HTML files
3. Search for: `0451 866 494`

**Update Email**:
1. Edit `site.config.js`
2. Find and replace in all HTML files
3. Search for: `admin@activemetalroofing.com.au`

**Add New Navigation Item**:
1. Add to desktop nav (`.nav-list`)
2. Add to mobile drawer (`.drawer-list`)
3. Update on ALL pages

## Troubleshooting

### Form Not Sending

- Check console for errors
- Verify Formspree endpoint URL
- Check network tab in DevTools
- Ensure CORS is configured if using custom API

### Images Not Loading

- Check file paths are correct
- Ensure images are in `/assets/img/`
- Verify file extensions match HTML references
- Check case sensitivity (macOS vs Linux servers)

### Mobile Menu Not Working

- Check `/assets/js/mobile-nav.js` is loaded
- Verify no JavaScript errors in console
- Ensure HTML structure matches expected selectors

## Credits

- **Template**: South East Fencer
- **Built by**: [Your Name/Company]
- **Client**: Active Metal Roofing Vic Pty Ltd
- **Date**: October 2025

## License

Proprietary - All rights reserved by Active Metal Roofing Vic Pty Ltd

---

## Contact

For website support or questions:
- **Email**: admin@activemetalroofing.com.au
- **Phone**: 0451 866 494
- **Address**: 1 Knott Court, Langwarrin, VIC 3910, Australia

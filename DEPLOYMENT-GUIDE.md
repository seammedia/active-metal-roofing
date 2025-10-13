# Vercel Deployment Guide - Active Metal Roofing

## ✅ Pre-Deployment Checklist

- ✅ `.vercelignore` created (excludes 1GB+ of WordPress files)
- ✅ All images in `public/img/` (29 files, 1.9MB)
- ✅ Next.js App Router structure confirmed
- ✅ Build successful: 15 pages, 142 files, 32MB
- ✅ API route functional (`/api/contact`)
- ✅ Standard build (not static export) for API support

## 📊 Build Analysis

**What Gets Deployed:**
- `.next/` directory: **32MB** (142 files)
- `public/` directory: **1.9MB** (29 image files)
- Source code: ~500KB
- **Total Upload**: ~35MB

**What Gets Excluded (via .vercelignore):**
- `_import/`: **1.0GB** (WordPress exports) ❌
- `_archive/`: **68KB** (old HTML files) ❌
- `assets/`: **2.1MB** (duplicate images) ❌
- **Savings**: ~1GB not uploaded!

## 🚀 Deployment Option A: GitHub Auto-Deploy (Recommended)

### Prerequisites
- GitHub repository created
- Vercel account connected to GitHub

### Steps

1. **Add Git remote** (if not already added):
```bash
cd ~/active-metal-roofing
git remote add origin https://github.com/YOUR_USERNAME/active-metal-roofing.git
```

2. **Commit all changes**:
```bash
git add -A
git commit -m "Ready for Vercel deployment - optimized for rate limits"
```

3. **Push to GitHub**:
```bash
git push -u origin main
```

4. **Connect to Vercel**:
   - Go to https://vercel.com/new
   - Select "Import Git Repository"
   - Choose `active-metal-roofing`
   - Framework: **Next.js** (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

5. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - First deployment: ~2-3 minutes
   - Subsequent deployments: ~1 minute (incremental)

### Automatic Deployments
Once connected, every `git push` to `main` triggers automatic deployment.

---

## 🚀 Deployment Option B: Vercel CLI with Archive

### Prerequisites
- Vercel CLI installed: `npm install -g vercel`
- Logged in: `vercel login`

### Steps

1. **Clean build** (recommended):
```bash
cd ~/active-metal-roofing
rm -rf .next
npm run build
```

2. **Deploy with archive compression**:
```bash
vercel --prod --archive=tgz
```

The `--archive=tgz` flag:
- Compresses files before upload
- Reduces file count from ~170 to 1 file
- Avoids "too many files" rate limit
- Recommended for CLI deployments

3. **Monitor deployment**:
```
Vercel CLI 46.0.2
🔍  Inspect: https://vercel.com/...
✅  Production: https://active-metal-roofing.vercel.app [2m]
```

### Expected Upload Size
- With `--archive=tgz`: **~8-12MB** (compressed)
- Without archive: **~35MB** (uncompressed)
- Upload time: ~30-60 seconds

---

## 📋 Routes Generated (15 Total)

### Static Pages (14)
- `/` - Homepage
- `/about` - About page
- `/contact` - Contact page with form
- `/services/commercial-re-roofing`
- `/services/commercial-roofing`
- `/services/architectural-cladding`
- `/services/industrial-roofing`
- `/services/roof-inspections`
- `/services/colorbond-roof-replacement`
- `/services/metal-roof-replacement`
- `/services/metal-roof-restoration`
- `/_not-found` - 404 page

### Dynamic Routes (1)
- `/api/contact` - Form submission endpoint (Edge Function)

---

## 🔧 Environment Variables (Optional)

If you want to configure the contact form:

1. In Vercel Dashboard → Settings → Environment Variables
2. Add:
   - `CONTACT_FORM_ENDPOINT` - Your Formspree/SendGrid endpoint
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` - If using email service

---

## ✅ Post-Deployment Verification

After deployment, test these URLs:

```bash
# Homepage
curl -I https://your-domain.vercel.app/

# About page
curl -I https://your-domain.vercel.app/about

# Contact page
curl -I https://your-domain.vercel.app/contact

# Service page
curl -I https://your-domain.vercel.app/services/commercial-re-roofing

# API endpoint (should return 405 for GET)
curl -I https://your-domain.vercel.app/api/contact

# Image test
curl -I https://your-domain.vercel.app/img/logo.webp
```

Expected responses:
- Pages: `200 OK`
- API: `405 Method Not Allowed` (POST only)
- Images: `200 OK`

---

## 🎨 Custom Domain Setup

1. **Add domain in Vercel**:
   - Project → Settings → Domains
   - Add `activemetalroofing.com.au`

2. **Update DNS records**:
   - Type: `A` / Name: `@` / Value: `76.76.21.21`
   - Type: `CNAME` / Name: `www` / Value: `cname.vercel-dns.com`

3. **Update metadata**:
   - Remove `noindex` tags in `app/layout.tsx`
   - Update canonical URLs to production domain

---

## 🐛 Troubleshooting

### Rate Limit Error
```
Error: Too many requests - try again in 1 hour
```
**Solution**: Use `--archive=tgz` flag or wait 1 hour.

### Build Fails
```
Error: Module not found
```
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
**Check**:
- Images must be in `public/img/`
- Paths must start with `/img/` (not `/public/img/`)
- Example: `<img src="/img/logo.webp" />`

### API Route Not Working
**Check**:
- `next.config.mjs` does NOT have `output: 'export'`
- Route file is `app/api/contact/route.ts` (not `route.tsx`)
- Function is exported: `export async function POST(...)`

---

## 📈 Performance Expectations

| Metric | Expected Value |
|--------|----------------|
| Build Time | ~15-30 seconds |
| Deploy Time | ~1-2 minutes |
| Page Load | <500ms (static) |
| API Response | <200ms |
| Lighthouse Score | 90+ |
| Bundle Size | ~96KB first load |

---

## 🔄 Continuous Deployment

### Automatic (GitHub)
Push to main → Auto-deploy:
```bash
git add .
git commit -m "Update content"
git push origin main
```

### Manual (CLI)
```bash
vercel --prod --archive=tgz
```

---

## 📝 Final Checklist

Before going live:

- [ ] Test all routes on staging URL
- [ ] Verify images load correctly
- [ ] Test contact form submission
- [ ] Check responsive design (mobile/tablet)
- [ ] Remove `noindex` meta tags
- [ ] Add ABN to site.config.js
- [ ] Configure custom domain
- [ ] Set up analytics (Google Analytics 4)
- [ ] Test page speed (Lighthouse)
- [ ] Add sitemap.xml generation
- [ ] Configure email endpoint for contact form

---

## 🎉 Success Criteria

✅ All pages return 200 status
✅ Images display correctly
✅ Contact form accepts submissions
✅ Mobile responsive layout works
✅ Lighthouse score >90
✅ Custom domain resolves

---

**Ready to deploy!** Choose Option A (GitHub) for automatic deployments or Option B (CLI) for one-off deploys.

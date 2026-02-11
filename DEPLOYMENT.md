# Aura Digital - Deployment Guide

Complete step-by-step instructions for deploying your website to production.

---

## 📋 Pre-Deployment Checklist

### Code Quality
- [ ] No console.log() statements in production code
- [ ] All TypeScript errors resolved
- [ ] All links tested and working
- [ ] All images load correctly
- [ ] Mobile responsiveness verified

### Content
- [ ] Product information accurate and up-to-date
- [ ] Prices in correct formats (₹/$/ LKR)
- [ ] Phone number updated globally
- [ ] Email address updated
- [ ] Disclaimer reviewed and finalized
- [ ] All pages proofread for typos

### SEO & Meta
- [ ] Page titles are unique and descriptive
- [ ] Meta descriptions are compelling
- [ ] Canonical URLs configured
- [ ] Hreflang tags for all regions
- [ ] Open Graph images set for all pages
- [ ] Twitter cards configured

### Features
- [ ] WhatsApp button functional
- [ ] Purchase modal working on all products
- [ ] Contact form submissions work
- [ ] Form validation messages clear
- [ ] Navigation works on mobile
- [ ] All animations perform smoothly

---

## 🚀 Deploying to Netlify

### Option A: CLI Deployment (Fastest)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Choose site details**
   - Site name: `aura-digital` or `auradigital`
   - Team: Select your team
   - Publish directory: `dist`

5. **Your site is live!**
   - Visit provided URL
   - Add custom domain (if you have one)

### Option B: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/aura-digital.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub
   - Choose `aura-digital` repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18.x

4. **Deploy**
   - Netlify will automatically build and deploy
   - Every push to `main` triggers auto-deployment

5. **Add Custom Domain**
   - Go to Site Settings → Domain Management
   - Add your custom domain
   - Update DNS records
   - SSL/HTTPS automatically configured

### Netlify Environment Variables

Create environment variables in Netlify Dashboard:

1. Go to Site Settings → Build & Deploy → Environment
2. Add variables:
   ```
   VITE_SITE_URL=https://yourdomain.com
   VITE_WHATSAPP_NUMBER=94723146364
   ```

---

## 🚀 Deploying to Vercel

### Option A: GitHub Integration (Easiest)

1. **Push to GitHub** (same as above)

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import GitHub repository
   - Select `aura-digital` repo

3. **Configure Project**
   - Framework: **Vite**
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm ci`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live at `aura-digital-xyz.vercel.app`

5. **Add Custom Domain**
   - Go to Settings → Domains
   - Add your domain
   - Update DNS records
   - SSL/HTTPS auto-configured

### Option B: CLI Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Follow prompts**
   - Confirm production deployment
   - Choose project name
   - Configure build settings if prompted

### Vercel Environment Variables

1. Go to Project Settings → Environment Variables
2. Add variables:
   ```
   VITE_SITE_URL = your-domain.com
   VITE_WHATSAPP_NUMBER = 94723146364
   ```

---

## 🌐 Custom Domain Setup

### With Netlify

1. **Purchase Domain**
   - GoDaddy, Namecheap, AWS Route 53, or similar

2. **Connect to Netlify**
   - Site Settings → Domain Management
   - Click "Add a domain"
   - Enter your domain
   - Choose "Use Netlify DNS" (easiest)

3. **Update Domain Settings**
   - Netlify will provide nameservers
   - Update your domain registrar with these nameservers
   - Wait 24-48 hours for DNS propagation

4. **Verify SSL**
   - Netlify auto-generates SSL certificate
   - Verify in Site Settings → HTTPS

### With Vercel

1. **Connect Domain**
   - Project Settings → Domains
   - Add domain name
   - Select "Use Vercel Nameservers"

2. **Update Nameservers**
   - Go to your registrar
   - Update nameservers provided by Vercel
   - Wait for DNS propagation

3. **Configure SSL**
   - Automatic with Vercel
   - Verify at https://your-domain.com

---

## 🔍 Post-Deployment Verification

### Functionality Tests

```bash
# Test in browser console
curl -I https://yourdomain.com
# Should return 200 OK
```

**Manual Checks:**
- [ ] Homepage loads quickly (<3 seconds)
- [ ] Navigation between pages works
- [ ] Purchase modal opens and closes
- [ ] WhatsApp button opens WhatsApp
- [ ] Contact form submits via WhatsApp
- [ ] Phone number is clickable (tel: link)
- [ ] All images load correctly
- [ ] Responsive on mobile (use DevTools)
- [ ] Dark theme displays properly
- [ ] Animations are smooth

### SEO Verification

1. **Google Search Console**
   ```
   - Go to https://search.google.com/search-console
   - Add property for your domain
   - Submit sitemap: https://yourdomain.com/sitemap.xml
   - Request indexing for key pages
   ```

2. **Check Meta Tags**
   - Open DevTools (F12)
   - Go to Head section
   - Verify: title, meta[description], og:image, hreflang

3. **Test in Google Lighthouse**
   - DevTools → Lighthouse
   - Run audit
   - Check performance, accessibility, SEO scores
   - Target: 90+ on all metrics

4. **Test Page Speed**
   ```
   - PageSpeed Insights: https://pagespeed.web.dev/
   - GTmetrix: https://gtmetrix.com/
   - WebPageTest: https://www.webpagetest.org/
   ```

### Social Media Preview

Test how your site appears on social media:
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: Share link and check preview

---

## 📊 Monitor Performance

### Set Up Analytics

1. **Google Analytics 4**
   ```
   - Create GA4 property at https://analytics.google.com/
   - Get Measurement ID (G-XXXXXXXXXX)
   - Add to index.html or use GTM
   ```

2. **Netlify/Vercel Analytics**
   - Already included in deployment
   - View in your platform dashboard

### Track Conversions

1. **WhatsApp Form Submissions**
   - Add event tracking in `PurchaseModal.tsx`
   - Track button clicks

2. **Contact Form Submissions**
   - Already sends via WhatsApp (tracked)
   - Add event tracking for better insights

3. **Product Views**
   - Track which products are most viewed
   - Monitor conversion funnels

---

## 🔧 Updating After Deployment

### Making Changes

1. **Update Code Locally**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

2. **Automatic Deployment**
   - Netlify/Vercel auto-deploys on push
   - Check deployment status in dashboard
   - Takes 1-3 minutes usually

3. **Verify Changes**
   - Wait for deployment to complete
   - Clear browser cache (Ctrl+Shift+Del)
   - Visit site and verify changes

### Rollback if Needed

```bash
# View deployment history
git log --oneline

# Rollback to previous commit
git revert <commit-hash>
git push origin main
```

---

## 🔐 Security Checklist

- [ ] No sensitive data in code (API keys, tokens)
- [ ] Environment variables used for config
- [ ] HTTPS enabled and enforced
- [ ] Form validation on client & server
- [ ] CORS headers configured if needed
- [ ] Security headers set (CSP, X-Frame-Options, etc.)
- [ ] Dependencies updated to latest versions

---

## 📈 Optimization Tips

### Performance

1. **Image Optimization**
   - Current: Unsplash (automatically optimized CDN)
   - Alternative: Use ImageKit or Cloudinary for better control

2. **Code Splitting**
   - Already enabled with Vite
   - Route-based splitting happens automatically

3. **Caching**
   - Set cache headers in `vercel.json` or Netlify config
   - Example TTL: 1 year for static assets

4. **CDN**
   - Both Netlify and Vercel use global CDN
   - Automatic caching and distribution

### SEO

1. **Sitemap Generation**
   ```bash
   npm install --save-dev sitemap
   # Add script to generate sitemap.xml
   ```

2. **Mobile Optimization**
   - Already mobile-first designed
   - Test with PageSpeed Insights

3. **Structured Data**
   - JSON-LD already implemented
   - Test with: https://schema.org/validator

---

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist package-lock.json
npm install
npm run build
```

### Site Not Loading

1. Check deployment status in platform dashboard
2. Verify domain DNS is pointing to platform
3. Clear browser cache and try incognito mode
4. Check browser console for errors (F12)

### Performance Issues

1. Check Core Web Vitals in PageSpeed Insights
2. Reduce image sizes
3. Enable compression in server config
4. Check for third-party script bottlenecks

### WhatsApp Integration Not Working

1. Verify phone number format: `94723146364`
2. Check URL encoding in encoded messages
3. Test on actual WhatsApp (not all browser extensions support it)
4. Try on mobile device

---

## 📚 Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [SEO Best Practices](https://developers.google.com/search)
- [Web Vitals](https://web.dev/vitals/)

---

## 🎯 Quick Deployment Summary

### Fastest Way (GitHub + Netlify)
1. `npm run build` to verify builds locally
2. Push to GitHub: `git push origin main`
3. Connect GitHub repo to Netlify
4. Auto-deployed! ✅

### For Experienced Developers (Vercel)
1. Connect GitHub to Vercel
2. Select repository
3. Deploy button → Done! ✅

### Timeline
- **Local testing**: 5-10 minutes
- **Repository setup**: 5 minutes
- **Platform configuration**: 2-3 minutes
- **First deployment**: 1-3 minutes
- **Domain setup**: 24-48 hours for DNS

---

**Your site is now production-ready!** 🎉

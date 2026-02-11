# 🚀 Aura Digital Setup Instructions

Complete guide to get your Aura Digital website up and running.

---

## ⚡ Quick Start (5 minutes)

### 1. Extract & Navigate
```bash
cd "path/to/aura web"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser. Site auto-opens!

### 4. Test Everything
- [ ] Navigate between pages
- [ ] Click "Purchase" buttons
- [ ] Test WhatsApp buttons
- [ ] Fill contact form
- [ ] Verify on mobile (DevTools)

### 5. Build for Production
```bash
npm run build
```

Output: `dist/` folder ready to deploy

---

## 📦 What's Included

✅ **Complete React Application** with Vite
✅ **4 Main Pages**: Home, About, Products, Contact
✅ **WhatsApp Integration**: Floating button + order flow
✅ **Purchase Modal**: Product selection with prefilled orders
✅ **Modern Design**: Dark theme, animations, glassmorphism
✅ **SEO Optimized**: Meta tags, hreflang, JSON-LD, Open Graph
✅ **Mobile Responsive**: Fully tested on all screen sizes
✅ **TypeScript**: Fully typed for better development
✅ **Tailwind CSS**: Beautiful responsive styling
✅ **8+ Products**: ChatGPT, Midjourney, GitHub, etc.

---

## 🛠️ Available Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint TypeScript
npm run lint
```

---

## 📝 Customization Guide

### Update Business Information

**1. Phone Number**
Replace `94723146364` globally:
- `src/components/WhatsAppButton.tsx` (line 5)
- `src/components/Footer.tsx` (line 24)
- `src/components/PurchaseModal.tsx` (line 26)
- `src/pages/Contact.tsx` (line 60)

**2. Email Address**
Update in `src/pages/Contact.tsx` (line 82):
```typescript
<a href="mailto:your@email.com">
  your@email.com
</a>
```

**3. Business Name**
Already set as "Aura Digital" throughout
- Update in `src/components/SEO.tsx` (line 14) if needed

---

### Customize Products

Edit `src/pages/Products.tsx`:

```typescript
{
  id: '1',
  name: 'Product Name',           // Display name
  price: '₹499 / LKR 1,500 / $5', // Multi-currency pricing
  description: '...',             // Short description
  features: ['Feature 1', ...],   // Feature list
  image: 'https://...',           // Image URL (Unsplash)
  category: 'AI Tools',           // For filtering
  highlighted: true,              // Featured badge
}
```

**Add More Products:**
1. Copy a product object
2. Update all fields
3. Add to `ALL_PRODUCTS` array

---

### Colors & Design

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Change cyan to your brand color
        600: '#yourcolor',
      }
    },
    backgroundImage: {
      'gradient-primary': 'linear-gradient(135deg, #color1 0%, #color2 100%)',
    }
  }
}
```

---

### Update Company Details

**In `src/components/SEO.tsx`:**
```typescript
const SITE_URL = 'https://yourdomain.com'
const BUSINESS_NAME = 'Your Business Name'
```

**Update hreflang for your regions:**
```typescript
const HREFLANG_CONFIG = [
  { lang: 'en-lk', hrefLang: 'https://yourdomain.com/en-lk/' },
  // Add/remove based on your target countries
]
```

---

## 📁 Project Structure

```
aura-digital/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Top navigation
│   │   ├── Footer.tsx           # Bottom footer
│   │   ├── WhatsAppButton.tsx   # Floating button
│   │   ├── PurchaseModal.tsx    # Product checkout
│   │   └── SEO.tsx              # Meta tags
│   ├── pages/
│   │   ├── Home.tsx             # Landing page
│   │   ├── About.tsx            # About page
│   │   ├── Products.tsx         # Product catalog
│   │   └── Contact.tsx          # Contact page
│   ├── types/
│   │   └── index.ts             # TypeScript types
│   ├── App.tsx                  # Main router
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.ts               # Vite config
├── tailwind.config.js           # Tailwind config
├── tsconfig.json                # TypeScript config
├── README.md                    # Full documentation
└── DEPLOYMENT.md                # Deployment guide
```

---

## 🎨 Design System

### Colors
- **Primary**: Cyan (#0ea5e9)
- **Accent**: Blue (#0284c7)
- **Background**: Slate-950 (very dark)
- **Cards**: Slate-900 (dark)

### Typography
- **Headings**: Bold, 5xl-3xl sizes
- **Body**: Regular, slate-400
- **Emphasis**: Gradient text or bright cyan

### Animations
- **Float**: 6s continuous up/down
- **Pulse**: Slow 4s pulse
- **Glow**: Text shadow glow effect
- **Scale**: Hover scale 105

---

## 🔐 Security

### No Sensitive Data
- No API keys in code ✅
- No passwords stored ✅
- Form data sent via WhatsApp only ✅
- No backend database ✅

### Privacy
- No tracking cookies (add Google Analytics if desired)
- GDPR compliant (collect only necessary data)
- Disclaimer in footer about third-party services

---

## 📱 Mobile Testing

### Test on Real Device

1. Find your IP address:
   ```bash
   # On Windows
   ipconfig
   # Look for IPv4 Address
   ```

2. Note the IP and port (usually 5173)

3. On mobile (same WiFi):
   ```
   Visit: http://YOUR_IP:5173
   ```

4. Test:
   - [ ] Responsive layout
   - [ ] Touch interactions
   - [ ] WhatsApp button
   - [ ] Forms work
   - [ ] Images load

### Browser DevTools

Press `F12` in browser:
1. Click device icon (top left)
2. Select device (iPhone, Pixel, etc.)
3. Test responsive design

---

## 🐛 Troubleshooting

### `npm install` fails
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Dev server won't start
```bash
# Check if port 5173 is in use
# Try different port
npm run dev -- --port 3000
```

### Build fails
```bash
# Check for TypeScript errors
npm run lint

# Rebuild from scratch
rm -rf node_modules dist
npm install
npm run build
```

### WhatsApp not working locally
- WhatsApp Web requires internet
- Use actual WhatsApp app on mobile to test
- Verify phone number format

### Images not loading
- Check internet connection
- Unsplash may be blocked in some regions
- Replace with local images in `/public` folder

---

## 📊 Analytics Setup (Optional)

### Google Analytics 4

1. Create property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `index.html` before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🚀 Deployment Quick Links

### Netlify
1. [Create Netlify account](https://netlify.com)
2. Connect GitHub repo
3. Auto-deployed on every push!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed steps.

### Vercel
1. [Create Vercel account](https://vercel.com)
2. Import GitHub repo
3. Deployed instantly!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed steps.

---

## 📞 Support

**For questions or issues:**
- Phone: +94 723 146 364
- WhatsApp: [Message us](https://wa.me/94723146364)
- Email: hello@auradigital.com

---

## ✨ Tips for Success

1. **Test Locally First**
   - Run `npm run dev`
   - Test all features thoroughly
   - Check on mobile devices

2. **Update Images**
   - Current images from Unsplash (free)
   - Replace with professional product photos
   - Keep file sizes < 1MB

3. **SEO Important**
   - Update page titles and descriptions
   - Add products
   - Submit sitemap to Google Search Console

4. **Monitor Performance**
   - Use [PageSpeed Insights](https://pagespeed.web.dev)
   - Target: 90+ scores
   - Monitor Core Web Vitals

5. **Keep Updated**
   - Run `npm update` monthly
   - Check security advisories: `npm audit`
   - Fix security issues immediately

---

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Run locally: `npm run dev`
3. ✅ Customize content (products, info)
4. ✅ Test all pages and features
5. ✅ Build: `npm run build`
6. ✅ Deploy to Netlify or Vercel
7. ✅ Add custom domain
8. ✅ Monitor performance
9. ✅ Market your site!

**You're all set! Your modern, high-converting website is ready to launch.** 🎉

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

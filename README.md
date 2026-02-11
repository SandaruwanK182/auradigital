# Aura Digital - Business Website

A modern, high-converting website for Aura Digital - a digital tools and AI subscription setup/support service.

## 🌟 Features

- **Modern Design**: Dark theme with glassmorphism, gradients, and smooth animations
- **Mobile-First**: Fully responsive design for all devices
- **SEO Optimized**: React Helmet for meta tags, structured data (JSON-LD), hreflang for multi-region support
- **Multi-Region**: Supports 7 countries (Sri Lanka, USA, Canada, UAE, UK, India, Pakistan)
- **Purchase Flow**: Modal-based checkout with WhatsApp integration
- **WhatsApp Integration**: Floating button and prefilled order messages
- **Fast Performance**: Built with Vite for blazing-fast load times
- **Tailwind CSS**: Modern utility-first styling with custom animations

## 📦 Tech Stack

- **Frontend**: React 18.2
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.3
- **Routing**: React Router DOM 6.20
- **SEO**: React Helmet Async 1.3
- **Icons**: Lucide React 0.294
- **Language**: TypeScript 5.2

## 📁 Project Structure

```
aura-digital/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar with mobile menu
│   │   ├── Footer.tsx          # Footer with links and disclaimer
│   │   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   │   ├── PurchaseModal.tsx   # Product purchase modal/drawer
│   │   └── SEO.tsx             # SEO meta tags component
│   ├── pages/
│   │   ├── Home.tsx            # Hero, trust badges, featured products, CTA
│   │   ├── About.tsx           # Mission, values, why trust us
│   │   ├── Products.tsx        # Product catalog with filtering
│   │   └── Contact.tsx         # Contact form and information
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Main app component and router
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML entry point
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aura-digital
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📄 Pages

### Home (`/`)
- Hero section with call-to-action
- Trust badges (clients, countries, support)
- Featured products showcase
- "How it works" step-by-step guide
- CTA section for getting started

### About (`/about`)
- Mission and values
- Why trust Aura Digital
- Company story
- Team information
- Community CTA

### Products (`/products`)
- Complete product catalog (8+ services)
- Category filtering (AI Tools, Productivity, Design, Development)
- Detailed product cards with features
- Purchase buttons for each product
- Custom service request option

### Contact (`/contact`)
- Quick contact options (Call, WhatsApp)
- Contact form with country selection
- Contact information display
- List of served countries
- Support hours information

## 💰 Products Included

1. **ChatGPT Plus Setup** - ₹499 / LKR 1,500 / $5
2. **Midjourney AI Setup** - ₹799 / LKR 2,400 / $8
3. **GitHub Pro Setup** - ₹299 / LKR 900 / $3
4. **Notion Pro Setup** - ₹349 / LKR 1,050 / $3.50
5. **Zapier Setup** - ₹599 / LKR 1,800 / $6
6. **Canva Pro Setup** - ₹249 / LKR 750 / $2.50
7. **Adobe Creative Cloud** - ₹899 / LKR 2,700 / $9
8. More services available on request

## 📱 Features Detail

### WhatsApp Integration
- Floating WhatsApp button (always visible)
- Prefilled order messages with product details
- Contact form submission via WhatsApp
- Quick chat link from navbar

### Purchase Flow
1. User clicks "Purchase" button on any product
2. Modal opens with product details and form
3. User fills in name, email, country, message
4. Clicking "Order via WhatsApp" generates prefilled message
5. WhatsApp Web/App opens with order details

### SEO Optimization
- **Meta Tags**: Title, description, keywords, robots
- **Open Graph**: og:title, og:description, og:image, og:url, og:type
- **Twitter Cards**: twitter:card, twitter:title, twitter:description, twitter:image
- **Structured Data**: JSON-LD schema for LocalBusiness and Articles
- **Hreflang Tags**: Multi-region support (en-lk, en-us, en-ca, en-ae, en-gb, en-in, en-pk, x-default)
- **Canonical URLs**: Prevent duplicate content issues

### Design System
- **Color Scheme**: Dark theme (Slate 950-900) with Cyan/Blue accents
- **Typography**: Bold sans-serif for headings, lighter for body
- **Animations**: Float effects, pulse effects, glow effects
- **Components**: Glassmorphism cards with transparent backgrounds and backdrop blur
- **Spacing**: Tailwind spacing scale for consistency
- **Responsive**: Mobile-first approach, breakpoints at sm, md, lg

## 🔧 Configuration

### WhatsApp Business Number
Edit the phone number in these files:
- `src/components/WhatsAppButton.tsx` (line 5)
- `src/components/Footer.tsx` (contact section)
- `src/components/PurchaseModal.tsx` (line 26)
- `src/pages/Contact.tsx` (line 60)

Current: `94723146364` (+94 723 146 364 Sri Lanka format)

### SEO Configuration
Edit `src/components/SEO.tsx`:
- `SITE_URL`: Your domain (default: `https://auradigital.com`)
- `DEFAULT_IMAGE`: Social share image
- `BUSINESS_NAME`: Company name for meta tags

### Colors & Styling
Edit `tailwind.config.js` to customize:
- Primary color scheme
- Gradient definitions
- Animation keyframes

## 📊 SEO Checklist for Target Countries

### On-Page SEO
- [ ] Unique title tags for each page (50-60 chars)
- [ ] Meta descriptions (150-160 chars)
- [ ] Heading hierarchy (H1, H2, H3)
- [ ] Image alt text for all images
- [ ] Internal linking between pages
- [ ] Mobile-friendly design (verified)
- [ ] Fast page load speed (<3s)

### Technical SEO
- [ ] XML sitemap generated
- [ ] Robots.txt configured
- [ ] Canonical URLs set
- [ ] Hreflang tags implemented ✓
- [ ] Structured data (JSON-LD) ✓
- [ ] Open Graph tags ✓
- [ ] Twitter cards ✓
- [ ] Mobile responsive ✓

### Off-Page SEO
- [ ] Google My Business setup
- [ ] Business listings (local directories)
- [ ] Social media profiles
- [ ] Backlinks from authoritative sites
- [ ] Press releases and media coverage

### Local SEO (Per Country)
**Sri Lanka (en-lk)**
- [ ] Sri Lanka business directories
- [ ] Local keyword research
- [ ] Phone number with country code

**USA (en-us)**
- [ ] DMOZ / Google Local listing
- [ ] US business directories
- [ ] Federal Trade Commission compliance

**Canada (en-ca)**
- [ ] .ca domain consideration
- [ ] Canadian business listings
- [ ] Bilingual content (EN/FR) optional

**UAE (en-ae)**
- [ ] UAE business directories
- [ ] Emirates.ae listings
- [ ] Arabic language support optional

**UK (en-gb)**
- [ ] UK business directories
- [ ] Companies House registration info
- [ ] British English spelling

**India (en-in)**
- [ ] Indian business directories
- [ ] GST registration info
- [ ] Regional language support optional

**Pakistan (en-pk)**
- [ ] Pakistani business directories
- [ ] FBR tax number optional
- [ ] Urdu language support optional

### Content Strategy
- [ ] Keyword research per country
- [ ] Localized content variations
- [ ] Landing pages per country
- [ ] Currency/Payment method localization
- [ ] Language-specific CTAs

### Performance & Conversion
- [ ] Page load speed tests
- [ ] Core Web Vitals optimization
- [ ] Conversion rate tracking (GTM)
- [ ] A/B testing setup
- [ ] Heat mapping (Hotjar)

## 🚢 Deployment

### Netlify Deployment

1. **Connect Repository**
   ```bash
   npm install -g netlify-cli
   netlify init
   ```

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Environment: Node.js 18.x

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import in Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select GitHub repository
   - Framework: Vite
   - Build Command: `npm run build`
   - Output: `dist`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live at `*.vercel.app`

### Custom Domain
1. **Update DNS**: Point your domain to Netlify/Vercel nameservers
2. **Update SEO**: Change `SITE_URL` in `src/components/SEO.tsx`
3. **Add SSL**: Automatically included with both platforms

### Environment Variables
Create `.env.local`:
```env
VITE_SITE_URL=https://yourdomain.com
VITE_WHATSAPP_NUMBER=94723146364
```

## 🎯 Performance Optimization

### Already Optimized
- ✅ Lazy loading with Vite
- ✅ Minification and tree-shaking
- ✅ CSS purging with Tailwind
- ✅ Image optimization (via Unsplash)
- ✅ Font optimization (system fonts)

### Further Optimization
- [ ] Image compression (WebP format)
- [ ] Service Worker for offline
- [ ] Code splitting per route
- [ ] Preload critical assets
- [ ] CDN for static assets

## 📝 Disclaimer

The website includes a comprehensive disclaimer in the footer stating:
- Aura Digital is independent
- Not affiliated with OpenAI, Google, GitHub, etc.
- Trademarks belong to their respective owners
- Support for legitimate subscriptions only
- User responsibility for compliance

## 🔒 Security

- No API keys exposed
- No external dependencies with vulnerabilities
- CSP headers recommended
- HTTPS enforced
- Input validation on forms

## 📞 Support

- **Phone/WhatsApp**: +94 723 146 364
- **Email**: hello@auradigital.com
- **Available**: 24/7 support

## 📄 License

Proprietary - Aura Digital 2024

## 🎉 Getting Started

Ready to launch? Follow these steps:

1. Install dependencies: `npm install`
2. Run locally: `npm run dev`
3. Test all pages and functionality
4. Update contact information and products
5. Build: `npm run build`
6. Deploy to Netlify or Vercel
7. Configure custom domain
8. Add Google Analytics
9. Submit sitemap to Google Search Console
10. Monitor performance and iterate

Good luck! 🚀

import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  type?: 'website' | 'article' | 'business.business'
  image?: string
  url?: string
  canonicalUrl?: string
}

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=630&fit=crop'
const SITE_URL = 'https://auradigital.com'
const BUSINESS_NAME = 'Aura Digital'

const HREFLANG_CONFIG = [
  { lang: 'en-lk', hrefLang: `${SITE_URL}/en-lk/` },
  { lang: 'en-us', hrefLang: `${SITE_URL}/en-us/` },
  { lang: 'en-ca', hrefLang: `${SITE_URL}/en-ca/` },
  { lang: 'en-ae', hrefLang: `${SITE_URL}/en-ae/` },
  { lang: 'en-gb', hrefLang: `${SITE_URL}/en-gb/` },
  { lang: 'en-in', hrefLang: `${SITE_URL}/en-in/` },
  { lang: 'en-pk', hrefLang: `${SITE_URL}/en-pk/` },
  { lang: 'x-default', hrefLang: `${SITE_URL}/` },
]

export default function SEO({
  title,
  description,
  type = 'website',
  image = DEFAULT_IMAGE,
  url = SITE_URL,
  canonicalUrl = SITE_URL,
}: SEOProps) {
  const fullTitle = title.includes(BUSINESS_NAME) ? title : `${title} | ${BUSINESS_NAME}`

  // JSON-LD Schema
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'LocalBusiness',
    name: fullTitle,
    description: description,
    url: url,
    image: image,
    ...(type === 'business.business' && {
      '@type': 'LocalBusiness',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'LK',
      },
      telephone: '+94723146364',
      sameAs: [
        'https://wa.me/94723146364',
      ],
      areaServed: [
        { '@type': 'Country', name: 'Sri Lanka' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'Pakistan' },
      ],
    }),
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={BUSINESS_NAME} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Hreflang for Multi-region SEO */}
      {HREFLANG_CONFIG.map((config) => (
        <link
          key={config.lang}
          rel="alternate"
          hrefLang={config.lang}
          href={config.hrefLang}
        />
      ))}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>

      {/* Additional SEO Tags */}
      <meta name="author" content={BUSINESS_NAME} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="keywords" content="digital tools, AI solutions, productivity, subscription setup, Aura Digital" />
    </Helmet>
  )
}

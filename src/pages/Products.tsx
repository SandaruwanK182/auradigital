import { useState } from 'react'
import { Check, Filter } from 'lucide-react'
import SEO from '../components/SEO'
import PurchaseModal from '../components/PurchaseModal'
import { Product } from '../types'

const ALL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'ChatGPT Plus Setup',
    price: '₹499 / LKR 1,500 / $5',
    description: 'Complete ChatGPT Plus subscription setup and account optimization',
    features: ['New account creation', 'Email setup & verification', 'Payment method configuration', 'Plus subscription activation', '7 days priority support', 'Usage guidance & best practices'],
    image: 'https://images.unsplash.com/photo-1677442d019cecf70d30891b8a4be07cd2221dec2?w=500&h=500&fit=crop',
    category: 'AI Tools',
    highlighted: true,
  },
  {
    id: '2',
    name: 'Midjourney AI Setup',
    price: '₹799 / LKR 2,400 / $8',
    description: 'Midjourney account setup with prompt optimization and community access',
    features: ['Discord account integration', 'Midjourney membership', 'Billing setup', 'Prompt templates included', '14 days support', 'Community group access', 'Monthly updates'],
    image: 'https://images.unsplash.com/photo-1578926078328-123456789abc?w=500&h=500&fit=crop',
    category: 'AI Tools',
    highlighted: true,
  },
  {
    id: '3',
    name: 'GitHub Pro Setup',
    price: '₹299 / LKR 900 / $3',
    description: 'GitHub Pro setup with advanced features and collaboration tools',
    features: ['GitHub Pro upgrade', 'Advanced security features', 'Team collaboration setup', 'Repository management', 'CI/CD configuration', '10 days support'],
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=500&fit=crop',
    category: 'Development',
  },
  {
    id: '4',
    name: 'Notion Pro Setup',
    price: '₹349 / LKR 1,050 / $3.50',
    description: 'Complete Notion workspace setup with templates',
    features: ['Professional workspace setup', '50+ templates', 'Database configuration', 'Automation setup', '21 days support', 'Training included'],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop',
    category: 'Productivity',
  },
  {
    id: '5',
    name: 'Zapier Setup',
    price: '₹599 / LKR 1,800 / $6',
    description: 'Advanced automation workflow setup with multiple integrations',
    features: ['Account setup', 'Multi-tool integration', 'Workflow automation', 'Custom zaps creation', '21 days support', 'Monthly optimization'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca84212e?w=500&h=500&fit=crop',
    category: 'Productivity',
  },
  {
    id: '6',
    name: 'Business All-in-One',
    price: '₹1,999 / LKR 6,000 / $20',
    description: 'Complete business digital transformation package',
    features: ['ChatGPT + Midjourney setup', 'Notion workspace', 'Zapier automation', '3 months premium support', 'Weekly optimization calls', 'Custom consulting'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca84212e?w=500&h=500&fit=crop',
    category: 'Bundles',
  },
  {
    id: '7',
    name: 'Canva Premium Setup',
    price: '₹249 / LKR 750 / $2.50',
    description: 'Canva Pro account with design template library',
    features: ['Pro account activation', '1000+ templates access', 'Brand kit setup', 'Design guide', '7 days support'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
    category: 'Design',
  },
  {
    id: '8',
    name: 'Custom Setup Service',
    price: 'Custom Pricing',
    description: 'Bespoke setup for specific tools not listed',
    features: ['Any third-party tool', 'Custom integration', 'Dedicated support', 'Training session', 'Extended support options'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca84212e?w=500&h=500&fit=crop',
    category: 'Custom',
  },
]

const CATEGORIES = ['All', 'AI Tools', 'Development', 'Productivity', 'Design', 'Bundles', 'Custom']

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const filteredProducts = selectedCategory === 'All'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => p.category === selectedCategory)

  return (
    <>
      <SEO
        title="Products & Services"
        description="Browse Aura Digital's complete catalog of AI tool setup, subscription services, and digital transformation packages. Starting from $2.50."
        url="https://auradigital.com/products"
      />

      <div className="pt-20">
        {/* Hero */}
        <section className="min-h-80 bg-gradient-dark flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="gradient-text">Products & Services</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              Professional setup and support for 100+ digital tools at affordable prices
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-slate-700/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <Filter size={20} className="text-cyan-400" />
              <span className="font-semibold">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-primary text-white'
                      : 'border border-slate-700 hover:border-cyan-500/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-400 text-lg">No products found in this category</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="glass-dark overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group flex flex-col"
                  >
                    {product.highlighted && (
                      <div className="bg-cyan-500 text-white px-4 py-2 text-xs font-semibold text-center">
                        ⭐ Popular Choice
                      </div>
                    )}

                    <div className="h-48 bg-slate-800/50 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs text-cyan-400 font-semibold uppercase">{product.category}</span>
                      <h3 className="text-lg font-bold mt-2 mb-2">{product.name}</h3>
                      <p className="text-sm text-slate-400 mb-4 flex-grow">{product.description}</p>

                      <ul className="space-y-2 mb-6 text-sm">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-cyan-400">{product.price}</span>
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="btn-primary text-sm"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Why Choose A Product */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">What's Included in Our Services?</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Professional Setup',
                  details: ['Account creation', 'Payment configuration', 'Security setup', 'Best practices'],
                },
                {
                  title: 'Dedicated Support',
                  details: ['Live WhatsApp support', 'Email assistance', 'Follow-up guidance', 'Issue resolution'],
                },
                {
                  title: 'Training & Guides',
                  details: ['Video tutorials', 'Template library', 'Usage tips', 'Optimization advice'],
                },
              ].map((item, idx) => (
                <div key={idx} className="glass-dark p-8">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check size={20} className="text-cyan-400" />
                        <span className="text-slate-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">FAQ</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'How long does setup take?',
                  a: 'Most setups are completed within 24-48 hours of ordering. You\'ll receive updates via WhatsApp.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We handle payments directly through WhatsApp messages. Payment to service links or provider sites are coordinated by us.',
                },
                {
                  q: 'What if I have issues after setup?',
                  a: 'All packages include post-setup support ranging from 7 to 30+ days. Contact us via WhatsApp anytime.',
                },
                {
                  q: 'Can you setup custom tools?',
                  a: 'Yes! We offer custom setup services. Contact us about your specific requirements for a quote.',
                },
              ].map((item, idx) => (
                <div key={idx} className="glass-dark p-6">
                  <h4 className="font-bold mb-3 text-lg">{item.q}</h4>
                  <p className="text-slate-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 glass-dark p-12 text-center border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-slate-400 mb-8">
              Choose a product above or contact us for a custom solution
            </p>
            <a href="https://wa.me/94723146364?text=Hi!%20I%20want%20to%20learn%20more%20about%20your%20services" className="btn-primary inline-block">
              Chat with Us on WhatsApp
            </a>
          </div>
        </section>
      </div>

      {/* Purchase Modal */}
      {selectedProduct && (
        <PurchaseModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  )
}

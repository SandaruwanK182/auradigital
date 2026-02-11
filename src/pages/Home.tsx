import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Star, Zap, Shield, Headphones } from 'lucide-react'
import SEO from '../components/SEO'
import PurchaseModal from '../components/PurchaseModal'
import { Product } from '../types'

const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'ChatGPT Pro Setup',
    price: 'LKR 500 ',
    description: 'Complete ChatGPT Pro subscription setup and account optimization',
    features: ['New account creation', 'Email setup & verification', 'Payment method configuration', 'Pro subscription activation', '7 days priority support', 'Usage guidance & best practices'],
    image: 'https://media.designrush.com/articles/314658/conversions/ChatGPT-Pro-preview.jpg',
    category: 'AI Tools',
    highlighted: true,
  },
  {
    id: '2',
    name: 'Midjourney AI Setup',
    price: '₹799 / LKR 2,400 / $8',
    description: 'Midjourney account setup with prompt optimization and community access',
    features: ['Account setup', 'Payment setup', 'Prompt guide', '14-day support'],
    image: 'https://images.unsplash.com/photo-1578926078328-123456789abc?w=500&h=500&fit=crop',
    category: 'AI Tools',
    highlighted: true,
  },
  {
    id: '3',
    name: 'Productivity Suite Setup',
    price: '₹349 / LKR 1,050 / $3.50',
    description: 'Complete productivity tool setup including Notion, Zapier, and more',
    features: ['Multi-tool setup', 'Workflow automation', 'Templates included', '30-day support'],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop',
    category: 'Productivity',
  },
  {
    id: '4',
    name: 'GitHub Pro Setup',
    price: '₹299 / LKR 900 / $3',
    description: 'GitHub Pro setup with advanced features and collaboration tools',
    features: ['Account upgrade', 'Privacy settings', 'Team collaboration', 'Support'],
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=500&fit=crop',
    category: 'Development',
  },
]

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
      <SEO
        title="Home - Digital Tools & AI Solutions"
        description="Aura Digital provides setup and support for ChatGPT, Midjourney, and productivity tools. Serving Sri Lanka, USA, Canada, UAE, UK, India, Pakistan."
        type="website"
        url="https://auradigital.com"
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative overflow-hidden" style={{backgroundImage: 'url(https://i.pinimg.com/736x/f4/8c/61/f48c6182400bf249b53ec1d6396270b4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/75"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                  <span className="text-cyan-400 text-sm font-semibold">🚀 Digital Solutions</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Your Gatway to Next - Gen
                   <br></br><span className="gradient-text"> Digital Tools.</span>
                </h1>

                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  Professional setup and support for ChatGPT, Gemini, and 100+ productivity tools. Serving businesses across 7 countries.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button className="btn-primary">
                    Get Started Now
                    <ArrowRight className="inline ml-2" size={20} />
                  </button>
                  <button className="btn-secondary">
                    View Products
                  </button>
                </div>

                <div className="flex gap-8 text-sm">
                  <div>
                    <div className="text-2xl font-bold gradient-text">500+</div>
                    <div className="text-slate-400">Clients Served</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">7</div>
                    <div className="text-slate-400">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">24/7</div>
                    <div className="text-slate-400">Support</div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl border border-cyan-500/30 p-8 glass-dark animate-float overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1677442d019cecf70d30891b8a4be07cd2221dec2?w=600&h=600&fit=crop"
                    alt="Aura Digital Solutions"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: 'Verified Seller', desc: 'Trusted by thousands' },
                { icon: Check, title: 'Secure Setup', desc: 'Safe & verified process' },
                { icon: Headphones, title: '24/7 Support', desc: 'Always here to help' },
                { icon: Star, title: '4.9/5 Rating', desc: 'Excellent reviews' },
              ].map((badge, idx) => (
                <div key={idx} className="glass-dark p-6 text-center hover:border-cyan-500/50 transition-colors">
                  <badge.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <h3 className="font-semibold mb-2">{badge.title}</h3>
                  <p className="text-sm text-slate-400">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Featured Products</span>
              </h2>
              <p className="text-xl text-slate-400">Popular services chosen by our clients</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURED_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className={`glass-dark hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group relative ${
                    product.highlighted ? 'md:col-span-1 lg:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  {product.highlighted && <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Popular</div>}

                  <div className="h-48 bg-slate-800/50 rounded-t-lg overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-xs text-cyan-400 font-semibold">{product.category}</span>
                    <h3 className="text-lg font-bold mt-2 mb-2">{product.name}</h3>
                    <p className="text-sm text-slate-400 mb-4">{product.description}</p>

                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Check size={16} className="text-cyan-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-cyan-400">{product.price}</span>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="btn-primary text-sm"
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">How It Works</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Choose Product', desc: 'Select the service you need' },
                { step: '2', title: 'Fill Details', desc: 'Provide your information' },
                { step: '3', title: 'Quick Chat', desc: 'Confirm via WhatsApp' },
                { step: '4', title: 'Setup Done', desc: 'Complete account setup' },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="glass-dark p-8 text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute -right-4 top-8 text-cyan-500">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/95"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-slate-400 mb-8">
              Join 500+ clients already using Aura Digital for their AI and productivity needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="btn-primary text-center inline-block"
              >
                Explore All Products
              </Link>
              <a
                href="https://wa.me/94723146364"
                className="btn-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
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

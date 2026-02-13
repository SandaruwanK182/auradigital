import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'

const COUNTRIES = [
  { code: 'LK', name: 'Sri Lanka', flag: '🇱🇰', dialCode: '+94' },
  { code: 'US', name: 'USA', flag: '🇺🇸', dialCode: '+1' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
  { code: 'AE', name: 'UAE', flag: '🇦🇪', dialCode: '+971' },
  { code: 'GB', name: 'UK', flag: '🇬🇧', dialCode: '+44' },
  { code: 'IN', name: 'India', flag: '🇮🇳', dialCode: '+91' },
  { code: 'PK', name: 'Pakistan', flag: '🇵🇰', dialCode: '+92' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const messageText = `
📨 *Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
🌍 *Country:* ${formData.country}
📋 *Subject:* ${formData.subject}
💬 *Message:* ${formData.message}

---
Sent from auradigital.com
    `.trim()

    const phoneNumber = '94723146364'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`
    window.open(url, '_blank')

    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', country: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const handleCallClick = () => {
    window.location.href = 'tel:+94723146364'
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/94723146364?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20your%20services', '_blank')
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Aura Digital. Phone/WhatsApp: +94 723 146 364. We serve Sri Lanka, USA, Canada, UAE, UK, India, Pakistan."
        url="https://auradigital.com/contact"
      />

      <div>
        {/* Hero */}
        <section 
          className="min-h-80 bg-gradient-dark flex items-center bg-cover bg-center bg-no-repeat relative mt-16"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.85) 100%), url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
            <h1 className="text-5xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              Have questions? We're here to help. Contact us via phone, WhatsApp, or email.
            </p>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Call */}
              <button
                onClick={handleCallClick}
                className="glass-dark p-8 hover:border-cyan-500/50 transition-all group text-left"
              >
                <Phone className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Call Us</h3>
                <p className="text-slate-400 mb-4">
                  Speak directly with our team for immediate assistance.
                </p>
                <div className="text-cyan-400 font-semibold text-lg">
                  +94 723 146 364
                </div>
              </button>

              {/* WhatsApp */}
              <button
                onClick={handleWhatsAppClick}
                className="glass-dark p-8 hover:border-green-500/50 transition-all group text-left"
              >
                <MessageCircle className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
                <p className="text-slate-400 mb-4">
                  Quick messaging for support and inquiries. Available 24/7.
                </p>
                <div className="text-green-400 font-semibold text-lg">
                  Message us now
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section 
          className="py-20 bg-cover bg-center bg-fixed relative"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

                {submitted && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6">
                    <p className="text-green-400 font-semibold">✓ Message sent! We'll get back to you soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Country *</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-slate-200"
                    >
                      <option value="">Select your country</option>
                      {COUNTRIES.map(country => (
                        <option key={country.code} value={country.name}>
                          {country.flag} {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send via WhatsApp
                  </button>
                </form>
              </div>

              {/* Contact Info & Countries */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="glass-dark p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Phone / WhatsApp</h3>
                        <p className="text-slate-400 mb-4">Call or message us anytime</p>
                        <a href="tel:+94723146364" className="text-cyan-400 font-bold text-lg hover:text-cyan-300">
                          +94 723 146 364
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="glass-dark p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-slate-400 mb-4">Send us detailed inquiries</p>
                        <a href="mailto:hello@auradigital.com" className="text-cyan-400 font-bold text-lg hover:text-cyan-300">
                          sandaruwank182@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Served Countries */}
                  <div className="glass-dark p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div className="flex-grow">
                        <h3 className="font-semibold mb-4">Where We Serve</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {COUNTRIES.map(country => (
                            <div key={country.code} className="flex items-center gap-2">
                              <span className="text-lg">{country.flag}</span>
                              <span className="text-sm">{country.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Hours */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-dark p-8 text-center border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-4">24/7 Support Available</h3>
              <p className="text-slate-400 mb-6">
                WhatsApp & Phone support available round the clock. Email responses within 24 hours.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button onClick={handleCallClick} className="btn-primary">
                  Call Now
                </button>
                <button onClick={handleWhatsAppClick} className="btn-secondary">
                  Message WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

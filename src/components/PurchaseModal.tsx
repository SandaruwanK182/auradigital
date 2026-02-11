import { useState } from 'react'
import { X, Send } from 'lucide-react'
import { Product } from '../types'

interface PurchaseModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

const COUNTRIES = [
  { code: 'LK', name: 'Sri Lanka' },
  { code: 'US', name: 'USA' },
  { code: 'CA', name: 'Canada' },
  { code: 'AE', name: 'UAE' },
  { code: 'GB', name: 'UK' },
  { code: 'IN', name: 'India' },
  { code: 'PK', name: 'Pakistan' },
]

export default function PurchaseModal({ product, isOpen, onClose }: PurchaseModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const orderMessage = `
🛍️ *New Order Request*

📦 *Product:* ${product.name}
💰 *Price:* ${product.price}
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
🌍 *Country:* ${formData.country}
📝 *Message:* ${formData.message || 'No additional message'}

---
This is an automated order request from auradigital.com
    `.trim()

    const phoneNumber = '94723146364'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(orderMessage)}`
    window.open(url, '_blank')
    
    onClose()
    setFormData({ name: '', email: '', country: '', message: '' })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="glass-dark max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold gradient-text">Purchase {product.name}</h3>
          <button onClick={onClose} className="p-1 hover:bg-slate-700/30 rounded-lg transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Info */}
          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/30 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-slate-400">Product</span>
              <span className="font-semibold">{product.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Price</span>
              <span className="text-cyan-400 font-bold">{product.price}</span>
            </div>
          </div>

          {/* Form Fields */}
          <div>
            <label className="block text-sm font-medium mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Country *</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-slate-200"
            >
              <option value="">Select a country</option>
              {COUNTRIES.map(country => (
                <option key={country.code} value={country.name}>{country.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Additional Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any special requests or questions?"
              rows={3}
              className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-slate-700 rounded-lg hover:bg-slate-700/30 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 btn-primary flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Order via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

import { Mail, Phone } from 'lucide-react'

const COUNTRIES = [
  { code: 'LK', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: 'US', name: 'USA', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AE', name: 'UAE', flag: '🇦🇪' },
  { code: 'GB', name: 'UK', flag: '🇬🇧' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'PK', name: 'Pakistan', flag: '🇵🇰' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-dark border-t border-slate-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Aura Digital</h3>
            <p className="text-slate-400 mb-4">
              Empowering businesses with cutting-edge digital tools and AI solutions.
            </p>
            <div className="flex gap-4">
              <a href="tel:+94723146364" className="p-2 hover:bg-slate-700/30 rounded-lg transition-colors">
                <Phone size={20} />
              </a>
              <a href="https://wa.me/94723146364" className="p-2 hover:bg-slate-700/30 rounded-lg transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="/products" className="hover:text-cyan-400 transition-colors">Products</a></li>
              <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Served Regions */}
          <div>
            <h4 className="font-semibold mb-4">Serving</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              {COUNTRIES.map(country => (
                <div key={country.code} className="flex items-center gap-2">
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-700/30 pt-8 mb-8">
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong>Disclaimer:</strong> Aura Digital is an independent provider and is NOT affiliated with OpenAI, Google, GitHub, Microsoft, or any other service provider. All product names, logos, and brands mentioned are the property of their respective owners. We provide legitimate subscription setup and support services only. Users are responsible for compliance with all terms of service and local regulations. Aura Digital does not endorse or guarantee any third-party services.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-slate-500 text-sm border-t border-slate-700/30 pt-8">
          <p>&copy; {currentYear} Aura Digital. All rights reserved. | Phone/WhatsApp: +94 723 146 364</p>
        </div>
      </div>
    </footer>
  )
}

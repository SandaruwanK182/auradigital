import { Heart, Target, Users, TrendingUp } from 'lucide-react'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Aura Digital's mission to empower businesses with AI and digital tools. Professional setup and support since 2024."
        url="https://auradigital.com/about"
      />

      <div className="pt-16">
        {/* Hero */}
        <section className="min-h-80 flex items-center relative overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/75"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="gradient-text">Aura Digital</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              We're passionate about making advanced digital tools accessible to everyone, regardless of location or technical background.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass-dark p-8">
                <Target className="w-12 h-12 text-cyan-400 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-slate-400 leading-relaxed">
                  To empower businesses and individuals across the globe by providing seamless setup and expert support for cutting-edge AI and digital productivity tools. We believe technology should be accessible, not intimidating.
                </p>
              </div>

              <div className="glass-dark p-8">
                <Heart className="w-12 h-12 text-cyan-400 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                <ul className="space-y-3 text-slate-400">
                  <li>✨ <strong>Transparency:</strong> Clear pricing, no hidden fees</li>
                  <li>🤝 <strong>Reliability:</strong> 24/7 dedicated support</li>
                  <li>🔒 <strong>Security:</strong> Safe, verified setup processes</li>
                  <li>🌍 <strong>Inclusivity:</strong> Serving 7+ countries</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-20 relative overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/95"></div>
          {/* Animated accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">Why Trust Aura Digital?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Users,
                  title: '500+ Happy Clients',
                  desc: 'Businesses worldwide trust us with their digital transformation',
                },
                {
                  icon: TrendingUp,
                  title: '98% Success Rate',
                  desc: 'Professional setup with minimal issues and maximum satisfaction',
                },
                {
                  icon: Heart,
                  title: 'Local Expertise',
                  desc: 'Deep understanding of regional payment and regulatory needs',
                },
                {
                  icon: Target,
                  title: 'Expert Support',
                  desc: 'Dedicated team of AI and productivity tool specialists',
                },
              ].map((item, idx) => (
                <div key={idx} className="glass-dark p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 relative overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/95"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-justify">
              <p>
                Aura Digital was founded with a simple observation: talented businesses and individuals in emerging markets struggle to access and properly set up advanced digital tools due to regional limitations, payment barriers, and lack of technical guidance.
              </p>
              <p>
                We started by personally helping friends and colleagues get onboarded with ChatGPT, Midjourney, and other AI tools. The demand grew rapidly, so we formalized the service and expanded our team to serve clients across Sri Lanka, USA, Canada, UAE, UK, India, and Pakistan.
              </p>
              <p>
                Today, we're proud to be a trusted partner for businesses requiring reliable, professional setup and ongoing support for digital tools. Our commitment remains the same: make advanced technology accessible and affordable for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="gradient-text">Meet Our Team</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Service Lead', role: 'Aura Digital Specialist', expertise: 'AI Tools & Setup' },
                { name: 'Support Team', role: '24/7 Assistance', expertise: 'Customer Success' },
                { name: 'Integration Expert', role: 'Technical Setup', expertise: 'Workflow Optimization' },
              ].map((member, idx) => (
                <div key={idx} className="glass-dark p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                  <p className="text-cyan-400 text-sm mb-2">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 glass-dark p-12 text-center border border-cyan-500/30">
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
            <p className="text-slate-400 mb-8">
              Become part of 500+ businesses already transforming with Aura Digital
            </p>
            <a href="https://wa.me/94723146364" className="btn-primary inline-block">
              Start Your Journey Today
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

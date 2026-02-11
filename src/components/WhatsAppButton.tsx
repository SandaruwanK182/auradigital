import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = '94723146364'
  const message = "Hi! I'm interested in your digital tools and services."
  
  const handleWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 z-40 animate-pulse-slow"
      title="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}

'use client'

import { MessageSquare } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappNumber = '1XXXXXXXXXX' // Replace with actual number
  const message = encodeURIComponent('Hi, I need help with cross-border debt recovery.')
  
  return (
    <div className="fixed bottom-24 right-6 z-40">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  )
}
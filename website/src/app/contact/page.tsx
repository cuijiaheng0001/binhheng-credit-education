'use client'

import '@/styles/st-regis-design.css'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-regis-ivory">
      {/* Hero with Ornamental Design */}
      <section className="regis-section regis-gradient-dark">
        <div className="regis-pattern" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <div className="regis-sparkle mb-8">
            <span className="text-6xl text-regis-champagne">✾</span>
          </div>
          <h1 className="regis-display regis-headline-lg text-regis-pearl mb-8">
            {/* Content placeholder */}
          </h1>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="regis-card p-10 text-center group hover:transform hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-regis-midnight flex items-center justify-center group-hover:bg-regis-champagne transition-colors">
                  <span className="text-2xl text-regis-champagne group-hover:text-regis-midnight">☎</span>
                </div>
                <div className="space-y-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Layout - Info & Form */}
      <section className="regis-split">
        <div className="bg-regis-pearl p-16 flex items-center">
          <div className="w-full">
            <div className="regis-frame mb-12">
              <h2 className="regis-display regis-headline-md" />
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-regis-midnight/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-regis-champagne">⏰</span>
                </div>
                <div className="flex-1" />
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-regis-midnight/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-regis-champagne">✉</span>
                </div>
                <div className="flex-1" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-16">
          <div className="regis-card p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm uppercase tracking-wider text-regis-charcoal mb-2" />
                  <input className="w-full px-4 py-3 border border-regis-platinum rounded-lg focus:border-regis-champagne transition-colors" />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-wider text-regis-charcoal mb-2" />
                  <input className="w-full px-4 py-3 border border-regis-platinum rounded-lg focus:border-regis-champagne transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm uppercase tracking-wider text-regis-charcoal mb-2" />
                <textarea className="w-full px-4 py-3 border border-regis-platinum rounded-lg focus:border-regis-champagne transition-colors resize-none" rows={6} />
              </div>
              
              <button className="regis-button w-full">
                {/* Button placeholder */}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section with Overlay */}
      <section className="relative h-96 bg-regis-smoke">
        <div className="absolute inset-0 regis-pattern" />
        <div className="absolute inset-0 bg-regis-midnight/80" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="regis-badge mb-8">
              <span className="text-4xl">☆</span>
            </div>
            <h3 className="regis-display regis-headline-md text-regis-pearl" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 regis-gradient-light">
        <div className="text-center max-w-3xl mx-auto px-8">
          <div className="regis-divider mb-12">
            <span className="regis-divider-symbol">✿</span>
          </div>
          <h2 className="regis-display regis-headline-md mb-8" />
          <button className="regis-button mx-auto">
            {/* Button placeholder */}
          </button>
        </div>
      </section>
    </main>
  )
}
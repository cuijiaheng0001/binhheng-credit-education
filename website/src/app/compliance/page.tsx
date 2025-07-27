import { Metadata } from 'next'
import '@/styles/st-regis-design.css'

export const metadata: Metadata = {
  title: 'Compliance - Binhheng Credit',
  description: 'Compliance information for Binhheng Credit',
}

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-regis-pearl">
      {/* Hero with Geometric Pattern */}
      <section className="regis-section regis-gradient-dark">
        <div className="regis-pattern" />
        <div className="relative z-10 text-center">
          <div className="regis-badge mx-auto mb-12">
            <span className="text-4xl text-regis-champagne">★</span>
          </div>
          <h1 className="regis-display regis-headline-lg text-regis-pearl regis-animate">
            {/* Content placeholder */}
          </h1>
        </div>
      </section>

      {/* Gallery Grid Layout */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`regis-frame ${i === 1 ? 'md:mt-8' : ''}`}>
                <div className="regis-card h-96 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-regis-midnight flex items-center justify-center">
                    <span className="text-3xl text-regis-champagne">✯</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Silk Pattern Section */}
      <section className="py-32 regis-silk">
        <div className="container mx-auto px-8">
          <div className="regis-divider mb-16">
            <span className="regis-divider-symbol">◆</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="regis-card p-8 text-center regis-animate" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="aspect-square" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline with Badges */}
      <section className="py-32 regis-gradient-dark">
        <div className="max-w-5xl mx-auto px-8">
          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="regis-reveal active">
                <div className="regis-card bg-regis-midnight/20 backdrop-blur border-regis-champagne/30 p-8">
                  <div className="flex justify-between items-start">
                    <div className="flex-1" />
                    <div className="regis-button text-sm">
                      {/* Status placeholder */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centered Feature */}
      <section className="py-32 bg-regis-ivory">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="regis-sparkle mb-8">
            <span className="text-6xl text-regis-champagne">✦</span>
          </div>
          <div className="regis-card p-16">
            <div className="flex items-center justify-center gap-8">
              <div className="w-32 h-32 rounded-full bg-regis-midnight flex items-center justify-center">
                <span className="regis-gold-leaf text-5xl font-bold">%</span>
              </div>
              <div className="text-left">
                <div className="regis-display regis-headline-md regis-gold-leaf" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="regis-section regis-gradient-dark">
        <div className="regis-marble opacity-5" />
        <div className="relative z-10 text-center">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-regis-champagne/20 flex items-center justify-center">
            <span className="text-5xl text-regis-champagne">✦</span>
          </div>
          <div className="regis-display regis-headline-md text-regis-pearl mb-12" />
          <button className="regis-button bg-regis-pearl text-regis-midnight">
            {/* Button placeholder */}
          </button>
        </div>
      </section>
    </main>
  )
}
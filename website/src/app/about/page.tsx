import { Metadata } from 'next'
import '@/styles/st-regis-design.css'

export const metadata: Metadata = {
  title: 'About - Binhheng Credit',
  description: 'About Binhheng Credit',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen regis-gradient-light">
      {/* Hero Section - Full Viewport */}
      <section className="regis-section regis-marble">
        <div className="regis-pattern" />
        <div className="relative z-10 container mx-auto px-8">
          <div className="regis-frame">
            <h1 className="regis-display regis-headline-xl regis-gold-leaf text-center regis-animate">
              {/* Content placeholder */}
            </h1>
          </div>
        </div>
      </section>

      {/* Split Screen Layout */}
      <section className="regis-split">
        <div className="bg-regis-midnight flex items-center justify-center p-16">
          <div className="regis-reveal active">
            <div className="regis-badge">
              <span className="regis-sparkle text-regis-champagne">✦</span>
            </div>
          </div>
        </div>
        <div className="bg-regis-pearl flex items-center justify-center p-16">
          <div className="regis-asymmetric max-w-4xl">
            <div className="regis-card p-12">
              {/* Layout placeholder */}
            </div>
            <div className="space-y-6">
              <div className="regis-card p-8" />
              <div className="regis-card p-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Layout Section */}
      <section className="py-32 bg-regis-ivory">
        <div className="container mx-auto px-8">
          <div className="regis-divider">
            <span className="regis-divider-symbol">❋</span>
          </div>
          <div className="regis-magazine max-w-6xl mx-auto">
            {/* Magazine layout grid */}
            <div className="break-inside-avoid mb-8">
              <div className="regis-card p-12 h-96" />
            </div>
            <div className="break-inside-avoid mb-8">
              <div className="regis-card p-8 h-64" />
            </div>
            <div className="break-inside-avoid mb-8">
              <div className="regis-card p-8 h-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Grid */}
      <section className="py-32 regis-gradient-dark text-regis-pearl">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <div className="regis-card bg-regis-midnight/50 backdrop-blur p-16 h-full">
                <div className="regis-ornamental-badge" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="regis-card bg-regis-forest/50 backdrop-blur p-8" />
              <div className="regis-card bg-regis-burgundy/50 backdrop-blur p-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Art Deco Pattern Section */}
      <section className="regis-section bg-regis-pearl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 max-w-6xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square regis-card regis-silk" />
          ))}
        </div>
      </section>

      {/* Timeline Layout */}
      <section className="py-32 bg-regis-ivory">
        <div className="max-w-4xl mx-auto px-8">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-regis-champagne opacity-30" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`relative ${i % 2 === 0 ? 'text-right pr-[55%]' : 'text-left pl-[55%]'} py-8`}>
                <div className="regis-card inline-block p-8">
                  <div className="w-3 h-3 absolute top-1/2 ${i % 2 === 0 ? 'right-[-7%]' : 'left-[-7%]'} transform -translate-y-1/2 bg-regis-champagne rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chandelier Section */}
      <section className="py-32 regis-gradient-dark text-regis-pearl">
        <div className="text-center">
          <div className="regis-sparkle inline-block mb-16">
            <span className="text-6xl">✦</span>
          </div>
          <div className="max-w-4xl mx-auto px-8">
            <div className="regis-button mx-auto" />
          </div>
        </div>
      </section>
    </main>
  )
}
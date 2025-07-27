import { Metadata } from 'next'
import '@/styles/st-regis-design.css'

export const metadata: Metadata = {
  title: 'Insights - Binhheng Credit',
  description: 'Insights and resources from Binhheng Credit',
}

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-regis-pearl">
      {/* Hero Section */}
      <section className="regis-section regis-gradient-dark">
        <div className="regis-pattern" />
        <div className="relative z-10 text-center">
          <h1 className="regis-display regis-headline-xl text-regis-pearl mb-8">
            {/* Content placeholder */}
          </h1>
          <div className="regis-divider">
            <span className="regis-divider-symbol text-regis-champagne">✦</span>
          </div>
        </div>
      </section>

      {/* Featured Article - Asymmetric Layout */}
      <section className="py-32 bg-regis-ivory">
        <div className="container mx-auto px-8">
          <div className="regis-asymmetric max-w-7xl mx-auto">
            <div className="regis-card bg-regis-midnight text-regis-pearl p-12">
              <div className="regis-badge mb-8">
                <span className="text-2xl">★</span>
              </div>
              <h2 className="regis-display regis-headline-md mb-6" />
              <div className="space-y-4" />
            </div>
            <div className="regis-frame">
              <div className="regis-card p-12 h-full">
                <div className="space-y-6" />
                <button className="regis-button">
                  {/* Button placeholder */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid - Magazine Style */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <article key={i} className="regis-card group overflow-hidden">
                <div className="h-48 bg-regis-silk" />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-regis-champagne/20 text-regis-midnight rounded-full text-sm" />
                    <span className="text-regis-smoke text-sm" />
                  </div>
                  <h3 className="regis-body text-xl mb-4" />
                  <div className="h-16" />
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-sm text-regis-smoke" />
                    <span className="text-regis-champagne group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="regis-section regis-gradient-light">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="regis-sparkle mb-12">
            <span className="text-5xl text-regis-champagne">✦</span>
          </div>
          <h2 className="regis-display regis-headline-md mb-8" />
          <div className="regis-card p-8 max-w-2xl mx-auto">
            <form className="flex gap-4">
              <input className="flex-1 px-6 py-3 border border-regis-champagne/30 rounded-lg bg-transparent" />
              <button className="regis-button">
                {/* Button placeholder */}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
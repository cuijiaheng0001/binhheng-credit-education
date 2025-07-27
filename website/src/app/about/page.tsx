import { Metadata } from 'next'
import { Sparkles, Globe, Shield, Award, Building2, Users, Heart, Clock } from 'lucide-react'
import '@/styles/content-pages.css'
import '@/styles/luxury-style.css'

export const metadata: Metadata = {
  title: 'Our Legacy - Binhheng Credit',
  description: 'A tradition of excellence in cross-border asset recovery, bridging Eastern and Western commerce with distinction.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFFF0]">
      {/* Chapter 1: Opening - Full Screen Luxury Hero */}
      <section className="full-page-section relative">
        <div className="absolute inset-0 marble-texture" />
        
        {/* Art Deco Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 15px),
                            repeating-linear-gradient(-45deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 15px)`
          }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <div className="chapter-header">
            <div className="chapter-number">CHAPTER I</div>
            <h1 className="chapter-title mb-8">
              <span className="block">The Art of</span>
              <span className="block gold-foil text-6xl lg:text-8xl">Asset Recovery</span>
            </h1>
          </div>
          
          <p className="text-xl text-[#0A3D2E] max-w-3xl mx-auto leading-relaxed font-light">
            Where Eastern wisdom meets Western commerce, we orchestrate the delicate symphony 
            of cross-cultural financial restoration with the precision of a master craftsman.
          </p>

          <div className="section-divider mt-16">
            <div className="section-divider-ornament" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
        </div>
      </section>

      {/* Chapter 2: Heritage */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="chapter-header">
            <div className="chapter-number">CHAPTER II</div>
            <h2 className="chapter-title">Our Heritage</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="luxury-fade-in">
              <div className="ornamental-frame">
                <p className="text-lg text-[#0A3D2E] mb-8 leading-relaxed">
                  Founded on the principle that every financial obligation deserves respectful resolution, 
                  Binhheng Credit has cultivated an unparalleled expertise in navigating the complexities 
                  of international commerce.
                </p>
                <p className="text-lg text-[#0A3D2E] leading-relaxed">
                  Our legacy is built upon understanding—understanding that transcends language, 
                  culture, and geography. We don't merely recover assets; we restore trust between 
                  East and West.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="luxury-card p-8 text-center elegant-hover">
                <div className="roman-numeral mb-4">MMXXIII</div>
                <p className="text-[#0A3D2E] font-light">Established</p>
              </div>
              <div className="luxury-card p-8 text-center elegant-hover">
                <div className="text-4xl gold-foil font-bold mb-4">60%</div>
                <p className="text-[#0A3D2E] font-light">Success Rate</p>
              </div>
              <div className="luxury-card p-8 text-center elegant-hover">
                <div className="text-4xl gold-foil font-bold mb-4">$128M</div>
                <p className="text-[#0A3D2E] font-light">Recovered</p>
              </div>
              <div className="luxury-card p-8 text-center elegant-hover">
                <div className="roman-numeral mb-4">D+</div>
                <p className="text-[#0A3D2E] font-light">Clients Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Philosophy */}
      <section className="py-32 bg-[#0A3D2E] text-[#FFFFF0] relative overflow-hidden">
        <div className="absolute inset-0 spotlight" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="chapter-header">
            <div className="chapter-number">CHAPTER III</div>
            <h2 className="chapter-title text-[#FFFFF0]">Our Philosophy</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: Globe,
                title: "Cultural Mastery",
                description: "Deep understanding of both Eastern and Western business etiquette, enabling seamless cross-cultural negotiations."
              },
              {
                icon: Shield,
                title: "Ethical Excellence",
                description: "Unwavering commitment to compliance and integrity, ensuring every action upholds the highest standards."
              },
              {
                icon: Heart,
                title: "Relationship First",
                description: "We believe in preserving dignity and building bridges, not burning them. Every interaction is an opportunity for mutual respect."
              }
            ].map((value, index) => (
              <div key={index} className="text-center luxury-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="inline-block p-6 rounded-full border border-[#D4AF37] mb-6">
                  <value.icon className="w-12 h-12 text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl font-light mb-4 font-['Didot',serif]">{value.title}</h3>
                <p className="text-[#FFFFF0]/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 4: Timeline */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-8">
          <div className="chapter-header">
            <div className="chapter-number">CHAPTER IV</div>
            <h2 className="chapter-title">Our Journey</h2>
          </div>

          <div className="luxury-timeline">
            {[
              { year: "2023", title: "The Beginning", desc: "Recognizing the gap in cross-border recovery" },
              { year: "2024", title: "Expansion", desc: "Establishing presence in key markets" },
              { year: "2024", title: "Recognition", desc: "First major institutional partnerships" },
              { year: "2025", title: "Excellence", desc: "Industry leadership in ethical recovery" }
            ].map((event, index) => (
              <div key={index} className={`timeline-event ${index % 2 === 0 ? 'text-right pr-[55%]' : 'text-left pl-[55%]'}`}>
                <div className="luxury-card p-8 inline-block">
                  <div className="text-2xl gold-foil font-bold mb-2">{event.year}</div>
                  <h3 className="text-xl text-[#0A3D2E] mb-2">{event.title}</h3>
                  <p className="text-[#0A3D2E]/70">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 5: Leadership */}
      <section className="py-32 bg-gradient-to-b from-[#FFFFF0] to-[#F8F8F3]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="chapter-header">
            <div className="chapter-number">CHAPTER V</div>
            <h2 className="chapter-title">Executive Leadership</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="luxury-card p-16 text-center">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8972C] flex items-center justify-center">
                <Users className="w-16 h-16 text-[#FFFFF0]" />
              </div>
              
              <h3 className="text-3xl font-light text-[#0A3D2E] mb-6 font-['Didot',serif]">
                A Legacy of Excellence
              </h3>
              
              <p className="text-lg text-[#0A3D2E]/80 leading-relaxed mb-12">
                Our leadership team brings together decades of experience in international finance, 
                cross-cultural negotiations, and regulatory compliance. Each member has been selected 
                not just for their expertise, but for their unwavering commitment to ethical excellence.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#D4AF37]/20">
                <div>
                  <div className="text-3xl gold-foil font-bold">XX+</div>
                  <p className="text-[#0A3D2E]/70 text-sm">Years Combined Experience</p>
                </div>
                <div>
                  <div className="text-3xl gold-foil font-bold">V</div>
                  <p className="text-[#0A3D2E]/70 text-sm">Continents</p>
                </div>
                <div>
                  <div className="text-3xl gold-foil font-bold">VII</div>
                  <p className="text-[#0A3D2E]/70 text-sm">Languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Epilogue: Call to Action */}
      <section className="py-32 bg-[#0A3D2E] text-[#FFFFF0] text-center relative">
        <div className="absolute inset-0 marble-texture opacity-5" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-8">
          <div className="section-divider mb-12">
            <div className="section-divider-ornament bg-[#0A3D2E]" />
          </div>
          
          <h2 className="text-5xl font-light mb-8 font-['Didot',serif]">
            Begin Your Journey With Us
          </h2>
          
          <p className="text-xl mb-12 text-[#FFFFF0]/80 leading-relaxed">
            Discover how the art of recovery meets the science of success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-luxury">
              Schedule Consultation
            </button>
            <button className="btn-luxury bg-transparent border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
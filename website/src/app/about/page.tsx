import { Metadata } from 'next'
import { Users, Globe, Target, Award, Lightbulb, Handshake, ArrowRight, Sparkles, TrendingUp, Building2, MapPin, Calendar } from 'lucide-react'
import '@/styles/content-pages.css'

export const metadata: Metadata = {
  title: 'About Us - Binhheng Credit',
  description: 'Learn about our mission to bridge the gap in cross-border debt recovery between the US and China.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full Screen Split Design */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium">About Binhheng</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold mb-6">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                  Bridging
                </span>
                <span className="block text-gold">Continents</span>
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Recovering what was thought impossible
              </p>
            </div>
            
            {/* Visual Element */}
            <div className="relative h-[600px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl backdrop-blur-sm border border-white/10" />
              <div className="absolute inset-4 bg-gradient-to-br from-primary-800/50 to-transparent rounded-2xl" />
              {/* Floating Cards */}
              <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-md rounded-xl p-6 transform rotate-3 hover:rotate-0 transition-transform">
                <Globe className="w-12 h-12 text-gold mb-2" />
                <p className="text-white font-semibold">Global Reach</p>
              </div>
              <div className="absolute bottom-20 left-10 bg-white/10 backdrop-blur-md rounded-xl p-6 transform -rotate-3 hover:rotate-0 transition-transform">
                <TrendingUp className="w-12 h-12 text-gold mb-2" />
                <p className="text-white font-semibold">60% Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Mission Section - Asymmetric Layout */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-12">
                Our <span className="text-gold">Mission</span>
              </h2>
              
              {/* Interactive Cards */}
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-x-2">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Problem We Solve</h3>
                        <div className="w-20 h-1 bg-gold mb-4" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-x-2">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Lightbulb className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Approach</h3>
                        <div className="w-20 h-1 bg-primary-600 mb-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-12">
              {/* Floating Stats */}
              <div className="relative h-full flex items-center">
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 transform rotate-1">
                    <p className="text-6xl font-bold text-gold">$2.3M+</p>
                    <p className="text-gray-600 mt-2">Recovered</p>
                  </div>
                  <div className="bg-gradient-to-r from-primary-100 to-primary-50 rounded-2xl p-8 transform -rotate-1">
                    <p className="text-6xl font-bold text-primary-800">500+</p>
                    <p className="text-gray-600 mt-2">Cases</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Magazine Style */}
      <section className="py-32 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-8xl font-bold text-white mb-6">
              Core <span className="text-gold">Values</span>
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2 bg-gradient-to-br from-gold to-gold-dark rounded-3xl p-10 text-white">
              <Globe className="w-16 h-16 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Cross-Cultural Expertise</h3>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-white hover:bg-white/20 transition-colors">
              <Handshake className="w-16 h-16 mb-6 text-gold" />
              <h3 className="text-2xl font-bold">Ethical Recovery</h3>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-white hover:bg-white/20 transition-colors">
              <Target className="w-16 h-16 mb-6 text-gold" />
              <h3 className="text-2xl font-bold">Results-Driven</h3>
            </div>
            
            <div className="lg:col-span-2 bg-gradient-to-br from-primary-800 to-primary-700 rounded-3xl p-10 text-white">
              <Award className="w-16 h-16 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Compliance First</h3>
            </div>
            
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-white hover:bg-white/20 transition-colors">
              <div className="flex items-center gap-4">
                <Building2 className="w-16 h-16 text-gold" />
                <h3 className="text-3xl font-bold">Industry Leadership</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section - Timeline Reimagined */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl lg:text-8xl font-bold text-center mb-20">
            Our <span className="text-gold">Journey</span>
          </h2>

          {/* Horizontal Timeline */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-gold to-primary-200 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-4 gap-8">
              {[2023, 2024, 2024, 2025].map((year, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gold rounded-full border-4 border-white" />
                    <p className="text-3xl font-bold text-gold text-center mb-4">{year}</p>
                    <h3 className="text-lg font-semibold text-gray-900 text-center">Milestone {index + 1}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Dynamic Grid */}
      <section className="py-32 bg-gradient-to-br from-primary-950 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl lg:text-8xl font-bold text-white mb-8">
                <span className="block">Meet Our</span>
                <span className="block text-gold">Leadership</span>
              </h2>
              <div className="flex gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 text-white">
                  <p className="text-2xl font-bold">20+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 text-white">
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm">Countries</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 text-white">
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm">Languages</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-gold to-gold-dark rounded-2xl p-8 h-48 flex items-end">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-32">
                  <MapPin className="w-8 h-8 text-gold" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-32">
                  <Calendar className="w-8 h-8 text-gold" />
                </div>
                <div className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-2xl p-8 h-48 flex items-end">
                  <Award className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold and Simple */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-dark to-gold" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl lg:text-8xl font-bold text-white mb-8">
            Ready to Start?
          </h2>
          <button className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-gold rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105">
            Let's Talk
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  )
}
import { Metadata } from 'next'
import { Users, Globe, Target, Award, Lightbulb, Handshake } from 'lucide-react'
import '@/styles/content-pages.css'

export const metadata: Metadata = {
  title: 'About Us - Binhheng Credit',
  description: 'Learn about our mission to bridge the gap in cross-border debt recovery between the US and China.',
}

const values = [
  {
    icon: Globe,
    title: 'Cross-Cultural Expertise',
    description: 'Deep understanding of both American and Chinese business cultures enables effective communication and negotiation.',
  },
  {
    icon: Handshake,
    title: 'Ethical Recovery',
    description: 'We believe in respectful, professional debt recovery that maintains relationships while achieving results.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Our success-based model ensures we only win when you win, aligning our interests with yours.',
  },
  {
    icon: Award,
    title: 'Compliance First',
    description: 'Strict adherence to international regulations protects both creditors and debtors throughout the process.',
  },
]

const timeline = [
  {
    year: '2023',
    title: 'Company Founded',
    description: 'Identified the gap in cross-border debt recovery services',
  },
  {
    year: '2024',
    title: 'Dual Structure Established',
    description: 'Set up compliant operations in Hong Kong and Mainland China',
  },
  {
    year: '2024',
    title: 'First Major Recovery',
    description: 'Successfully recovered significant student housing debts',
  },
  {
    year: '2025',
    title: 'Scaling Operations',
    description: 'Expanding services across multiple industries and regions',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium tracking-wider uppercase">Our Story</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 leading-tight">
              About <span className="font-medium text-gold">Binhheng Credit</span>
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
              Bridging the gap in cross-border debt recovery between the United States and China with integrity and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-block">
            <div data-aos="fade-right" data-aos-duration="800">
              <div className="section-header">
                <h2 className="text-4xl sm:text-5xl font-light text-gray-900">
                  Our <span className="font-medium gradient-text">Mission</span>
                </h2>
              </div>
              <p className="lead-text mb-8">
                We exist to solve a critical problem: <span className="highlight-text">millions of dollars</span> in legitimate debts are written off every year simply because debtors have returned to China. We believe these debts can and should be recovered through ethical, compliant methods.
              </p>
              <p className="text-lg text-gray-600 mb-10">
                By combining deep cultural understanding, legal expertise, and innovative technology, we help American businesses recover what they're rightfully owed while maintaining professional standards and respecting all parties involved.
              </p>
              <div className="stats-grid bg-white rounded-xl p-6 shadow-lg">
                <div className="stat-item">
                  <p className="stat-number">$2.3M+</p>
                  <p className="stat-label">Recovered in 2024</p>
                </div>
                <div className="stat-item">
                  <p className="stat-number">500+</p>
                  <p className="stat-label">Cases Handled</p>
                </div>
                <div className="stat-item">
                  <p className="stat-number">60%</p>
                  <p className="stat-label">Success Rate</p>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-gold/5 rounded-3xl transform rotate-3" />
              <div className="relative feature-card">
                <div className="icon-box mb-6">
                  <Lightbulb className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-3xl font-medium text-gray-900 mb-6">The <span className="text-gold">Insight</span></h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We discovered that most US businesses incorrectly assume debts from Chinese nationals who return home are uncollectible. In reality, with the right approach, cultural understanding, and local presence, these debts have a recovery rate of over 60%.
                </p>
                <div className="mt-8 p-4 bg-gold/5 rounded-lg border-l-4 border-gold">
                  <p className="text-sm font-medium text-gray-700">Key Discovery</p>
                  <p className="text-2xl font-bold text-gold mt-1">60%+ Recovery Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="section-header">
              <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
                Our Core <span className="font-medium gradient-text">Values</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide every interaction and decision we make
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon
              
              return (
                <div key={index} className="feature-card text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="icon-box mx-auto mb-6">
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="section-header">
              <h2 className="text-4xl sm:text-5xl font-light text-gray-900">
                Our <span className="font-medium gradient-text">Journey</span>
              </h2>
            </div>
          </div>

          <div className="relative">
            {/* Timeline items */}
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item" data-aos="fade-right" data-aos-delay={index * 150}>
                  <div className="timeline-marker">
                    <span>{item.year}</span>
                  </div>
                  <div className="content-card">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="section-header">
              <h2 className="text-4xl sm:text-5xl font-light text-gray-900">
                Our <span className="font-medium gradient-text">Leadership</span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-6">
              A team with deep expertise in cross-border business, compliance, and technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="content-card bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="icon-box w-24 h-24 rounded-2xl flex-shrink-0">
                  <Users className="w-12 h-12 text-gray-700" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-medium text-gray-900">Leadership Team</h3>
                  <p className="text-lg text-gold font-medium mt-2">Cross-Border Experts</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our leadership combines decades of experience in international finance, debt recovery, regulatory compliance, and technology. With team members fluent in both business cultures and languages, we bridge the gap that others cannot cross.
              </p>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-2xl font-bold text-gold">20+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gold">3</p>
                    <p className="text-sm text-gray-600">Countries</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gold">5</p>
                    <p className="text-sm text-gray-600">Languages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cta-section text-center text-white" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-light mb-6">
              Ready to Learn <span className="font-medium">More?</span>
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Discover how we can help you recover your cross-border debts with our proven expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-gold text-white rounded-lg font-semibold hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule a Consultation
              </a>
              <a href="/compliance" className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-white rounded-lg font-semibold backdrop-blur-sm border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                View Our Compliance
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
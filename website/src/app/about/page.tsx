import { Metadata } from 'next'
import { Users, Globe, Target, Award, Lightbulb, Handshake } from 'lucide-react'

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
      <section className="relative py-24 bg-gradient-to-br from-primary-950 to-primary-900 text-white">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-light mb-6">
              About <span className="font-normal">Binhheng Credit</span>
            </h1>
            <p className="text-xl text-primary-100">
              Bridging the gap in cross-border debt recovery between the United States and China
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
                Our <span className="font-normal gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We exist to solve a critical problem: millions of dollars in legitimate debts are written off every year simply because debtors have returned to China. We believe these debts can and should be recovered through ethical, compliant methods.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By combining deep cultural understanding, legal expertise, and innovative technology, we help American businesses recover what they're rightfully owed while maintaining professional standards and respecting all parties involved.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold gradient-text">$2.3M+</p>
                  <p className="text-sm text-gray-600">Recovered in 2024</p>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <p className="text-3xl font-bold gradient-text">500+</p>
                  <p className="text-sm text-gray-600">Cases Handled</p>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <p className="text-3xl font-bold gradient-text">60%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl transform rotate-3" />
              <div className="relative bg-white rounded-3xl shadow-xl p-8">
                <Lightbulb className="w-12 h-12 text-accent-500 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Insight</h3>
                <p className="text-gray-600">
                  We discovered that most US businesses incorrectly assume debts from Chinese nationals who return home are uncollectible. In reality, with the right approach, cultural understanding, and local presence, these debts have a recovery rate of over 60%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Our Core <span className="font-normal gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every interaction and decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Our <span className="font-normal gradient-text">Journey</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-primary-600 shadow-lg">
                    <span className="text-sm font-bold text-primary-600">{item.year}</span>
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Our <span className="font-normal gradient-text">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A team with deep expertise in cross-border business, compliance, and technology
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Leadership Team</h3>
                  <p className="text-primary-600">Cross-Border Experts</p>
                </div>
              </div>
              <p className="text-gray-600">
                Our leadership combines decades of experience in international finance, debt recovery, regulatory compliance, and technology. With team members fluent in both business cultures and languages, we bridge the gap that others cannot cross.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">
            Ready to Learn <span className="font-normal">More?</span>
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Discover how we can help you recover your cross-border debts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white rounded-lg font-medium hover:bg-accent-600 transition-colors">
              Schedule a Consultation
            </a>
            <a href="/compliance" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg font-medium backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
              View Our Compliance
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
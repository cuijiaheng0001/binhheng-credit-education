import { Metadata } from 'next'
import { Shield, FileText, Lock, Globe, CheckCircle, AlertCircle, Scale, Fingerprint, Eye, Server, Key, ShieldCheck } from 'lucide-react'
import '@/styles/content-pages.css'

export const metadata: Metadata = {
  title: 'Compliance & Legal - Binhheng Credit',
  description: 'Our commitment to regulatory compliance across US and Chinese jurisdictions. FDCPA, PIPL, and PDPO compliant operations.',
}

export default function CompliancePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Split Screen Design */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="bg-primary-950" />
          <div className="bg-gold" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">Legal Excellence</span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-bold mb-6">
                  <span className="block">Compliance</span>
                  <span className="block text-gold">First</span>
                </h1>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white rounded-3xl p-12 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Scale className="w-20 h-20 text-gold mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900">Multi-Jurisdictional</h2>
                  <p className="text-gray-600 mt-2">US • China • Hong Kong</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Compliance Framework - Visual Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-8xl font-bold text-gray-900">
              Regulatory <span className="text-gold">Framework</span>
            </h2>
          </div>

          {/* 3D Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8 perspective-1000">
            {/* FDCPA Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl transform rotate-y-6 group-hover:rotate-y-0 transition-transform duration-500" />
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl transform -rotate-y-6 group-hover:rotate-y-0 transition-transform duration-500">
                <div className="text-6xl font-bold text-primary-600 mb-4">FDCPA</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">United States</h3>
                <div className="w-16 h-1 bg-primary-600 mb-6" />
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">No Harassment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Truthful Representation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Consumer Rights</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* PIPL Card */}
            <div className="group relative lg:mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-dark rounded-3xl transform rotate-y-6 group-hover:rotate-y-0 transition-transform duration-500" />
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl transform -rotate-y-6 group-hover:rotate-y-0 transition-transform duration-500">
                <div className="text-6xl font-bold text-gold mb-4">PIPL</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">China</h3>
                <div className="w-16 h-1 bg-gold mb-6" />
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Data Consent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Minimal Collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Cross-border Compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* PDPO Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl transform rotate-y-6 group-hover:rotate-y-0 transition-transform duration-500" />
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl transform -rotate-y-6 group-hover:rotate-y-0 transition-transform duration-500">
                <div className="text-6xl font-bold text-primary-600 mb-4">PDPO</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hong Kong</h3>
                <div className="w-16 h-1 bg-primary-600 mb-6" />
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Fair Collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Data Security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Transparency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Visualization */}
      <section className="py-32 bg-gradient-to-br from-primary-950 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/circuit.svg')] opacity-5" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl lg:text-8xl font-bold text-center text-white mb-20">
            Security <span className="text-gold">Architecture</span>
          </h2>

          {/* Hexagon Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-gold/50 transition-all duration-300">
                <Lock className="w-16 h-16 text-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">SHA-256 Encryption</h3>
                <div className="w-12 h-0.5 bg-gold" />
              </div>
            </div>

            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-gold/50 transition-all duration-300">
                <Fingerprint className="w-16 h-16 text-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Multi-Factor Auth</h3>
                <div className="w-12 h-0.5 bg-gold" />
              </div>
            </div>

            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-gold/50 transition-all duration-300">
                <Eye className="w-16 h-16 text-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Audit Trails</h3>
                <div className="w-12 h-0.5 bg-gold" />
              </div>
            </div>

            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-gold/50 transition-all duration-300">
                <Server className="w-16 h-16 text-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Secure Infrastructure</h3>
                <div className="w-12 h-0.5 bg-gold" />
              </div>
            </div>

            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-gold/50 transition-all duration-300">
                <Key className="w-16 h-16 text-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Access Control</h3>
                <div className="w-12 h-0.5 bg-gold" />
              </div>
            </div>

            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-gold/50 transition-all duration-300">
                <ShieldCheck className="w-16 h-16 text-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">24/7 Monitoring</h3>
                <div className="w-12 h-0.5 bg-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications - Visual Timeline */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl lg:text-8xl font-bold text-center mb-20">
            Industry <span className="text-gold">Certifications</span>
          </h2>

          {/* Visual Progress */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full transform -translate-y-1/2">
                <div className="h-full w-1/3 bg-gradient-to-r from-gold to-gold-dark rounded-full" />
              </div>

              {/* Certification Points */}
              <div className="relative grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gold rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    ACA
                  </div>
                  <h3 className="font-bold text-gray-900">ACA International</h3>
                  <p className="text-sm text-gray-600">In Progress</p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    ISO
                  </div>
                  <h3 className="font-bold text-gray-900">ISO 27001</h3>
                  <p className="text-sm text-gray-600">Planned</p>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    SOC2
                  </div>
                  <h3 className="font-bold text-gray-900">SOC 2 Type II</h3>
                  <p className="text-sm text-gray-600">2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion Style */}
      <section className="py-32 bg-primary-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl lg:text-8xl font-bold text-center text-white mb-20">
            Common <span className="text-gold">Questions</span>
          </h2>

          <div className="space-y-4">
            {[
              "Cross-Border Legal Compliance",
              "Reputation Protection",
              "Privacy & Data Security",
              "Payment Refusal Handling",
              "Currency & Transfers"
            ].map((title, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                      <span className="text-gold text-2xl">+</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section - Full Width CTA */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-dark to-gold" />
          <div className="absolute inset-0 bg-[url('/document-pattern.svg')] opacity-10" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <FileText className="w-24 h-24 mx-auto mb-8 text-white" />
            <h2 className="text-6xl lg:text-8xl font-bold text-white mb-8">
              Compliance Guide
            </h2>
            <button className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-gold rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105">
              Download PDF
              <FileText className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
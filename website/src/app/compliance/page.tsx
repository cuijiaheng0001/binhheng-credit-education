import { Metadata } from 'next'
import { Shield, FileText, Lock, Globe, CheckCircle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Compliance & Legal - Binhheng Credit',
  description: 'Our commitment to regulatory compliance across US and Chinese jurisdictions. FDCPA, PIPL, and PDPO compliant operations.',
}

const complianceFrameworks = [
  {
    icon: Shield,
    title: 'FDCPA Compliance',
    region: 'United States',
    description: 'Fair Debt Collection Practices Act',
    details: [
      'No harassment or abuse of debtors',
      'Truthful representation in all communications',
      'Proper identification in every contact',
      'Respect for consumer rights and privacy',
    ],
  },
  {
    icon: Lock,
    title: 'PIPL Compliance',
    region: 'China',
    description: 'Personal Information Protection Law',
    details: [
      'Explicit consent for data processing',
      'Minimal data collection principle',
      'Cross-border data transfer compliance',
      'Individual rights protection',
    ],
  },
  {
    icon: Globe,
    title: 'PDPO Compliance',
    region: 'Hong Kong',
    description: 'Personal Data Privacy Ordinance',
    details: [
      'Lawful and fair collection of personal data',
      'Data accuracy and retention limits',
      'Data security measures',
      'Transparency in data use',
    ],
  },
]

const securityMeasures = [
  {
    title: 'Data Encryption',
    description: 'SHA-256 encryption for all sensitive data at rest and in transit',
  },
  {
    title: 'Access Control',
    description: 'Role-based access control with multi-factor authentication',
  },
  {
    title: 'Audit Trails',
    description: 'Comprehensive logging of all data access and modifications',
  },
  {
    title: 'Data Minimization',
    description: 'Collection of only essential information for debt recovery',
  },
  {
    title: 'Regular Audits',
    description: 'Quarterly security audits and compliance reviews',
  },
  {
    title: 'Incident Response',
    description: '24-hour breach notification and remediation protocols',
  },
]

export default function CompliancePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-950 to-primary-900 text-white">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-light mb-6">
              Compliance & <span className="font-normal">Legal Framework</span>
            </h1>
            <p className="text-xl text-primary-100">
              Operating with the highest standards of regulatory compliance across all jurisdictions
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Multi-Jurisdictional <span className="font-normal gradient-text">Compliance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain strict adherence to debt collection and data privacy laws in every market we operate
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => {
              const Icon = framework.icon
              
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{framework.title}</h3>
                      <p className="text-sm text-primary-600">{framework.region}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{framework.description}</p>
                  
                  <ul className="space-y-3">
                    {framework.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Enterprise-Grade <span className="font-normal gradient-text">Security</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data is protected by multiple layers of security measures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{measure.title}</h3>
                <p className="text-gray-600">{measure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Industry <span className="font-normal">Certifications</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mt-2" />
                    <div>
                      <h3 className="font-semibold text-gray-900">ACA International Membership</h3>
                      <p className="text-gray-600">Application pending - Committed to industry best practices</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mt-2" />
                    <div>
                      <h3 className="font-semibold text-gray-900">ISO 27001 Certification</h3>
                      <p className="text-gray-600">Information security management - In progress</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent-500 mt-2" />
                    <div>
                      <h3 className="font-semibold text-gray-900">SOC 2 Type II</h3>
                      <p className="text-gray-600">Security and availability controls - Planned for 2025</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">Compliance Commitment</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We maintain a proactive approach to compliance, regularly updating our practices to meet evolving regulatory requirements.
                </p>
                <a href="/contact" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                  Request Compliance Documentation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-primary-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 mx-auto mb-6 text-accent-400" />
          <h2 className="text-3xl font-light mb-4">
            Download Our <span className="font-normal">Compliance Guide</span>
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Get detailed information about our compliance framework and security measures
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white rounded-lg font-medium hover:bg-accent-600 transition-colors">
            <FileText className="w-5 h-5" />
            Download PDF Guide
          </button>
        </div>
      </section>
    </main>
  )
}
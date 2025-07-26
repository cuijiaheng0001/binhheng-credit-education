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

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Frequently Asked <span className="font-normal gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Common concerns about cross-border debt recovery compliance
            </p>
          </div>

          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do you ensure cross-border debt collection is legal and compliant?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain strict compliance with both U.S. and Chinese regulations. In the U.S., we follow FDCPA guidelines, 
                ensuring no harassment, truthful representation, and respect for consumer rights. In China, we comply with PIPL 
                (Personal Information Protection Law) requirements, including obtaining proper consent and following data minimization 
                principles. Our dual-structure through Hong Kong ensures we can operate legally in both jurisdictions while maintaining 
                the highest standards of data protection and consumer rights.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Will debt collection attempts damage our reputation in China?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No, when done correctly. Our approach is specifically designed to preserve and even enhance your reputation. 
                We use culturally sensitive communication methods that respect Chinese business customs and the concept of "face." 
                Our native Mandarin speakers understand the importance of relationship-based negotiations and use collaborative 
                problem-solving rather than aggressive tactics. Many clients report improved relationships with Chinese partners 
                after professional debt resolution.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How is debtor privacy protected during the recovery process?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We implement bank-level security measures including SHA-256 encryption for all data at rest and in transit. 
                Access is strictly controlled through role-based permissions with multi-factor authentication. We follow data 
                minimization principles, collecting only essential information needed for recovery. All data access is logged 
                for audit trails, and we maintain incident response protocols with 24-hour breach notification. Regular security 
                audits ensure ongoing compliance with international data protection standards.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What happens if a debtor refuses to pay?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our success comes from negotiation, not litigation. If initial attempts don't succeed, we employ various 
                culturally appropriate strategies including payment plans aligned with Chinese bonus cycles, involvement of 
                professional networks, and face-saving solutions. We achieve 60% recovery rates through patience and cultural 
                understanding. Litigation is rarely needed and only considered as a last resort with client approval. Our 
                focus remains on voluntary resolution that preserves business relationships.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do you handle currency conversion and international transfers?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We work with licensed money transfer operators to ensure full compliance with international banking regulations, 
                anti-money laundering (AML) requirements, and currency controls. All transfers are documented with clear audit 
                trails. We can accept payments through Chinese payment systems (WeChat Pay, Alipay) and convert them to USD 
                through compliant channels. Our transparent process ensures you receive the maximum recovery amount while 
                maintaining full regulatory compliance.
              </p>
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
import { Metadata } from 'next'
import { Shield, Scale, Lock, Globe, Award, FileText, CheckCircle, Stamp } from 'lucide-react'
import '@/styles/content-pages.css'
import '@/styles/luxury-style.css'

export const metadata: Metadata = {
  title: 'Compliance Excellence - Binhheng Credit',
  description: 'Uncompromising standards in regulatory compliance across multiple jurisdictions. FDCPA, PIPL, and PDPO certified operations.',
}

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-[#FFFFF0]">
      {/* Grand Opening - Art Gallery Style */}
      <section className="full-page-section relative">
        <div className="absolute inset-0 bg-[#0A3D2E]" />
        
        {/* Sophisticated Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-8">
            <div className="inline-block mb-8">
              <div className="wax-seal">
                <Shield className="w-10 h-10" />
              </div>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-light text-[#FFFFF0] mb-8 font-['Didot',serif]">
              <span className="block">Standards of</span>
              <span className="block gold-foil">Excellence</span>
            </h1>
            
            <p className="text-xl text-[#FFFFF0]/80 max-w-2xl mx-auto leading-relaxed">
              Where regulatory compliance meets refined sophistication. 
              Every action guided by the highest ethical standards.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Frameworks - Gallery Display */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="chapter-header">
            <div className="chapter-number">CERTIFICATION I</div>
            <h2 className="chapter-title">Global Compliance Framework</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* FDCPA - United States */}
            <div className="group">
              <div className="art-deco-border luxury-card p-10 h-full elegant-hover">
                <div className="text-center mb-8">
                  <div className="inline-block p-4 bg-[#0A3D2E] rounded-full mb-4">
                    <Scale className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-3xl font-light text-[#0A3D2E] mb-2 font-['Didot',serif]">FDCPA</h3>
                  <p className="text-sm uppercase tracking-widest text-[#D4AF37]">United States</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0A3D2E] mt-1 flex-shrink-0" />
                    <p className="text-[#0A3D2E]/80">Respectful Communication Standards</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0A3D2E] mt-1 flex-shrink-0" />
                    <p className="text-[#0A3D2E]/80">Complete Transparency Protocols</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0A3D2E] mt-1 flex-shrink-0" />
                    <p className="text-[#0A3D2E]/80">Consumer Rights Protection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PIPL - China */}
            <div className="group lg:mt-8">
              <div className="art-deco-border luxury-card p-10 h-full elegant-hover">
                <div className="text-center mb-8">
                  <div className="inline-block p-4 bg-[#0A3D2E] rounded-full mb-4">
                    <Lock className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-3xl font-light text-[#0A3D2E] mb-2 font-['Didot',serif]">PIPL</h3>
                  <p className="text-sm uppercase tracking-widest text-[#D4AF37]">People's Republic of China</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0A3D2E] mt-1 flex-shrink-0" />
                    <p className="text-[#0A3D2E]/80">Explicit Consent Protocols</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0A3D2E] mt-1 flex-shrink-0" />
                    <p className="text-[#0A3D2E]/80">Data Minimization Principles</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0A3D2E] mt-1 flex-shrink-0" />
                    <p className="text-[#0A3D2E]/80">Cross-Border Compliance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PDPO - Hong Kong */}
            <div className="group">
              <div className="art-deco-border luxury-card p-10 h-full elegant-hover">
                <div className="text-center mb-8">
                  <div className="inline-block p-4 bg-[#0A3D2E] rounded-full mb-4">
                    <Globe className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-3xl font-light text-[#0A3D2E] mb-2 font-['Didot',serif]">PDPO</h3>
                  <p className="text-sm uppercase tracking-widest text-[#D4AF37]">Hong Kong SAR</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0A3D2E] mt-1 flex-shrink-0" />
                    <p className="text-[#0A3D2E]/80">Fair Collection Practices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0A3D2E] mt-1 flex-shrink-0" />
                    <p className="text-[#0A3D2E]/80">Data Security Excellence</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0A3D2E] mt-1 flex-shrink-0" />
                    <p className="text-[#0A3D2E]/80">Complete Transparency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Architecture - Showcase */}
      <section className="py-32 bg-gradient-to-b from-[#F8F8F3] to-[#FFFFF0] relative overflow-hidden">
        <div className="absolute inset-0 marble-texture" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="chapter-header">
            <div className="chapter-number">CERTIFICATION II</div>
            <h2 className="chapter-title">Security Architecture</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Lock, title: "SHA-256 Encryption", desc: "Bank-grade security protocols" },
                { icon: Shield, title: "Multi-Factor Authentication", desc: "Advanced identity verification" },
                { icon: Globe, title: "Global Compliance", desc: "Multi-jurisdictional standards" },
                { icon: Award, title: "ISO Standards", desc: "International certifications" },
                { icon: Scale, title: "Legal Framework", desc: "Comprehensive compliance" },
                { icon: FileText, title: "Audit Excellence", desc: "Continuous monitoring" }
              ].map((item, index) => (
                <div key={index} className="text-center luxury-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="luxury-card p-8 h-full elegant-hover">
                    <item.icon className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-[#0A3D2E] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#0A3D2E]/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Timeline */}
      <section className="py-32 bg-[#0A3D2E] text-[#FFFFF0] relative">
        <div className="absolute inset-0 spotlight" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="chapter-header">
            <div className="chapter-number text-[#D4AF37]">CERTIFICATION III</div>
            <h2 className="chapter-title text-[#FFFFF0]">Industry Recognition</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { status: "Active", cert: "ACA International", desc: "Association of Credit and Collection Professionals" },
                { status: "In Progress", cert: "ISO 27001", desc: "Information Security Management" },
                { status: "Planned 2025", cert: "SOC 2 Type II", desc: "Security & Availability Controls" }
              ].map((cert, index) => (
                <div key={index} className="border border-[#D4AF37]/30 rounded-lg p-8 backdrop-blur-sm bg-[#FFFFF0]/5 elegant-hover">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-light mb-2 font-['Didot',serif]">{cert.cert}</h3>
                      <p className="text-[#FFFFF0]/70">{cert.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-4 py-2 bg-[#D4AF37]/20 rounded-full text-sm font-medium text-[#D4AF37]">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Excellence */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="chapter-header">
            <div className="chapter-number">COMMITMENT</div>
            <h2 className="chapter-title">Our Promise</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-[#0A3D2E] leading-relaxed mb-12">
              In the tradition of excellence that defines luxury service, we maintain 
              the highest standards of regulatory compliance. Every interaction, every 
              process, every outcome reflects our unwavering commitment to ethical excellence.
            </p>

            <div className="inline-block">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 rounded-full bg-[#0A3D2E] flex items-center justify-center">
                  <Award className="w-12 h-12 text-[#D4AF37]" />
                </div>
                <div className="text-left">
                  <div className="text-5xl gold-foil font-bold">100%</div>
                  <p className="text-[#0A3D2E]/70">Compliance Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Guide - Elegant CTA */}
      <section className="py-32 bg-gradient-to-br from-[#0A3D2E] to-[#0A4D3C] text-[#FFFFF0] relative">
        <div className="absolute inset-0 marble-texture opacity-5" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <FileText className="w-20 h-20 mx-auto mb-8 text-[#D4AF37]" />
          
          <h2 className="text-5xl font-light mb-6 font-['Didot',serif]">
            Compliance Excellence Guide
          </h2>
          
          <p className="text-xl mb-12 text-[#FFFFF0]/80 max-w-2xl mx-auto">
            A comprehensive overview of our regulatory framework and commitment to excellence
          </p>
          
          <button className="btn-luxury bg-[#FFFFF0] text-[#0A3D2E] border-[#D4AF37]">
            Request Documentation
          </button>
        </div>
      </section>
    </main>
  )
}
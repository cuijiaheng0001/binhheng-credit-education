import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Binhheng Credit',
  description: 'Our commitment to protecting your personal information and privacy rights.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-24 bg-gradient-to-br from-primary-950 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-light mb-6">Privacy Policy</h1>
          <p className="text-xl text-primary-100">Effective Date: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Binhheng Credit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>Contact information (name, email, phone number, company name)</li>
            <li>Debt-related information necessary for our services</li>
            <li>Communication records between you and our team</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <ul>
            <li>IP address and browser information</li>
            <li>Device and usage information</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide and improve our debt recovery services</li>
            <li>Communicate with you about our services</li>
            <li>Comply with legal obligations</li>
            <li>Protect against fraudulent or illegal activity</li>
            <li>Analyze and improve our website and services</li>
          </ul>

          <h2>4. Information Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Affiliated companies for service delivery</li>
            <li>Third parties with your explicit consent</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties.</p>

          <h2>5. Cross-Border Data Transfers</h2>
          <p>
            Given the nature of our services, your information may be transferred to and processed in the United States, Hong Kong, and China. We ensure appropriate safeguards are in place for all international transfers in compliance with applicable laws.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your information, including:
          </p>
          <ul>
            <li>SHA-256 encryption for sensitive data</li>
            <li>Secure servers and firewalls</li>
            <li>Regular security audits</li>
            <li>Limited access controls</li>
          </ul>

          <h2>7. Data Retention</h2>
          <p>
            We retain your information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
          </p>

          <h2>8. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>

          <h2>9. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
          </p>

          <h2>10. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings. For more information, see our Cookie Policy.
          </p>

          <h2>11. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you of material changes by posting the updated policy on our website.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <address className="not-italic">
            Binhheng Credit<br />
            Email: privacy@binhhengcredit.com<br />
            Phone: [Contact Number]
          </address>

          <h2>14. Regional Privacy Rights</h2>
          <h3>For California Residents (CCPA)</h3>
          <p>
            California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know, delete, and opt-out of the sale of personal information.
          </p>

          <h3>For EU/UK Residents (GDPR)</h3>
          <p>
            If you are located in the European Union or United Kingdom, you have additional rights under the General Data Protection Regulation (GDPR), including the right to data portability and to lodge a complaint with a supervisory authority.
          </p>

          <h3>For Chinese Residents (PIPL)</h3>
          <p>
            If you are located in China, you have rights under the Personal Information Protection Law (PIPL), including the right to know, correct, and delete your personal information, and the right to request explanation of our processing rules.
          </p>
        </div>
      </section>
    </main>
  )
}
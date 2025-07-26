import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Binhheng Credit',
  description: 'Terms and conditions governing the use of Binhheng Credit services.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-24 bg-gradient-to-br from-primary-950 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-light mb-6">Terms of Service</h1>
          <p className="text-xl text-primary-100">Last Updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the services of Binhheng Credit ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our services.
          </p>

          <h2>2. Services Description</h2>
          <p>
            Binhheng Credit provides cross-border debt recovery services, specializing in the recovery of debts owed by Chinese nationals to US-based businesses. Our services include:
          </p>
          <ul>
            <li>Debt assessment and evaluation</li>
            <li>Amicable debt collection</li>
            <li>Cross-border communication and negotiation</li>
            <li>Compliance consulting</li>
          </ul>

          <h2>3. Eligibility</h2>
          <p>
            Our services are available only to businesses and organizations. By using our services, you represent that:
          </p>
          <ul>
            <li>You are a legal entity or authorized representative</li>
            <li>You have the authority to enter into these Terms</li>
            <li>You are at least 18 years of age</li>
            <li>Your use of our services is lawful in your jurisdiction</li>
          </ul>

          <h2>4. Client Obligations</h2>
          <p>As our client, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information about debts</li>
            <li>Have legal rights to collect the debts submitted</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Cooperate with our reasonable requests for information</li>
            <li>Maintain confidentiality of our methods and processes</li>
          </ul>

          <h2>5. Service Fees</h2>
          <p>
            Our fees are success-based, meaning you only pay when we successfully recover funds. The specific fee structure will be outlined in your service agreement. Fees typically range from 25-35% of recovered amounts.
          </p>

          <h2>6. No Guarantee of Recovery</h2>
          <p>
            While we maintain a high success rate, we cannot guarantee the recovery of any specific debt. Recovery depends on various factors beyond our control, including debtor cooperation and financial capacity.
          </p>

          <h2>7. Compliance and Legal</h2>
          <p>
            We operate in strict compliance with:
          </p>
          <ul>
            <li>Fair Debt Collection Practices Act (FDCPA) - United States</li>
            <li>Personal Information Protection Law (PIPL) - China</li>
            <li>Personal Data Privacy Ordinance (PDPO) - Hong Kong</li>
            <li>All other applicable local and international laws</li>
          </ul>

          <h2>8. Confidentiality</h2>
          <p>
            Both parties agree to maintain the confidentiality of all non-public information shared during the course of our services. This obligation survives the termination of our service agreement.
          </p>

          <h2>9. Data Protection</h2>
          <p>
            We handle all personal data in accordance with our Privacy Policy and applicable data protection laws. You warrant that you have the right to share any personal data provided to us.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law:
          </p>
          <ul>
            <li>Our liability is limited to the fees paid for the specific service</li>
            <li>We are not liable for indirect, incidental, or consequential damages</li>
            <li>We are not responsible for debtors' actions or insolvency</li>
          </ul>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Binhheng Credit, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, or expenses arising from:
          </p>
          <ul>
            <li>Your breach of these Terms</li>
            <li>Your violation of any law or rights of a third party</li>
            <li>Inaccurate or incomplete information provided by you</li>
          </ul>

          <h2>12. Term and Termination</h2>
          <p>
            These Terms remain in effect until terminated by either party. Either party may terminate the service agreement with written notice. Upon termination, all outstanding fees become due and payable.
          </p>

          <h2>13. Dispute Resolution</h2>
          <p>
            Any disputes arising from these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in English.
          </p>

          <h2>14. Governing Law</h2>
          <p>
            These Terms are governed by the laws of [Jurisdiction], without regard to its conflict of law provisions.
          </p>

          <h2>15. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Material changes will be communicated to active clients. Continued use of our services constitutes acceptance of modified Terms.
          </p>

          <h2>16. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
          </p>

          <h2>17. Entire Agreement</h2>
          <p>
            These Terms, together with any service agreement and our Privacy Policy, constitute the entire agreement between you and Binhheng Credit regarding our services.
          </p>

          <h2>18. Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at:
          </p>
          <address className="not-italic">
            Binhheng Credit<br />
            Email: legal@binhhengcredit.com<br />
            Phone: [Contact Number]
          </address>
        </div>
      </section>
    </main>
  )
}
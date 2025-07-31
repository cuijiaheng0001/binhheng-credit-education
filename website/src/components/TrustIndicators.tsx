'use client'

import { type Locale } from '@/i18n/config'

const getTestimonials = (locale: Locale) => [
  {
    company: 'University Housing Corp',
    quote: locale === 'zh' ? '在Bingheng的帮助下，我们追回了超过200万美元的留学生欠款，这些债务我们原本已经准备注销。' : 'With Bingheng\'s help, we recovered over $2 million in international student debts that we had already prepared to write off.',
    author: 'Sarah Johnson',
    role: 'CFO'
  },
  {
    company: 'Global Trade Partners',
    quote: locale === 'zh' ? '他们对中国市场的深入了解和专业网络，帮助我们成功追回了多笔被认为无法收回的贸易欠款。' : 'Their deep understanding of the Chinese market and professional network helped us successfully recover multiple trade debts that were deemed uncollectible.',
    author: 'Michael Chen',
    role: 'Credit Manager'
  }
]

interface TrustIndicatorsProps {
  locale?: Locale
}

export default function TrustIndicators({ locale = 'zh' }: TrustIndicatorsProps) {
  const testimonials = getTestimonials(locale)
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            {locale === 'zh' ? '值得信赖的合作伙伴' : 'Your Trusted Partner'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === 'zh' ? '合规、专业、高效 - 您的跨境债务追收专家' : 'Compliant, Professional, Efficient - Your Cross-Border Debt Recovery Experts'}
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animation-delay-${index * 200}`}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
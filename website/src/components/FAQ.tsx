'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/client'

interface FAQItem {
  question: string
  answer: string
  category?: string
}

const faqData: Record<string, FAQItem[]> = {
  zh: [
    {
      question: '为什么中国债务人的追收如此困难？',
      answer: '中国债务人回国后，面临语言障碍、法律体系差异、文化背景不同等多重挑战。一般国际催收公司缺乏本地化资源和对中国市场的深入了解，导致追收成功率极低。',
      category: '基础知识'
    },
    {
      question: '你们的追收流程是否合法合规？',
      answer: '是的，我们严格遵守中美两国的法律法规。所有追收活动都在法律框架内进行，不使用任何骚扰或威胁手段。我们通过专业的谈判和协商来达成解决方案。',
      category: '合规性'
    },
    {
      question: '追收成功率有多高？',
      answer: '根据债务类型不同，我们的成功率在45%-72%之间。留学生债务追收成功率约65%，B2B贸易债务成功率约72%，电商平台债务成功率约55%。',
      category: '成功率'
    },
    {
      question: '需要多长时间能看到结果？',
      answer: '一般情况下，我们在接手案件后2-4周内会有初步进展反馈。完整的追收周期通常在2-6个月，具体时间取决于债务金额、债务人配合度等因素。',
      category: '时间周期'
    },
    {
      question: '你们的收费标准是什么？',
      answer: '我们采用成功收费模式，只有在成功追回款项后才收取佣金。佣金比例根据债务金额、账龄、难度等因素确定，一般在追回金额的25%-40%之间。前期评估完全免费。',
      category: '费用'
    },
    {
      question: '什么类型的债务你们不接受？',
      answer: '我们不接受以下类型的债务：1) 涉及刑事案件的债务；2) 没有任何书面证据的口头债务；3) 超过法定时效的债务；4) 债务人已被法院宣告破产的案件。',
      category: '服务范围'
    }
  ],
  en: [
    {
      question: 'Why is it so difficult to collect debts from Chinese nationals?',
      answer: 'When Chinese debtors return home, collectors face language barriers, different legal systems, and cultural differences. General international collection agencies lack localized resources and deep understanding of the Chinese market, resulting in very low success rates.',
      category: 'Basics'
    },
    {
      question: 'Is your collection process legal and compliant?',
      answer: 'Yes, we strictly comply with laws and regulations in both the US and China. All collection activities are conducted within legal frameworks, without using any harassment or threatening tactics. We achieve solutions through professional negotiation and consultation.',
      category: 'Compliance'
    },
    {
      question: 'What is your success rate?',
      answer: 'Our success rates vary by debt type, ranging from 45%-72%. Student debt recovery success rate is about 65%, B2B trade debt success rate is about 72%, and e-commerce platform debt success rate is about 55%.',
      category: 'Success Rate'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Generally, we provide initial progress feedback within 2-4 weeks after taking on a case. The complete collection cycle typically takes 2-6 months, depending on factors such as debt amount and debtor cooperation.',
      category: 'Timeline'
    },
    {
      question: 'What are your fee standards?',
      answer: 'We use a success-based fee model, charging commission only after successfully recovering funds. Commission rates are determined by debt amount, age, difficulty, etc., generally between 25%-40% of recovered amount. Initial assessment is completely free.',
      category: 'Fees'
    },
    {
      question: 'What types of debt do you not accept?',
      answer: 'We do not accept: 1) Debts involving criminal cases; 2) Verbal debts without any written evidence; 3) Debts beyond legal statute of limitations; 4) Cases where debtors have been declared bankrupt by court.',
      category: 'Service Scope'
    }
  ]
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const { locale } = useLanguage()
  
  const faqs = faqData[locale] || faqData['zh']
  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category).filter(Boolean)))] as string[]
  
  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-primary-blue" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {locale === 'zh' ? '常见问题' : 'Frequently Asked Questions'}
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === 'zh' 
              ? '了解更多关于我们的服务和债务追收流程'
              : 'Learn more about our services and debt collection process'}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary-blue text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {category === 'all' 
                ? (locale === 'zh' ? '全部' : 'All')
                : category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded-xl"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            {locale === 'zh'
              ? '还有其他问题？我们随时为您解答'
              : 'Have more questions? We\'re here to help'}
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-secondary-blue transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {locale === 'zh' ? '联系我们' : 'Contact Us'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
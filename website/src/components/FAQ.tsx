'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type Locale } from '@/i18n/config'
import ConsultationModal from './ConsultationModal'

interface FAQItem {
  question: string
  answer: string
  category?: string
}

const faqData: Record<string, FAQItem[]> = {
  zh: [
    // 成本和收费（客户最关心）
    {
      question: '你们的收费标准是什么？',
      answer: '我们采用"No Cure, No Pay"纯成功费模式：\n\n• 零前期费用：不收取任何预付款、保证金或小时费\n• 分级费率：\n  - 回收额0-5,000美元：25%佣金\n  - 回收额5,000-20,000美元：20%佣金\n  - 20,000美元以上：15%佣金\n• 批量折扣：大批量案件可协商优惠费率\n• 完全透明：无隐藏费用，所有成本由我们承担',
      category: '成本和收费'
    },
    {
      question: '费用如何计算？有隐藏费用吗？',
      answer: '我们采用"No Cure, No Pay"（不成功不收费）模式：\n\n• 零前期费用 - 没有任何预付款或保证金\n• 纯成功费 - 仅对实际回收金额收取百分比费用\n• 分级费率：$5,000以下：25%；$5,000-$20,000：20%；$20,000以上：15%\n• 无隐藏费用 - 所有标准操作成本由我们承担',
      category: '成本和收费'
    },
    {
      question: '典型的投资回报是怎样的？',
      answer: '以实际案例说明：\n\n案例：某教育机构100个中国学生欠款，总额$500,000\n• 传统方式：几乎100%损失\n• 通过我们：\n  - 预期回收25%（$125,000）\n  - 支付成功费20%（$25,000）\n  - 净回收$100,000\n  - 相当于挽回20%的坏账损失',
      category: '成本和收费'
    },
    {
      question: '投资回报率（ROI）如何计算？',
      answer: '以典型案例计算：\n\n• 投入：$0前期成本（纯成功费模式）\n• 回报：25%平均回收率\n• 示例：10万美元坏账组合\n  - 预期回收：$25,000\n  - 支付成功费（20%）：$5,000\n  - 净回收：$20,000\n  - ROI：无限大（因为无前期投入）\n\n对比：传统诉讼可能花费$5,000-10,000，且成功率低于20%',
      category: '成本和收费'
    },
    {
      question: '如果我们想先测试效果，最小的试点规模是多少？',
      answer: '我们提供灵活的试点方案：\n\n• 最小批次：10-20个账户\n• 推荐批次：20-50个账户（数据更有说服力）\n• 账户选择：不同金额、不同行业、不同欠款时长\n• 试点安排：\n  - 第一批：选择$5,000-20,000的中等金额\n  - 包含：电商卖家、服务欠费等不同类型\n  - 时间：60天评估期\n  - 费用：完全基于成功，无前期投入',
      category: '成本和收费'
    },
    
    // 效果和时间（客户次关心）
    {
      question: '你们的成功率如何？',
      answer: '根据试点数据：\n\n• 联系率：70% - 我们在两周内成功联系到70%的债务人\n• 回收率：25% - 60天内回收了总欠款的25%\n• 首次联系：48小时内 - 100%的案件在48小时内进行首次联系尝试\n• 平均回款时间：28天 - 从委托到收款的中位数时间',
      category: '效果和时间'
    },
    {
      question: '在中国追收债务的成功率如何？',
      answer: '根据我们的经验和案例统计，成功率取决于多个因素：\n\n• 境外仲裁在华执行：成功率高达95%（2016-2025年统计数据显示，127起申请中有121起获得执行）\n• 中国法院诉讼：如果证据充分、程序合规，外国债权人同样能够获得公正判决\n• 关键成功因素：欠款金额大小、债务人资产状况、证据完整性、合同条款设计',
      category: '效果和时间'
    },
    {
      question: '什么情况下成功率最高？',
      answer: '根据我们的案例统计，以下情况成功率超过70%：\n\n• 债务人仍在正常经营（非停业或注销）\n• 有过部分付款记录（说明认可债务）\n• 金额在3000-50000美元区间\n• 距离债务到期不超过2年\n• 有明确的书面合同和完整交易记录',
      category: '效果和时间'
    },
    {
      question: '平均需要多长时间能看到结果？',
      answer: '平均回收周期：45天\n\n• 初步反馈：15天内完成中国境内软性协商\n• 流程透明：每个阶段都有明确的时间节点和进度报告',
      category: '效果和时间'
    },
    {
      question: '通常需要多长时间看到效果？',
      answer: '根据债务具体情况而定。一般来说：\n\n• 初步联系债务人：1-2周\n• 达成还款意向：2-4周\n• 完成首次还款：1-3个月\n• 复杂案件可能需要更长时间，但我们会定期向您汇报进展。',
      category: '效果和时间'
    },
    {
      question: '整个追讨流程需要多长时间？',
      answer: '一般流程如下：\n\n• 诉前财产保全：1-2周（关键步骤，可冻结债务人资产）\n• 一审程序：3-6个月\n• 执行程序：2-6个月（取决于财产查找情况）\n• 实践中，许多案件在诉前或诉中达成和解。',
      category: '效果和时间'
    },
    
    // 合法合规（重要关切）
    {
      question: '你们的催收服务在中国是否合法合规？',
      answer: '是的，我们的服务完全合法。根据中国《个人信息保护法》第13条，处理债务人信息用于履行合同义务是法律允许的。我们通过持牌的北京合作伙伴合法获取数据，所有操作都符合中国PIPL、数据安全法以及国际标准如GDPR。我们正在申请成为美国ACA International成员，进一步确保合规性。',
      category: '合法合规'
    },
    {
      question: '你们的催收流程在美国法律框架下合规吗？',
      answer: '我们的合规措施包括：\n\n• FDCPA合规：虽然法律上境外催收员应遵守FDCPA，但由于催收行为完全发生在中国境内，美国监管机构实际管辖效力有限\n• 监督责任：我们理解美国债权人需对第三方代理负监督责任，因此提供完整的合规培训记录和行为准则文档\n• Reg F遵守：尽管在中国境内操作，我们仍遵循通信频率限制等基本规范，避免骚扰式催收',
      category: '合法合规'
    },
    {
      question: '在中国进行催收的法律框架是什么？',
      answer: '中国的催收法律环境有其特殊性：\n\n• 主体限制：中国自1995年起禁止设立商业催收公司，只有持执业证的律师或律师事务所才能提供债务催收服务\n• 我们的解决方案：与多家中国本地律师事务所建立战略合作，所有催收活动均通过有资质的律师进行\n• 行为规范演进：中国正在加强催收行为监管，我们严格遵守"禁止暴力催收、深夜骚扰、骚扰无关人员"等规定',
      category: '合法合规'
    },
    {
      question: '你们如何保护数据安全和隐私？',
      answer: '我们采用银行级安全措施：\n\n• TLS 1.3和AES-256加密 - 所有数据传输和存储都经过加密\n• SHA-256哈希处理 - 身份证号码经过单向加密，原始号码不会暴露\n• 香港服务器 - 数据存储在合规的香港数据中心\n• 严格访问控制 - 员工只能看到工作所需的最少信息\n• 快速删除政策 - 案件结束后7天内删除个人数据\n• 第三方审计 - 定期进行渗透测试和安全审计',
      category: '合法合规'
    },
    {
      question: '你们如何处理跨境数据传输和隐私保护？',
      answer: '我们建立了多层次的数据保护体系：\n\n• 美国端：遵守GLBA等金融隐私规定，签署严格保密协议\n• 香港端：按照PDPO要求，事先通知债务人数据用途，承担对代理行为的监督责任\n• 中国端：避免收集新的敏感信息，如需反馈信息给美方，将遵循PIPL跨境传输要求\n• 技术保障：数据不落地中国服务器，通过加密远程访问，严格限制数据使用范围',
      category: '合法合规'
    },
    
    // 操作流程（实务关心）
    {
      question: '需要提供什么信息才能开始催收？',
      answer: '最低要求非常简单：\n\n• 必需：债务人姓名 + 18位中国身份证号码\n• 债务信息：欠款金额、债务依据（发票/合同）\n• 身份证来源：通常来自KYC记录、租赁申请、平台注册等\n• 快速启动：收到信息后14-48小时内开始首次联系尝试',
      category: '操作流程'
    },
    {
      question: '追讨这些债权需要准备哪些关键证据？',
      answer: '基础证据（所有类型都需要）：\n\n• 书面合同或订单（电子版本也可）\n• 发票和账单明细\n• 银行转账记录（特别是对方曾经的付款记录）\n• 往来邮件和催款记录\n\n特定类型补充证据：\n• 货款债权：提单、签收单、对账单\n• 服务费债权：项目交付证明、验收报告\n• 租赁费债权：设备/物业交接单、使用记录',
      category: '操作流程'
    },
    {
      question: '如何开始合作？',
      answer: '流程非常简单：\n\n1. 提供债务人基本信息和债权证明文件\n2. 签订委托协议\n3. 我们立即启动催收程序\n4. 定期向您汇报进展\n5. 成功回收后安排资金转移',
      category: '操作流程'
    },
    {
      question: '如何开始60-90天试点合作？',
      answer: '简单三步：\n\n1. 签署意向书（LOI）：标准模板，1-2天内完成\n2. 提交试点批次：建议20-50个账户，使用我们的Excel模板\n3. 评估结果：60-90天后查看回收率和投资回报率',
      category: '操作流程'
    },
    
    // 具体行业问题（针对性关心）
    {
      question: '我们在eBay/Amazon等平台上有很多中国卖家欠款，你们能帮忙追讨吗？',
      answer: '可以，而且我们在平台欠款追讨方面有独特优势：\n\n已合作/可合作的平台：\n• eBay：我们的首选合作平台，已有明确的委外催收机制\n• PayPal：有成熟的催收流程，接受第三方合作\n• Amazon：虽有催收需求，但准入门槛较高（后期目标）\n\n我们的优势：\n• 拥有平台卖家的身份证信息，48小时内定位\n• 了解平台规则，知道如何施加有效压力\n• 成功率比海外催收公司高3-5倍',
      category: '具体行业问题'
    },
    {
      question: '电商平台（Amazon/eBay）的卖家欠款如何追讨？',
      answer: '平台欠款追讨难度较高，但我们有独特解决方案：\n\n策略：\n• 批量处理，降低单位成本\n• 利用卖家身份证信息追踪\n• 与平台合作获取更多账户信息\n• 通过行业黑名单施压\n\n成功关键：需要平台配合提供详细债务信息',
      category: '具体行业问题'
    },
    {
      question: '我们是海外仓服务商，很多中国卖家欠仓储费，你们如何处理？',
      answer: '海外仓债权是我们最常处理的类型之一，成功率较高：\n\n• 优势：您通常持有卖家货物，这是天然的谈判筹码\n• 策略：\n  - 利用留置权施压，配合催收谈判\n  - 若卖家弃货，评估货物价值是否可抵债\n  - 在中国起诉追讨剩余欠款\n• 成功率：中等，取决于货物价值和卖家经营状况\n• 典型回收周期：30-60天',
      category: '具体行业问题'
    },
    {
      question: '作为物流公司，中国卖家欠运费的情况很多，有什么好办法？',
      answer: '物流欠费是跨境电商债权的重灾区，但也是最容易通过法律途径解决的：\n\n• 数据支撑：宁波海事法院2021-2024年审结400件此类案件，标的额1.58亿元\n• 成功要素：\n  - 79.3%的纠纷集中在运费欠费\n  - 可在中国海事法院起诉\n  - 可申请扣押货物或冻结资产\n• 建议：尽早介入，在货物未完全交付前行使留置权',
      category: '具体行业问题'
    },
    {
      question: 'SaaS软件订阅费也能追讨吗？中国的外汇管制不是很严格吗？',
      answer: '可以，而且我们了解如何应对外汇管制：\n\n常见问题：\n• 中国企业以"外汇审批困难"为借口拖欠\n• 银行确实可能拒绝某些服务费付款申请\n• 但这往往是借口而非真正原因\n\n我们的策略：\n• 协助准备合规的付汇文件\n• 提供多种支付渠道选择\n• 如确实有外汇问题，安排境内关联方代付\n• 分期付款降低单次付汇金额',
      category: '具体行业问题'
    },
    {
      question: '营销公司、软件服务商等服务费欠款好追吗？',
      answer: '服务费欠款是最值得追索的债权类型：\n\n• 优势明显：\n  - 中国法院经常受理此类案件\n  - 可在中国直接起诉，无需境外判决\n  - 可追加未缴足出资的股东承担责任\n• 成功案例：北京木瓜移动诉广州某公司追回28万美元广告费\n• 催收难度：较低，企业通常有资产可执行',
      category: '具体行业问题'
    },
    
    // 执行难点（实际担忧）
    {
      question: '如果债务人拒绝付款怎么办？',
      answer: '我们采用阶梯式处理策略：\n\n1. 初步协商：展示债务证据，说明法律义务\n2. 家庭介入：必要时联系家属（在中国文化中很有效）\n3. 信用施压：说明对其在中国信用记录的潜在影响\n4. 灵活方案：提供分期付款、部分减免等选择\n5. 零风险：如果最终无法回收，您无需支付任何费用',
      category: '执行难点'
    },
    {
      question: '如果债务人在中国没有资产怎么办？',
      answer: '我们有多种解决方案：\n\n• 通过谈判达成分期付款协议\n• 调查债务人的收入来源，申请法院强制执行工资\n• 利用失信惩戒系统施压，影响其正常生活和商业活动\n• 查找关联企业或资产，扩大执行范围\n• 即使暂时无资产，失信惩戒的长期影响也会迫使债务人寻求和解。',
      category: '执行难点'
    },
    {
      question: '资金如何安全汇回美国？',
      answer: '正规渠道：所有付款通过银行转账或认证支付平台\n\n• 资金隔离：客户资金独立账户管理\n• 实时追踪：每笔交易可查询状态\n• 合规汇款：遵守中美两国外汇管理规定\n• 透明结算：先确认客户收款，再收取成功费',
      category: '执行难点'
    },
    {
      question: '中国的外汇管制会影响我们收回欠款吗？',
      answer: '不会。根据中国外汇管理规定，基于真实贸易背景的付款是完全合法的。债务人可凭以下文件办理购汇付款：\n\n• 法院判决书或调解书\n• 原始合同和发票\n• 相关服务证明\n\n这属于正常的服务贸易项下付汇，只要手续齐全，银行会正常办理。',
      category: '执行难点'
    },
    {
      question: '美国法院的判决能在中国执行吗？',
      answer: '理论上可以，但实践中极其困难。2024年中国法院仅承认和执行外国裁判319件，且中美之间没有判决互认条约。这意味着您需要在中国法院申请承认，过程复杂且成功率低。这正是为什么我们建议直接在中国通过非诉协商或诉讼方式催收，避免走这条困难的路径。',
      category: '执行难点'
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

interface FAQProps {
  locale?: Locale
}

export default function FAQ({ locale = 'zh' }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  
  const faqs = faqData[locale] || faqData['zh']
  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category).filter(Boolean)))] as string[]
  
  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50">
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
                  ? "bg-navy text-white"
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
                <h3 className="text-lg font-bold text-gray-900 pr-8">
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
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
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
      </div>
      
      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </section>
  )
}
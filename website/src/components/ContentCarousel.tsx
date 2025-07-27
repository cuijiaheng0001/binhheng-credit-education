'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const tabs = [
  {
    id: 'debt-collection',
    title: '债务追收服务',
    content: {
      title: '专业的B2B跨境债务追收',
      description: '我们通过非诉讼的友好方式帮助您追回债务，同时维护您与客户的良好关系。',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
      features: [
        '60%+成功率',
        '45天平均追收时间',
        '覆盖中国所有主要城市',
        '合规操作保障'
      ],
      link: '/services',
      linkText: '了解债务追收服务'
    }
  },
  {
    id: 'sme-solutions',
    title: '中小企业方案',
    content: {
      title: '无追回，不收费',
      description: '简单快捷的在线债务追收平台，您只需上传未付发票，监控追收进程，债务追回后即可收到款项。',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
      features: [
        '在线提交案件',
        '实时进度跟踪',
        '成功后付费',
        '透明定价'
      ],
      link: '/services#sme',
      linkText: '快速在线追收'
    }
  },
  {
    id: 'ar-services',
    title: '应收账款管理',
    content: {
      title: '让您的应收账款按您的方式管理',
      description: '无论您需要处理大量发票还是不同国家的客户，我们都能提供定制化解决方案。',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
      features: [
        '自动化催收流程',
        '多语言沟通',
        '定制化报告',
        '专属客户经理'
      ],
      link: '/services#ar',
      linkText: '应收账款解决方案'
    }
  },
  {
    id: 'industries',
    title: '行业解决方案',
    content: {
      title: '深耕细分行业的专业服务',
      description: '针对学生住宿、电商平台和国际贸易等行业，提供专业的债务追收方案。',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      features: [
        '学生住宿：65%成功率',
        '电商平台：58%成功率',
        'B2B贸易：72%成功率',
        '行业专属团队'
      ],
      link: '/industries',
      linkText: '查看行业方案'
    }
  }
]

export default function ContentCarousel() {
  const [activeTab, setActiveTab] = useState(0)
  const currentContent = tabs[activeTab].content

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-8">
        {/* Tab Navigation */}
        <div className="relative mb-12">
          <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-300">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`
                  px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-300
                  ${activeTab === index 
                    ? 'text-primary-purple border-b-2 border-primary-purple' 
                    : 'text-gray-600 hover:text-primary-purple'
                  }
                `}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <motion.div
            className="absolute bottom-0 h-0.5 bg-primary-purple"
            initial={false}
            animate={{
              x: `${activeTab * 100}%`,
              width: `${100 / tabs.length}%`
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {currentContent.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {currentContent.description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {currentContent.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-6 h-6 bg-primary-purple rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <motion.a
              href={currentContent.link}
              className="inline-flex items-center px-6 py-3 bg-primary-purple text-white font-semibold rounded-lg hover:bg-secondary-purple transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentContent.linkText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src={currentContent.image}
              alt={currentContent.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length)}
            className="p-3 border border-gray-300 rounded-lg hover:border-primary-purple hover:text-primary-purple transition-colors"
            aria-label="Previous tab"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab((prev) => (prev + 1) % tabs.length)}
            className="p-3 border border-gray-300 rounded-lg hover:border-primary-purple hover:text-primary-purple transition-colors"
            aria-label="Next tab"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
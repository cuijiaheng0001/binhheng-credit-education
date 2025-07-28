'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const tabs = [
  {
    id: 'debt-collection',
    title: '中国债务人追收',
    content: {
      title: '专注中国债务人的专业追收',
      description: '当债务人返回中国后，一般国际催收公司无法有效处理。我们是唯一专注于此类债务的专业催收公司。',
      image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80',
      features: [
        '专注中国债务人',
        '本地化中文沟通',
        '了解中国法律体系',
        '非诉讼合规追收'
      ],
      link: '/services',
      linkText: '了解中国债务人追收'
    }
  },
  {
    id: 'sme-solutions',
    title: '留学生住宿债务',
    content: {
      title: '中国留学生住宿违约追收',
      description: '87%的美国大学在中国留学生嚽业回国后直接注销债务。我们通过本地化网络，帮助您追回这些“不可收回”的欠款。',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
      features: [
        '专门处理留学生债务',
        '65%成功追回率',
        '了解中国家庭文化',
        '与中国高校合作'
      ],
      link: '/services#student',
      linkText: '留学生债务解决方案'
    }
  },
  {
    id: 'ar-services',
    title: '电商平台债务',
    content: {
      title: '跨境电商中国卖家欠款追收',
      description: '从亚马逊卖家违规到eBay交易纠纷，我们熟悉中国电商生态，能够快速定位并联系到真实的中国卖家。',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      features: [
        '熟悉中国电商生态',
        '定位真实卖家信息',
        '了解平台规则差异',
        '快速沟通解决'
      ],
      link: '/services#ecommerce',
      linkText: '电商债务解决方案'
    }
  },
  {
    id: 'industries',
    title: 'B2B贸易债务',
    content: {
      title: '国际贸易中国供应商违约债务',
      description: '当中国供应商违约或拒绝付款时，传统的国际仲裁耗时耗力。我们通过本地化协商，帮助您快速解决贸易纠纷。',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      features: [
        '了解中国商业文化',
        '本地化协商能力',
        '避免昂贵仲裁',
        '72%成功解决率'
      ],
      link: '/services#b2b',
      linkText: 'B2B贸易债务方案'
    }
  }
]

export default function ContentCarousel() {
  const [activeTab, setActiveTab] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const currentContent = tabs[activeTab].content

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length)
    }, 6000) // 每6秒切换一次

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToTab = (index: number) => {
    setActiveTab(index)
    setIsAutoPlaying(false)
    // 用户交互后15秒恢复自动播放
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-8">
        {/* Progress Indicators */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-6">
            {tabs.map((tab, index) => (
              <div key={tab.id} className="flex flex-col items-center gap-3">
                <button
                  onClick={() => goToTab(index)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300",
                    activeTab === index
                      ? "text-primary-blue"
                      : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  {tab.title}
                </button>
                <div
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    activeTab === index
                      ? "w-20 bg-primary-blue"
                      : "w-12 bg-gray-300 hover:bg-gray-400"
                  )}
                  role="progressbar"
                  aria-valuenow={activeTab === index ? 100 : 0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            ))}
          </div>
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
                  <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <motion.a
              href={currentContent.link}
              className="inline-flex items-center px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-secondary-blue transition-colors"
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
          <motion.button
            onClick={() => goToTab((activeTab - 1 + tabs.length) % tabs.length)}
            className="p-3 border border-gray-300 rounded-lg hover:border-primary-blue hover:text-primary-blue transition-colors"
            aria-label="Previous tab"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={() => goToTab((activeTab + 1) % tabs.length)}
            className="p-3 border border-gray-300 rounded-lg hover:border-primary-blue hover:text-primary-blue transition-colors"
            aria-label="Next tab"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
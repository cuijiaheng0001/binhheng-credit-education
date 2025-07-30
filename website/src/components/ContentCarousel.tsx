'use client'

import { useState, useEffect, useRef } from 'react'
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
      image: '/images/content/china-debt-collection.jpg',
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
      image: '/images/content/student-housing-debt.jpg',
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
      image: '/images/content/ecommerce-debt.jpg',
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
      image: '/images/content/b2b-trade-debt.jpg',
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(false) // 初始状态为false
  const [hasStarted, setHasStarted] = useState(false) // 记录是否已经开始过
  const [isPaused, setIsPaused] = useState(false) // 鼠标悬停暂停
  const sectionRef = useRef<HTMLElement>(null)
  const currentContent = tabs[activeTab].content

  // 预加载所有图片
  useEffect(() => {
    tabs.forEach((tab) => {
      const img = new window.Image()
      img.src = tab.content.image
    })
  }, [])

  // 使用Intersection Observer检测组件是否在视窗中
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasStarted) {
          setIsAutoPlaying(true)
          setHasStarted(true) // 确保只开始一次
        }
      },
      {
        threshold: 0.3 // 当30%的组件可见时触发
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasStarted])

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length)
    }, 8000) // 8秒切换一次

    return () => clearInterval(interval)
  }, [isAutoPlaying, isPaused])

  const goToTab = (index: number) => {
    setActiveTab(index)
    setIsAutoPlaying(false)
    setHasStarted(true) // 用户交互也算开始
    // 用户交互后15秒恢复自动播放
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  return (
    <section ref={sectionRef} className="py-14 bg-light-gray">
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
                      ? "text-navy"
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
                  aria-label={`Tab ${index + 1} of ${tabs.length}`}
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
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
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
                <li key={index} className="flex items-center text-base text-gray-700">
                  <div className="w-6 h-6 bg-navy rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <motion.a
              href={currentContent.link}
              className="inline-flex items-center px-6 py-3 bg-transparent text-navy font-semibold rounded-lg border-2 border-navy hover:bg-navy hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentContent.linkText}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
          >
            {/* 预渲染所有图片，只显示当前的 */}
            {tabs.map((tab, index) => (
              <Image
                key={tab.id}
                src={tab.content.image}
                alt={tab.content.title}
                fill
                className={cn(
                  "object-cover transition-opacity duration-300",
                  index === activeTab ? "opacity-100" : "opacity-0"
                )}
                priority={true}
                loading="eager"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            onClick={() => goToTab((activeTab - 1 + tabs.length) % tabs.length)}
            className="p-3 border border-gray-300 rounded-lg hover:border-navy hover:text-navy transition-colors"
            aria-label="Previous tab"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={() => goToTab((activeTab + 1) % tabs.length)}
            className="p-3 border border-gray-300 rounded-lg hover:border-navy hover:text-navy transition-colors"
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
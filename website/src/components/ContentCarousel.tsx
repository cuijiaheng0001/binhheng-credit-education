'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import ResponsiveContentImage from './ResponsiveContentImage'
import { cn } from '@/lib/utils'
import { type Locale } from '@/i18n/config'

const tabs = [
  {
    id: 'debt-collection',
    title: {
      zh: '中国债务人追收',
      en: 'Chinese Debtor Recovery'
    },
    content: {
      title: {
        zh: '专注中国债务人的专业追收',
        en: 'Professional Recovery Focused on Chinese Debtors'
      },
      description: {
        zh: '当债务人返回中国后，一般国际催收公司无法有效处理。我们是唯一专注于此类债务的专业催收公司。',
        en: 'When debtors return to China, traditional international collection agencies hit a wall. We are the only professional collection company that specializes exclusively in these challenging cases.'
      },
      image: '/images/content/china-debt-collection.jpg',
      features: {
        zh: [
          '专注中国债务人',
          '本地化中文沟通',
          '了解中国法律体系',
          '非诉讼合规追收'
        ],
        en: [
          'Exclusively focused on Chinese debtors',
          'Native Chinese-language communication',
          'Deep understanding of China\'s legal system',
          'Compliant non-litigation recovery'
        ]
      },
      link: '/services',
      linkText: {
        zh: '了解中国债务人追收',
        en: 'Learn About Chinese Debtor Recovery'
      }
    }
  },
  {
    id: 'sme-solutions',
    title: {
      zh: '留学生住宿债务',
      en: 'Student Housing Debt'
    },
    content: {
      title: {
        zh: '中国留学生住宿违约追收',
        en: 'Chinese Student Housing Default Recovery'
      },
      description: {
        zh: '87%的美国大学在中国留学生毕业回国后直接注销债务。我们通过本地化网络，帮助您追回这些"不可收回"的欠款。',
        en: '87% of U.S. universities write off debt after Chinese students graduate and return home. Through our localized network, we help you recover these "uncollectible" accounts.'
      },
      image: '/images/content/student-housing-debt.jpg',
      features: {
        zh: [
          '专门处理留学生债务',
          '65%成功追回率',
          '了解中国家庭文化',
          '与中国高校合作'
        ],
        en: [
          'Specialized in student debt',
          '65% recovery success rate',
          'Understand Chinese family culture',
          'Partner with Chinese universities'
        ]
      },
      link: '/services#student',
      linkText: {
        zh: '留学生债务解决方案',
        en: 'Student Debt Solutions'
      }
    }
  },
  {
    id: 'ar-services',
    title: {
      zh: '电商平台债务',
      en: 'E-commerce Debt'
    },
    content: {
      title: {
        zh: '跨境电商中国卖家欠款追收',
        en: 'Cross-Border E-commerce Chinese Seller Debt Recovery'
      },
      description: {
        zh: '从亚马逊卖家违规到eBay交易纠纷，我们熟悉中国电商生态，能够快速定位并联系到真实的中国卖家。',
        en: 'From Amazon seller violations to eBay transaction disputes, we understand the Chinese e-commerce ecosystem and can quickly locate and contact actual Chinese sellers.'
      },
      image: '/images/content/ecommerce-debt.jpg',
      features: {
        zh: [
          '熟悉中国电商生态',
          '定位真实卖家信息',
          '了解平台规则差异',
          '快速沟通解决'
        ],
        en: [
          'Deep knowledge of Chinese e-commerce ecosystem',
          'Locate authentic seller information',
          'Understand platform rule differences',
          'Fast communication and resolution'
        ]
      },
      link: '/services#ecommerce',
      linkText: {
        zh: '电商债务解决方案',
        en: 'E-commerce Debt Solutions'
      }
    }
  },
  {
    id: 'industries',
    title: {
      zh: 'B2B贸易债务',
      en: 'B2B Trade Debt'
    },
    content: {
      title: {
        zh: '国际贸易中国供应商违约债务',
        en: 'International Trade Chinese Supplier Default Debt'
      },
      description: {
        zh: '当中国供应商违约或拒绝付款时，传统的国际仲裁耗时耗力。我们通过本地化协商，帮助您快速解决贸易纠纷。',
        en: 'When Chinese suppliers default or refuse payment, traditional international arbitration is time-consuming and costly. We help you resolve trade disputes quickly through localized negotiation.'
      },
      image: '/images/content/b2b-trade-debt.jpg',
      features: {
        zh: [
          '了解中国商业文化',
          '本地化协商能力',
          '避免昂贵仲裁',
          '72%成功解决率'
        ],
        en: [
          'Understand Chinese business culture',
          'Localized negotiation expertise',
          'Avoid costly arbitration',
          '72% success rate'
        ]
      },
      link: '/services#b2b',
      linkText: {
        zh: 'B2B贸易债务方案',
        en: 'B2B Trade Debt Solutions'
      }
    }
  }
]

interface ContentCarouselProps {
  locale?: Locale
}

export default function ContentCarousel({ locale = 'zh' }: ContentCarouselProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false) // 初始状态为false
  const [isPaused, setIsPaused] = useState(false) // 鼠标悬停暂停
  const [isInView, setIsInView] = useState(false) // 记录组件是否在视窗中
  const lastInteractionTime = useRef<number>(0) // 记录最后交互时间
  const sectionRef = useRef<HTMLElement>(null)
  const currentContent = tabs[activeTab].content

  // 预加载所有图片 - 使用空闲回调
  useEffect(() => {
    const preloadImages = () => {
      tabs.forEach((tab, index) => {
        // 优先加载前两张图片
        const delay = index < 2 ? 0 : 1000 + index * 200
        setTimeout(() => {
          const img = new window.Image()
          img.src = tab.content.image
        }, delay)
      })
    }

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(preloadImages)
    } else {
      setTimeout(preloadImages, 1000)
    }
  }, [tabs])

  // 使用Intersection Observer检测组件是否在视窗中
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          // 进入视窗时
          if (!isInView) {
            // 如果之前不在视窗中，总是重置到第一页
            setActiveTab(0)
            setIsAutoPlaying(true)
          }
          setIsInView(true)
        } else {
          // 离开视窗时
          setIsInView(false)
          setIsAutoPlaying(false)
          // 记录离开时间
          lastInteractionTime.current = Date.now()
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
  }, [isInView])

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length)
    }, 8000) // 8秒切换一次

    return () => clearInterval(interval)
  }, [isAutoPlaying, isPaused])

  const goToTab = (index: number) => {
    setActiveTab(index)
    lastInteractionTime.current = Date.now() // 记录交互时间
    setIsAutoPlaying(false)
    setIsPaused(true) // 用户交互后暂停自动播放
    
    // 用户交互后20秒恢复自动播放
    setTimeout(() => {
      if (isInView) {
        setIsPaused(false)
        setIsAutoPlaying(true)
      }
    }, 20000)
  }

  return (
    <section ref={sectionRef} className="py-16 bg-light-gray overflow-visible">
      <div className="max-w-7xl mx-auto px-8">
        {/* Progress Indicators */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-6">
            {tabs.map((tab, index) => (
              <div key={tab.id} className="flex flex-col items-center gap-3">
                <button
                  id={`tab-${index}`}
                  onClick={() => goToTab(index)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 px-2",
                    activeTab === index
                      ? "text-navy"
                      : "text-gray-700 hover:text-gray-900"
                  )}
                >
                  {typeof tab.title === 'string' ? tab.title : tab.title[locale]}
                </button>
                <div
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    activeTab === index
                      ? "bg-primary-blue"
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  style={{
                    width: activeTab === index ? '80%' : '60%'
                  }}
                  role="progressbar"
                  aria-labelledby={`tab-${index}`}
                  aria-valuenow={activeTab === index ? 100 : 0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {typeof currentContent.title === 'string' ? currentContent.title : currentContent.title[locale]}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {typeof currentContent.description === 'string' ? currentContent.description : currentContent.description[locale]}
            </p>
            
            <ul className="space-y-3 mb-8">
              {(typeof currentContent.features === 'object' && !Array.isArray(currentContent.features) ? currentContent.features[locale] : currentContent.features).map((feature, index) => (
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
              className="inline-flex items-center px-8 py-4 bg-transparent text-navy font-semibold rounded-lg border border-navy hover:bg-navy hover:text-white transition-all duration-300 group no-underline hover:no-underline whitespace-nowrap min-h-[52px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {typeof currentContent.linkText === 'string' ? currentContent.linkText : currentContent.linkText[locale]}
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            {/* 预渲染所有图片，只显示当前的 */}
            {tabs.map((tab, index) => {
              // 从图片路径提取 baseName
              const baseName = tab.content.image.split('/').pop()?.replace('.jpg', '') || ''
              return (
                <div
                  key={tab.id}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    index === activeTab ? "opacity-100" : "opacity-0"
                  )}
                >
                  <ResponsiveContentImage
                    baseName={baseName}
                    alt={typeof tab.content.title === 'string' ? tab.content.title : tab.content.title[locale]}
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    width={800}
                    height={400}
                    className="object-cover"
                  />
                </div>
              )
            })}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8 pb-4">
          <motion.button
            onClick={() => goToTab((activeTab - 1 + tabs.length) % tabs.length)}
            className="p-3 border border-gray-300 rounded-lg hover:border-navy hover:text-navy transition-colors overflow-visible"
            aria-label="Previous tab"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={() => goToTab((activeTab + 1) % tabs.length)}
            className="p-3 border border-gray-300 rounded-lg hover:border-navy hover:text-navy transition-colors overflow-visible"
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
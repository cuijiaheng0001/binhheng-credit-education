'use client'

import { useState, useEffect, useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade, A11y } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import HeroSlide from './HeroSlide'
import ConsultationModal from './ConsultationModal'
import { type Locale } from '@/i18n/config'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface HeroCarouselOptimizedProps {
  locale?: Locale
  dictionary?: any
}

const getSlides = (lang: string, dictionary: any) => [
  {
    id: 1,
    src: '/images/hero/debt-recovery-1.jpg',
    alt: lang === 'zh' ? '专业债务追收服务' : 'Professional debt recovery services',
    title: lang === 'zh' 
      ? '跨境债务追收专家' 
      : 'Cross-border Debt Recovery',
    subtitle: lang === 'zh' ? '中国债务人追收' : 'China Debt Recovery',
    description: lang === 'zh'
      ? '我们帮助美国债权人从中国借款人处追回债务。'
      : 'We help US creditors reclaim debt from Chinese borrowers.',
    cta: { 
      href: '#consultation', 
      label: dictionary.cta.freeConsultation
    },
  },
  {
    id: 2,
    src: '/images/hero/debt-recovery-2.jpg',
    alt: lang === 'zh' ? '留学生住宿债务追收' : 'Student housing debt collection',
    title: lang === 'zh'
      ? '留学生债务不再是损失'
      : 'Chinese Student Housing Debts Are Not Lost',
    subtitle: lang === 'zh' ? '留学生住宿债务' : 'Student Housing Debts',
    description: lang === 'zh'
      ? '87%的大学在中国学生回国后会核销债务。我们通过本地网络追回65%的这些"不可收回"账户。'
      : '87% of universities write off debts when Chinese students return home. We recover 65% of these "uncollectable" accounts through local networks.',
    cta: { 
      href: '#services', 
      label: dictionary.cta.learnMore
    },
  },
  {
    id: 3,
    src: '/images/hero/debt-recovery-3.jpg',
    alt: lang === 'zh' ? '电商贸易债务追收' : 'E-commerce trade debt recovery',
    title: lang === 'zh'
      ? '电商债务专业追收'
      : 'E-commerce Debt Recovery',
    subtitle: lang === 'zh' ? '电商平台债务' : 'E-commerce Platform Debts',
    description: lang === 'zh'
      ? '从电商违规到贸易欠款，我们助您追回每一笔债务。'
      : 'From platform violations to trade defaults, we recover it all.',
    cta: { 
      href: '#case-studies', 
      label: dictionary.cta.viewCases
    },
  }
]

export default function HeroCarouselOptimized({ 
  locale = 'zh', 
  dictionary = {
    cta: {
      freeConsultation: locale === 'zh' ? '免费咨询' : 'Free Consultation',
      learnMore: locale === 'zh' ? '了解更多' : 'Learn More',
      viewCases: locale === 'zh' ? '查看案例' : 'View Cases'
    }
  }
}: HeroCarouselOptimizedProps) {
  const slides = getSlides(locale, dictionary)
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const [swiper, setSwiper] = useState<any>(null)
  
  // 处理咨询按钮点击
  const handleConsultationClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsConsultationOpen(true)
  }, [])

  // 处理键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!swiper) return
      
      if (e.key === 'ArrowLeft') {
        swiper.slidePrev()
      } else if (e.key === 'ArrowRight') {
        swiper.slideNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [swiper])

  return (
    <>
      <section 
        className="relative h-screen w-full overflow-hidden bg-black"
        role="region" 
        aria-label={locale === 'zh' ? '主要展示轮播' : 'Hero carousel'}
      >
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, A11y]}
          onSwiper={setSwiper}
          slidesPerView={1}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ 
            delay: 6000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !w-12 !h-1 !rounded-full !bg-white/40 !transition-all !duration-300',
            bulletActiveClass: 'swiper-pagination-bullet-active !w-16 !bg-white',
            renderBullet: (index, className) => {
              return `<button class="${className}" aria-label="${
                locale === 'zh' ? `切换到第 ${index + 1} 张幻灯片` : `Go to slide ${index + 1}`
              }"></button>`
            }
          }}
          speed={800}
          className="h-full w-full"
          a11y={{
            prevSlideMessage: locale === 'zh' ? '上一张幻灯片' : 'Previous slide',
            nextSlideMessage: locale === 'zh' ? '下一张幻灯片' : 'Next slide',
            firstSlideMessage: locale === 'zh' ? '这是第一张幻灯片' : 'This is the first slide',
            lastSlideMessage: locale === 'zh' ? '这是最后一张幻灯片' : 'This is the last slide',
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <HeroSlide 
                {...slide} 
                priority={index === 0}
                cta={{
                  ...slide.cta,
                  href: slide.cta.href === '#consultation' ? '#' : slide.cta.href
                }}
              />
            </SwiperSlide>
          ))}
          
          {/* 自定义导航按钮 */}
          <div className="absolute bottom-20 left-0 right-0 z-30 hidden lg:block">
            <div className="container mx-auto px-8 lg:px-12">
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => swiper?.slidePrev()}
                  className="group p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label={locale === 'zh' ? '上一张' : 'Previous slide'}
                >
                  <ChevronLeft className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => swiper?.slideNext()}
                  className="group p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label={locale === 'zh' ? '下一张' : 'Next slide'}
                >
                  <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
          
          {/* 分页指示器样式覆盖 */}
          <style jsx global>{`
            .swiper-pagination {
              bottom: 2rem !important;
            }
            
            @media (min-width: 1024px) {
              .swiper-pagination {
                bottom: 5rem !important;
                left: 3rem !important;
                right: auto !important;
                width: auto !important;
              }
            }
            
            .swiper-pagination-bullets {
              display: flex;
              gap: 1rem;
              align-items: center;
            }
            
            /* 减少动画以提高性能 */
            @media (prefers-reduced-motion: reduce) {
              .swiper-wrapper {
                transition-duration: 0ms !important;
              }
              
              .swiper-slide {
                transition: none !important;
              }
            }
          `}</style>
        </Swiper>
        
        {/* 修复咨询按钮的点击处理 */}
        <div 
          className="absolute inset-0 z-10" 
          onClick={(e) => {
            const target = e.target as HTMLElement
            if (target.tagName === 'A' && target.getAttribute('href') === '#') {
              handleConsultationClick(e)
            }
          }}
        />
      </section>
      
      {/* 咨询模态框 */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </>
  )
}
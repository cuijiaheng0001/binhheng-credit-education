'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import ConsultationModal from './ConsultationModal'
import { type Locale } from '@/i18n/config'

interface NavigationProps {
  dict: any
  locale: Locale
}

export default function Navigation({ dict, locale }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const pathname = usePathname()
  
  const navItems = [
    { label: dict.navigation?.about || (locale === 'zh' ? '关于我们' : 'About'), href: `/${locale}/about` },
    { label: dict.navigation?.services || (locale === 'zh' ? '服务项目' : 'Services'), href: `/${locale}/services` },
    { label: dict.navigation?.process || (locale === 'zh' ? '服务流程' : 'Process'), href: `/${locale}/process` },
    { label: dict.navigation?.industries || (locale === 'zh' ? '行业聚焦' : 'Industries'), href: `/${locale}/industries` },
    { label: dict.navigation?.insights || (locale === 'zh' ? '行业洞察' : 'Insights'), href: `/${locale}/insights` },
    { label: dict.navigation?.contact || (locale === 'zh' ? '联系我们' : 'Contact'), href: `/${locale}/contact` },
  ]


  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md"
      role="navigation"
      aria-label="主导航"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href={`/${locale}`} 
              className="flex items-center group cursor-pointer no-underline-effect"
              aria-label="Bingheng Credit 首页"
            >
              <div>
                <Image
                  src="/logo-inverted.png"
                  alt="Bingheng Credit"
                  width={140}
                  height={50}
                  className="h-8 w-auto transition-opacity duration-200 group-hover:opacity-90"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - 优化布局和间距 */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <div className="flex items-center gap-2">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-block text-sm font-medium transition-all duration-300 px-4 py-2 rounded-md",
                      "focus:outline-none focus:ring-2 focus:ring-offset-2",
                      "text-gray-800 hover:text-blue-600 focus:ring-blue-600",
                      "no-underline hover:no-underline",
                      pathname === item.href && "font-semibold text-blue-600"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                    style={{ color: pathname === item.href ? '#0066CC' : '#1f2937' }}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right side actions - 增加与导航项的间距 */}
          <div className="hidden lg:flex items-center gap-6 ml-8">
            {/* Language Switcher - 统一样式 */}
            <div className="border-l border-gray-200 pl-6">
              <LanguageSwitcher locale={locale} />
            </div>
            
            {/* CTA Button */}
            <div>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium text-sm whitespace-nowrap"
                onClick={() => setIsConsultationOpen(true)}
                aria-label={dict.cta?.freeConsultation || (locale === 'zh' ? '免费咨询' : 'Free Consultation')}
                style={{ backgroundColor: '#003D7A', color: 'white' }}
              >
                {dict.cta?.freeConsultation || (locale === 'zh' ? '免费咨询' : 'Free Consultation')}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-3 rounded-lg transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-offset-2",
              "text-navy hover:bg-gray-100 focus:ring-primary-blue"
            )}
            aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-6 py-8 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-navy font-medium hover:text-gold hover:bg-pearl rounded-lg transition-all duration-300"
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <button
              onClick={() => {
                setIsConsultationOpen(true)
                setIsMobileMenuOpen(false)
              }}
              className="w-full mt-4 px-6 py-4 bg-navy text-white font-semibold tracking-wide rounded-lg hover:bg-navy-light transition-all duration-300 shadow-lg"
            >
              {dict.cta?.freeConsultation || (locale === 'zh' ? '免费咨询' : 'Free Consultation')}
            </button>
          </div>
        </div>
      )}
      
      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </nav>
  )
}
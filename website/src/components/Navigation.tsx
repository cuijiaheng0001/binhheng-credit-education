'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Shield } from 'lucide-react'
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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const pathname = usePathname()
  
  const navItems = [
    { label: dict.navigation?.about || (locale === 'zh' ? '关于我们' : 'About'), href: `/${locale}/about` },
    { label: dict.navigation?.services || (locale === 'zh' ? '服务项目' : 'Services'), href: `/${locale}/services` },
    { label: dict.navigation?.process || (locale === 'zh' ? '追收流程' : 'Process'), href: `/${locale}/process` },
    { label: dict.navigation?.industries || (locale === 'zh' ? '行业案例' : 'Industries'), href: `/${locale}/industries` },
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
              <Image
                src="/logo-inverted.png"
                alt="Bingheng Credit"
                width={140}
                height={50}
                className="h-8 w-auto transition-opacity duration-200 group-hover:opacity-90"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - 优化布局和间距 */}
          <div className="hidden lg:flex items-center flex-grow justify-center">
            <div className="flex items-center gap-4">
              {navItems.length === 0 && <span className="text-red-500">No nav items!</span>}
              {navItems.map((item, index) => (
                <div
                  key={item.href}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative inline-block text-base font-semibold transition-all duration-300 px-4 py-2 rounded-md",
                      "focus:outline-none focus:ring-2 focus:ring-offset-2",
                      "text-gray-800 hover:text-primary-blue focus:ring-primary-blue",
                      "no-underline hover:no-underline",
                      pathname === item.href && "font-bold text-primary-blue"
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    <span>{item.label}</span>
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
            <button 
              className="px-4 py-2 bg-navy text-white rounded-xl hover:bg-navy-light transition-colors font-medium text-sm whitespace-nowrap"
              onClick={() => setIsConsultationOpen(true)}
              aria-label={dict.cta?.freeConsultation || (locale === 'zh' ? '免费咨询' : 'Free Consultation')}
            >
              {dict.cta?.freeConsultation || (locale === 'zh' ? '免费咨询' : 'Free Consultation')}
            </button>
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
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item, index) => (
                <motion.div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-navy font-medium hover:text-gold hover:bg-pearl rounded-lg transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => {
                  setIsConsultationOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                className="w-full mt-4 px-6 py-4 bg-navy text-white font-semibold tracking-wide rounded-lg hover:bg-navy-light transition-all duration-300 shadow-lg"
              >
                {dict.cta?.freeConsultation || (locale === 'zh' ? '免费咨询' : 'Free Consultation')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </nav>
  )
}
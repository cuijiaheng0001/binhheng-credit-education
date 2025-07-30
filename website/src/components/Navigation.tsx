'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/i18n/client'
import LanguageSwitcher from './LanguageSwitcher'
import ConsultationModal from './ConsultationModal'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const pathname = usePathname()
  const { dictionary } = useLanguage()
  
  const navItems = [
    { label: dictionary.navigation.about, href: '/about' },
    { label: dictionary.navigation.services, href: '/services' },
    { label: dictionary.navigation.process, href: '/process' },
    { label: dictionary.navigation.industries, href: '/industries' },
    { label: dictionary.navigation.insights, href: '/insights' },
    { label: dictionary.navigation.contact, href: '/contact' },
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <a 
              href="/" 
              className="flex items-center group cursor-pointer no-underline-effect"
              aria-label="Bingheng Credit 首页"
            >
              <motion.div
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/logo-inverted.png"
                  alt="Bingheng Credit"
                  width={140}
                  height={50}
                  className="h-8 w-auto transition-opacity duration-200 group-hover:opacity-90"
                  priority
                />
              </motion.div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative group"
              >
                <a
                  href={item.href}
                  className={cn(
                    "relative inline-block text-sm font-medium transition-all duration-300 px-3 py-2 rounded-md",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2",
                    "text-gray-600 hover:text-primary-blue focus:ring-primary-blue",
                    pathname === item.href && "font-semibold"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button 
                className="px-6 py-2.5 bg-navy text-white rounded-xl hover:bg-navy-light transition-colors font-medium text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsConsultationOpen(true)}
                aria-label={dictionary.cta.freeConsultation}
              >
                {dictionary.cta.freeConsultation}
              </motion.button>
            </motion.div>
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
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-navy font-medium hover:text-gold hover:bg-pearl rounded-lg transition-all duration-300"
                >
                  {item.label}
                </motion.a>
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
                FREE ASSESSMENT
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
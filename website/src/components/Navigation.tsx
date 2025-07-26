'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-gradient-to-b from-black/50 to-transparent"
      )}
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
            <a href="/" className="flex items-center">
              <span className={cn(
                "font-display text-2xl tracking-tight transition-colors duration-300",
                isScrolled ? "text-gray-900" : "text-white"
              )}>
                BingHeng
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative"
              >
                <a
                  href={item.href}
                  className={cn(
                    "text-sm font-light tracking-wider transition-all duration-300",
                    isScrolled 
                      ? "text-gray-700 hover:text-gray-900" 
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {item.label}
                </a>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredItem === item.label ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ backgroundColor: isScrolled ? '#111827' : '#ffffff' }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <button className={cn(
              "px-8 py-3 text-sm font-light tracking-wider transition-all duration-300",
              isScrolled
                ? "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                : "border border-white/80 text-white hover:bg-white hover:text-gray-900"
            )}>
              Get Started
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-3 rounded-lg transition-all duration-300",
              isScrolled 
                ? "text-navy hover:bg-gray-100" 
                : "text-white hover:bg-white/10"
            )}
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
                className="w-full mt-4 px-6 py-4 bg-navy text-white font-semibold tracking-wide rounded-lg hover:bg-navy-light transition-all duration-300 shadow-lg"
              >
                FREE ASSESSMENT
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
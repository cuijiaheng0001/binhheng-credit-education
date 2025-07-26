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
          ? "bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-100"
          : "bg-gradient-to-b from-black/20 to-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gold rounded-lg blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center shadow-gold transform group-hover:scale-105 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-display text-2xl tracking-tight transition-colors duration-300",
                  isScrolled ? "text-navy" : "text-white"
                )}>
                  BingHeng
                </span>
                <span className={cn(
                  "text-xs font-medium tracking-widest uppercase transition-colors duration-300",
                  isScrolled ? "text-steel" : "text-white/70"
                )}>
                  Credit Education
                </span>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
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
                    "text-sm font-medium tracking-wide transition-all duration-300",
                    isScrolled 
                      ? "text-steel hover:text-gold" 
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.label}
                </a>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredItem === item.label ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
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
              "relative px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 overflow-hidden group",
              isScrolled
                ? "bg-navy text-white hover:shadow-xl"
                : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
            )}>
              <span className="relative z-10">FREE ASSESSMENT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
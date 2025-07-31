'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Phone, Mail, Globe, Shield, Clock, DollarSign, ExternalLink, Linkedin, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/i18n/client'

const footerLinks = {
  services: [
    { label: '债务追收服务', href: '/services#debt-collection' },
    { label: '中小企业方案', href: '/services#sme' },
    { label: '应收账款管理', href: '/services#ar' },
    { label: '行业解决方案', href: '/industries' }
  ],
  company: [
    { label: '关于我们', href: '/about' },
    { label: '成功案例', href: '/case-studies' },
    { label: '服务流程', href: '/process' },
    { label: '联系我们', href: '/contact' }
  ],
  regulatory: [
    { label: 'CFPB债务催收规则', href: 'https://www.consumerfinance.gov/rules-policy/final-rules/debt-collection-practices-regulation-f/', external: true },
    { label: 'FDCPA法规解释', href: 'https://www.federalregister.gov/documents/2020/11/13/2020-24463/debt-collection-practices-regulation-f', external: true },
    { label: '消费者保护资源', href: 'https://www.consumerfinance.gov/consumer-tools/debt-collection/', external: true }
  ]
}

export default function Footer() {
  const { dictionary } = useLanguage()
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Trust Indicators Section */}
      <div className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary-blue" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">无前期费用</div>
                <p className="text-sm text-gray-600">不成功不收费</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-blue" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">24小时响应</div>
                <p className="text-sm text-gray-600">快速评估案件</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-blue" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">100%合规</div>
                <p className="text-sm text-gray-600">严格遵守法律法规</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo-inverted.png"
                alt="Bingheng Credit"
                width={140}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
              专业的跨境债务回收服务，帮助美国企业追回中国债务人欠款
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-primary-blue hover:text-white transition-all duration-300 text-gray-600"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://weixin.qq.com"
                className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 text-gray-600"
                aria-label="WeChat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6 text-sm uppercase tracking-wider">服务项目</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-primary-blue transition-colors inline-block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6 text-sm uppercase tracking-wider">公司信息</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-primary-blue transition-colors inline-block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-6 text-sm uppercase tracking-wider">联系方式</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="tel:+8616653086767" className="text-gray-600 text-sm hover:text-primary-blue transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +86 16653086767
                </a>
              </li>
              <li>
                <a href="mailto:info@binghengcredit.com" className="text-gray-600 text-sm hover:text-primary-blue transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@binghengcredit.com
                </a>
              </li>
            </ul>
            
            <h3 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">合规资源</h3>
            <ul className="space-y-2">
              {footerLinks.regulatory.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-sm hover:text-primary-blue transition-colors inline-flex items-center gap-1 py-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-xs order-2 md:order-1">
              © 2025 Bingheng Credit. All rights reserved. 沪ICP备2025000001号-1
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 order-1 md:order-2">
              <a
                href="/terms"
                className="text-gray-500 text-xs hover:text-gray-700 transition-colors"
              >
                服务条款
              </a>
              <a
                href="/privacy"
                className="text-gray-500 text-xs hover:text-gray-700 transition-colors"
              >
                隐私政策
              </a>
              <a
                href="/compliance"
                className="text-gray-500 text-xs hover:text-gray-700 transition-colors"
              >
                合规认证
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
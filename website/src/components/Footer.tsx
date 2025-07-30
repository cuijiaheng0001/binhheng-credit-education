'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'

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
    { label: '新闻资讯', href: '/insights' },
    { label: '联系我们', href: '/contact' }
  ],
  legal: [
    { label: '服务条款', href: '/terms' },
    { label: '隐私政策', href: '/privacy' },
    { label: 'Cookie声明', href: '/cookies' },
    { label: '合规认证', href: '/compliance' }
  ],
  regulatory: [
    { label: 'CFPB债务催收规则', href: 'https://www.consumerfinance.gov/rules-policy/final-rules/debt-collection-practices-regulation-f/', external: true },
    { label: 'FDCPA法规解释', href: 'https://www.federalregister.gov/documents/2020/11/13/2020-24463/debt-collection-practices-regulation-f', external: true },
    { label: '消费者保护资源', href: 'https://www.consumerfinance.gov/consumer-tools/debt-collection/', external: true }
  ]
}

const contactInfo = {
  address: '中国上海市浦东新区陆家嘴金融中心',
  phone: '+86 16653086767',
  email: 'info@binghengcredit.com',
  website: 'www.binghengcredit.com'
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo-white.png"
                alt="Bingheng Credit"
                width={160}
                height={50}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Bingheng Credit 专注于为美国企业追回因债务人返回中国而无法回收的债务。
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors no-underline"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors no-underline"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">服务项目</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">公司信息</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Regulatory Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6">合规资源</h3>
            <ul className="space-y-3">
              {footerLinks.regulatory.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-gray-400 text-sm hover:text-white transition-colors inline-flex items-center gap-1 no-underline"
                  >
                    {link.label}
                    {link.external && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">联系方式</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 text-sm hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 text-sm hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href={`https://${contactInfo.website}`} className="text-gray-400 text-sm hover:text-white transition-colors">
                  {contactInfo.website}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Compliance Promises */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-2">无前期费用</div>
              <p className="text-gray-400 text-sm">不成功不收费，100%风险共担</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">24小时响应</div>
              <p className="text-gray-400 text-sm">专业团队快速评估您的案件</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">100%合规</div>
              <p className="text-gray-400 text-sm">严格遵守FDCPA及中美两国法律</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Bingheng Credit. All rights reserved. 沪ICP备2025000001号-1
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                  {index < footerLinks.legal.length - 1 && (
                    <span className="ml-6 text-gray-600">|</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, Globe, Lock, FileCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

const trustBadges = [
  {
    icon: Shield,
    title: 'Fully Compliant',
    description: 'FDCPA, PIPL, PDPO compliant operations',
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    description: 'SHA-256 encryption for all data',
  },
  {
    icon: Award,
    title: 'Industry Member',
    description: 'ACA International (Pending)',
  },
  {
    icon: Globe,
    title: '40+ Countries',
    description: 'Global recovery network',
  },
  {
    icon: Users,
    title: '500+ Clients',
    description: 'Trusted by leading companies',
  },
  {
    icon: FileCheck,
    title: 'Licensed Operations',
    description: 'Hong Kong & Mainland China',
  },
]

const clientLogos = [
  { name: 'University Housing Partners', category: 'Education' },
  { name: 'Global E-commerce Platform', category: 'Technology' },
  { name: 'International Property Group', category: 'Real Estate' },
  { name: 'Major Educational Institution', category: 'Education' },
  { name: 'Leading Marketplace', category: 'E-commerce' },
  { name: 'Property Management Corp', category: 'Real Estate' },
]

export default function TrustIndicators() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            Why Companies{' '}
            <span className="font-normal gradient-text">Trust Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-leading compliance, security, and results
          </p>
        </motion.div>

        {/* Badge grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">
                  {badge.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {badge.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Client logos section */}
        <div className="border-t border-gray-200 pt-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-lg text-gray-600 mb-2">
              Trusted by leading organizations across industries
            </p>
            <p className="text-sm text-gray-500">
              Client identities protected for confidentiality
            </p>
          </motion.div>

          {/* Logo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-full h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded mb-2 opacity-50" />
                <p className="text-xs text-gray-500 text-center">
                  {client.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-2">
                Enterprise-Grade Security & Compliance
              </h3>
              <p className="text-gray-600">
                Your data is protected by the highest standards of security and privacy regulations
              </p>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <Shield className="w-10 h-10 text-primary-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">ISO 27001</p>
                <p className="text-xs text-gray-500">(In Progress)</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <Lock className="w-10 h-10 text-primary-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">SOC 2</p>
                <p className="text-xs text-gray-500">(Planned)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
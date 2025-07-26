'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Phone, Mail, MessageSquare, Clock, Globe, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    description: 'Mon-Fri 9am-6pm EST',
    value: '+1 (XXX) XXX-XXXX',
    action: 'tel:+1XXXXXXXXXX',
  },
  {
    icon: Mail,
    title: 'Email',
    description: '24/7 Response',
    value: 'contact@binhhengcredit.com',
    action: 'mailto:contact@binhhengcredit.com',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    description: 'Quick Response',
    value: '+1 (XXX) XXX-XXXX',
    action: 'https://wa.me/1XXXXXXXXXX',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    debtAmount: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          debtAmount: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary-950 to-primary-900 text-white">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-light mb-6">
              Get in <span className="font-normal">Touch</span>
            </h1>
            <p className="text-xl text-primary-100">
              Ready to recover your cross-border debts? Let's discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              
              return (
                <a
                  key={index}
                  href={method.action}
                  className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{method.description}</p>
                  <p className="text-primary-600 font-medium group-hover:text-primary-700">{method.value}</p>
                </a>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Request a Free <span className="font-normal gradient-text">Consultation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form and we'll get back to you within 24 hours to discuss your specific needs and how we can help recover your cross-border debts.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-600">24/7 Email Support</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Global Coverage</h3>
                    <p className="text-gray-600">Operations in US, Hong Kong, and Mainland China</p>
                    <p className="text-gray-600">Service available in 40+ countries</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="debtAmount" className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Total Debt Amount
                  </label>
                  <select
                    id="debtAmount"
                    name="debtAmount"
                    value={formData.debtAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select range</option>
                    <option value="< $10,000">Less than $10,000</option>
                    <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="$100,000 - $500,000">$100,000 - $500,000</option>
                    <option value="> $500,000">More than $500,000</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your situation
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Brief description of your debt recovery needs..."
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium transition-all duration-300",
                    "bg-primary-600 text-white hover:bg-primary-700",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-600 text-center">
                    Thank you! We'll be in touch within 24 hours.
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-600 text-center">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}
              </div>

              <p className="mt-6 text-sm text-gray-500 text-center">
                By submitting this form, you agree to our{' '}
                <a href="/privacy" className="text-primary-600 hover:text-primary-700">Privacy Policy</a>{' '}
                and{' '}
                <a href="/terms" className="text-primary-600 hover:text-primary-700">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Schedule Meeting Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Prefer to <span className="font-normal gradient-text">Schedule a Call?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a 15-minute consultation directly on our calendar
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white rounded-lg font-medium hover:bg-accent-600 transition-colors">
            <Clock className="w-5 h-5" />
            Schedule on Calendly
          </button>
        </div>
      </section>
    </main>
  )
}
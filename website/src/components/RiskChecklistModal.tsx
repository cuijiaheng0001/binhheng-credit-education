'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertCircle, Download, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RiskChecklistModalProps {
  isOpen: boolean
  onClose: () => void
}

const checklistItems = [
  {
    category: 'Debt Profile',
    items: [
      {
        id: 'chinese-debtors',
        question: 'Do you have outstanding debts from Chinese nationals or Chinese-owned businesses?',
        weight: 3
      },
      {
        id: 'returned-home',
        question: 'Have any of these debtors returned to China without paying?',
        weight: 3
      },
      {
        id: 'written-off',
        question: 'Have you written off any international debts as "uncollectable"?',
        weight: 2
      },
      {
        id: 'amount-over-10k',
        question: 'Are any individual debts over $10,000?',
        weight: 2
      }
    ]
  },
  {
    category: 'Current Recovery Efforts',
    items: [
      {
        id: 'no-response',
        question: 'Have your collection attempts received no response from debtors in China?',
        weight: 3
      },
      {
        id: 'language-barrier',
        question: 'Do language or cultural barriers prevent effective communication?',
        weight: 2
      },
      {
        id: 'no-local-presence',
        question: 'Do you lack local presence or partners in China for debt recovery?',
        weight: 3
      },
      {
        id: 'legal-uncertainty',
        question: 'Are you unsure about the legal process for cross-border debt recovery?',
        weight: 2
      }
    ]
  },
  {
    category: 'Business Impact',
    items: [
      {
        id: 'recurring-issue',
        question: 'Is this a recurring issue affecting your cash flow?',
        weight: 2
      },
      {
        id: 'significant-amount',
        question: 'Do total outstanding international debts exceed $50,000?',
        weight: 3
      },
      {
        id: 'affecting-growth',
        question: 'Are these losses affecting your ability to serve other customers?',
        weight: 1
      },
      {
        id: 'board-concern',
        question: 'Has management expressed concern about international receivables?',
        weight: 2
      }
    ]
  }
]

export default function RiskChecklistModal({ isOpen, onClose }: RiskChecklistModalProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())
  const [showResults, setShowResults] = useState(false)
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')

  const handleCheck = (itemId: string) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId)
    } else {
      newChecked.add(itemId)
    }
    setCheckedItems(newChecked)
  }

  const calculateRiskScore = () => {
    let score = 0
    checklistItems.forEach(category => {
      category.items.forEach(item => {
        if (checkedItems.has(item.id)) {
          score += item.weight
        }
      })
    })
    return score
  }

  const getRiskLevel = (score: number) => {
    if (score >= 20) return { level: 'HIGH', color: 'text-red-600', message: 'You likely have significant recoverable assets' }
    if (score >= 12) return { level: 'MEDIUM', color: 'text-amber-600', message: 'You have moderate recovery potential' }
    return { level: 'LOW', color: 'text-green-600', message: 'Limited recovery opportunity at this time' }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  const score = calculateRiskScore()
  const risk = getRiskLevel(score)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="px-8 py-6 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-navy">
                    Hidden Receivables Risk Assessment
                  </h2>
                  <p className="text-steel mt-1">
                    Answer these questions to discover your recovery potential
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="px-8 py-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                {!showResults ? (
                  <>
                    {/* Checklist */}
                    <div className="space-y-8">
                      {checklistItems.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                          <h3 className="text-lg font-medium text-navy mb-4">
                            {category.category}
                          </h3>
                          <div className="space-y-3">
                            {category.items.map((item) => (
                              <label
                                key={item.id}
                                className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                              >
                                <input
                                  type="checkbox"
                                  checked={checkedItems.has(item.id)}
                                  onChange={() => handleCheck(item.id)}
                                  className="mt-1 w-5 h-5 text-gold border-gray-300 rounded focus:ring-gold"
                                />
                                <span className="text-gray-700 flex-1">
                                  {item.question}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Business Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-colors"
                      >
                        Get Your Risk Assessment Results
                      </button>
                    </form>
                  </>
                ) : (
                  /* Results */
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="mb-8">
                      <AlertCircle className={cn("w-20 h-20 mx-auto mb-4", risk.color)} />
                      <h3 className="text-3xl font-semibold text-navy mb-2">
                        {risk.level} RISK
                      </h3>
                      <p className="text-xl text-steel">
                        {risk.message}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                      <h4 className="font-semibold text-navy mb-3">Based on your responses:</h4>
                      <ul className="text-left space-y-2 text-gray-700">
                        {score >= 20 && (
                          <>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>You likely have $50,000+ in recoverable international debts</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Your current recovery methods are not optimized for cross-border cases</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Professional recovery could yield 60%+ success rate</span>
                            </li>
                          </>
                        )}
                        {score >= 12 && score < 20 && (
                          <>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>You have recoverable debts worth investigating</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Cultural and legal barriers are limiting your recovery</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <button className="w-full py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-colors flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Download Full Assessment Report
                      </button>
                      <button className="w-full py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-colors flex items-center justify-center gap-2">
                        Schedule Free Consultation
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-sm text-gray-500 mt-6">
                      We'll email you a detailed report with specific recommendations for your situation
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  MapPin, 
  Building2, 
  Shield, 
  Users, 
  DollarSign, 
  CheckCircle,
  ArrowRight,
  Globe,
  Briefcase,
  FileCheck,
  MessageSquare,
  Banknote
} from 'lucide-react'
import { cn } from '@/lib/utils'

const journeySteps = [
  {
    id: 'assessment',
    location: 'United States',
    title: 'Case Assessment',
    description: 'Your debt portfolio is analyzed by our US-based experts',
    icon: Building2,
    color: 'from-blue-500 to-blue-600',
    details: [
      'Document verification',
      'Debtor profile analysis',
      'Recovery potential evaluation'
    ],
    duration: '24-48 hours',
    position: { x: 15, y: 40 }
  },
  {
    id: 'gateway',
    location: 'Hong Kong',
    title: 'Legal Gateway',
    description: 'Compliance bridge between US and Chinese jurisdictions',
    icon: Shield,
    color: 'from-purple-500 to-purple-600',
    details: [
      'Cross-border legal framework',
      'Regulatory compliance check',
      'Documentation preparation'
    ],
    duration: '2-3 days',
    position: { x: 50, y: 55 }
  },
  {
    id: 'execution',
    location: 'Mainland China',
    title: 'Local Execution',
    description: 'Native speakers engage debtors using cultural expertise',
    icon: Users,
    color: 'from-red-500 to-red-600',
    details: [
      'Debtor location & verification',
      'Cultural negotiation approach',
      'Payment arrangement setup'
    ],
    duration: '7-14 days',
    position: { x: 70, y: 35 }
  },
  {
    id: 'recovery',
    location: 'Direct Contact',
    title: 'Active Recovery',
    description: 'Professional negotiation secures payment commitments',
    icon: MessageSquare,
    color: 'from-green-500 to-green-600',
    details: [
      'Face-saving negotiation',
      'Payment plan structuring',
      'Agreement finalization'
    ],
    duration: '14-30 days',
    position: { x: 85, y: 45 }
  },
  {
    id: 'completion',
    location: 'Funds Transfer',
    title: 'Successful Recovery',
    description: 'Compliant transfer of recovered funds to your account',
    icon: Banknote,
    color: 'from-gold to-gold-dark',
    details: [
      'Secure fund collection',
      'Currency conversion',
      'Direct deposit to client'
    ],
    duration: '3-5 days',
    position: { x: 50, y: 20 }
  }
]

export default function GlobalRecoveryJourney() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: "-200px" })

  useEffect(() => {
    if (!isInView || !isPlaying) {
      return
    }

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isInView, isPlaying])

  const currentStep = journeySteps[activeStep]

  return (
    <section ref={containerRef} className="py-10 bg-gradient-to-b from-pearl to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase">
            The Recovery Process
          </span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl text-navy tracking-tight">
            Your Global Recovery Journey
          </h2>
          <p className="mt-6 text-xl text-steel max-w-3xl mx-auto leading-relaxed">
            From US assessment to successful recovery - every step mapped, measured, and mastered
          </p>
        </motion.div>

        {/* Main Journey Display */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Interactive World Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] bg-gradient-to-br from-navy via-navy-light to-navy rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/pattern.svg')]" />
              </div>

              {/* Globe Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                  className="relative"
                >
                  <Globe className="w-96 h-96 text-white/5" strokeWidth={0.5} />
                </motion.div>
              </div>

              {/* Journey Path Visualization */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* Animated connection lines */}
                {journeySteps.map((step, index) => {
                  if (index === journeySteps.length - 1) return null
                  const nextStep = journeySteps[index + 1]
                  const isActive = index === activeStep
                  const isPassed = index < activeStep

                  return (
                    <motion.line
                      key={`line-${index}`}
                      x1={step.position.x}
                      y1={step.position.y}
                      x2={nextStep.position.x}
                      y2={nextStep.position.y}
                      stroke={isPassed ? "#CC9A06" : "#ffffff20"}
                      strokeWidth={isActive ? "2" : "1"}
                      strokeDasharray={isActive ? "5,5" : "0"}
                      initial={{ pathLength: 0 }}
                      animate={{ 
                        pathLength: isPassed ? 1 : isActive ? 1 : 0,
                        opacity: isPassed ? 0.8 : isActive ? 1 : 0.3
                      }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  )
                })}

                {/* Location markers */}
                {journeySteps.map((step, index) => {
                  const isActive = index === activeStep
                  const isPassed = index <= activeStep

                  return (
                    <motion.g key={step.id}>
                      {/* Pulse effect for active step */}
                      {isActive && (
                        <>
                          <motion.circle
                            cx={step.position.x}
                            cy={step.position.y}
                            r="2"
                            fill="none"
                            stroke="#CC9A06"
                            strokeWidth="0.5"
                            animate={{
                              r: [2, 6, 2],
                              opacity: [1, 0, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity
                            }}
                          />
                          <motion.circle
                            cx={step.position.x}
                            cy={step.position.y}
                            r="2"
                            fill="none"
                            stroke="#CC9A06"
                            strokeWidth="0.3"
                            animate={{
                              r: [2, 4, 2],
                              opacity: [0.8, 0, 0.8]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 0.5
                            }}
                          />
                        </>
                      )}

                      {/* Main marker */}
                      <motion.circle
                        cx={step.position.x}
                        cy={step.position.y}
                        r="3"
                        fill={isPassed ? "#CC9A06" : "#ffffff"}
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: isActive ? 1.5 : 1,
                          opacity: isPassed ? 1 : 0.5
                        }}
                        transition={{ duration: 0.5 }}
                        className="cursor-pointer"
                        onClick={() => {
                          setActiveStep(index)
                          setIsPlaying(false)
                        }}
                      />

                      {/* Location label */}
                      <motion.text
                        x={step.position.x}
                        y={step.position.y - 5}
                        textAnchor="middle"
                        className="fill-white text-[3px] font-medium select-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0.7 }}
                      >
                        {step.location}
                      </motion.text>
                    </motion.g>
                  )
                })}
              </svg>

              {/* Current Step Highlight */}
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-navy via-navy/95 to-transparent"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={cn(
                      "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-xl",
                      currentStep.color
                    )}
                  >
                    <currentStep.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {currentStep.location}
                    </h3>
                    <p className="text-white/80">{currentStep.title}</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {currentStep.description}
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Step Details */}
            <div className="space-y-8">
              {/* Progress Timeline */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-semibold text-navy mb-6">Recovery Timeline</h3>
                
                {/* Timeline */}
                <div className="relative">
                  {/* Progress bar background */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 rounded-full" />
                  
                  {/* Active progress */}
                  <motion.div
                    className="absolute left-8 top-0 w-1 bg-gradient-to-b from-gold to-gold-dark rounded-full"
                    initial={{ height: 0 }}
                    animate={{ 
                      height: `${((activeStep + 1) / journeySteps.length) * 100}%` 
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Steps */}
                  <div className="space-y-6">
                    {journeySteps.map((step, index) => {
                      const isActive = index === activeStep
                      const isPassed = index <= activeStep
                      const Icon = step.icon

                      return (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={cn(
                            "flex gap-6 cursor-pointer group",
                            !isPassed && "opacity-50"
                          )}
                          onClick={() => {
                            setActiveStep(index)
                            setIsPlaying(false)
                          }}
                        >
                          {/* Step indicator */}
                          <div className="relative z-10">
                            <motion.div
                              className={cn(
                                "w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
                                isPassed 
                                  ? "bg-gradient-to-br " + step.color + " text-white" 
                                  : "bg-gray-100 text-gray-400"
                              )}
                              whileHover={{ scale: 1.1 }}
                              animate={{
                                scale: isActive ? 1.1 : 1
                              }}
                            >
                              <Icon className="w-7 h-7" />
                            </motion.div>
                          </div>

                          {/* Step content */}
                          <div className="flex-1 pb-6">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className={cn(
                                "font-semibold transition-colors",
                                isPassed ? "text-navy" : "text-gray-400",
                                "group-hover:text-gold"
                              )}>
                                {step.title}
                              </h4>
                              <span className={cn(
                                "text-sm px-3 py-1 rounded-full",
                                isPassed 
                                  ? "bg-gold/10 text-gold" 
                                  : "bg-gray-100 text-gray-400"
                              )}>
                                {step.duration}
                              </span>
                            </div>
                            
                            <p className="text-sm text-steel mb-3">
                              {step.description}
                            </p>

                            {/* Step details (visible when active) */}
                            <AnimatePresence>
                              {isActive && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <ul className="space-y-2 mt-3">
                                    {step.details.map((detail, idx) => (
                                      <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-2"
                                      >
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-steel">{detail}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={cn(
                    "flex-1 py-4 rounded-xl font-medium transition-all duration-300",
                    isPlaying 
                      ? "bg-gray-200 text-gray-700 hover:bg-gray-300" 
                      : "bg-gold text-white hover:bg-gold-dark shadow-lg"
                  )}
                >
                  {isPlaying ? 'Pause Journey' : 'Resume Journey'}
                </button>
                <button
                  onClick={() => setActiveStep(0)}
                  className="px-6 py-4 bg-navy text-white rounded-xl font-medium hover:bg-navy-light transition-all duration-300"
                >
                  Restart
                </button>
              </div>

              {/* Total Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 border border-gold/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-navy mb-1">
                      Total Recovery Timeline
                    </h4>
                    <p className="text-steel">
                      From case submission to funds in your account
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-light text-gold">45-60</div>
                    <div className="text-sm text-steel">days average</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Countries Covered', value: '50+', icon: Globe },
            { label: 'Success Rate', value: '99.7%', icon: CheckCircle },
            { label: 'Avg. Recovery', value: '$2.8M', icon: DollarSign },
            { label: 'Client Satisfaction', value: '100%', icon: Users }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <div className="text-2xl font-light text-navy mb-1">{stat.value}</div>
              <div className="text-sm text-steel">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
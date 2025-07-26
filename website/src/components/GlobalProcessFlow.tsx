'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Building2, Users, DollarSign, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    id: 1,
    location: 'United States',
    title: 'Initial Assessment',
    description: 'Analyze and identify recoverable international receivables',
    icon: Building2,
    coordinates: { x: 20, y: 35 },
    color: '#0F172A'
  },
  {
    id: 2,
    location: 'Hong Kong',
    title: 'Legal Gateway',
    description: 'Navigate international financial regulations and compliance',
    icon: Globe,
    coordinates: { x: 70, y: 45 },
    color: '#CC9A06'
  },
  {
    id: 3,
    location: 'Mainland China',
    title: 'Local Execution',
    description: 'Leverage local networks and cultural understanding',
    icon: Users,
    coordinates: { x: 65, y: 30 },
    color: '#0F172A'
  },
  {
    id: 4,
    location: 'Individual Contact',
    title: 'Direct Recovery',
    description: 'Professional engagement with debtors',
    icon: DollarSign,
    coordinates: { x: 75, y: 25 },
    color: '#CC9A06'
  },
  {
    id: 5,
    location: 'Return to US',
    title: 'Successful Recovery',
    description: 'Funds returned to your institution',
    icon: CheckCircle,
    coordinates: { x: 20, y: 35 },
    color: '#0F172A'
  }
]

export default function GlobalProcessFlow() {
  const [activeStep, setActiveStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })

  useEffect(() => {
    if (!isInView) {
      setActiveStep(0)
      setIsAnimating(false)
      return
    }

    setIsAnimating(true)
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isInView])

  const drawPath = (from: typeof processSteps[0], to: typeof processSteps[0]) => {
    const path = `M ${from.coordinates.x}% ${from.coordinates.y}% L ${to.coordinates.x}% ${to.coordinates.y}%`
    return path
  }

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-pearl to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase">
            Our Process
          </span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl text-navy tracking-tight">
            Global Recovery Network
          </h2>
          <p className="mt-6 text-xl text-steel max-w-3xl mx-auto leading-relaxed">
            A sophisticated cross-border system that transforms complex international 
            receivables into recovered assets
          </p>
        </motion.div>

        {/* Main Visualization */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
          {/* World Map Background */}
          <div className="absolute inset-0 opacity-5">
            <svg viewBox="0 0 100 60" className="w-full h-full">
              {/* Simplified world map outline */}
              <path
                d="M 10,30 Q 20,20 30,25 T 50,30 Q 60,25 70,28 T 90,30 Q 85,40 75,35 T 55,35 Q 45,40 35,35 T 15,35 Q 10,30 10,30"
                fill="currentColor"
                className="text-navy"
              />
            </svg>
          </div>

          {/* Process Flow Visualization */}
          <div className="relative z-10 h-[500px]">
            <svg viewBox="0 0 100 60" className="w-full h-full">
              {/* Connection Lines */}
              {processSteps.map((step, index) => {
                if (index < processSteps.length - 1) {
                  const nextStep = processSteps[index + 1]
                  const isActive = index <= activeStep
                  
                  return (
                    <g key={`path-${index}`}>
                      {/* Background path */}
                      <path
                        d={drawPath(step, nextStep)}
                        stroke="#E2E8F0"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                      />
                      {/* Animated path */}
                      {isActive && isAnimating && (
                        <motion.path
                          d={drawPath(step, nextStep)}
                          stroke={step.color}
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: index * 3 }}
                        />
                      )}
                    </g>
                  )
                }
                return null
              })}

              {/* Location Markers */}
              {processSteps.map((step, index) => {
                const isActive = index === activeStep
                const isPassed = index < activeStep
                const Icon = step.icon

                return (
                  <g key={step.id}>
                    {/* Ripple Effect for Active Step */}
                    {isActive && (
                      <>
                        <motion.circle
                          cx={`${step.coordinates.x}%`}
                          cy={`${step.coordinates.y}%`}
                          r="2"
                          fill="none"
                          stroke={step.color}
                          strokeWidth="0.5"
                          initial={{ r: 2, opacity: 1 }}
                          animate={{ r: 6, opacity: 0 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.circle
                          cx={`${step.coordinates.x}%`}
                          cy={`${step.coordinates.y}%`}
                          r="2"
                          fill="none"
                          stroke={step.color}
                          strokeWidth="0.5"
                          initial={{ r: 2, opacity: 1 }}
                          animate={{ r: 6, opacity: 0 }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                      </>
                    )}

                    {/* Location Dot */}
                    <motion.circle
                      cx={`${step.coordinates.x}%`}
                      cy={`${step.coordinates.y}%`}
                      r="2"
                      fill={isPassed ? step.color : '#E2E8F0'}
                      initial={{ scale: 0 }}
                      animate={{ scale: isActive ? 1.2 : 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    />
                  </g>
                )
              })}
            </svg>

            {/* Step Information Cards */}
            <div className="absolute inset-0 pointer-events-none">
              {processSteps.map((step, index) => {
                const isActive = index === activeStep
                const Icon = step.icon

                return (
                  <motion.div
                    key={step.id}
                    className="absolute pointer-events-auto"
                    style={{
                      left: `${step.coordinates.x}%`,
                      top: `${step.coordinates.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {isActive && (
                      <div className="bg-white rounded-xl shadow-xl p-4 w-64 border border-gray-100">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center`}
                               style={{ backgroundColor: `${step.color}20` }}>
                            <Icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.5} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-navy text-sm">{step.location}</h4>
                            <p className="text-xs text-steel">{step.title}</p>
                          </div>
                        </div>
                        <p className="text-xs text-steel/80 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Process Steps List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => {
              const isActive = index === activeStep
              const isPassed = index < activeStep
              const Icon = step.icon

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'border-gold bg-gold/5' 
                      : isPassed 
                        ? 'border-gray-200 bg-gray-50' 
                        : 'border-gray-100 bg-white'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Number */}
                  <div className={`absolute -top-3 -right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    isActive || isPassed ? 'bg-gold text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`w-5 h-5 ${
                      isActive || isPassed ? 'text-gold' : 'text-gray-400'
                    }`} strokeWidth={1.5} />
                    <h4 className={`font-semibold text-sm ${
                      isActive || isPassed ? 'text-navy' : 'text-gray-500'
                    }`}>
                      {step.location}
                    </h4>
                  </div>
                  <p className={`text-xs ${
                    isActive || isPassed ? 'text-steel' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-light text-navy mb-2">45 Days</div>
            <div className="text-sm text-steel uppercase tracking-wider">Average Recovery Time</div>
          </div>
          <div>
            <div className="text-4xl font-light text-navy mb-2">3 Continents</div>
            <div className="text-sm text-steel uppercase tracking-wider">Global Coverage</div>
          </div>
          <div>
            <div className="text-4xl font-light text-navy mb-2">24/7</div>
            <div className="text-sm text-steel uppercase tracking-wider">Multi-timezone Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
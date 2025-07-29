'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Plane, Building2, Users, DollarSign, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const locations = [
  {
    id: 'us',
    name: 'United States',
    subtitle: 'Initial Assessment',
    coordinates: { x: 25, y: 35 },
    icon: Building2,
    color: '#0F172A'
  },
  {
    id: 'hk',
    name: 'Hong Kong',
    subtitle: 'Legal Gateway',
    coordinates: { x: 70, y: 40 },
    icon: MapPin,
    color: '#CC9A06'
  },
  {
    id: 'china',
    name: 'Mainland China',
    subtitle: 'Local Execution',
    coordinates: { x: 68, y: 30 },
    icon: Users,
    color: '#0F172A'
  },
  {
    id: 'contact',
    name: 'Direct Contact',
    subtitle: 'Debt Recovery',
    coordinates: { x: 75, y: 35 },
    icon: DollarSign,
    color: '#CC9A06'
  },
  {
    id: 'return',
    name: 'Return to US',
    subtitle: 'Funds Recovered',
    coordinates: { x: 25, y: 35 },
    icon: CheckCircle,
    color: '#0F172A'
  }
]

export default function EnhancedGlobalFlow() {
  const [activeStep, setActiveStep] = useState(0)
  const [pathProgress, setPathProgress] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })

  useEffect(() => {
    if (!isInView) {
      setActiveStep(0)
      setPathProgress(0)
      return
    }

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (locations.length - 1))
      setPathProgress(0)
    }, 4000)

    const progressInterval = setInterval(() => {
      setPathProgress((prev) => Math.min(prev + 0.02, 1))
    }, 30)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [isInView])

  const drawPath = (from: typeof locations[0], to: typeof locations[0]) => {
    const midX = (from.coordinates.x + to.coordinates.x) / 2
    const midY = Math.min(from.coordinates.y, to.coordinates.y) - 20
    return `M ${from.coordinates.x} ${from.coordinates.y} Q ${midX} ${midY} ${to.coordinates.x} ${to.coordinates.y}`
  }

  const getPlanePosition = (from: typeof locations[0], to: typeof locations[0], progress: number) => {
    const path = drawPath(from, to)
    // This is a simplified calculation - in production you'd use proper path interpolation
    const x = from.coordinates.x + (to.coordinates.x - from.coordinates.x) * progress
    const midY = Math.min(from.coordinates.y, to.coordinates.y) - 20
    const y = from.coordinates.y + 2 * (midY - from.coordinates.y) * progress * (1 - progress) + (to.coordinates.y - from.coordinates.y) * progress
    
    // Calculate rotation angle
    const dx = to.coordinates.x - from.coordinates.x
    const dy = to.coordinates.y - from.coordinates.y
    const angle = Math.atan2(dy, dx) * 180 / Math.PI

    return { x, y, angle }
  }

  return (
    <section ref={containerRef} className="py-10 bg-gradient-to-b from-white to-pearl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase">
            Our Process
          </span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl text-navy tracking-tight">
            Global Recovery Journey
          </h2>
          <p className="mt-6 text-xl text-steel max-w-3xl mx-auto leading-relaxed">
            Watch how we navigate international regulations to recover your assets
          </p>
        </motion.div>

        {/* Main Visualization */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-8 lg:p-12 h-[600px]">
          <svg viewBox="0 0 100 60" className="w-full h-full">
            {/* World Map Background */}
            <g opacity="0.1">
              {/* North America */}
              <path
                d="M 18,32 C 18,28 22,25 28,26 C 34,27 38,30 36,35 C 34,40 28,42 23,40 C 18,38 16,35 18,32 Z"
                fill="currentColor"
                className="text-navy"
              />
              {/* Asia */}
              <path
                d="M 62,28 C 62,24 68,22 76,24 C 84,26 88,30 86,35 C 84,40 78,42 70,40 C 62,38 60,33 62,28 Z"
                fill="currentColor"
                className="text-navy"
              />
              {/* Hong Kong marker */}
              <circle cx="70" cy="40" r="1" fill="currentColor" className="text-gold" />
            </g>

            {/* Flight Paths */}
            {locations.slice(0, -1).map((loc, index) => {
              const nextLoc = locations[index + 1]
              const isActive = index === activeStep
              const isPassed = index < activeStep

              return (
                <g key={`path-${index}`}>
                  {/* Base path */}
                  <path
                    d={drawPath(loc, nextLoc)}
                    fill="none"
                    stroke={isPassed ? loc.color : '#E2E8F0'}
                    strokeWidth="1"
                    strokeDasharray={isPassed ? "0" : "3,3"}
                    opacity={isPassed ? 0.5 : 0.3}
                  />
                  
                  {/* Active animated path */}
                  {isActive && (
                    <>
                      {/* Glow effect */}
                      <motion.path
                        d={drawPath(loc, nextLoc)}
                        fill="none"
                        stroke={loc.color}
                        strokeWidth="4"
                        opacity="0.2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: pathProgress }}
                        transition={{ duration: 0.1 }}
                      />
                      {/* Main path */}
                      <motion.path
                        d={drawPath(loc, nextLoc)}
                        fill="none"
                        stroke={loc.color}
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: pathProgress }}
                        transition={{ duration: 0.1 }}
                      />
                    </>
                  )}
                </g>
              )
            })}

            {/* Location Markers */}
            {locations.slice(0, -1).map((loc, index) => {
              const isActive = index === activeStep
              const isPassed = index < activeStep
              const Icon = loc.icon

              return (
                <g key={loc.id}>
                  {/* Ripple effect */}
                  {isActive && (
                    <>
                      <motion.circle
                        cx={loc.coordinates.x}
                        cy={loc.coordinates.y}
                        r="3"
                        fill="none"
                        stroke={loc.color}
                        strokeWidth="0.5"
                        animate={{
                          r: [3, 8, 3],
                          opacity: [0.8, 0, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    </>
                  )}

                  {/* Location dot */}
                  <motion.circle
                    cx={loc.coordinates.x}
                    cy={loc.coordinates.y}
                    r="4"
                    fill={isPassed || isActive ? loc.color : '#E2E8F0'}
                    animate={{
                      scale: isActive ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon */}
                  <foreignObject
                    x={loc.coordinates.x - 8}
                    y={loc.coordinates.y - 8}
                    width="16"
                    height="16"
                  >
                    <Icon 
                      className={cn(
                        "w-4 h-4",
                        isPassed || isActive ? "text-white" : "text-steel"
                      )} 
                      strokeWidth={1.5} 
                    />
                  </foreignObject>
                </g>
              )
            })}

            {/* Animated Plane */}
            {activeStep < locations.length - 1 && (
              <motion.g
                animate={getPlanePosition(
                  locations[activeStep], 
                  locations[activeStep + 1], 
                  pathProgress
                )}
                transition={{ duration: 0.1 }}
              >
                <g transform={`rotate(${getPlanePosition(locations[activeStep], locations[activeStep + 1], pathProgress).angle})`}>
                  <Plane 
                    className="w-6 h-6" 
                    fill={locations[activeStep].color}
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                    }}
                  />
                </g>
              </motion.g>
            )}
          </svg>

          {/* Step Indicators */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex justify-between items-center">
              {locations.slice(0, -1).map((loc, index) => {
                const isActive = index === activeStep
                const isPassed = index < activeStep

                return (
                  <div
                    key={loc.id}
                    className={cn(
                      "text-center transition-all duration-300",
                      isActive ? "scale-110" : "",
                      !isActive && !isPassed ? "opacity-50" : ""
                    )}
                  >
                    <div className={cn(
                      "text-sm font-semibold",
                      isPassed || isActive ? "text-navy" : "text-steel"
                    )}>
                      {loc.name}
                    </div>
                    <div className={cn(
                      "text-xs",
                      isPassed || isActive ? "text-gold" : "text-steel/60"
                    )}>
                      {loc.subtitle}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold to-gold-dark"
                animate={{
                  width: `${((activeStep + pathProgress) / (locations.length - 1)) * 100}%`
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-light text-navy mb-2">45 Days</div>
            <div className="text-sm text-steel">Average Recovery</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-light text-navy mb-2">4 Steps</div>
            <div className="text-sm text-steel">Simple Process</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-light text-navy mb-2">99.7%</div>
            <div className="text-sm text-steel">Success Rate</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl font-light text-navy mb-2">$2.8M</div>
            <div className="text-sm text-steel">Avg. Recovery</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
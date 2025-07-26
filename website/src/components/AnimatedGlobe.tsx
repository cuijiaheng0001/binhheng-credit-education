'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight, Building2, Users, CheckCircle } from 'lucide-react'

const locations = [
  {
    id: 'us',
    name: 'United States',
    subtitle: 'Initial Assessment',
    description: 'Identify recoverable receivables',
    lat: 40,
    lng: -100,
    color: '#0F172A'
  },
  {
    id: 'hk',
    name: 'Hong Kong',
    subtitle: 'Legal Gateway',
    description: 'Navigate regulations',
    lat: 22,
    lng: 114,
    color: '#CC9A06'
  },
  {
    id: 'cn',
    name: 'Mainland China',
    subtitle: 'Local Networks',
    description: 'Execute recovery',
    lat: 35,
    lng: 105,
    color: '#0F172A'
  },
  {
    id: 'return',
    name: 'Fund Return',
    subtitle: 'Success',
    description: 'Assets recovered',
    lat: 40,
    lng: -100,
    color: '#CC9A06'
  }
]

export default function AnimatedGlobe() {
  const [activeLocation, setActiveLocation] = useState(0)
  const [rotation, setRotation] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })

  useEffect(() => {
    if (!isInView) {
      setActiveLocation(0)
      return
    }

    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % locations.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isInView])

  useEffect(() => {
    // Rotate globe based on active location
    const targetRotation = -locations[activeLocation].lng
    setRotation(targetRotation)
  }, [activeLocation])

  // Convert lat/lng to x/y coordinates on globe
  const getCoordinates = (lat: number, lng: number) => {
    const adjustedLng = lng - rotation
    const x = 50 + (adjustedLng / 180) * 40
    const y = 50 - (lat / 90) * 30
    return { x, y }
  }

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-navy to-navy-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(204, 154, 6, 0.1) 50%, transparent 100%)`,
          backgroundSize: '100px 100px',
          backgroundPosition: '0 0, 50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-wider uppercase">
            Recovery Journey
          </span>
          <h2 className="mt-4 font-display text-5xl lg:text-6xl text-white tracking-tight">
            Our Global Recovery Process
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A seamless journey from identification to recovery, leveraging our 
            international network and expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Globe Animation */}
          <div className="relative h-[500px] flex items-center justify-center">
            <motion.div
              className="relative w-full h-full max-w-md mx-auto"
              animate={{ rotateY: rotation }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {/* Globe */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Globe Circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="0.5"
                />
                
                {/* Globe Gradient */}
                <defs>
                  <radialGradient id="globeGradient">
                    <stop offset="0%" stopColor="rgba(204, 154, 6, 0.2)" />
                    <stop offset="100%" stopColor="rgba(15, 23, 42, 0.1)" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="39" fill="url(#globeGradient)" />

                {/* Latitude lines */}
                {[-30, -15, 0, 15, 30].map((lat, i) => (
                  <ellipse
                    key={i}
                    cx="50"
                    cy={50 - lat * 0.8}
                    rx="40"
                    ry={Math.cos((lat * Math.PI) / 180) * 40}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth="0.5"
                  />
                ))}

                {/* Longitude lines */}
                {[0, 30, 60, 90, 120, 150].map((lng, i) => (
                  <ellipse
                    key={i}
                    cx="50"
                    cy="50"
                    rx={Math.cos((lng * Math.PI) / 180) * 40}
                    ry="40"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth="0.5"
                    transform={`rotate(${lng} 50 50)`}
                  />
                ))}

                {/* Connection Paths */}
                {locations.map((loc, index) => {
                  if (index < locations.length - 1) {
                    const nextLoc = locations[index + 1]
                    const start = getCoordinates(loc.lat, loc.lng)
                    const end = getCoordinates(nextLoc.lat, nextLoc.lng)
                    const isActive = index === activeLocation

                    return (
                      <g key={`path-${index}`}>
                        {/* Static path */}
                        <path
                          d={`M ${start.x} ${start.y} Q 50 ${Math.min(start.y, end.y) - 10} ${end.x} ${end.y}`}
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.1)"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                        />
                        {/* Animated path */}
                        {isActive && (
                          <motion.path
                            d={`M ${start.x} ${start.y} Q 50 ${Math.min(start.y, end.y) - 10} ${end.x} ${end.y}`}
                            fill="none"
                            stroke={loc.color}
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2 }}
                          />
                        )}
                      </g>
                    )
                  }
                  return null
                })}

                {/* Location Markers */}
                {locations.map((loc, index) => {
                  const coords = getCoordinates(loc.lat, loc.lng)
                  const isActive = index === activeLocation
                  const isPassed = index < activeLocation

                  return (
                    <g key={loc.id}>
                      {/* Pulse effect */}
                      {isActive && (
                        <>
                          <motion.circle
                            cx={coords.x}
                            cy={coords.y}
                            r="2"
                            fill="none"
                            stroke={loc.color}
                            strokeWidth="0.5"
                            initial={{ r: 2, opacity: 1 }}
                            animate={{ r: 6, opacity: 0 }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.circle
                            cx={coords.x}
                            cy={coords.y}
                            r="2"
                            fill="none"
                            stroke={loc.color}
                            strokeWidth="0.5"
                            initial={{ r: 2, opacity: 1 }}
                            animate={{ r: 6, opacity: 0 }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                          />
                        </>
                      )}
                      
                      {/* Marker */}
                      <motion.circle
                        cx={coords.x}
                        cy={coords.y}
                        r="3"
                        fill={isPassed || isActive ? loc.color : 'rgba(255, 255, 255, 0.3)'}
                        animate={{ scale: isActive ? 1.5 : 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </g>
                  )
                })}
              </svg>

              {/* Floating Labels */}
              <AnimatePresence>
                {locations.map((loc, index) => {
                  const coords = getCoordinates(loc.lat, loc.lng)
                  const isActive = index === activeLocation

                  return isActive ? (
                    <motion.div
                      key={loc.id}
                      className="absolute pointer-events-none"
                      style={{
                        left: `${coords.x}%`,
                        top: `${coords.y}%`,
                        transform: 'translate(-50%, -150%)'
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-xl">
                        <div className="text-xs font-semibold text-navy">{loc.name}</div>
                        <div className="text-xs text-steel">{loc.subtitle}</div>
                      </div>
                      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white/95 mx-auto" />
                    </motion.div>
                  ) : null
                })}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Process Steps */}
          <div className="space-y-6">
            {locations.map((loc, index) => {
              const isActive = index === activeLocation
              const isPassed = index < activeLocation

              return (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative pl-12 pb-6 ${
                    index < locations.length - 1 ? 'border-l-2' : ''
                  } ${
                    isPassed ? 'border-l-gold' : 'border-l-white/20'
                  }`}
                >
                  {/* Step Circle */}
                  <div
                    className={`absolute left-0 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-gold text-white scale-125 shadow-gold/50 shadow-lg'
                        : isPassed
                        ? 'bg-gold text-white'
                        : 'bg-white/20 text-white/60'
                    }`}
                  >
                    {isPassed ? (
                      <CheckCircle className="w-4 h-4" strokeWidth={2} />
                    ) : (
                      <span className="text-sm font-bold">{index + 1}</span>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`p-6 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-white/10 backdrop-blur-sm shadow-xl'
                        : 'bg-transparent'
                    }`}
                  >
                    <h3 className={`font-display text-2xl mb-2 ${
                      isActive || isPassed ? 'text-white' : 'text-white/60'
                    }`}>
                      {loc.name}
                    </h3>
                    <p className={`text-lg font-medium mb-2 ${
                      isActive || isPassed ? 'text-gold' : 'text-white/40'
                    }`}>
                      {loc.subtitle}
                    </p>
                    <p className={`text-sm ${
                      isActive || isPassed ? 'text-white/80' : 'text-white/40'
                    }`}>
                      {loc.description}
                    </p>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 flex items-center gap-2 text-gold"
                      >
                        <span className="text-sm font-medium">In Progress</span>
                        <ArrowRight className="w-4 h-4 animate-pulse" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
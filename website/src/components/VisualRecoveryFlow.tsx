'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function VisualRecoveryFlow() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })
  
  // Animation progress
  const progress = useMotionValue(0)
  
  useEffect(() => {
    if (!isInView) {
      progress.set(0)
      return
    }
    
    const interval = setInterval(() => {
      const current = progress.get()
      if (current >= 1) {
        progress.set(0)
      } else {
        progress.set(Math.min(current + 0.01, 1))
      }
    }, 50)
    
    return () => clearInterval(interval)
  }, [isInView, progress])

  return (
    <section ref={containerRef} className="py-10 bg-gradient-to-b from-pearl to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl lg:text-6xl text-navy tracking-tight mb-4">
            45-Day Recovery Journey
          </h2>
          <p className="text-xl text-steel">
            From write-off to recovery
          </p>
        </motion.div>

        {/* Visual Flow Diagram */}
        <div className="relative h-[500px] max-w-5xl mx-auto">
          <svg
            viewBox="0 0 1000 400"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background World Map Outline */}
            <g opacity="0.05">
              {/* Simplified continents */}
              <path
                d="M 200,150 Q 250,120 300,140 T 380,160 Q 400,200 350,220 Q 300,240 250,220 Q 200,200 200,150"
                fill="#0F172A"
              />
              <path
                d="M 600,140 Q 650,120 700,130 T 780,150 Q 800,180 750,200 Q 700,220 650,200 Q 600,180 600,140"
                fill="#0F172A"
              />
            </g>

            {/* Main Flow Path */}
            <motion.path
              d="M 150,200 Q 300,100 500,200 Q 700,100 850,200"
              stroke="#E2E8F0"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5,5"
              opacity="0.3"
            />

            {/* Animated Flow */}
            <motion.path
              d="M 150,200 Q 300,100 500,200 Q 700,100 850,200"
              stroke="url(#flowGradient)"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress.get() }}
              style={{ pathLength: progress }}
            />

            {/* Gradient Definition */}
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="50%" stopColor="#CC9A06" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
            </defs>

            {/* Location Markers */}
            
            {/* USA - Start */}
            <g transform="translate(150, 200)">
              <motion.circle
                r="40"
                fill="#0F172A"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0, duration: 0.5 }}
              />
              <motion.text
                y="5"
                textAnchor="middle"
                className="fill-white text-lg font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                USA
              </motion.text>
              <motion.text
                y="-50"
                textAnchor="middle"
                className="fill-navy text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                $127K Debt
              </motion.text>
            </g>

            {/* Hong Kong - Gateway */}
            <g transform="translate(500, 200)">
              <motion.circle
                r="35"
                fill="#7C3AED"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
              <motion.text
                y="5"
                textAnchor="middle"
                className="fill-white text-base font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                HK
              </motion.text>
              <motion.text
                y="-45"
                textAnchor="middle"
                className="fill-navy text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Legal Bridge
              </motion.text>
            </g>

            {/* China - Execution */}
            <g transform="translate(700, 150)">
              <motion.circle
                r="35"
                fill="#DC2626"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
              <motion.text
                y="5"
                textAnchor="middle"
                className="fill-white text-base font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                CN
              </motion.text>
              <motion.text
                y="-45"
                textAnchor="middle"
                className="fill-navy text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                Negotiation
              </motion.text>
            </g>

            {/* USA - Return */}
            <g transform="translate(850, 200)">
              <motion.circle
                r="40"
                fill="#CC9A06"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              />
              <motion.text
                y="5"
                textAnchor="middle"
                className="fill-white text-lg font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                USA
              </motion.text>
              <motion.text
                y="-50"
                textAnchor="middle"
                className="fill-gold text-sm font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                $76K Recovered
              </motion.text>
            </g>

            {/* Animated Money Icon */}
            <motion.g
              initial={{ x: 150, y: 200 }}
              animate={{
                x: progress.get() < 0.33 ? 150 + (350 * progress.get() * 3) : 
                   progress.get() < 0.66 ? 500 + (200 * (progress.get() - 0.33) * 3) :
                   700 + (150 * (progress.get() - 0.66) * 3),
                y: progress.get() < 0.33 ? 200 - (100 * Math.sin(progress.get() * 3 * Math.PI)) :
                   progress.get() < 0.66 ? 200 - (50 * Math.sin((progress.get() - 0.33) * 3 * Math.PI)) :
                   200
              }}
              style={{
                x: useTransform(progress, 
                  [0, 0.33, 0.66, 1], 
                  [150, 500, 700, 850]
                ),
                y: useTransform(progress,
                  [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1],
                  [200, 100, 200, 150, 200, 100, 200]
                )
              }}
            >
              <circle r="15" fill="#10B981" opacity="0.8" />
              <text
                textAnchor="middle"
                y="5"
                className="fill-white text-xs font-bold"
              >
                $
              </text>
            </motion.g>

            {/* Process Steps (Minimal) */}
            <g transform="translate(150, 280)">
              <text className="fill-steel text-xs">1. Assessment</text>
              <text y="20" className="fill-steel text-xs font-bold">Day 1</text>
            </g>
            
            <g transform="translate(480, 280)">
              <text className="fill-steel text-xs">2. Compliance</text>
              <text y="20" className="fill-steel text-xs font-bold">Day 3</text>
            </g>
            
            <g transform="translate(680, 280)">
              <text className="fill-steel text-xs">3. Contact</text>
              <text y="20" className="fill-steel text-xs font-bold">Day 10</text>
            </g>
            
            <g transform="translate(830, 280)">
              <text className="fill-steel text-xs">4. Recovery</text>
              <text y="20" className="fill-steel text-xs font-bold">Day 45</text>
            </g>
          </svg>

          {/* Key Metrics - Visual Only */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-light text-navy">60%</div>
              <div className="text-sm text-steel">Recovery Rate</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <div className="text-4xl font-light text-gold">45</div>
              <div className="text-sm text-steel">Days Average</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-center"
            >
              <div className="text-4xl font-light text-green-600">$2.8M</div>
              <div className="text-sm text-steel">Total Recovered</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
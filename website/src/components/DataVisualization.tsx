'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ChartProps {
  percentage: number
  color: string
  delay?: number
}

export function CircularProgress({ percentage, color, delay = 0 }: ChartProps) {
  const [progress, setProgress] = useState(0)
  const radius = 60
  const strokeWidth = 8
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage)
    }, delay)
    return () => clearTimeout(timer)
  }, [percentage, delay])

  return (
    <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
      <circle
        stroke="#f3f4f6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        style={{
          strokeDashoffset,
          transition: 'stroke-dashoffset 1.5s ease-in-out',
        }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  )
}

export function BarChart({ data, delay = 0 }: { data: number[], delay?: number }) {
  const [heights, setHeights] = useState(data.map(() => 0))
  const maxValue = Math.max(...data)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeights(data.map(value => (value / maxValue) * 100))
    }, delay)
    return () => clearTimeout(timer)
  }, [data, maxValue, delay])

  return (
    <div className="flex items-end justify-between h-32 gap-2">
      {heights.map((height, index) => (
        <div
          key={index}
          className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md"
          style={{
            height: `${height}%`,
            transition: 'height 1s ease-out',
            transitionDelay: `${index * 0.1}s`
          }}
        />
      ))}
    </div>
  )
}

export function AnimatedNumber({ value, suffix = '', prefix = '', delay = 0 }: {
  value: number
  suffix?: string
  prefix?: string
  delay?: number
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const counter = setInterval(() => {
        start += increment
        if (start >= end) {
          setDisplayValue(end)
          clearInterval(counter)
        } else {
          setDisplayValue(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return (
    <span className="tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  )
}
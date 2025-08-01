'use client'

import { motion, MotionProps } from 'framer-motion'
import { memo, ReactNode } from 'react'

interface OptimizedAnimationWrapperProps extends MotionProps {
  children: ReactNode
  shouldAnimate?: boolean
}

// Memoized animation wrapper to prevent unnecessary re-renders
const OptimizedAnimationWrapper = memo(function OptimizedAnimationWrapper({
  children,
  shouldAnimate = true,
  ...motionProps
}: OptimizedAnimationWrapperProps) {
  if (!shouldAnimate) {
    return <div>{children}</div>
  }

  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  )
})

// Common animation variants
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export const slideInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default OptimizedAnimationWrapper
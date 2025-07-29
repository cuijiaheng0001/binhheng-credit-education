'use client'

import { motion, MotionProps } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { forwardRef, HTMLAttributes, ButtonHTMLAttributes } from 'react'

type BaseMotionProps = MotionProps

type OptimizedMotionDivProps = BaseMotionProps & HTMLAttributes<HTMLDivElement>
type OptimizedMotionButtonProps = BaseMotionProps & ButtonHTMLAttributes<HTMLButtonElement>
type OptimizedMotionSectionProps = BaseMotionProps & HTMLAttributes<HTMLElement>

/**
 * Helper to create optimized motion components
 */
function createMotionComponent<P extends BaseMotionProps>(
  MotionComponent: any,
  shouldReduceMotion: boolean
) {
  return forwardRef<any, P>((props, ref) => {
    const { initial, animate, whileHover, whileInView, whileTap, transition, ...restProps } = props

    // If reduced motion is preferred, render without animations
    if (shouldReduceMotion) {
      return <MotionComponent ref={ref} {...restProps} />
    }

    // Otherwise, render with optimized animations
    return (
      <MotionComponent
        ref={ref}
        initial={initial}
        animate={animate}
        whileHover={whileHover}
        whileInView={whileInView}
        whileTap={whileTap}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 120,
          ...transition,
        }}
        {...restProps}
      />
    )
  })
}

/**
 * Optimized motion components that respect reduced motion preferences
 */
export function OptimizedMotionDiv(props: OptimizedMotionDivProps) {
  const shouldReduceMotion = useReducedMotion()
  const Component = createMotionComponent<OptimizedMotionDivProps>(
    motion.div,
    shouldReduceMotion
  )
  return <Component {...props} />
}

export function OptimizedMotionSection(props: OptimizedMotionSectionProps) {
  const shouldReduceMotion = useReducedMotion()
  const Component = createMotionComponent<OptimizedMotionSectionProps>(
    motion.section,
    shouldReduceMotion
  )
  return <Component {...props} />
}

export function OptimizedMotionButton(props: OptimizedMotionButtonProps) {
  const shouldReduceMotion = useReducedMotion()
  const Component = createMotionComponent<OptimizedMotionButtonProps>(
    motion.button,
    shouldReduceMotion
  )
  return <Component {...props} />
}

// Export as an object for backward compatibility
export const OptimizedMotion = {
  div: OptimizedMotionDiv,
  section: OptimizedMotionSection,
  button: OptimizedMotionButton,
}
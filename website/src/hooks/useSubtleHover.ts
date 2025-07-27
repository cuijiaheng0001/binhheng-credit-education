'use client'

import { useRef, useCallback } from 'react'

interface UseSubtleHoverOptions {
  intensity?: number
  scale?: number
}

export function useSubtleHover({ 
  intensity = 5, 
  scale = 1.02 
}: UseSubtleHoverOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * -intensity
    const rotateY = ((x - centerX) / centerX) * intensity
    
    ref.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(${scale})
    `
  }, [intensity, scale])
  
  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
  }, [])
  
  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  }
}
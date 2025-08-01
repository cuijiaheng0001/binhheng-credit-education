import { useRef, useCallback, useEffect, useState } from 'react'

// Custom hook to prevent memory leaks and reduce garbage collection
export function useCleanupEffect(
  effect: () => (() => void) | void,
  deps: React.DependencyList
) {
  const cleanupRef = useRef<(() => void) | void>(undefined)

  useEffect(() => {
    // Clean up previous effect
    if (cleanupRef.current) {
      cleanupRef.current()
    }

    // Run new effect
    cleanupRef.current = effect()

    // Cleanup on unmount
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
      }
    }
  }, deps)
}

// Optimized event handler hook
export function useOptimizedEventHandler<T extends (...args: any[]) => any>(
  handler: T,
  deps: React.DependencyList = []
): T {
  const handlerRef = useRef(handler)
  
  // Update ref when handler changes
  useEffect(() => {
    handlerRef.current = handler
  })

  // Return stable callback
  return useCallback((...args: Parameters<T>) => {
    return handlerRef.current(...args)
  }, deps) as T
}

// Batch state updates to reduce renders
export function useBatchedState<T>(initialState: T) {
  const [state, setState] = useState(initialState)
  const pendingUpdates = useRef<Partial<T>>({})
  const updateTimer = useRef<NodeJS.Timeout | undefined>(undefined)

  const batchedSetState = useCallback((updates: Partial<T>) => {
    pendingUpdates.current = { ...pendingUpdates.current, ...updates }
    
    if (updateTimer.current) {
      clearTimeout(updateTimer.current)
    }

    updateTimer.current = setTimeout(() => {
      setState(prev => ({ ...prev, ...pendingUpdates.current }))
      pendingUpdates.current = {}
    }, 16) // Single frame delay
  }, [])

  return [state, batchedSetState] as const
}
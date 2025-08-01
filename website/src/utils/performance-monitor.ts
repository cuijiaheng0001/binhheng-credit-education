// Performance monitoring utility
export const performanceMonitor = {
  // Measure component render time
  measureComponent: (componentName: string, callback: () => void) => {
    if (typeof window === 'undefined' || !window.performance) {
      callback();
      return;
    }

    const startTime = performance.now();
    callback();
    const endTime = performance.now();
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${componentName} took ${(endTime - startTime).toFixed(2)}ms`);
    }
  },

  // Debounce heavy operations
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle frequent operations
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Lazy initialize heavy components
  lazyInit: <T>(initializer: () => T): (() => T) => {
    let value: T | undefined;
    let isInitialized = false;
    
    return () => {
      if (!isInitialized) {
        value = initializer();
        isInitialized = true;
      }
      return value as T;
    };
  }
};
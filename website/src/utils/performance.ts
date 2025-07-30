/**
 * Performance monitoring utilities
 */

import { domBatcher } from './schedule';

/**
 * Monitor and report performance metrics
 */
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Monitor long tasks
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn(`Long task detected: ${entry.duration}ms`, entry);
          }
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      // Long task monitoring not supported
    }
  }

  // Monitor layout shifts
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        let totalShift = 0;
        for (const entry of list.getEntries()) {
          if ('value' in entry) {
            totalShift += (entry as any).value;
          }
        }
        if (totalShift > 0.1) {
          console.warn(`Cumulative Layout Shift: ${totalShift}`);
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Layout shift monitoring not supported
    }
  }
}

/**
 * Optimize scroll performance
 */
export function optimizeScrollPerformance() {
  let ticking = false;
  
  function updateScrollPosition() {
    // Batch DOM reads
    domBatcher.read(() => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Batch DOM writes
      domBatcher.write(() => {
        // Update scroll progress indicator if exists
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) {
          const progress = (scrollY / (documentHeight - windowHeight)) * 100;
          (progressBar as HTMLElement).style.width = `${progress}%`;
        }
        
        // Update header state
        const header = document.querySelector('header');
        if (header) {
          if (scrollY > 100) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        }
      });
    });
    
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Lazy load images with Intersection Observer
 */
export function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Observe all images with data-src
    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  const criticalFonts = [
    '/fonts/inter-v13-latin-400.woff2',
    '/fonts/inter-v13-latin-600.woff2',
    '/fonts/playfair-display-v30-latin-700.woff2'
  ];
  
  criticalFonts.forEach((font) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.href = font;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

/**
 * Initialize all performance optimizations
 */
export function initPerformanceOptimizations() {
  initPerformanceMonitoring();
  optimizeScrollPerformance();
  initLazyLoading();
  
  // Only preload fonts on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCriticalResources);
  }
}
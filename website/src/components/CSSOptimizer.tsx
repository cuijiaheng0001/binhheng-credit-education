'use client'

import { useEffect } from 'react'

export default function CSSOptimizer() {
  useEffect(() => {
    // Aggressive CSS preload cleanup
    const optimizeCSS = () => {
      // 1. Find all CSS preloads
      const cssPreloads = document.querySelectorAll('link[rel="preload"][as="style"]')
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
      
      // Create a map of stylesheet hrefs for quick lookup
      const stylesheetHrefs = new Set<string>()
      stylesheets.forEach(sheet => {
        const href = sheet.getAttribute('href')
        if (href) stylesheetHrefs.add(href)
      })
      
      // 2. Remove orphaned CSS preloads
      cssPreloads.forEach(preload => {
        const href = preload.getAttribute('href')
        if (href && !stylesheetHrefs.has(href)) {
          console.log('[CSSOptimizer] Removing orphaned CSS preload:', href)
          preload.remove()
        }
      })
      
      // 3. Handle Next.js CSS
      // Next.js sometimes creates CSS preloads that are immediately used
      // We need to give them time to be converted to stylesheets
      const checkNextCSS = () => {
        const nextPreloads = document.querySelectorAll('link[rel="preload"][as="style"][href*="/_next/static/css/"]')
        nextPreloads.forEach(preload => {
          const href = preload.getAttribute('href')
          if (!href) return
          
          // Check if there's a matching stylesheet
          const hasStylesheet = document.querySelector(`link[rel="stylesheet"][href="${href}"]`)
          
          if (!hasStylesheet) {
            // Wait a bit more, then remove if still orphaned
            setTimeout(() => {
              const stillNoStylesheet = !document.querySelector(`link[rel="stylesheet"][href="${href}"]`)
              if (stillNoStylesheet) {
                console.log('[CSSOptimizer] Removing unused Next.js CSS preload:', href)
                preload.remove()
              }
            }, 5000) // Give it 5 seconds
          }
        })
      }
      
      // Run Next.js check after a delay
      setTimeout(checkNextCSS, 1000)
    }
    
    // Run optimization
    optimizeCSS()
    
    // Monitor for new additions
    const observer = new MutationObserver((mutations) => {
      let hasNewPreloads = false
      
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node instanceof HTMLLinkElement && 
              node.rel === 'preload' && 
              node.getAttribute('as') === 'style') {
            hasNewPreloads = true
          }
        })
      })
      
      if (hasNewPreloads) {
        console.log('[CSSOptimizer] New CSS preloads detected, running optimization...')
        setTimeout(optimizeCSS, 100)
      }
    })
    
    // Start observing
    observer.observe(document.head, {
      childList: true,
      subtree: true
    })
    
    return () => observer.disconnect()
  }, [])
  
  return null
}
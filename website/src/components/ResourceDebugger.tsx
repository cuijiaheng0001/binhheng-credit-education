'use client'

import { useEffect } from 'react'

export default function ResourceDebugger() {
  useEffect(() => {
    // Only run in development or when debug flag is set
    if (process.env.NODE_ENV === 'production' && !window.location.search.includes('debug=true')) return

    const analyzeResources = () => {
      console.group('🔍 Resource Loading Analysis')
      
      // 1. Analyze all link elements
      const allLinks = document.querySelectorAll('link')
      const linksByType = new Map<string, any[]>()
      
      allLinks.forEach(link => {
        const rel = link.getAttribute('rel') || 'unknown'
        if (!linksByType.has(rel)) {
          linksByType.set(rel, [])
        }
        linksByType.get(rel)!.push({
          href: link.getAttribute('href'),
          as: link.getAttribute('as'),
          media: link.getAttribute('media'),
          crossOrigin: link.getAttribute('crossorigin'),
          type: link.getAttribute('type'),
          element: link
        })
      })
      
      // 2. Log analysis by type
      linksByType.forEach((links, type) => {
        console.group(`📋 ${type} (${links.length})`)
        links.forEach((link, index) => {
          console.log(`${index + 1}.`, link)
        })
        console.groupEnd()
      })
      
      // 3. Check for CSS preload issues
      const cssPreloads = document.querySelectorAll('link[rel="preload"][as="style"]')
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
      const stylesheetHrefs = new Set(Array.from(stylesheets).map(s => s.getAttribute('href')))
      
      console.group('🎨 CSS Analysis')
      console.log('CSS Preloads:', cssPreloads.length)
      console.log('Stylesheets:', stylesheets.length)
      
      cssPreloads.forEach(preload => {
        const href = preload.getAttribute('href')
        const hasStylesheet = stylesheetHrefs.has(href)
        console.log(`Preload: ${href}`, {
          hasMatchingStylesheet: hasStylesheet,
          status: hasStylesheet ? '✅ OK' : '⚠️ Orphaned'
        })
      })
      console.groupEnd()
      
      // 4. Performance entries
      if (performance.getEntriesByType) {
        const resources = performance.getEntriesByType('resource')
        const cssResources = resources.filter(r => r.name.includes('.css'))
        
        console.group('⚡ Performance Entries (CSS)')
        cssResources.forEach(resource => {
          console.log(resource.name, {
            duration: `${resource.duration.toFixed(2)}ms`,
            size: (resource as any).transferSize || 'unknown'
          })
        })
        console.groupEnd()
      }
      
      // 5. Check for duplicate hrefs
      const allHrefs = Array.from(allLinks).map(l => l.getAttribute('href')).filter(Boolean)
      const hrefCounts = new Map<string, number>()
      allHrefs.forEach(href => {
        hrefCounts.set(href!, (hrefCounts.get(href!) || 0) + 1)
      })
      
      const duplicates = Array.from(hrefCounts.entries()).filter(([_, count]) => count > 1)
      if (duplicates.length > 0) {
        console.group('⚠️ Duplicate Resources')
        duplicates.forEach(([href, count]) => {
          console.log(`${href}: ${count} times`)
        })
        console.groupEnd()
      }
      
      console.groupEnd()
    }
    
    // Run analysis
    analyzeResources()
    
    // Run again after a delay
    const timer = setTimeout(analyzeResources, 2000)
    
    // Add to window for manual debugging
    ;(window as any).__analyzeResources = analyzeResources
    
    return () => clearTimeout(timer)
  }, [])
  
  return null
}
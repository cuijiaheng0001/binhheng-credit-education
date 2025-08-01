'use client'

import Script from 'next/script'

export default function PreloadManager() {
  return (
    <Script id="preload-manager" strategy="afterInteractive">
      {`
        // Clean up duplicate preload links
        (function() {
          const cleanupPreloads = () => {
            const preloadLinks = document.querySelectorAll('link[rel="preload"]');
            const seenUrls = new Map();
            
            preloadLinks.forEach(link => {
              const href = link.getAttribute('href');
              const as = link.getAttribute('as');
              const key = href + '::' + as;
              
              if (seenUrls.has(key)) {
                // Remove duplicate
                link.remove();
              } else {
                seenUrls.set(key, link);
                
                // For CSS preloads, ensure they're actually used
                if (as === 'style') {
                  // Check if a corresponding stylesheet exists
                  const stylesheetExists = document.querySelector('link[rel="stylesheet"][href="' + href + '"]');
                  if (!stylesheetExists) {
                    // Convert preload to stylesheet after a short delay
                    setTimeout(() => {
                      const stylesheet = document.createElement('link');
                      stylesheet.rel = 'stylesheet';
                      stylesheet.href = href;
                      stylesheet.media = link.getAttribute('media') || 'all';
                      document.head.appendChild(stylesheet);
                    }, 100);
                  }
                }
              }
            });
          };
          
          // Run cleanup after DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', cleanupPreloads);
          } else {
            cleanupPreloads();
          }
          
          // Also run after a delay to catch any late additions
          setTimeout(cleanupPreloads, 1000);
        })();
      `}
    </Script>
  )
}
'use client'

import Script from 'next/script'

export default function PreloadManager() {
  return (
    <Script id="preload-manager" strategy="afterInteractive">
      {`
        // Debug and clean up duplicate preload links
        (function() {
          const cleanupPreloads = () => {
            console.log('[PreloadManager] Starting cleanup...');
            
            // Get all preload links
            const allPreloads = document.querySelectorAll('link[rel="preload"]');
            const allStylesheets = document.querySelectorAll('link[rel="stylesheet"]');
            
            console.log('[PreloadManager] Found preloads:', allPreloads.length);
            console.log('[PreloadManager] Found stylesheets:', allStylesheets.length);
            
            // Log all preloads
            allPreloads.forEach((link, index) => {
              console.log(\`[PreloadManager] Preload \${index}:\`, {
                href: link.getAttribute('href'),
                as: link.getAttribute('as'),
                media: link.getAttribute('media'),
                crossOrigin: link.getAttribute('crossorigin')
              });
            });
            
            // Log all stylesheets
            allStylesheets.forEach((link, index) => {
              console.log(\`[PreloadManager] Stylesheet \${index}:\`, {
                href: link.getAttribute('href'),
                media: link.getAttribute('media')
              });
            });
            
            const seenUrls = new Map();
            const toRemove = [];
            
            allPreloads.forEach(link => {
              const href = link.getAttribute('href');
              const as = link.getAttribute('as');
              const key = href + '::' + as;
              
              if (seenUrls.has(key)) {
                // Mark duplicate for removal
                console.log('[PreloadManager] Duplicate found:', href);
                toRemove.push(link);
              } else {
                seenUrls.set(key, link);
                
                // For CSS preloads, check if they're being used
                if (as === 'style') {
                  const stylesheetExists = Array.from(allStylesheets).some(
                    stylesheet => stylesheet.getAttribute('href') === href
                  );
                  
                  if (stylesheetExists) {
                    console.log('[PreloadManager] CSS preload has matching stylesheet:', href);
                  } else {
                    console.log('[PreloadManager] CSS preload has NO matching stylesheet:', href);
                    // Remove orphaned CSS preload
                    toRemove.push(link);
                  }
                }
              }
            });
            
            // Remove all marked elements
            console.log('[PreloadManager] Removing', toRemove.length, 'elements');
            toRemove.forEach(link => link.remove());
            
            // Check for Next.js auto-preloaded CSS
            const nextCssPreloads = document.querySelectorAll('link[rel="preload"][as="style"][href*="/_next/static/css/"]');
            console.log('[PreloadManager] Next.js CSS preloads:', nextCssPreloads.length);
            
            // Final count
            const finalPreloads = document.querySelectorAll('link[rel="preload"]');
            console.log('[PreloadManager] Final preload count:', finalPreloads.length);
          };
          
          // Run cleanup after DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
              console.log('[PreloadManager] DOM loaded, running cleanup');
              cleanupPreloads();
            });
          } else {
            console.log('[PreloadManager] DOM already loaded, running cleanup immediately');
            cleanupPreloads();
          }
          
          // Run again after delays to catch late additions
          setTimeout(() => {
            console.log('[PreloadManager] Running delayed cleanup (1s)');
            cleanupPreloads();
          }, 1000);
          
          setTimeout(() => {
            console.log('[PreloadManager] Running delayed cleanup (3s)');
            cleanupPreloads();
          }, 3000);
        })();
      `}
    </Script>
  )
}
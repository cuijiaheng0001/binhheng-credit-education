import Script from 'next/script'

export default function OptimizedHead() {
  return (
    <>
      {/* Critical font preloads - only load fonts that are actually used */}
      <link
        rel="preload"
        href="/fonts/inter-v13-latin-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/inter-v13-latin-600.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Preconnect to critical origins */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Resource hints for better performance */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      
      {/* Optimize resource loading with priority hints */}
      <Script id="resource-hints" strategy="afterInteractive">
        {`
          // Remove duplicate preload links
          const preloadLinks = document.querySelectorAll('link[rel="preload"]');
          const seenUrls = new Set();
          
          preloadLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (seenUrls.has(href)) {
              link.remove();
            } else {
              seenUrls.add(href);
            }
          });
        `}
      </Script>
    </>
  )
}
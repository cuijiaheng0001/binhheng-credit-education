'use client'

import { useEffect } from 'react'

export default function FontLoader() {
  useEffect(() => {
    // Preload critical fonts
    if ('fonts' in document) {
      const criticalFonts = [
        new FontFace('Inter', 'url(/fonts/inter-v13-latin-400.woff2)', { weight: '400' }),
        new FontFace('Inter', 'url(/fonts/inter-v13-latin-600.woff2)', { weight: '600' }),
        new FontFace('Playfair Display', 'url(/fonts/playfair-display-v30-latin-700.woff2)', { weight: '700' }),
      ]

      Promise.all(criticalFonts.map(font => font.load()))
        .then(fonts => {
          fonts.forEach(font => document.fonts.add(font))
        })
        .catch(console.error)
    }
  }, [])

  return null
}
const https = require('https');
const fs = require('fs');
const path = require('path');

// Font files to download
const fonts = [
  {
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
    filename: 'inter-v13-latin-400.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2',
    filename: 'inter-v13-latin-600.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2',
    filename: 'inter-v13-latin-700.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgEM86xQ9_A.woff2',
    filename: 'playfair-display-v30-latin-700.woff2'
  },
  {
    url: 'https://fonts.gstatic.com/s/notoserifsc/v22/H4c8BXePl9DZ0Xe7gG9cyOj7mm63SzZBEgERe8_H.woff2',
    filename: 'noto-serif-sc-v22-chinese-simplified-regular.woff2'
  }
];

// Create fonts directory
const fontsDir = path.join(__dirname, '../public/fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Download each font
fonts.forEach(font => {
  const filePath = path.join(fontsDir, font.filename);
  
  if (fs.existsSync(filePath)) {
    console.log(`✓ ${font.filename} already exists`);
    return;
  }

  const file = fs.createWriteStream(filePath);
  
  https.get(font.url, (response) => {
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`✓ Downloaded ${font.filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {});
    console.error(`✗ Error downloading ${font.filename}:`, err.message);
  });
});

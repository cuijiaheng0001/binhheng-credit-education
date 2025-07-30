const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Hero Carousel Images
  { url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80', path: 'public/images/hero/debt-recovery-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&q=80', path: 'public/images/hero/debt-recovery-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80', path: 'public/images/hero/debt-recovery-3.jpg' },
  
  // Content Carousel Images
  { url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80', path: 'public/images/content/china-debt-collection.jpg' },
  { url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80', path: 'public/images/content/student-housing-debt.jpg' },
  { url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80', path: 'public/images/content/ecommerce-debt.jpg' },
  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', path: 'public/images/content/b2b-trade-debt.jpg' },
  
  // Knowledge Center Images
  { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', path: 'public/images/knowledge/industry-report.jpg' },
  { url: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80', path: 'public/images/knowledge/best-practices.jpg' },
  { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80', path: 'public/images/knowledge/case-study.jpg' },
  
  // Service Showcase Images
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', path: 'public/images/services/assessment.jpg' },
  { url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80', path: 'public/images/services/recovery.jpg' },
  { url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80', path: 'public/images/services/resolution.jpg' },
  { url: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80', path: 'public/images/services/process.jpg' }
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file async
      console.error(`✗ Error downloading ${path.basename(filepath)}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Starting image downloads...\n');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.path);
    } catch (error) {
      console.error(`Failed to download ${image.path}`);
    }
  }
  
  console.log('\n✓ All images downloaded successfully!');
}

downloadAllImages();

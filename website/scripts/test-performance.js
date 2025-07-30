const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runLighthouse(url, opts = {}) {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  opts.port = chrome.port;
  
  const runnerResult = await lighthouse(url, opts);
  
  // `.report` is the HTML report as a string
  const reportHtml = runnerResult.report;
  const reportJson = runnerResult.lhr;
  
  // Print scores
  console.log('\n🚀 Lighthouse Performance Report\n');
  console.log('📊 Scores:');
  console.log(`   Performance: ${Math.round(reportJson.categories.performance.score * 100)}/100`);
  console.log(`   Accessibility: ${Math.round(reportJson.categories.accessibility.score * 100)}/100`);
  console.log(`   Best Practices: ${Math.round(reportJson.categories['best-practices'].score * 100)}/100`);
  console.log(`   SEO: ${Math.round(reportJson.categories.seo.score * 100)}/100`);
  
  console.log('\n⏱️  Metrics:');
  const metrics = reportJson.audits;
  console.log(`   FCP: ${metrics['first-contentful-paint'].displayValue}`);
  console.log(`   LCP: ${metrics['largest-contentful-paint'].displayValue}`);
  console.log(`   TBT: ${metrics['total-blocking-time'].displayValue}`);
  console.log(`   CLS: ${metrics['cumulative-layout-shift'].displayValue}`);
  console.log(`   Speed Index: ${metrics['speed-index'].displayValue}`);
  
  // Check for specific issues
  console.log('\n⚠️  Issues:');
  if (metrics['render-blocking-resources'].score < 0.9) {
    console.log('   - Render-blocking resources detected');
  }
  if (metrics['unused-css-rules'].score < 0.9) {
    console.log('   - Unused CSS detected');
  }
  if (metrics['unused-javascript'].score < 0.9) {
    console.log('   - Unused JavaScript detected');
  }
  
  await chrome.kill();
  
  return reportJson.categories.performance.score * 100;
}

// Test both mobile and desktop
async function runTests() {
  console.log('Testing desktop performance...');
  const desktopScore = await runLighthouse('http://localhost:3000', {
    formFactor: 'desktop',
    throttling: {
      cpuSlowdownMultiplier: 1,
    },
  });
  
  console.log('\n\nTesting mobile performance...');
  const mobileScore = await runLighthouse('http://localhost:3000', {
    formFactor: 'mobile',
    throttling: {
      cpuSlowdownMultiplier: 4,
    },
  });
  
  console.log('\n\n✅ Summary:');
  console.log(`   Desktop Score: ${Math.round(desktopScore)}/100`);
  console.log(`   Mobile Score: ${Math.round(mobileScore)}/100`);
  
  if (desktopScore >= 90 && mobileScore >= 90) {
    console.log('\n🎉 Excellent! Both scores are 90+');
  } else if (desktopScore >= 85 && mobileScore >= 85) {
    console.log('\n👍 Good! Scores are above 85');
  } else {
    console.log('\n⚠️  More optimization may be needed');
  }
}

// Check if lighthouse is installed
try {
  require('lighthouse');
  runTests();
} catch (error) {
  console.log('Installing lighthouse...');
  require('child_process').execSync('npm install --save-dev lighthouse chrome-launcher', { stdio: 'inherit' });
  console.log('Please run this script again.');
}

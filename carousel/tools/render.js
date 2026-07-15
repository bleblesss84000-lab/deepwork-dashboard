const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

(async () => {
  const outDir = process.argv[2] || path.join(__dirname, '..', 'slides');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const page = await browser.newPage({ viewport: { width: 1200, height: 1500 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, '..', 'strava-claude-carrousel.html'));
  await page.waitForTimeout(600);
  const slides = page.locator('.slide');
  const n = await slides.count();
  for (let i = 0; i < n; i++) {
    const file = path.join(outDir, `slide-0${i + 1}.png`);
    await slides.nth(i).screenshot({ path: file });
    console.log('rendered', file);
  }
  await browser.close();
})();

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1440, height: 900 }
  });
  const page = await browser.newPage();
  
  const routes = ['/', '/about', '/programs', '/impact', '/volunteer', '/donate'];
  const dir = 'C:/Users/prate/Desktop/SevaSetu-Screenshots';
  
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  for (const route of routes) {
    console.log(`Capturing ${route || 'home'}...`);
    try {
      await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Wait for any entrance animations to finish
      await new Promise(r => setTimeout(r, 2000));
      
      const filename = route === '/' ? 'home' : route.substring(1);
      await page.screenshot({ 
        path: path.join(dir, `${filename}.png`), 
        fullPage: true 
      });
      console.log(`Saved ${filename}.png`);
    } catch (e) {
      console.error(`Failed to capture ${route}:`, e.message);
    }
  }

  await browser.close();
  console.log('All screenshots captured successfully at:', dir);
})();

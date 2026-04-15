import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1024, height: 500, deviceScaleFactor: 2 });

const filePath = path.join(__dirname, 'twitter-header.html');
await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

const outputPath = path.join(__dirname, 'public', 'twitter-header.png');
await page.screenshot({
  path: outputPath,
  clip: { x: 0, y: 0, width: 1024, height: 500 },
});

console.log(`Saved to: ${outputPath}`);
await browser.close();

const { chromium } = require('playwright-core');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file:///root/.openclaw/workspace/tlc-film-transfer/index.html', {
    waitUntil: 'networkidle'
  });
  await page.pdf({
    path: '/root/.openclaw/workspace/tlc-film-transfer/TLC-Film-Transfer-Sales-Page.pdf',
    format: 'Letter',
    printBackground: true,
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
  });
  await browser.close();
  console.log('PDF generated successfully!');
})();

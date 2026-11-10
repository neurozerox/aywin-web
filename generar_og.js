const path = require('path');
const fs = require('fs');

async function render() {
  try {
    const playwrightPath = 'C:/Proyectos/gitlab_issue_analyzer/node_modules/playwright';
    if (!fs.existsSync(playwrightPath)) {
      console.log('Playwright no encontrado en C:/Proyectos/gitlab_issue_analyzer, omitiendo generacion de PNG.');
      return;
    }
    const { chromium } = require(playwrightPath);
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
    const htmlPath = path.join(__dirname, 'render_og.html');
    await page.goto('file:///' + htmlPath.replace(/\\/g, '/'));
    const outputPath = path.join(__dirname, 'og-image.png');
    await page.screenshot({ path: outputPath });
    await browser.close();
    console.log('[OK] og-image.png generado exitosamente en ' + outputPath);
  } catch (err) {
    console.log('[INFO] No se genero og-image.png: ' + err.message);
  }
}

render();

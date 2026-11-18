// Genera og-image.jpg (1200x630, desde og-image.svg) y apple-touch-icon.png (180x180, desde favicon.svg).
// Uso: node generar_og.js   (requiere Playwright: global, local o en la ruta de respaldo)
const path = require('path');
const fs = require('fs');

const FALLBACK_PLAYWRIGHT = 'C:/Proyectos/gitlab_issue_analyzer/node_modules/playwright';

function loadPlaywright() {
  try {
    return require('playwright');
  } catch (e) {}
  if (fs.existsSync(FALLBACK_PLAYWRIGHT)) {
    return require(FALLBACK_PLAYWRIGHT);
  }
  return null;
}

function fileUrl(name) {
  return 'file:///' + path.join(__dirname, name).replace(/\\/g, '/');
}

async function render() {
  const playwright = loadPlaywright();
  if (!playwright) {
    console.log('[INFO] Playwright no encontrado (npm i -g playwright), omitiendo generacion de imagenes.');
    return;
  }
  const browser = await playwright.chromium.launch();
  try {
    // Tarjeta OpenGraph: JPEG para que pese ~10 veces menos que el PNG equivalente
    const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
    await og.goto(fileUrl('render_og.html'));
    await og.screenshot({ path: path.join(__dirname, 'og-image.jpg'), type: 'jpeg', quality: 88 });
    console.log('[OK] og-image.jpg generado');

    // Icono iOS: fondo opaco (iOS redondea las esquinas por su cuenta)
    const icon = await browser.newPage({ viewport: { width: 180, height: 180 } });
    const svg = fs.readFileSync(path.join(__dirname, 'favicon.svg'), 'utf8')
      .replace('<svg ', '<svg width="180" height="180" style="display:block" ');
    await icon.setContent(`<body style="margin:0;background:#0F172A">${svg}</body>`);
    await icon.screenshot({ path: path.join(__dirname, 'apple-touch-icon.png') });
    console.log('[OK] apple-touch-icon.png generado');
  } catch (err) {
    console.log('[INFO] No se generaron las imagenes: ' + err.message);
  } finally {
    await browser.close();
  }
}

render();

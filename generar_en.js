// Genera en/index.html (versión en inglés indexable) a partir de index.html y de
// los textos "en" de i18n.js. index.html es la única fuente: no editar en/index.html.
// Uso: node generar_en.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const src = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

// Cargar el objeto `translations` de i18n.js sin ejecutar su código de navegador
const sandbox = { document: { addEventListener() {} } };
vm.runInNewContext(fs.readFileSync(path.join(root, 'i18n.js'), 'utf8') + '\nthis.t = translations;', sandbox);
const en = sandbox.t.en;

let html = src;
const missing = [];

function replaceOnce(from, to) {
  const count = html.split(from).length - 1;
  if (count !== 1) throw new Error(`Se esperaba 1 ocurrencia de: ${from.slice(0, 80)} (hay ${count})`);
  html = html.replace(from, to);
}

// 1. Textos traducibles: contenido de cada elemento con data-i18n
html = html.replace(
  /(<(\w+)\b[^>]*\bdata-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g,
  (whole, open, tag, key, inner, close) => {
    if (!(key in en)) { missing.push(key); return whole; }
    const indent = inner.match(/^\n(\s*)/);
    if (indent) {
      const tail = inner.slice(inner.trimEnd().length);
      return `${open}\n${indent[1]}${en[key]}${tail}${close}`;
    }
    return `${open}${en[key]}${close}`;
  }
);
if (missing.length) throw new Error('Claves sin traducción al inglés: ' + missing.join(', '));

// 2. Idioma, metadatos y URL propia
const desc = 'Software development, QA and test automation, Flutter mobile apps and AI solutions. Over 18 years of experience. Concepción, Chile.';
replaceOnce('<html lang="es" data-i18n-mode="static">', '<html lang="en" data-i18n-mode="static">');
html = html.replace(/<title>[^<]*<\/title>/, '<title>Aywin Software | Software engineering, QA &amp; AI • Concepción, Chile</title>');
html = html.replace(/(<meta (?:name="description"|property="og:description"|name="twitter:description") content=")[^"]*(")/g, `$1${desc}$2`);
html = html.replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*(")/g, '$1Aywin Software | Software engineering, QA &amp; AI$2');
replaceOnce('<link rel="canonical" href="https://aywin.cl/">', '<link rel="canonical" href="https://aywin.cl/en/">');
replaceOnce('<meta property="og:url" content="https://aywin.cl/">', '<meta property="og:url" content="https://aywin.cl/en/">');
replaceOnce('<meta name="twitter:url" content="https://aywin.cl/">', '<meta name="twitter:url" content="https://aywin.cl/en/">');
replaceOnce('<meta property="og:locale" content="es_CL">', '<meta property="og:locale" content="@@LOCALE@@">');
replaceOnce('<meta property="og:locale:alternate" content="en_US">', '<meta property="og:locale:alternate" content="es_CL">');
replaceOnce('@@LOCALE@@', 'en_US');

// 3. Selector de idioma: EN activo
replaceOnce('class="lang-btn active" href="/" hreflang="es" lang="es" data-lang="es" title="Español" aria-current="page"',
  'class="lang-btn" href="/" hreflang="es" lang="es" data-lang="es" title="Español"');
replaceOnce('class="lang-btn" href="/en/" hreflang="en" lang="en" data-lang="en" title="English"',
  'class="lang-btn active" href="/en/" hreflang="en" lang="en" data-lang="en" title="English" aria-current="page"');

// 4. Textos accesibles que no pasan por data-i18n
replaceOnce('aria-label="Aywin Software — Inicio"', 'aria-label="Aywin Software — Home"');
replaceOnce('aria-label="Abrir menú de navegación"', 'aria-label="Open navigation menu"');

html = html.replace('<head>', '<head>\n    <!-- GENERADO por generar_en.js desde index.html + i18n.js. No editar a mano. -->');

fs.mkdirSync(path.join(root, 'en'), { recursive: true });
fs.writeFileSync(path.join(root, 'en', 'index.html'), html);
console.log('[OK] en/index.html generado');

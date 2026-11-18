/**
 * Aywin Software - Sistema Bilingüe Español / Inglés
 * https://aywin.cl
 */

const translations = {
  es: {
    // Navegación
    "nav.services": "Servicios",
    "nav.products": "Productos",
    "nav.engineering": "Enfoque",
    "nav.contact": "Contactar",

    // Hero Section
    "hero.badge": "Ingeniería de software y QA • Concepción, Chile",
    "hero.title_p1": "Ingeniería de software robusta,",
    "hero.title_p2": "potenciada por inteligencia artificial.",
    "hero.subtitle": "Más de 18 años liderando desarrollo de software, gestión de proyectos y aseguramiento de calidad (QA). Hoy creamos aplicaciones móviles, sistemas a medida y soluciones con IA, combinando la velocidad de las herramientas actuales con la solidez de una práctica de ingeniería probada.",
    "hero.btn_project": "Iniciar un proyecto",
    "hero.btn_portfolio": "Ver productos",
    "hero.cred_years": "18+ años en la industria",
    "hero.cred_leadership": "Liderazgo técnico y gestión de proyectos",
    "hero.cred_qa": "Calidad (QA) integrada al desarrollo",
    "hero.cred_ai": "Desarrollo acelerado con IA",

    // Servicios
    "services.tag": "SERVICIOS",
    "services.title": "Soluciones de software a medida",
    "services.subtitle": "Acompañamos todo el ciclo de vida del software: desde la definición del producto y la arquitectura hasta el control de calidad y el despliegue.",
    "services.mobile.title": "Desarrollo de aplicaciones móviles",
    "services.mobile.desc": "Aplicaciones multiplataforma para Android e iOS construidas en Flutter: interfaces fluidas, integración con las funciones nativas del dispositivo, funcionamiento sin conexión cuando el caso lo requiere y una arquitectura fácil de mantener.",
    "services.ai.title": "Soluciones con inteligencia artificial",
    "services.ai.desc": "Diseñamos e integramos soluciones con modelos de lenguaje (LLM): agentes autónomos con skills y herramientas propias, orquestación de subagentes que se reparten el trabajo en paralelo y automatizaciones conectadas a tus sistemas. Los agentes resuelven solos lo operativo y una persona aprueba las decisiones que importan.",
    "services.qa.title": "Aseguramiento de calidad (QA)",
    "services.qa.desc": "Diseñamos e implementamos estrategias de calidad: planes de prueba, pruebas funcionales y de regresión, cobertura de casos límite y verificación continua, para que cada versión llegue estable a producción.",
    "services.consulting.title": "Gestión de proyectos y consultoría",
    "services.consulting.desc": "Dirección técnica con experiencia: estimaciones realistas, comunicación transparente con el cliente, metodologías ágiles y foco en entregar valor de negocio en los plazos acordados.",

    // Productos Propios
    "products.tag": "PRODUCTOS PROPIOS",
    "products.title": "Productos que desarrollamos",
    "products.subtitle": "Una selección de productos diseñados y mantenidos por Aywin: una plataforma de QA con IA para equipos de desarrollo y aplicaciones móviles para el día a día.",

    // Card 1: AITA-QA
    "product.aita.cat": "Agentes de IA y QA",
    "product.aita.platform": "CLI + web (Streamlit)",
    "product.aita.title": "AITA-QA",
    "product.aita.subtitle": "Plataforma de aseguramiento de calidad basada en agentes de IA orquestados",
    "product.aita.desc": "<p>Un agente coordinador trabaja con skills por proceso (triage, revisión QA, pruebas en paralelo, paso a producción) y delega en subagentes especializados para revisiones y auditoría antes de su publicación.</p><p>Ejecuta pruebas E2E y guarda evidencia del antes y el después. Trabaja de forma autónoma, con aprobación humana en cada acción con impacto.</p><p>Apoyo a QA: Análisis de entregas, generación de casos de prueba, herramientas de gestión, seguimiento, métricas de calidad.</p>",
    "product.aita.b1": "Agentes y subagentes orquestados",
    "product.aita.b2": "Multi-LLM (Claude / Gemini / Ollama)",
    "product.aita.b3": "Playwright MCP + self-healing",
    "product.aita.b4": "Aprobación humana en puntos clave",
    "product.aita.b5": "Integración con Jira y GitLab",

    // Card 2: SubTrack
    "product.subtrack.cat": "Finanzas y utilidades",
    "product.subtrack.platform": "App móvil",
    "product.subtrack.title": "SubTrack",
    "product.subtrack.subtitle": "Gestor de suscripciones y gastos fijos",
    "product.subtrack.desc": "<p>Registra cada suscripción o gasto fijo con su monto, moneda y ciclo de cobro (de semanal a anual). SubTrack calcula tu gasto mensual, anual proyectado y diario en una moneda base.</p><p>Avisa antes de cada cobro y antes de que termine una prueba gratuita, proyecta los próximos 12 meses y guarda el historial de pagos.</p><p>Sin cuentas, sin conexión a bancos y sin internet: los datos nunca salen del teléfono.</p>",
    "product.subtrack.b1": "Flutter",
    "product.subtrack.b2": "Recordatorios de cobro",
    "product.subtrack.b3": "Multimoneda (CLP, USD, EUR…)",
    "product.subtrack.b4": "100% sin conexión",

    // Card 3: Home Library
    "product.library.cat": "Organización e inventario",
    "product.library.platform": "App móvil",
    "product.library.title": "HomeLib",
    "product.library.subtitle": "Catálogo de la biblioteca de tu hogar y control de préstamos",
    "product.library.desc": "<p>Escribe el ISBN y la app completa título, autor y portada desde Open Library o Google Books, validando ISBN-10/13 y avisando si el libro ya está registrado.</p><p>Guarda la ubicación exacta de cada libro (sala, mueble y nivel), su dueño y a quién lo prestaste, con fecha de devolución y aviso de préstamos vencidos.</p><p>Suma estados de lectura, calificaciones, estadísticas y exportación a Excel.</p>",
    "product.library.b1": "Flutter",
    "product.library.b2": "Búsqueda por ISBN",
    "product.library.b3": "Control de préstamos",
    "product.library.b4": "Exportación a Excel",

    // Card 4: Breathe Flow
    "product.breathe.cat": "Salud y bienestar",
    "product.breathe.platform": "App móvil",
    "product.breathe.title": "Breathe Flow",
    "product.breathe.subtitle": "Guía de respiración consciente",
    "product.breathe.desc": "<p>Un círculo animado marca cuándo inhalar, sostener y exhalar, con una vibración distinta en cada fase para practicar con los ojos cerrados.</p><p>Incluye respiración cuadrada (4-4-4-4), 4-7-8, respiración coherente (5,5 s) y un ritmo personalizado, sesiones de 2 a 10 minutos, rachas e historial de práctica.</p><p>Sin cuentas, sin anuncios y sin internet.</p>",
    "product.breathe.b1": "Flutter",
    "product.breathe.b2": "Vibración por fase",
    "product.breathe.b3": "Ritmos personalizables",
    "product.breathe.b4": "100% sin conexión",

    // Factor Diferencial
    "diff.tag": "NUESTRO ENFOQUE",
    "diff.title": "Una visión completa del software, del código al negocio",
    "diff.lead": "Más que escribir código, entendemos el ciclo de vida completo de un producto digital: la visión de negocio, la gestión del equipo, el desarrollo y el control de calidad final. La IA acelera el trabajo; la experiencia define qué construir y cómo validarlo.",
    "diff.item1.title": "Liderazgo técnico y gestión de proyectos",
    "diff.item1.desc": "Experiencia liderando equipos de desarrollo, trabajando directamente con clientes y cumpliendo compromisos de entrega con metodologías probadas.",
    "diff.item2.title": "Calidad (QA) desde el inicio",
    "diff.item2.desc": "Cada funcionalidad se diseña pensando en su estabilidad, en su usabilidad y en prevenir fallos antes de que lleguen a producción.",
    "diff.item3.title": "Desarrollo acelerado con IA",
    "diff.item3.desc": "Trabajamos con agentes de IA orquestados: un agente coordinador, subagentes especializados y revisiones automáticas antes de cada entrega. Así acortamos los plazos, con aprobación humana en los puntos clave y sin descuidar la arquitectura.",

    // Contacto
    "contact.tag": "CONVERSEMOS",
    "contact.title": "¿Tienes un proyecto en mente?",
    "contact.subtitle": "Ya sea una aplicación móvil, un sistema a medida, una estrategia de QA y automatización de pruebas o el liderazgo técnico de tu proyecto, hablemos.",
    "contact.btn": "Escríbenos a contacto@aywin.cl",
    "contact.subtext": "Respondemos en un plazo de 24 horas hábiles • Concepción, Chile • Atención remota en Chile y el extranjero",

    // Footer
    "footer.desc": "Desarrollo de software a medida, aplicaciones móviles multiplataforma, aseguramiento de calidad y consultoría tecnológica con inteligencia artificial.",
    "footer.nav_title": "Navegación",
    "footer.nav_home": "Inicio",
    "footer.nav_services": "Servicios",
    "footer.nav_products": "Productos",
    "footer.contact_title": "Contacto",
    "footer.location": "Concepción, Región del Biobío, Chile",
    "footer.rights": "&copy; 2026 Aywin Software. Todos los derechos reservados.",
    "footer.tagline": "Ingeniería de software con visión integral y calidad técnica.",
    "nav.experience": "Experiencia",
    "services.legacy.title": "Sistemas a medida y legados",
    "services.legacy.desc": "Desarrollo, mantención y modernización de sistemas empresariales que ya están en producción, incluidas plataformas legadas que pocos equipos siguen dominando, con especialización en Oracle y PL/SQL. La continuidad operacional es lo primero: el sistema evoluciona sin detener el negocio.",
    "services.automation.title": "Automatización de pruebas y rendimiento",
    "services.automation.desc": "Suites de pruebas automatizadas para web, móvil y API, integradas a tu pipeline de CI/CD, con smoke tests que verifican producción tras cada despliegue. Además, pruebas de carga y rendimiento para conocer los límites de tu sistema antes que tus usuarios.",
    "exp.tag": "EXPERIENCIA",
    "exp.title": "La experiencia detrás de Aywin",
    "exp.subtitle": "Aywin es un estudio joven, pero quienes lo formamos no partimos de cero: traemos años de trabajo en proyectos de desarrollo, QA y mantención de software, muchos de ellos sobre sistemas críticos en producción.",
    "exp.stat_years": "Años de trayectoria profesional en desarrollo de software, QA y gestión de proyectos",
    "exp.stat_companies": "Empresas en cuyos proyectos participamos antes de fundar Aywin",
    "exp.stat_apps": "Apps móviles propias en desarrollo; las primeras, en camino a Google Play",
    "exp.sectors_title": "Industrias en las que hemos trabajado",
    "exp.sector.forestry": "Forestal y celulosa",
    "exp.sector.water": "Servicios sanitarios",
    "exp.sector.energy": "Energía",
    "exp.sector.ports": "Puertos y logística",
    "exp.sector.aqua": "Acuicultura",
    "exp.sector.retail": "Retail",
    "exp.sector.telco": "Telecomunicaciones",
    "exp.sector.industry": "Industria",
    "exp.sector.education": "Educación",
    "exp.sector.pharma": "Farmacéutica",
    "exp.stack_title": "Stack técnico",
    "exp.stack.testing": "Testing y automatización",
    "exp.stack.dev": "Desarrollo",
    "exp.stack.data": "Bases de datos",
    "exp.stack.ai": "IA aplicada",
    "exp.stack.agents": "Agentes de código",
    "exp.stack.subagents": "Subagentes",
    "exp.stack.orchestration": "Orquestación de agentes",
    "exp.stack.llm": "Integración de LLMs",
    "exp.stack.process": "Gestión y procesos",
    "exp.stack.remote": "Equipos remotos",

    "footer.support": "Soporte de apps:",
    "a11y.skip": "Saltar al contenido",
    "notfound.title": "Página no encontrada",
    "notfound.desc": "La dirección que buscas no existe o fue movida.",
    "notfound.btn": "Volver al inicio",
  },

  en: {
    // Navigation
    "nav.services": "Services",
    "nav.products": "Products",
    "nav.engineering": "Approach",
    "nav.contact": "Contact",

    // Hero Section
    "hero.badge": "Software engineering & QA • Concepción, Chile",
    "hero.title_p1": "Robust software engineering,",
    "hero.title_p2": "powered by artificial intelligence.",
    "hero.subtitle": "Over 18 years leading software development, project management and quality assurance (QA). Today we build mobile apps, custom systems and AI-powered solutions, combining the speed of modern tooling with the rigor of proven engineering practice.",
    "hero.btn_project": "Start a project",
    "hero.btn_portfolio": "See our products",
    "hero.cred_years": "18+ years in the industry",
    "hero.cred_leadership": "Technical leadership & project management",
    "hero.cred_qa": "QA built into development",
    "hero.cred_ai": "AI-accelerated development",

    // Services
    "services.tag": "SERVICES",
    "services.title": "Custom software solutions",
    "services.subtitle": "We cover the full software lifecycle: from product definition and architecture to quality assurance and deployment.",
    "services.mobile.title": "Mobile app development",
    "services.mobile.desc": "Cross-platform Android and iOS apps built with Flutter: smooth interfaces, integration with native device features, offline operation where the use case calls for it, and an architecture that is easy to maintain.",
    "services.ai.title": "AI-powered solutions",
    "services.ai.desc": "We design and integrate solutions built on large language models (LLMs): autonomous agents with their own skills and tools, orchestrated subagents that split the work in parallel, and automation connected to your systems. Agents handle the operational work on their own, and a person approves the decisions that matter.",
    "services.qa.title": "Quality assurance (QA)",
    "services.qa.desc": "We design and implement quality strategies: test plans, functional and regression testing, edge-case coverage and continuous verification, so every release reaches production in a stable state.",
    "services.consulting.title": "Project management & consulting",
    "services.consulting.desc": "Experienced technical leadership: realistic estimates, transparent client communication, agile methods and a focus on delivering business value on the agreed timeline.",

    // Proprietary Products
    "products.tag": "OUR PRODUCTS",
    "products.title": "Products we build",
    "products.subtitle": "A selection of products designed and maintained by Aywin: an AI-powered QA platform for development teams and mobile apps for everyday use.",

    // Card 1: AITA-QA
    "product.aita.cat": "AI agents & QA",
    "product.aita.platform": "CLI + web (Streamlit)",
    "product.aita.title": "AITA-QA",
    "product.aita.subtitle": "Quality assurance platform built on orchestrated AI agents",
    "product.aita.desc": "<p>A coordinating agent works with per-process skills (triage, QA review, parallel testing, production release) and delegates to specialized subagents for reviews and auditing before publication.</p><p>It runs E2E tests, keeps before-and-after evidence, and works autonomously with human approval for every action that has impact.</p><p>QA support: delivery analysis, test case generation, management tools, tracking, quality metrics.</p>",
    "product.aita.b1": "Orchestrated agents & subagents",
    "product.aita.b2": "Multi-LLM (Claude / Gemini / Ollama)",
    "product.aita.b3": "Playwright MCP + self-healing",
    "product.aita.b4": "Human approval at key points",
    "product.aita.b5": "Jira & GitLab integration",

    // Card 2: SubTrack
    "product.subtrack.cat": "Finance & utilities",
    "product.subtrack.platform": "Mobile app",
    "product.subtrack.title": "SubTrack",
    "product.subtrack.subtitle": "Subscription and fixed-cost tracker",
    "product.subtrack.desc": "<p>Log each subscription or fixed cost with its amount, currency and billing cycle (weekly to yearly), and SubTrack works out your monthly, projected yearly and daily spend in a base currency.</p><p>It reminds you before each charge and before a free trial ends, charts the next 12 months and keeps a payment history.</p><p>No accounts, no bank connections and no internet: your data never leaves the phone.</p>",
    "product.subtrack.b1": "Flutter",
    "product.subtrack.b2": "Charge reminders",
    "product.subtrack.b3": "Multi-currency (CLP, USD, EUR…)",
    "product.subtrack.b4": "100% offline",

    // Card 3: Home Library
    "product.library.cat": "Organization & inventory",
    "product.library.platform": "Mobile app",
    "product.library.title": "HomeLib",
    "product.library.subtitle": "Home library catalog and lending tracker",
    "product.library.desc": "<p>Type an ISBN and the app fills in title, author and cover from Open Library or Google Books, validating ISBN-10/13 and warning about duplicates.</p><p>It records each book's exact location (room, bookcase and shelf), its owner and who borrowed it, with return-by dates and overdue alerts.</p><p>Reading status, ratings, statistics and Excel export round it out.</p>",
    "product.library.b1": "Flutter",
    "product.library.b2": "ISBN lookup",
    "product.library.b3": "Loan tracking",
    "product.library.b4": "Excel export",

    // Card 4: Breathe Flow
    "product.breathe.cat": "Health & wellness",
    "product.breathe.platform": "Mobile app",
    "product.breathe.title": "Breathe Flow",
    "product.breathe.subtitle": "Guided breathing companion",
    "product.breathe.desc": "<p>An animated circle shows when to inhale, hold and exhale, with a distinct vibration at each phase so you can practice with your eyes closed.</p><p>It includes box breathing (4-4-4-4), 4-7-8, coherent breathing (5.5 s) and a custom rhythm, 2 to 10 minute sessions, streaks and a practice history.</p><p>No accounts, no ads and no internet.</p>",
    "product.breathe.b1": "Flutter",
    "product.breathe.b2": "Phase vibration",
    "product.breathe.b3": "Custom rhythms",
    "product.breathe.b4": "100% offline",

    // Competitive Edge
    "diff.tag": "OUR APPROACH",
    "diff.title": "A complete view of software, from code to business",
    "diff.lead": "Beyond writing code, we understand the full lifecycle of a digital product: business vision, team management, development and final quality control. AI speeds up the work; experience decides what to build and how to validate it.",
    "diff.item1.title": "Technical leadership & project management",
    "diff.item1.desc": "Experience leading development teams, working directly with clients and meeting delivery commitments with proven methodologies.",
    "diff.item2.title": "Quality (QA) from the start",
    "diff.item2.desc": "Every feature is designed with stability and usability in mind, preventing defects before they reach production.",
    "diff.item3.title": "AI-accelerated development",
    "diff.item3.desc": "We work with orchestrated AI agents: a coordinating agent, specialized subagents and automated reviews before every delivery. That is how we shorten delivery times, with human approval at key points and without compromising architecture.",

    // Contact
    "contact.tag": "LET'S TALK",
    "contact.title": "Have a project in mind?",
    "contact.subtitle": "Whether it's a mobile app, a custom system, a QA and test automation strategy or technical leadership for your project, let's talk.",
    "contact.btn": "Email us at contacto@aywin.cl",
    "contact.subtext": "We reply within 24 business hours • Concepción, Chile • Remote service in Chile and abroad",

    // Footer
    "footer.desc": "Custom software development, cross-platform mobile apps, quality assurance and AI-powered technology consulting.",
    "footer.nav_title": "Navigation",
    "footer.nav_home": "Home",
    "footer.nav_services": "Services",
    "footer.nav_products": "Products",
    "footer.contact_title": "Contact",
    "footer.location": "Concepción, Biobío Region, Chile",
    "footer.rights": "&copy; 2026 Aywin Software. All rights reserved.",
    "footer.tagline": "Software engineering with an end-to-end view and technical quality.",
    "nav.experience": "Experience",
    "services.legacy.title": "Custom & legacy systems",
    "services.legacy.desc": "Development, maintenance and modernization of enterprise systems already in production, including legacy platforms that few teams still master, with a specialization in Oracle and PL/SQL. Operational continuity comes first: the system evolves without stopping the business.",
    "services.automation.title": "Test automation & performance",
    "services.automation.desc": "Automated test suites for web, mobile and API, integrated into your CI/CD pipeline, with smoke tests that verify production after every deployment. Plus load and performance testing to find your system's limits before your users do.",
    "exp.tag": "EXPERIENCE",
    "exp.title": "The experience behind Aywin",
    "exp.subtitle": "Aywin is a young studio, but the people behind it are not starting from scratch: we bring years of work on development, QA and software maintenance projects, many of them on business-critical production systems.",
    "exp.stat_years": "Years of professional experience in software development, QA and project management",
    "exp.stat_companies": "Companies whose projects we worked on before founding Aywin",
    "exp.stat_apps": "In-house mobile apps in development, with the first ones on their way to Google Play",
    "exp.sectors_title": "Industries we have worked in",
    "exp.sector.forestry": "Forestry & pulp",
    "exp.sector.water": "Water utilities",
    "exp.sector.energy": "Energy",
    "exp.sector.ports": "Ports & logistics",
    "exp.sector.aqua": "Aquaculture",
    "exp.sector.retail": "Retail",
    "exp.sector.telco": "Telecommunications",
    "exp.sector.industry": "Industrial",
    "exp.sector.education": "Education",
    "exp.sector.pharma": "Pharmaceutical",
    "exp.stack_title": "Tech stack",
    "exp.stack.testing": "Testing & automation",
    "exp.stack.dev": "Development",
    "exp.stack.data": "Databases",
    "exp.stack.ai": "Applied AI",
    "exp.stack.agents": "Coding agents",
    "exp.stack.subagents": "Subagents",
    "exp.stack.orchestration": "Agent orchestration",
    "exp.stack.llm": "LLM integration",
    "exp.stack.process": "Management & process",
    "exp.stack.remote": "Remote teams",

    "footer.support": "App support:",
    "a11y.skip": "Skip to content",
    "notfound.title": "Page not found",
    "notfound.desc": "The page you are looking for does not exist or has been moved.",
    "notfound.btn": "Back to home",
  }
};

function applyLanguage(lang) {
  if (!translations[lang]) lang = 'es';
  document.documentElement.lang = lang;

  // Actualizar elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Actualizar botones de idioma activos
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Enlaces a la landing: apuntan a la versión del idioma activo (/ o /en/)
  document.querySelectorAll('a[href^="index.html"], a[data-home-href]').forEach(a => {
    if (!a.dataset.homeHref) a.dataset.homeHref = a.getAttribute('href');
    const hash = a.dataset.homeHref.replace(/^index\.html/, '');
    a.setAttribute('href', (lang === 'en' ? '/en/' : '/') + hash);
  });

  // Guardar preferencia
  try {
    localStorage.setItem('aywin_lang', lang);
  } catch (e) {}
}

function savePreference(lang) {
  try {
    localStorage.setItem('aywin_lang', lang);
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  // Landing (/ y /en/): cada idioma es una página estática indexable. No se
  // traduce en el navegador; los botones ES/EN son enlaces y solo se recuerda
  // la elección para las páginas de privacidad.
  if (document.documentElement.dataset.i18nMode === 'static') {
    document.querySelectorAll('a.lang-btn').forEach(link => {
      link.addEventListener('click', () => savePreference(link.getAttribute('data-lang')));
    });
    return;
  }

  // Determinar idioma inicial: preferencia guardada > navegador en inglés > español por defecto
  let initialLang = 'es';
  try {
    const saved = localStorage.getItem('aywin_lang');
    if (saved === 'en' || saved === 'es') {
      initialLang = saved;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith('en')) {
      initialLang = 'en';
    }
  } catch (e) {}

  applyLanguage(initialLang);

  // Vincular eventos a los botones de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      applyLanguage(targetLang);
    });
  });
});

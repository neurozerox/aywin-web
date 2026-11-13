/**
 * Aywin Software - Sistema Bilingüe Español / Inglés
 * https://aywin.cl
 */

const translations = {
  es: {
    // Navegación
    "nav.services": "Servicios",
    "nav.products": "Productos Propios",
    "nav.engineering": "Ingeniería & IA",
    "nav.contact": "Contactar",

    // Hero Section
    "hero.badge": "Ingeniería de Software & QA • Concepción, Chile",
    "hero.title_p1": "Ingeniería de software robusta,",
    "hero.title_p2": "potenciada por Inteligencia Artificial.",
    "hero.subtitle": "Con más de 17 años de trayectoria liderando desarrollo de software, gestión de proyectos y aseguramiento de calidad (QA), creamos aplicaciones móviles, sistemas a medida y soluciones digitales con velocidad moderna y solidez técnica.",
    "hero.btn_project": "Iniciar un Proyecto",
    "hero.btn_portfolio": "Ver Desarrollos",
    "hero.cred_years": "17+ Años de Experiencia en la Industria",
    "hero.cred_leadership": "Liderazgo Técnico & Gestión de Proyectos",
    "hero.cred_qa": "Cultura Integral de QA & Desarrollo",
    "hero.cred_ai": "Desarrollo Acelerado por IA",

    // Servicios
    "services.tag": "SERVICIOS ESPECIALIZADOS",
    "services.title": "Soluciones Tecnológicas a Medida",
    "services.subtitle": "Acompañamos todo el ciclo de vida del software: desde la definición del producto y la arquitectura hasta el control de calidad y despliegue.",
    "services.mobile.title": "Desarrollo de Aplicaciones Móviles",
    "services.mobile.desc": "Aplicaciones multiplataforma de alta fidelidad (iOS & Android) construidas en Flutter. Interfaces fluidas a 60/120 fps, integración nativa de sensores, consumo óptimo de batería y arquitectura limpia.",
    "services.ai.title": "Soluciones Potenciadas por IA",
    "services.ai.desc": "Integramos herramientas y modelos de frontera (LLMs, automatización y agentes inteligentes) para transformar ideas en sistemas funcionales en tiempos récord, con supervisión técnica rigurosa.",
    "services.qa.title": "Aseguramiento de Calidad (QA Lead)",
    "services.qa.desc": "Diseño de estrategias integrales de calidad de software: pruebas funcionales, cobertura de casos borde y verificación continua para garantizar productos estables y confiables en producción.",
    "services.consulting.title": "Gestión de Proyectos & Consultoría",
    "services.consulting.desc": "Dirección técnica experimentada: estimaciones precisas, comunicación transparente con clientes, metodología ágil y enfoque implacable en entregar valor real de negocio a tiempo.",

    // Productos Propios
    "products.tag": "I+D Y PRODUCTOS PROPIOS",
    "products.title": "Desarrollos y Soluciones",
    "products.subtitle": "Muestra de aplicaciones diseñadas y mantenidas internamente para resolver problemas específicos con alta usabilidad.",

    // Card 1: AITA-QA
    "product.aita.cat": "Agentes Autónomos & QA",
    "product.aita.platform": "CLI + Streamlit Web",
    "product.aita.title": "AITA-QA",
    "product.aita.subtitle": "Ecosistema Agéntico de QA, Revisión Autónoma con IA & Testing Playwright",
    "product.aita.desc": "Suite integral de aseguramiento de calidad impulsada por agentes autónomos de IA (Claude, Gemini y modelos locales). Conecta Jira y GitLab con Playwright para realizar triage inteligente de entregas, auditoría de código con captura de evidencia real, generación automática de Page Object Models (POM) y ejecución de pruebas con auto-reparación (self-healing), gobernando el ciclo pre-producción con cero regresiones.",
    "product.aita.b1": "Agentes Autónomos & Skills",
    "product.aita.b2": "Multi-LLM (Claude / Gemini / Ollama)",
    "product.aita.b3": "Playwright + Self-Healing",
    "product.aita.b4": "Jira & GitLab Governance",

    // Card 2: SubTrack
    "product.subtrack.cat": "Finanzas & Utilidades",
    "product.subtrack.platform": "Mobile App",
    "product.subtrack.title": "SubTrack",
    "product.subtrack.subtitle": "Administrador analítico de suscripciones periódicas",
    "product.subtrack.desc": "Plataforma de control financiero para suscripciones y cobros recurrentes. Proyección de gasto mensual y anualizado, calendario inteligente de renovaciones y alertas tempranas de vencimiento.",
    "product.subtrack.b1": "Flutter",
    "product.subtrack.b2": "Control Financiero",
    "product.subtrack.b3": "Offline First",
    "product.subtrack.b4": "Cero Fuga de Datos",

    // Card 3: Home Library
    "product.library.cat": "Organización & Inventario",
    "product.library.platform": "Mobile App",
    "product.library.title": "Home Library Catalog",
    "product.library.subtitle": "Sistema de gestión y catalogación de biblioteca personal",
    "product.library.desc": "Organizador de inventario de libros con registro de metadatos, seguimiento de lecturas activas y módulo de trazabilidad de préstamos a terceros para evitar pérdidas de patrimonio personal.",
    "product.library.b1": "Gestión de Inventario",
    "product.library.b2": "SQLite Local",
    "product.library.b3": "Filtros Dinámicos",

    // Card 4: Breathe Flow
    "product.breathe.cat": "Salud Digital & Bienestar",
    "product.breathe.platform": "Mobile App",
    "product.breathe.title": "Breathe Flow & Focus",
    "product.breathe.subtitle": "Entrenador biométrico de respiración y concentración",
    "product.breathe.desc": "Herramienta de modulación del sistema nervioso basada en protocolos validados (Pranayama, Box 4x4, 4-7-8). Integra esferas hápticas expansivas y generador de ondas alfa para enfoque prolongado.",
    "product.breathe.b1": "Salud Digital",
    "product.breathe.b2": "Respuesta Háptica",
    "product.breathe.b3": "Audio DSP",

    // Factor Diferencial
    "diff.tag": "EL FACTOR DIFERENCIAL",
    "diff.title": "Visión 360° del software: del código al negocio",
    "diff.lead": "No somos programadores aislados improvisando con prompts. Entendemos todo el ciclo de vida de un producto digital: desde la visión de negocio y gestión de equipos hasta la escritura de código limpio y el control de calidad final.",
    "diff.item1.title": "Liderazgo Técnico & Gestión de Proyectos",
    "diff.item1.desc": "Experiencia real liderando equipos de desarrollo, tratando directamente con clientes y cumpliendo compromisos de entrega con metodologías probadas.",
    "diff.item2.title": "Cultura de Calidad (QA) desde el Origen",
    "diff.item2.desc": "Enfoque de Encargado de QA: cada funcionalidad se diseña pensando en la estabilidad, la usabilidad y la prevención de fallos antes de llegar a producción.",
    "diff.item3.title": "Desarrollo Acelerado con IA Moderna",
    "diff.item3.desc": "Aprovechamos la Inteligencia Artificial como un multiplicador de productividad para entregar software en días en lugar de meses, sin descuidar la arquitectura.",

    // Contacto
    "contact.tag": "CONVERSEMOS",
    "contact.title": "¿Tienes un proyecto, sistema o software en mente?",
    "contact.subtitle": "Ya sea para desarrollar una aplicación móvil, diseñar una solución digital a medida o liderar técnicamente tu proyecto, hablemos.",
    "contact.btn": "Escríbenos a contacto@aywin.cl",
    "contact.subtext": "Respuesta directa en menos de 24 horas hábiles • Concepción, Chile (Atención remota a todo Chile y el extranjero)",

    // Footer
    "footer.desc": "Desarrollo de software a medida, aplicaciones móviles multiplataforma y consultoría tecnológica potenciada por Inteligencia Artificial.",
    "footer.domain": "Dominio oficial registrado: <strong>aywin.cl</strong>",
    "footer.nav_title": "Navegación",
    "footer.nav_home": "Inicio",
    "footer.nav_services": "Servicios",
    "footer.nav_products": "Productos Propios",
    "footer.contact_title": "Contacto",
    "footer.location": "Concepción, Región del Biobío, Chile",
    "footer.rights": "&copy; 2026 Aywin Software. Todos los derechos reservados.",
    "footer.tagline": "Ingeniería de software, visión integral y calidad técnica.",
    "nav.experience": "Experiencia",
    "services.legacy.title": "Sistemas a Medida y Legados",
    "services.legacy.desc": "Desarrollo, mantención y modernización de sistemas empresariales en producción (.NET, PHP, Delphi, Genexus) sobre Oracle, SQL Server y MySQL. Continuidad operacional primero: cambios evolutivos sin detener el negocio.",
    "services.automation.title": "Automatización de Pruebas y Rendimiento",
    "services.automation.desc": "Suites automatizadas web, mobile y API (Playwright, Selenium, Appium, Postman) integradas a tu flujo de trabajo, más pruebas de carga y rendimiento (JMeter, LoadRunner) para saber cuánto aguanta tu sistema antes de que lo descubran tus usuarios.",
    "exp.tag": "EXPERIENCIA",
    "exp.title": "La experiencia detrás de Aywin",
    "exp.subtitle": "Aywin es un estudio joven, pero quienes lo formamos no partimos de cero: traemos años de trabajo en proyectos de desarrollo, QA y soporte, muchos de ellos sobre sistemas críticos en producción.",
    "exp.stat_years": "Años de trayectoria profesional en desarrollo de software, QA y gestión de proyectos",
    "exp.stat_companies": "Empresas en cuyos proyectos participamos a lo largo de nuestra carrera, antes de fundar Aywin",
    "exp.stat_apps": "Aplicaciones móviles propias, diseñadas y construidas ya como Aywin",
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
    "exp.stack_title": "Stack técnico",
    "exp.stack.testing": "Testing y automatización",
    "exp.stack.dev": "Desarrollo",
    "exp.stack.data": "Bases de datos",
    "exp.stack.ai": "IA aplicada",
    "exp.stack.agents": "Agentes de código",
    "exp.stack.llm": "Integración de LLMs",
    "exp.stack.process": "Gestión y procesos",
    "exp.stack.remote": "Equipos remotos",

    // Política de Privacidad
  },

  en: {
    // Navigation
    "nav.services": "Services",
    "nav.products": "Proprietary Products",
    "nav.engineering": "Engineering & AI",
    "nav.contact": "Contact",

    // Hero Section
    "hero.badge": "Senior Software Engineering & QA • Concepción, Chile",
    "hero.title_p1": "Robust software engineering,",
    "hero.title_p2": "powered by Artificial Intelligence.",
    "hero.subtitle": "With over 17 years of experience leading software development, project management, and quality assurance (QA), we build mobile applications, custom systems, and digital solutions with modern velocity and technical rigor.",
    "hero.btn_project": "Start a Project",
    "hero.btn_portfolio": "View Developments",
    "hero.cred_years": "17+ Years of Industry Experience",
    "hero.cred_leadership": "Technical Leadership & Project Management",
    "hero.cred_qa": "End-to-End QA & Engineering Culture",
    "hero.cred_ai": "AI-Accelerated Development",

    // Services
    "services.tag": "SPECIALIZED SERVICES",
    "services.title": "Custom Technological Solutions",
    "services.subtitle": "We guide the full software lifecycle: from product discovery and architecture to quality assurance and production deployment.",
    "services.mobile.title": "Mobile Application Development",
    "services.mobile.desc": "High-fidelity cross-platform applications (iOS & Android) built in Flutter. 60/120 fps fluid interfaces, native sensor integration, optimal battery efficiency, and clean architecture.",
    "services.ai.title": "AI-Powered Solutions",
    "services.ai.desc": "We integrate frontier models and autonomous AI agents to transform ideas into functional, production-ready systems in record time, under senior engineering supervision.",
    "services.qa.title": "Quality Assurance & QA Leadership",
    "services.qa.desc": "Comprehensive software quality strategies: functional testing, edge-case coverage, and continuous verification to ensure resilient, rock-solid production releases.",
    "services.consulting.title": "Project Management & Consulting",
    "services.consulting.desc": "Experienced technical direction: accurate estimates, transparent client communication, agile discipline, and an unrelenting focus on delivering real business value on time.",

    // Proprietary Products
    "products.tag": "R&D & PROPRIETARY PRODUCTS",
    "products.title": "Products & Solutions",
    "products.subtitle": "A showcase of internally designed and maintained software built to solve specific problems with exceptional usability.",

    // Card 1: AITA-QA
    "product.aita.cat": "Autonomous Agents & QA",
    "product.aita.platform": "CLI + Streamlit Web",
    "product.aita.title": "AITA-QA",
    "product.aita.subtitle": "Agentic QA Ecosystem: Autonomous AI Review & Playwright Testing",
    "product.aita.desc": "Comprehensive QA engineering suite powered by autonomous AI agents (Claude, Gemini, and local LLMs). Integrates Jira and GitLab with Playwright to deliver intelligent delivery triage, evidence-backed code review, automated Page Object Model (POM) generation, and self-healing test execution with zero regressions.",
    "product.aita.b1": "Autonomous Agents & Skills",
    "product.aita.b2": "Multi-LLM (Claude / Gemini / Ollama)",
    "product.aita.b3": "Playwright + Self-Healing",
    "product.aita.b4": "Jira & GitLab Governance",

    // Card 2: SubTrack
    "product.subtrack.cat": "Finance & Utilities",
    "product.subtrack.platform": "Mobile App",
    "product.subtrack.title": "SubTrack",
    "product.subtrack.subtitle": "Analytical Recurring Subscription Tracker",
    "product.subtrack.desc": "Financial control platform for recurring expenses and subscriptions. Monthly and annualized spending projections, smart renewal calendar, and early expiration notifications.",
    "product.subtrack.b1": "Flutter",
    "product.subtrack.b2": "Financial Tracking",
    "product.subtrack.b3": "Offline First",
    "product.subtrack.b4": "Zero Data Leak",

    // Card 3: Home Library
    "product.library.cat": "Organization & Inventory",
    "product.library.platform": "Mobile App",
    "product.library.title": "Home Library Catalog",
    "product.library.subtitle": "Personal Library Catalog & Lending System",
    "product.library.desc": "Book inventory organizer with metadata logging, active reading logs, and third-party lending traceability to protect personal book collections.",
    "product.library.b1": "Inventory Management",
    "product.library.b2": "Local SQLite",
    "product.library.b3": "Dynamic Filters",

    // Card 4: Breathe Flow
    "product.breathe.cat": "Digital Health & Wellness",
    "product.breathe.platform": "Mobile App",
    "product.breathe.title": "Breathe Flow & Focus",
    "product.breathe.subtitle": "Biometric Breathwork & Focus Coach",
    "product.breathe.desc": "Nervous system regulation tool based on validated protocols (Pranayama, Box 4x4, 4-7-8). Features expanding haptic feedback spheres and alpha wave generator for sustained focus.",
    "product.breathe.b1": "Digital Health",
    "product.breathe.b2": "Haptic Feedback",
    "product.breathe.b3": "DSP Audio",

    // Competitive Edge
    "diff.tag": "THE COMPETITIVE EDGE",
    "diff.title": "360° Software Vision: From Code to Business",
    "diff.lead": "We are not isolated coders experimenting with prompts. We master the complete digital product lifecycle: from commercial strategy and team leadership to clean architecture and rigorous QA.",
    "diff.item1.title": "Technical Leadership & Project Management",
    "diff.item1.desc": "Proven track record leading engineering teams, managing client relationships directly, and delivering on commitments with disciplined agile methodologies.",
    "diff.item2.title": "Quality-First (QA) Engineering Culture",
    "diff.item2.desc": "QA Lead mindset: every feature is architected for stability, edge-case resilience, usability, and proactive fault prevention before reaching production.",
    "diff.item3.title": "AI-Accelerated Modern Development",
    "diff.item3.desc": "We leverage state-of-the-art AI as an engineering force multiplier, shipping battle-tested software in days rather than months without compromising architecture.",

    // Contact
    "contact.tag": "GET IN TOUCH",
    "contact.title": "Have a project, system, or software in mind?",
    "contact.subtitle": "Whether you need high-performance mobile app development, a custom digital platform, or technical leadership, let's talk.",
    "contact.btn": "Email us at contacto@aywin.cl",
    "contact.subtext": "Direct response within 24 business hours • Concepción, Chile (Remote services worldwide)",

    // Footer
    "footer.desc": "Custom software development, cross-platform mobile apps, and tech consulting powered by Artificial Intelligence.",
    "footer.domain": "Official registered domain: <strong>aywin.cl</strong>",
    "footer.nav_title": "Navigation",
    "footer.nav_home": "Home",
    "footer.nav_services": "Services",
    "footer.nav_products": "Proprietary Products",
    "footer.contact_title": "Contact",
    "footer.location": "Concepción, Biobío Region, Chile",
    "footer.rights": "&copy; 2026 Aywin Software. All rights reserved.",
    "footer.tagline": "Software engineering, end-to-end vision, and technical excellence.",
    "nav.experience": "Experience",
    "services.legacy.title": "Custom & Legacy Systems",
    "services.legacy.desc": "Development, maintenance and modernisation of enterprise systems in production (.NET, PHP, Delphi, Genexus) on Oracle, SQL Server and MySQL. Operational continuity first: evolving the system without stopping the business.",
    "services.automation.title": "Test Automation & Performance",
    "services.automation.desc": "Automated web, mobile and API suites (Playwright, Selenium, Appium, Postman) integrated into your workflow, plus load and performance testing (JMeter, LoadRunner) to learn how much your system can take before your users find out.",
    "exp.tag": "EXPERIENCE",
    "exp.title": "The experience behind Aywin",
    "exp.subtitle": "Aywin is a young studio, but the people behind it are not starting from scratch: we bring years of work on development, QA and support projects, many of them on business-critical production systems.",
    "exp.stat_years": "Years of professional experience in software development, QA and project management",
    "exp.stat_companies": "Companies whose projects we worked on throughout our careers, before founding Aywin",
    "exp.stat_apps": "In-house mobile apps, designed and built as Aywin",
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
    "exp.stack_title": "Tech stack",
    "exp.stack.testing": "Testing & automation",
    "exp.stack.dev": "Development",
    "exp.stack.data": "Databases",
    "exp.stack.ai": "Applied AI",
    "exp.stack.agents": "Coding agents",
    "exp.stack.llm": "LLM integration",
    "exp.stack.process": "Management & process",
    "exp.stack.remote": "Remote teams",

    // Privacy Policy
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
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Guardar preferencia
  try {
    localStorage.setItem('aywin_lang', lang);
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
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

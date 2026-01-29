// SEO Component Helper
// Este componente puede ser usado para actualizar meta tags dinámicamente si fuera necesario

export const seoConfig = {
  defaultTitle: 'Agiltech | BusinessTech - Tecnología e IA para Empresas que Escalan',
  titleTemplate: '%s | Agiltech',
  defaultDescription: 'Diseñamos software, automatización e inteligencia artificial para empresas y corporativos. IA empresarial, WebApps, Apps móviles y automatización de procesos que generan resultados reales.',
  siteUrl: 'https://agiltech.com',
  siteName: 'Agiltech',
  defaultImage: 'https://agiltech.com/og-image.jpg',
  twitterHandle: '@agiltech',
  
  // Keywords principales para SEO
  keywords: [
    'inteligencia artificial empresarial',
    'desarrollo software empresarial',
    'automatización de procesos',
    'apps móviles corporativas',
    'WebApps SaaS',
    'transformación digital',
    'IA para negocios',
    'desarrollo IA',
    'BusinessTech',
    'tecnología empresarial',
    'software a medida',
    'consultoría tecnológica',
    'desarrollo de aplicaciones',
    'soluciones empresariales',
    'escalabilidad empresarial'
  ],
  
  // Structured data for services
  services: [
    {
      name: 'Inteligencia Artificial Empresarial',
      description: 'IA entrenada con tus datos para ventas, soporte y operaciones. Asistentes inteligentes multicanal, automatización de decisiones y analítica predictiva.',
      url: 'https://agiltech.com/#solutions'
    },
    {
      name: 'WebApps & Plataformas SaaS',
      description: 'Digitalizamos procesos críticos con software escalable. Dashboards empresariales, plataformas internas y externas, arquitectura cloud.',
      url: 'https://agiltech.com/#solutions'
    },
    {
      name: 'Apps Nativas iOS & Android',
      description: 'Aplicaciones móviles corporativas de alto rendimiento. UX/UI premium, integración con IA, escalabilidad y soporte.',
      url: 'https://agiltech.com/#solutions'
    },
    {
      name: 'Automatización de Procesos',
      description: 'Elimina tareas repetitivas y cuellos de botella. Automatización operativa y comercial, integración entre sistemas, optimización continua.',
      url: 'https://agiltech.com/#solutions'
    }
  ],
  
  // FAQ Schema for better SEO
  faq: [
    {
      question: '¿Qué es Agiltech?',
      answer: 'Agiltech es una empresa de BusinessTech especializada en diseñar software, automatización e inteligencia artificial para empresas y corporativos que buscan eficiencia, crecimiento y ventaja competitiva real.'
    },
    {
      question: '¿Qué servicios ofrece Agiltech?',
      answer: 'Ofrecemos cuatro soluciones principales: Inteligencia Artificial Empresarial, WebApps & Plataformas SaaS, Apps Nativas iOS & Android, y Automatización de Procesos. Cada solución está diseñada a la medida de las necesidades de tu negocio.'
    },
    {
      question: '¿Cómo trabaja Agiltech?',
      answer: 'Seguimos un proceso de 4 pasos: Diagnóstico Estratégico donde entendemos tu negocio, Diseño de Solución con arquitectura tecnológica alineada a resultados, Implementación Ágil con desarrollo e integración, y Optimización Continua midiendo y escalando.'
    },
    {
      question: '¿Por qué elegir Agiltech?',
      answer: 'Nos enfocamos en resultados reales, no en moda tecnológica. Ofrecemos soluciones 100% personalizadas con integración real de IA en procesos empresariales, combinando visión estratégica con ejecución técnica de clase mundial.'
    }
  ]
};

export default seoConfig;

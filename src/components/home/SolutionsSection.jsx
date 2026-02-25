import React, { useEffect, useRef } from 'react'
import { Brain, Globe, Smartphone, RefreshCw, ArrowRight } from 'lucide-react'

export default function SolutionsSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Líneas de código simuladas
    const codeLines = [
      'function transformBusiness() {',
      '  const AI = initializeAI();',
      '  const automation = setupAutomation();',
      '  return AI + automation;',
      '}',
      '',
      'class BusinessTech {',
      '  constructor() {',
      '    this.solutions = [];',
      '  }',
      '  deploy() {',
      '    return scale();',
      '  }',
      '}',
      '',
      'const webapp = new Platform();',
      'webapp.integrate(AI);',
      'export default webapp;',
    ];

    let lineOffset = 0;
    const lineHeight = 20;
    const fontSize = 13;
    const speed = 0.3;

    // Colores tipo VS Code
    const colors = {
      keyword: '#569CD6',    // azul
      function: '#DCDCAA',   // amarillo
      string: '#CE9178',     // naranja
      comment: '#6A9955',    // verde
      variable: '#9CDCFE',   // cyan
      text: '#D4D4D4'        // gris claro
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Consolas", "Monaco", monospace`;

      lineOffset -= speed;
      if (lineOffset < -lineHeight) {
        lineOffset = 0;
      }

      const startY = Math.floor(lineOffset);
      const visibleLines = Math.ceil(canvas.height / lineHeight) + 2;

      for (let i = 0; i < visibleLines; i++) {
        const lineIndex = i % codeLines.length;
        const line = codeLines[lineIndex];
        const y = startY + i * lineHeight;

        // Número de línea
        ctx.fillStyle = '#858585';
        ctx.fillText((lineIndex + 1).toString().padStart(2, ' '), 20, y);

        // Determinar color según contenido
        let color = colors.text;
        if (line.includes('function') || line.includes('class') || line.includes('const') || line.includes('return')) {
          color = colors.keyword;
        } else if (line.includes('()') || line.includes('=>')) {
          color = colors.function;
        } else if (line.includes('this.')) {
          color = colors.variable;
        }

        ctx.fillStyle = color;
        ctx.fillText(line, 60, y);
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const solutions = [
    {
      icon: Brain,
      title: "Inteligencia Artificial Empresarial",
      description: "IA entrenada con tus datos para ventas, soporte y operaciones.",
      features: [
        "Asistentes inteligentes multicanal",
        "Automatización de decisiones y procesos",
        "Analítica predictiva"
      ],
      cta: "IA que trabaja 24/7 para tu negocio.",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
      ctaColor: "text-purple-400"
    },
    {
      icon: Globe,
      title: "WebApps & Plataformas SaaS",
      description: "Digitalizamos procesos críticos con software escalable.",
      features: [
        "Dashboards empresariales",
        "Plataformas internas y externas",
        "Arquitectura cloud"
      ],
      cta: "Software diseñado para crecer contigo.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      ctaColor: "text-blue-400"
    },
    {
      icon: Smartphone,
      title: "Apps Nativas iOS & Android",
      description: "Aplicaciones móviles corporativas de alto rendimiento.",
      features: [
        "UX/UI premium",
        "Integración con IA",
        "Escalabilidad y soporte"
      ],
      cta: "Experiencias móviles que generan valor real.",
      gradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-400",
      ctaColor: "text-green-400"
    },
    {
      icon: RefreshCw,
      title: "Automatización de Procesos",
      description: "Elimina tareas repetitivas y cuellos de botella.",
      features: [
        "Automatización operativa y comercial",
        "Integración entre sistemas",
        "Optimización continua"
      ],
      cta: "Más tiempo para lo que realmente importa.",
      gradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
      ctaColor: "text-orange-400"
    }
  ]

  return (
    <section id="solutions" className="relative py-6 lg:min-h-screen lg:flex lg:items-center bg-black overflow-hidden">
      {/* Canvas Matrix Effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-[0.03] lg:opacity-[0.15]"
        style={{ pointerEvents: 'none' }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-8">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4">
            <span className="text-sm font-medium text-white">Soluciones BusinessTech</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-light text-white mb-3">
            Tecnología que{' '}
            <span className="font-semibold">
              transforma negocios
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto">
            Soluciones completas de software, IA y automatización diseñadas para impulsar tu operación
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`group relative p-6 lg:p-7 bg-zinc-900/50 border ${solution.borderColor} rounded-2xl hover:border-opacity-50 transition-all duration-500`}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${solution.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className={`w-6 h-6 ${solution.iconColor}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm lg:text-base text-zinc-300">
                      <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 pt-3 border-t border-zinc-800">
                  <ArrowRight className={`w-4 h-4 ${solution.ctaColor} group-hover:translate-x-1 transition-transform`} />
                  <p className={`text-sm lg:text-base font-medium ${solution.ctaColor}`}>
                    {solution.cta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}

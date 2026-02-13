import React, { useEffect, useRef } from 'react'
import { Target, Puzzle, Brain, TrendingUp } from 'lucide-react'

export default function WhyAgiltechSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Nodos de red (network graph)
    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 3 + 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Rebote en bordes
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mantener dentro del canvas
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00c289';
        ctx.fill();
      }
    }

    // Crear nodos
    const nodes = [];
    const nodeCount = 50;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Distancia máxima para conexiones
    const maxDistance = 150;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Actualizar y dibujar nodos
      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      // Dibujar conexiones
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 194, 137, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
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

  const reasons = [
    {
      icon: Target,
      title: "Enfoque en resultados",
      description: "No vendemos moda tecnológica. Diseñamos soluciones que impactan en eficiencia, crecimiento y rentabilidad medible.",
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400"
    },
    {
      icon: Puzzle,
      title: "Soluciones 100% personalizadas",
      description: "No hay dos negocios iguales. Cada solución se diseña desde cero, alineada a tus procesos y objetivos específicos.",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400"
    },
    {
      icon: Brain,
      title: "Integración real de IA",
      description: "IA entrenada con tus datos empresariales. No solo chatbots, sino inteligencia aplicada a decisiones y operaciones críticas.",
      gradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-400"
    },
    {
      icon: TrendingUp,
      title: "Visión estratégica + ejecución técnica",
      description: "Entendemos tu negocio tanto como la tecnología. Combinas estrategia empresarial con desarrollo de clase mundial.",
      gradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400"
    }
  ];

  return (
    <section id="why" className="relative py-6 lg:min-h-screen lg:flex lg:items-center bg-black overflow-hidden">
      {/* Canvas Network Effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-[0.2]"
        style={{ pointerEvents: 'none' }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-8">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4">
            <span className="text-sm font-medium text-white">Por Qué Elegirnos</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-light text-white mb-3">
            Agiltech es tu{' '}
            <span className="font-semibold text-[#00c289]">
              socio tecnológico
            </span>
            , no un proveedor más
          </h2>
          
          <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto">
            Trabajamos contigo para convertir la tecnología en ventaja competitiva real
          </p>
        </div>

        {/* Reasons Timeline */}
        <div className="relative max-w-4xl mx-auto">          
          <div className="space-y-8 lg:space-y-12">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="group relative flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-10"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 mx-auto lg:mx-0">
                  <div className={`relative w-20 h-20 lg:w-24 lg:h-24 ${reason.iconBg} rounded-full flex items-center justify-center border-4 border-black group-hover:scale-110 transition-transform duration-300`}>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-100 rounded-full blur-xl transition-opacity duration-500`}></div>
                    <reason.icon className={`relative w-9 h-9 lg:w-11 lg:h-11 ${reason.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 text-center lg:text-left">
                  <div className="relative">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-zinc-900 border border-zinc-800 rounded-lg mb-3">
                      <span className="text-sm font-semibold text-zinc-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-3 group-hover:text-[#00c289] transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-base lg:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {reason.description}
                    </p>

                    {/* Decorative Line */}
                    <div className={`mt-6 h-1 w-20 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 group-hover:w-32 transition-all duration-500 mx-auto lg:mx-0`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-xl lg:text-2xl font-light text-white">
            No vendemos software.{' '}
            <span className="font-semibold text-[#00c289]">
              Construimos sistemas que escalan negocios.
            </span>
          </p>
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  )
}

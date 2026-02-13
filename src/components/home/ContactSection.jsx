import React, { useEffect, useRef } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'

export default function ContactSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Partículas que convergen al centro
    class Particle {
      constructor() {
        // Empezar desde los bordes
        const side = Math.floor(Math.random() * 4);
        if (side === 0) { // top
          this.x = Math.random() * canvas.width;
          this.y = 0;
        } else if (side === 1) { // right
          this.x = canvas.width;
          this.y = Math.random() * canvas.height;
        } else if (side === 2) { // bottom
          this.x = Math.random() * canvas.width;
          this.y = canvas.height;
        } else { // left
          this.x = 0;
          this.y = Math.random() * canvas.height;
        }
        
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        const dx = centerX - this.x;
        const dy = centerY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 5) {
          this.x += (dx / distance) * this.speed;
          this.y += (dy / distance) * this.speed;
        } else {
          // Reset desde los bordes
          const side = Math.floor(Math.random() * 4);
          if (side === 0) {
            this.x = Math.random() * canvas.width;
            this.y = 0;
          } else if (side === 1) {
            this.x = canvas.width;
            this.y = Math.random() * canvas.height;
          } else if (side === 2) {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
          } else {
            this.x = 0;
            this.y = Math.random() * canvas.height;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 194, 137, ${this.opacity})`;
        ctx.fill();
      }
    }

    const particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
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

  return (
    <section id="contact" className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Canvas Converging Particles Effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-[0.25]"
        style={{ pointerEvents: 'none' }}
      />

      <div className="w-full max-w-5xl mx-auto px-6 lg:px-8 relative z-10 py-16 lg:py-20">
        
        {/* Main Content */}
        <div className="text-center space-y-8 lg:space-y-12">
          
          {/* Question */}
          <h2 className="text-3xl lg:text-6xl font-light text-white leading-tight">
            ¿Listo para{' '}
            <span className="font-semibold text-[#00c289]">
              escalar tu operación
            </span>
            {' '}con tecnología inteligente?
          </h2>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-6">
            <a 
              href="https://wa.me/573012499710?text=Hola%2C%20me%20interesa%20una%20conversaci%C3%B3n%20estrat%C3%A9gica%20sobre%20soluciones%20BusinessTech"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 lg:px-10 py-4 lg:py-5 bg-[#00c289] hover:bg-[#00d999] text-black font-semibold text-lg lg:text-xl rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 flex items-center gap-3"
            >
              <Calendar className="w-6 h-6" />
              <span>Agenda una conversación estratégica</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-zinc-500 text-sm lg:text-base">
              Hablemos de cómo la tecnología puede transformar tu negocio
            </p>
          </div>

          {/* Divider */}
          <div className="pt-8 lg:pt-12">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto"></div>
          </div>

          {/* Brand Statement */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00c289]/50"></div>
              <p className="text-2xl lg:text-3xl font-semibold text-white">
                Agiltech
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00c289]/50"></div>
            </div>
            
            <p className="text-base lg:text-lg text-zinc-400 font-light">
              BusinessTech
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 text-sm lg:text-base text-zinc-500 max-w-2xl mx-auto">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00c289] rounded-full"></div>
                Tecnología que trabaja
              </span>
              <span className="hidden lg:inline text-zinc-700">•</span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00c289] rounded-full"></div>
                IA que decide
              </span>
              <span className="hidden lg:inline text-zinc-700">•</span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00c289] rounded-full"></div>
                Resultados que escalan
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00c289]/5 rounded-full blur-3xl"></div>
    </section>
  )
}

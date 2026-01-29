import React, { useEffect, useRef } from 'react'
import { AlertCircle, Clock, TrendingDown, Zap } from 'lucide-react'

export default function ProblemSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Alertas flotantes
    class Alert {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 4;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
        this.pulseSpeed = Math.random() * 0.01 + 0.005;
        this.type = Math.floor(Math.random() * 3); // 0: circle, 1: triangle, 2: square
        this.color = Math.random() > 0.5 ? '#ef4444' : '#f97316'; // red or orange
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.opacity += this.fadeDirection * this.pulseSpeed;

        if (this.opacity >= 0.4 || this.opacity <= 0.05) {
          this.fadeDirection *= -1;
        }

        if (this.y < -50 || this.y > canvas.height + 50 || 
            this.x < -50 || this.x > canvas.width + 50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;

        if (this.type === 0) {
          // Circle
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.stroke();
        } else if (this.type === 1) {
          // Triangle (alert symbol)
          ctx.beginPath();
          ctx.moveTo(this.x, this.y - this.size);
          ctx.lineTo(this.x - this.size, this.y + this.size);
          ctx.lineTo(this.x + this.size, this.y + this.size);
          ctx.closePath();
          ctx.stroke();
          // Exclamation mark
          ctx.fillRect(this.x - 1, this.y - this.size/2, 2, this.size/2);
          ctx.fillRect(this.x - 1, this.y + this.size/3, 2, 2);
        } else {
          // Square
          ctx.strokeRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
        }

        ctx.restore();
      }
    }

    const alerts = Array(15).fill(null).map(() => new Alert());

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      alerts.forEach(alert => {
        alert.update();
        alert.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const problems = [
    {
      icon: Clock,
      text: "Operaciones manuales que consumen tiempo y dinero."
    },
    {
      icon: TrendingDown,
      text: "Ventas sin visibilidad real del pipeline."
    },
    {
      icon: Zap,
      text: "Tecnología que no escala al ritmo del negocio."
    }
  ]

  return (
    <section id="problem" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Animated Alerts Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-[0.08] lg:opacity-[0.12]"
        style={{ pointerEvents: 'none' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">El Problema</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Las empresas no fallan por falta de talento.{' '}
            <span className="text-red-400">
              Fallan por procesos lentos, sistemas desconectados y decisiones sin datos.
            </span>
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-red-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {problem.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="text-center">
          <div className="inline-block relative">
            <p className="text-2xl lg:text-3xl font-bold text-white flex items-center justify-center gap-3 flex-wrap">
              En{' '}
              <img 
                src="/logos/logo_white_variant.png" 
                alt="Agiltech" 
                className="h-7 inline-block"
              />
              {' '}
              <span className="relative">
                <span className="relative z-10">atacamos el problema de raíz.</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-500/30 -rotate-1"></span>
              </span>
            </p>
          </div>
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}

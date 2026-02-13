import { motion } from 'framer-motion';
import { ArrowRight, MagnifyingGlass } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイギルテック';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00c289';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
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

  return (
    <section id="hero" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      {/* Canvas Matrix Effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-[0.35]"
        style={{ pointerEvents: 'none' }}
      />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,194,137,.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,194,137,.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Elementos decorativos con color verde */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00c289]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00c289]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-5 md:py-20 mt-16 md:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          {/* Headline Principal */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-300 mb-11 leading-tight">
            Tecnología que escala negocios.
            <br />
            <span className="text-[#00c289]">IA que genera resultados.</span>
          </h1>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            {/* CTA Principal */}
            <a
              href="https://wa.me/573012499710?text=Hola%2C%20quiero%20explorar%20c%C3%B3mo%20Agiltech%20puede%20transformar%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-[#00c289] text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-[#00a373] transition-all duration-300 shadow-lg shadow-[#00c289]/30 hover:shadow-[#00c289]/50 hover:scale-105"
            >
              <span className="whitespace-nowrap">Agenda una conversación</span>
              <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* CTA Secundario */}
            <a
              href="#solutions"
              className="group inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-white/5 text-white border border-white/10 rounded-lg text-sm sm:text-base font-semibold hover:bg-white/10 hover:border-[#00c289]/50 transition-all duration-300"
            >
              <MagnifyingGlass size={18} weight="bold" />
              <span className="whitespace-nowrap">Explorar soluciones</span>
            </a>
          </motion.div>

          {/* Indicadores de confianza / Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 md:mt-16 flex flex-wrap gap-8 md:gap-12 justify-center items-center text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00c289] rounded-full"></div>
              <span>Soluciones personalizadas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00c289] rounded-full"></div>
              <span>Integración de IA real</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00c289] rounded-full"></div>
              <span>Resultados escalables</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#00c289] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

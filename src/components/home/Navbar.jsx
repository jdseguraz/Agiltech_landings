import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  // Transformaciones del logo basadas en el scroll
  const logoScale = useTransform(scrollY, [0, 300], [2.5, 1]);
  const logoY = useTransform(scrollY, [0, 300], isMobile ? [120, 0] : [180, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Ejecutar al inicio
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Soluciones', href: '#solutions' },
    { name: 'Cómo Trabajamos', href: '#process' },
    { name: 'Por Qué Agiltech', href: '#why' },
    { name: 'Contacto', href: '#contact' },
  ];

  // Dividir los links en dos grupos
  const leftLinks = navLinks.slice(0, 2); // Inicio, Soluciones
  const rightLinks = navLinks.slice(2); // Cómo Trabajamos, Por Qué Agiltech, Contacto

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Pequeño delay para que cierre el menú antes de navegar
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <>
      {/* Logo Animado - Capa separada */}
      <motion.a 
        href="#hero" 
        onClick={(e) => handleLinkClick(e, '#hero')}
        className="fixed z-[60] flex items-center justify-center pointer-events-auto"
        style={{
          scale: mobileMenuOpen && isMobile ? 2.5 : logoScale,
          y: mobileMenuOpen && isMobile ? (isMobile ? 120 : 180) : logoY,
          x: '-50%',
          top: 'clamp(0.25rem, 2vw, 1rem)',
          left: '50%',
        }}
      >
        <img 
          src="/logos/logo_white_variant.png" 
          alt="Agiltech Logo" 
          className="h-5 sm:h-6 md:h-7 lg:h-8 w-auto"
        />
      </motion.a>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-white/10'
            : 'bg-black md:bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:py-5">
          <div className="flex items-center justify-between">
            {/* Links Izquierda - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {leftLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Espacio para el logo centrado */}
            <div className="hidden md:block w-32"></div>

            {/* Links Derecha - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {rightLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={28} weight="bold" />
              ) : (
                <List size={28} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black pt-20">
              <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-2xl text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <motion.a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#00c289] text-white rounded-lg font-semibold hover:bg-[#00a373] transition-all duration-300 mt-4 shadow-lg shadow-[#00c289]/30"
                >
                  Agenda una Conversación
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

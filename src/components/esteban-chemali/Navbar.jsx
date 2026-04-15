import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Vista previa', href: '#demo' },
    { name: 'Cómo funciona', href: '#como-funciona' },
    { name: 'Capacidades', href: '#caracteristicas' },
    { name: 'Inversión', href: '#inversion' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-white/5 py-4'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left: nav links on desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="hidden md:flex ml-auto">
            <a
              href="https://wa.me/573012499710?text=Hola%2C%20vi%20la%20propuesta%20t%C3%A9cnica%202026%20y%20quiero%20hablar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#22c55e] hover:bg-[#16a34a] text-white text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
            >
              Agendar llamada
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors ml-auto"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors text-sm font-medium py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/573012499710?text=Hola%2C%20vi%20la%20propuesta%20t%C3%A9cnica%202026%20y%20quiero%20hablar"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-2.5 bg-[#22c55e] text-white text-sm font-semibold rounded-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agendar llamada
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

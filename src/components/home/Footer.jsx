import React from 'react'
import { Mail, Linkedin, Instagram, Twitter, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Soluciones', href: '#solutions' },
    { name: 'Proceso', href: '#process' },
    { name: 'Por Qué Nosotros', href: '#why' },
    { name: 'Contacto', href: '#contact' }
  ];

  const solutions = [
    { name: 'Inteligencia Artificial', href: '#solutions' },
    { name: 'WebApps & SaaS', href: '#solutions' },
    { name: 'Apps Móviles', href: '#solutions' },
    { name: 'Automatización', href: '#solutions' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="relative bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-white mb-2">Agiltech</h3>
            <p className="text-sm text-zinc-500 mb-4">BusinessTech</p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Tecnología que trabaja. IA que decide. Resultados que escalan.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-zinc-900 hover:bg-[#00c289] rounded-full flex items-center justify-center text-zinc-400 hover:text-black transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-[#00c289] transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Soluciones
            </h4>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <a
                    href={solution.href}
                    className="text-sm text-zinc-400 hover:text-[#00c289] transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span>{solution.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:contacto@agiltech.com"
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-[#00c289] transition-colors duration-200 group"
              >
                <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center group-hover:bg-[#00c289]/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contacto@agiltech.com</span>
              </a>
              
              <div className="pt-4">
                <a
                  href="https://wa.me/573012499710?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20llamada%20para%20conocer%20m%C3%A1s%20sobre%20Agiltech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-[#00c289] text-zinc-300 hover:text-black text-sm font-medium rounded-lg transition-all duration-300"
                >
                  <span>Agenda una llamada</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              © {currentYear} Agiltech. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-[#00c289] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-[#00c289] transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00c289]/20 to-transparent"></div>
    </footer>
  )
}

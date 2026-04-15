import React from 'react'
import { ArrowRight, CalendarDays } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative bg-[#09090b] py-24 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#22c55e]/8 rounded-full blur-[100px]" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-medium mb-8 uppercase tracking-widest">
          Próximo paso
        </span>

        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
          Agendá una llamada de
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#4ade80]">
            30 minutos.
          </span>
        </h2>

        <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Sin compromiso. En 30 minutos te mostramos el agente en vivo con tu catálogo
          de productos y acordamos el siguiente paso.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/573012499710?text=Hola%20Esteban%2C%20quiero%20agendar%20una%20demo%20de%2030%20minutos%20del%20ecommerce%20v%C3%ADa%20WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-green-500/20 text-sm"
          >
            <CalendarDays size={16} />
            Agendar demo ahora
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/573012499710?text=Hola%2C%20vi%20la%20propuesta%20y%20tengo%20preguntas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-7 py-3.5 border border-white/15 hover:border-white/30 text-zinc-300 hover:text-white font-semibold rounded-full transition-all duration-200 text-sm"
          >
            Tengo preguntas
          </a>
        </div>

        {/* Trust row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-zinc-600 text-xs">
          <span>✓ Sin compromiso</span>
          <span className="hidden sm:block">·</span>
          <span>✓ Demo en vivo con tu catálogo</span>
          <span className="hidden sm:block">·</span>
          <span>✓ Respuesta en menos de 24h</span>
        </div>
      </div>
    </section>
  )
}

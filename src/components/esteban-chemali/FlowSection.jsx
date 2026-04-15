import React from 'react'
import { User, Cpu, Search, ArrowRight, Send } from 'lucide-react'

const steps = [
  {
    icon: <User size={20} />,
    label: 'Cliente',
    title: 'El cliente escribe en WhatsApp',
    description: 'Mensaje en lenguaje natural: productos, consultas, estado de pedidos.',
  },
  {
    icon: <ArrowRight size={20} />,
    label: 'Webhook',
    title: 'El mensaje llega al backend',
    description: 'Meta WhatsApp Business API recibe el mensaje y dispara el webhook.',
  },
  {
    icon: <Cpu size={20} />,
    label: 'IA',
    title: 'El agente procesa la intención',
    description: 'Claude / GPT-4o identifica el intent y extrae los parámetros necesarios.',
  },
  {
    icon: <Search size={20} />,
    label: 'Catálogo',
    title: 'Consulta al catálogo',
    description: 'Se consulta la API del catálogo de productos con los filtros del usuario.',
  },
  {
    icon: <Send size={20} />,
    label: 'Respuesta',
    title: 'Respuesta enriquecida al usuario',
    description: 'El agente devuelve resultados, botones interactivos o confirmaciones de compra.',
  },
]

export default function FlowSection() {
  return (
    <section id="como-funciona" className="relative bg-[#09090b] py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-medium mb-5 uppercase tracking-widest">
            Flujo del sistema
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Cómo funciona
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#4ade80]">
              por dentro.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Cinco pasos entre el mensaje de tu cliente y la respuesta del agente.
          </p>
        </div>

        {/* Steps — horizontal timeline on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22c55e]/30 to-transparent z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-start lg:items-center">
                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-5 top-14 bottom-0 w-px bg-[#22c55e]/20 -z-0" />
                )}

                {/* Icon circle */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#111113] flex items-center justify-center text-[#22c55e] flex-shrink-0 mb-4 shadow-[0_0_0_1px_rgba(34,197,94,0.3),0_4px_16px_rgba(0,0,0,0.4)]">
                  {step.icon}
                  {/* Step number */}
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#22c55e] rounded-full text-white text-[9px] font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:text-center pl-4 lg:pl-0">
                  <span className="text-[#22c55e] text-xs font-bold uppercase tracking-widest">{step.label}</span>
                  <h3 className="text-white font-bold text-sm mt-1 mb-2 leading-snug">{step.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

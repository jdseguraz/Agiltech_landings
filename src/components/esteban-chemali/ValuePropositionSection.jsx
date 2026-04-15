import React from 'react'
import { MessageSquare, ShoppingBag, MapPin, Sparkles } from 'lucide-react'

const items = [
  {
    icon: <MessageSquare size={26} />,
    title: 'Canal donde ya están tus clientes',
    description:
      'El 90% de tus clientes usa WhatsApp a diario. Llevá la tienda hasta ellos — sin pedirles que descarguen nada ni que abran otra app.',
  },
  {
    icon: <ShoppingBag size={26} />,
    title: 'Compra sin fricciones',
    description:
      'Desde la búsqueda hasta el pago, todo ocurre dentro de la misma conversación. El cliente no abandona el chat en ningún punto del flujo.',
  },
  {
    icon: <MapPin size={26} />,
    title: 'Seguimiento en tiempo real',
    description:
      'Notificaciones automáticas de cada etapa del pedido. El cliente siempre sabe dónde está su compra, sin tener que preguntar.',
  },
  {
    icon: <Sparkles size={26} />,
    title: 'IA conversacional avanzada',
    description:
      'El agente entiende lenguaje natural, hace preguntas de contexto y adapta las respuestas al perfil de cada cliente.',
  },
]

export default function ValuePropositionSection() {
  return (
    <section className="relative bg-[#09090b] py-24 overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-medium mb-5 uppercase tracking-widest">
            Qué resuelve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Un canal. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#4ade80]">
              Toda la operación.
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-[#111113] rounded-2xl p-7 transition-all duration-300 shadow-[0_2px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(34,197,94,0.15)] hover:bg-[#13141a]"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-xl flex items-center justify-center text-[#22c55e] group-hover:bg-[#22c55e]/15 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

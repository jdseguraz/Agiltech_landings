import React from 'react'

const stack = [
  {
    emoji: '💬',
    layer: 'Mensajería',
    name: 'WhatsApp Business API',
    description: 'Canal de mensajería (Meta). Envío y recepción de mensajes, botones interactivos y plantillas aprobadas.',
    color: '#22c55e',
  },
  {
    emoji: '🧠',
    layer: 'IA',
    name: 'Claude / GPT-4o',
    description: 'Motor de IA conversacional. Comprensión de lenguaje natural, extracción de intents y generación de respuestas.',
    color: '#a78bfa',
  },
  {
    emoji: '🛍️',
    layer: 'Catálogo',
    name: 'Amazon SP-API',
    description: 'Catálogo, órdenes y tracking. Búsqueda de productos, gestión de pedidos y estado de envíos en tiempo real.',
    color: '#fb923c',
  },
  {
    emoji: '⚙️',
    layer: 'Backend',
    name: 'Node.js / Python',
    description: 'Backend del agente y webhook. Orquestación de flujos conversacionales y lógica de negocio.',
    color: '#38bdf8',
  },
  {
    emoji: '🗄️',
    layer: 'Base de datos',
    name: 'PostgreSQL + Redis',
    description: 'Sesiones, historial y caché. Persistencia de conversaciones y respuestas rápidas para consultas frecuentes.',
    color: '#f472b6',
  },
  {
    emoji: '☁️',
    layer: 'Infraestructura',
    name: 'AWS / GCP',
    description: 'Infraestructura cloud escalable. Auto-scaling por volumen de mensajes y alta disponibilidad garantizada.',
    color: '#fbbf24',
  },
]

export default function TechStackSection() {
  return (
    <section className="relative bg-[#09090b] py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-medium mb-5 uppercase tracking-widest">
            Stack técnico propuesto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Tecnología de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#4ade80]">
              nivel enterprise.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Cada componente elegido por estabilidad, escala y soporte a largo plazo.
          </p>
        </div>

        {/* Stack list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map((item, i) => (
            <div
              key={i}
              className="group bg-[#111113] rounded-2xl p-6 transition-all duration-300 shadow-[0_2px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              {/* Emoji + layer badge row */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl leading-none">{item.emoji}</span>
                <span
                  className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    backgroundColor: `${item.color}18`,
                    color: item.color,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  {item.layer}
                </span>
              </div>

              <h3 className="text-white font-bold text-base mb-2">{item.name}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

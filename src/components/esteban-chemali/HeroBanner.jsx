import React from 'react'
import { ArrowRight, Check, Zap } from 'lucide-react'

export default function HeroBanner() {
  const features = [
    'Descubrí productos sin salir de WhatsApp',
    'Compra y pago 100% dentro del chat',
    'Tracking de pedidos en tiempo real',
    'Devoluciones gestionadas por el agente IA',
    'Recomendaciones personalizadas por historial',
    'Multi-idioma: español e inglés',
  ]

  return (
    <section className="relative min-h-screen bg-[#09090b] flex items-center overflow-hidden pt-24 pb-20">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#22c55e]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#16a34a]/8 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
            <span className="text-zinc-300 text-sm font-medium">Propuesta técnica 2026</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Tu tienda.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#4ade80]">
                Dentro de
              </span>
              <br />
              WhatsApp.
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
              Un agente de IA conversacional que permite a tus clientes buscar, comprar
              y rastrear pedidos — sin apps, sin registros, sin fricción.
              Donde ya están: en WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/573012499710?text=Hola%2C%20vi%20la%20propuesta%20de%20ecommerce%20v%C3%ADa%20WhatsApp%20y%20quiero%20hablar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-green-500/20 text-sm"
              >
                Agendar reunión
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#como-funciona"
                className="flex items-center justify-center px-7 py-3.5 border border-white/15 hover:border-white/30 text-zinc-300 hover:text-white font-semibold rounded-full transition-all duration-200 text-sm"
              >
                Ver cómo funciona
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-2">
              {[
                { val: '2B+', label: 'Usuarios WhatsApp' },
                { val: '98%', label: 'Tasa apertura' },
                { val: '3×', label: 'Más conversión' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-black text-white">{s.val}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — feature card */}
          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-[#22c55e]/10 rounded-3xl blur-3xl scale-95" />

            <div className="relative bg-[#111113] rounded-3xl p-8 backdrop-blur-sm shadow-[0_4px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 h-6 bg-white/5 rounded-full flex items-center px-3">
                  <span className="text-xs text-zinc-500">whatsapp-commerce-ia · feature list</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3.5">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 flex items-center justify-center">
                      <Check size={11} className="text-[#22c55e]" strokeWidth={3} />
                    </div>
                    <span className="text-zinc-300 text-sm font-medium group-hover:text-white transition-colors">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom tags */}
              <div className="mt-7 pt-6 border-t border-white/8 flex flex-wrap gap-2">
                {['WhatsApp API', 'Claude AI', 'Node.js', 'PostgreSQL', 'AWS'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 text-zinc-400 text-xs rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none" />
    </section>
  )
}

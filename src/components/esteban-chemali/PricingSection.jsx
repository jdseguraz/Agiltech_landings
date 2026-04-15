import React from 'react'
import { Check, Zap, ArrowRight } from 'lucide-react'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$5,500',
    currency: 'USD',
    description: 'Para validar el canal y comenzar a operar.',
    users: 'Hasta 500 usuarios/mes',
    support: '30 días post-lanzamiento',
    features: [
      'Agente IA conversacional básico',
      'Búsqueda de productos por texto y categoría',
      'Checkout completo dentro del chat',
      'Tracking de pedidos en tiempo real',
      'Notificaciones automáticas de envío',
      'Autenticación OAuth',
      'Multi-idioma ES / EN',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    price: '$10,500',
    currency: 'USD',
    description: 'Para operaciones en crecimiento con IA avanzada.',
    users: 'Usuarios ilimitados',
    support: '60 días post-lanzamiento',
    recommended: true,
    features: [
      'Todo lo del plan Starter',
      'Recomendaciones personalizadas con IA',
      'Notificaciones proactivas de ofertas',
      'Devoluciones automatizadas',
      'Dashboard de analytics en tiempo real',
      'Escalado a agente humano con contexto',
      'Filtros avanzados por precio, marca y rating',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'A medida',
    currency: '',
    description: 'Multi-tienda, CRM/ERP y SLA garantizado.',
    users: 'Infraestructura dedicada',
    support: '90 días + SLA 99.9%',
    features: [
      'Todo lo del plan Business',
      'Multi-tienda y multi-catálogo',
      'Integración con CRM y ERP existentes',
      'SLA garantizado 99.9% uptime',
      'Infraestructura cloud dedicada',
      'Onboarding y capacitación del equipo',
      'Account manager dedicado',
    ],
  },
]

export default function PricingSection() {
  return (
    <section id="inversion" className="relative bg-[#09090b] py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-medium mb-5 uppercase tracking-widest">
            Modelos de precio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Inversión única.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#4ade80]">
              Sin comisiones.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Pagás una vez y la plataforma es tuya. Sin sorpresas, sin porcentaje por transacción.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 ${
                plan.recommended
                  ? 'bg-[#111113] shadow-[0_0_0_1px_rgba(34,197,94,0.4),0_8px_40px_rgba(34,197,94,0.12),inset_0_1px_0_rgba(255,255,255,0.06)]'
                  : 'bg-[#111113] shadow-[0_2px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 px-3.5 py-1.5 bg-[#22c55e] text-white text-xs font-bold rounded-full">
                    <Zap size={11} fill="white" />
                    Recomendado
                  </span>
                </div>
              )}

              {/* Plan info */}
              <div className="mb-5">
                <h3 className="text-white font-bold text-lg">{plan.name}</h3>
                <p className="text-zinc-500 text-sm mt-1">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-5">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  {plan.currency && <span className="text-zinc-500 text-base font-medium">{plan.currency}</span>}
                </div>
                <p className="text-xs text-zinc-600 mt-1">Implementación única</p>
              </div>

              {/* Tags */}
              <div className="flex flex-col gap-2 mb-6">
                <span className="text-xs text-[#22c55e] bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full px-3 py-1 w-fit">
                  {plan.users}
                </span>
                <span className="text-xs text-zinc-500 bg-white/5 border border-white/8 rounded-full px-3 py-1 w-fit">
                  {plan.support}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 flex items-center justify-center mt-0.5">
                      <Check size={9} className="text-[#22c55e]" strokeWidth={3} />
                    </div>
                    <span className="text-zinc-400 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/573012499710?text=Hola%2C%20quiero%20hablar%20sobre%20el%20plan%20de%20ecommerce%20v%C3%ADa%20WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  plan.recommended
                    ? 'bg-[#22c55e] hover:bg-[#16a34a] text-white hover:shadow-lg hover:shadow-green-500/20'
                    : 'border border-white/15 hover:border-white/30 text-zinc-300 hover:text-white'
                }`}
              >
                {plan.id === 'enterprise' ? 'Hablemos' : 'Elegir plan'}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-zinc-600 mt-8">
          * Precios en USD. Incluyen infraestructura cloud, integración con WhatsApp Business API y onboarding técnico.
        </p>
      </div>
    </section>
  )
}

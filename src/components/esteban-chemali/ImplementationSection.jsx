import React from 'react'
import { Check } from 'lucide-react'

const phases = [
  {
    phase: 'Fase 1',
    weeks: 'Semanas 1–2',
    title: 'Setup e integración base',
    deliverables: [
      'Configuración de WhatsApp Business API',
      'Arquitectura del backend y base de datos',
      'Integración con el catálogo de productos',
      'Entorno de staging listo para pruebas',
    ],
  },
  {
    phase: 'Fase 2',
    weeks: 'Semanas 3–4',
    title: 'Flujos conversacionales IA',
    deliverables: [
      'Motor de comprensión de lenguaje natural',
      'Flujo de búsqueda y selección de productos',
      'Gestión de carrito dentro del chat',
      'Tests de conversación en staging',
    ],
  },
  {
    phase: 'Fase 3',
    weeks: 'Semanas 5–6',
    title: 'Checkout, pagos y post-venta',
    deliverables: [
      'Flujo de confirmación y pago integrado',
      'Sistema de tracking con notificaciones',
      'Gestión de devoluciones automatizada',
      'Dashboard de analíticas básico',
    ],
  },
  {
    phase: 'Fase 4',
    weeks: 'Semanas 7–8',
    title: 'QA, ajustes y lanzamiento',
    deliverables: [
      'Pruebas de carga y stress testing',
      'Ajustes de UX conversacional',
      'Despliegue en producción',
      'Onboarding del equipo y documentación',
    ],
  },
]

export default function ImplementationSection() {
  return (
    <section className="relative bg-[#09090b] py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-medium mb-5 uppercase tracking-widest">
            Fases de implementación
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            De cero a producción
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#4ade80]">
              en 8 semanas.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Un plan claro con entregables concretos en cada fase.
          </p>
        </div>

        {/* Phases grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="bg-[#111113] rounded-2xl p-7 transition-all duration-300 group shadow-[0_2px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(34,197,94,0.12)]"
            >
              {/* Phase header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-[#22c55e] text-xs font-bold uppercase tracking-widest">{phase.phase}</span>
                  <h3 className="text-white font-bold text-base mt-1">{phase.title}</h3>
                </div>
                <span className="text-xs text-zinc-500 bg-white/5 border border-white/8 rounded-full px-3 py-1 flex-shrink-0">
                  {phase.weeks}
                </span>
              </div>

              {/* Deliverables */}
              <ul className="space-y-2.5">
                {phase.deliverables.map((d, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#22c55e]/15 border border-[#22c55e]/30 flex items-center justify-center mt-0.5">
                      <Check size={9} className="text-[#22c55e]" strokeWidth={3} />
                    </div>
                    <span className="text-zinc-400 text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

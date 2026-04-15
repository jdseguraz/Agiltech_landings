import React from 'react'
import { Search, ShoppingCart, Package, Bell, RotateCcw, Star, ShieldCheck } from 'lucide-react'

const capabilities = [
  {
    icon: <Search size={20} />,
    title: 'Búsqueda de productos',
    description: 'Por texto, categoría, rango de precio, marca y rating. Filtros aplicados en lenguaje natural.',
  },
  {
    icon: <ShoppingCart size={20} />,
    title: 'Gestión del carrito',
    description: 'Agregar, quitar y modificar productos. El agente mantiene el contexto durante toda la conversación.',
  },
  {
    icon: <Package size={20} />,
    title: 'Tracking de pedidos',
    description: 'Estado en tiempo real con fecha estimada de entrega. El cliente consulta con un mensaje.',
  },
  {
    icon: <Bell size={20} />,
    title: 'Notificaciones proactivas',
    description: 'Alertas automáticas cuando el pedido es despachado, en camino o entregado.',
  },
  {
    icon: <RotateCcw size={20} />,
    title: 'Gestión de devoluciones',
    description: 'Inicio de devolución, generación de etiqueta y confirmación de reembolso — sin salir del chat.',
  },
  {
    icon: <Star size={20} />,
    title: 'Recomendaciones personalizadas',
    description: 'Sugerencias basadas en historial de compras y preferencias del usuario.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Vinculación segura de cuentas',
    description: 'Autenticación OAuth. Datos de pago cifrados. Cumplimiento PCI DSS.',
  },
]

export default function Features() {
  return (
    <section id="caracteristicas" className="relative bg-[#09090b] py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-medium mb-5 uppercase tracking-widest">
            Capacidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            ¿Qué puede hacer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#4ade80]">
              el agente?
            </span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Siete capacidades que cubren el ciclo de compra completo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className={`group bg-[#111113] rounded-2xl p-6 transition-all duration-300 shadow-[0_2px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(34,197,94,0.15)] hover:bg-[#13141a] ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-10 h-10 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-xl flex items-center justify-center text-[#22c55e] mb-4 group-hover:bg-[#22c55e]/15 transition-colors">
                {cap.icon}
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{cap.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Search, ShoppingCart, CreditCard, Package, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: <Search size={32} />,
      title: 'El cliente busca',
      description:
        'Tu cliente escribe en WhatsApp lo que necesita en lenguaje natural: "Quiero unas zapatillas Nike talla 42 menos de $150". El agente IA procesa la intención al instante.',
      tag: 'Lenguaje Natural',
    },
    {
      number: '02',
      icon: <ShoppingCart size={32} />,
      title: 'El agente encuentra',
      description:
        'En segundos, el agente responde con opciones filtradas por precio, marca, categoría y rating. El cliente elige directamente dentro del chat con botones interactivos.',
      tag: 'IA en tiempo real',
    },
    {
      number: '03',
      icon: <CreditCard size={32} />,
      title: 'Compra sin salir del chat',
      description:
        'El cliente confirma la compra, elige el método de pago y completa la transacción 100% dentro de WhatsApp. Sin redireccionamientos. Sin formularios.',
      tag: 'Checkout integrado',
    },
    {
      number: '04',
      icon: <Package size={32} />,
      title: 'Seguimiento automático',
      description:
        'Notificaciones automáticas de despacho y entrega. El cliente puede consultar el estado de su pedido, iniciar una devolución o pedir soporte — todo desde el mismo chat.',
      tag: 'Post-venta sin fricción',
    },
  ]

  return (
    <section id="como-funciona" className="relative bg-white py-20 overflow-hidden">
      {/* Floating circles decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-[#30f2ab] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 border-4 border-[#25c5ad] rounded-full opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-gradient-to-r from-[#30f2ab]/20 to-[#25c5ad]/20 text-[#25c5ad] rounded-full text-sm font-semibold">
            El flujo completo
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            De la búsqueda a la entrega.
            <span className="block bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] bg-clip-text text-transparent">
              Todo en WhatsApp.
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Un flujo conversacional diseñado para convertir, no para complicar.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector arrow (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-12 -right-3 z-20 w-6 items-center justify-center">
                  <ArrowRight size={20} className="text-[#25c5ad]" />
                </div>
              )}

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 border-2 border-gray-100 hover:border-[#25c5ad] hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Step number */}
                <div className="text-5xl font-black text-gray-100 mb-2 leading-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#30f2ab]/20 to-[#25c5ad]/20 rounded-2xl flex items-center justify-center text-[#25c5ad] mb-4">
                  {step.icon}
                </div>

                {/* Tag */}
                <span className="px-3 py-1 bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] text-white text-xs font-semibold rounded-full w-fit mb-3">
                  {step.tag}
                </span>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] rounded-3xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[
              { value: '< 30s', label: 'Tiempo promedio de compra' },
              { value: '98%', label: 'Tasa de apertura de mensajes' },
              { value: '3×', label: 'Mayor conversión vs web' },
              { value: '0', label: 'Apps adicionales requeridas' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-black">{stat.value}</div>
                <div className="text-sm mt-1 text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

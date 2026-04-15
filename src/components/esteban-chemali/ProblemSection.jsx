import React from 'react'
import { Download, UserPlus, CreditCard, RefreshCw, TrendingDown } from 'lucide-react'

export default function ProblemSection() {
  const problems = [
    {
      icon: <Download size={28} />,
      title: 'Apps que nadie quiere descargar',
      description: 'El 70% de los usuarios abandona antes de completar la instalación de una nueva app de ecommerce.',
    },
    {
      icon: <UserPlus size={28} />,
      title: 'Registros interminables',
      description: 'Formularios largos, verificación de email, contraseñas. Cada paso suma fricción y reduce conversión.',
    },
    {
      icon: <CreditCard size={28} />,
      title: 'Checkouts que espantan',
      description: 'El 69% de los carritos de compra se abandona en el proceso de pago. La fricción mata las ventas.',
    },
    {
      icon: <TrendingDown size={28} />,
      title: 'Tus clientes ya están en otro lado',
      description: 'Mientras tu tienda compite por atención, tus clientes pasan horas diarias en WhatsApp. ¿Por qué no estar donde ya están?',
    },
  ]

  return (
    <section id="problema" className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-10 right-10 w-40 h-40 border-4 border-[#30f2ab] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-28 h-28 border-4 border-[#25c5ad] rounded-full opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-red-50 text-red-500 rounded-full text-sm font-semibold">
            El problema real
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            El ecommerce tradicional
            <span className="block text-red-400">tiene demasiada fricción.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Cada paso adicional entre tu cliente y la compra es una oportunidad de perderlo.
            Y hoy, los tienes perdiendo tiempo en un canal que no es el tuyo.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border-2 border-red-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-400">
                {problem.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge to solution */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-xl font-bold text-gray-800">
              ¿Y si en lugar de llevar a tus clientes a tu tienda, llevas la tienda a donde ya están tus clientes?
            </p>
            <a
              href="#como-funciona"
              className="px-8 py-4 bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Ver la solución
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

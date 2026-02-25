import React from 'react'
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react'

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnóstico Estratégico",
      description: "Entendemos tu negocio, procesos y objetivos.",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30"
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Diseño de Solución",
      description: "Arquitectura tecnológica alineada a resultados.",
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Implementación Ágil",
      description: "Desarrollo, integración y despliegue.",
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-400",
      borderColor: "border-orange-500/30"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Optimización Continua",
      description: "Medimos, ajustamos y escalamos.",
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-400",
      borderColor: "border-green-500/30"
    }
  ]

  return (
    <section id="process" className="relative py-20 lg:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-white">Nuestra Metodología</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-semibold text-white mb-4">
            Cómo Trabajamos
          </h2>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Un proceso probado que convierte tecnología en resultados medibles
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 opacity-20"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group relative h-full"
              >
                {/* Card */}
                <div className={`relative h-full bg-zinc-900/30 border ${step.borderColor} rounded-2xl p-6 lg:p-8 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col`}>
                  
                  {/* Number Badge */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-0.5`}>
                      <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="absolute -top-2 -right-2">
                      <div className={`w-10 h-10 rounded-xl bg-black border-2 ${step.borderColor} flex items-center justify-center`}>
                        <step.icon className={`w-5 h-5 ${step.iconColor}`} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
                </div>

                {/* Arrow Connector - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[4.5rem] -right-3 z-10 -translate-y-1/2">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center rotate-90`}>
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}

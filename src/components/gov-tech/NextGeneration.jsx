import React from 'react'
import { Sparkles, MousePointer, MessagesSquare, Image, Video, Headphones, FileQuestion } from 'lucide-react'

export default function NextGeneration() {
  const features = [
    { icon: <MousePointer size={24} />, label: 'Botones interactivos' },
    { icon: <FileQuestion size={24} />, label: 'Cuestionarios' },
    { icon: <Image size={24} />, label: 'Imágenes' },
    { icon: <Headphones size={24} />, label: 'Audios' },
    { icon: <Video size={24} />, label: 'Videos' }
  ]

  return (
    <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
      {/* Animated circles decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-[#30f2ab] rounded-full animate-float-slow opacity-20 md:opacity-100"></div>
      <div className="absolute bottom-32 left-20 w-40 h-40 border-[5px] border-[#25c5ad] rounded-full animate-float opacity-20 md:opacity-100"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 border-4 border-[#30f2ab] rounded-full animate-float-delayed opacity-20 md:opacity-100"></div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#30f2ab]/10 to-[#25c5ad]/10 rounded-full">
              <Sparkles className="text-[#25c5ad]" size={20} />
              <span className="text-sm font-semibold text-[#25c5ad]">Innovación</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              WhatIA es la{' '}
              <span className="relative inline-block">
                próxima generación
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4C50 2 100 2 150 4C170 5 190 6 200 4" stroke="url(#gradient)" strokeWidth="3" fill="none"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#30f2ab" />
                      <stop offset="100%" stopColor="#25c5ad" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Te ayudamos a hacer crecer tu red de contactos partiendo de un nodo principal, 
                ayudando así a expandir la red con tan solo una acción{' '}
                <span className="font-bold text-[#25c5ad]">"CLIC"</span>.
              </p>

              <p className="text-lg leading-relaxed">
                Nuestra plataforma te permite interactuar de manera bidireccional con las personas, 
                ayudando a dicha interacción a través de:
              </p>
            </div>

            {/* Interactive features list */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:border-[#25c5ad] hover:bg-[#25c5ad]/5 transition-all duration-200"
                >
                  <span className="text-[#25c5ad]">{feature.icon}</span>
                  <span className="text-base font-medium text-gray-700">{feature.label}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#30f2ab]/10 to-[#25c5ad]/10 rounded-full border border-[#25c5ad]/30">
                <span className="text-base font-semibold text-[#25c5ad]">y mucho más</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="https://wa.me/573012499710?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20WhatIA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Descubre más
              </a>
            </div>
          </div>

          {/* Right Column - Visual Representation */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Network visualization - Simplified */}
              <div className="relative flex items-center justify-center h-80 bg-gradient-to-br rounded-3xl p-8">
                {/* Central node - You */}
                <div className="absolute z-20 flex flex-col items-center" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="w-24 h-24 bg-gradient-to-br from-[#30f2ab] to-[#25c5ad] rounded-full flex items-center justify-center shadow-xl mb-2">
                    <MessagesSquare className="text-white" size={36} />
                  </div>
                  <span className="text-xs font-bold text-gray-700 bg-white px-3 py-1 rounded-full shadow">Tú</span>
                </div>

                {/* Level 1 - 3 nodes */}
                {[...Array(3)].map((_, index) => {
                  const angle = (index * 120 - 90) * (Math.PI / 180)
                  const radius = 100
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius
                  
                  return (
                    <div
                      key={`l1-${index}`}
                      className="absolute z-10 flex flex-col items-center"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="w-14 h-14 bg-white border-4 border-[#30f2ab] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm font-bold text-[#25c5ad]">3</span>
                      </div>
                    </div>
                  )
                })}

                {/* Level 2 - Outer nodes */}
                {[...Array(6)].map((_, index) => {
                  const angle = (index * 60) * (Math.PI / 180)
                  const radius = 160
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius
                  
                  return (
                    <div
                      key={`l2-${index}`}
                      className="absolute z-5"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="w-10 h-10 bg-white border-3 border-[#25c5ad]/60 rounded-full flex items-center justify-center shadow">
                        <span className="text-xs font-bold text-[#25c5ad]/70">9</span>
                      </div>
                    </div>
                  )
                })}

                {/* Connection lines from center */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  {[...Array(3)].map((_, index) => {
                    const angle = (index * 120 - 90) * (Math.PI / 180)
                    const radius = 100
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius
                    
                    return (
                      <line
                        key={`line-${index}`}
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${x}px)`}
                        y2={`calc(50% + ${y}px)`}
                        stroke="#30f2ab"
                        strokeWidth="3"
                        opacity="0.4"
                      />
                    )
                  })}
                </svg>
              </div>

              {/* Explanation */}
              <div className="text-center mt-6 space-y-2">
                <p className="text-base font-bold text-gray-900">
                  Efecto multiplicador: 1 → 3 → 9 → 27...
                </p>
                <p className="text-sm text-gray-600">
                  Cada contacto comparte con 3 más, crecimiento exponencial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

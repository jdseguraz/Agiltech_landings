import React from 'react'
import { Play, Trophy, Handshake, MessageCircle } from 'lucide-react'
import { UsersThree, PaperPlaneTilt } from '@phosphor-icons/react'

export default function HowItWorks() {
  return (
    <section id="howitworks" className="relative bg-gray-50 min-h-screen flex items-center overflow-hidden">
      {/* Animated circles decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#30f2ab] rounded-full animate-float opacity-20 md:opacity-100"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border-4 border-[#25c5ad] rounded-full animate-float-delayed opacity-20 md:opacity-100"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 border-[5px] border-[#30f2ab] rounded-full animate-float-slow opacity-20 md:opacity-100"></div>
      <div className="absolute bottom-40 right-1/3 w-20 h-20 border-4 border-[#25c5ad] rounded-full animate-float opacity-20 md:opacity-100"></div>
      <div className="absolute top-1/3 left-1/2 w-16 h-16 border-3 border-[#30f2ab] rounded-full animate-float-delayed opacity-20 md:opacity-100"></div>
      <div className="absolute top-2/3 right-10 w-28 h-28 border-4 border-[#25c5ad] rounded-full animate-float-slow opacity-20 md:opacity-100"></div>
      
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 py-12 relative z-10 w-full">
        <div className="space-y-12">
          
          {/* Top Section - Text and Video */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Comunicaciones a gran escala de forma eficaz
              </h2>
              
              <p className="text-lg text-gray-600 font-medium">
                Conoce cómo funciona
              </p>

              <p className="text-base text-gray-600 leading-relaxed">
                Descubre cómo WhatIA revoluciona las campañas políticas con WhatsApp, 
                permitiendo comunicación directa, eficaz y en tiempo real con tu audiencia.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/573012499710?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20de%20WhatIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-200 text-center text-sm"
                >
                  Solicitar Demo
                </a>
                <a
                  href="#soluciones"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-[#25c5ad] hover:text-[#25c5ad] transition-all duration-200 text-center text-sm"
                >
                  Ver más funciones
                </a>
              </div>
            </div>

            {/* Right Column - Mobile Video Frame */}
            <div className="flex justify-center items-center lg:justify-end">
              <div className="relative">
                {/* Mobile frame mockup - smaller size */}
                <div className="relative w-[240px] h-[480px] md:w-[260px] md:h-[520px] bg-gray-900 rounded-[2.5rem] shadow-2xl p-2.5 border-[6px] border-gray-800">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                  
                  {/* Screen */}
                  <div className="relative w-full h-full bg-black rounded-[2rem] overflow-hidden">
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    >
                      <source src="/WhatIdeaPol_VideoIntro.mp4" type="video/mp4" />
                      Tu navegador no soporta el tag de video.
                    </video>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#30f2ab]/20 to-[#25c5ad]/20 rounded-[3rem] blur-3xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Stats Grid Full Width */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
            {[
              { 
                number: '90%', 
                label: 'de la población online usa WhatsApp',
                icon: <UsersThree size={48} weight="regular" />
              },
              { 
                number: '#1', 
                label: 'Canal de comunicación más usado a nivel global',
                icon: <Trophy size={48} />
              },
              { 
                number: '100%', 
                label: 'de recepción en envíos masivos',
                icon: <PaperPlaneTilt size={48} weight="regular" />
              },
              { 
                number: '+ de 500', 
                label: 'clientes confían en nosotros',
                icon: <Handshake size={48} />
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center space-y-3 hover:scale-105 transition-transform duration-200"
              >
                <div className="text-[#25c5ad]">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#25c5ad]">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

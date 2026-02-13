import React from 'react'
import { Check, ArrowRight } from 'lucide-react'

export default function HeroBanner() {
  const features = [
    'Campañas políticas con Whatsapp',
    'Crecimiento orgánico con factor multiplicador multinivel a través de 100% Whatsapp',
    'La única plataforma 100% basada en WhatsApp API, FB e Instagram',
    'Organización territorial inteligente Geolocalizada',
    'Comunicación microsegmentada',
    'Analítica política avanzada en tiempo real',
    'IA Multimodal',
    'Día D'
  ]

  return (
    <section className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#30f2ab] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#25c5ad] opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-[#30f2ab]/20 to-[#25c5ad]/20 text-[#25c5ad] rounded-full text-base font-semibold">
                Sistema de Inteligencia Electoral
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              WhatIA: Sistema de Inteligencia Electoral Multinivel Georeferenciada 100% vía Whatsapp.
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              La plataforma más avanzada para gestionar campañas políticas a través de WhatsApp, 
              con analítica en tiempo real e inteligencia artificial.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/573012499710?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20de%20WhatIA"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Solicitar Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#funcionalidades"
                className="px-8 py-4 border-2 border-[#25c5ad] text-[#25c5ad] font-semibold rounded-full hover:bg-[#25c5ad]/5 transition-all duration-200 flex items-center justify-center"
              >
                Conoce más
              </a>
            </div>
          </div>

          {/* Right Column - Features List */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-200"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] flex items-center justify-center shadow-lg">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Basado en WhatsApp
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] bg-clip-text text-transparent">
                  Real-Time
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Analítica Avanzada
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  )
}

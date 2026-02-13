import React from 'react'
import { TrendingUp, Shield, Users, Brain } from 'lucide-react'

export default function OrganicGrowth() {
  return (
    <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
      {/* Animated circles decoration */}
      <div className="absolute top-32 left-1/4 w-28 h-28 border-4 border-[#30f2ab] rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-36 h-36 border-[5px] border-[#25c5ad] rounded-full animate-float-slow"></div>
      
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left - Icons */}
          <div className="lg:col-span-3 flex lg:flex-col flex-row flex-wrap gap-6 justify-center">
            {[
              { icon: <TrendingUp size={32} /> },
              { icon: <Shield size={32} /> },
              { icon: <Users size={32} /> },
              { icon: <Brain size={32} /> }
            ].map((item, index) => (
              <div 
                key={index}
                className={`w-16 h-16 bg-gradient-to-br from-[#30f2ab]/10 to-[#25c5ad]/10 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200 animate-fade-in-up animation-delay-${index * 200}`}
              >
                <span className="text-[#25c5ad]">{item.icon}</span>
              </div>
            ))}
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-400">
              Crecimiento orgánico y veraz
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed animate-fade-in animation-delay-800">
              GovWapp te garantiza hacer crecer tu red de forma orgánica y organizada a través de datos reales y sin margen de error. 
              Las personas se unen a la red por voluntad propia a través de una invitación de WhatsApp, el software utiliza además 
              la inteligencia artificial para la predictibilidad de datos, datos de los que creemos no disponemos, pero que en realidad sí lo hacemos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

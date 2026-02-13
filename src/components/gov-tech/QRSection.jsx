import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function QRSection() {
  return (
    <section className="relative bg-white py-20 overflow-visible">
      {/* Green background bar with texture - only 400px high */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[400px] bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] overflow-hidden">
        {/* Dot pattern texture */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}></div>
        {/* Larger dots pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 2px, transparent 2px)`,
          backgroundSize: '48px 48px',
          backgroundPosition: '12px 12px'
        }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text */}
          <div className="flex items-center justify-center">
            <p className="text-xl md:text-2xl text-[#1a5f4a] font-semibold leading-relaxed max-w-xl text-center">
              Utilice sus redes para promocionarse y redirigir a sus seguidores a su red, 
              tan solo habilitando el botón de WhatsApp en sus redes, compartiendo un link 
              o a través de su propio código QR.
            </p>
          </div>

          {/* Right Column - Phone that overflows */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame - will overflow the green section */}
              <div className="relative w-[260px] h-[520px] bg-gray-900 rounded-[2.5rem] shadow-2xl p-2.5 border-[6px] border-gray-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                
                {/* Screen */}
                <div className="relative w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col items-center justify-center p-8">
                  {/* Logo */}
                  <div className="mb-6 text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] bg-clip-text text-transparent mb-2">
                      GovWapp
                    </div>
                    <p className="text-xs text-gray-600">Escanea para conectar</p>
                  </div>

                  {/* QR Code Image */}
                  <div className="relative w-40 h-40 bg-white p-3 rounded-xl shadow-lg border-2 border-gray-100 flex items-center justify-center">
                    <img 
                      src="/src/assets/gov-tech/images/qr_code.png" 
                      alt="QR Code" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* WhatsApp icon */}
                  <div className="mt-6 w-12 h-12 bg-gradient-to-br from-[#30f2ab] to-[#25c5ad] rounded-full flex items-center justify-center shadow-lg">
                    <MessageCircle className="text-white" size={24} fill="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

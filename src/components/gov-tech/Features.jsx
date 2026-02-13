import React from 'react'
import { MessageSquare, BarChart3, Target, Users, Headset, Share2, MapPin, User, TrendingUp, Brain, Instagram } from 'lucide-react'

export default function Features() {
  const segmentationTypes = [
    { icon: <MapPin size={18} />, label: 'Geográfica' },
    { icon: <User size={18} />, label: 'Demográfica' },
    { icon: <TrendingUp size={18} />, label: 'Conductual' },
    { icon: <Brain size={18} />, label: 'Psicográfica' },
    { icon: <Instagram size={18} />, label: 'Redes sociales' }
  ]

  const features = [
    {
      icon: <MessageSquare size={32} />,
      title: 'Comunicaciones a gran escala',
      description: 'Inicia y gestiona conversaciones fácilmente con miles de personas mediante automatización, chatbots y flujos conversacionales personalizados. Consolida la comunicación con tus seguidores de Facebook e Instagram. WhatsApp te permite aumentar hasta 10 veces el número de seguidores utilizando una comunicación bilateral y personalizada.',
      highlight: '10x seguidores'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Analiza datos reales',
      description: 'Las estadísticas te permiten tomar decisiones en función de datos reales. Parametriza la información para su posterior segmentación:',
      hasSegmentation: true
    },
    {
      icon: <Target size={32} />,
      title: 'Microsegmentación masiva',
      description: 'Comuníquese con sus contactos enviando un mensaje claro y personalizado que permita generar cercanía. Envíe mensajes a grupos poblacionales concretos, en un área geográfica o de un género determinado. A tan solo un clic, con un índice de recepción del 100%.',
      highlight: '100% recepción'
    },
    {
      icon: <Users size={32} />,
      title: 'Analiza tu red de contacto',
      description: 'Conoce el comportamiento de tu red. Identifica quien ayuda a promover tu red con mayor intensidad. Analiza qué persona genera un mayor flujo de inscritos y cuantas veces comparte tu contacto. Ayúdales a potenciar tu red a través de la difusión de noticias, encuestas, concursos.'
    },
    {
      icon: <Headset size={32} />,
      title: 'Soporte en línea vía chat',
      description: 'Habla e interactúa con tu red. Fomenta una comunicación personal y real. Envía plantillas personalizadas de respuesta, o genera flujos conversacionales a través de palabras clave y botones interactivos. Ofrece soporte personalizado a través de agentes.'
    },
    {
      icon: <Share2 size={32} />,
      title: 'Integración con redes sociales',
      description: 'Utilice sus redes para promocionarse y redirigir a sus seguidores, tan solo habilitando el botón de WhatsApp en sus redes, compartiendo un link o a través de su propio código QR.'
    }
  ]

  return (
    <section id="features" className="relative bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden">
      {/* Animated circles decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-[#30f2ab] rounded-full animate-float opacity-20 md:opacity-100"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 border-[5px] border-[#25c5ad] rounded-full animate-float-slow opacity-20 md:opacity-100"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-[#30f2ab] rounded-full animate-float-delayed opacity-20 md:opacity-100"></div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Lleva tu red de contactos a otro nivel
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Conoce cómo funciona
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white p-6 md:p-8 rounded-3xl border-2 border-gray-100 hover:border-[#25c5ad] hover:shadow-xl transition-all duration-300 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#30f2ab]/20 to-[#25c5ad]/20 rounded-2xl flex items-center justify-center">
                  <span className="text-[#25c5ad]">{feature.icon}</span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3 md:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    {feature.highlight && (
                      <span className="px-3 py-1 bg-gradient-to-r from-[#30f2ab] to-[#25c5ad] text-white text-sm font-semibold rounded-full inline-block w-fit">
                        {feature.highlight}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Segmentation badges */}
                  {feature.hasSegmentation && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {segmentationTypes.map((type, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-full border border-gray-200 hover:border-[#25c5ad] hover:bg-[#25c5ad]/5 transition-all"
                        >
                          <span className="text-[#25c5ad]">{type.icon}</span>
                          <span className="text-base font-medium text-gray-700">{type.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

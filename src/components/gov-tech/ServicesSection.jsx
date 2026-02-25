import React, { useState } from 'react'
import { User, Bank, Briefcase, X } from '@phosphor-icons/react'

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      id: 'candidaturas',
      icon: User,
      title: 'Candidaturas',
      link: '#candidaturas'
    },
    {
      id: 'gobierno',
      icon: Bank,
      title: 'Gobierno',
      link: '#gobierno'
    },
    {
      id: 'empresa',
      icon: Briefcase,
      title: 'Empresa',
      link: '#empresa'
    }
  ]

  const candidaturasContent = {
    intro: 'Desde la plataforma se busca crecer una red de contactos de forma orgánica, 100% vía WhatsApp. Esta red permitirá:',
    benefits: [
      'Tener una comunicación bidireccional directa entre el candidato y los ciudadanos.',
      'Crear datos a partir de la participación ciudadana que nos sirvan para analizar cuáles son sus principales preocupaciones y necesidades.',
      'Geolocalizar por país, región, ciudad, barrio, comuna a esos ciudadanos.',
      'Analizar nuestras fortalezas y nuestras debilidades como candidato.',
      'Crear un plan de gobierno basado en la opinión real de nuestros ciudadanos.',
      'Identificar y segmentar a los ciudadanos por sexo, edad, ocupación, estrato social, gustos, ideologías…',
      'Enviar campañas masivas que atraigan un mayor flujo a nuestra red.',
      'Obtener el número real de potenciales votantes en un territorio.',
      'Crear una base de datos que nos sirva para gobernar en un tiempo presente y que siga creciendo en el tiempo, para seguir gobernando en un tiempo futuro.',
      'Conseguir apoyo por parte de los ciudadanos para contraatacar a nuestros oponentes.',
      'Construir una base de datos REAL sin duplicidad de contactos.'
    ],
    partidos: 'Se integra con los sistemas de información que manejan los registros de votaciones y sistemas de información públicos que almacenan los registros de los votantes.'
  }

  const gobiernoContent = {
    intro: 'Desde la plataforma se busca hacer crecer una red de contactos de forma orgánica, 100% vía WhatsApp. Esta red permitirá:',
    benefits: [
      'Tener una comunicación bidireccional directa entre el gobierno y los ciudadanos.',
      'Crear datos a partir de la participación ciudadana que nos sirvan para analizar cuáles son sus principales preocupaciones y necesidades.',
      'Geolocalizar por país, región, ciudad, barrio, comuna a esos ciudadanos.',
      'Analizar las fortalezas y las debilidades de nuestra gestión.',
      'Reestructurar medidas basadas en la opinión ciudadana.',
      'Identificar y segmentar a los ciudadanos por sexo, edad, ocupación, estrato social, gustos, ideologías…',
      'Crear una red de soporte directa para el ciudadano segmentada: Salud, educación, tecnología e innovación…',
      'Predecir problemas, fallas o errores basados en analíticas 100% reales.',
      'Crear una base de datos que nos sirva para gobernar en un tiempo presente y que siga creciendo en el tiempo, para seguir gobernando en un tiempo futuro.',
      'Conseguir apoyo por parte de los ciudadanos para voluntariados, eventos…',
      'Construir una base de datos REAL sin duplicidad de contactos.',
      'Identificar a cada uno de los ciudadanos con datos reales: nombre, apellidos, identificación, sexo, edad…',
      'Enviar comunicados masivos sobre medidas, noticias, eventos…'
    ]
  }

  const empresaContent = {
    intro: 'Desde la plataforma se busca hacer crecer una red de contactos de forma orgánica, 100% vía WhatsApp. Esta red permitirá:',
    benefits: [
      'Tener una comunicación bidireccional directa entre empresa y cliente.',
      'Brindar un soporte personalizado basado en las necesidades de nuestros clientes.',
      'Conocer la opinión real de nuestros clientes sobre nuestros productos o servicios.',
      'Crear bases de datos que nos ayuden a la generación de leads potenciales.',
      'Crear bases de datos con la ayuda de nuestros actuales clientes.',
      'Geolocalizar en una zona geográfica concreta a nuestros clientes y analizar la presencia de nuestra marca.',
      'Segmentar a nuestro clientes por: sexo, edad, ocupación, nacionalidad, …',
      'Analizar el comportamiento conductual de nuestros clientes.',
      'Enviar comunicaciones masivas sobre ofertas, promociones, nuevos lanzamientos, etc.',
      'Crear estrategias de Marketing basadas en la opinión de nuestra comunidad.',
      'Crear una comunidad en torno a nuestra marca.',
      'Predecir problemas, fallos o errores basado en analíticas 100% reales.',
      'Mejorar el tiempo de ejecución y resolución de problemas.',
      'Asignar tareas a agentes por departamento y experiencia.',
      'Automatización de mensajes para procesos simples.',
      'Analíticas reales que ayudan en la toma de decisiones: ejemplo, apertura de una nueva tienda.',
      'Construir una base de datos REAL sin duplicidad de contactos.',
      'Identificar a cada uno nuestros clientes con datos reales: nombre, apellidos, identificación, sexo, edad, etc.'
    ]
  }

  const handleServiceClick = (serviceId) => {
    if (serviceId === 'candidaturas' || serviceId === 'gobierno' || serviceId === 'empresa') {
      setExpandedService(expandedService === serviceId ? null : serviceId)
    }
  }

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resolvemos con<br />
            soluciones de alto impacto.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce nuestras soluciones que se integran a las estrategias de negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const isExpandable = service.id === 'candidaturas' || service.id === 'gobierno' || service.id === 'empresa'
            
            return (
              <div 
                key={index}
                className="group relative flex flex-col items-center"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#30f2ab] to-[#25c5ad] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon size={48} weight="regular" className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>

                {/* CTA Link or Button */}
                <div className="flex justify-center">
                  {isExpandable ? (
                    <button
                      onClick={() => handleServiceClick(service.id)}
                      className="inline-flex items-center text-[#25c5ad] font-semibold hover:gap-3 gap-2 transition-all duration-300 group-hover:text-[#30f2ab]"
                    >
                      Conoce más
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <a 
                      href={service.link}
                      className="inline-flex items-center text-[#25c5ad] font-semibold hover:gap-3 gap-2 transition-all duration-300 group-hover:text-[#30f2ab]"
                    >
                      Conoce más
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Expanded Content - Candidaturas */}
        {expandedService === 'candidaturas' && (
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#30f2ab] rounded-3xl p-8 md:p-12 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setExpandedService(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-[#30f2ab] rounded-full flex items-center justify-center transition-colors duration-300 group"
            >
              <X size={24} className="text-gray-600 group-hover:text-white" />
            </button>

            {/* Content */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Candidaturas
              </h3>

              {/* Intro */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {candidaturasContent.intro}
              </p>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {candidaturasContent.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#30f2ab] to-[#25c5ad] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              {/* Partidos Section */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  PARTIDOS
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {candidaturasContent.partidos}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Expanded Content - Gobierno */}
        {expandedService === 'gobierno' && (
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#30f2ab] rounded-3xl p-8 md:p-12 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setExpandedService(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-[#30f2ab] rounded-full flex items-center justify-center transition-colors duration-300 group"
            >
              <X size={24} className="text-gray-600 group-hover:text-white" />
            </button>

            {/* Content */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Gobierno
              </h3>

              {/* Intro */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {gobiernoContent.intro}
              </p>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4">
                {gobiernoContent.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#30f2ab] to-[#25c5ad] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Expanded Content - Empresa */}
        {expandedService === 'empresa' && (
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#30f2ab] rounded-3xl p-8 md:p-12 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setExpandedService(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-[#30f2ab] rounded-full flex items-center justify-center transition-colors duration-300 group"
            >
              <X size={24} className="text-gray-600 group-hover:text-white" />
            </button>

            {/* Content */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Empresa
              </h3>

              {/* Intro */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {empresaContent.intro}
              </p>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4">
                {empresaContent.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#30f2ab] to-[#25c5ad] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

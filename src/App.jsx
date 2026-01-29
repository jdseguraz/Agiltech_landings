import React from 'react'
import Navbar from './components/home/Navbar'
import HeroSection from './components/home/HeroSection'

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />

      {/* Otras secciones - Placeholders */}
      <section id="solutions" className="min-h-screen flex items-center justify-center bg-zinc-950">
        <h2 className="text-4xl font-bold text-white">Soluciones</h2>
      </section>

      <section id="process" className="min-h-screen flex items-center justify-center bg-black">
        <h2 className="text-4xl font-bold text-white">Cómo Trabajamos</h2>
      </section>

      <section id="why" className="min-h-screen flex items-center justify-center bg-zinc-950">
        <h2 className="text-4xl font-bold text-white">Por Qué Agiltech</h2>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-black">
        <h2 className="text-4xl font-bold text-white">Contacto</h2>
      </section>
    </div>
  )
}

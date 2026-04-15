import React from 'react'
import Navbar from '../components/esteban-chemali/Navbar'
import HeroBanner from '../components/esteban-chemali/HeroBanner'
import DemoSection from '../components/esteban-chemali/DemoSection'
import ValuePropositionSection from '../components/esteban-chemali/ValuePropositionSection'
import FlowSection from '../components/esteban-chemali/FlowSection'
import Features from '../components/esteban-chemali/Features'
import TechStackSection from '../components/esteban-chemali/TechStackSection'
import ImplementationSection from '../components/esteban-chemali/ImplementationSection'
import PricingSection from '../components/esteban-chemali/PricingSection'
import CTASection from '../components/esteban-chemali/CTASection'
import Footer from '../components/esteban-chemali/Footer'

export default function EstebanChemali() {
  return (
    <div className="min-h-screen bg-[#09090b]">
      <Navbar />
      <HeroBanner />
      <DemoSection />
      <ValuePropositionSection />
      <FlowSection />
      <Features />
      <TechStackSection />
      <ImplementationSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  )
}

import React from 'react'
import Navbar from '../components/gov-tech/Navbar'
import HeroBanner from '../components/gov-tech/HeroBanner'
import HowItWorks from '../components/gov-tech/HowItWorks'
import NextGeneration from '../components/gov-tech/NextGeneration'
import OrganicGrowth from '../components/gov-tech/OrganicGrowth'
import Features from '../components/gov-tech/Features'
import QRSection from '../components/gov-tech/QRSection'
import ServicesSection from '../components/gov-tech/ServicesSection'
import Footer from '../components/gov-tech/Footer'

export default function GovTech() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroBanner />
      <HowItWorks />
      <NextGeneration />
      <OrganicGrowth />
      <Features />
      <QRSection />
      <ServicesSection />
      <Footer />
    </div>
  )
}

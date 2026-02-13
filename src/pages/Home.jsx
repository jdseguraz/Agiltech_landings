import React from 'react'
import Navbar from '../components/home/Navbar'
import HeroSection from '../components/home/HeroSection'
import ProblemSection from '../components/home/ProblemSection'
import ValuePropositionSection from '../components/home/ValuePropositionSection'
import SolutionsSection from '../components/home/SolutionsSection'
import ProcessSection from '../components/home/ProcessSection'
import WhyAgiltechSection from '../components/home/WhyAgiltechSection'
import ContactSection from '../components/home/ContactSection'
import Footer from '../components/home/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ValuePropositionSection />
      <SolutionsSection />
      <ProcessSection />
      <WhyAgiltechSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

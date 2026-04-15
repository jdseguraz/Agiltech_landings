import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GovTech from './pages/GovTech'
import EstebanChemali from './pages/EstebanChemali'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gov-tech" element={<GovTech />} />
        <Route path="/propuesta-esteban-chemali" element={<EstebanChemali />} />
      </Routes>
    </Router>
  )
}

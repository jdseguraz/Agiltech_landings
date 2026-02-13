import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GovTech from './pages/GovTech'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gov-tech" element={<GovTech />} />
      </Routes>
    </Router>
  )
}

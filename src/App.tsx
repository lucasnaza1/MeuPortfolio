import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import TicTacToe from './components/TicTacToe'
import Contact from './components/Contact'
import BioPage from './pages/BioPage'

import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/** Portfólio principal (rota "/") — intacto */
function Portfolio() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as 'dark' | 'light'
      return saved || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="min-h-screen bg-background-primary text-text-primary selection:bg-teal selection:text-background-primary transition-colors duration-300">
      {/* Texture Layer */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Contact />
        </main>
        <TicTacToe />
      </div>
    </div>
  )
}

/** App raiz com BrowserRouter */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/bio" element={<BioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

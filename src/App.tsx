import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Terminal from './components/Terminal'
import Shop from './components/Shop'

function App() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary selection:bg-teal/30">
      {/* Texture Layer */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Shop />
          <Terminal />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App

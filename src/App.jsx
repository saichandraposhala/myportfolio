import { BrowserRouter } from 'react-router-dom'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Certifications from './components/sections/Certifications'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
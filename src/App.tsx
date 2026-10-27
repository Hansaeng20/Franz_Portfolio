
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

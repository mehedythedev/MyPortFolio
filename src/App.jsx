
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
    <Navbar />
    <Hero />
    <AboutMe/>
    <Projects />
    <Contact />
  </div>
  )
}

export default App

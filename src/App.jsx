import { motion } from 'framer-motion'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import UseCases from './components/UseCases'
import Testimonials from './components/Testimonials'
import Screenshots from './components/Screenshots'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-dark-900 min-h-screen transition-colors duration-300">
        <Navbar />
        <Hero />
        <HowItWorks />
        <UseCases />
        <Testimonials />
        <Screenshots />
        <CallToAction />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

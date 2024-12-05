import React from 'react'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import ExperienceSection from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <ExperienceSection />
      <Footer />
    </main>
  )
}

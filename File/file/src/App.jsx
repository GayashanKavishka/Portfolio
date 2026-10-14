import React, { useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Journey from './components/Journey/Journey'
import MyWork from './components/MyWork/MyWork'

import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './index.css'

const App = () => {
  // Scroll-reveal: add 'visible' class to .reveal elements when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Animated background orbs */}
      <div className="bg-canvas" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      <NavBar />
      <Hero />
      <About />
      <Journey />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

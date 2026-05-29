import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import Industries from './components/Industries'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    const animate = () => document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    animate()
    const timer = setTimeout(animate, 300)
    return () => { observer.disconnect(); clearTimeout(timer) }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Industries />
      <Services />
      <About />
      <Process />
      <Stats />
      <CTA />
      <Footer />
    </>
  )
}

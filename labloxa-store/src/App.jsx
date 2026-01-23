// src/App.jsx
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Імпорт компонентів (які ми зараз створимо)
import Hero from './components/Hero'
import Grid from './components/Grid'
import Navbar from './components/Navbar'

gsap.registerPlugin(ScrollTrigger)

function App() {

  // 1. Ініціалізація плавного скролу (Lenis)
  // Це додає вагу і інерцію, як в дорогих сайтах
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-void selection:bg-gold selection:text-void">
      {/* Фоновий шум для текстури */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-noise z-0 mix-blend-overlay"></div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Grid />
      </main>

      {/* Футер можна просто текстом внизу */}
      <footer className="py-12 text-center font-serif text-gold/30 text-xs tracking-widest uppercase relative z-10">
        © 2026 laBLOXA Lab. Paris — Kyiv
      </footer>
    </div>
  )
}

export default App

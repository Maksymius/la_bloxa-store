// src/App.jsx
import { useState, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { ShoppingBag } from 'lucide-react'

// Import Components
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import LotDetail from './components/LotDetail'
import { AnimatePresence } from 'framer-motion'
import { CartProvider, useCart } from './context/CartContext'
import CartDrawer from './components/CartDrawer'

// --- NAVIGATION COMPONENT ---
const Navigation = ({ activeTab, setActiveTab }) => {
  const { cartItems, setIsCartOpen } = useCart();
  return (
    <nav className="fixed top-0 w-full p-4 md:p-8 flex justify-between items-center z-[100] bg-[#050505]/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none md:mix-blend-difference text-[#E5E0D0]">
      {/* Логотип */}
      <div
        className="font-royal text-base md:text-lg tracking-[0.2em] cursor-pointer hover:text-[#D4AF37] hover:tracking-[0.5em] transition-all duration-700 ease-out"
        onClick={() => setActiveTab('home')}
      >
        laBLOXA
      </div>

      {/* Меню (Центр) */}
      <div className="hidden md:flex gap-12 font-mono text-[10px] uppercase tracking-[0.4em]">
        <button
          onClick={() => setActiveTab('home')}
          className={`${activeTab === 'home' ? 'text-[#D4AF37]' : 'text-[#E5E0D0]/60'} hover:text-[#D4AF37] transition-all relative group`}
        >
          Madame
          {activeTab === 'home' && <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#D4AF37]" />}
        </button>
        <button
          onClick={() => setActiveTab('catalog')}
          className={`${activeTab === 'catalog' ? 'text-[#D4AF37]' : 'text-[#E5E0D0]/60'} hover:text-[#D4AF37] transition-all relative group`}
        >
          Archive
          {activeTab === 'catalog' && <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#D4AF37]" />}
        </button>
      </div>

      {/* Корзина */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="flex items-center gap-3 border border-[#D4AF37]/30 px-6 py-2 rounded-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-700 group"
      >
        <span className="font-mono text-[9px] uppercase tracking-widest">Panier</span>
        <ShoppingBag size={12} className="group-hover:fill-black" />
        <span className="font-mono text-[9px]">({cartItems.length})</span>
      </button>
    </nav>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('home') // 'home' | 'catalog'
  const [selectedLot, setSelectedLot] = useState(null)

  useEffect(() => {
    // Detect Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      // Safari has good native smooth scroll, Lenis causes jitter
      document.documentElement.style.scrollBehavior = 'smooth';
      window.scrollTo(0, 0);
      return;
    }

    // 1. Ініціалізація плавного скролу (Lenis) - only for non-Safari
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Scroll to top on tab change
    window.scrollTo(0, 0);
  }, [activeTab])

  return (
    <CartProvider>
      <div className="relative w-full min-h-screen bg-[#050505] selection:bg-[#D4AF37] selection:text-black text-[#E5E0D0] overflow-x-hidden">
        {/* Background Noise Texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <CartDrawer />

        <main className="relative z-10">
          {activeTab === 'home' && <Home onGoToCatalog={() => setActiveTab('catalog')} />}
          {activeTab === 'catalog' && (
            <Catalog
              onLotSelect={(lot) => setSelectedLot(lot)}
            />
          )}
        </main>

        <AnimatePresence>
          {selectedLot && (
            <LotDetail
              lot={selectedLot}
              onClose={() => setSelectedLot(null)}
            />
          )}
        </AnimatePresence>

        <footer className="py-24 text-center border-t border-[#D4AF37]/10 mt-20 relative z-20 bg-[#050505]">
          <p className="font-baroque italic text-3xl text-[#D4AF37] mb-4">Merci de votre visite</p>
          <p className="font-royal text-[10px] text-[#E5E0D0]/30 uppercase tracking-[0.5em]">
            Est. 1789 • Digital Boudoir • Paris — Moscow — Le Web
          </p>
        </footer>
      </div>
    </CartProvider>
  )
}

export default App

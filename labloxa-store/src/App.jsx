import { useState, useEffect } from 'react'
import { ShoppingBag, Menu, X } from 'lucide-react'

// Import Components
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import LotDetail from './components/LotDetail'
import { AnimatePresence, motion } from 'framer-motion'
import { CartProvider, useCart } from './context/CartContext'
import CartDrawer from './components/CartDrawer'
import BriefPage from './components/BriefPage' // <-- Добавили импорт
import ManifestoPage from './components/ManifestoPage' // <-- Добавили Манифест
import MadameMeme from './pages/MadameMeme' // <-- Добавили Мем

// --- NAVIGATION COMPONENT ---
const Navigation = ({ activeTab, setActiveTab, setIsMenuOpen }) => {
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

      {/* Меню (Центр - Desktop) */}
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
        <button
          onClick={() => setActiveTab('brief')}
          className={`${activeTab === 'brief' ? 'text-[#D4AF37]' : 'text-[#E5E0D0]/60'} hover:text-[#D4AF37] transition-all relative group`}
        >
          Brief
          {activeTab === 'brief' && <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#D4AF37]" />}
        </button>
      </div>

      {/* Правая часть: Корзина + Бургер */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-2 md:gap-3 border border-[#D4AF37]/30 px-3 md:px-6 py-2 rounded-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-700 group"
        >
          <span className="hidden md:inline font-mono text-[9px] uppercase tracking-widest">Panier</span>
          <ShoppingBag size={16} className="md:w-3 md:h-3 group-hover:fill-black" />
          <span className="font-mono text-[10px]">({cartItems.length})</span>
        </button>

        {/* Бургер иконка (MOBILE ONLY) */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-[#D4AF37] p-2"
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>
  )
}

// --- MOBILE MENU OVERLAY ---
const MobileMenu = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'home', label: 'Madame', ru: 'Главная' },
    { id: 'catalog', label: 'Archive', ru: 'Коллекция' },
    { id: 'brief', label: 'Brief', ru: 'План работы' },
    { id: 'manifesto', label: 'Manifesto', ru: 'Стратегия' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-[#050505] flex flex-col p-8 pt-24"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#D4AF37] p-2"
          >
            <X size={32} />
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col gap-10 mt-12">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                onClick={() => {
                  setActiveTab(item.id);
                  onClose();
                }}
                className="group flex flex-col items-start text-left"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-[#D4AF37] opacity-40 italic">0{index + 1}</span>
                  <span className={`font-royal text-4xl tracking-widest uppercase transition-colors ${activeTab === item.id ? 'text-[#D4AF37]' : 'text-[#E5E0D0] group-hover:text-[#D4AF37]'}`}>
                    {item.label}
                  </span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#E5E0D0]/30 ml-10 mt-1">
                  — {item.ru}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-auto border-t border-[#D4AF37]/10 pt-8 pb-4">
            <p className="font-mono text-[8px] uppercase tracking-[0.5em] text-[#D4AF37]/40">
              Digital Boudoir // 2026
            </p>
            <button
              onClick={() => { setActiveTab('madame-meme'); onClose(); }}
              className="mt-4 font-mono text-[7px] uppercase tracking-[0.3em] text-fuchsia-500/20 hover:text-fuchsia-500/60 transition-colors"
            >
              Protocol: MAJESTY
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('home') // 'home' | 'catalog'
  const [selectedLot, setSelectedLot] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Simple scroll to top on tab change - uses CSS scroll-behavior: smooth
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab])

  // Режим "Манифест" через URL хеш (#manifesto)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['home', 'catalog', 'brief', 'manifesto', 'madame-meme'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash(); // Проверка при загрузке
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <CartProvider>
      <div className="relative w-full min-h-screen bg-[#050505] selection:bg-[#D4AF37] selection:text-black text-[#E5E0D0] overflow-x-hidden">
        {/* Background Noise Texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        {activeTab !== 'madame-meme' && (
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} />
        )}
        <CartDrawer />

        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <main className="relative z-10">
          {activeTab === 'home' && <Home onGoToCatalog={() => setActiveTab('catalog')} />}
          {activeTab === 'catalog' && (
            <Catalog
              onLotSelect={(lot) => setSelectedLot(lot)}
            />
          )}
          {activeTab === 'brief' && <BriefPage />}
          {activeTab === 'manifesto' && <ManifestoPage />}
          {activeTab === 'madame-meme' && <MadameMeme />}
        </main>

        <AnimatePresence>
          {selectedLot && (
            <LotDetail
              lot={selectedLot}
              onClose={() => setSelectedLot(null)}
            />
          )}
        </AnimatePresence>

        {activeTab !== 'madame-meme' && (
          <footer className="py-24 text-center border-t border-[#D4AF37]/10 mt-20 relative z-20 bg-[#050505]">
            <p className="font-baroque italic text-3xl text-[#D4AF37] mb-4">Merci de votre visite</p>
            <p className="font-royal text-[10px] text-[#E5E0D0]/30 uppercase tracking-[0.5em]">
              Est. 1789 • Digital Boudoir • Paris — Moscow — Le Web
            </p>
          </footer>
        )}
      </div>
    </CartProvider>
  )
}

export default App

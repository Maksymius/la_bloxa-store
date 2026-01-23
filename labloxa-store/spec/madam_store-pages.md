Це чудовий план. Давай зафіксуємо ТЗ для цих двох сторінок, щоб ми чітко розуміли структуру перед кодингом.

Оскільки ми використовуємо **Vite + React (SPA)**, перемикання між сторінками буде миттєвим, без перезавантаження (Client Side Routing).

---

# 📜 Технічне Завдання: Прототип "laBLOXA"

**Мова:** Російська (основна) + Французька (декор/акценти).
**Настрій:** "Digital Boudoir". Темний, таємничий, імерсивний.

## 1. Навігація (Header)

Хедер має бути "плаваючим" (fixed), з ефектом розмиття (backdrop-blur), але мінімалістичним.

* **Ліворуч:** Логотип `laBLOXA` (Шрифт: Cinzel). При скролі він може зменшуватися.
* **Центр (Desktop):** Меню-перемикач.
* *Madame* (Сторінка 1: Про Хазяйку)
* *Le Trésor* (Сторінка 2: Каталог)


* **Праворуч:** `Le Panier (0)` — Корзина. Виглядає як вишукана кнопка.

---

## 2. Сторінка 1: "Madame" (Інтро / Хазяйка)

Це вхід у світ. Користувач має відчути, що він зайшов у гості до ексцентричної колекціонерки.

**Блоки:**

1. **Hero Section:**
* Величезний заголовок: *Мадам laBLOXA* (мікс шрифтів).
* Саблайн: *Хранительница забытых историй*.
* Візуал: Паралакс-фото хазяйки (або абстрактний силует), перекрите золотими декоративними рамками.


2. **Маніфест (Storytelling):**
* Текст російською з французькими вставками.
* *Зміст:* "Я не продаю речі. Я шукаю нових опікунів для історії. Кожен предмет тут — це чиясь доля."
* *Шрифт:* Pinyon Script (курсив) для акцентів.



---

## 3. Сторінка 2: "Le Trésor" (Каталог)

Це не стандартний e-commerce. Це музейна експозиція.

**Функціонал:**

1. **Фільтри (The Menu):**
* Зроблені як меню ресторану: *Pour la Dame* (Для дами), *Pour la Maison* (Для дому), *Curiosités* (Диковинки).


2. **Сітка (Grid):**
* Асиметрична (Masonry). Одні фото великі, інші малі.
* Немає кнопок "Купити" під фото. Тільки естетика. Кнопка з'являється при наведенні.


3. **Картка товару:**
* Фото в рамці.
* Назва: *Зеркало "La Belle"*
* Ціна: *12 000 ₴*
* Статус: Якщо продано — червоний штамп *VENDU*.



---

## 🌍 Як робити локалізацію (i18n) на Vite + React?

Оскільки у нас немає Next.js (який робить це через роутинг типу `/en/about`), ми робимо це на клієнті.

**Найкращий інструмент:** бібліотека **`react-i18next`**.

**Як це працює:**

1. Ми створюємо файл `i18n.js`.
2. Там лежать JSON-об'єкти з текстами:
```json
// ru.json
{ "welcome": "Добро пожаловать в будуар" }
// en.json
{ "welcome": "Welcome to the boudoir" }

```


3. В компоненті ми пишемо не текст, а ключ: `{t('welcome')}`.
4. При натисканні кнопки "EN/RU" весь сайт миттєво змінює мову без перезавантаження.

**Моя порада:** Для цього прототипу (зараз) давай зробимо все хардкодом (жорстко пропишемо текст), щоб не ускладнювати код зайвими бібліотеками. Локалізацію підключимо, коли затвердимо дизайн.

---

## 🔥 Код: Навігація + 2 Сторінки (App.jsx)

Я створив код, де є state (стан), що перемикає сторінки. Це найпростіший спосіб для прототипу.

Відкрий `src/App.jsx` і встав це:

```jsx
import { useState, useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShoppingBag, ArrowRight } from 'lucide-react'

// Реєструємо плагіни GSAP
gsap.registerPlugin(ScrollTrigger)

// --- КОМПОНЕНТ: HEADER ---
const Header = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-parchment">
      {/* Логотип */}
      <div 
        className="font-serif text-2xl tracking-widest uppercase cursor-pointer hover:text-gold transition-colors"
        onClick={() => setActiveTab('madame')}
      >
        laBLOXA
      </div>

      {/* Меню (Центр) */}
      <div className="hidden md:flex gap-8 font-serif text-sm tracking-widest uppercase bg-void/50 backdrop-blur-md px-8 py-3 rounded-full border border-gold/20">
        <button 
          onClick={() => setActiveTab('madame')}
          className={`${activeTab === 'madame' ? 'text-gold' : 'text-parchment/60'} hover:text-gold transition-all`}
        >
          Madame
        </button>
        <span className="text-gold/20">•</span>
        <button 
          onClick={() => setActiveTab('catalog')}
          className={`${activeTab === 'catalog' ? 'text-gold' : 'text-parchment/60'} hover:text-gold transition-all`}
        >
          Le Trésor
        </button>
      </div>

      {/* Корзина */}
      <button className="flex items-center gap-2 border border-gold/30 px-5 py-2 rounded-full hover:bg-gold hover:text-void transition-all duration-500 group">
        <span className="font-serif text-xs uppercase tracking-wider">Le Panier</span>
        <ShoppingBag size={14} className="group-hover:fill-void" />
        <span className="font-serif text-xs ml-1">(0)</span>
      </button>
    </nav>
  )
}

// --- СТОРІНКА 1: MADAME (HOME) ---
const MadamePage = ({ onGoToCatalog }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    // Анімація тексту при вході
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100, opacity: 0, stagger: 0.1, duration: 1.2, ease: "power4.out", delay: 0.2
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 px-6 flex flex-col items-center">
      {/* Hero Block */}
      <div className="text-center mt-10 md:mt-20 relative z-10">
        <p className="hero-text font-cursive text-3xl md:text-5xl text-gold mb-4">La Maîtresse du Boudoir</p>
        <h1 className="hero-text font-serif text-[12vw] leading-[0.85] text-parchment uppercase tracking-tighter mix-blend-overlay">
          Madame <br/> <span className="text-transparent stroke-text italic">laBLOXA</span>
        </h1>
      </div>

      {/* Story Text */}
      <div className="hero-text mt-20 max-w-2xl text-center space-y-6">
        <p className="font-sans text-parchment/80 leading-relaxed text-lg">
          <span className="font-serif text-4xl float-left mr-2 text-gold">Я</span> не ищу вещи. Я спасаю истории. 
          В мире пластика и штамповок я — ваш проводник в эпоху, когда предметы имели душу.
        </p>
        <p className="font-cursive text-2xl text-gold/80">
          "Каждая трещина на фарфоре — это морщина на лице любимой женщины."
        </p>
        <p className="font-sans text-parchment/60 text-sm">
          Добро пожаловать в мой цифровой будуар. Смотрите, но трогайте только сердцем.
          <br/> <span className="uppercase tracking-widest text-xs mt-2 block">Paris — Kyiv — Le Web</span>
        </p>
      </div>

      {/* Button to Catalog */}
      <div className="hero-text mt-16 mb-20">
        <button 
          onClick={onGoToCatalog}
          className="group relative px-8 py-4 bg-transparent border border-gold/40 text-gold font-serif text-xl tracking-widest uppercase overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-4 group-hover:text-void transition-colors duration-300">
            Entrée <ArrowRight size={18} />
          </span>
          <div className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        </button>
      </div>
    </section>
  )
}

// --- СТОРІНКА 2: LE TRÉSOR (CATALOG) ---
const CatalogPage = () => {
  // Мок-дані (імітація бази даних)
  const items = [
    { id: 1, title: "Супница Limoges", year: "1920", price: "4 500 ₴", sold: false, img: "gray" },
    { id: 2, title: "Зеркало 'Mariel'", year: "France, 1890", price: "12 000 ₴", sold: false, img: "zinc" },
    { id: 3, title: "Кресло Вольтера", year: "Empire Era", price: "SOLD", sold: true, img: "stone" },
    { id: 4, title: "Брошь 'Слеза'", year: "Art Deco", price: "2 800 ₴", sold: false, img: "slate" },
  ]

  useEffect(() => {
    // Анімація карток
    gsap.from(".catalog-item", {
      y: 50, opacity: 0, stagger: 0.15, duration: 1, ease: "power2.out"
    })
  }, [])

  return (
    <section className="min-h-screen pt-32 px-6 md:px-12 pb-20">
      
      {/* Catalog Header */}
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-gold/20 pb-6">
        <div>
          <h2 className="font-serif text-6xl text-gold mb-2">Le Trésor</h2>
          <p className="font-cursive text-2xl text-parchment/60">Коллекция Весна 2026</p>
        </div>
        
        {/* Фільтри */}
        <div className="flex gap-6 font-serif text-xs uppercase tracking-widest text-parchment/50 mt-8 md:mt-0">
          <span className="text-gold border-b border-gold cursor-pointer">Tout (All)</span>
          <span className="hover:text-parchment cursor-pointer transition-colors">Décor</span>
          <span className="hover:text-parchment cursor-pointer transition-colors">Bijoux</span>
          <span className="hover:text-parchment cursor-pointer transition-colors">Meubles</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.id} className="catalog-item group cursor-pointer">
            {/* Рамка фото */}
            <div className="relative aspect-[3/4] overflow-hidden border border-white/5 bg-white/5 p-2 transition-all duration-500 group-hover:border-gold/40">
              <div className={`w-full h-full bg-${item.img}-800 flex items-center justify-center relative`}>
                <span className="text-white/20 font-serif text-xs">[ PHOTO ]</span>
                
                {/* Overlay при ховері */}
                <div className="absolute inset-0 bg-void/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                   {item.sold ? (
                     <span className="font-serif text-red-400 border-2 border-red-400 px-4 py-1 -rotate-12 text-xl uppercase tracking-widest">Vendu</span>
                   ) : (
                     <span className="font-cursive text-3xl text-gold">Regarder</span>
                   )}
                </div>
              </div>
            </div>

            {/* Інфо */}
            <div className="mt-4 flex justify-between items-start font-sans">
              <div>
                <h3 className="text-parchment text-lg group-hover:text-gold transition-colors duration-300 font-medium">{item.title}</h3>
                <p className="text-xs text-parchment/40 uppercase tracking-wider mt-1">{item.year}</p>
              </div>
              <span className={`text-sm font-serif ${item.sold ? 'line-through text-white/20' : 'text-gold'}`}>
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// --- MAIN APP ---
function App() {
  const [activeTab, setActiveTab] = useState('madame') // 'madame' | 'catalog'

  useEffect(() => {
    // Lenis (Smooth Scroll)
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-void selection:bg-gold selection:text-void text-parchment overflow-x-hidden">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}>
      </div>
      
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="relative z-10 transition-opacity duration-500">
        {activeTab === 'madame' && <MadamePage onGoToCatalog={() => setActiveTab('catalog')} />}
        {activeTab === 'catalog' && <CatalogPage />}
      </main>

      <footer className="py-12 text-center border-t border-gold/10 mt-20">
        <p className="font-cursive text-2xl text-gold mb-2">Merci de votre visite</p>
        <p className="font-serif text-[10px] text-parchment/30 uppercase tracking-[0.3em]">
          Est. 2026 • Designed by Hexis Lab
        </p>
      </footer>
    </div>
  )
}

export default App

```

### Що треба додати в CSS?

У тебе вже є `tailwind.config.js` з попереднього кроку, але додай ось цей маленький трюк в `src/index.css` для тексту з обводкою (outline text):

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .stroke-text {
    -webkit-text-stroke: 1px #D4AF37; /* Золота обводка */
    color: transparent;
  }
}

```

Тепер у тебе є повноцінний, стильний, барочний прототип на дві сторінки. Навігація працює, контент російський з французьким шиком. Запускай!
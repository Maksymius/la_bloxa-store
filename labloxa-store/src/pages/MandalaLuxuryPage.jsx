import React from 'react';
import { motion } from 'framer-motion';

const MandalaLuxuryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-0 bg-[#050505] text-[#E5E0D0] relative overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@300;400;500&display=swap');
        
        .font-dev { font-family: 'Noto Serif Devanagari', serif; }

        .ambient-glow-1 {
          position: absolute; top: -10%; right: -20%;
          width: 60vw; height: 60vw;
          background: radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 60%);
          filter: blur(80px); pointer-events: none; z-index: 0; border-radius: 50%;
          animation: float-slow 15s ease-in-out infinite;
        }

        .ambient-glow-2 {
          position: absolute; bottom: -20%; left: -10%;
          width: 50vw; height: 50vw;
          background: radial-gradient(circle, rgba(229,224,208,0.03) 0%, transparent 60%);
          filter: blur(80px); pointer-events: none; z-index: 0; border-radius: 50%;
          animation: float-slow 20s ease-in-out infinite reverse;
        }

        .ambient-noise {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 1; mix-blend-mode: overlay;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        @keyframes spin-ethereal { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .anim-spin-slow { animation: spin-ethereal 60s linear infinite; }
        .anim-spin-reverse { animation: spin-ethereal 40s linear infinite reverse; }

        .glass-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
          border: 1px solid rgba(212,175,55,0.1);
          backdrop-filter: blur(12px);
          border-radius: 1px;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .glass-card:hover {
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          border-color: rgba(212,175,55,0.3);
          transform: translateY(-4px);
          box-shadow: 0 10px 40px -10px rgba(212,175,55,0.15);
        }

        .text-gold-shimmer {
          background: linear-gradient(to right, #E5E0D0 20%, #D4AF37 40%, #D4AF37 60%, #E5E0D0 80%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          animation: shimmer 5s linear infinite;
        }
        
        @keyframes shimmer { to { background-position: 200% center; } }
        
        .ticker-track { display: inline-block; animation: ticker-move 35s linear infinite; }
        @keyframes ticker-move { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        
        .separator-dev {
          text-align: center; font-family: 'Noto Serif Devanagari', serif;
          font-size: 16px; letter-spacing: 0.5em; color: rgba(212,175,55,0.3);
          position: relative;
        }
        .separator-dev::before, .separator-dev::after {
          content: ''; position: absolute; top: 50%; width: 30vw; height: 1px;
          background: linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent);
        }
        .separator-dev::before { right: 55%; }
        .separator-dev::after { left: 55%; }
      `}</style>

      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />
      <div className="ambient-noise" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        
        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center pt-10 pb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
            className="font-dev text-xs md:text-sm tracking-[0.5em] text-[#D4AF37]/60 mb-16 uppercase"
          >
            ॐ मण्डल संग्रह ॐ
          </motion.div>

          {/* SVG MANDALA SHOWCASE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-[300px] h-[300px] md:w-[440px] md:h-[440px] mb-16"
          >
            <svg viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full anim-spin-slow opacity-60">
              <g transform="translate(170,170)" stroke="#D4AF37" fill="none" strokeWidth="0.5">
                <circle r="160" strokeOpacity="0.3" /><circle r="130" strokeOpacity="0.6" />
                <circle r="100" strokeOpacity="0.3" /><circle r="70" strokeOpacity="0.6" />
                <circle r="40" strokeOpacity="0.3" /><circle r="12" strokeOpacity="0.8" />
                <g strokeOpacity="0.5">
                  {[0, 30, 60, 90, 120, 150].map(angle => (
                    <ellipse key={angle} rx="25" ry="80" transform={`rotate(${angle})`} />
                  ))}
                </g>
                <g strokeOpacity="0.3">
                  {[15, 45, 75, 105, 135, 165].map(angle => (
                    <ellipse key={`s-${angle}`} rx="15" ry="55" transform={`rotate(${angle})`} />
                  ))}
                </g>
                <polygon points="0,-130 112.6,65 -112.6,65" strokeWidth="0.5" strokeOpacity="0.6" />
                <polygon points="0,130 112.6,-65 -112.6,-65" strokeWidth="0.5" strokeOpacity="0.3" />
                <line x1="-160" y1="0" x2="160" y2="0" strokeWidth="0.2" strokeOpacity="0.4" />
                <line x1="0" y1="-160" x2="0" y2="160" strokeWidth="0.2" strokeOpacity="0.4" />
              </g>
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%]">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full anim-spin-reverse opacity-80">
                <g transform="translate(100,100)" stroke="#E5E0D0" fill="none" strokeWidth="0.6">
                  <circle r="90" strokeOpacity="0.2" /><circle r="65" strokeOpacity="0.6" />
                  <circle r="40" strokeOpacity="0.4" /><circle r="18" strokeOpacity="0.8" />
                  <polygon points="0,-65 56.3,32.5 -56.3,32.5" strokeOpacity="0.7" />
                  <polygon points="0,65 56.3,-32.5 -56.3,-32.5" strokeOpacity="0.3" />
                  <circle r="6" cx="0" cy="-65" fill="#D4AF37" fillOpacity="0.6" stroke="none" />
                  <circle r="6" cx="56.3" cy="32.5" fill="#D4AF37" fillOpacity="0.4" stroke="none" />
                  <circle r="6" cx="-56.3" cy="32.5" fill="#D4AF37" fillOpacity="0.4" stroke="none" />
                </g>
              </svg>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
            className="font-royal text-5xl md:text-8xl lg:text-[110px] leading-[0.9] text-gold-shimmer mb-6 drop-shadow-2xl"
          >
            33 Мандали<br />
            <span className="italic font-light">Афірмацій</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="font-dev text-base md:text-xl text-[#D4AF37]/40 tracking-[0.4em] mb-8"
          >
            सकारात्मकता · शांति · प्रेम
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
            className="text-[11px] md:text-[13px] text-[#E5E0D0]/60 max-w-[420px] mx-auto leading-[1.8] mb-12 font-sans font-light"
          >
            Ручна робота. Цифрова точність. Кожна мандала — це вхід у стан, який ти шукав. Досліджуй священну геометрію та глибокий спокій.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-10 py-5 bg-[#D4AF37] text-[#050505] font-mono text-[9px] tracking-[0.25em] uppercase hover:bg-[#E5E0D0] transition-colors duration-500 rounded-sm">
              ✦ Отримати колекцію
            </button>
            <button className="px-10 py-5 bg-transparent border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-[9px] tracking-[0.25em] uppercase hover:border-[#D4AF37] transition-colors duration-500 rounded-sm">
              Переглянути зразки
            </button>
          </motion.div>
        </section>

        <div className="separator-dev mb-32">ॐ · श्री · ॐ</div>

        {/* FEATURES */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-40">
          <div className="glass-card p-10 flex flex-col items-center text-center">
             <span className="font-dev text-3xl text-[#D4AF37] mb-6 drop-shadow-md">ॐ</span>
             <h3 className="font-royal text-xl text-[#E5E0D0] mb-4 italic">Sacred Origin</h3>
             <p className="text-[#E5E0D0]/50 text-[11px] leading-[1.8] font-light">
               Кожен елемент побудований на основі ведичної символіки та сакральних пропорцій золотого перетину.
             </p>
          </div>
          <div className="glass-card p-10 flex flex-col items-center text-center relative top-0 md:top-8">
             <span className="font-dev text-3xl text-[#D4AF37] mb-6 drop-shadow-md">श्री</span>
             <h3 className="font-royal text-xl text-[#E5E0D0] mb-4 italic">Hand-Drawn</h3>
             <p className="text-[#E5E0D0]/50 text-[11px] leading-[1.8] font-light">
               Намальовано вручну — жива лінія, дихання художника, збережені та переведені в цифрову досконалість.
             </p>
          </div>
          <div className="glass-card p-10 flex flex-col items-center text-center">
             <span className="font-mono text-2xl text-[#D4AF37] mb-6 drop-shadow-md">✦</span>
             <h3 className="font-royal text-xl text-[#E5E0D0] mb-4 italic">Instant Access</h3>
             <p className="text-[#E5E0D0]/50 text-[11px] leading-[1.8] font-light">
               Доступ у форматах PDF + SVG у максимальній якості. Друкуй, медитуй, трансформуй простір навколо.
             </p>
          </div>
        </section>

        {/* GRID SECTION */}
        <section className="mb-40">
          <div className="border-b border-[#D4AF37]/20 pb-6 mb-12 flex justify-between items-end sticky top-20 z-20 bg-[#050505]/80 backdrop-blur-md">
            <h2 className="font-royal text-3xl md:text-5xl text-[#E5E0D0] italic">Колекція <span className="font-dev text-2xl md:text-4xl text-[#D4AF37] mx-2">संग्रह</span></h2>
            <span className="font-mono text-[9px] text-[#D4AF37]/60 tracking-[0.2em] uppercase">33 Units</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 lg:gap-1 bg-[#D4AF37]/10 border border-[#D4AF37]/10 p-1">
            
            {/* GRID ITEMS */}
            {[
              { num: '01', name: 'शांति', label: 'Спокій', rotation: '0' },
              { num: '09', name: 'प्रेम', label: 'Любов', rotation: '45' },
              { num: '17', name: 'शक्ति', label: 'Сила', rotation: '90' },
              { num: '21', name: 'आनंद', label: 'Блаженство', rotation: '135' },
              { num: '28', name: 'ज्ञान', label: 'Знання', rotation: '180' },
              { num: '33', name: 'मोक्ष', label: 'Звільнення', rotation: '225' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0A0A0A] aspect-square flex flex-col items-center justify-center relative group overflow-hidden cursor-pointer hover:bg-[#111] transition-colors duration-500">
                 <span className="absolute top-4 right-4 font-mono text-[8px] text-[#D4AF37]/40 tracking-wider">№{item.num}</span>
                 
                 <svg width="80" height="80" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                    <g transform="translate(35,35)" stroke="#D4AF37" fill="none" strokeWidth="0.5">
                      <circle r="30" strokeOpacity="0.4" />
                      <circle r="20" strokeOpacity="0.6" />
                      <circle r="10" strokeOpacity="0.8" />
                      <g transform={`rotate(${item.rotation})`}>
                        <ellipse rx="8" ry="26" transform="rotate(0)" />
                        <ellipse rx="8" ry="26" transform="rotate(60)" />
                        <ellipse rx="8" ry="26" transform="rotate(120)" />
                      </g>
                    </g>
                 </svg>

                 <div className="absolute bottom-6 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="font-dev text-sm text-[#D4AF37]">{item.name}</span>
                    <span className="font-mono text-[8px] text-[#E5E0D0]/50 tracking-[0.2em] uppercase mt-1">{item.label}</span>
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="text-center max-w-3xl mx-auto mb-40 px-4">
          <span className="font-royal text-6xl text-[#D4AF37]/30 leading-none">❝</span>
          <p className="font-royal text-2xl md:text-3xl text-[#E5E0D0] italic leading-relaxed my-8 relative z-10">
            Я медитувала з цими мандалами щоранку — через тиждень зрозуміла, чого шукала все своє життя.
          </p>
          <div className="flex items-center justify-center gap-4">
             <div className="h-[1px] w-8 bg-[#D4AF37]/30"></div>
             <span className="font-mono text-[9px] tracking-[0.2em] text-[#D4AF37]/70 uppercase">Олена В. · Практикантка · 2024</span>
             <div className="h-[1px] w-8 bg-[#D4AF37]/30"></div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center relative z-20 py-20 glass-card mx-4 md:mx-auto max-w-4xl border-x-0 md:border-x border-y border-[#D4AF37]/20 mb-32">
           <h2 className="font-royal text-4xl md:text-5xl text-[#E5E0D0] mb-4">Почни свою практику</h2>
           <span className="font-dev text-sm text-[#D4AF37]/60 tracking-[0.3em] mb-12 block">आज ही शुरू करें</span>
           
           <div className="flex justify-center items-baseline gap-4 mb-6">
              <span className="font-royal text-7xl text-[#D4AF37]">₴490</span>
              <span className="font-mono text-sm text-[#E5E0D0]/30 line-through">₴990</span>
           </div>
           
           <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#E5E0D0]/40 mb-10">
              33 мандали · PDF + SVG · Миттєве завантаження · Назавжди твої
           </p>
           
           <button className="px-12 py-5 bg-[#D4AF37] text-[#050505] font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-white transition-colors duration-500 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
              ✦ Завантажити зараз
           </button>
        </section>
      </div>

      {/* INFINITE TICKER */}
      <div className="border-y border-[#D4AF37]/10 bg-[#0A0A0A] overflow-hidden whitespace-nowrap py-5 relative z-20">
        <div className="ticker-track">
          {[1, 2, 3].map((_, i) => (
            <React.Fragment key={i}>
              <span className="font-dev text-[#D4AF37] px-8 text-lg align-middle">ॐ</span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#E5E0D0]/50 uppercase align-middle">Шлях починається з одного символу</span>
              <span className="font-dev text-[#D4AF37] px-8 text-lg align-middle">श्री</span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#E5E0D0]/50 uppercase align-middle">33 мандали · 33 стани свідомості</span>
              <span className="font-mono text-[#D4AF37] px-8 text-sm align-middle">✦</span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#E5E0D0]/50 uppercase align-middle">Афірмація — це не слова. Це форма.</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative z-20 py-8 px-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#050505]">
        <span className="font-mono text-[8px] tracking-[0.2em] text-[#E5E0D0]/30 uppercase">© 2026 Mandala Project · Всі права захищені</span>
        <span className="font-dev text-xs text-[#D4AF37]/40 tracking-widest">सत्यम् शिवम् सुन्दरम्</span>
      </footer>

    </motion.div>
  );
};

export default MandalaLuxuryPage;

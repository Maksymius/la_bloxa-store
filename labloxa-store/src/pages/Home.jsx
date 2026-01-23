// src/pages/Home.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GoldenFrame } from '../components/GoldenFrame';

export default function Home({ onGoToCatalog }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // Паралакс ефект для тексту і фото
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityOverlay = useTransform(scrollYProgress, [0, 0.5], [0, 0.8]);

    return (
        <GoldenFrame>
            <main ref={targetRef} className="relative h-[200vh]">

                {/* HERO SECTION */}
                <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                    <div className="absolute inset-0 z-0">
                        <img
                            src="/madame-vintage.jpg"
                            alt="Madame"
                            className="w-full h-full object-cover opacity-60 grayscale contrast-125 hover:grayscale-0 transition-all duration-[2s]"
                        />
                        <motion.div style={{ opacity: opacityOverlay }} className="absolute inset-0 bg-black/80" />
                    </div>

                    {/* ТИПОГРАФІЯ (Поверх фото) */}
                    <motion.div style={{ y: yText }} className="relative z-10 text-center px-6 md:mix-blend-difference">
                        <p className="font-mono text-[10px] md:text-xs text-[#D4AF37] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4 md:mb-6">
                            Est. 1789 // Moscow
                        </p>
                        <h1 className="font-baroque italic text-white leading-[0.85] mb-6 md:mb-8" style={{ fontSize: 'clamp(2.5rem, 12vw, 7rem)' }}>
                            Le Cabinet <br />
                            <span className="font-royal not-italic tracking-widest block mt-3 md:mt-4" style={{ fontSize: 'clamp(1.5rem, 6vw, 4rem)' }}>
                                de Curiosités
                            </span>
                        </h1>
                        <p className="font-mono text-xs md:text-[14px] text-zinc-300 max-w-md mx-auto leading-relaxed mt-8 md:mt-12 border-l border-[#D4AF37] pl-4 md:pl-6 text-left">
                            Здесь вещи обретают душу,<br /> а время — свою истинную цену. <br />
                            Добро пожаловать в цифровой будуар.
                        </p>
                    </motion.div>

                    {/* SCROLL INDICATOR */}
                    <div className="absolute bottom-20 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37]">Enter</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
                    </div>
                </div>

                {/* INTRODUCTION (Спливає знизу) */}
                <div className="relative z-20 bg-[#050505] min-h-screen border-t border-[#D4AF37]/20 p-6 md:p-24 flex items-center">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-baroque mb-6 md:mb-8" style={{ fontSize: 'clamp(2rem, 8vw, 3rem)' }}>Мадам <br /><span className="text-[#D4AF37] italic">laBLOXA</span></h2>
                            <p className="font-mono text-sm text-zinc-400 leading-loose mb-6">
                                Я не продаю "б/у". Я предлагаю артефакты.
                                Каждый предмет в этой коллекции был спасен от забвения,
                                очищен от пыли столетий и теперь ищет нового владельца,
                                способного оценить его молчаливое величие.
                            </p>
                            <button
                                onClick={onGoToCatalog}
                                className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] font-mono text-xs uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all duration-500"
                            >
                                Открыть Каталог
                            </button>
                        </div>
                        <div className="relative h-[400px] md:h-[500px] border border-zinc-800 p-3 md:p-4 rotate-2 md:rotate-3 hover:rotate-0 transition-transform duration-700 group overflow-hidden">
                            <img
                                src="/madame-vintage_v2.jpg"
                                alt="Madame laBLOXA portrait"
                                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 border border-[#D4AF37]/10 pointer-events-none m-6"></div>
                        </div>
                    </div>
                </div>

            </main>
        </GoldenFrame>
    );
}

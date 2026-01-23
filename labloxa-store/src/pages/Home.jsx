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
                    <motion.div style={{ y: yText }} className="relative z-10 text-center mix-blend-difference px-6">
                        <p className="font-mono text-xs text-[#D4AF37] uppercase tracking-[0.5em] mb-6">
                            Est. 1789 // Moscow
                        </p>
                        <h1 className="font-baroque italic text-7xl md:text-9xl text-white leading-[0.8] mb-8">
                            Le Cabinet <br />
                            <span className="font-royal not-italic text-4xl md:text-6xl tracking-widest block mt-4">
                                de Curiosités
                            </span>
                        </h1>
                        <p className="font-mono text-xs md:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed mt-12 border-l border-[#D4AF37] pl-6 text-left">
                            Здесь вещи обретают душу, а время — свою истинную цену. <br />
                            Добро пожаловать в цифровой будуар.
                        </p>
                    </motion.div>

                    {/* SCROLL INDICATOR */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37]">Enter</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent" />
                    </div>
                </div>

                {/* INTRODUCTION (Спливає знизу) */}
                <div className="relative z-20 bg-[#050505] min-h-screen border-t border-[#D4AF37]/20 p-8 md:p-24 flex items-center">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-baroque text-5xl mb-8">Мадам <br /><span className="text-[#D4AF37] italic">laBLOXA</span></h2>
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
                        <div className="relative h-[500px] border border-zinc-800 p-4 rotate-3 hover:rotate-0 transition-transform duration-700">
                            <div className="absolute inset-0 bg-stone-900/50 opacity-10"></div>
                            <div className="w-full h-full border border-zinc-700 flex items-center justify-center">
                                <span className="font-royal text-6xl opacity-20">L.B.</span>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </GoldenFrame>
    );
}

import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// Складний бароковий орнамент
const BaroqueFlourish = ({ className, style }) => (
    <svg viewBox="0 0 200 100" className={`fill-current ${className}`} style={style}>
        <path d="M10,50 C30,30 50,30 70,50 C90,70 110,70 130,50 C150,30 170,30 190,50" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
        <path d="M30,50 Q50,10 70,50 Q90,90 110,50 Q130,10 150,50" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="10" cy="50" r="2" /> <circle cx="190" cy="50" r="2" />
        <circle cx="70" cy="50" r="3" /> <circle cx="130" cy="50" r="3" />
        <path d="M90,20 L100,10 L110,20 M90,80 L100,90 L110,80" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const GlitchText = ({ text, className, delay = 0 }) => {
    return (
        <div className={`relative group ${className}`}>
            {/* Основний текст */}
            <span className="relative z-10 bg-gradient-to-r from-[#D4AF37] via-[#E6C3FF] to-[#D4AF37] bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                {text}
            </span>

            {/* Глітч шари (RGB Shift) */}
            <span className="absolute inset-0 z-0 text-[#ff00ff] opacity-0 group-hover:opacity-40 animate-glitch-1 select-none pointer-events-none translate-x-[1px] mix-blend-screen" aria-hidden="true">
                {text}
            </span>
            <span className="absolute inset-0 z-0 text-[#00ffff] opacity-0 group-hover:opacity-40 animate-glitch-2 select-none pointer-events-none -translate-x-[1px] mix-blend-screen" aria-hidden="true">
                {text}
            </span>

            {/* Підсвітка */}
            <motion.span
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: delay + 1 }}
                className="absolute inset-0 z-0 text-[#A259FF] blur-[12px] select-none pointer-events-none"
            >
                {text}
            </motion.span>
        </div>
    );
};

export default function MadameMemePage() {
    const [phase, setPhase] = useState(0);
    // Для ефекту паралаксу на рух миші
    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase(1), 1000), // Header
            setTimeout(() => setPhase(2), 2500), // Mom text
            setTimeout(() => setPhase(3), 5000), // Portrait reveal
            setTimeout(() => setPhase(4), 8000), // Final "Me" text
        ];

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const targetX = (clientX / window.innerWidth - 0.5) * 20;
            const targetY = (clientY / window.innerHeight - 0.5) * 20;
            mouseX.set(targetX);
            mouseY.set(targetY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            timers.forEach(clearTimeout);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 bg-[#020005] overflow-hidden flex flex-col items-center justify-center font-royal selection:bg-[#A259FF] selection:text-white">

            {/* --- BACKGROUND --- */}
            <div className="absolute inset-0 z-0">
                {/* Purple Nebula */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_#1a0b2e_0%,_transparent_60%),radial-gradient(circle_at_80%_80%,_#2d1b4d_0%,_transparent_50%)]" />

                {/* Digital Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-noise pointer-events-none mix-blend-overlay" />

                {/* Deep Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#020005_100%)] z-10" />

                {/* Floating Dust */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full ${i % 2 === 0 ? 'bg-[#D4AF37]' : 'bg-[#A259FF]'} blur-[1px]`}
                        style={{
                            width: Math.random() * 2 + 1 + 'px',
                            height: Math.random() * 2 + 1 + 'px',
                        }}
                        initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0 }}
                        animate={{
                            y: [null, Math.random() * -20 + "%"],
                            opacity: [0, Math.random() * 0.6 + 0.2, 0],
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            {/* --- CORNER ORNAMENTS (BAROQUE FRAME) --- */}
            <div className="absolute inset-0 pointer-events-none z-10 text-[#D4AF37]/30">
                <BaroqueFlourish className="absolute top-8 left-8 w-40 h-20" />
                <BaroqueFlourish className="absolute top-8 right-8 w-40 h-20 scale-x-[-1]" />
                <BaroqueFlourish className="absolute bottom-8 left-8 w-40 h-20 scale-y-[-1]" />
                <BaroqueFlourish className="absolute bottom-8 right-8 w-40 h-20 scale-[-1]" />
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="relative z-20 w-full max-w-5xl px-6 flex flex-col items-center text-center h-full justify-center">

                {/* HEADER: DIVIDER & DECREE */}
                <div className="mb-4 overflow-hidden flex flex-col items-center">
                    <AnimatePresence>
                        {phase >= 1 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5 }}
                                className="flex flex-col items-center"
                            >
                                {/* Top Ornamental Divider */}
                                <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-3" />
                                <p className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.8em] text-[#A259FF]/70">
                                    — Royal Transmission —
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* MOM'S TEXT */}
                <div className="mb-8 flex items-center justify-center relative min-h-[6rem]">
                    <AnimatePresence>
                        {phase >= 2 && (
                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                                transition={{ duration: 2.5, ease: "easeOut" }}
                                className="relative"
                            >
                                <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#E5E0D0] italic font-serif-cyrillic leading-tight tracking-wide relative z-10 drop-shadow-[0_0_10px_rgba(162,89,255,0.3)] max-w-2xl">
                                    "Мама: Вдягни шапку, <br /> на дворі холодно!"
                                </h2>
                                {/* Тонкий глітч-ефект на фоні тексту */}
                                <div className="absolute inset-0 bg-[#A259FF]/5 blur-xl -z-10 animate-pulse-slow"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* PORTRAIT CONTAINER */}
                <div className="relative perspective-1000">
                    <AnimatePresence>
                        {phase >= 3 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 50, rotateX: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                                style={{ x: mouseX, y: mouseY }} // Паралакс ефект
                                className="relative z-10 group"
                            >
                                {/* Golden Frame with Purple Glow */}
                                <div className="relative p-1 md:p-[6px] bg-gradient-to-br from-[#D4AF37] via-[#3a1c5c] to-[#D4AF37] rounded-sm shadow-[0_0_60px_rgba(162,89,255,0.25)]">
                                    <div className="bg-[#050505] p-[2px] md:p-1 overflow-hidden relative rounded-sm">

                                        <div className="relative w-[85vw] max-w-[360px] h-[55vh] max-h-[480px] md:w-[480px] md:h-[660px] overflow-hidden">
                                            {/* Digital Scanline Overlay */}
                                            <div className="absolute inset-0 z-30 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_3px)] opacity-20 pointer-events-none mix-blend-overlay"></div>

                                            {/* Portrait */}
                                            <motion.img
                                                src="/madame-vintage_v2.jpg"
                                                alt="Madame Majesty"
                                                className="w-full h-full object-cover sepia-[0.2] contrast-[1.15] brightness-90 saturate-[1.1]"
                                                initial={{ scale: 1.15, filter: 'blur(5px)' }}
                                                animate={{ scale: 1, filter: 'blur(0px)' }}
                                                transition={{ duration: 8, ease: "easeOut" }}
                                            />

                                            {/* POSITIONED "Я:" TEXT OVER PHOTO */}
                                            <div className="absolute top-[10%] left-[15%] z-50">
                                                <AnimatePresence>
                                                    {phase >= 4 && (
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 2 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.5, type: 'spring' }}
                                                        >
                                                            <GlitchText
                                                                text="Я:"
                                                                className="text-6xl md:text-8xl text-white font-serif-cyrillic tracking-[0.1em] leading-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
                                                                delay={0}
                                                            />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Glitch/Hologram Effect Layers */}
                                            <motion.div
                                                animate={{ x: ['-100%', '100%'], opacity: [0, 0.3, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                                                className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-[#A259FF]/30 to-transparent skew-x-12 mix-blend-color-dodge"
                                            />
                                        </div>
                                    </div>

                                    {/* Ornate Frame Details */}
                                    <div className="absolute -top-5 -left-5 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/60 rounded-tl-lg pointer-events-none mix-blend-plus-lighter"></div>
                                    <div className="absolute -bottom-5 -right-5 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]/60 rounded-br-lg pointer-events-none mix-blend-plus-lighter"></div>
                                </div>

                                {/* Divine Halo / Aura */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.1, 1.2, 1.1] }}
                                    transition={{ duration: 6, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
                                    className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_#A259FF_0%,_transparent_70%)] blur-[80px] opacity-30"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* FINAL DECORATIONS BELOW FRAME */}
                <div className="mt-8">
                    <AnimatePresence>
                        {phase >= 4 && (
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                transition={{ duration: 2, delay: 1 }}
                                className="flex items-center justify-center gap-4 text-[#D4AF37]/60"
                            >
                                <BaroqueFlourish className="w-12 h-6 scale-x-[-1]" />
                                <p className="font-mono text-[9px] md:text-[11px] uppercase tracking-[0.6em] text-[#A259FF] whitespace-nowrap px-4">
                                    Ascension Complete
                                </p>
                                <BaroqueFlourish className="w-12 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* --- ORNAMENTAL FOOTER DIVIDER --- */}
            <div className="absolute bottom-0 w-full flex flex-col items-center justify-end pb-8 opacity-80 z-20 pointer-events-none">
                <div className="w-64 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-4"></div>
                <BaroqueFlourish className="w-96 h-12 text-[#D4AF37]/60" />
            </div>

            {/* GLOBAL STYLES & ANIMATIONS */}
            <style jsx global>{`
                /* Import Cyrillic Baroque Fonts */
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Ruslan+Display&display=swap');

                .font-royal { font-family: 'Cinzel Decorative', cursive; }
                .font-baroque { font-family: 'Pinyon Script', cursive; }
                .font-serif-cyrillic { font-family: 'Ruslan Display', serif; } /* Supporting font */

                .perspective-1000 { perspective: 1000px; }
                .bg-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); }

                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                .animate-shimmer { animation: shimmer 4s infinite linear; }

                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.05; }
                    50% { opacity: 0.15; }
                }
                .animate-pulse-slow { animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

                /* Glitch Animations */
                @keyframes glitch-1 {
                    0%, 100% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 0); }
                    20% { clip-path: inset(60% 0 20% 0); transform: translate(2px, 0); }
                    40% { clip-path: inset(40% 0 60% 0); transform: translate(-2px, 0); }
                    60% { clip-path: inset(80% 0 20% 0); transform: translate(2px, 0); }
                    80% { clip-path: inset(10% 0 90% 0); transform: translate(-2px, 0); }
                }
                @keyframes glitch-2 {
                    0%, 100% { clip-path: inset(10% 0 90% 0); transform: translate(2px, 0); }
                    20% { clip-path: inset(30% 0 70% 0); transform: translate(-2px, 0); }
                    40% { clip-path: inset(70% 0 30% 0); transform: translate(2px, 0); }
                    60% { clip-path: inset(50% 0 50% 0); transform: translate(-2px, 0); }
                    80% { clip-path: inset(90% 0 10% 0); transform: translate(2px, 0); }
                }
                .group:hover .animate-glitch-1 { animation: glitch-1 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite; }
                .group:hover .animate-glitch-2 { animation: glitch-2 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both reverse infinite; }
            `}</style>
        </div>
    );
}
// src/components/GoldenFrame.jsx
import { motion } from 'framer-motion';

export const GoldenFrame = ({ children }) => {
    return (
        <div className="relative min-h-screen">
            {/* 1. Фіксована Рамка (Sticky Frame) */}
            <div className="fixed inset-4 z-50 border-[1px] border-[#D4AF37]/30 pointer-events-none rounded-sm">
                {/* Декоративні кутики */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />

                {/* Бренд по центру рамки */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-4">
                    <span className="font-royal text-[10px] tracking-[0.4em] text-[#D4AF37]">laBLOXA</span>
                </div>
            </div>

            {children}
        </div>
    );
};

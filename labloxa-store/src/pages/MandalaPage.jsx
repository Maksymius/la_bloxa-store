import React from 'react';
import { motion } from 'framer-motion';

const MandalaPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 px-4 md:px-8 font-mono text-[#E5E0D0]"
    >
      <style>{`
        @keyframes rotate-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .anim-rotate-slow {
          animation: rotate-slow 120s linear infinite;
        }
        .anim-ticker {
          animation: ticker 30s linear infinite;
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="relative min-h-[560px] flex items-center overflow-hidden mb-12">
          {/* Decorative Rotating Mandala */}
          <svg className="absolute top-1/2 left-1/2 w-[480px] h-[480px] opacity-[0.15] anim-rotate-slow pointer-events-none" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(240,240)" stroke="#D4AF37" fill="none" strokeWidth="0.5">
              <circle r="220" /><circle r="180" /><circle r="140" /><circle r="100" /><circle r="60" /><circle r="20" />
              <g id="petals">
                <ellipse rx="30" ry="100" transform="rotate(0)" />
                <ellipse rx="30" ry="100" transform="rotate(30)" />
                <ellipse rx="30" ry="100" transform="rotate(60)" />
                <ellipse rx="30" ry="100" transform="rotate(90)" />
                <ellipse rx="30" ry="100" transform="rotate(120)" />
                <ellipse rx="30" ry="100" transform="rotate(150)" />
                <ellipse rx="30" ry="100" transform="rotate(180)" />
                <ellipse rx="30" ry="100" transform="rotate(210)" />
                <ellipse rx="30" ry="100" transform="rotate(240)" />
                <ellipse rx="30" ry="100" transform="rotate(270)" />
                <ellipse rx="30" ry="100" transform="rotate(300)" />
                <ellipse rx="30" ry="100" transform="rotate(330)" />
              </g>
              <line x1="-220" y1="0" x2="220" y2="0" strokeWidth="0.3" />
              <line x1="0" y1="-220" x2="0" y2="220" strokeWidth="0.3" />
              <line x1="-155" y1="-155" x2="155" y2="155" strokeWidth="0.3" />
              <line x1="155" y1="-155" x2="-155" y2="155" strokeWidth="0.3" />
              <polygon points="0,-180 156,90 -156,90" strokeWidth="0.7" />
              <polygon points="0,180 156,-90 -156,-90" strokeWidth="0.7" />
              <polygon points="0,-120 104,60 -104,60" strokeWidth="0.5" />
              <polygon points="0,120 104,-60 -104,-60" strokeWidth="0.5" />
              <circle r="8" cx="0" cy="-140" /><circle r="8" cx="121" cy="70" /><circle r="8" cx="-121" cy="70" />
              <circle r="8" cx="0" cy="140" /><circle r="8" cx="-121" cy="-70" /><circle r="8" cx="121" cy="-70" />
              <circle r="4" cx="0" cy="-180" /><circle r="4" cx="156" cy="90" /><circle r="4" cx="-156" cy="90" />
              <circle r="4" cx="0" cy="180" /><circle r="4" cx="-156" cy="-90" /><circle r="4" cx="156" cy="-90" />
            </g>
          </svg>

          <div className="relative z-10 bg-[#050505]/80 backdrop-blur-sm p-8 md:p-10 max-w-[520px] border-l-[6px] border-[#D4AF37]">
            <span className="text-[9px] tracking-[0.25em] text-[#E5E0D0]/60 uppercase mb-4 block">
              — Object Class: OPEN / Edition 2024
            </span>
            <h1 className="font-royal text-5xl md:text-7xl leading-[0.92] text-[#E5E0D0] tracking-[0.02em] mb-6">
              33 Hand-Drawn<br />
              <em className="not-italic text-[#D4AF37] block text-[0.6em] mt-2 mb-2">Affirmation</em>
              Mandalas
            </h1>
            <div className="text-[9px] text-[#E5E0D0]/50 tracking-[0.15em] leading-loose border-t border-[#D4AF37]/30 pt-4 mt-2">
              COORDINATES: 48.3794° N, 31.1656° E<br />
              FORMAT: Digital Download / PDF + SVG<br />
              STATUS: <span className="text-[#D4AF37]">ACTIVE</span>
            </div>
            <button className="inline-block mt-8 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] text-[10px] tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-[#050505] transition-colors duration-300">
              ↓ Digital Download
            </button>
          </div>
        </section>

        <div className="h-[1px] bg-[#D4AF37]/30 w-full mb-12"></div>

        {/* Info Section */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-0 pb-12">
          <div className="md:border-r border-[#D4AF37]/30 md:pr-12">
            <span className="text-[9px] tracking-[0.2em] text-[#D4AF37]/60 block mb-3">// 001</span>
            <h2 className="font-royal text-4xl leading-none tracking-[0.05em] mb-6 text-[#E5E0D0]">
              Technical<br />Specification
            </h2>
            <p className="text-[11px] leading-[1.8] text-[#E5E0D0]/70 max-w-[360px] mb-8">
              Each mandala rendered as a precision blueprint — not spiritual artifact but cognitive instrument. Fine-line geometry at 0.5px weight. Laser-etched aesthetic. Sacred geometry meets engineering schematic.
            </p>
            <div className="grid grid-cols-2 gap-[1px] bg-[#D4AF37]/30 border border-[#D4AF37]/30">
              <div className="bg-[#0A0A0A] p-4 md:p-6 transition-colors hover:bg-[#111]">
                <span className="text-[8px] tracking-[0.2em] uppercase text-[#D4AF37]/70 block mb-1">Quantity</span>
                <span className="text-[13px] font-bold text-[#E5E0D0]">33 units</span>
              </div>
              <div className="bg-[#0A0A0A] p-4 md:p-6 transition-colors hover:bg-[#111]">
                <span className="text-[8px] tracking-[0.2em] uppercase text-[#D4AF37]/70 block mb-1">Format</span>
                <span className="text-[13px] font-bold text-[#E5E0D0]">PDF / SVG</span>
              </div>
              <div className="bg-[#0A0A0A] p-4 md:p-6 transition-colors hover:bg-[#111]">
                <span className="text-[8px] tracking-[0.2em] uppercase text-[#D4AF37]/70 block mb-1">Resolution</span>
                <span className="text-[13px] font-bold text-[#E5E0D0]">300 DPI</span>
              </div>
              <div className="bg-[#0A0A0A] p-4 md:p-6 transition-colors hover:bg-[#111]">
                <span className="text-[8px] tracking-[0.2em] uppercase text-[#D4AF37]/70 block mb-1">Delivery</span>
                <span className="text-[13px] font-bold text-[#E5E0D0]">Instant</span>
              </div>
            </div>
          </div>
          <div className="md:pl-12 flex flex-col justify-center">
            <span className="text-[9px] tracking-[0.2em] text-[#D4AF37]/60 block mb-3">// 002</span>
            <h2 className="font-royal text-4xl leading-none tracking-[0.05em] mb-6 text-[#E5E0D0]">
              Function
            </h2>
            <div className="space-y-4 text-[11px] leading-[1.8] text-[#E5E0D0]/70 max-w-[360px]">
              <p>
                Designed as cognitive anchors. Each glyph corresponds to a specific affirmative state — rendered in geometry because the mind responds to structure, not sentiment.
              </p>
              <p>
                Hand-drawn source material. Digitized with precision. The human trace preserved inside the technical frame.
              </p>
            </div>
          </div>
        </section>

        {/* Mandala Showcase Grid */}
        <section className="py-12 flex flex-col md:flex-row gap-[1px] bg-[#D4AF37]/20 border border-[#D4AF37]/20 mb-12">
          <div className="flex-1 bg-[#050505] p-8 flex flex-col items-center justify-center gap-6 group hover:bg-[#0A0A0A] transition-colors">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="0.6" xmlns="http://www.w3.org/2000/svg" className="opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]">
              <g transform="translate(50,50)">
                <circle r="45" /><circle r="30" /><circle r="15" />
                <polygon points="0,-40 34.6,20 -34.6,20" strokeWidth="0.5" />
                <polygon points="0,40 34.6,-20 -34.6,-20" strokeWidth="0.5" />
                <line x1="-45" y1="0" x2="45" y2="0" strokeWidth="0.3" />
                <line x1="0" y1="-45" x2="0" y2="45" strokeWidth="0.3" />
              </g>
            </svg>
            <span className="text-[8px] tracking-[0.2em] uppercase text-[#E5E0D0]/50 text-center group-hover:text-[#D4AF37] transition-colors">
              Unit 001<br /><span className="text-[#E5E0D0] mt-1 block">Clarity</span>
            </span>
          </div>

          <div className="flex-1 bg-[#050505] p-8 flex flex-col items-center justify-center gap-6 group hover:bg-[#0A0A0A] transition-colors">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="0.6" xmlns="http://www.w3.org/2000/svg" className="opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]">
              <g transform="translate(50,50)">
                <circle r="45" /><circle r="32" /><circle r="18" /><circle r="6" />
                <ellipse rx="15" ry="40" transform="rotate(0)" />
                <ellipse rx="15" ry="40" transform="rotate(45)" />
                <ellipse rx="15" ry="40" transform="rotate(90)" />
                <ellipse rx="15" ry="40" transform="rotate(135)" />
              </g>
            </svg>
            <span className="text-[8px] tracking-[0.2em] uppercase text-[#E5E0D0]/50 text-center group-hover:text-[#D4AF37] transition-colors">
              Unit 017<br /><span className="text-[#E5E0D0] mt-1 block">Expansion</span>
            </span>
          </div>

          <div className="flex-1 bg-[#050505] p-8 flex flex-col items-center justify-center gap-6 group hover:bg-[#0A0A0A] transition-colors">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="0.6" xmlns="http://www.w3.org/2000/svg" className="opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]">
              <g transform="translate(50,50)">
                <circle r="45" /><circle r="28" />
                <polygon points="0,-45 39,22.5 -39,22.5" strokeWidth="0.8" />
                <polygon points="0,45 39,-22.5 -39,-22.5" strokeWidth="0.8" />
                <polygon points="0,-28 24.2,14 -24.2,14" strokeWidth="0.5" />
                <polygon points="0,28 24.2,-14 -24.2,-14" strokeWidth="0.5" />
                <circle r="4" cx="0" cy="-28" />
                <circle r="4" cx="24.2" cy="14" />
                <circle r="4" cx="-24.2" cy="14" />
              </g>
            </svg>
            <span className="text-[8px] tracking-[0.2em] uppercase text-[#E5E0D0]/50 text-center group-hover:text-[#D4AF37] transition-colors">
              Unit 033<br /><span className="text-[#E5E0D0] mt-1 block">Integration</span>
            </span>
          </div>
        </section>

        {/* Ticker Section */}
        <div className="border-y border-[#D4AF37]/30 bg-[#0A0A0A] overflow-hidden whitespace-nowrap py-4 mb-4">
          <div className="inline-block anim-ticker">
            {[1, 2, 3].map((_, idx) => (
              <React.Fragment key={idx}>
                <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase px-8">Coordinates: 48.3794° N, 31.1656° E</span>
                <span className="text-[9px] text-[#E5E0D0]/30">◆</span>
                <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase px-8">Temporal Shift: UTC+2 / Epoch 2024.001</span>
                <span className="text-[9px] text-[#E5E0D0]/30">◆</span>
                <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase px-8">Object: 33 Units / Hand-Drawn / Digitized</span>
                <span className="text-[9px] text-[#E5E0D0]/30">◆</span>
                <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase px-8">Status: Digital Download Active</span>
                <span className="text-[9px] text-[#E5E0D0]/30">◆</span>
                <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase px-8">
                  Classification: <span className="bg-[#D4AF37] text-black px-1 mx-1 line-through decoration-black">REDACTED</span>
                </span>
                <span className="text-[9px] text-[#E5E0D0]/30">◆</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Deep Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 px-2">
          <span className="text-[8px] tracking-[0.15em] text-[#E5E0D0]/40 uppercase mb-2 md:mb-0">
            The Mandala Project / <span className="bg-[#E5E0D0]/20 text-transparent px-1">███</span> Dept.
          </span>
          <span className="text-[8px] tracking-[0.15em] text-[#D4AF37]/60 uppercase">
            All geometry is intentional
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default MandalaPage;

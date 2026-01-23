import React from 'react';
import { motion } from 'framer-motion';
import { GoldenFrame } from './GoldenFrame';

const Sector = ({ title, number, children, className = "" }) => (
    <div className={`border-t border-[#D4AF37]/20 pt-8 pb-12 ${className}`}>
        <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[10px] text-[#D4AF37] opacity-50">/ SECTION_{number}</span>
            <h2 className="font-royal text-2xl tracking-[0.2em] text-[#E5E0D0] uppercase">{title}</h2>
        </div>
        {children}
    </div>
);

const TechnicalBox = ({ title, children, className = "" }) => (
    <div className={`border border-[#D4AF37]/10 p-6 bg-[#D4AF37]/[0.02] relative group hover:border-[#D4AF37]/30 transition-colors ${className}`}>
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/40" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D4AF37]/40" />
        <span className="absolute -top-3 left-4 bg-[#050505] px-2 font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest">
            {title}
        </span>
        {children}
    </div>
);

export default function ManifestoPage() {
    return (
        <GoldenFrame>
            <div className="min-h-screen bg-[#050505] text-[#E5E0D0] py-40 px-6 md:px-20 font-sans relative overflow-hidden">

                {/* Architectural Grid Overlay */}
                <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]"
                    style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', size: '40px 40px' }} />

                <div className="max-w-6xl mx-auto relative z-10">

                    {/* Header */}
                    <header className="mb-24 border-b-2 border-[#D4AF37] pb-12 flex flex-col md:flex-row justify-between items-end gap-8">
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="font-mono text-xs text-[#D4AF37] mb-4 tracking-[0.5em] uppercase"
                            >
                                Strategic Document // Rev. 01.2026
                            </motion.div>
                            <h1 className="font-royal text-6xl md:text-8xl leading-none tracking-tighter">
                                MANIFESTO
                            </h1>
                            <p className="font-baroque italic text-3xl text-[#D4AF37] mt-4 opacity-80">
                                Digital Kunstkamera Strategy
                            </p>
                        </div>
                        <div className="w-full md:w-64 font-mono text-[10px] text-zinc-500 uppercase leading-relaxed text-right border-r-2 border-[#D4AF37] pr-6">
                            Concept: Trash-Luxury<br />
                            Stack: Modern React<br />
                            Author: Hexis Intelligence
                        </div>
                    </header>

                    {/* PART I: DNA */}
                    <Sector title="DNA & Naming" number="01">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div className="space-y-6">
                                <p className="font-mono text-sm leading-relaxed text-zinc-400">
                                    <span className="text-white font-bold underline decoration-[#D4AF37]">The Core Conflict:</span> <br />
                                    "Блошка" (Market) vs "Галерея" (Art). We occupy the <span className="text-[#D4AF37]">Curated Vintage</span> niche.
                                </p>
                                <TechnicalBox title="Positioning">
                                    <p className="font-mono text-xs text-zinc-400 mb-4">
                                        "We don't sell objects; we sell stories. An old mirror is glass. A mirror used by a 1920s courtesan is an <span className="text-white">artifact</span>."
                                    </p>
                                    <p className="font-baroque italic text-xl text-[#E5E0D0]">
                                        "Sarcastic Aristocracy: Vogue meets Fight Club."
                                    </p>
                                </TechnicalBox>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#D4AF37] mb-4">Naming Simulation:</h4>
                                <div className="p-4 border border-[#D4AF37]/10 space-y-4">
                                    <div>
                                        <span className="font-royal text-sm block">A: Madame laBloxa</span>
                                        <span className="font-mono text-[9px] text-zinc-600 uppercase italic">Ugly Cool / Memory Filter</span>
                                    </div>
                                    <div className="opacity-40">
                                        <span className="font-royal text-sm block">B: Le Cabinet / L'Archive</span>
                                        <span className="font-mono text-[9px] text-zinc-600 uppercase italic">Safe / Generic Premium</span>
                                    </div>
                                    <div>
                                        <span className="font-royal text-sm block text-[#D4AF37]">C: The Hybrid (Winner)</span>
                                        <span className="font-mono text-[9px] text-zinc-400 uppercase">Bold name + Heavy Luxury visual proof.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Sector>

                    {/* PART II: AUDIENCE */}
                    <Sector title="Target Ecosystem" number="02">
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    id: "DECORATORS",
                                    title: "The Decorators",
                                    pain: "Unique props for sets/restaurants.",
                                    solution: "Visual focus, color search, rapid shipping."
                                },
                                {
                                    id: "GIFT_HUNTERS",
                                    title: "Gift Hunters",
                                    pain: "The 'Already has everything' problem.",
                                    solution: "Storytelling, legend cards, bespoke sets."
                                },
                                {
                                    id: "EMOTIONAL",
                                    title: "Emotional Buyers",
                                    pain: "Ennui. Desire for an 'Exclusive Club'.",
                                    solution: "Instagram FOMO, Liminal content, Secret access."
                                }
                            ].map((group) => (
                                <TechnicalBox key={group.id} title={group.id}>
                                    <h5 className="font-royal text-lg mb-2">{group.title}</h5>
                                    <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-tighter mb-4">{group.pain}</p>
                                    <div className="h-[1px] bg-[#D4AF37]/20 w-full mb-4" />
                                    <p className="font-mono text-xs text-zinc-300 italic">{group.solution}</p>
                                </TechnicalBox>
                            ))}
                        </div>
                    </Sector>

                    {/* PART III: MARKETING */}
                    <Sector title="Marketing Funnels" number="03" className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-4 font-mono text-xs">
                            <div className="flex gap-4">
                                <span className="text-[#D4AF37]">01_WIND_SOURCE:</span>
                                <span className="text-zinc-400">TikTok/IG detail-porn, ASMR, SEO per-lot keywords.</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-[#D4AF37]">02_RETENTION_SALON:</span>
                                <span className="text-zinc-400">Telegram "Salon" with 24h early access. Community core.</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-[#D4AF37]">03_CONVERSION:</span>
                                <span className="text-zinc-400">Apple Pay for fast conversion; DM for High-Ticket.</span>
                            </div>
                        </div>
                        <div className="relative h-32 border-l border-b border-[#D4AF37]/30 flex items-center justify-center">
                            <span className="font-royal text-4xl opacity-10 absolute rotate-12">CONVERSION_LOOP</span>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 border border-[#D4AF37]/40 rotate-45 flex items-center justify-center"><span className="font-mono text-center text-[8px] -rotate-45">VIEW</span></div>
                                <div className="w-8 h-[1px] bg-[#D4AF37]/40 self-center" />
                                <div className="w-12 h-12 border border-[#D4AF37]/40 rotate-45 flex items-center justify-center"><span className="font-mono text-center text-[8px] -rotate-45">DESIRE</span></div>
                                <div className="w-8 h-[1px] bg-[#D4AF37]/40 self-center" />
                                <div className="w-12 h-12 border border-[#D4AF37]/40 rotate-45 flex items-center justify-center bg-[#D4AF37]/20"><span className="font-mono text-center text-[8px] -rotate-45 text-white">LOT</span></div>
                            </div>
                        </div>
                    </Sector>

                    {/* PART IV: STACK */}
                    <Sector title="Technical Stack" number="04">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 bg-[#D4AF37]/10">
                            {[
                                { name: "BOUTIQUE (Optimum)", desc: "Next.js + Sanity CMS", feature: "Mobile management, stunning animations.", price: "$$" },
                                { name: "EMPIRE (Scale)", desc: "Shopify / Medusa + CRM", feature: "Automation, analytics, multi-region.", price: "$$$" },
                                { name: "VISITE (Current)", desc: "Modern React (Vite)", feature: "Pure aesthetic, code-driven content.", price: "$" }
                            ].map((lvl) => (
                                <div key={lvl.name} className="bg-[#050505] p-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <h6 className="font-royal text-sm">{lvl.name}</h6>
                                        <span className="font-mono text-[#D4AF37] text-xs">{lvl.price}</span>
                                    </div>
                                    <p className="font-mono text-[10px] text-zinc-500 uppercase">{lvl.desc}</p>
                                    <p className="font-sans text-xs text-zinc-400 leading-relaxed italic">"{lvl.feature}"</p>
                                </div>
                            ))}
                        </div>
                    </Sector>

                    {/* QUESTIONNAIRE */}
                    <footer className="mt-32 pt-20 border-t-4 border-[#D4AF37]">
                        <h3 className="font-royal text-4xl mb-12 text-center underline decoration-[#D4AF37]/30 underline-offset-8">QUESTIONNAIRE POUR MADAME</h3>
                        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 font-mono text-xs">
                            <div className="space-y-4">
                                <p className="text-[#D4AF37] border-b border-[#D4AF37]/20 pb-2 uppercase">B1_Business_Model</p>
                                <ul className="space-y-2 text-zinc-400">
                                    <li>- Average check ($20 or $2000)?</li>
                                    <li>- Current inventory count?</li>
                                    <li>- Refresh rhythm (Daily/Seasonal)?</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[#D4AF37] border-b border-[#D4AF37]/20 pb-2 uppercase">B2_Processes</p>
                                <ul className="space-y-2 text-zinc-400">
                                    <li>- Content creator availability?</li>
                                    <li>- Current "Card to Box" funnel pain points?</li>
                                    <li>- Global vs Local logistics reach?</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[#D4AF37] border-b border-[#D4AF37]/20 pb-2 uppercase">B3_Marketing</p>
                                <ul className="space-y-2 text-zinc-400">
                                    <li>- Defining USP (Price/Expertise/Speed)?</li>
                                    <li>- Existing client database exportability?</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[#D4AF37] border-b border-[#D4AF37]/20 pb-2 uppercase">B4_Visual</p>
                                <ul className="space-y-2 text-zinc-400">
                                    <li>- Top 3 "Aesthetic Orgasm" references?</li>
                                    <li>- List of Visual Forbidden elements?</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-20 text-center font-mono text-[8px] text-zinc-700 tracking-[1em] uppercase">
                            END_OF_DOCUMENT // HEXIS_LAB_PROTOCOLS
                        </div>
                    </footer>

                </div>
            </div>
        </GoldenFrame>
    );
}

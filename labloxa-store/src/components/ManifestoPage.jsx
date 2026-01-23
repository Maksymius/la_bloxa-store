import React from 'react';
import { motion } from 'framer-motion';
// Убедись, что путь правильный
import { GoldenFrame } from './GoldenFrame';

const Sector = ({ title, number, children, className = "" }) => (
    <div className={`border-t border-[#D4AF37]/20 pt-8 pb-12 ${className}`}>
        <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-[10px] text-[#D4AF37] opacity-50">/ СЕКЦИЯ_{number}</span>
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
                    style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="max-w-6xl mx-auto relative z-10">

                    {/* Header */}
                    <header className="mb-24 border-b-2 border-[#D4AF37] pb-12 flex flex-col md:flex-row justify-between items-end gap-8">
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="font-mono text-xs text-[#D4AF37] mb-4 tracking-[0.5em] uppercase"
                            >
                                Стратегический документ // Версия 1.0
                            </motion.div>
                            <h1 className="font-royal text-5xl md:text-8xl leading-none tracking-tighter text-[#E5E0D0]">
                                МАНИФЕСТ
                            </h1>
                            <p className="font-baroque italic text-2xl md:text-3xl text-[#D4AF37] mt-4 opacity-80">
                                Стратегия Digital Kunstkamera
                            </p>
                        </div>
                        <div className="w-full md:w-64 font-mono text-[10px] text-zinc-500 uppercase leading-relaxed text-right border-r-2 border-[#D4AF37] pr-6">
                            Концепт: Trash-Luxury<br />
                            Стек: Modern React<br />
                            Автор: Hexis Intelligence
                        </div>
                    </header>

                    {/* PART I: DNA */}
                    <Sector title="ДНК Бренда & Нейминг" number="01">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div className="space-y-6">
                                <p className="font-mono text-sm leading-relaxed text-zinc-400">
                                    <span className="text-white font-bold underline decoration-[#D4AF37]">Главный Конфликт:</span> <br />
                                    "Блошка" (Рынок) против "Галереи" (Искусство). Мы занимаем нишу <span className="text-[#D4AF37]">Curated Vintage</span>.
                                </p>
                                <TechnicalBox title="Позиционирование">
                                    <p className="font-mono text-xs text-zinc-400 mb-4">
                                        "Мы продаем не предметы, а истории. Старое зеркало — это стекло. Зеркало парижской куртизанки 1920-х — это <span className="text-white">артефакт</span>."
                                    </p>
                                    <p className="font-baroque italic text-xl text-[#E5E0D0]">
                                        Tone of Voice: Саркастичный Аристократизм.
                                    </p>
                                </TechnicalBox>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-mono text-[11px] uppercase tracking-widest text-[#D4AF37] mb-4">Варианты Имени:</h4>
                                <div className="p-4 border border-[#D4AF37]/10 space-y-4">
                                    <div>
                                        <span className="font-royal text-sm block">A: Madame laBloxa</span>
                                        <span className="font-mono text-[9px] text-zinc-600 uppercase italic">Дерзко / Ugly Cool / Фильтр снобов</span>
                                    </div>
                                    <div className="opacity-40">
                                        <span className="font-royal text-sm block">B: Le Cabinet / L'Archive</span>
                                        <span className="font-mono text-[9px] text-zinc-600 uppercase italic">Безопасно / Скучный Премиум</span>
                                    </div>
                                    <div>
                                        <span className="font-royal text-sm block text-[#D4AF37]">C: Гибрид (Победитель)</span>
                                        <span className="font-mono text-[9px] text-zinc-400 uppercase">Дерзкое имя + Тяжелый Люкс визуал.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Sector>

                    {/* PART II: AUDIENCE */}
                    <Sector title="Целевая Аудитория" number="02">
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    id: "ДЕКОРАТОРЫ",
                                    title: "Декораторы",
                                    pain: "Нужен реквизит для съемок/ресторанов.",
                                    solution: "Акцент на визуал, поиск по цвету, быстрая доставка."
                                },
                                {
                                    id: "ПОДАРКИ",
                                    title: "Искатели Подарков",
                                    pain: "Проблема 'У него уже все есть'.",
                                    solution: "Сторитейлинг, карточка с легендой, готовые сеты."
                                },
                                {
                                    id: "ЭСТЕТЫ",
                                    title: "Эмоциональные",
                                    pain: "Скука. Желание попасть в 'Закрытый Клуб'.",
                                    solution: "Instagram FOMO, Лимитированность, Тайный доступ."
                                }
                            ].map((group) => (
                                <TechnicalBox key={group.id} title={group.id}>
                                    <h5 className="font-royal text-lg mb-2 text-[#E5E0D0]">{group.title}</h5>
                                    <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-tighter mb-4">{group.pain}</p>
                                    <div className="h-[1px] bg-[#D4AF37]/20 w-full mb-4" />
                                    <p className="font-mono text-xs text-zinc-300 italic">"{group.solution}"</p>
                                </TechnicalBox>
                            ))}
                        </div>
                    </Sector>

                    {/* PART III: MARKETING */}
                    <Sector title="Воронка Продаж" number="03" className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-6 font-mono text-xs">
                            <div className="flex gap-4">
                                <span className="text-[#D4AF37]">01_ВИТРИНА (Traffic):</span>
                                <span className="text-zinc-400">TikTok/IG макро-съемка, ASMR звуки, SEO по редким запросам.</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-[#D4AF37]">02_ЗАХВАТ (Retention):</span>
                                <span className="text-zinc-400">Telegram "Салон". Лоты появляются там на 24ч раньше сайта. Ядро фанатов.</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-[#D4AF37]">03_ПРОДАЖА (Conversion):</span>
                                <span className="text-zinc-400">Сайт без барьеров → Оплата картой или бронь в личку для VIP.</span>
                            </div>
                        </div>
                        <div className="relative h-32 border-l border-b border-[#D4AF37]/30 flex items-center justify-center">
                            <span className="font-royal text-4xl opacity-10 absolute rotate-12 text-[#E5E0D0]">CONVERSION_LOOP</span>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 border border-[#D4AF37]/40 rotate-45 flex items-center justify-center"><span className="font-mono text-center text-[8px] -rotate-45 text-[#D4AF37]">ВЗГЛЯД</span></div>
                                <div className="w-8 h-[1px] bg-[#D4AF37]/40 self-center" />
                                <div className="w-12 h-12 border border-[#D4AF37]/40 rotate-45 flex items-center justify-center"><span className="font-mono text-center text-[8px] -rotate-45 text-[#D4AF37]">ЖЕЛАНИЕ</span></div>
                                <div className="w-8 h-[1px] bg-[#D4AF37]/40 self-center" />
                                <div className="w-12 h-12 border border-[#D4AF37]/40 rotate-45 flex items-center justify-center bg-[#D4AF37]/20"><span className="font-mono text-center text-[8px] -rotate-45 text-white">ЛОТ</span></div>
                            </div>
                        </div>
                    </Sector>

                    {/* PART IV: STACK */}
                    <Sector title="Технический Стек" number="04">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-1 bg-[#D4AF37]/10">
                            {[
                                { name: "ВИЗИТКА (Старт)", desc: "Landing Page (React)", feature: "Просто красиво. Без админки. Ручное управление.", price: "$" },
                                { name: "БУТИК (Оптимально)", desc: "Next.js + Sanity CMS", feature: "Админка с телефона. Удобный каталог. Сбор базы.", price: "$$" },
                                { name: "ИМПЕРИЯ (Масштаб)", desc: "Shopify / Medusa + CRM", feature: "Полная автоматизация, склад, аналитика, налоги.", price: "$$$" },
                            ].map((lvl) => (
                                <div key={lvl.name} className="bg-[#050505] p-6 space-y-4 group hover:bg-[#0a0a0a] transition-colors">
                                    <div className="flex justify-between items-start">
                                        <h6 className="font-royal text-sm text-[#E5E0D0]">{lvl.name}</h6>
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
                        <h3 className="font-royal text-3xl md:text-4xl mb-12 text-center underline decoration-[#D4AF37]/30 underline-offset-8 text-[#E5E0D0]">
                            ВОПРОСНИК ДЛЯ МАДАМ
                        </h3>
                        <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 font-mono text-xs">
                            <div className="space-y-4">
                                <p className="text-[#D4AF37] border-b border-[#D4AF37]/20 pb-2 uppercase">01_Бизнес_Модель</p>
                                <ul className="space-y-2 text-zinc-400">
                                    <li>- Какой средний чек (200 грн или $2000)?</li>
                                    <li>- Сколько товаров сейчас в наличии?</li>
                                    <li>- Как часто обновляется коллекция?</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[#D4AF37] border-b border-[#D4AF37]/20 pb-2 uppercase">02_Процессы</p>
                                <ul className="space-y-2 text-zinc-400">
                                    <li>- Есть ли кому делать красивые фото/тексты?</li>
                                    <li>- Что бесит в текущем процессе продажи?</li>
                                    <li>- Куда доставляем (Локально / Мир)?</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[#D4AF37] border-b border-[#D4AF37]/20 pb-2 uppercase">03_Маркетинг</p>
                                <ul className="space-y-2 text-zinc-400">
                                    <li>- Ваша Суперсила (Цена / Экспертиза / Скорость)?</li>
                                    <li>- Есть ли уже база клиентов (телефоны/почты)?</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[#D4AF37] border-b border-[#D4AF37]/20 pb-2 uppercase">04_Визуал</p>
                                <ul className="space-y-2 text-zinc-400">
                                    <li>- Топ-3 референса (Что вызывает восторг)?</li>
                                    <li>- Чего точно НЕ должно быть на сайте?</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-20 text-center font-mono text-[8px] text-zinc-700 tracking-[1em] uppercase">
                            КОНЕЦ ДОКУМЕНТА // HEXIS_INTELLIGENCE
                        </div>
                    </footer>

                </div>
            </div>
        </GoldenFrame>
    );
}
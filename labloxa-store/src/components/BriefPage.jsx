import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShieldCheck, Zap, Globe, Database, Bot, Minus } from 'lucide-react';
import { GoldenFrame } from './GoldenFrame';

export default function BriefPage() {
    const [loading, setLoading] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    // Обработка формы
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Эмуляция отправки
        setTimeout(() => {
            setLoading(false);
            setShowNotification(true);
            // Скрыть уведомление через 3 секунды
            setTimeout(() => setShowNotification(false), 3000);
        }, 1500);
    };

    // Общие классы для стилей (замена shadcn)
    const inputClass = "w-full bg-transparent border-b border-[#D4AF37]/30 py-2 text-[#E5E0D0] placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition-colors font-baroque text-lg";
    const checkboxClass = "appearance-none w-4 h-4 border border-[#D4AF37] rounded-sm checked:bg-[#D4AF37] checked:border-transparent cursor-pointer relative after:content-[''] after:hidden checked:after:block after:w-2 after:h-2 after:bg-black after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2";

    return (
        <GoldenFrame>
            <div className="min-h-screen bg-[#050505] text-[#E5E0D0] pb-24 relative font-sans">

                {/* === NOTIFICATION (TOAST) === */}
                <AnimatePresence>
                    {showNotification && (
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="fixed top-6 right-6 z-[100] bg-[#080808] border border-[#D4AF37] p-4 shadow-2xl max-w-sm"
                        >
                            <h4 className="font-royal text-[#D4AF37] mb-1">Сообщение отправлено</h4>
                            <p className="font-mono text-xs text-zinc-400">Ваш запрос доставлен в цифровую канцелярию.</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* === HERO: THE MANIFESTO === */}
                <div className="pt-32 pb-16 px-6 text-center border-b border-[#D4AF37]/20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-mono text-xs text-[#D4AF37] uppercase tracking-[0.4em] mb-4">
                            Proposal for Madame
                        </p>
                        <h1 className="font-royal text-5xl md:text-7xl text-[#E5E0D0] mb-8">
                            Le Plan de Bataille
                        </h1>
                        <div className="max-w-2xl mx-auto text-zinc-400 font-mono text-xs md:text-sm leading-loose text-justify border-l-2 border-[#D4AF37] pl-6">
                            <p className="mb-4">
                                <span className="text-[#D4AF37] font-bold">1. О Безопасности:</span> Забудьте слово "Joomla". Это как сравнивать карету с Теслой.
                                <span className="text-white"> Modern React Stack</span> — это мировой стандарт. Дыры невозможны, потому что база данных спрятана.
                                Платежные данные не касаются нашего сервера — они идут напрямую в Банк через шифрованный канал.
                            </p>
                            <p>
                                <span className="text-[#D4AF37] font-bold">2. О Масштабе:</span> Ниже представлены три стратегии захвата мира. От "просто красиво" до "полный контроль".
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* === THE TRINITY (3 OPTIONS) === */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D4AF37]/20 border-b border-[#D4AF37]/20">

                    {/* OPTION 1 */}
                    <div className="p-8 hover:bg-[#0a0a0a] transition-colors group">
                        <h3 className="font-baroque italic text-3xl text-[#E5E0D0] mb-2 group-hover:text-[#D4AF37] transition-colors">
                            I. Le Visite
                        </h3>
                        <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6">
                            Визитка / Каталог
                        </p>
                        <div className="text-4xl font-royal text-[#D4AF37] mb-6">$</div>
                        <ul className="space-y-3 font-mono text-xs text-zinc-400 mb-8">
                            <li className="flex gap-2"><Check size={14} className="text-[#D4AF37]" /> Красивая витрина</li>
                            <li className="flex gap-2"><Check size={14} className="text-[#D4AF37]" /> Без Админки (код)</li>
                            <li className="flex gap-2"><Check size={14} className="text-[#D4AF37]" /> Контакт через Telegram</li>
                            <li className="flex gap-2 text-zinc-600"><Minus size={14} /> Нет Корзины</li>
                            <li className="flex gap-2 text-zinc-600"><Minus size={14} /> Нет Оплаты</li>
                        </ul>
                    </div>

                    {/* OPTION 2 */}
                    <div className="p-8 bg-[#D4AF37]/5 relative">
                        <div className="absolute top-0 right-0 bg-[#D4AF37] text-black font-mono text-[9px] px-2 py-1 uppercase font-bold">
                            Рекомендую
                        </div>
                        <h3 className="font-baroque italic text-3xl text-[#E5E0D0] mb-2">
                            II. Vernissage
                        </h3>
                        <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6">
                            Магазин + Админка
                        </p>
                        <div className="text-4xl font-royal text-[#D4AF37] mb-6">$$</div>
                        <ul className="space-y-3 font-mono text-xs text-zinc-300 mb-8">
                            <li className="flex gap-2"><Database size={14} className="text-[#D4AF37]" /> Админка (CMS)</li>
                            <li className="flex gap-2"><Globe size={14} className="text-[#D4AF37]" /> Добавление с телефона</li>
                            <li className="flex gap-2"><Check size={14} className="text-[#D4AF37]" /> Корзина + Заказы</li>
                            <li className="flex gap-2"><Check size={14} className="text-[#D4AF37]" /> Фильтры (Эпоха, Цена)</li>
                            <li className="flex gap-2 text-zinc-500"><Minus size={14} /> Оплата вручную</li>
                        </ul>
                    </div>

                    {/* OPTION 3 */}
                    <div className="p-8 hover:bg-[#0a0a0a] transition-colors group">
                        <h3 className="font-baroque italic text-3xl text-[#E5E0D0] mb-2 group-hover:text-[#D4AF37] transition-colors">
                            III. Imperium
                        </h3>
                        <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6">
                            Платформа + Автоматизация
                        </p>
                        <div className="text-4xl font-royal text-[#D4AF37] mb-6">$$$</div>
                        <ul className="space-y-3 font-mono text-xs text-zinc-400 mb-8">
                            <li className="flex gap-2"><ShieldCheck size={14} className="text-[#D4AF37]" /> Полная защита</li>
                            <li className="flex gap-2"><Zap size={14} className="text-[#D4AF37]" /> Эквайринг (Карты)</li>
                            <li className="flex gap-2"><Bot size={14} className="text-[#D4AF37]" /> Telegram Бот (CRM)</li>
                            <li className="flex gap-2"><Check size={14} className="text-[#D4AF37]" /> Личный кабинет</li>
                        </ul>
                    </div>
                </div>

                {/* === THE FORM === */}
                <div className="max-w-3xl mx-auto mt-24 px-6">
                    <div className="text-center mb-12">
                        <h2 className="font-royal text-4xl text-[#E5E0D0] mb-4">Ваш Ответ</h2>
                        <p className="font-mono text-xs text-zinc-500">Заполните манифест, чтобы мы начали стройку.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 border border-[#D4AF37]/20 p-8 md:p-12 bg-[#080808]">

                        {/* Name */}
                        <div className="grid gap-2">
                            <label className="font-mono text-xs uppercase text-[#D4AF37] tracking-widest">Имя (Кодовое)</label>
                            <input
                                type="text"
                                defaultValue="Madame laBloxa"
                                className={inputClass}
                            />
                        </div>

                        {/* Scale */}
                        <div className="grid gap-4">
                            <label className="font-mono text-xs uppercase text-[#D4AF37] tracking-widest">Масштаб</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {['Визитка ($)', 'Вернисаж ($$)', 'Империя ($$$)'].map((opt) => (
                                    <label key={opt} className="flex items-center space-x-2 border border-zinc-800 p-4 hover:border-[#D4AF37] transition-colors cursor-pointer group">
                                        <input type="checkbox" className={checkboxClass} />
                                        <span className="text-sm font-mono text-[#E5E0D0] group-hover:text-[#D4AF37] transition-colors">{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Tech Check */}
                        <div className="grid gap-4">
                            <label className="font-mono text-xs uppercase text-[#D4AF37] tracking-widest">Технические требования</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { id: 'admin', label: 'Админка (С телефона)', checked: true },
                                    { id: 'pay', label: 'Оплата на сайте (ФОП)', checked: false },
                                    { id: 'bot', label: 'Telegram Бот', checked: false },
                                    { id: 'gal', label: 'Галерея (Без цен)', checked: true }
                                ].map((item) => (
                                    <div key={item.id} className="flex items-center space-x-3">
                                        <input type="checkbox" id={item.id} defaultChecked={item.checked} className={checkboxClass} />
                                        <label htmlFor={item.id} className="text-sm text-zinc-400 font-mono">{item.label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Free Text */}
                        <div className="grid gap-2">
                            <label className="font-mono text-xs uppercase text-[#D4AF37] tracking-widest">Особые пожелания</label>
                            <textarea
                                placeholder="Напишите здесь свои мысли, страхи или пожелания..."
                                className="w-full bg-transparent border border-[#D4AF37]/30 p-4 text-[#E5E0D0] placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] min-h-[150px] font-sans text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full h-16 bg-[#D4AF37] hover:bg-[#E5E0D0] text-black transition-colors text-lg tracking-[0.3em] font-bold mt-8 font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={loading}
                        >
                            {loading ? "ШИФРОВАНИЕ..." : "ОТПРАВИТЬ БРИФ"}
                        </button>

                        <p className="text-center font-mono text-[9px] text-zinc-600 uppercase mt-4">
                            Нажимая кнопку, вы соглашаетесь с эстетикой барокко.
                        </p>

                    </form>
                </div>
            </div>
        </GoldenFrame>
    );
}

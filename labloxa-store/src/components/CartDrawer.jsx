import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
    const { cartItems, removeFromCart, isCartOpen, setIsCartOpen } = useCart();

    const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price), 0);

    const handleCheckout = () => {
        const itemLines = cartItems.map(i => `- ${i.title} (Lot #${i.id})`).join('%0D%0A');
        const subject = `Acquisition Inquiry - ${cartItems.length} Items`;
        const body = `Madame,%0D%0A%0D%0AI wish to inquire about the following items from your collection:%0D%0A%0D%0A${itemLines}%0D%0A%0D%0APlease arrange for their discreet delivery.%0D%0A%0D%0ASincerely,`;

        window.location.href = `mailto:contact@labloxa.store?subject=${subject}&body=${body}`;
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 z-[290] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#0A0A0A] border-l border-[#D4AF37]/30 z-[300] flex flex-col shadow-2xl shadow-black"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-[#D4AF37]/20 flex justify-between items-center bg-[#050505]">
                            <h2 className="font-baroque italic text-3xl text-[#D4AF37]">Le Panier</h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="text-[#E5E0D0] hover:text-[#D4AF37] hover:rotate-90 transition-all duration-300"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-[#E5E0D0]/30 space-y-4">
                                    <ShoppingBag size={48} strokeWidth={1} />
                                    <p className="font-mono text-xs uppercase tracking-widest">Your collection is empty</p>
                                </div>
                            ) : (
                                cartItems.map(item => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="flex gap-4 group"
                                    >
                                        <div className="w-20 h-24 bg-[#111] border border-[#D4AF37]/10 overflow-hidden shrink-0">
                                            <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-wider">Lot #{item.id}</span>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-zinc-600 hover:text-red-900 transition-colors px-2 -mr-2"
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </div>
                                                <h3 className="font-baroque italic text-xl text-[#E5E0D0] leading-none mt-1">{item.title}</h3>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <span className="font-mono text-xs text-zinc-500">{item.year}</span>
                                                <span className="font-mono text-sm text-[#D4AF37]">{item.price} ₴</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-[#D4AF37]/20 bg-[#080808]">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="font-royal text-xs text-[#E5E0D0]/50 uppercase tracking-widest">Total Estimated</span>
                                    <span className="font-mono text-xl text-[#D4AF37]">{totalPrice} ₴</span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-[#D4AF37] text-black font-royal uppercase tracking-[0.2em] py-4 hover:bg-[#C5A028] transition-colors flex items-center justify-center gap-4 text-xs font-bold"
                                >
                                    <span>Procceed to Inquiry</span>
                                    <ArrowRight size={16} />
                                </button>
                                <p className="text-center mt-4 font-mono text-[9px] text-zinc-600">
                                    Does not include shipping or soul tax.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

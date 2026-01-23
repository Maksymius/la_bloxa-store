import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const LotDetail = ({ lot, onClose }) => {
    const { addToCart } = useCart();

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!lot) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#000000]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 overflow-hidden"
            onClick={onClose}
            style={{ WebkitBackdropFilter: 'blur(20px)' }} // Safari-specific stronger blur
        >
            {/* Background Frame (Internal) */}
            <div className="absolute inset-4 md:inset-8 border border-[#D4AF37]/20 pointer-events-none" />

            {/* Close Button Container - Ensuring it stays on top and is clickable */}
            <div className="absolute top-4 right-4 md:top-20 md:right-20 z-[210]">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className="p-3 md:p-4 text-[#D4AF37] hover:rotate-90 transition-transform duration-500 cursor-pointer bg-black/50 rounded-full backdrop-blur-sm"
                    aria-label="Close detail view"
                >
                    <X size={32} className="md:w-10 md:h-10" strokeWidth={1} />
                </button>
            </div>

            <div
                className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-y-auto max-h-[90vh] custom-scrollbar px-4 relative z-10"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >

                {/* Visual Partition */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative aspect-[3/4] border border-[#D4AF37]/30 p-4 bg-[#0a0a0a]"
                >
                    <img
                        src={lot.img}
                        alt={lot.title}
                        className="w-full h-full object-contain filter contrast-125"
                    />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-royal text-[10px] tracking-[0.4em] text-[#D4AF37]/40 uppercase">
                        Lot Exhibition #{lot.id}
                    </div>
                </motion.div>

                {/* Textual Partition */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-8 py-8"
                >
                    <div>
                        <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-[0.5em] block mb-4">
                            Lot #{lot.id} // {lot.year}
                        </span>
                        <h2 className="font-baroque italic text-5xl md:text-7xl text-white mb-2 leading-none">
                            {lot.title}
                        </h2>
                        <p className="font-royal text-sm tracking-widest text-[#D4AF37]/60 uppercase">
                            {lot.provenance || "Provenance Inconnue"}
                        </p>
                    </div>

                    <div className="border-l border-[#D4AF37]/30 pl-8 space-y-6">
                        <p className="font-baroque text-lg md:text-xl text-[#E5E0D0] leading-relaxed italic">
                            {lot.fullStory || lot.desc}
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div>
                                <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37]/40 mb-2">Material</h4>
                                <p className="font-mono text-[11px] text-[#E5E0D0]">{lot.material || "Antique Composite"}</p>
                            </div>
                            <div>
                                <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37]/40 mb-2">Estimated Value</h4>
                                <p className="font-mono text-[11px] text-[#D4AF37] font-bold">{lot.price} ₴</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <button
                            onClick={() => addToCart(lot)}
                            className="group w-full md:w-auto px-12 py-5 bg-[#D4AF37] text-black font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-500 flex items-center justify-center gap-4"
                        >
                            Acquérir cet Objet <ShoppingBag size={14} />
                        </button>
                        <p className="mt-4 font-mono text-[9px] text-zinc-500 uppercase tracking-widest text-center md:text-left">
                            * Доставка артефактов осуществляется с осторожностью и почтением к их возрасту.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LotDetail;

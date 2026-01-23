// src/pages/Catalog.jsx
import { GoldenFrame } from '../components/GoldenFrame';
import ProductCard from '../components/ProductCard';
import { inventory } from '../data/inventory';

export default function Catalog({ onLotSelect }) {
    return (
        <GoldenFrame>
            <div className="pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 border-b border-[#D4AF37]/20 relative z-10">
                <h1 className="font-baroque italic text-center tracking-[0.05em] text-[#D4AF37]" style={{ fontSize: 'clamp(2rem, 8vw, 3rem)' }}>Архив Экспонатов</h1>
            </div>

            {/* GRID: Схожа на таблицю Excel, але красива */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t border-l border-[#D4AF37]/20 relative z-10">
                {inventory.map(item => (
                    <ProductCard
                        key={item.id}
                        item={item}
                        onClick={(lot) => onLotSelect(lot)}
                    />
                ))}
            </div>
        </GoldenFrame>
    );
}

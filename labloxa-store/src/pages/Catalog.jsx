// src/pages/Catalog.jsx
import { GoldenFrame } from '../components/GoldenFrame';
import ProductCard from '../components/ProductCard';
import { inventory } from '../data/inventory';

export default function Catalog() {
    return (
        <GoldenFrame>
            <div className="pt-24 pb-12 px-6 border-b border-[#D4AF37]/20">
                <h1 className="font-royal text-4xl text-center uppercase tracking-[0.2em] text-[#D4AF37]">Архив Экспонатов</h1>
            </div>

            {/* GRID: Схожа на таблицю Excel, але красива */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t border-l border-[#D4AF37]/20">
                {inventory.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </GoldenFrame>
    );
}

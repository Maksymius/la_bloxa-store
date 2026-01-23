// src/pages/Catalog.jsx
import { GoldenFrame } from '../components/GoldenFrame';
import ProductCard from '../components/ProductCard';

export default function Catalog() {
    const items = [
        {
            id: "042",
            title: "Люстерко Нарциса",
            year: "1905",
            price: "4500",
            desc: "Срібло, патина. Бачило більше гріхів, ніж сповідник.",
            img: "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=2864&auto=format&fit=crop"
        },
        {
            id: "089",
            title: "Келих Отрути",
            year: "1880",
            price: "2200",
            desc: "Богемське скло. Ідеально для вина і драматичних пауз.",
            img: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2864&auto=format&fit=crop"
        },
        {
            id: "102",
            title: "Порцелянова Панна",
            year: "Kyiv, 1920",
            price: "1850",
            desc: "Тендітність, що пережила три революції.",
            img: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=2864&auto=format&fit=crop"
        },
        {
            id: "015",
            title: "Скриня Таємниць",
            year: "Lviv, 1850",
            price: "15000",
            desc: "Дуб, коване залізо. Подвійне дно для ваших гріхів.",
            img: "https://images.unsplash.com/photo-1594901862991-885c45389658?q=80&w=2864&auto=format&fit=crop"
        },
    ];

    return (
        <GoldenFrame>
            <div className="pt-24 pb-12 px-6 border-b border-[#D4AF37]/20">
                <h1 className="font-royal text-4xl text-center uppercase tracking-[0.2em] text-[#D4AF37]">Архів Експонатів</h1>
            </div>

            {/* GRID: Схожа на таблицю Excel, але красива */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-t border-l border-[#D4AF37]/20">
                {items.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </GoldenFrame>
    );
}

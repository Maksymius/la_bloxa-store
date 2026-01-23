// src/components/ProductCard.jsx
const ProductCard = ({ item, onClick }) => (
    <div
        onClick={() => onClick(item)}
        className="group relative border-r border-b border-[#D4AF37]/20 bg-[#050505] hover:bg-[#0a0a0a] transition-colors aspect-[3/4] flex flex-col justify-between p-4 md:p-6 cursor-pointer">

        {/* Image Container */}
        <div className="relative flex-1 overflow-hidden mb-6">
            <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-contain filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />

            {/* Price Tag (Technical) */}
            <div className="absolute top-0 right-0 bg-[#D4AF37] text-black font-mono text-xs px-2 py-1 font-bold">
                {item.price} ₴
            </div>
        </div>

        {/* Info */}
        <div>
            <div className="flex justify-between items-baseline mb-2">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Lot #{item.id}</span>
                <span className="font-mono text-[9px] text-zinc-500 uppercase">{item.year}</span>
            </div>
            <h3 className="font-baroque italic leading-none mb-2 group-hover:text-[#D4AF37] transition-colors" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}>
                {item.title}
            </h3>
            <p className="font-mono text-[10px] text-zinc-400 line-clamp-2">
                {item.desc}
            </p>
        </div>
    </div>
);

export default ProductCard;

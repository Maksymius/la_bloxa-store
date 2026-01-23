export default function Grid() {
    return (
        <div className="relative z-10 bg-void py-24 min-h-screen">
            <div className="container mx-auto px-4">
                <h2 className="font-serif text-4xl text-gold mb-12 text-center">Collection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="aspect-[3/4] bg-stone-900 border border-white/10 flex items-center justify-center">
                            <span className="text-white/20 font-serif">Item {item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

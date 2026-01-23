// src/components/Hero.jsx
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const textRef = useRef(null)
    const imageRef = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Анімація появи тексту
            gsap.from(".hero-char", {
                y: 100,
                opacity: 0,
                stagger: 0.05,
                duration: 1,
                ease: "power4.out",
                delay: 0.5
            })

            // Паралакс картинки при скролі
            gsap.to(imageRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            })
        }, textRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={textRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Декоративна рамка */}
            <div className="absolute inset-8 border border-gold/20 pointer-events-none z-20"></div>

            <div className="z-30 text-center mix-blend-difference">
                <p className="font-cursive text-3xl md:text-5xl text-gold mb-6 hero-char">Le Cabinet de</p>
                <h1 className="font-serif text-[12vw] leading-[0.8] text-parchment uppercase tracking-tighter">
                    <span className="block hero-char">Madame</span>
                    <span className="block hero-char text-gold italic font-light">laBLOXA</span>
                </h1>
            </div>

            {/* Бекграунд/Хазяйка */}
            <div className="absolute inset-0 z-0 opacity-40 grayscale contrast-125">
                <img
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                    alt="The Founder"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    )
}

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";

export default function TeamSection() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Check if mobile on client side
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const nextSlide = () => {
        if (sliderRef.current && currentSlide < 3) {
            setCurrentSlide(currentSlide + 1);
            sliderRef.current.scrollTo({
                left: sliderRef.current.scrollLeft + sliderRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    const prevSlide = () => {
        if (sliderRef.current && currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
            sliderRef.current.scrollTo({
                left: sliderRef.current.scrollLeft - sliderRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    const professionals = [
        {
            name: "Nome Sobrenome",
            specialty: "Direito trabalhista",
            image: "adv-1.svg"
        },
        {
            name: "Nome Sobrenome",
            specialty: "Direito trabalhista",
            image: "adv-2.svg"
        },
        {
            name: "Nome Sobrenome",
            specialty: "Direito trabalhista",
            image: "adv-3.svg"
        },
        {
            name: "Nome Sobrenome",
            specialty: "Direito trabalhista",
            image: "adv-4.svg"
        }
    ];

    return (
        <div className="py-16 px-8 flex flex-col justify-center items-center lg:px-20">
            <div className="flex lg:flex-row flex-col lg:justify-center lg:text-center gap-10 mb-10">
                <div>
                    <h3 className="uppercase font-sora text-sm tracking-wider mb-6">CONHEÇA A EQUIPE</h3>

                    <h2 className="text-3xl lg:text-4xl font-light font-sora mb-6">
                        Conheça nossos <br />
                        <span className="font-bold">Profissionais</span>
                    </h2>

                    <span className="text-gray-600 font-sora">
                        Abaixo, apresentamos os(as) advogados(as) e colaboradores(as) <br />
                        que integram nosso time:
                    </span>
                </div>
            </div>

            <div className="relative">
                {isMobile && (
                    <div className="flex justify-between absolute w-full top-1/2 -translate-y-1/2 z-10 px-4">
                        <button
                            onClick={prevSlide}
                            className={`bg-black/30 text-white p-2 rounded-full ${currentSlide === 0 ? 'opacity-30' : 'opacity-100'}`}
                            disabled={currentSlide === 0}
                        >
                            ←
                        </button>
                        <button
                            onClick={nextSlide}
                            className={`bg-black/30 text-white p-2 rounded-full ${currentSlide === 3 ? 'opacity-30' : 'opacity-100'}`}
                            disabled={currentSlide === 3}
                        >
                            →
                        </button>
                    </div>
                )}

                <div
                    ref={sliderRef}
                    className="flex justify-between overflow-x-auto md:overflow-visible md:flex-wrap gap-6 scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {professionals.map((professional, index) => (
                        <div
                            key={index}
                            className="min-w-[280px] snap-center flex-shrink-0 rounded-lg relative transition-all duration-300 md:hover:transform md:hover:scale-105 md:hover:shadow-xl"
                        >
                            <Image src={`/${professional.image}`} alt={professional.name} width={280} height={350} className="rounded-lg overflow-hidden h-[350px] relative" />
                        </div>
                    ))}
                </div>

                {isMobile && (
                    <div className="flex justify-center mt-6 gap-2">
                        {[0, 1, 2, 3].map((dot) => (
                            <div
                                key={dot}
                                className={`h-2 w-2 rounded-full ${currentSlide === dot ? 'bg-black' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
} 
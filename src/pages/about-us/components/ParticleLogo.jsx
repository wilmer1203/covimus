import React from 'react';
import { motion } from 'framer-motion';

const ParticleLogo = () => {
    const images = [
        "/assets/images/1.jpg",
        "/assets/images/3.jpg",
        "/assets/images/5.jpg",
        "/assets/images/6.jpg",
        "/assets/images/8.jpg",
        "/assets/images/9.jpg",
        "/assets/images/10.jpg",
        "/assets/images/11.jpeg",
        "/assets/images/asphalt-plant.png",
        "/assets/images/av_paseo.webp",
        "/assets/images/nosotros.webp",
        "/assets/images/Impacto Real_1.jpg",
        "/assets/images/Impacto Real_2.jpg",
        "/assets/images/Impacto Real_3.jpg",
        "/assets/images/planta.jpeg"
    ];

    // 5x7 Pixel Maps for COVIMUS
    const letters = {
        C: [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
        ],
        O: [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
        ],
        V: [
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
        ],
        I: [
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1],
        ],
        M: [
            [1, 0, 0, 0, 1],
            [1, 1, 0, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
        ],
        U: [
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
        ],
        S: [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1],
            [0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
        ]
    };

    const word = "COVIMUS".split("");

    const getRandomImage = () => images[Math.floor(Math.random() * images.length)];
    const getRandomRotation = () => Math.random() * 20 - 10; // -10 to 10 deg
    const getRandomOffset = () => Math.random() * 10 - 5; // -5 to 5 px

    return (
        <section className="py-40 bg-slate-950 relative overflow-hidden border-t border-white/5">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm mb-20 block opacity-60">
                        Nuestra Trayectoria en Cada Detalle
                    </span>

                    {/* Word Container */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {word.map((char, charIdx) => (
                            <div key={charIdx} className="relative grid grid-cols-5 gap-0 md:gap-1">
                                {letters[char].map((row, rowIdx) => (
                                    row.map((pixel, pixelIdx) => (
                                        <div key={`${rowIdx}-${pixelIdx}`} className="w-3 h-3 md:w-6 md:h-6 lg:w-9 lg:h-9 relative">
                                            {pixel === 1 ? (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0, rotate: getRandomRotation() }}
                                                    whileInView={{ opacity: 1, scale: 1.1 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: (charIdx * 0.1) + (rowIdx * 0.05),
                                                        duration: 0.5
                                                    }}
                                                    whileHover={{
                                                        scale: 1.8,
                                                        zIndex: 100,
                                                        rotate: 0,
                                                        transition: { duration: 0.2 }
                                                    }}
                                                    className="absolute inset-0 rounded-sm overflow-hidden border border-white/20 shadow-2xl cursor-pointer"
                                                    style={{
                                                        transform: `translate(${getRandomOffset()}px, ${getRandomOffset()}px) rotate(${getRandomRotation()}deg)`,
                                                        zIndex: Math.floor(Math.random() * 10)
                                                    }}
                                                >
                                                    <img
                                                        src={getRandomImage()}
                                                        alt=""
                                                        className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-300"
                                                    />
                                                </motion.div>
                                            ) : (
                                                <div className="w-full h-full" />
                                            )}
                                        </div>
                                    ))
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="mt-28 space-y-4">
                        <p className="text-slate-400 text-lg md:text-xl font-light tracking-widest uppercase max-w-2xl mx-auto">
                            Una estructura sólida forjada por miles de historias de éxito
                        </p>
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ParticleLogo;

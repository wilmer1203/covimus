import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VerticalSlot = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * images.length));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000 + Math.random() * 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full overflow-hidden bg-slate-900 border-x border-white/5">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
        </div>
    );
};

const LogoCollageSection = () => {
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

    // 10 vertical columns for the mosaic
    const columns = Array.from({ length: 10 });

    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
            <div className="max-w-[1800px] mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative w-full flex justify-center items-center"
                >
                    {/* SVG Container for the Masked Collage */}
                    <svg
                        viewBox="0 0 1000 300"
                        className="w-full h-auto max-w-[95vw] overflow-visible"
                    >
                        <defs>
                            {/* The Text as a Clip Path */}
                            <clipPath id="covimusText">
                                <text
                                    x="500" y="150"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fontFamily="Arial Black, sans-serif"
                                    fontWeight="900"
                                    fontSize="150"
                                >
                                    COVIMUS
                                </text>
                            </clipPath>
                        </defs>

                        {/* ForeignObject allows us to put React components inside SVG and mask them */}
                        <foreignObject
                            x="0" y="0"
                            width="1000" height="300"
                            clipPath="url(#covimusText)"
                        >
                            <div className="w-full h-full flex">
                                {columns.map((_, i) => (
                                    <div key={i} className="flex-1 h-full">
                                        <VerticalSlot images={images} />
                                    </div>
                                ))}
                            </div>
                        </foreignObject>

                        {/* Optional outline for extra definition */}
                        <text
                            x="500" y="150"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontFamily="Arial Black, sans-serif"
                            fontWeight="900"
                            fontSize="150"
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                            opacity="0.1"
                        >
                            COVIMUS
                        </text>
                    </svg>
                </motion.div>
            </div>

            {/* Depth Lighting */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-yellow-600/5 blur-[120px] rounded-full" />
            </div>

            {/* Edge Gradients */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-20" />
        </section>
    );
};

export default LogoCollageSection;

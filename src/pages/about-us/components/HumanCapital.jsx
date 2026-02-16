import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

// Helper Component for Cycling Images
const CyclingCard = ({ images, interval = 3000, className, overlayText }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images, interval]);

    return (
        <div className={`relative overflow-hidden group ${className}`}>
            <AnimatePresence mode="popLayout">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="Cycling content"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Overlay Gradient & Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            {overlayText && (
                <div className="absolute bottom-4 left-4 right-4 z-10 transition-transform duration-300 group-hover:translate-y-[-5px]">
                    <div className="h-1 w-8 bg-[#FFCC00] rounded-full mb-2" />
                    <p className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md">
                        {overlayText}
                    </p>
                </div>
            )}
        </div>
    );
};

const HumanCapital = () => {

    // Image Sets for each slot
    const slot1Images = [
        "/assets/images/motor_1.jpg",
        "/assets/images/Impacto Real_3.jpg",
        "/assets/images/ima_projects/2026/Doral_Beach/rehabilitacion-americo-vespucio-07.jpg"
    ];
    const slot2Images = [
        "/assets/images/1.jpg",
        "/assets/images/5.jpg",
        "/assets/images/ima_projects/2025/Av.Municipal/av-municipal-nov2025-01.jpg"
    ];
    const slot3Images = [
        "/assets/images/ima_projects/2025/Av.Bolivar/rehabilitacion-av-bolivar-01.jpg",
        "/assets/images/motor_2.jpg",
        "/assets/images/ima_projects/2025/Av.Municipal/av-municipal-nov2025-02.jpg"
    ];
    const slot4Images = [
        "/assets/images/ima_projects/2025/Calle_Colegio/rehabilitacion-calle-colegio-pozuelos-01.jpg",
        "/assets/images/3.jpg",
        "/assets/images/ima_projects/2025/Avenida_Universidad/rehabilitacion-av-universidad-02.jpg"
    ];
    // Bottom Row 4 Slots
    const slot5Images = [
        "/assets/images/ima_projects/2025/Avenida_Universidad/rehabilitacion-av-universidad-01.jpg",
        "/assets/images/ima_projects/2025/Isla_Cuba/av-municipal-isla-cuba-02.jpg",
        "/assets/images/ima_projects/2025/Av.Bolivar/rehabilitacion-av-bolivar-02.jpg"
    ];
    const slot6Images = [
        "/assets/images/ima_projects/2025/Los_Tubos_del_sector_Las_Delicias/calle-los-tubos-las-delicias-01.jpg",
        "/assets/images/3.jpg",
        "/assets/images/motor_1.jpg"
    ];
    const slot7Images = [
        "/assets/images/ima_projects/2025/Av.Bolivar/rehabilitacion-av-bolivar-06.jpg",
        "/assets/images/ima_projects/2025/Av.Municipal/av-municipal-nov2025-03.jpg",
        "/assets/images/1.jpg"
    ];
    const slot8Images = [
        "/assets/images/5.jpg",
        "/assets/images/ima_projects/2025/Calle_Colegio/rehabilitacion-calle-colegio-pozuelos-02.jpg",
        "/assets/images/Impacto Real_3.jpg"
    ];


    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-white/10 mb-6 backdrop-blur-md">
                        <Icon name="Users" size={16} color="var(--color-primary)" />
                        <span className="text-xs font-bold text-white tracking-widest uppercase">Capital Humano</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        El Motor de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C00000] via-[#F0F0F0] to-[#C00000] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">COVIMUS</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                        Más de 300 profesionales, técnicos y obreros comprometidos con la transformación de Sotillo.
                    </p>
                </div>
            </div>

            {/* Dynamic Mosaic Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">

                    {/* Item 1: FIXED VIDEO (2x2) */}
                    <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group shadow-2xl border border-white/10">
                        <video
                            src="/assets/vision_video.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end p-8">
                            <div>
                                <div className="h-1.5 w-16 bg-[#C00000] rounded-full mb-3" />
                                <h3 className="text-white font-black text-2xl md:text-3xl leading-none mb-1">Fuerza Operativa</h3>
                                <p className="text-slate-300 text-sm">Despliegue en 24 horas</p>
                            </div>
                        </div>
                    </div>

                    {/* Item 2: Dynamic Images (1x1) */}
                    <CyclingCard
                        images={slot1Images}
                        interval={4000}
                        className="col-span-1 row-span-1 rounded-3xl border border-white/5 bg-slate-900"
                        overlayText="Ingeniería Civil"
                    />

                    {/* Item 3: Dynamic Images (1x1) */}
                    <CyclingCard
                        images={slot2Images}
                        interval={3500}
                        className="col-span-1 row-span-1 rounded-3xl border border-white/5 bg-slate-900"
                        overlayText="Maquinaria Pesada"
                    />

                    {/* Item 4: Dynamic Images (1x1) */}
                    <CyclingCard
                        images={slot3Images}
                        interval={4500}
                        className="col-span-1 row-span-1 rounded-3xl border border-white/5 bg-slate-900"
                        overlayText="Obras Viales"
                    />

                    {/* Item 5: Dynamic Images (1x1) */}
                    <CyclingCard
                        images={slot4Images}
                        interval={5000}
                        className="col-span-1 row-span-1 rounded-3xl border border-white/5 bg-slate-900"
                        overlayText="Desarrollo Urbano"
                    />

                    {/* ROW 3 SPLIT INTO 4 SINGLE SLOTS */}

                    {/* Item 6 */}
                    <CyclingCard
                        images={slot5Images}
                        interval={6000}
                        className="col-span-1 row-span-1 rounded-3xl border border-white/5 bg-slate-900"
                        overlayText="Impacto Comunitario"
                    />

                    {/* Item 7 */}
                    <CyclingCard
                        images={slot6Images}
                        interval={5500}
                        className="col-span-1 row-span-1 rounded-3xl border border-white/5 bg-slate-900"
                        overlayText="Gestión Eficiente"
                    />

                    {/* Item 8 */}
                    <CyclingCard
                        images={slot7Images}
                        interval={4800}
                        className="col-span-1 row-span-1 rounded-3xl border border-white/5 bg-slate-900"
                        overlayText="Logística"
                    />

                    {/* Item 9 */}
                    <CyclingCard
                        images={slot8Images}
                        interval={5200}
                        className="col-span-1 row-span-1 rounded-3xl border border-white/5 bg-slate-900"
                        overlayText="Supervisión"
                    />

                </div>
            </div>
        </section>
    );
};

export default HumanCapital;

import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => {
    const missionVision = {
        mission: "Producir bienes o servicios para satisfacer necesidades sociales y materiales a través de la reinversión social de sus excedentes cuya propiedad es ejercida por el Estado en nombre de la comunidad en beneficio del colectivo; garantizando la calidad y cumpliendo con los más altos estándares de seguridad, salud, higiene y ambiente.",
        vision: "Ser reconocida como una Empresa de Producción Social, de Servicios, Mantenimiento y Construcción del sector Público, Petrolero y Petroquímico, a nivel nacional con los más altos estándares de desempeño."
    };

    return (
        <section className="bg-slate-950 overflow-hidden">

            {/* MISSION SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Video Side (Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative h-full min-h-[400px]"
                >
                    <video
                        src="/assets/mision_video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950" />
                </motion.div>

                {/* Text Side (Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center justify-center p-8 lg:p-20 relative"
                >
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                            Misión
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-8">
                            {missionVision.mission}
                        </p>
                        <div className="h-1 w-20 bg-[#FFCC00] rounded-full mb-4" />
                        <span className="text-[#FFCC00] font-bold tracking-widest uppercase text-xs">Nuestro Propósito</span>
                    </div>
                </motion.div>
            </div>

            {/* VISION SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Text Side (Left on Desktop) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center justify-center p-8 lg:p-20 relative order-2 lg:order-1"
                >
                    <div className="max-w-xl text-right lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                            Visión
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-8">
                            {missionVision.vision}
                        </p>
                        <div className="flex flex-col items-end lg:items-start">
                            <div className="h-1 w-20 bg-red-600 rounded-full mb-4" />
                            <span className="text-red-500 font-bold tracking-widest uppercase text-xs">Nuestro Norte</span>
                        </div>
                    </div>
                </motion.div>

                {/* Video Side (Right on Desktop) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative h-full min-h-[400px] order-1 lg:order-2"
                >
                    <video
                        src="/assets/vision_video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-950" />
                </motion.div>
            </div>

        </section>
    );
};

export default MissionVision;

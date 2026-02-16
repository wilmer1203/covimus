import React from 'react';
import { motion } from 'framer-motion';

const ObjectivesSection = () => {
    const objectives = {
        general: "Crear una unidad de trabajo colectiva destinada a la producción de bienes o servicios para satisfacer necesidades sociales y materiales a través de la reinversión social de sus excedentes, impulsando proyectos de infraestructura y vialidad en el territorio del Municipio.",
        specific: [
            "Fortalecer las políticas socialistas en vialidad y saneamiento.",
            "Optimizar el mantenimiento y asfaltado del Municipio Sotillo.",
            "Coordinar obras relativas al equipamiento urbano municipal.",
            "Ejecutar proyectos de acueductos rurales y urbanos.",
            "Gestionar financiamiento para proyectos de alto impacto vial."
        ]
    };

    return (
        <section className="py-24 relative overflow-hidden bg-slate-950">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid-pattern.svg')] opacity-5" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-900/10 blur-[100px] rounded-full" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFCC00]/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: General Objective */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#FFCC00] font-bold tracking-widest uppercase mb-4 block">Nuestra Meta</span>
                        <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                            Objetivos <br />Institucionales
                        </h2>
                        <p className="text-white/80 text-xl leading-relaxed mb-8">
                            {objectives.general}
                        </p>
                        <div className="h-1 w-32 bg-[#FFCC00] rounded-full" />
                    </motion.div>

                    {/* Right: Specific Objectives Cards */}
                    <div className="grid gap-4">
                        {objectives.specific.map((obj, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02, x: -10 }}
                                className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/20 transition-all cursor-default"
                            >
                                <div className="bg-[#FFCC00] text-slate-900 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                                    {i + 1}
                                </div>
                                <p className="text-white font-medium text-lg">{obj}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ObjectivesSection;

import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';

const InstitutionalAlliances = () => {
    const allies = [
        { name: "Alcaldía de Sotillo", image: "/assets/images/logo-sotillo.webp" },
        { name: "Gobernación de Anzoátegui", image: "/assets/images/gobernacion-Anzoategui.png" },
        { name: "PDVSA", image: "/assets/images/pdvvsa.png" },
        { name: "Gobierno Bolivariano", image: "/assets/images/logo-del-gobierno-bolivariano-de-venezuela.png" }
    ];

    return (
        <section className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                        Respaldo Institucional
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
                    {allies.map((ally, index) => (
                         <motion.div 
                            key={index}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="group cursor-default relative transition-all duration-500"
                         >
                            <div className="h-20 w-auto flex items-center justify-center">
                                <Image 
                                    src={ally.image} 
                                    alt={ally.name}
                                    className="h-full w-auto object-contain max-w-[180px] drop-shadow-sm"
                                />
                            </div>
                         </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstitutionalAlliances;

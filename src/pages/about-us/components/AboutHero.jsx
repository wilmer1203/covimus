import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const AboutHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
            <div className="absolute inset-0 z-0">
                {/* Reduced Overlay Opacity to show image clearly */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950 z-10" />
                <img 
                src="/assets/images/nosotros.jpg" 
                alt="COVIMUS Institutional" 
                className="w-full h-full object-cover object-top opacity-100" 
                />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-white/10 mb-8 backdrop-blur-md shadow-2xl">
                    <Icon name="Building2" size={18} color="var(--color-accent)" />
                    <span className="text-xs font-bold text-white tracking-widest uppercase">Nuestra Esencia</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-[0.95] tracking-tight drop-shadow-xl">
                    QUIÉNES <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">SOMOS</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                    La fuerza motriz detrás de la infraestructura social de Sotillo. Historia, valores y compromiso en cada obra.
                </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;

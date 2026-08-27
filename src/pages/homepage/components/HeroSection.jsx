import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const EASE = [0.22, 1, 0.36, 1];

const HeroSection = () => {
  const reduce = useReducedMotion();
  const rise = reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/av_paseo.webp"
          alt="Paseo de la Cruz y el Mar - Puerto La Cruz"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-slate-950/95" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl space-y-8">
          <motion.div {...rise} transition={{ duration: 0.8, ease: EASE }}>
            <div className="mb-6">
              <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase">E.P.S. COVIMUS S.A.</span>
              <div className="mt-2 h-px w-8 bg-accent" />
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-tight mb-6">
              TRANSFORMANDO <br />
              LA <span className="text-accent">VIALIDAD</span> <br />
              DE SOTILLO
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              Ejecución de proyectos de ingeniería civil y asfaltado bajo un modelo de gestión social
              eficiente. Construyendo el futuro de Puerto La Cruz.
            </p>
          </motion.div>

          <motion.div
            {...rise}
            transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link to="/projects">
              <button className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-yellow-400 text-slate-900 font-bold rounded-none flex items-center justify-center gap-3 transition-all uppercase tracking-wider group">
                <span>Ver Proyectos</span>
                <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full sm:w-auto px-8 py-4 border border-white text-white hover:bg-white hover:text-slate-900 font-bold rounded-none flex items-center justify-center gap-3 transition-all uppercase tracking-wider">
                <span>Contáctanos</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll — hacia la sección de indicadores */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent flex items-end justify-center pb-8 z-20 pointer-events-none">
        <motion.div
          className="text-white/30"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon name="ChevronDown" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

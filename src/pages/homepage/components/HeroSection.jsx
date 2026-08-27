import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { contracts } from '../../../data/contractsData';
import { hotAsphalt, coldAsphalt, compactedGravelPlan, heroFrenteA } from '../../../data/asphaltStatsData';
import CountUp from './CountUp';

const frenteB = contracts.find((contract) => contract.front === 'Frente B');

const DARK_CARD =
  'bg-gradient-to-br from-slate-900/90 to-black/90 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl';
const GLASS_CARD =
  'bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-[2rem]';

const HeroSection = () => {
  const reduce = useReducedMotion();
  const pop = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, scale: 0.94, y: 18 },
          animate: { opacity: 1, scale: 1, y: 0 },
          transition: { delay, type: 'spring', stiffness: 120, damping: 18 },
        };
  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/av_paseo.webp"
          alt="Paseo de la Cruz y el Mar - Puerto La Cruz"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/62 to-slate-950/96" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-transparent to-transparent" />
      </div>

      {/* Resplandor ambiental */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[600px] w-[600px] translate-x-1/4 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-28">

        {/* Intro */}
        <motion.div {...fade()} className="max-w-2xl">
          <div className="mb-5">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">E.P.S. COVIMUS S.A.</span>
            <div className="mt-2 h-px w-8 bg-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight">
            TRANSFORMANDO <br />
            LA <span className="text-accent">VIALIDAD</span> <br />
            DE SOTILLO
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-slate-300 leading-relaxed font-light">
            Ejecución de proyectos de ingeniería civil y asfaltado bajo un modelo de gestión social
            eficiente. Construyendo el futuro de Puerto La Cruz.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
          </div>
        </motion.div>

        {/* Bento de indicadores */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">

          {/* Asfaltado en Caliente — tarjeta principal */}
          <motion.div
            {...pop(0.15)}
            className={`col-span-2 ${DARK_CARD} p-6 lg:p-7 group hover:border-accent/30 transition-colors`}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-bold uppercase tracking-widest text-[10px]">Asfaltado en Caliente</span>
            </div>
            <h3 className="text-5xl lg:text-6xl font-black text-white tracking-tight">
              <CountUp to={hotAsphalt.totalTons} />
              <span className="text-slate-500 text-lg ml-2 font-bold">Ton</span>
            </h3>
            <p className="mt-3 text-slate-300 font-medium text-base leading-tight">
              Toneladas Colocadas
              <br />
              <span className="text-sm text-slate-500 font-normal">
                Gestión Dr. Jesús Marcano · Desde {hotAsphalt.since}
              </span>
            </p>
          </motion.div>

          {/* Año 2025 */}
          <motion.div
            {...pop(0.22)}
            className={`col-span-1 ${GLASS_CARD} p-5 hover:bg-white/10 transition-colors flex flex-col justify-between gap-3 min-h-[7rem]`}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-[10px]">Año 2025</span>
            <div>
              <p className="text-3xl font-black text-white tracking-tight leading-none">
                <CountUp to={hotAsphalt.year2025Tons} />
              </p>
              <p className="mt-1.5 text-slate-300 text-xs font-medium">Total del año</p>
            </div>
          </motion.div>

          {/* Año 2026 */}
          <motion.div
            {...pop(0.28)}
            className={`col-span-1 ${GLASS_CARD} p-5 hover:bg-white/10 transition-colors flex flex-col justify-between gap-3 min-h-[7rem]`}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-[10px]">Año 2026</span>
            <div>
              <p className="text-3xl font-black text-white tracking-tight leading-none">
                <CountUp to={hotAsphalt.year2026Tons} />
              </p>
              <p className="mt-1.5 text-slate-400 text-xs font-medium">{hotAsphalt.year2026PeriodLabel}</p>
            </div>
          </motion.div>

          {/* Asfaltado en Frío */}
          <motion.div
            {...pop(0.34)}
            className={`col-span-1 md:col-span-2 ${GLASS_CARD} p-5 lg:p-6 hover:bg-white/10 transition-colors flex flex-col justify-between gap-3 min-h-[7rem]`}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-[10px]">Asfaltado en Frío</span>
            <div>
              <p className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-none">
                <CountUp to={coldAsphalt.year2026Tons} />
                <span className="text-slate-400 text-sm ml-1.5 font-bold">Ton</span>
              </p>
              <p className="mt-1.5 text-slate-300 text-xs font-medium">Suma total · Año 2026</p>
            </div>
          </motion.div>

          {/* Plan Ripio Compactado */}
          <motion.div
            {...pop(0.4)}
            className={`col-span-1 md:col-span-2 ${GLASS_CARD} p-5 lg:p-6 hover:bg-white/10 transition-colors flex flex-col justify-between gap-3 min-h-[7rem]`}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-[10px]">Ripio Compactado</span>
            <div>
              <p className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-none">
                <CountUp to={compactedGravelPlan.year2026Tons} />
                <span className="text-slate-400 text-sm ml-1.5 font-bold">Ton</span>
              </p>
              <p className="mt-1.5 text-slate-300 text-xs font-medium">Suma total · Año 2026</p>
            </div>
          </motion.div>

          {/* Contrataciones — encabezado del grupo */}
          <motion.div {...fade(0.46)} className="col-span-2 md:col-span-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1">
            <div className="h-2 w-2 rounded-full bg-[#5B8DBE] animate-pulse" />
            <span className="text-[#7BA8D4] font-bold uppercase tracking-widest text-[11px]">Contrataciones</span>
            <span className="text-slate-400 text-xs">· Obras ejecutadas bajo contrato para terceros</span>
          </motion.div>

          {/* Frente A */}
          <motion.div
            {...pop(0.5)}
            className={`col-span-1 md:col-span-2 ${DARK_CARD} p-6 group hover:border-[#5B8DBE]/40 transition-colors`}
          >
            <span className="text-[#7BA8D4] font-bold uppercase tracking-widest text-[10px]">{heroFrenteA.front}</span>
            <h3 className="mt-2 text-4xl font-black text-[#FFCC00] tracking-tight leading-none">
              <CountUp to={heroFrenteA.tons} />
              <span className="text-slate-500 text-base ml-2 font-bold">Ton</span>
            </h3>
            <p className="mt-3 text-slate-300 font-medium text-sm leading-tight">
              Toneladas Colocadas
              <br />
              <span className="text-xs text-slate-500 font-normal">Contrato {heroFrenteA.contractNumber}</span>
            </p>
          </motion.div>

          {/* Frente B */}
          {frenteB && (
            <motion.div
              {...pop(0.56)}
              className={`col-span-1 md:col-span-2 ${DARK_CARD} p-6 group hover:border-[#5B8DBE]/40 transition-colors`}
            >
              <span className="text-[#7BA8D4] font-bold uppercase tracking-widest text-[10px]">{frenteB.front}</span>
              <h3 className="mt-2 text-4xl font-black text-[#FFCC00] tracking-tight leading-none">
                <CountUp to={frenteB.tons} />
                <span className="text-slate-500 text-base ml-2 font-bold">Ton</span>
              </h3>
              <p className="mt-3 text-slate-300 font-medium text-sm leading-tight">
                Toneladas Colocadas
                <br />
                <span className="text-xs text-slate-500 font-normal">
                  Contrato {frenteB.contractNumber} · PDVSA · TAECJAA
                </span>
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Indicador de scroll */}
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

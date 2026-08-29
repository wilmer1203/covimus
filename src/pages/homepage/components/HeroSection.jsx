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
  'bg-white/[0.09] backdrop-blur-md border border-white/10 rounded-[2rem]';

const HeroSection = () => {
  const reduce = useReducedMotion();
  const pop = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, scale: 0.94, y: 16 },
          animate: { opacity: 1, scale: 1, y: 0 },
          transition: { delay, type: 'spring', stiffness: 130, damping: 18 },
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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/av_paseo.webp"
          alt="Paseo de la Cruz y el Mar - Puerto La Cruz"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/68 to-slate-950/96" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/25 to-slate-950/55" />
      </div>

      {/* Resplandor ambiental detrás del bento */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[620px] w-[620px] -translate-y-1/2 translate-x-1/4 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-20 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Columna izquierda — intro */}
          <motion.div {...fade()} className="max-w-xl">
            <div className="mb-5">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">E.P.S. COVIMUS S.A.</span>
              <div className="mt-2 h-px w-8 bg-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight">
              TRANSFORMANDO <br />
              LA <span className="text-accent">VIALIDAD</span> <br />
              DE SOTILLO
            </h1>
            <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed font-light">
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

          {/* Columna derecha — bento de indicadores */}
          <div className="space-y-3.5 lg:space-y-3">

            {/* Asfaltado en Caliente — tarjeta principal */}
            <motion.div
              {...pop(0.15)}
              className={`${DARK_CARD} p-5 lg:p-6 group hover:border-accent/30 transition-colors`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-bold uppercase tracking-widest text-[10px]">Asfaltado en Caliente</span>
              </div>
              <h3 className="text-5xl font-black text-white tracking-tight">
                <CountUp to={hotAsphalt.totalTons} />
                <span className="text-slate-400 text-lg ml-2 font-bold">Ton</span>
              </h3>
              <p className="mt-2.5 text-slate-300 font-medium text-sm leading-tight">
                Toneladas Colocadas
                <span className="block text-xs text-slate-500 font-normal mt-0.5">
                  Gestión Dr. Jesús Marcano · Desde {hotAsphalt.since}
                </span>
              </p>
            </motion.div>

            {/* Año 2025 / Año 2026 */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                {...pop(0.22)}
                className={`${GLASS_CARD} p-5 hover:bg-white/10 transition-colors flex flex-col justify-between gap-2.5 lg:min-h-[6rem] min-h-[7rem]`}
              >
                <span className="text-accent font-bold uppercase tracking-widest text-[10px]">Año 2025</span>
                <div>
                  <p className="text-3xl font-black text-white tracking-tight leading-none">
                    <CountUp to={hotAsphalt.year2025Tons} />
                  </p>
                  <p className="mt-1.5 text-slate-300 text-xs font-medium">Total del año</p>
                </div>
              </motion.div>
              <motion.div
                {...pop(0.28)}
                className={`${GLASS_CARD} p-5 hover:bg-white/10 transition-colors flex flex-col justify-between gap-2.5 lg:min-h-[6rem] min-h-[7rem]`}
              >
                <span className="text-accent font-bold uppercase tracking-widest text-[10px]">Año 2026</span>
                <div>
                  <p className="text-3xl font-black text-white tracking-tight leading-none">
                    <CountUp to={hotAsphalt.year2026Tons} />
                  </p>
                  <p className="mt-1.5 text-slate-300 text-xs font-medium">{hotAsphalt.year2026PeriodLabel}</p>
                </div>
              </motion.div>
            </div>

            {/* Asfaltado en Frío / Ripio Compactado */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                {...pop(0.34)}
                className={`${GLASS_CARD} p-5 hover:bg-white/10 transition-colors flex flex-col justify-between gap-2.5 lg:min-h-[6rem] min-h-[7rem]`}
              >
                <span className="text-accent font-bold uppercase tracking-widest text-[10px]">Asfaltado en Frío</span>
                <div>
                  <p className="text-3xl font-black text-white tracking-tight leading-none">
                    <CountUp to={coldAsphalt.year2026Tons} />
                    <span className="text-slate-400 text-sm ml-1.5 font-bold">Ton</span>
                  </p>
                  <p className="mt-1.5 text-slate-300 text-xs font-medium">Suma total · Año 2026</p>
                </div>
              </motion.div>
              <motion.div
                {...pop(0.4)}
                className={`${GLASS_CARD} p-5 hover:bg-white/10 transition-colors flex flex-col justify-between gap-2.5 lg:min-h-[6rem] min-h-[7rem]`}
              >
                <span className="text-accent font-bold uppercase tracking-widest text-[10px]">Ripio Compactado</span>
                <div>
                  <p className="text-3xl font-black text-white tracking-tight leading-none">
                    <CountUp to={compactedGravelPlan.year2026Tons} />
                    <span className="text-slate-400 text-sm ml-1.5 font-bold">Ton</span>
                  </p>
                  <p className="mt-1.5 text-slate-300 text-xs font-medium">Suma total · Año 2026</p>
                </div>
              </motion.div>
            </div>

            {/* Contrataciones — módulo propio, para que la etiqueta se lea sobre vidrio y no sobre la foto */}
            <motion.div
              {...fade(0.46)}
              className="rounded-[2rem] border border-[#5B8DBE]/25 bg-[#3E5F86]/[0.22] backdrop-blur-md p-3.5 space-y-3"
            >
              <div className="flex items-center gap-2.5 px-1">
                <div className="h-2 w-2 rounded-full bg-[#8FC0E9] animate-pulse" />
                <span className="text-white font-bold uppercase tracking-widest text-[11px]">Contrataciones</span>
                <span className="text-slate-200/90 text-xs font-medium">· Obras bajo contrato</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  {...pop(0.5)}
                  className="rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-black/90 p-4 hover:border-[#5B8DBE]/40 transition-colors flex flex-col justify-between gap-2.5 min-h-[7rem]"
                >
                  <span className="text-[#A9CDEC] font-bold uppercase tracking-widest text-[10px]">{heroFrenteA.front}</span>
                  <div>
                    <p className="text-3xl font-black text-[#FFCC00] tracking-tight leading-none">
                      <CountUp to={heroFrenteA.tons} />
                      <span className="text-slate-400 text-sm ml-1.5 font-bold">Ton</span>
                    </p>
                    <p className="mt-1.5 text-xs text-slate-300 font-medium">Contrato {heroFrenteA.contractNumber}</p>
                  </div>
                </motion.div>
                {frenteB && (
                  <motion.div
                    {...pop(0.56)}
                    className="rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-black/90 p-4 hover:border-[#5B8DBE]/40 transition-colors flex flex-col justify-between gap-2.5 min-h-[7rem]"
                  >
                    <span className="text-[#A9CDEC] font-bold uppercase tracking-widest text-[10px]">{frenteB.front}</span>
                    <div>
                      <p className="text-3xl font-black text-[#FFCC00] tracking-tight leading-none">
                        <CountUp to={frenteB.tons} />
                        <span className="text-slate-400 text-sm ml-1.5 font-bold">Ton</span>
                      </p>
                      <p className="mt-1.5 text-xs text-slate-300 font-medium">
                        Contrato {frenteB.contractNumber}
                        <span className="block text-slate-400">PDVSA · TAECJAA</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
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

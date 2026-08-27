import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { contracts } from '../../../data/contractsData';
import { hotAsphalt, coldAsphalt, compactedGravelPlan, heroFrenteA } from '../../../data/asphaltStatsData';
import CountUp from './CountUp';

const frenteB = contracts.find((contract) => contract.front === 'Frente B');

const EASE = [0.22, 1, 0.36, 1];

const HeroSection = () => {
  const reduce = useReducedMotion();
  const rise = reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };
  const slide = reduce ? {} : { initial: { opacity: 0, x: 28 }, animate: { opacity: 1, x: 0 } };

  return (
    <section className="relative min-h-screen flex flex-col justify-start lg:justify-center overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/av_paseo.webp"
          alt="Paseo de la Cruz y el Mar - Puerto La Cruz"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        {/* Wash parejo para legibilidad de datos + anclaje inferior para la banda 2 */}
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/75" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 lg:pt-16 lg:pb-10">

        {/* BANDA 1 — intro + la cifra que manda */}
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-x-14 gap-y-10 lg:items-center">

          {/* Intro */}
          <div className="max-w-xl">
            <motion.div {...rise} transition={{ duration: 0.7, ease: EASE }} className="mb-5">
              <span className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">E.P.S. COVIMUS S.A.</span>
              <div className="mt-2 h-px w-6 bg-accent" />
            </motion.div>

            <motion.h1
              {...rise}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-black text-white leading-[0.95] tracking-tight"
            >
              TRANSFORMANDO <br />
              LA <span className="text-accent">VIALIDAD</span> <br />
              DE SOTILLO
            </motion.h1>

            <motion.p
              {...rise}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="mt-5 text-base md:text-lg text-white/75 leading-relaxed"
            >
              Ejecución de proyectos de ingeniería civil y asfaltado bajo un modelo de gestión social
              eficiente. Construyendo el futuro de Puerto La Cruz.
            </motion.p>

            <motion.div
              {...rise}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              className="mt-7 flex flex-col sm:flex-row gap-4"
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

          {/* Asfaltado en Caliente — la única cifra gigante */}
          <motion.div
            {...slide}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="border border-white/10 bg-slate-950/45 backdrop-blur-sm p-6 lg:p-7"
          >
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-accent">Asfaltado en Caliente</p>
            <p className="mt-1.5 text-sm text-white/70">Gestión Dr. Jesús Marcano · Sumatoria total</p>

            <div className="mt-4 flex items-baseline gap-3">
              <CountUp
                to={hotAsphalt.totalTons}
                className="font-mono font-black text-accent text-5xl lg:text-6xl leading-none tracking-tight"
              />
              <span className="font-mono text-base text-white/55">Ton</span>
            </div>

            <div className="mt-5 flex gap-8 border-t border-white/15 pt-3.5">
              <div>
                <p className="text-[0.7rem] uppercase tracking-wide text-white/55">Año 2025</p>
                <p className="mt-1 font-mono text-2xl text-white"><CountUp to={hotAsphalt.year2025Tons} /></p>
                <p className="mt-0.5 text-[0.7rem] text-white/45">Total del año</p>
              </div>
              <div className="border-l border-white/15 pl-8">
                <p className="text-[0.7rem] uppercase tracking-wide text-white/55">Año 2026</p>
                <p className="mt-1 font-mono text-2xl text-white"><CountUp to={hotAsphalt.year2026Tons} /></p>
                <p className="mt-0.5 text-[0.7rem] text-white/45">{hotAsphalt.year2026PeriodLabel}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BANDA 2 — las 4 cifras restantes, cada una con su tratamiento */}
        <motion.div
          {...rise}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="mt-8 lg:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 items-start"
        >
          {/* Frío — masa navy sólida */}
          <div className="bg-[#243F60] p-4 lg:p-5 flex flex-col justify-between min-h-[7rem] lg:min-h-[7.5rem]">
            <p className="text-[0.7rem] uppercase tracking-wide text-white/70 font-semibold">Asfaltado en Frío</p>
            <div>
              <p className="font-mono font-black text-accent text-3xl leading-none">
                <CountUp to={coldAsphalt.year2026Tons} />
                <span className="text-white/55 text-sm ml-1.5 font-bold">Ton</span>
              </p>
              <p className="mt-1.5 text-[0.7rem] text-white/60">Suma total · Año 2026</p>
            </div>
          </div>

          {/* Ripio — solo contorno, subrayado amarillo */}
          <div className="border border-white/15 p-4 lg:p-5 flex flex-col justify-between min-h-[7rem] lg:min-h-[7.5rem]">
            <p className="text-[0.7rem] uppercase tracking-wide text-white/60 font-semibold">Plan Ripio Compactado</p>
            <div>
              <p className="font-mono font-black text-white text-3xl leading-none">
                <CountUp to={compactedGravelPlan.year2026Tons} />
                <span className="text-white/45 text-sm ml-1.5 font-bold">Ton</span>
              </p>
              <div className="mt-2 h-0.5 w-5 bg-accent" />
              <p className="mt-1.5 text-[0.7rem] text-white/55">Suma total · Año 2026</p>
            </div>
          </div>

          {/* Contrataciones — Frente A + Frente B bajo una etiqueta compartida */}
          <div className="col-span-2">
            <span className="inline-block bg-[#C00000] text-white text-[0.7rem] font-bold uppercase tracking-wide px-2.5 py-1 mb-2">
              Contrataciones
            </span>
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <div className="bg-[#C00000]/12 border border-[#C00000]/35 p-4 lg:p-5 flex flex-col justify-between min-h-[7rem] lg:min-h-[7.5rem]">
                <p className="text-[0.7rem] uppercase tracking-wide text-white/80 font-semibold">{heroFrenteA.front}</p>
                <div>
                  <p className="font-mono font-black text-accent text-2xl leading-none">
                    <CountUp to={heroFrenteA.tons} />
                    <span className="text-white/50 text-xs ml-1.5 font-bold">Ton</span>
                  </p>
                  <p className="mt-1.5 font-mono text-[0.7rem] text-white/55">Contrato {heroFrenteA.contractNumber}</p>
                </div>
              </div>
              {frenteB && (
                <div className="bg-[#C00000]/12 border border-[#C00000]/35 p-4 lg:p-5 flex flex-col justify-between min-h-[7rem] lg:min-h-[7.5rem]">
                  <p className="text-[0.7rem] uppercase tracking-wide text-white/80 font-semibold">{frenteB.front}</p>
                  <div>
                    <p className="font-mono font-black text-accent text-2xl leading-none">
                      <CountUp to={frenteB.tons} />
                      <span className="text-white/50 text-xs ml-1.5 font-bold">Ton</span>
                    </p>
                    <p className="mt-1.5 font-mono text-[0.7rem] text-white/55">Contrato {frenteB.contractNumber}</p>
                    <p className="font-mono text-[0.7rem] text-white/45">PDVSA · TAECJAA</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
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

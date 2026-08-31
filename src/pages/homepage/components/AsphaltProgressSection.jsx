import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { contracts } from '../../../data/contractsData';
import { hotAsphalt, coldAsphalt, compactedGravelPlan, heroFrenteA } from '../../../data/asphaltStatsData';
import CountUp from './CountUp';

const frenteB = contracts.find((contract) => contract.front === 'Frente B');

const frentes = [
  { front: heroFrenteA.front, tons: heroFrenteA.tons, contract: heroFrenteA.contractNumber, note: null },
  frenteB && { front: frenteB.front, tons: frenteB.tons, contract: frenteB.contractNumber, note: 'PDVSA · TAECJAA' },
].filter(Boolean);

// Mismo lenguaje de tarjetas que el Hero de la Variante A.
const DARK_CARD =
  'bg-gradient-to-br from-slate-900/95 to-slate-950/95 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl';
const GLASS_CARD =
  'bg-white/[0.08] backdrop-blur-md border border-white/[0.14] rounded-[2rem]';

const AsphaltProgressSection = () => {
  const reduce = useReducedMotion();
  const VIEWPORT = { once: true, margin: '-10%' };

  const pop = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, scale: 0.95, y: 16 },
          whileInView: { opacity: 1, scale: 1, y: 0 },
          viewport: VIEWPORT,
          transition: { delay, type: 'spring', stiffness: 130, damping: 18 },
        };
  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: VIEWPORT,
          transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="relative overflow-hidden bg-[#243F60] py-20 lg:py-28">
      {/* Mezcla desde el hero oscuro hacia el azul institucional */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 via-slate-950/60 to-transparent" />

      {/* Fondo: azul institucional + resplandor + burbujas + ondas */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#20364F] via-[#243F60] to-[#1B2E44]" />
        <div className="absolute -top-48 right-[-12%] h-[620px] w-[620px] rounded-full bg-[#3E6E9E]/20 blur-[140px]" />
        <div className="absolute -bottom-44 left-[-8%] h-[520px] w-[520px] rounded-full bg-[#12202F]/50 blur-[130px]" />

        {/* Burbujas */}
        <span className="absolute left-[5%] top-[15%] h-28 w-28 rounded-full border border-white/[0.08]" />
        <span className="absolute left-[12%] top-[30%] h-3.5 w-3.5 rounded-full bg-white/15" />
        <span className="absolute left-[3%] bottom-[24%] h-16 w-16 rounded-full border border-white/[0.06]" />
        <span className="absolute right-[8%] top-[9%] h-44 w-44 rounded-full border border-white/[0.06]" />
        <span className="absolute right-[15%] top-[24%] h-5 w-5 rounded-full bg-[#8FC0E9]/20" />
        <span className="absolute right-[6%] bottom-[15%] h-24 w-24 rounded-full border border-white/[0.07]" />
        <span className="absolute right-[26%] bottom-[32%] h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="absolute left-[30%] top-[8%] h-2 w-2 rounded-full bg-white/15" />

        {/* Ondas */}
        <svg
          className="absolute inset-x-0 bottom-0 h-64 w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 220"
          fill="none"
          aria-hidden="true"
        >
          <path d="M0 118 C 240 58, 480 178, 720 118 S 1200 38, 1440 108 V220 H0 Z" fill="#1C2E40" fillOpacity="0.5" />
          <path d="M0 158 C 300 108, 560 208, 860 148 S 1240 108, 1440 158 V220 H0 Z" fill="#15232F" fillOpacity="0.6" />
        </svg>
        <svg
          className="absolute inset-x-0 top-8 h-48 w-full opacity-40"
          preserveAspectRatio="none"
          viewBox="0 0 1440 200"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 60 C 280 120, 520 10, 800 70 S 1200 130, 1440 60"
            stroke="#5E86A8"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div {...fade()} className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Gestión en cifras</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
            Toneladas que reconstruyen el municipio
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-200/90 md:text-lg">
            Mezcla asfáltica colocada en las calles de Sotillo — por gestión directa de COVIMUS
            y bajo contrato para terceros.
          </p>
        </motion.div>

        {/* Bento — Caliente a la izquierda; a su lado Año 25/26; al lado Frío/Ripio */}
        <div className="mx-auto mt-14 max-w-6xl space-y-4 lg:mt-16 lg:space-y-5">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

            {/* Asfaltado en Caliente — izquierda, dominante */}
            <motion.div
              {...pop(0.05)}
              className={`${DARK_CARD} group flex flex-col p-6 transition-colors hover:border-accent/30 sm:col-span-2 lg:p-8`}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-wider text-accent">Asfaltado en Caliente</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-6xl font-black leading-none tracking-tight text-white lg:text-7xl">
                  <CountUp to={hotAsphalt.totalTons} />
                  <span className="ml-2.5 text-xl font-bold text-slate-400">Ton</span>
                </p>
                <p className="mt-5 text-sm font-bold text-white">
                  Toneladas Colocadas
                  <span className="mt-1 block text-xs font-normal text-slate-400">
                    Gestión Dr. Jesús Marcano · Sumatoria total · desde {hotAsphalt.since}
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Año 2025 / Año 2026 — apiladas, al lado */}
            <div className="grid grid-cols-2 gap-4 sm:h-full sm:grid-cols-1 sm:grid-rows-2 lg:col-span-1 lg:gap-5">
              {[
                { label: 'Año 2025', value: hotAsphalt.year2025Tons, sub: 'Total del año', delay: 0.12 },
                { label: 'Año 2026', value: hotAsphalt.year2026Tons, sub: hotAsphalt.year2026PeriodLabel, delay: 0.18 },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  {...pop(item.delay)}
                  className={`${GLASS_CARD} flex h-full flex-col justify-between gap-3 p-5 transition-colors hover:bg-white/[0.12]`}
                >
                  <span className="text-sm font-bold uppercase tracking-wider text-accent">{item.label}</span>
                  <div>
                    <p className="text-3xl font-black leading-none tracking-tight text-white">
                      <CountUp to={item.value} />
                      <span className="ml-1.5 text-sm font-bold text-slate-400">Ton</span>
                    </p>
                    <p className="mt-1.5 text-xs font-medium text-slate-300">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Asfaltado en Frío / Plan con Ripio — apiladas, al lado */}
            <div className="grid grid-cols-2 gap-4 sm:h-full sm:grid-cols-1 sm:grid-rows-2 lg:col-span-1 lg:gap-5">
              {[
                { label: 'Asfaltado en Frío', value: coldAsphalt.year2026Tons, delay: 0.24 },
                { label: 'Plan con Ripio', value: compactedGravelPlan.year2026Tons, delay: 0.3 },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  {...pop(item.delay)}
                  className={`${GLASS_CARD} flex h-full flex-col justify-between gap-3 p-5 transition-colors hover:bg-white/[0.12]`}
                >
                  <span className="text-sm font-bold uppercase tracking-wider text-accent">{item.label}</span>
                  <div>
                    <p className="text-3xl font-black leading-none tracking-tight text-white">
                      <CountUp to={item.value} />
                      <span className="ml-1.5 text-sm font-bold text-slate-400">Ton</span>
                    </p>
                    <p className="mt-1.5 text-xs font-medium text-slate-300">Suma total · Año 2026</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contrataciones — módulo propio, sobre panel oscuro para separarlo del azul */}
          <motion.div
            {...fade(0.05)}
            className="space-y-4 rounded-[2rem] border border-[#5B8DBE]/30 bg-slate-950/35 p-4 backdrop-blur-md lg:p-5"
          >
            <div className="flex items-center gap-2.5 px-1">
              <div className="h-2 w-2 rounded-full bg-[#8FC0E9] animate-pulse" />
              <span className="text-[15px] font-bold uppercase tracking-wider text-white">Contrataciones</span>
              <span className="hidden text-xs font-medium text-slate-200/90 sm:inline">· Obras bajo contrato para terceros</span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {frentes.map((f, i) => (
                <motion.div
                  key={f.front}
                  {...pop(0.1 + i * 0.06)}
                  className="flex items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-950/95 p-5 transition-colors hover:border-[#5B8DBE]/45"
                >
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-[#A9CDEC]">{f.front}</span>
                    <p className="mt-1.5 text-xs font-medium text-slate-300">Contrato {f.contract}</p>
                    {f.note && <p className="text-xs font-medium text-slate-400">{f.note}</p>}
                  </div>
                  <p className="shrink-0 text-4xl font-black leading-none tracking-tight text-[#FFCC00] lg:text-5xl">
                    <CountUp to={f.tons} />
                    <span className="ml-2 text-base font-bold text-slate-400">Ton</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AsphaltProgressSection;

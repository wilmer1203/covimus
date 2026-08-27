import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import { contracts } from '../../../data/contractsData';
import { hotAsphalt, coldAsphalt, compactedGravelPlan, heroFrenteA } from '../../../data/asphaltStatsData';
import CountUp from './CountUp';

const frenteB = contracts.find((contract) => contract.front === 'Frente B');
const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, margin: '-12%' };

const quickLinks = [
  { icon: 'Factory', value: '1.200', label: 'Producción Mensual', sub: 'Capacidad de la planta de asfalto', href: '#planta-asfalto' },
  { icon: 'MapPin', value: '25', label: 'Localidades', sub: 'Sectores atendidos con obras', to: '/projects' },
  { icon: 'Award', value: '17', label: 'Años', sub: 'Transformando Sotillo', to: '/about-us' },
];

const scrollToPlant = (e) => {
  const el = document.getElementById('planta-asfalto');
  if (!el) return;
  e.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
};

const YearRow = ({ label, sub, value, motionProps }) => (
  <motion.div {...motionProps} className="lg:py-5 lg:first:pt-0 lg:last:pb-0">
    <p className="text-xs uppercase tracking-wide text-white/70">{label}</p>
    <p className="mt-1 font-mono text-3xl text-white leading-none">
      <CountUp to={value} />
      <span className="ml-2 text-sm font-bold text-white/55">Ton</span>
    </p>
    <p className="mt-1 text-xs text-white/65">{sub}</p>
  </motion.div>
);

const FrenteBlock = ({ front, tons, contract, note, className, motionProps }) => (
  <motion.div {...motionProps} className={className}>
    <div className="flex items-center gap-2.5">
      <span className="h-2.5 w-2.5 bg-[#C00000]" />
      <p className="text-sm uppercase tracking-wide text-white/70">{front}</p>
    </div>
    <p className="mt-3 font-mono text-4xl lg:text-5xl font-black text-white leading-none">
      <CountUp to={tons} />
      <span className="ml-2 text-base font-bold text-white/50">Ton</span>
    </p>
    <p className="mt-3 font-mono text-xs text-white/55">Contrato {contract}</p>
    {note && <p className="font-mono text-xs text-white/55">{note}</p>}
  </motion.div>
);

const AsphaltProgressSection = () => {
  const reduce = useReducedMotion();
  const [bgVideo, setBgVideo] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia('(min-width: 640px)');
    const update = () => setBgVideo(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [reduce]);

  // View-triggered reveal, disabled under prefers-reduced-motion.
  const reveal = (from, { transition, ...to } = {}) =>
    reduce
      ? {}
      : {
          initial: from,
          whileInView: { opacity: 1, x: 0, y: 0, scaleX: 1, ...to },
          viewport: VIEWPORT,
          transition: transition ?? { duration: 0.6, ease: EASE },
        };

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-20 lg:py-28">
      {/* Fondo: b-roll de asfaltado (video ≥640px / poster) vive sólo detrás del
          primer movimiento; el resto de la sección es slate-950 sólido. */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[70%] min-h-[640px]">
        {bgVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/assets/images/10.jpg"
            className="h-full w-full object-cover opacity-[0.55]"
          >
            <source src="/assets/asfalto.mp4" type="video/mp4" />
          </video>
        ) : (
          <img src="/assets/images/10.jpg" alt="" aria-hidden="true" className="h-full w-full object-cover opacity-[0.55]" />
        )}
        <div className="absolute inset-0 bg-[#243F60]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <motion.div {...reveal({ opacity: 0, y: 16 })} className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Transformando la vialidad de Sotillo
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed">
            Toneladas de mezcla colocadas en las calles del municipio — por gestión directa y bajo contrato.
          </p>
        </motion.div>

        {/* MOVIMIENTO 1 — Asfaltado en Caliente domina */}
        <div className="mt-14 lg:mt-16 grid lg:grid-cols-12 gap-y-10 lg:gap-x-12 items-end border-b border-white/10 pb-12 lg:pb-16">
          <motion.div {...reveal({ opacity: 0, y: 16 })} className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">Asfaltado en Caliente</p>
            <p className="mt-2 text-sm text-white/75">
              Gestión Dr. Jesús Marcano · Sumatoria total · desde {hotAsphalt.since}
            </p>
            <div className="mt-6 flex items-baseline gap-4">
              <CountUp
                to={hotAsphalt.totalTons}
                className="font-mono font-black text-white text-[clamp(3.25rem,8vw,5.5rem)] leading-[0.85] tracking-[-0.04em]"
              />
              <span className="font-mono text-lg text-white/50">Ton</span>
            </div>
          </motion.div>

          <div className="lg:col-span-4 lg:pl-12 lg:border-l lg:border-white/10 grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-0 lg:divide-y lg:divide-white/10">
            <YearRow
              label="Año 2025"
              sub="Total del año"
              value={hotAsphalt.year2025Tons}
              motionProps={reveal({ opacity: 0, y: 12 }, { transition: { duration: 0.5, ease: EASE } })}
            />
            <YearRow
              label="Año 2026"
              sub={hotAsphalt.year2026PeriodLabel}
              value={hotAsphalt.year2026Tons}
              motionProps={reveal({ opacity: 0, y: 12 }, { transition: { duration: 0.5, ease: EASE, delay: 0.1 } })}
            />
          </div>
        </div>

        {/* MOVIMIENTO 2 — Frío + Ripio: díptico, no gemelos */}
        <div className="py-12 sm:py-14 lg:py-16 border-b border-white/10 space-y-12 sm:space-y-16">
          {/* Frío — barra navy maciza */}
          <motion.div
            {...reveal({ opacity: 0, x: -40 }, { transition: { type: 'spring', stiffness: 90, damping: 18 } })}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#243F60] px-6 sm:px-8 py-8 sm:py-10"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-white/65">Plan Asfaltado en Frío</p>
              <p className="mt-1 text-sm text-white/55">Suma total · Año 2026</p>
            </div>
            <p className="font-mono font-black text-accent text-5xl lg:text-6xl leading-none tracking-[-0.03em]">
              <CountUp to={coldAsphalt.year2026Tons} />
              <span className="ml-2 text-sm font-bold text-white/50">Ton</span>
            </p>
          </motion.div>

          {/* Ripio — ligero, desplazado al margen opuesto */}
          <motion.div {...reveal({ opacity: 0, x: 24 })} className="sm:w-2/3 sm:ml-auto sm:text-right">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">Plan con Ripio Compactado</p>
            <p className="mt-1 text-sm text-white/55">Suma total · Año 2026</p>
            <p className="mt-3 font-mono font-black text-white text-5xl lg:text-7xl leading-none tracking-[-0.03em]">
              <CountUp to={compactedGravelPlan.year2026Tons} />
              <span className="ml-2 text-lg font-bold text-white/50">Ton</span>
            </p>
          </motion.div>
        </div>

        {/* MOVIMIENTO 3 — Contrataciones: ledger a 2 columnas, el rojo es la señal */}
        <div className="py-12 sm:py-14 lg:py-16 border-b border-white/10">
          <motion.span
            {...reveal({ scaleX: 0 }, { transition: { duration: 0.5, ease: EASE } })}
            className="inline-block origin-left bg-[#C00000] px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-[0.15em] text-white"
          >
            Contrataciones
          </motion.span>

          <div className="mt-10 grid md:grid-cols-2">
            <FrenteBlock
              front={heroFrenteA.front}
              tons={heroFrenteA.tons}
              contract={heroFrenteA.contractNumber}
              className="pb-10 md:pb-0 md:pr-14 border-b md:border-b-0 md:border-r border-white/10"
              motionProps={reveal({ opacity: 0 })}
            />
            {frenteB && (
              <FrenteBlock
                front={frenteB.front}
                tons={frenteB.tons}
                contract={frenteB.contractNumber}
                note="PDVSA · TAECJAA"
                className="pt-10 md:pt-0 md:pl-14"
                motionProps={reveal({ opacity: 0 }, { transition: { duration: 0.6, ease: EASE, delay: 0.12 } })}
              />
            )}
          </div>
        </div>

        {/* MOVIMIENTO 4 — Otros indicadores: pie de navegación */}
        <motion.div
          {...reveal({ opacity: 0, y: 8 }, { transition: { duration: 0.5, ease: EASE } })}
          className="pt-12 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center"
        >
          {quickLinks.map((item) => {
            const body = (
              <div className="group px-2 py-8 sm:py-6 transition-colors hover:bg-white/[0.03]">
                <span className="block font-mono text-3xl md:text-4xl font-black text-white">{item.value}</span>
                <span className="mt-2 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/55 transition-colors group-hover:text-accent">
                  {item.label}
                  <Icon name="ArrowUpRight" size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
                <span className="mt-1 block text-xs text-white/50">{item.sub}</span>
              </div>
            );
            return item.to ? (
              <Link key={item.label} to={item.to}>{body}</Link>
            ) : (
              <a key={item.label} href={item.href} onClick={scrollToPlant}>{body}</a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AsphaltProgressSection;

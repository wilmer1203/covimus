import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import { contracts } from '../../../data/contractsData';
import { hotAsphalt, coldAsphalt, compactedGravelPlan, heroFrenteA } from '../../../data/asphaltStatsData';
import CountUp from './CountUp';

const frenteB = contracts.find((contract) => contract.front === 'Frente B');
const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, margin: '-8%' };

const directManagement = [
  { label: 'Asfaltado en Frío', value: coldAsphalt.year2026Tons, sub: 'Suma total · Año 2026' },
  { label: 'Plan con Ripio Compactado', value: compactedGravelPlan.year2026Tons, sub: 'Suma total · Año 2026' },
];

const frentes = [
  { front: heroFrenteA.front, tons: heroFrenteA.tons, contract: heroFrenteA.contractNumber, note: null },
  frenteB && { front: frenteB.front, tons: frenteB.tons, contract: frenteB.contractNumber, note: 'PDVSA · TAECJAA' },
].filter(Boolean);

const closingStats = [
  { value: '1.200', unit: 'Ton', label: 'Producción mensual', sub: 'Capacidad de la planta', href: '#planta-asfalto' },
  { value: '25', unit: '', label: 'Localidades', sub: 'Sectores atendidos con obras', to: '/projects' },
  { value: '17', unit: 'años', label: 'Trayectoria', sub: 'Transformando Sotillo', to: '/about-us' },
];

const scrollToPlant = (e) => {
  const el = document.getElementById('planta-asfalto');
  if (!el) return;
  e.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
};

const AsphaltProgressSection = () => {
  const reduce = useReducedMotion();
  const [bgVideo, setBgVideo] = useState(false);

  // El <video> sólo se monta en pantallas medianas+ y sin prefers-reduced-motion;
  // su poster (10.jpg) es el fallback y cubre todo lo demás.
  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia('(min-width: 768px)');
    const sync = () => setBgVideo(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, [reduce]);

  // Reveal disparado por viewport; bajo prefers-reduced-motion todo entra visible.
  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: VIEWPORT,
          transition: { duration: 0.6, ease: EASE, delay },
        };

  const grow = reduce
    ? {}
    : {
        initial: { scaleX: 0 },
        whileInView: { scaleX: 1 },
        viewport: VIEWPORT,
        transition: { duration: 0.5, ease: EASE },
      };

  // Encabezado de sub-bloque: punto + rótulo + regla que crece.
  const BlockLabel = ({ dot, text, aside }) => (
    <motion.div {...rise()} className="flex items-center gap-3">
      <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: dot }} />
      <span className="shrink-0 text-xs font-bold uppercase tracking-widest text-slate-200">{text}</span>
      {aside && <span className="hidden shrink-0 text-xs text-slate-400 sm:inline">{aside}</span>}
      <motion.span {...grow} className="hidden h-px flex-1 origin-left bg-white/10 sm:block" />
    </motion.div>
  );

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">
      {/* Resplandor ambiental — mismo lenguaje que el resto del home */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-8%] h-[520px] w-[520px] rounded-full bg-[#243F60]/25 blur-[130px]" />
        <div className="absolute bottom-[-12%] left-[-10%] h-[440px] w-[440px] rounded-full bg-accent/5 blur-[130px]" />
      </div>

      {/* B-roll de asfaltado: textura real detrás del encabezado y la cifra principal */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px]">
        {bgVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/assets/images/10.jpg"
            className="h-full w-full object-cover opacity-[0.5]"
          >
            <source src="/assets/asfalto.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/assets/images/10.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-[0.5]"
          />
        )}
        <div className="absolute inset-0 bg-[#243F60]/45 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/45 to-slate-950" />
        <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <motion.div {...rise()} className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Gestión en cifras</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
            Toneladas que reconstruyen el municipio
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
            Mezcla asfáltica colocada en las calles de Sotillo — por gestión directa de COVIMUS
            y bajo contrato para terceros.
          </p>
        </motion.div>

        {/* ───────── Gestión directa ───────── */}
        <div className="mt-14 lg:mt-20">
          <BlockLabel dot="#FFCC00" text="Gestión directa" aside="· Planta propia de asfalto" />

          {/* Cifra dominante: Asfaltado en Caliente + desglose por año */}
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-16">
            <motion.div {...rise(0.05)}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-accent">Asfaltado en Caliente</p>
              <p className="mt-2 text-sm text-slate-300">
                Sumatoria total · Gestión Dr. Jesús Marcano · desde {hotAsphalt.since}
              </p>
              <div className="mt-5 flex items-end gap-3">
                <CountUp
                  to={hotAsphalt.totalTons}
                  className="font-black leading-[0.82] tracking-[-0.03em] text-white text-[clamp(3.5rem,9vw,6rem)]"
                />
                <span className="mb-2 text-lg font-bold text-slate-400">Ton</span>
              </div>
            </motion.div>

            <motion.div
              {...rise(0.12)}
              className="flex gap-10 border-t border-white/10 pt-6 sm:gap-16 lg:flex-col lg:gap-0 lg:border-t-0 lg:divide-y lg:divide-white/10 lg:pt-0"
            >
              <div className="lg:py-4 lg:first:pt-0">
                <p className="text-xs uppercase tracking-wide text-slate-400">Año 2025</p>
                <p className="mt-1 text-3xl font-black leading-none text-white">
                  <CountUp to={hotAsphalt.year2025Tons} />
                  <span className="ml-1.5 text-sm font-bold text-slate-400">Ton</span>
                </p>
                <p className="mt-1 text-xs text-slate-400">Total del año</p>
              </div>
              <div className="lg:py-4 lg:last:pb-0">
                <p className="text-xs uppercase tracking-wide text-slate-400">Año 2026</p>
                <p className="mt-1 text-3xl font-black leading-none text-white">
                  <CountUp to={hotAsphalt.year2026Tons} />
                  <span className="ml-1.5 text-sm font-bold text-slate-400">Ton</span>
                </p>
                <p className="mt-1 text-xs text-slate-400">{hotAsphalt.year2026PeriodLabel}</p>
              </div>
            </motion.div>
          </div>

          {/* Frío + Ripio — par subordinado, sin tarjeta: dos columnas sobre una regla */}
          <div className="mt-10 grid border-t border-white/10 sm:grid-cols-2 sm:divide-x sm:divide-white/10">
            {directManagement.map((item, i) => (
              <motion.div
                key={item.label}
                {...rise(0.05 + i * 0.06)}
                className="border-b border-white/10 py-6 sm:border-b-0 sm:px-8 sm:first:pl-0 sm:last:pr-0"
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                <p className="mt-3 text-4xl font-black leading-none text-white">
                  <CountUp to={item.value} />
                  <span className="ml-2 text-sm font-bold text-slate-400">Ton</span>
                </p>
                <p className="mt-2 text-xs text-slate-400">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───────── Contrataciones ───────── */}
        <div className="mt-14 lg:mt-20">
          <BlockLabel dot="#8FC0E9" text="Contrataciones" aside="· Obras bajo contrato para terceros" />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {frentes.map((f, i) => (
              <motion.div
                key={f.front}
                {...rise(0.05 + i * 0.06)}
                className="flex items-start justify-between gap-4 rounded-3xl border border-[#5B8DBE]/30 bg-[#3E5F86]/[0.22] p-6 transition-colors hover:border-[#5B8DBE]/55"
              >
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#A9CDEC]">{f.front}</p>
                  <p className="mt-3 text-5xl font-black leading-none tracking-tight text-[#FFCC00]">
                    <CountUp to={f.tons} />
                    <span className="ml-2 text-base font-bold text-slate-300">Ton</span>
                  </p>
                  <p className="mt-3 font-mono text-xs text-slate-300">Contrato {f.contract}</p>
                  {f.note && <p className="font-mono text-xs text-slate-400">{f.note}</p>}
                </div>
                <span className="mt-1 rounded-full border border-[#5B8DBE]/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#A9CDEC]">
                  Contrato
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───────── Cierre: otros indicadores ───────── */}
        <motion.div
          {...rise()}
          className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:mt-20"
        >
          {closingStats.map((s) => {
            const inner = (
              <div className="group h-full bg-slate-950 px-6 py-7 transition-colors hover:bg-slate-900">
                <p className="text-3xl font-black leading-none text-white md:text-4xl">
                  {s.value}
                  {s.unit && <span className="ml-1.5 text-sm font-bold text-slate-400">{s.unit}</span>}
                </p>
                <p className="mt-2.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400 transition-colors group-hover:text-accent">
                  {s.label}
                  <Icon name="ArrowUpRight" size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </p>
                <p className="mt-1 text-xs text-slate-500">{s.sub}</p>
              </div>
            );
            return s.to ? (
              <Link key={s.label} to={s.to}>{inner}</Link>
            ) : (
              <a key={s.label} href={s.href} onClick={scrollToPlant}>{inner}</a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AsphaltProgressSection;

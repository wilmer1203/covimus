import React from 'react';
import { motion, useSpring, useTransform, useInView, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import { contracts } from '../../../data/contractsData';
import { hotAsphalt, coldAsphalt, compactedGravelPlan, heroFrenteA } from '../../../data/asphaltStatsData';

const frenteB = contracts.find((contract) => contract.front === 'Frente B');

const CountUp = ({ to, duration = 2, className }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString('es-VE'));

  React.useEffect(() => {
    if (inView) spring.set(to);
  }, [inView, to, spring]);

  if (prefersReducedMotion) {
    return <span className={className}>{to.toLocaleString('es-VE')}</span>;
  }
  return <motion.span ref={ref} className={className}>{display}</motion.span>;
};

const quickLinks = [
  {
    icon: 'Factory',
    value: '1,200',
    unit: 'Tons',
    label: 'Producción Mensual',
    description: 'Capacidad de la Planta de Asfalto',
    href: '#planta-asfalto',
    isRoute: false,
  },
  {
    icon: 'MapPin',
    value: '25',
    unit: '',
    label: 'Localidades',
    description: 'Sectores atendidos con obras',
    href: '/projects',
    isRoute: true,
  },
  {
    icon: 'Award',
    value: '17',
    unit: '',
    label: 'Años',
    description: 'Transformando Sotillo',
    href: '/about-us',
    isRoute: true,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

const StatsSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-950">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale opacity-25"
          poster="/assets/images/planta.jpeg"
        >
          <source src="/assets/asfalto.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/92 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,204,0,0.06),_transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Section header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-5">
            <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-black text-white tracking-[0.2em] uppercase">Indicadores de Gestión</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Toneladas Colocadas en Vialidad
          </h2>
        </motion.div>

        {/* Asfaltado en Caliente — hero metric, full width */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14"
        >
          <div className="lg:flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-bold uppercase tracking-widest text-xs">Asfaltado en Caliente</span>
            </div>
            <h3 className="text-6xl lg:text-7xl font-black text-white tracking-tighter font-mono">
              <CountUp to={hotAsphalt.totalTons} />
            </h3>
            <p className="text-slate-400 text-sm font-medium mt-3">
              Toneladas Colocadas · Gestión Dr. Jesús Marcano <span className="text-slate-600">·</span> Desde {hotAsphalt.since}
            </p>
          </div>

          <div className="hidden lg:block w-px self-stretch bg-white/10" />
          <div className="w-full h-px lg:hidden bg-white/10" />

          <div className="flex gap-8 sm:gap-14">
            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold mb-1">Año 2025</p>
              <p className="text-4xl font-black text-white font-mono">
                <CountUp to={hotAsphalt.year2025Tons} />
              </p>
              <p className="text-slate-500 text-xs font-bold mt-1">Total del año</p>
            </div>
            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold mb-1">Año 2026</p>
              <p className="text-4xl font-black text-white font-mono">
                <CountUp to={hotAsphalt.year2026Tons} />
              </p>
              <p className="text-slate-500 text-xs font-bold mt-1">{hotAsphalt.year2026PeriodLabel}</p>
            </div>
          </div>
        </motion.div>

        {/* Asfaltado en Frío / Ripio Compactado — secondary pair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 lg:p-8 hover:bg-white/[0.05] hover:border-white/20 transition-colors"
          >
            <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Asfaltado en Frío</span>
            <p className="text-5xl font-black text-white tracking-tighter font-mono mt-3">
              <CountUp to={coldAsphalt.year2026Tons} /><span className="text-slate-500 text-lg ml-2 font-bold">Tons</span>
            </p>
            <p className="text-slate-500 text-xs font-bold mt-2">Suma Total · Año 2026</p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7 lg:p-8 hover:bg-white/[0.05] hover:border-white/20 transition-colors"
          >
            <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Plan Ripio Compactado</span>
            <p className="text-5xl font-black text-white tracking-tighter font-mono mt-3">
              <CountUp to={compactedGravelPlan.year2026Tons} /><span className="text-slate-500 text-lg ml-2 font-bold">Tons</span>
            </p>
            <p className="text-slate-500 text-xs font-bold mt-2">Suma Total · Año 2026</p>
          </motion.div>
        </div>

        {/* Contrataciones — distinct band */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-[#5B8DBE]/25 bg-gradient-to-br from-[#101B2D] to-[#0B141F] p-7 lg:p-9"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-2 w-2 rounded-full bg-[#5B8DBE] animate-pulse" />
            <span className="text-[#5B8DBE] font-bold uppercase tracking-widest text-xs">Contrataciones</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-[#7BA8D4] font-bold uppercase tracking-widest text-xs mb-1">{heroFrenteA.front}</h4>
              <p className="text-4xl font-black text-accent tracking-tighter font-mono">
                <CountUp to={heroFrenteA.tons} /><span className="text-slate-500 text-base ml-2 font-bold">Tons</span>
              </p>
              <p className="text-slate-500 text-xs font-bold mt-2">Contrato {heroFrenteA.contractNumber}</p>
            </div>
            {frenteB && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="text-[#7BA8D4] font-bold uppercase tracking-widest text-xs mb-1">{frenteB.front}</h4>
                <p className="text-4xl font-black text-accent tracking-tighter font-mono">
                  <CountUp to={frenteB.tons} /><span className="text-slate-500 text-base ml-2 font-bold">Tons</span>
                </p>
                <p className="text-slate-500 text-xs font-bold mt-2">Contrato {frenteB.contractNumber}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Otros indicadores — tertiary, compact */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickLinks.map((item, index) => {
            const cardContent = (
              <motion.div
                {...fadeUp}
                transition={{ delay: 0.25 + 0.05 * index, duration: 0.5 }}
                className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex items-center gap-4 hover:bg-white/[0.06] hover:border-accent/40 transition-colors group cursor-pointer"
              >
                <div className="size-11 shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-slate-900 transition-colors">
                  <Icon name={item.icon} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <p className="text-lg font-black text-white tracking-tight">
                      {item.value}
                      {item.unit && <span className="text-xs text-slate-500 font-bold ml-1">{item.unit}</span>}
                    </p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide truncate">{item.label}</p>
                  </div>
                  <p className="text-xs text-slate-500 truncate">{item.description}</p>
                </div>
                <Icon name="ArrowRight" size={16} className="text-slate-600 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
              </motion.div>
            );

            return item.isRoute ? (
              <Link key={item.label} to={item.href}>{cardContent}</Link>
            ) : (
              <a key={item.label} href={item.href}>{cardContent}</a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;

import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

/**
 * Tira de navegación bajo el Hero (Variante A). Las 3 casillas que NO son
 * cifras de asfaltado — cada una lleva a su página/sección. Va en flujo
 * normal, así que se ve en todos los breakpoints (a diferencia del bento).
 */
const items = [
  {
    icon: 'Factory',
    value: '1.200',
    unit: 'Tons',
    label: 'Producción Mensual',
    sub: 'Capacidad de la planta de asfalto',
    href: '#planta-asfalto',
  },
  {
    icon: 'MapPin',
    value: '25',
    label: 'Localidades',
    sub: 'Sectores atendidos con obras',
    to: '/projects',
  },
  {
    icon: 'Award',
    value: '17',
    label: 'Años',
    sub: 'Transformando Sotillo',
    to: '/about-us',
  },
];

const scrollToPlant = (e) => {
  const el = document.getElementById('planta-asfalto');
  if (!el) return;
  e.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
};

const Card = ({ item }) => (
  <div className="group h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08] hover:border-accent/30">
    <div className="flex items-start justify-between">
      <div className="flex size-11 items-center justify-center rounded-2xl bg-white/5 text-accent transition-colors group-hover:bg-accent group-hover:text-slate-900">
        <Icon name={item.icon} size={20} />
      </div>
      <Icon
        name="ArrowRight"
        size={18}
        className="mt-1 text-slate-600 transition-all group-hover:translate-x-1 group-hover:text-accent"
      />
    </div>
    <p className="mt-4 text-3xl font-black tracking-tight text-white">
      {item.value}
      {item.unit && <span className="ml-1.5 text-sm font-bold text-slate-500">{item.unit}</span>}
    </p>
    <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-accent">{item.label}</p>
    <p className="mt-1 text-xs text-slate-400">{item.sub}</p>
  </div>
);

const HeroQuickLinks = () => (
  <section className="bg-slate-950 py-10">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((item) =>
          item.to ? (
            <Link key={item.label} to={item.to}>
              <Card item={item} />
            </Link>
          ) : (
            <a key={item.label} href={item.href} onClick={scrollToPlant}>
              <Card item={item} />
            </a>
          )
        )}
      </div>
    </div>
  </section>
);

export default HeroQuickLinks;

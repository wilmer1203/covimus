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

const Cell = ({ item }) => (
  <div className="group flex items-center gap-4 px-2 py-6 sm:px-6 sm:py-8 transition-colors hover:bg-white/[0.03]">
    <span className="shrink-0 text-white/40 transition-colors group-hover:text-accent">
      <Icon name={item.icon} size={22} />
    </span>
    <div className="min-w-0 flex-1">
      <p className="font-mono text-2xl font-black leading-none text-white">{item.value}</p>
      <p className="mt-1.5 text-xs uppercase tracking-wide text-white/60 transition-colors group-hover:text-accent">
        {item.label}
      </p>
      <p className="mt-0.5 truncate text-xs text-white/45">{item.sub}</p>
    </div>
    <Icon
      name="ArrowRight"
      size={16}
      className="shrink-0 text-white/25 transition-all group-hover:translate-x-1 group-hover:text-accent"
    />
  </div>
);

const HeroQuickLinks = () => (
  <section className="border-y border-white/10 bg-slate-950">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((item) =>
          item.to ? (
            <Link key={item.label} to={item.to}>
              <Cell item={item} />
            </Link>
          ) : (
            <a key={item.label} href={item.href} onClick={scrollToPlant}>
              <Cell item={item} />
            </a>
          )
        )}
      </div>
    </div>
  </section>
);

export default HeroQuickLinks;

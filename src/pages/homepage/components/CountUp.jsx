import React from 'react';
import { motion, useSpring, useTransform, useInView, useReducedMotion } from 'framer-motion';

/**
 * Número que cuenta desde 0 hasta `to` la primera vez que entra en viewport.
 *
 * Respeta `prefers-reduced-motion`: muestra el valor final de una vez en lugar
 * de animar. Eso también lo hace determinista para cualquier cosa que capture
 * la página (screenshots, prerender de SEO, auditorías) en vez de agarrar el
 * número a mitad de la animación.
 */
const CountUp = ({ to, duration = 2, className, locale = 'es-VE' }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString(locale));

  React.useEffect(() => {
    if (inView) {
      spring.set(to);
    }
  }, [inView, to, spring]);

  if (prefersReducedMotion) {
    return <span ref={ref} className={className}>{to.toLocaleString(locale)}</span>;
  }

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
};

export default CountUp;

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const StatsCounter = ({ value, label, suffix = '', prefix = '', duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    damping: 50,
    stiffness: 100,
    duration: duration * 1000
  });

  const displayValue = useTransform(springValue, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group hover:bg-white/10 transition-colors duration-300">
      <div className="flex items-baseline gap-1 text-white mb-2">
        {prefix && <span className="text-2xl md:text-3xl font-bold text-accent">{prefix}</span>}
        <motion.span className="text-4xl md:text-6xl font-black tracking-tight tabular-nums">
          {displayValue}
        </motion.span>
        {suffix && <span className="text-xl md:text-2xl font-bold text-accent">{suffix}</span>}
      </div>
      <span className="text-sm md:text-base font-medium text-slate-300 uppercase tracking-wider text-center group-hover:text-white transition-colors">
        {label}
      </span>
    </div>
  );
};

export default StatsCounter;

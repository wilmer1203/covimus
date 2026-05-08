import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const DURATION_MS = 12000;

const AnniversaryModal = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isVisible) return;

    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 100 - (elapsed / DURATION_MS) * 100);
      setProgress(remaining);
      if (remaining === 0) {
        clearInterval(interval);
        setIsVisible(false);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible]);

  const close = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-xs bg-[#0f172a] rounded-2xl overflow-hidden border border-[#FFCC00]/30 shadow-[0_0_60px_rgba(255,204,0,0.15)]"
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 10 }}
            transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: título + X + botón CTA pequeño */}
            <div className="flex items-center justify-between px-4 pt-4 pb-2 gap-2">
              <motion.p
                className="text-[#FFCC00] font-bold text-xs tracking-widest uppercase shrink-0"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                ★ 17 Años de COVIMUS ★
              </motion.p>

              <div className="flex items-center gap-2 shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    to="/projects"
                    onClick={close}
                    className="flex items-center gap-1 bg-[#FFCC00] hover:brightness-110 text-[#0f172a] font-bold text-xs px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap"
                  >
                    Ver proyectos
                    <Icon name="ArrowRight" size={12} />
                  </Link>
                </motion.div>

                <button
                  onClick={close}
                  className="text-slate-400 hover:text-white transition-colors duration-200 p-1 rounded-lg hover:bg-white/10"
                  aria-label="Cerrar"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            </div>

            {/* Imagen flotante — ocupa todo el ancho */}
            <div className="px-3 pb-3">
              <motion.div
                className="rounded-xl overflow-hidden border-2 border-[#FFCC00]/60"
                style={{ boxShadow: '0 0 24px rgba(255,204,0,0.25)' }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              >
                <img
                  src="/assets/images/17_covimus.jpeg"
                  alt="17 Años de COVIMUS"
                  className="w-full object-contain"
                />
              </motion.div>
            </div>

            {/* Barra de progreso */}
            <div className="h-1 bg-white/10 w-full">
              <div
                className="h-full bg-[#FFCC00] transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnniversaryModal;

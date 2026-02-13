import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const AuthorityModal = ({ isOpen, onClose, authority }) => {
  if (!isOpen || !authority) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Glossy Header Background */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/20 to-secondary/20" />
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-white/10 text-white/50 hover:text-white transition-colors z-20"
            >
              <Icon name="X" size={20} />
            </button>

            <div className="relative p-8 pt-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Profile Image */}
                <div className="shrink-0 mx-auto md:mx-0">
                  <div className="size-32 rounded-full border-4 border-slate-900 shadow-xl overflow-hidden relative group">
                     {authority.image ? (
                        <img 
                          src={authority.image} 
                          alt={authority.name}
                          className="w-full h-full object-cover" 
                        />
                     ) : (
                        <div className="w-full h-full bg-slate-800 flex items-center justify-center text-white/20">
                          <Icon name="User" size={48} />
                        </div>
                     )}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center md:text-left flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{authority.name}</h3>
                    <div className="text-accent font-medium mb-1">{authority.position}</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">{authority.credentials}</div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {authority.bio}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-white/60 uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
                       <Icon name="Activity" size={14} className="text-accent" />
                       Atribuciones y Funciones
                    </h4>
                    <ul className="space-y-2 text-left">
                      {authority.functions?.map((func, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-slate-400">
                          <div className="mt-1 shrink-0 size-1.5 rounded-full bg-secondary" />
                          <span>{func}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {authority.contact && (
                     <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center md:justify-start gap-2 text-sm text-slate-400">
                        <Icon name="Mail" size={14} className="text-primary" />
                        <a href={`mailto:${authority.contact}`} className="hover:text-white transition-colors">{authority.contact}</a>
                     </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthorityModal;

import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const OrganogramNode = ({ authority, onClick, level = 0 }) => {
  const isMain = level === 0;
  
  return (
    <div className="relative flex flex-col items-center">
      <motion.button
        onClick={() => onClick(authority)}
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative group text-left w-full
          ${isMain ? 'max-w-md' : 'max-w-sm'}
        `}
      >
        {/* Animated Gradient Border (hover effect) */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none" />
        
        <div className="relative bg-slate-900 border border-white/10 rounded-xl p-5 shadow-lg overflow-hidden h-full flex items-center gap-4 transition-colors group-hover:bg-slate-800">
             
             {/* Decor */}
             <div className="flex-grow min-w-0 text-center relative z-10">
               <div className="flex flex-col items-center justify-center gap-2 py-2">
                   {/* Decorative Tricolor Bar Top */}
                   <div className="flex w-12 h-1 mb-2 rounded-full overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                      <div className="w-1/3 h-full bg-[#FFCC00]" />
                      <div className="w-1/3 h-full bg-[#243F60]" />
                      <div className="w-1/3 h-full bg-[#C00000]" />
                   </div>

                   <h3 className={`font-black text-white uppercase tracking-wider leading-tight ${isMain ? 'text-lg' : 'text-sm'}`} style={{ color: '#FFCC00' }}>
                     {authority.position}
                   </h3>
                   
                   <div className="h-px w-16 bg-white/10 my-1 group-hover:w-full transition-all duration-500" />

                   <span className="text-[10px] text-slate-400 font-medium px-2 py-0.5 transition-colors uppercase tracking-[0.2em] group-hover:text-white">
                      Ver Funciones
                   </span>
               </div>
             </div>
        </div>
      </motion.button>
    </div>
  );
};

export default OrganogramNode;

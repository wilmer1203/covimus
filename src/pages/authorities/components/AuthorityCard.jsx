import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const AuthorityCard = ({ authority, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-[500px] w-full bg-slate-900 rounded-[2rem] overflow-hidden border border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 bg-slate-800">
         {authority.image ? (
            <img 
               src={authority.image} 
               alt={authority.name}
               className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            />
         ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center opacity-60">
               <Icon name="User" size={80} className="text-white/10" />
            </div>
         )}
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
         
         {/* Name & Position (Always visible) */}
         <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <div className="bg-accent/20 w-fit px-3 py-1 rounded-full border border-accent/20 mb-4 backdrop-blur-sm">
               <span className="text-accent text-xs font-bold uppercase tracking-widest">{authority.position}</span>
            </div>
            <h3 className="text-3xl font-black text-white mb-2 leading-tight">{authority.name}</h3>
            <p className="text-slate-400 font-light text-lg mb-4">{authority.credentials}</p>
         </div>

         {/* Detailed Bio (Revealed on Hover/Focus) */}
         <div className={`overflow-hidden transition-all duration-500 ${isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-slate-300 leading-relaxed text-sm mb-6 border-l-2 border-accent pl-4">
               {authority.bio}
            </p>
            
            {/* Certifications / Highlights */}
            <div className="mb-6">
                <h4 className="text-white text-xs font-bold uppercase mb-2 flex items-center gap-2">
                   <Icon name="Award" size={14} className="text-accent" />
                   Trayectoria & Formación
                </h4>
                <ul className="text-xs text-slate-400 space-y-1">
                   {authority.highlights?.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                         <span className="w-1 h-1 rounded-full bg-slate-500 mt-1.5" />
                         {highlight}
                      </li>
                   ))}
                </ul>
            </div>

            <button className="flex items-center gap-2 text-white text-sm font-bold hover:text-accent transition-colors">
               Perfil Completo <Icon name="ArrowRight" size={16} />
            </button>
         </div>
      </div>
    </motion.div>
  );
};

export default AuthorityCard;

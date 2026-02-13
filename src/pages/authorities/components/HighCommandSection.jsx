import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { highCommand } from '../../../data/authoritiesData';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const CredentialItem = ({ icon, title, items, color }) => (
    <motion.div variants={itemVariants} className="mb-5 last:mb-0">
        <div className="flex items-center gap-2 mb-2">
            <div className={`p-1.5 rounded-lg bg-${color}-500/10 border border-${color}-500/20`}>
               <Icon name={icon} size={16} className={`text-${color}-400`} />
            </div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{title}</h4>
        </div>
        <ul className="space-y-1.5 pl-1">
            {items?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm leading-snug">
                    <span className={`w-1 h-1 rounded-full bg-${color}-500 mt-1.5 shrink-0`} />
                    <span className="font-light">{item}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const PresidentialCard = ({ leader, contextImage, index }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                duration: 0.6, 
                delay: index * 0.2, 
                when: "beforeChildren",
                staggerChildren: 0.1
            } 
        }
      }}
      className="relative group rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-[#FFCC00]/30 transition-all duration-500 shadow-2xl flex flex-col lg:flex-row hover:shadow-[0_0_30px_rgba(255,204,0,0.05)]"
    >
        {/* Context Background (Project Image) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
               src={contextImage} 
               alt="Contexto" 
               className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-all duration-1000 scale-100 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
        </div>

        {/* Leader Image (Left/Top Side) */}
        <div className="relative z-10 w-full lg:w-4/12 h-[300px] lg:h-auto overflow-hidden border-r border-white/5 bg-slate-950">
             {leader.image ? (
                <>
                    <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover object-top filter contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 lg:hidden" />
                </>
             ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-800">
                    <Icon name="User" size={80} className="text-white/20" />
                </div>
             )}
        </div>

        {/* Content Side (Right Side) */}
        <div className="relative z-20 w-full lg:w-8/12 p-6 md:p-8 flex flex-col justify-center">
            
            {/* Header Info */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 mb-6 border-b border-white/5 pb-6">
                <div>
                    <div className="mb-2 inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFCC00]/10 border border-[#FFCC00]/20 rounded-full">
                        <Icon name="Crown" size={12} className="text-[#FFCC00]" />
                        <span className="text-[10px] font-bold text-[#FFCC00] uppercase tracking-widest">{leader.roleTag}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-1 leading-tight tracking-tight">
                        {leader.name}
                    </h3>
                    <p className="text-lg text-blue-400 font-bold">{leader.position}</p>
                </div>
            </motion.div>

            {/* Profile Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                
                {/* Column 1: Bio & Education */}
                <div>
                    <motion.div variants={itemVariants} className="mb-6">
                        <p className="text-slate-200 text-sm leading-relaxed font-light italic opacity-90 pl-3 border-l-2 border-white/20">
                            "{leader.bio}"
                        </p>
                    </motion.div>

                    <CredentialItem 
                        icon="GraduationCap" 
                        title="Formación Académica" 
                        items={leader.education} 
                        color="blue"
                    />
                </div>

                {/* Column 2: Experience & Certifications */}
                <div>
                     <CredentialItem 
                        icon="Briefcase" 
                        title="Trayectoria Profesional" 
                        items={leader.experience} 
                        color="emerald"
                    />
                    
                    <div className="mt-6 pt-6 border-t border-white/5">
                        <CredentialItem 
                            icon="Award" 
                            title="Certificaciones" 
                            items={leader.certifications} 
                            color="yellow" 
                        />
                    </div>
                </div>
            </div>

        </div>
    </motion.div>
  );
};

const HighCommandSection = () => {
    // Data imported from source of truth
    const { alcalde, presidente } = highCommand;

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5" />
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-3 block">Nuestra Estructura</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Alto Mando</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        La sinergia entre el liderazgo político y la capacidad técnica que impulsa a COVIMUS.
                    </p>
                </div>

                <div className="space-y-12">
                     {/* Alcalde Card */}
                     <PresidentialCard leader={alcalde} contextImage={alcalde.contextImage} index={0} />
                     
                     {/* Connector Element (Visual Hierarchy) */}
                     <div className="flex justify-center -my-6 relative z-0 opacity-50">
                        <div className="h-16 w-1 bg-gradient-to-b from-blue-500/50 to-slate-700" />
                     </div>

                     {/* Presidente Card */}
                     <PresidentialCard leader={presidente} contextImage={presidente.contextImage} index={1} />
                </div>

            </div>
        </section>
    );
};

export default HighCommandSection;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import OrganogramNode from './OrganogramNode';
import { highLevelOrg, presidentNode, leadershipTeam } from '../../../data/authoritiesData';

const FunctionalOrganogram = ({ setSelectedAuthority }) => {
    const [showOrganogram, setShowOrganogram] = useState(false);

    const asamblea = highLevelOrg[0];
    const junta = highLevelOrg[1];
    const president = presidentNode;
    const managers = leadershipTeam;

    return (
        <section className="py-24 bg-[#4C4C4C] relative border-t border-border/50 overflow-hidden">
             <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5" />
             
             <div className="max-w-7xl mx-auto px-4 relative z-10 font-sans">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black mb-4 text-white">Estructura Funcional</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Mapa de procesos y responsabilidades.</p>
                    
                    {/* Accordion Trigger Button */}
                    <button 
                       onClick={() => setShowOrganogram(!showOrganogram)}
                       className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#FFCC00] text-slate-900 font-bold uppercase tracking-widest rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)] transform hover:-translate-y-1"
                    >
                       <span className="relative z-10 flex items-center gap-2">
                          {showOrganogram ? 'Ocultar Organigrama' : 'Ver el Organigrama y sus Funciones'}
                          <Icon name={showOrganogram ? "ChevronUp" : "ChevronDown"} size={20} className="stroke-[3]" />
                       </span>
                    </button>
                </div>
 
               <AnimatePresence>
                 {showOrganogram && (
                   <motion.div 
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: 'auto' }}
                     exit={{ opacity: 0, height: 0 }}
                     transition={{ duration: 0.5, ease: "easeInOut" }}
                     className="flex flex-col items-center w-full overflow-hidden"
                   >
                     <div className="py-12 w-full flex flex-col items-center">
                     
                     {/* Level -2: Asamblea */}
                     <div className="relative mb-16 z-10">
                         <OrganogramNode 
                             authority={asamblea} 
                             level={0} 
                             onClick={setSelectedAuthority} 
                         />
                         <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[#FFCC00] to-[#C00000] -translate-x-1/2 -z-10" />
                     </div>
    
                     {/* Level -1: Junta Directiva */}
                     <div className="relative mb-16 z-10">
                         <OrganogramNode 
                             authority={junta} 
                             level={0} 
                             onClick={setSelectedAuthority} 
                         />
                         <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[#FFCC00] to-[#C00000] -translate-x-1/2 -z-10" />
                     </div>
    
                     {/* Level 0: Presidency */}
                     <div className="relative mb-16 z-10">
                        <OrganogramNode 
                           authority={president} 
                           level={0} 
                           onClick={setSelectedAuthority} 
                        />
                        <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-slate-700 to-[#FFCC00] -translate-x-1/2 -z-10" />
                        <div className="absolute -bottom-16 left-1/2 w-0.5 h-8 bg-[#FFCC00] shadow-[0_0_15px_rgba(255,204,0,0.6)] -translate-x-1/2 -z-10" />
                     </div>
    
                     {/* Level 1: Functional Managers Grid */}
                     <div className="relative w-full max-w-6xl">
                        {/* Horizontal Connector Bar */}
                        <div className="absolute -top-8 left-[10%] right-[10%] h-px bg-[#FFCC00]/50 shadow-[0_0_8px_rgba(255,204,0,0.4)] hidden md:block" />
                        
                        {/* Vertical Connectors Ends */}
                        <div className="absolute -top-8 left-[10%] h-8 w-px bg-gradient-to-b from-transparent to-[#FFCC00] hidden md:block" />
                        <div className="absolute -top-8 right-[10%] h-8 w-px bg-gradient-to-b from-transparent to-[#FFCC00] hidden md:block" />
    
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center">
                           {managers.map((manager, idx) => (
                              <div key={manager.id} className="relative w-full flex justify-center">
                                 {/* Vertical Line Connector Top */}
                                 <div className="absolute -top-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[#243F60] to-slate-800 -translate-x-1/2 md:hidden" />
                                 <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#FFCC00] to-slate-800 -translate-x-1/2 hidden md:block" />
                                 
                                 <OrganogramNode 
                                    authority={manager} 
                                    level={1} 
                                    onClick={setSelectedAuthority} 
                                 />
                              </div>
                           ))}
                        </div>
                     </div>
                   </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
         </section>
    );
};

export default FunctionalOrganogram;

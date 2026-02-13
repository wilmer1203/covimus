import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-[#243F60] text-white border-blue-400/30';
      case 'in-progress':
        return 'bg-[#FFCC00] text-black border-yellow-400/30';
      case 'planned':
        return 'bg-slate-700 text-slate-300 border-white/10';
      default:
        return 'bg-slate-800 text-slate-400 border-white/5';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Ejecutado';
      case 'in-progress': return 'En Ejecución';
      case 'planned': return 'En Planificación';
      default: return 'Desconocido';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
        // Card Container
        className="group bg-slate-950 border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#FFCC00]/50 hover:shadow-[0_0_40px_rgba(255,204,0,0.15)] transition-all duration-500 relative"
      >
        {/* Image Section - Vertical 4:5 */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
             src={project?.image}
             alt={project?.name}
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
          
          <div className="absolute top-4 right-4">
             <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border shadow-lg ${getStatusColor(project?.status)}`}>
               {getStatusText(project?.status)}
             </span>
          </div>

          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="text-2xl font-black text-white mb-2 leading-tight group-hover:text-[#FFCC00] transition-colors line-clamp-2">
              {project?.name}
            </h3>
            <div className="flex items-center space-x-2 text-slate-300 text-xs font-bold uppercase tracking-wide">
               <Icon name="MapPin" size={14} className="text-[#FFCC00]" />
               <span>{project?.municipality || project?.location}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 pt-2 space-y-6">
           <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-light">
             {project?.description}
           </p>

           {/* Metrics Grid */}
           <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/5 border-b">
              <div>
                 <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider block mb-1">Material</span>
                 <span className="text-base font-bold text-white font-mono">{project?.budget}</span>
              </div>
              <div className="text-right">
                 <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider block mb-1">Inicio</span>
                 <span className="text-base font-bold text-white font-mono">{project?.startDate}</span>
              </div>
           </div>

           {/* Progress Bar */}
           <div className="space-y-2">
             <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
               <span className="text-slate-400">Avance Total</span>
               <span className="text-[#FFCC00]">{project?.progress}%</span>
             </div>
             <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project?.progress}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-[#FFCC00] rounded-full shadow-[0_0_10px_rgba(255,204,0,0.5)]"
                />
             </div>
           </div>

        <Button
          variant="default"
          size="sm"
          onClick={() => onViewDetails(project)}
          className="w-full bg-[#FFCC00] hover:bg-yellow-400 text-slate-900 border-none transition-all h-12 font-black uppercase tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(255,204,0,0.4)] rounded-xl mt-2"
        >
          Ver Ficha Técnica
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
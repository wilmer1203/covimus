import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  // Reset image index when project changes
  React.useEffect(() => {
    if (isOpen) {
      setActiveImageIndex(0);
    }
  }, [isOpen, project]);

  if (!project) return null;

  const images = project.images || [project.image];

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success text-success-foreground';
      case 'in-progress':
        return 'bg-primary text-primary-foreground';
      case 'planned':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completado';
      case 'in-progress':
        return 'En Progreso';
      case 'planned':
        return 'Planificado';
      default:
        return 'Desconocido';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            className="fixed inset-2 md:inset-10 lg:inset-x-24 lg:inset-y-14 z-50 overflow-hidden flex justify-center"
          >
            <div className="bg-[#0B1120] w-full max-w-7xl rounded-[2rem] shadow-2xl flex flex-col border border-white/10 overflow-hidden relative">
              <div className="flex items-center justify-between p-4 border-b border-white/5 relative z-10 bg-slate-900/50">
                <div className="flex-1 min-w-0 pr-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest border ${getStatusColor(project?.status)} bg-transparent shrink-0`}>
                      {getStatusText(project?.status)}
                    </span>
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest truncate">Código: OB-2026-{project?.id}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight truncate">{project?.name}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="size-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C00000] hover:text-white transition-all text-slate-400 border border-white/10 shrink-0"
                >
                  <Icon name="X" size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-0 relative z-10 custom-scrollbar bg-slate-950">
                <div className="grid grid-cols-1 md:grid-cols-12 min-h-full">

                  {/* Left Column: Interactive Visuals */}
                  <div className="md:col-span-7 bg-black/20 p-6 md:p-8 flex flex-col gap-6">
                    <div className="relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeImageIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={images[activeImageIndex]}
                            alt={`${project?.name} - Imagen ${activeImageIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Image Indicators (Top Right) */}
                      <div className="absolute top-4 right-4 flex gap-1.5 z-20">
                        {images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all shadow-sm ${idx === activeImageIndex ? 'w-8 bg-[#FFCC00]' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                          />
                        ))}
                      </div>

                      {/* Controls Overlay (Sides) */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between px-4 pointer-events-none">
                        <button onClick={handlePrevImage} className="pointer-events-auto size-12 rounded-full bg-black/50 hover:bg-[#FFCC00] hover:text-black backdrop-blur-md flex items-center justify-center text-white transition-all transform hover:scale-110 border border-white/10">
                          <Icon name="ChevronLeft" size={28} />
                        </button>
                        <button onClick={handleNextImage} className="pointer-events-auto size-12 rounded-full bg-black/50 hover:bg-[#FFCC00] hover:text-black backdrop-blur-md flex items-center justify-center text-white transition-all transform hover:scale-110 border border-white/10">
                          <Icon name="ChevronRight" size={28} />
                        </button>
                      </div>
                    </div>
                  </div>


                  {/* Right Column: Report Details */}
                  <div className="md:col-span-5 p-6 md:p-8 space-y-8 bg-slate-950">
                    {/* Technical Specs Row */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Material Colocado", value: project?.budget, icon: "Layers" },
                        { label: "Alcance", value: project?.beneficiaries, icon: "Map" },
                        { label: "Inicio", value: project?.startDate, icon: "Calendar" },
                        { label: "Entrega", value: project?.endDate, icon: "Flag" }
                      ].map((stat, i) => (
                        <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:border-[#FFCC00]/30 transition-all hover:bg-white/10 group">
                          <div className="flex items-start justify-between mb-2">
                            <div className="text-[#FFCC00] text-[15px] font-black uppercase tracking-wider">{stat.label}</div>
                            <div className="text-[#FFCC00] opacity-60 group-hover:opacity-100 transition-opacity">
                              <Icon name={stat.icon} size={16} />
                            </div>
                          </div>
                          <p className="text-white font-bold text-sm md:text-base leading-tight font-mono">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h3 className="text-[#FFCC00] font-black uppercase tracking-widest text-xs mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                        <Icon name="FileText" size={16} />
                        Memoria Descriptiva
                      </h3>
                      <p className="text-slate-300 leading-relaxed font-light text-lg">
                        {project?.fullDescription}
                      </p>
                    </div>

                    {/* Contractor Info */}
                    <div>
                      <h3 className="text-[#FFCC00] font-black uppercase tracking-widest text-xs mb-4">Empresa Responsable</h3>
                      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                        <div className="size-10 bg-white/10 rounded-full flex items-center justify-center text-white">
                          <Icon name="Briefcase" size={20} />
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">{project?.contractor}</p>
                          <p className="text-slate-500 text-xs">Contratista General</p>
                        </div>
                      </div>
                    </div>

                    {/* Map moved here */}
                    <div className="bg-slate-900 rounded-2xl p-1 border border-white/10 h-48 mt-8">
                      <iframe
                        width="100%"
                        height="100%"
                        loading="lazy"
                        title={project?.name}
                        src={`https://www.google.com/maps?q=${project?.coordinates?.lat},${project?.coordinates?.lng}&z=15&output=embed&maptype=satellite`}
                        className="w-full h-full rounded-xl grayscale-[50%] hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
                      />
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
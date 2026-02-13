import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CountUp = ({ to, duration = 2, className }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString('es-VE'));

  useEffect(() => {
    if (inView) {
      spring.set(to);
    }
  }, [inView, to, spring]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
};

const HeroSection = () => {
  const projectHighlights = [
  {
    id: 1,
    title: "Vialidad Urbana Sotillo",
    description: "Mantenimiento y asfaltado de avenidas principales",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15102ed5d-1768010396258.png",
    imageAlt: "Modern highway with multiple lanes stretching through urban landscape with clear blue sky and modern infrastructure",
    status: "En Progreso",
    progress: 85
  },
  {
    id: 2,
    title: "Hospital General del Este",
    description: "Ampliación de servicios de salud comunitaria",
    image: "https://images.unsplash.com/photo-1658131550268-8d86f719a041",
    imageAlt: "Modern hospital building exterior with white facade, large windows, and emergency entrance visible in daylight",
    status: "Completado",
    progress: 100
  },
  {
    id: 3,
    title: "Escuela Técnica Industrial",
    description: "Renovación integral de infraestructura educativa",
    image: "https://images.unsplash.com/photo-1679296036547-b57ae4b01b82",
    imageAlt: "Contemporary school building with red brick exterior, multiple floors, large windows and students visible in courtyard area",
    status: "Planificación",
    progress: 25
  }];


  const [currentProject, setCurrentProject] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectHighlights?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <Image 
          src="/assets/images/av_paseo.webp"
          alt="Paseo de la Cruz y el Mar - Puerto La Cruz"
          className="w-full h-full object-cover"
         />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
                <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center space-x-2 border-l-4 border-accent pl-4 mb-6">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">E.P.S. COVIMUS S.A.</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-tight mb-6">
                        TRANSFORMANDO <br/>
                        LA <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">VIALIDAD</span> <br/>
                        DE SOTILLO
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-light border-l border-white/10 pl-4 py-2">
                        Ejecución de proyectos de ingeniería civil y asfaltado bajo un modelo de gestión social eficiente. Construyendo el futuro de Puerto La Cruz.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                    <Link to="/projects">
                        <button className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-yellow-400 text-slate-900 font-bold rounded-none flex items-center justify-center gap-3 transition-all uppercase tracking-wider group">
                            <span>Ver Proyectos</span>
                            <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className="w-full sm:w-auto px-8 py-4 border border-white text-white hover:bg-white hover:text-slate-900 font-bold rounded-none flex items-center justify-center gap-3 transition-all uppercase tracking-wider">
                            <span>Contáctanos</span>
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Visual Stats / Highlights (Tachitec/High-End Style) */}
            <div className="hidden lg:block relative h-full min-h-[500px]">
                 {/* Floating Abstract Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
                 
                 {/* Bento Grid Layout - Asymmetric & Dynamic */}
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-lg grid grid-cols-2 gap-6 p-6">
                    
                    {/* Card 1: Asphalt Management Stats */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                        className="col-span-2 bg-gradient-to-br from-slate-900/90 to-black/90 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group hover:border-accent/30 transition-colors"
                    >
                        <div className="relative z-10 flex items-center justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                                    <span className="text-accent font-bold uppercase tracking-widest text-[10px] md:text-xs">Gestión Dr. Jesús Marcano</span>
                                </div>
                                <h3 className="text-6xl font-black text-white mb-2 tracking-tighter">
                                    <CountUp to={9747} className="" />
                                </h3>
                                <p className="text-slate-300 font-medium text-lg leading-tight">
                                    Toneladas Colocadas <br/> <span className="text-sm text-slate-500 font-normal">Desde 09/09/2025</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Plant Production */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, type: 'spring' }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-all group"
                    >
                         <div className="flex flex-col justify-center h-full">
                            <h4 className="text-[#FFCC00] font-bold uppercase tracking-widest text-[15px] mb-1">Producción Mensual</h4>
                            <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">
                                <CountUp to={1200} /><span className="text-slate-500 text-lg ml-1 font-bold">Tons</span>
                            </h3>
                        </div>
                    </motion.div>

                    {/* Card 3: Localities */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, type: 'spring' }}
                         className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-all group"
                    >
                         <div className="flex flex-col justify-center h-full">
                            <h4 className="text-[#FFCC00] font-bold uppercase tracking-widest text-[15px] mb-1">Localidades</h4>
                            <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">
                                <CountUp to={25} />
                            </h3>
                            <p className="text-slate-400 text-sm font-medium">Sectores Atendidos</p>
                        </div>
                    </motion.div>

                 </div>
            </div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent flex items-end justify-center pb-8 z-20 pointer-events-none">
         <div className="animate-bounce text-white/30">
            <Icon name="ChevronDown" size={32} />
         </div>
      </div>
    </section>
  );
};

export default HeroSection;
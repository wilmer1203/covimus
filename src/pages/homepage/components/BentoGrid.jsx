import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BentoCard = ({ title, description, icon, link, className, image, video, isImageCard }) => {
    const [isHovered, setIsHovered] = useState(false);

    if (isImageCard) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className={`group relative rounded-3xl overflow-hidden h-full min-h-[300px] border border-white/10 ${className}`}
            >
                <div className="absolute inset-0">
                    {video ? (
                        <video 
                            src={video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <Image 
                            src={image} 
                            alt={title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
                </div>
                
                <div className="absolute bottom-0 left-0 p-8 z-10">
                    {/* <div className="bg-accent/20 backdrop-blur-md p-3 rounded-2xl w-fit mb-4 text-accent border border-accent/20">
                        <Icon name={icon} size={24} />
                    </div> */}
                    <h3 className="text-3xl font-black text-white mb-2 leading-tight">{title}</h3>
                    <p className="text-slate-200 font-medium">{description}</p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`group relative rounded-3xl bg-slate-900 border border-white/10 p-8 flex flex-col overflow-hidden h-full ${className}`}
        >
             {/* Glow effect background */}
            <div className={`absolute -inset-px bg-gradient-to-r from-accent to-yellow-600 rounded-3xl opacity-0 group-hover:opacity-20 transition duration-500 blur-md pointer-events-none`} />
{/*             
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                <Icon name={icon} size={140} />
            </div> */}

            <div className="relative z-10 flex flex-col h-full">
                {/* <motion.div
                    animate={{ rotate: isHovered ? 15 : 0, scale: isHovered ? 1.1 : 1 }}
                    className="size-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:border-accent/50 transition-colors"
                >
                    {/* <Icon name={icon} size={28} className="text-white group-hover:text-accent transition-colors" /> */}
                {/* </motion.div> */} 

                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-accent transition-colors">{title}</h3>
                
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                <Link to={link}>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">
                        <span>Explorar</span>
                        <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>
            </div>
        </motion.div>
    );
};

const BentoGrid = () => {
    // Generate simple placeholder for now or use the Asset if available
    // const generatedImage = "/assets/images/bento_industrial.png"; // Placeholder path

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-3 block">
            Nuestras Capacidades
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ejes de Acción <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">Estratégica</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Soluciones integrales de infraestructura diseñadas para transformar la calidad de vida en Sotillo.
          </p>
        </div>

        {/* BENTO GRID LAYOUT: 1 Col Left (Services), 2 Cols Right (Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Stacked Services */}
            <div className="lg:col-span-1 flex flex-col gap-6">
                <BentoCard 
                    title="Vialidad y Asfaltado"
                    description="Producción industrial y colocación de carpetas asfálticas de alta resistencia."
                    icon="Truck"
                    link="/projects"
                    className="flex-1"
                />
                
                <BentoCard 
                    title="Obras Civiles"
                    description="Desarrollo de infraestructuras complejas, desde drenajes hasta edificaciones."
                    icon="Building2"
                    link="/projects"
                    className="flex-1"
                />

                <BentoCard 
                    title="Mantenimiento Urbano"
                    description="Programas de limpieza y recuperación de espacios para el bienestar ciudadano."
                    icon="Brush"
                    link="/projects"
                    className="flex-1"
                />
            </div>

             {/* Right Column: Feature Image (Spans 2 cols, Full Height) */}
             <div className="lg:col-span-2 h-full min-h-[500px] lg:min-h-0">
                <BentoCard 
                    title="Tecnología de Vanguardia"
                    description="Modernización de parque de maquinaria y procesos constructivos."
                    icon="Cpu"
                    link="/projects"
                    isImageCard={true}
                    video="/assets/asfalto.mp4"
                    className="h-full"
                />
             </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const pillars = [
  {
    icon: "FileSearch", // More specific than FileText
    title: "Transparencia Total",
    desc: "Acceso abierto a la información. Gestión clara sin secretos ante los ciudadanos.",
    color: "from-blue-400 to-blue-600",
    image: "/assets/images/nosotros.jpg"
  },
  {
    icon: "Factory", // Industrial context
    title: "Eficiencia Operativa",
    desc: "Planta de Asfalto al 100%. Maximizamos recursos para obras de alto impacto.",
    color: "from-cyan-400 to-cyan-600",
    image: "/assets/images/asphalt-plant.png"
  },
  {
    icon: "Handshake", // More interactive/social
    title: "Compromiso Social",
    desc: "Proyectos que nacen de la comunidad. Infraestructura con sentido humano.",
    color: "from-red-400 to-pink-600",
    image: "/assets/images/5.jpg"
  },
  {
    icon: "Scale", // Justice/Ethics
    title: "Ética e Integridad",
    desc: "Cero tolerancia a la corrupción. Equipo profesional comprometido con Sotillo.",
    color: "from-emerald-400 to-emerald-600",
    image: "/assets/images/motor_1.jpg"
  }
];

const GovernancePillars = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/8.jpg" 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-30 fixed-background"
        />
        <div className="absolute inset-0 bg-slate-950/85" /> {/* High opacity to prevent visual noise */}
      </div>
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10 z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#FFCC00] mb-2 uppercase tracking-tight">Pilares de Gobernanza</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[550px] rounded-3xl overflow-hidden cursor-default shadow-2xl border border-white/10"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                 <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Top Icon Badge - No container, just Big Yellow Icon */}
              <div className="absolute top-6 right-6 z-20">
                 <Icon name={pillar.icon} size={48} className="text-[#FFCC00] drop-shadow-md" strokeWidth={1.5} />
              </div>

              {/* Content Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform transition-transform duration-300 group-hover:translate-y-0">
                 <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${pillar.color} mb-4`} />
                 <h3 className="text-2xl font-black text-white mb-3 leading-tight">
                    {pillar.title}
                 </h3>
                 <p className="text-slate-300 text-sm leading-relaxed opacity-90 font-light border-l-2 border-white/20 pl-3">
                    {pillar.desc}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernancePillars;

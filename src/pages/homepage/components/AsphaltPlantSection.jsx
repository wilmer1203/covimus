import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AsphaltPlantSection = () => {
  const features = [
    {
      icon: "Factory",
      title: "Producción Propia",
      description: "Mezcla asfáltica en caliente de alta resistencia diseñada para el clima tropical."
    },
    {
      icon: "Beaker",
      title: "Laboratorio QA/QC",
      description: "Control de calidad riguroso en cada lote para garantizar máxima durabilidad."
    },
    {
      icon: "ShieldCheck",
      title: "Certificación Técnica",
      description: "Cumplimos con normativas nacionales e internacionales de pavimentación."
    },
    {
      icon: "Truck",
      title: "Logística Integrada",
      description: "Flota propia para despacho inmediato a cualquier rincón de Puerto La Cruz."
    }
  ];

  return (
    <section className="py-12 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-slate-900"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 text-primary">
              <Icon name="Settings" size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Músculo Industrial</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Planta de Asfalto <br />
              <span className="text-primary tracking-tight">Potencia Industrial Propia</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              En COVIMUS no solo ejecutamos obras; somos productores. Nuestra planta de última generación nos permite garantizar la calidad desde el origen, reduciendo costos y tiempos de ejecución para el beneficio de todos los ciudadanos de Sotillo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex flex-col gap-3 group"
                >
                  <div className="size-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm group-hover:border-primary/30 group-hover:shadow-md transition-all">
                    <Icon name={feature.icon} size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500 leading-snug">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Side: Image Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] lg:aspect-auto">
              <Image 
                src="/assets/images/asphalt-plant.png" 
                alt="Planta de Asfalto COVIMUS"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay stats */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Capacidad Diaria</p>
                    <p className="text-3xl font-black">1200 TNS</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Ubicación</p>
                    <a 
                        href="https://www.google.com/maps/search/?api=1&query=10.128450,-64.595824" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-bold hover:text-primary transition-colors flex items-center justify-end gap-1"
                    >
                        El Rincón, Anzoátegui <Icon name="ExternalLink" size={14} />
                    </a>
                    <p className="text-[10px] text-slate-400 font-mono mt-1">10.128450, -64.595824</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full z-[-1] blur-3xl opacity-10"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AsphaltPlantSection;

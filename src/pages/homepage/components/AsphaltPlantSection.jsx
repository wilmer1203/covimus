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
    <section className="py-12 lg:py-24 relative overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/10.jpg"
          alt="Fondo Planta de Asfalto"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-slate-900/80"></div> */}
        <div className="absolute inset-0 bg-[#243F60]/85"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-400/10 border border-red-500/20 mb-6 text-white backdrop-blur-sm">
              <Icon name="Settings" size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Músculo Industrial</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-white">
              Planta de Asfalto <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C00000] to-red-500 tracking-tight drop-shadow-sm">
                Potencia Industrial Propia
              </span>
            </h2>

            <p className="text-lg text-slate-100 mb-10 leading-relaxed">
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
                  <div className="size-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-[#C00000] shadow-sm group-hover:border-[#C00000]/50 group-hover:bg-[#C00000]/10 transition-all backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
                    <Icon name={feature.icon} size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#C00000] transition-colors duration-300">{feature.title}</h4>
                    <p className="text-sm text-slate-100 leading-snug group-hover:text-slate-300 transition-colors">{feature.description}</p>
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 aspect-[4/5] lg:aspect-auto bg-slate-800">
              <Image
                src="/assets/images/planta.jpeg"
                alt="Planta de Asfalto COVIMUS"
                className="w-full h-[700px] object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
              />

              {/* Overlay stats */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-70 mb-1 text-primary">Capacidad Diaria</p>
                    <p className="text-3xl font-black">1200 TNS</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-widest opacity-70 mb-1 text-primary">Ubicación</p>
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
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full z-[-1] blur-[60px] opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full z-[-1] blur-[60px] opacity-20"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AsphaltPlantSection;

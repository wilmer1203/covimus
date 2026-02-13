import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../AppIcon';

const Timeline = () => {
  const events = [
    {
      year: "2004",
      date: "Decreto N° 93",
      title: "Génesis Institucional",
      description: "Se promulga el Decreto N° 93 que da origen al Instituto Autónomo Municipal, sentando las bases legales para la administración de infraestructura en Sotillo.",
      icon: "ScrollText", // Legal/History icon
      color: "var(--color-slate-400)"
    },
    {
      year: "2009",
      date: "08 de Mayo",
      title: "Nacimiento de COVIMUS",
      description: "Transformación definitiva en Empresa de Producción Social (E.P.S.), formalizada ante el Registro Mercantil. Nace una entidad con visión socialista y eficiencia técnica.",
      icon: "Building2",
      color: "var(--color-primary)" // Navy Blue
    },
    {
      year: "2010",
      date: "20 de Noviembre",
      title: "Expansión Operativa",
      description: "La Asamblea Extraordinaria aprueba un aumento de capital histórico (Bs. 40MM), permitiendo la adquisición de la primera flota de maquinaria pesada propia.",
      icon: "TrendingUp",
      color: "var(--color-accent)" // Gold
    },
    {
      year: "2024",
      date: "Actualidad",
      title: "Potencia Industrial",
      description: "Consolidación de la Planta de Asfalto y ejecución del Plan de Vialidad Integral. COVIMUS se posiciona como el brazo ejecutor del desarrollo urbano de Puerto La Cruz.",
      icon: "HardHat",
      color: "var(--color-secondary)" // Red
    }
  ];

  return (
    <div className="relative py-10">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 md:-translate-x-1/2" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content Side */}
            <div className="flex-1 ml-12 md:ml-0">
               <div className={`p-6 bg-white rounded-2xl shadow-lg border-l-4 border-slate-200 hover:border-primary transition-colors duration-300 md:text-${index % 2 === 0 ? 'left' : 'right'}`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-2">
                    {event.date}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">{event.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {event.description}
                  </p>
               </div>
            </div>

            {/* Center Node */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-slate-100 shadow-xl z-10">
               <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ color: event.color }}>
                 <Icon name={event.icon} size={20} />
               </div>
            </div>

            {/* Year Marker (Opposite Side) */}
            <div className="flex-1 hidden md:flex items-center justify-center md:justify-start">
               <div className={`w-full text-${index % 2 === 0 ? 'right pr-12' : 'left pl-12'}`}>
                  <span className="text-6xl font-black text-slate-200 select-none opacity-50">{event.year}</span>
               </div>
            </div>
            
            {/* Mobile Year */}
            <div className="ml-12 md:hidden">
               <span className="text-4xl font-black text-slate-200">{event.year}</span>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

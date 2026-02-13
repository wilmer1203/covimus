import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const legalItems = [
  {
    icon: "Book",
    title: "Constitución de la República",
    detail: "Artículo 141",
    desc: "Fundamentamos nuestra actuación en los principios de honestidad, participación, celeridad, eficacia, eficiencia, transparencia, rendición de cuentas y responsabilidad."
  },
  {
    icon: "Landmark",
    title: "Ley Orgánica del Poder Público Municipal",
    detail: "Autonomía de Gestión",
    desc: "Operamos bajo el marco de descentralización y autonomía funcional para garantizar soluciones rápidas a las necesidades locales de Sotillo."
  },
  {
    icon: "Scroll",
    title: "Decreto de Creación N° 93",
    detail: "Año 2004",
    desc: "Documento fundacional que instituye a COVIMUS como la Entidad de Vialidad e Infraestructura del Municipio, definiendo nuestro objeto y alcance social.",
    highlight: true
  },
  {
    icon: "Scale",
    title: "Ley de Contrataciones Públicas",
    detail: "Transparencia",
    desc: "Cada obra y servicio contratado por COVIMUS cumple rigurosamente con los procesos de licitación y adjudicación previstos en la ley."
  }
];

const LegalFramework = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5" />
      <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:w-1/3 relative lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <Icon name="Scale" size={14} />
              Seguridad Jurídica
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
               Marco Legal <span className="text-slate-500">&</span> Normativo
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              En COVIMUS, cada acción administrativa y operativa está estrictamente apegada al ordenamiento jurídico venezolano, garantizando legitimidad y confianza.
            </p>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <Icon name="Quote" className="text-blue-500/20 mb-4" size={32} />
               <p className="italic text-slate-300 font-medium relative z-10">
                 "La sujeción a la ley es la mayor garantía de libertad y justicia para nuestros ciudadanos."
               </p>
            </div>
          </div>

          {/* List Items */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                   relative p-8 rounded-3xl border transition-all duration-500 group overflow-hidden
                   ${item.highlight 
                      ? 'bg-slate-900 border-[#FFCC00]/50 shadow-[0_0_30px_rgba(255,204,0,0.1)]' 
                      : 'bg-slate-900/50 border-white/5 hover:border-[#FFCC00]/30 hover:bg-slate-800/80'}
                `}
              >

                {/* Glow Effect */}
                <div className={`absolute -right-12 -top-12 w-32 h-32 rounded-full blur-[50px] transition-opacity duration-500
                   ${item.highlight ? 'bg-[#FFCC00]/10 opacity-100' : 'bg-white/5 opacity-0 group-hover:opacity-100'}
                `} />

                <div className="relative z-10">
                  <div className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                    ${item.highlight 
                        ? 'bg-[#FFCC00] text-slate-900 shadow-[0_0_20px_rgba(255,204,0,0.4)]' 
                        : 'bg-white/5 text-slate-400 group-hover:text-[#FFCC00] group-hover:bg-[#FFCC00]/10'}
                  `}>
                    <Icon name={item.icon} size={28} />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 group-hover:text-white transition-colors leading-tight ${item.highlight ? 'text-[#FFCC00]' : 'text-slate-200'}`}>
                    {item.title}
                  </h3>
                  
                  <div className={`text-xs font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2 inline-block ${item.highlight ? 'text-white' : 'text-slate-500 group-hover:text-white transition-colors'}`}>
                    {item.detail}
                  </div>
                  
                  <p className={`text-sm leading-relaxed ${item.highlight ? 'text-slate-300' : 'text-slate-500 group-hover:text-slate-300 transition-colors'}`}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LegalFramework;

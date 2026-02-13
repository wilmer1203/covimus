import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const TransparencyCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
         <img 
            src="/assets/images/9.jpg" 
            alt="Fondo Industrial" 
            className="w-full h-full object-cover grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/75 to-slate-900/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-[#FFCC00] mb-6">
            Gestión de Puertas Abiertas
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto mb-12 font-light">
            Creemos que la confianza se construye con hechos. Ponemos a tu disposición los canales directos para verificar nuestra gestión y participar activamente.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/projects" 
              className="w-full sm:w-auto px-8 py-4 bg-[#FFCC00] text-slate-900 font-black tracking-wide rounded-xl shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:bg-yellow-400 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="Briefcase" size={20} />
              Ver Proyectos Ejecutados
            </Link>
            
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="MessageSquare" size={20} />
              Buzón de Atención
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 text-white/60 text-sm font-medium">
             <span className="flex items-center gap-2">
               <Icon name="CheckCircle" size={16} className="text-[#FFCC00]" />
               Auditorías Anuales
             </span>
             <span className="flex items-center gap-2">
               <Icon name="CheckCircle" size={16} className="text-[#FFCC00]" />
               Rendición de Cuentas Pública
             </span>
             <span className="flex items-center gap-2">
               <Icon name="CheckCircle" size={16} className="text-[#FFCC00]" />
               Atención al Ciudadano
             </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default TransparencyCTA;

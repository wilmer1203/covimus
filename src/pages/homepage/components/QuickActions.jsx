import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickActions = () => {
    const cards = [
    {
      id: 1,
      title: "Transparencia Total",
      description: "Acceso completo a presupuestos, licitaciones y avances de proyectos en tiempo real",
      icon: "Eye",
      link: "/projects",
      gradient: "from-slate-800 to-slate-900",
      accent: "text-[#FFCC00]",
      features: ["Presupuestos Públicos", "Seguimiento en Vivo", "Reportes Mensuales"]
    },
    {
      id: 2,
      title: "Atención Ciudadana",
      description: "Sistema integrado de solicitudes, quejas y sugerencias con respuesta garantizada",
      icon: "MessageSquare",
      link: "/contact",
      gradient: "from-slate-800 to-slate-900",
      accent: "text-[#FFCC00]",
      features: ["Respuesta 48h", "Seguimiento Digital", "Múltiples Canales"]
    },
    {
      id: 3,
      title: "Nuestra Historia",
      description: "Más de 20 años transformando Anzoátegui desde el Decreto N° 93 de 2004",
      icon: "BookOpen",
      link: "/autoridades", // Changed to valid route likely containing history
      gradient: "from-slate-800 to-slate-900",
      accent: "text-[#FFCC00]",
      features: ["Decreto N° 93", "Logros 2004-2026", "Equipo Directivo"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
         <img 
            src="/assets/images/9.jpg" 
            alt="Fondo Industrial" 
            className="w-full h-full object-cover grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/75 to-slate-900/70" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[#C00000] mb-6">
            Tu Infraestructura, Tu Voz
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Tres pilares fundamentales de nuestro compromiso con los ciudadanos de Anzoátegui
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards?.map((card, index) => (
            <motion.div
              key={card?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link to={card?.link}>
                <div className="relative h-full bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-200 overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(0,0,0,0.08)] hover:border-[#FFCC00]/50 group-hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-[#FFCC00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-slate-900 flex items-center justify-center mb-6 shadow-lg text-[#FFCC00] group-hover:bg-[#FFCC00] group-hover:text-slate-900 transition-colors duration-300`}
                    >
                      <Icon name={card?.icon} size={28} />
                    </motion.div>

                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {card?.title}
                    </h3>

                    <p className="text-sm lg:text-base text-[#4C4C4C] mb-6 leading-relaxed">
                      {card?.description}
                    </p>

                    <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                      {card?.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-[#FFCC00]`}></div>
                          <span className="text-sm text-[#4C4C4C] font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2 text-slate-900 font-bold uppercase tracking-wider text-xs group-hover:translate-x-2 transition-transform duration-300 group-hover:text-[#FFCC00]">
                      <span className="text-sm">Explorar</span>
                      <Icon name="ArrowRight" size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
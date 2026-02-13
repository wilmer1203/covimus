import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "",
      description: "",
      image: "/assets/images/Impacto Real_1.jpg",
      status: "Completado",
      progress: 100,
      tags: ["Hidráulica", "Social"]
    },
    {
      id: 2,
      title: "",
      description: "",
      image: "/assets/images/Impacto Real_2.jpg",
      status: "Completado",
      progress: 100,
      tags: ["Hidráulica", "Social"]
    },
    {
      id: 3,
      title: "",
      description: "",
      image: "/assets/images/Impacto Real_3.jpg",
      status: "Completado",
      progress: 100,
      tags: ["Hidráulica", "Social"]
    }
  ];

  const kpis = [
    { icon: "Road", value: "1,500+", label: "KM Vías Rehabilitadas" },
    { icon: "Truck", value: "120K+", label: "TNS Asfalto Producido" },
    { icon: "Users", value: "250K+", label: "Ciudadanos Beneficiados" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [projects.length]);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-[#1c3149] to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <Icon name="Star" size={20} color="var(--color-accent)" />
              <span className="text-sm font-bold text-accent uppercase tracking-widest">Impacto Real</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-[1.1]">
              Compromiso en Acción: <br />
              <span className="text-accent tracking-tight">Obras que Transforman</span>
            </h2>

            <p className="text-lg mb-10 leading-relaxed max-w-xl opacity-90">
              Nuestra labor diaria se refleja en la recuperación de la vialidad, el fortalecimiento de los servicios públicos y el mejoramiento constante de la infraestructura urbana del Municipio Sotillo.
            </p>

            {/* KPIs Grid */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {kpis.map((kpi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="space-y-2"
                >
                  <p className="text-2xl sm:text-3xl font-black text-white">{kpi.value}</p>
                  <p className="text-xs sm:text-sm text-white/60 font-medium uppercase tracking-wider">{kpi.label}</p>
                </motion.div>
              ))}
            </div>

            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-xl font-bold bg-accent text-primary shadow-xl hover:shadow-accent/40 transition-all duration-300 flex items-center space-x-3"
              >
                <span>Explorar Portafolio</span>
                <Icon name="ArrowRight" size={20} />
              </motion.button>
            </Link>
          </motion.div>

          {/* Carousel Column */}
          <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.05, x: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              >
                <Image
                  src={projects[currentSlide].image}
                  alt={projects[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Slide Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[currentSlide].tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{projects[currentSlide].title}</h3>
                  <p className="text-sm sm:text-base text-slate-200 line-clamp-2 mb-6 opacity-90">
                    {projects[currentSlide].description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-accent uppercase tracking-widest">{projects[currentSlide].status}</span>
                      <span className="text-xl font-black text-white">{projects[currentSlide].progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${projects[currentSlide].progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center space-x-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-12 bg-accent' : 'w-4 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ir al proyecto ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

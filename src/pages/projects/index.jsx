import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import ProjectDetailsModal from './components/ProjectDetailsModal';
import { projects } from '../../data/projectsData';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dynamic Categories from Data
  const categories = useMemo(() => {
    const uniqueMunicipalities = [...new Set(projects.map(p => p.municipality))];
    const dynamicCats = uniqueMunicipalities.map(m => ({
        id: m,
        name: m,
        icon: 'MapPin',
        count: projects.filter(p => p.municipality === m).length
    }));
    
    return [
        { id: 'all', name: 'Todos los Sectores', icon: 'LayoutGrid', count: projects.length },
        ...dynamicCats.sort((a, b) => a.name.localeCompare(b.name))
    ];
  }, []);

  const allProjects = useMemo(() => {
     return projects;
  }, []);

  // Filter and Sort Logic
  const filteredProjects = useMemo(() => {
    let filtered = allProjects;

    // 1. Filter by Category
    if (activeCategory !== 'all') {
      filtered = filtered?.filter((project) => project?.municipality === activeCategory);
    }

    // 2. Filter by Search
    if (searchTerm) {
      const searchLower = searchTerm?.toLowerCase();
      filtered = filtered?.filter((project) =>
      project?.name?.toLowerCase()?.includes(searchLower) ||
      project?.municipality?.toLowerCase()?.includes(searchLower) ||
      project?.description?.toLowerCase()?.includes(searchLower)
      );
    }

    // 3. Sort by Date (Newest First)
    // Helper to parse DD/MM/YYYY
    const parseDate = (dateStr) => {
        if (!dateStr) return new Date(0);
        const [day, month, year] = dateStr.split('/');
        return new Date(`${year}-${month}-${day}`);
    };

    return filtered.sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate));

  }, [activeCategory, searchTerm, allProjects]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Proyectos | Alcaldía de Sotillo</title>
        <meta name="description" content="Obras y proyectos en ejecución para la transformación del Municipio Sotillo. Consulta el avance de nuestra gestión." />
        <meta name="keywords" content="Proyectos, Obras, Asfaltado, Construcción, Sotillo, Puerto La Cruz, Avance de Obras" />
        <meta property="og:title" content="Proyectos y Obras - COVIMUS" />
        <meta property="og:description" content="Explora el portafolio de obras y proyectos de infraestructura que están transformando Puerto La Cruz." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-950 font-sans selection:bg-accent/30">
        <Header />

        <main className="relative z-10">
          {/* Hero Section with Blueprint/Industrial Theme */}
          <section className="relative pt-32 pb-32 md:pt-48 md:pb-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
               {/* Background Video with Industrial/Executive Treatment */}
               <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover grayscale opacity-55"
                  poster="/assets/images/8.jpg"
               >
                  <source src="/assets/valores.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0" />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-3 bg-slate-900/80 border border-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 shadow-xl">
                  <div className="flex h-3 w-3 relative">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFCC00] opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFCC00]"></span>
                  </div>
                  <span className="text-sm font-black text-white tracking-[0.2em] uppercase">Plan de Obras 2026</span>
                </div>
                
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                  INFRAESTRUCTURA <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] via-[#F0F0F0] to-[#FFCC00] drop-shadow-[0_0_20px_rgba(255,204,0,0.3)]">
                    ESTRATÉGICA
                  </span>
                </h1>
              </motion.div>
            </div>
          </section>

          {/* Search and Filters */}
          <section className="py-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 max-w-5xl mx-auto">
                
                {/* Search Input */}
                <div className="relative w-full md:w-3/5 group">
                  <div className="absolute inset-0 bg-[#FFCC00]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <input
                    type="text"
                    placeholder="Buscar por nombre, sector o código de obra..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="relative w-full bg-slate-900/80 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFCC00]/50 focus:bg-slate-900/90 transition-all shadow-2xl backdrop-blur-xl text-lg"
                  />
                  <Icon name="Search" className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#FFCC00] transition-colors" size={24} />
                </div>
                
                {/* Category Select */}
                <div className="relative w-full md:w-2/5">
                   <div className="relative group">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <select 
                        value={activeCategory}
                        onChange={(e) => setActiveCategory(e.target.value)}
                        className="relative w-full bg-slate-900/80 border border-white/10 rounded-2xl py-5 pl-14 pr-12 text-white appearance-none focus:outline-none focus:border-blue-400/50 cursor-pointer shadow-2xl backdrop-blur-xl text-lg font-medium"
                      >
                        {categories.map(category => (
                            <option key={category.id} value={category.id} className="bg-slate-950 text-slate-200 py-2">
                                {category.name}
                            </option>
                        ))}
                      </select>
                      <Icon name="MapPin" className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400 group-hover:text-blue-300 pointer-events-none" size={24} />
                      <Icon name="ChevronDown" className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={20} />
                   </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + searchTerm}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                    {filteredProjects?.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onViewDetails={handleViewDetails} 
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-slate-900/50 rounded-[3rem] border border-white/5">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                                <Icon name="Search" size={40} className="text-slate-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Sin Resultados</h3>
                            <p className="text-slate-500">Intenta ajustar los filtros de búsqueda.</p>
                        </div>
                    )}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

        </main>

        <Footer />
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </>
  );
};

export default Projects;
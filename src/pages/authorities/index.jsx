import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import AuthorityModal from './components/AuthorityModal';
import GovernancePillars from './components/GovernancePillars'; // Now used!
import LegalFramework from './components/LegalFramework';
import TransparencyCTA from './components/TransparencyCTA';
import HighCommandSection from './components/HighCommandSection';
import ManagementCarousel from './components/ManagementCarousel';
import FunctionalOrganogram from './components/FunctionalOrganogram';
import Aurora from '../../components/ui/Aurora';
import { leadershipTeam } from '../../data/authoritiesData';

const Authorities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedAuthority, setSelectedAuthority] = useState(null);

  return (
      <div className="min-h-screen bg-background font-sans">
         <Helmet>
            <title>Autoridades - COVIMUS | Gobierno Corporativo</title>
            <meta name="description" content="Conoce a nuestras autoridades, lideradas por el Alcalde Dr. Jesús Marcano Tábata y el equipo directivo de COVIMUS." />
            <meta name="keywords" content="Autoridades, Alcalde Sotillo, Jesús Marcano Tábata, Directiva COVIMUS, Gobierno Corporativo" />
            <meta property="og:title" content="Autoridades - COVIMUS | Liderazgo y Estrategia" />
            <meta property="og:description" content="Conoce al equipo de liderazgo que impulsa la transformación de la infraestructura en Puerto La Cruz." />
            <meta property="og:type" content="website" />
         </Helmet>

         <Header />

         <AuthorityModal 
           isOpen={!!selectedAuthority} 
           onClose={() => setSelectedAuthority(null)} 
           authority={selectedAuthority} 
         />

         {/*  */}
         <section className="relative pt-40 overflow-hidden min-h-[60vh] flex items-center justify-center">
             <div className="absolute inset-0 z-0">
                <img 
                   src="/assets/images/av_paseo.png" 
                   alt="Alcaldía de Sotillo" 
                   className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950 z-10" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-950 z-20" />
                <div className="absolute inset-0 z-20">
                    <Aurora colorStops={["#FFCC00", "#60a5fa", "#CC0000"]} speed={0.5} amplitude={1.2} blend = {0.3} />
                </div>
             </div>

            <div className="max-w-7xl mx-auto px-4 relative z-30 text-center w-full">
               <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                     <Icon name="Building2" size={16} className="text-blue-400" />
                     <span className="text-xs font-bold text-blue-100 tracking-[0.2em] uppercase">Gobierno Corporativo</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-[0.9] tracking-tight">
                     LIDERAZGO & <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-[#CC0000]">ESTRATEGIA</span>
                  </h1>
{/*                   
                  <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed border-t border-white/10 pt-8 mt-8">
                     La estructura de mando que garantiza la eficiencia en la gestión pública de Sotillo.
                  </p> */}
               </motion.div>
            </div>
         </section>

         {/* High Command Section */}
         <HighCommandSection />

         {/* Functional Organogram
         <FunctionalOrganogram setSelectedAuthority={setSelectedAuthority} /> */}

         {/* Management Teams Carousel */}
         <section className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
             {/* Dynamic Background Pattern */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
             <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]" />
             <div className="absolute right-0 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-[#FFCC00] opacity-10 blur-[100px]" />
             
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                   <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Nuestro Equipo</h2>
                   <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                      Conoce a los profesionales detrás de cada área estratégica.
                   </p>
                </div>
                <ManagementCarousel leaders={leadershipTeam} />
             </div>
         </section>

         <LegalFramework />
         <TransparencyCTA />
         <Footer />
      </div>
  );
};

export default Authorities;

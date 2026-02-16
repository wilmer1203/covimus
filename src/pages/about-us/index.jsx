import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import GovernancePillars from '../authorities/components/GovernancePillars';
import HighCommandSection from '../authorities/components/HighCommandSection';
import ManagementCarousel from '../authorities/components/ManagementCarousel';
import { leadershipTeam } from '../../data/authoritiesData';

// New Components
import AboutHero from './components/AboutHero';
import MissionVision from './components/MissionVision';
import ObjectivesSection from './components/ObjectivesSection';
import HistorySection from './components/HistorySection';
import HumanCapital from './components/HumanCapital';
import ValuesSection from './components/ValuesSection';
import ContactCTA from './components/ContactCTA';
import SEO from '../../components/SEO';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-background">

        <SEO
          title="Nosotros"
          description="Conoce la historia de COVIMUS desde el Decreto N° 93, nuestros valores institucionales y objetivos estratégicos para el desarrollo de Sotillo."
          keywords="COVIMUS, Historia, Misión, Visión, Valores, Sotillo, Puerto La Cruz, Gestión Pública"
          ogTitle="Nosotros - COVIMUS | Historia y Valores"
          ogDescription="Descubre el compromiso de COVIMUS con el desarrollo de la infraestructura y vialidad en el Municipio Sotillo."
        />

        <Header />

        <main>
          <AboutHero />
          <MissionVision />

          {/* High Command Section */}
          <HighCommandSection />

          {/* Management Teams Carousel */}
          <section className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
            {/* Dynamic Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#FFCC00]/10 blur-[100px]" />
            <div className="absolute right-0 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-red-900/10 blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#C00000] via-[#ffcccc] to-[#C00000] drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                  Nuestro Equipo
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                  Conoce a los profesionales detrás de cada área estratégica.
                </p>
              </div>
              <ManagementCarousel leaders={leadershipTeam} />
            </div>
          </section>

          {/* 4. Governance Pillars */}
          <div className="bg-slate-950">
            <GovernancePillars />
          </div>

          <ObjectivesSection />
          <HistorySection />
          <HumanCapital />
          <ValuesSection />
          <ContactCTA />
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUs;

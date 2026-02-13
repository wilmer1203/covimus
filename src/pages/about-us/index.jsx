import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import GovernancePillars from '../authorities/components/GovernancePillars';

// New Components
import AboutHero from './components/AboutHero';
import MissionVision from './components/MissionVision';
import ObjectivesSection from './components/ObjectivesSection';
import HistorySection from './components/HistorySection';
import HumanCapital from './components/HumanCapital';
import ValuesSection from './components/ValuesSection';
import ContactCTA from './components/ContactCTA';

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

        <Helmet>
          <title>Nosotros - COVIMUS | Historia, Valores y Misión</title>
          <meta name="description" content="Conoce la historia de COVIMUS desde el Decreto N° 93, nuestros valores institucionales y objetivos estratégicos para el desarrollo de Sotillo." />
          <meta name="keywords" content="COVIMUS, Historia, Misión, Visión, Valores, Sotillo, Puerto La Cruz, Gestión Pública" />
          <meta property="og:title" content="Nosotros - COVIMUS | Historia y Valores" />
          <meta property="og:description" content="Descubre el compromiso de COVIMUS con el desarrollo de la infraestructura y vialidad en el Municipio Sotillo." />
          <meta property="og:type" content="website" />
        </Helmet>

        <Header />

        <main>
          <AboutHero />
          <MissionVision />
          <ObjectivesSection />
          <HistorySection />
          <HumanCapital />
          
          {/* 4. Governance Pillars */}
          <div className="bg-slate-950">
             <GovernancePillars />
          </div>

          <ValuesSection />
          <ContactCTA />
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUs;

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import AsphaltPlantSection from './components/AsphaltPlantSection';
import BentoGrid from './components/BentoGrid';
import FeaturedProjects from './components/FeaturedProjects';
import SocialProof from './components/SocialProof';
import InstitutionalAlliances from './components/InstitutionalAlliances';
import QuickActions from './components/QuickActions';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-background"
      >
        <Helmet>
          <title>COVIMUS - Vialidad e Infraestructura del Municipio Sotillo</title>
          <meta
            name="description"
            content="COVIMUS EPS - Construyendo el futuro de Puerto La Cruz. Expertos en vialidad, asfalto y obras civiles en el Municipio Sotillo para el desarrollo de Anzoátegui."
          />
          <meta name="keywords" content="COVIMUS, Puerto La Cruz, Sotillo, asfalto, vialidad, infraestructura, EPS, gobierno municipal" />
          <meta property="og:title" content="COVIMUS - Construyendo el Futuro de Sotillo" />
          <meta property="og:description" content="Corporación Municipal de Vialidad e Infraestructura - Transformando comunidades en Puerto La Cruz con transparencia y compromiso." />
          <meta property="og:type" content="website" />
        </Helmet>

        <Header />

        <main className="pt-16 lg:pt-20">
          <HeroSection />
          <InstitutionalAlliances />
          <AsphaltPlantSection />
          <BentoGrid />
          <FeaturedProjects />
          <SocialProof />
          <QuickActions />
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Homepage;
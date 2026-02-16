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
import SEO from '../../components/SEO';

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
        <SEO
          title="Vialidad e Infraestructura del Municipio Sotillo"
          description="COVIMUS EPS - Construyendo el futuro de Puerto La Cruz. Expertos en vialidad, asfalto y obras civiles en el Municipio Sotillo para el desarrollo de Anzoátegui."
          keywords="COVIMUS, Puerto La Cruz, Sotillo, asfalto, vialidad, infraestructura, EPS, gobierno municipal"
          ogTitle="COVIMUS - Construyendo el Futuro de Sotillo"
          ogDescription="Corporación Municipal de Vialidad e Infraestructura - Transformando comunidades en Puerto La Cruz con transparencia y compromiso."
        />

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
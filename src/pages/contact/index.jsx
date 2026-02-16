import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';

// Components
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactSidebar from './components/ContactSidebar';
import SEO from '../../components/SEO';


const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = React.useState('reporte');

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
          title="Atención al Ciudadano"
          description="Portal de atención ciudadana de COVIMUS. Reporta incidencias, solicita servicios o envía sugerencias para mejorar tu comunidad en el Municipio Sotillo."
          keywords="Contacto COVIMUS, Reportes, Denuncias, Obras Públicas, Puerto La Cruz, Atención Ciudadana"
          ogTitle="Atención al Ciudadano - COVIMUS"
          ogDescription="¿Tienes un reporte sobre vialidad o infraestructura? Contáctanos directamente a través de nuestro portal oficial."
        />

        <Header />

        <main className="bg-slate-950 min-h-screen">
          <ContactHero />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Form Side */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                {/* Intro Text */}
                <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 shadow-lg relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFCC00]" />
                  <h2 className="text-3xl font-black text-white mb-2">Detalles del Reporte</h2>
                  <p className="text-slate-400 font-light text-lg">
                    Complete el formulario con precisión. Su reporte activa nuestros equipos de respuesta inmediata.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Right Column: Map & Info (5 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <ContactSidebar />
              </div>

            </div>

          </div>
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactPage;

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
        <Helmet>
          <title>Atención al Ciudadano - COVIMUS | Portal de Reportes</title>
          <meta name="description" content="Portal de atención ciudadana de COVIMUS. Reporta incidencias, solicita servicios o envía sugerencias para mejorar tu comunidad en el Municipio Sotillo." />
          <meta name="keywords" content="Contacto COVIMUS, Reportes, Denuncias, Obras Públicas, Puerto La Cruz, Atención Ciudadana" />
          <meta property="og:title" content="Atención al Ciudadano - COVIMUS" />
          <meta property="og:description" content="¿Tienes un reporte sobre vialidad o infraestructura? Contáctanos directamente a través de nuestro portal oficial." />
          <meta property="og:type" content="website" />
        </Helmet>

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

                {/* Contractor Call to Action
                <div className="p-1 rounded-3xl bg-gradient-to-r from-[#FFCC00] via-yellow-600 to-[#243F60]">
                  <div className="bg-slate-950 rounded-[22px] p-8 md:p-10 relative overflow-hidden group">

                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFCC00]/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 group-hover:bg-[#FFCC00]/20 transition-all duration-700" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="flex items-center gap-6">
                        <div className="size-20 rounded-2xl bg-slate-900 flex items-center justify-center border border-white/10 text-[#FFCC00] shadow-xl shadow-[#FFCC00]/5 group-hover:scale-110 transition-transform duration-500">
                          <Icon name="Briefcase" size={40} />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                            ¿Eres <span className="text-[#FFCC00]">Contratista?</span>
                          </h3>
                          <p className="text-slate-400 max-w-md font-medium">
                            Accede al Registro Nacional de Contratistas y participa en nuestras licitaciones públicas.
                          </p>
                        </div>
                      </div>

                      <button className="whitespace-nowrap px-8 py-4 bg-[#FFCC00] hover:bg-yellow-400 text-slate-900 font-black text-lg rounded-xl transition-all shadow-lg shadow-[#FFCC00]/20 relative z-10 hover:scale-105 active:scale-95 flex items-center gap-2">
                        Portal de Proveedores
                        <Icon name="ArrowRight" size={20} />
                      </button>
                    </div>
                  </div>
                </div> */}

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

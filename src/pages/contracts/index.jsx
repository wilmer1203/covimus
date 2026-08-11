import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import ContractCard from './components/ContractCard';
import ContractDetailsModal from './components/ContractDetailsModal';
import { contracts, totalContractTons } from '../../data/contractsData';
import SEO from '../../components/SEO';
import { breadcrumbList } from '../../utils/schema';

const Contracts = () => {
  const [activeClient, setActiveClient] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContract, setSelectedContract] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dynamic client filters, derived from the data
  const clients = useMemo(() => {
    const uniqueClients = [...new Set(contracts.map(c => c.client).filter(Boolean))];
    const dynamicClients = uniqueClients.map(c => ({
      id: c,
      name: c,
      count: contracts.filter(contract => contract.client === c).length
    }));

    return [
      { id: 'all', name: 'Todos los Clientes', count: contracts.length },
      ...dynamicClients.sort((a, b) => a.name.localeCompare(b.name))
    ];
  }, []);

  const showFilters = contracts.length > 3;

  const filteredContracts = useMemo(() => {
    let filtered = contracts;

    if (activeClient !== 'all') {
      filtered = filtered?.filter((contract) => contract?.client === activeClient);
    }

    if (searchTerm) {
      const searchLower = searchTerm?.toLowerCase();
      filtered = filtered?.filter((contract) =>
        contract?.name?.toLowerCase()?.includes(searchLower) ||
        contract?.contractNumber?.toLowerCase()?.includes(searchLower) ||
        contract?.client?.toLowerCase()?.includes(searchLower) ||
        contract?.facility?.toLowerCase()?.includes(searchLower)
      );
    }

    // Más recientes primero (por año, luego por id de alta)
    return [...filtered].sort((a, b) => {
      const yearDiff = Number(b?.year || 0) - Number(a?.year || 0);
      if (yearDiff !== 0) return yearDiff;
      return (b?.id || 0) - (a?.id || 0);
    });
  }, [activeClient, searchTerm]);

  const handleViewDetails = (contract) => {
    setSelectedContract(contract);
    setIsModalOpen(true);
  };

  const totalClients = useMemo(
    () => new Set(contracts.map(c => c.client).filter(Boolean)).size,
    []
  );

  const contractsJsonLd = useMemo(() => [
    breadcrumbList([
      { name: 'Inicio', url: 'https://covimus.org/' },
      { name: 'Contrataciones', url: 'https://covimus.org/contrataciones' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Contrataciones - COVIMUS',
      url: 'https://covimus.org/contrataciones',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: contracts.map((contract, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: contract?.name,
          url: `https://covimus.org/contrataciones#contract-${contract?.id}`,
          image: contract?.image ? `https://covimus.org${contract.image}` : undefined,
        })),
      },
    },
  ], []);

  return (
    <>
      <SEO
        title="Contrataciones"
        description="Obras ejecutadas por COVIMUS bajo contrato para entes públicos y privados: vialidad, asfaltado y drenajes en instalaciones industriales del Municipio Sotillo."
        keywords="Contrataciones, Asfaltado Industrial, PDVSA, Vialidad, Planta de Asfalto, Puerto La Cruz, Sotillo"
        ogTitle="Contrataciones - COVIMUS"
        ogDescription="Trabajos de vialidad e infraestructura que COVIMUS ejecuta bajo contrato para entes públicos y privados."
        canonical="https://covimus.org/contrataciones"
        jsonLd={contractsJsonLd}
      />

      <div className="min-h-screen bg-slate-950 font-sans selection:bg-accent/30">
        <Header />

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale opacity-55"
                poster="/assets/images/planta.jpeg"
              >
                <source src="/assets/asfalto.mp4" type="video/mp4" />
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
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#243F60] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#243F60]"></span>
                  </div>
                  <span className="text-sm font-black text-white tracking-[0.2em] uppercase">Servicios Contratados</span>
                </div>

                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                  CONTRATACIONES
                </h1>

                <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-light">
                  Obras ejecutadas bajo contrato para entes públicos y privados, fuera del plan de obras municipal.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Indicadores */}
          <section className="py-16 border-y border-white/5 bg-slate-900/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div>
                  <span className="block text-4xl md:text-5xl font-black text-white font-mono">{contracts.length}</span>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500 mt-2 block">Contrato{contracts.length !== 1 ? 's' : ''} Ejecutado{contracts.length !== 1 ? 's' : ''}</span>
                </div>
                <div>
                  <span className="block text-4xl md:text-5xl font-black text-[#FFCC00] font-mono">{totalContractTons.toLocaleString('en-US')}</span>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500 mt-2 block">Toneladas Colocadas</span>
                </div>
                <div>
                  <span className="block text-4xl md:text-5xl font-black text-white font-mono">{totalClients}</span>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500 mt-2 block">Cliente{totalClients !== 1 ? 's' : ''} Atendido{totalClients !== 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Search and Filters */}
          <section className="py-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {showFilters && (
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 max-w-5xl mx-auto">
                  <div className="relative w-full md:w-3/5 group">
                    <div className="absolute inset-0 bg-[#FFCC00]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <input
                      type="text"
                      placeholder="Buscar por contrato, cliente o instalación..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="relative w-full bg-slate-900/80 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#FFCC00]/50 focus:bg-slate-900/90 transition-all shadow-2xl backdrop-blur-xl text-lg"
                    />
                    <Icon name="Search" className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#FFCC00] transition-colors" size={24} />
                  </div>

                  <div className="relative w-full md:w-2/5">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <select
                        value={activeClient}
                        onChange={(e) => setActiveClient(e.target.value)}
                        className="relative w-full bg-slate-900/80 border border-white/10 rounded-2xl py-5 pl-14 pr-12 text-white appearance-none focus:outline-none focus:border-blue-400/50 cursor-pointer shadow-2xl backdrop-blur-xl text-lg font-medium"
                      >
                        {clients.map(client => (
                          <option key={client.id} value={client.id} className="bg-slate-950 text-slate-200 py-2">
                            {client.name}
                          </option>
                        ))}
                      </select>
                      <Icon name="Factory" className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-400 group-hover:text-blue-300 pointer-events-none" size={24} />
                      <Icon name="ChevronDown" className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={20} />
                    </div>
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeClient + searchTerm}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {filteredContracts?.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
                      {filteredContracts.map((contract) => (
                        <ContractCard
                          key={contract.id}
                          contract={contract}
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

          {/* CTA */}
          <section className="py-24 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                ¿Necesita contratar nuestros servicios?
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light">
                Contamos con planta de asfalto propia y capacidad operativa para ejecutar obras de vialidad e infraestructura bajo contrato.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#FFCC00] hover:bg-yellow-400 text-slate-900 font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(255,204,0,0.4)] transition-all"
              >
                Contactar a COVIMUS
                <Icon name="ArrowRight" size={20} />
              </Link>
            </div>
          </section>

        </main>

        <Footer />
        <ContractDetailsModal
          contract={selectedContract}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
};

export default Contracts;

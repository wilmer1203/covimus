import DynamicBackground from './DynamicBackground';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Grid Background */}
      <DynamicBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-slate-900/80 border border-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 shadow-xl">
            <div className="h-2 w-2 rounded-full bg-[#C00000] animate-pulse" />
            <span className="text-sm font-black text-white tracking-[0.2em] uppercase">Ventanilla Única</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-white tracking-tighter">
            ATENCIÓN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C00000] via-[#F0F0F0] to-[#C00000] drop-shadow-[0_0_30px_rgba(255,204,0,0.1)]">
              CIUDADANA
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-light border-t border-white/5 pt-8">
            Plataforma digital de gestión de incidencias. Conectando a la comunidad con soluciones de ingeniería real.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;

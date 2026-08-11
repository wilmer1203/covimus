import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContractCard = ({ contract, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-[#243F60] text-white border-blue-400/30';
      case 'in-progress':
        return 'bg-[#FFCC00] text-black border-yellow-400/30';
      case 'planned':
        return 'bg-slate-700 text-slate-300 border-white/10';
      default:
        return 'bg-slate-800 text-slate-400 border-white/5';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Ejecutado';
      case 'in-progress': return 'En Ejecución';
      case 'planned': return 'En Planificación';
      default: return 'Desconocido';
    }
  };

  const hasImage = Boolean(contract?.image);

  return (
    <motion.div
      id={`contract-${contract?.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-slate-950 border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#243F60]/60 hover:shadow-[0_0_40px_rgba(36,63,96,0.25)] transition-all duration-500 relative scroll-mt-24"
    >
      {/* Visual Section - Vertical 4:5 */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {hasImage ? (
          <>
            <Image
              src={contract?.image}
              alt={contract?.imageAlt || contract?.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
          </>
        ) : (
          // Sin fotos aún: panel tipo "plano técnico" en vez de una imagen rota.
          <div className="absolute inset-0 bg-slate-900">
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-slate-700 font-mono font-black text-3xl tracking-widest select-none">
                N° {contract?.contractNumber}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          </div>
        )}

        <div className="absolute top-4 right-4">
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border shadow-lg ${getStatusColor(contract?.status)}`}>
            {getStatusText(contract?.status)}
          </span>
        </div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-950/80 text-[#FFCC00] border border-[#FFCC00]/30 backdrop-blur-md font-mono">
            Contrato N° {contract?.contractNumber}
          </span>
        </div>

        {/* Title & Location - Lifted Up */}
        <div className="absolute bottom-6 left-5 right-5">
          <h3 className="text-xl font-black text-white mb-1 leading-tight group-hover:text-[#FFCC00] transition-colors line-clamp-1 drop-shadow-md">
            {contract?.name}
          </h3>
          <div className="flex items-center space-x-2 text-slate-300 text-xs font-bold uppercase tracking-wide mb-3 drop-shadow-sm">
            <Icon name="Factory" size={12} className="text-[#FFCC00]" />
            <span>{[contract?.client, contract?.facilityShort].filter(Boolean).join(' · ')}</span>
          </div>

          <p className="text-slate-200 text-xs leading-relaxed line-clamp-2 font-light drop-shadow-sm opacity-90">
            {contract?.description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 pt-0 space-y-4">
        <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/5 border-b border-white/5">
          <div>
            <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider block mb-1">Toneladas</span>
            <span className="text-base font-bold text-white font-mono">{contract?.tonsLabel}</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider block mb-1">Frente</span>
            <span className="text-base font-bold text-white font-mono">{contract?.front || '—'}</span>
          </div>
        </div>

        <Button
          variant="default"
          size="sm"
          onClick={() => onViewDetails(contract)}
          className="w-full bg-[#FFCC00] hover:bg-yellow-400 text-slate-900 border-none transition-all h-10 font-bold uppercase tracking-wider shadow-lg hover:shadow-[0_0_20px_rgba(255,204,0,0.4)] rounded-xl mt-4"
        >
          Ver Ficha del Contrato
        </Button>
      </div>
    </motion.div>
  );
};

export default ContractCard;

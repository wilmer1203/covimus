import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ContactSidebar = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Map Card */}
      <div className="bg-slate-950 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl flex flex-col h-full group hover:border-[#FFCC00]/50 transition-colors duration-500">
        
        {/* Header */}
        <div className="p-8 border-b border-white/5 bg-slate-900/50">
            <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl bg-[#FFCC00]/10 flex items-center justify-center text-[#FFCC00] border border-[#FFCC00]/20 shadow-lg shadow-[#FFCC00]/5">
                   <Icon name="Building" size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-black text-white uppercase tracking-wide">
                        Sede Principal
                    </h3>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
                        Coordinación General
                    </p>
                </div>
            </div>
        </div>

        {/* Map Image */}
        <div className="relative h-72 w-full bg-slate-900 overflow-hidden">
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7iAOY55IjpcZHT9WR5ZQ0zv8-NDs-6zPPd6Z1sawiX5NOmDEXl9DSYIf5ZCkW6B0Ss2Kb5GVRUIqHXcsjCPSZehjwdIlORxhaqP4JBvlsLAPyyzVi38dO7W15dckq3-G13MoRaEdfHIdClr0L_ZMUH5_g_5BWc2GYkBvqfKzVv0khNaUDYzQiqEFscmvTxhWU43wNWozdk_Kc6I6UGjxS-tbygIdMAP8LdEn5AWcifh_Yt6ZpEJ_pdj25W3uI-RCwqhlvnZL29NkQ" 
                alt="Mapa de ubicación" 
                className="w-full h-full object-cover opacity-60 grayscale-[50%] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
                <button 
                  onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=10.212415,-64.631843", "_blank")}
                  className="w-full py-4 bg-slate-950/80 hover:bg-[#FFCC00]/90 hover:text-black backdrop-blur-md rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/10 transition-all shadow-lg"
                >
                    <Icon name="MapPin" size={18} className="text-[#FFCC00] group-hover:text-black" />
                    Abrir en Google Maps
                </button>
            </div>
        </div>

        {/* Contact Details */}
        <div className="p-8 flex flex-col gap-8 bg-slate-950">
            <div className="flex items-start gap-4 group/item">
                <div className="mt-1 text-slate-500 group-hover/item:text-[#FFCC00] transition-colors">
                    <Icon name="Map" size={24} />
                </div>
                <div>
                    <p className="text-xs font-black text-[#FFCC00] uppercase tracking-widest mb-1">Dirección</p>
                    <p className="text-slate-300 leading-relaxed text-sm font-light">C. Venezuela, Puerto La Cruz 6023,<br/>Anzoátegui.</p>
                </div>
            </div>
            
             <div className="flex items-start gap-4 group/item">
                <div className="mt-1 text-slate-500 group-hover/item:text-[#FFCC00] transition-colors">
                    <Icon name="Clock" size={24} />
                </div>
                <div>
                    <p className="text-xs font-black text-[#FFCC00] uppercase tracking-widest mb-1">Horario de Atención</p>
                    <p className="text-slate-300 text-sm">Lunes a Viernes<br/><span className="text-white font-bold">8:00 AM - 4:00 PM</span></p>
                </div>
            </div>

             <div className="flex items-start gap-4 group/item">
                <div className="mt-1 text-slate-500 group-hover/item:text-[#FFCC00] transition-colors">
                    <Icon name="Phone" size={24} />
                </div>
                <div>
                    <p className="text-xs font-black text-[#FFCC00] uppercase tracking-widest mb-1">Contacto Directo</p>
                    <div className="space-y-2">
                        <p className="text-slate-300 text-sm flex items-center justify-between gap-4">
                            Master <span className="text-white font-mono bg-white/5 px-2 rounded ml-auto">(0281) 2687758</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 bg-slate-900/50 mt-auto border-t border-white/5">
            <button className="w-full text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:text-[#FFCC00] transition-colors py-2">
                <Icon name="Download" size={16} />
                Descargar Directorio Institucional
            </button>
        </div>

      </div>
    </div>
  );
};

export default ContactSidebar;

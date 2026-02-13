import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MediaGallerySection = () => {
    const mediaItems = [
        {
            type: 'video',
            src: '/assets/video-placeholder.mp4', // Placeholder, using image thumb for now if no video
            thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
            title: 'Avance Pavimentación Sector 3',
            duration: '2:15'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1590644365607-1c5a38d07d99?q=80&w=2070&auto=format&fit=crop',
            title: 'Rehabilitación Alumbrado Público',
            location: 'Av. Municipal'
        },
        {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop',
            title: 'Construcción Cancha de Usos Múltiples',
            location: 'Barrio Sucre'
        },
         {
            type: 'video',
            thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
            title: 'Inspección de Obras Hidráulicas',
            duration: '1:45'
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden border-t border-white/5">
             <div className="absolute inset-0 bg-slate-950">
                 <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5" />
             </div>

             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 text-[#FFCC00] font-bold uppercase tracking-widest text-xs mb-2">
                             <div className="h-0.5 w-8 bg-[#FFCC00]" />
                             <span>Galería Multimedia</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white">Nuestras Obras en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-yellow-600">Foco</span></h2>
                    </div>
                    <button className="px-6 py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all flex items-center gap-2 group">
                        Ver Galería Completa
                        <Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10"
                        >
                             <Image 
                                src={item.type === 'video' ? item.thumbnail : item.src} 
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                             
                             {/* Play Button Overlay for Videos */}
                             {item.type === 'video' && (
                                 <div className="absolute inset-0 flex items-center justify-center">
                                     <div className="size-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-[#FFCC00] group-hover:text-black transition-all group-hover:scale-110 shadow-xl">
                                         <Icon name="Play" size={24} className="ml-1" />
                                     </div>
                                 </div>
                             )}

                             <div className="absolute bottom-0 inset-x-0 p-6">
                                  {item.type === 'video' ? (
                                      <div className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs font-bold text-white mb-3">
                                          Video • {item.duration}
                                      </div>
                                  ) : (
                                       <div className="inline-block px-3 py-1 rounded-full bg-[#FFCC00]/20 backdrop-blur-sm text-xs font-bold text-[#FFCC00] mb-3 border border-[#FFCC00]/20">
                                          <div className="flex items-center gap-1">
                                              <Icon name="MapPin" size={10} />
                                              {item.location}
                                          </div>
                                      </div>
                                  )}
                                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#FFCC00] transition-colors">{item.title}</h3>
                             </div>
                        </motion.div>
                    ))}
                </div>
             </div>
        </section>
    );
};

export default MediaGallerySection;

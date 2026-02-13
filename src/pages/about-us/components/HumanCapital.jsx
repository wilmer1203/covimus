import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const HumanCapital = () => {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-30" />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-white/10 mb-6 backdrop-blur-md">
                        <Icon name="Users" size={16} color="var(--color-primary)" />
                        <span className="text-xs font-bold text-white tracking-widest uppercase">Capital Humano</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        El Motor de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-yellow-200">COVIMUS</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                        Más de 300 profesionales, técnicos y obreros comprometidos con la transformación de Sotillo.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-auto md:h-[500px]">
                    {/* Item 1 - Large Left */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group min-h-[300px] md:min-h-0"
                    >
                        <video 
                            src="/assets/vision_video.mp4" 
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <p className="text-white font-bold text-lg">Equipo de Asfaltado</p>
                            </div>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group min-h-[150px] md:min-h-0"
                    >
                            <img src="/assets/images/motor_1.jpg" alt="Ingenieros" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden group min-h-[316px] md:min-h-0"
                    >
                            <img src="/assets/images/1.jpg" alt="Maquinaria" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>

                        {/* Item 4 */}
                        <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group min-h-[150px] md:min-h-0"
                    >
                            <img src="/assets/images/Impacto Real_3.jpg" alt="Supervisión" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HumanCapital;

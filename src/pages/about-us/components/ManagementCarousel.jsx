import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ManagementCarousel = ({ leaders }) => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [itemsPerPage, setItemsPerPage] = useState(3);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth < 640) setItemsPerPage(1);
         else if (window.innerWidth < 1024) setItemsPerPage(2);
         else setItemsPerPage(3);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const totalPages = Math.ceil(leaders.length / itemsPerPage);

   const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
   };

   const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
   };

   // Safe subset of leaders for current page
   const visibleLeaders = leaders.slice(
      currentIndex * itemsPerPage,
      (currentIndex * itemsPerPage) + itemsPerPage
   );

   return (
      <div className="relative px-4 sm:px-12">
         {/* Controls */}
         <div className="absolute top-1/2 -left-2 md:-left-8 -translate-y-1/2 z-20">
            <button
               onClick={prevSlide}
               className="p-3 rounded-full bg-slate-800/80 border border-white/10 text-white hover:bg-[#FFCC00] hover:text-slate-900 transition-all shadow-lg backdrop-blur-sm group"
            >
               <Icon name="ChevronLeft" size={24} className="group-hover:scale-110 transition-transform" />
            </button>
         </div>

         <div className="absolute top-1/2 -right-2 md:-right-8 -translate-y-1/2 z-20">
            <button
               onClick={nextSlide}
               className="p-3 rounded-full bg-slate-800/80 border border-white/10 text-white hover:bg-[#FFCC00] hover:text-slate-900 transition-all shadow-lg backdrop-blur-sm group"
            >
               <Icon name="ChevronRight" size={24} className="group-hover:scale-110 transition-transform" />
            </button>
         </div>

         {/* Track */}
         <div className="overflow-visible min-h-[500px]">
            <AnimatePresence mode='wait'>
               <motion.div
                  key={currentIndex}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                     hidden: {},
                     visible: {
                        transition: { staggerChildren: 0.1 }
                     },
                     exit: {}
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
               >
                  {visibleLeaders.map((leader, idx) => (
                     <ManagementCard key={`${currentIndex}-${leader.id}`} leader={leader} />
                  ))}
               </motion.div>
            </AnimatePresence>
         </div>

         {/* Dots */}
         <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }).map((_, i) => (
               <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-12 bg-[#FFCC00]' : 'w-2 bg-slate-700 hover:bg-slate-600'}`}
               />
            ))}
         </div>
      </div>
   );
};

const ManagementCard = ({ leader }) => {
   const cardVariants = {
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 50, damping: 15 } },
      exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
   };

   return (
      <motion.div
         variants={cardVariants}
         className="relative bg-slate-900/40 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/5 hover:border-[#FFCC00]/50 transition-all duration-500 group h-[400px] flex flex-col hover:shadow-[0_0_40px_rgba(255,204,0,0.1)]"
      >
         {/* Top Badge */}
         <div className="absolute top-6 left-6 z-20">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold text-white flex items-center gap-2 shadow-lg group-hover:bg-[#FFCC00] group-hover:text-slate-900 transition-colors duration-300">
               <Icon name="Briefcase" size={12} className="text-[#FFCC00] group-hover:text-slate-900" />
               <span className="uppercase tracking-widest">{leader.id}</span>
            </div>
         </div>

         {/* Content - Center/Bottom */}
         <div className="relative z-20 p-8 pt-16 flex flex-col h-full justify-center">

            <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[#FFCC00] transition-colors leading-tight">
               {leader.name}
            </h3>
            <p className="text-sm text-slate-400 font-bold mb-4 uppercase tracking-wide flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-[#C00000]" />
               {leader.position}
            </p>

            <div className="h-px w-12 bg-white/10 mb-4 group-hover:w-full group-hover:bg-[#FFCC00]/50 transition-all duration-500" />

            <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-4 group-hover:text-white transition-colors font-light">
               {leader.bio}
            </p>
            <div className="flex flex-col gap-2 pt-4 border-t border-white/5">
               {leader.functions?.slice(0, 2).map((func, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                     <Icon name="CheckCircle" size={12} className="text-[#C00000] mt-0.5 shrink-0" />
                     <span>{func}</span>
                  </div>
               ))}
            </div>
         </div>

         {/* Hover Gradient */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#243F60]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.div>
   );
};

export default ManagementCarousel;

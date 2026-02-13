import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ValueCard = ({ value, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group h-full"
    >
      {/* Glow effect background */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none" />
      
      <div className="relative h-full bg-slate-900 border border-white/10 rounded-2xl p-8 flex flex-col items-start overflow-hidden">
        {/* Decorative pattern */}

        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
          className="size-16 rounded-xl flex items-center justify-center mb-8 shadow-xl bg-slate-800 border border-white/10 group-hover:border-[#FFCC00]/50 transition-colors"
        >
          <Icon name={value?.icon} size={32} className="text-[#FFCC00]" />
        </motion.div>

        <h3 className="text-2xl font-black mb-4 text-white group-hover:text-accent transition-colors">
          {value?.title}
        </h3>

        <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
          {value?.description}
        </p>

        {value?.examples && (
          <div className="space-y-3 w-full border-t border-white/5 pt-6">
            {value?.examples?.map((example, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="flex items-start gap-3 group/item"
              >
                <div className="size-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5 group-hover/item:bg-accent transition-colors">
                  <Icon name="Check" size={12} className="text-accent group-hover/item:text-accent-foreground" />
                </div>
                <span className="text-sm text-slate-400 group-hover/item:text-slate-200 transition-colors">
                  {example}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ValueCard;
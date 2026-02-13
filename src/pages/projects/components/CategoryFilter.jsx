import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
      {categories?.map((category, index) => {
        const isActive = activeCategory === category?.id;
        
        // Define specific neon colors per category if needed, otherwise use accent
        const neonColor = isActive ? 'shadow-[0_0_20px_rgba(var(--color-accent),0.5)] border-accent' : 'border-border hover:border-foreground/50';
        const activeBg = isActive ? 'bg-accent/20 text-accent' : 'bg-muted/50 text-muted-foreground hover:text-foreground';

        return (
          <motion.button
            key={category?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category?.id)}
            className={`
              flex items-center space-x-3 px-6 py-3 rounded-full font-bold text-sm md:text-base
              transition-all duration-300 border backdrop-blur-md
              ${neonColor} ${activeBg}
            `}
          >
            <Icon 
              name={category?.icon} 
              size={20} 
              className={isActive ? "text-accent" : "text-muted-foreground group-hover:text-foreground"}
            />
            <span>{category?.name}</span>
            <span className={`
              px-2 py-0.5 rounded-full text-xs font-black
              ${isActive 
                ? 'bg-accent text-accent-foreground shadow-sm' 
                : 'bg-muted text-muted-foreground'
              }
            `}>
              {category?.count}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <Icon name="Search" size={20} color="var(--color-muted-foreground)" />
        </div>
        <Input
          type="search"
          placeholder="Buscar proyectos por nombre, ubicación o categoría..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="pl-12 pr-4"
        />
      </div>
    </motion.div>
  );
};

export default SearchBar;
import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats?.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -4 }}
          className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 group-hover:bg-accent/20 transition-colors`}>
              <Icon name={stat?.icon} size={24} className="text-slate-200 group-hover:text-accent" />
            </div>
            <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-lg border bg-white/5 border-white/10 text-white`}>
              {stat?.badge}
            </span>
          </div>
          <h3 className="text-3xl lg:text-4xl font-black text-white mb-1 tracking-tight">
            {stat?.value}
          </h3>
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide">{stat?.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsOverview;
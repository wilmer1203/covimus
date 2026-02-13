import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ImpactMetrics = () => {
  const metrics = [
    {
      id: 1,
      icon: "TrendingUp",
      value: "156",
      label: "Obras en Ejecución",
      description: "Infraestructura y servicios viales",
      color: "var(--color-primary)",
      bgColor: "rgba(30, 58, 138, 0.1)"
    },
    {
      id: 2,
      icon: "Users",
      value: "250K",
      label: "Ciudadanos Beneficiados",
      description: "Impacto directo en comunidades",
      color: "var(--color-secondary)",
      bgColor: "rgba(59, 130, 246, 0.1)"
    },
    {
      id: 3,
      icon: "Award",
      value: "89",
      label: "Metas Alcanzadas",
      description: "Obras entregadas con calidad",
      color: "var(--color-success)",
      bgColor: "rgba(16, 185, 129, 0.1)"
    },
    {
      id: 4,
      icon: "DollarSign",
      value: "Bs. 450M",
      label: "Inversión Ejecutada",
      description: "Transparencia presupuestaria",
      color: "#16A34A", // Green for money/investment
      bgColor: "rgba(22, 163, 74, 0.1)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Impacto en Números</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparencia en acción: Reinversión social de excedentes para el bienestar del colectivo
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {metrics?.map((metric) => (
            <motion.div
              key={metric?.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border transition-all duration-300 group-hover:shadow-2xl">
                <div
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:rotate-12"
                  style={{ backgroundColor: metric?.bgColor }}
                >
                  <Icon name={metric?.icon} size={28} color={metric?.color} />
                </div>

                <div className="mb-2">
                  <h3 className="text-4xl lg:text-5xl font-extrabold mb-1" style={{ color: metric?.color }}>
                    {metric?.value}
                  </h3>
                  <p className="text-lg lg:text-xl font-bold text-foreground">{metric?.label}</p>
                </div>

                <p className="text-sm text-muted-foreground">{metric?.description}</p>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="TrendingUp" size={20} color={metric?.color} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
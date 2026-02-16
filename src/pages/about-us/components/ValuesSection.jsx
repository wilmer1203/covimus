import React from 'react';
import ValueCard from './ValueCard';

const ValuesSection = () => {
  const valuesData = [
    {
      title: "Conciencia del Deber Social",
      description: "Actitud permanente de servicio orientada a la participación ciudadana y el convencimiento de que la suerte de la sociedad depende del esfuerzo de cada uno.",
      icon: "HandHeart", // More specific than Heart
      examples: [
        "Iniciativas solidarias comunitarias",
        "Control fiscal sobre bases jurídicas",
        "Enfoque en el beneficio colectivo"
      ]
    },
    {
      title: "Compromiso Organizacional",
      description: "Capacidad de comprender la estructura de la organización y orientar la actuación profesional de acuerdo con los principios y objetivos de la misma.",
      icon: "Briefcase", // Professional/Organization focus
      examples: [
        "Alineación con planes municipales",
        "Ética en el desempeño profesional",
        "Fidelidad a la misión institucional"
      ]
    },
    {
      title: "Visión de Futuro",
      description: "Capacidad de visualizar a la Institución como un organismo de excelencia en la Administración Pública, alcanzando metas de alto impacto.",
      icon: "Rocket", // Growth/Future focus
      examples: [
        "Modernización tecnológica continua",
        "Excelencia operativa sostenida",
        "Planificación estratégica a largo plazo"
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 flex items-center">
      {/* Parallax Background - Fixed for Mobile */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url('/assets/images/7.jpg')" }}
      />
      <div className="absolute inset-0 bg-slate-950/30 z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#C00000] via-[#ffcccc] to-[#C00000] drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            Nuestros Valores
          </h2>
          <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto">
            Los principios éticos que guían cada decisión y proyecto en nuestra organización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuesData.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

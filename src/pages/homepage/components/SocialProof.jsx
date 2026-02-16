import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

import { projects } from '../../../data/projectsData';

const SocialProof = () => {
  const projectTestimonials = projects
    .filter(p => p.testimonial) // Only projects with testimonials
    .map(p => ({
      id: p.id,
      name: p.testimonialAuthor || "Vecino de Sotillo",
      role: p.testimonialRole || "Beneficiario",
      image: p.image, // Use project image as fallback for now, or we could add a specific field
      imageAlt: p.testimonialAuthor,
      quote: p.testimonial,
      rating: 5,
      project: p.name
    }));

  // Use project testimonials if available, otherwise fallback to empty or keep manual ones? 
  // User wants to leverage project data.
  const testimonials = projectTestimonials.length > 0 ? projectTestimonials : [
    {
      id: 1,
      name: "María González",
      role: "Residente de Barcelona",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dfbfb501-1763296570605.png",
      imageAlt: "Testimonio",
      quote: "La renovación de la Avenida ha transformado nuestra comunidad.",
      rating: 5,
      project: "Renovación Vial"
    }
  ];

  // Duplicate for infinite loop
  const carouselTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials]; // Repeat more if few items

  return (

    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-700 animate-pulse" />
            <span className="text-slate-600 text-xs font-bold uppercase tracking-widest">Testimonios</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase">
            IMPACTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900">REAL</span>
          </h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light">
            Historias de transformación que definen nuestra gestión en cada comunidad de Sotillo.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full py-10">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: "-50%" }}
            transition={{
              duration: 40, // Slower for better readability
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {carouselTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[350px] md:w-[450px] flex-shrink-0 bg-slate-900 rounded-2xl p-8 shadow-xl border border-white/10 transition-colors group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent/20 group-hover:border-accent transition-colors">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white text-lg truncate">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400 truncate">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-white leading-relaxed italic relative text-lg font-medium">
                  <span className="text-accent/40 text-5xl absolute -top-6 -left-4 font-serif">"</span>
                  {testimonial.quote}
                </p>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider block text-right">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>);

};

export default SocialProof;
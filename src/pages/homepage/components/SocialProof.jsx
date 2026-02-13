import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Residente de Barcelona",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dfbfb501-1763296570605.png",
    imageAlt: "Professional headshot of Hispanic woman with long dark hair wearing blue blouse smiling warmly at camera",
    quote: "La renovación de la Avenida Principal ha transformado completamente nuestra comunidad. Ahora tenemos vías seguras y bien iluminadas.",
    rating: 5,
    project: "Renovación Vial Barcelona"
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    role: "Director Hospital Regional",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13cd27287-1763294352375.png",
    imageAlt: "Professional headshot of Hispanic man with short black hair wearing white medical coat and stethoscope",
    quote: "La ampliación del hospital nos permitió duplicar nuestra capacidad de atención. COVIMUS cumplió todos los plazos establecidos.",
    rating: 5,
    project: "Ampliación Hospital Regional"
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Directora Escuela Técnica",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19689645b-1763293794554.png",
    imageAlt: "Professional headshot of Hispanic woman with glasses and brown hair in professional attire smiling confidently",
    quote: "Las nuevas instalaciones educativas han mejorado significativamente la experiencia de aprendizaje de nuestros estudiantes.",
    rating: 5,
    project: "Modernización Educativa"
  },
  {
    id: 4, // Duplicate for loop smoothness or add new
    name: "Pedro Castillo",
    role: "Comerciante Local",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    imageAlt: "Portrait of a shop owner",
    quote: "La reactivación de las zonas comerciales nos ha devuelto la vida. Ahora los clientes llegan con facilidad.",
    rating: 5,
    project: "Reactivación Comercial"
  }];

  // Duplicate the array to create the infinite loop effect
  const carouselTestimonials = [...testimonials, ...testimonials];

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
             <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
             <span className="text-slate-600 text-xs font-bold uppercase tracking-widest">Testimonios</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase">
            IMPACTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600">REAL</span>
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
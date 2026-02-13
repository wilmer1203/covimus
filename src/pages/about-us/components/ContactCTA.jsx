import React from 'react';

const ContactCTA = () => {
    return (
        <section className="py-20 bg-slate-950 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold text-white mb-8">¿Listo para construir el futuro?</h2>
                <div className="flex justify-center gap-4">
                    <a href="/contact" className="px-8 py-3 bg-[#FFCC00] text-slate-900 font-bold rounded-lg hover:shadow-lg transition-all">Contáctanos</a>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;

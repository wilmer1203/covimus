import React from 'react';
import Timeline from '../../../components/ui/Timeline';

const HistorySection = () => {
    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Nuestra Evolución</h2>
                <p className="text-slate-500 text-lg">Del Decreto N° 93 a la Potencia Industrial de hoy.</p>
            </div>
            <Timeline />
            </div>
        </section>
    );
};

export default HistorySection;

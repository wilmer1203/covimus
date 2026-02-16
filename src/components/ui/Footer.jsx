import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Menú Principal',
      links: [
        { label: 'Inicio', path: '/homepage' },
        { label: 'Nosotros', path: '/about-us' },
        // { label: 'Autoridades', path: '/authorities' },
        { label: 'Proyectos', path: '/projects' },
      ],
    },
    {
      title: 'Contacto',
      items: [
        { icon: 'MapPin', text: 'C. Venezuela, Puerto La Cruz 6023, Anzoátegui' },
        { icon: 'Mail', text: 'covimuscomercial@gmail.com' },
        { icon: 'Clock', text: 'Lun - Vie: 8:00 AM - 4:00 PM' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#FFCC00] rounded-lg text-slate-900">
                <Icon name="Building2" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">COVIMUS</h3>
                <p className="text-[10px] uppercase tracking-widest text-[#FFCC00] font-bold">Corporación de Vialidad</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              Construyendo el futuro de Puerto La Cruz con transparencia, compromiso y calidad. Infraestructura al servicio del ciudadano.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/covimusplc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-[#FFCC00] hover:bg-slate-800 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:covimuscomercial@gmail.com"
                className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-[#FFCC00] hover:bg-slate-800 transition-all duration-300 group"
                aria-label="Email"
              >
                <Icon name="Mail" size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections?.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{section?.title}</h3>
              {section?.links ? (
                <ul className="space-y-4">
                  {section?.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link?.path} className="text-sm hover:text-[#FFCC00] hover:translate-x-1 transition-all duration-300 inline-block">
                        {link?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-4">
                  {section?.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Icon name={item?.icon} size={18} className="mt-0.5 flex-shrink-0 text-[#FFCC00]" />
                      <span className="text-sm leading-relaxed">{item?.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-600">
          <p>© {currentYear} COVIMUS. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <span>RIF: G-200088532</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Puerto La Cruz, Venezuela</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
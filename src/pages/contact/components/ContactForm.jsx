import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

import emailjs from '@emailjs/browser';

const ContactForm = () => {




  // CONFIGURACIÓN DE EMAILJS (¡REEMPLAZA ESTOS VALORES CON LOS TUYOS!)
  // Crea tu cuenta gratis en https://www.emailjs.com/
  const SERVICE_ID = "service_e4k16sk"; 
  const TEMPLATE_ID = "template_z5yzeda"; 
  const PUBLIC_KEY = "8pIfN356iGAOtP3Qx";
  const IMGBB_API_KEY = "7b8e6d3de8d316ba8b8b5dc97d46411c";

  const [formData, setFormData] = useState({
    name: '',
    cedula: '',
    phone: '',
    email: '',
    requestType: 'denuncia',
    sector: '',
    referencePoint: '',
    description: '',
    image: null
  });

  const [previewUrl, setPreviewUrl] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validación de peso (Máximo 2MB para evitar errores de EmailJS)
      if (file.size > 2 * 1024 * 1024) {
        alert("⚠️ La imagen es muy pesada. El límite es 2MB. Por favor intenta con una foto más ligera o comprimida.");
        e.target.value = ""; // Limpiar input
        setFormData(prev => ({ ...prev, image: null }));
        setPreviewUrl(null);
        return;
      }

      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setPreviewUrl(null);
    setFormData(prev => ({ ...prev, image: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imageUrl = null;
      const fileInput = e.target.querySelector('input[name="evidence_file"]');
      const file = fileInput?.files?.[0];

      // 1. Subir imagen a ImgBB si existe
      if (file) {
        const formData = new FormData();
        formData.append('image', file);
        
        // Mostrar estado de carga intermedio si se desea, o esperar
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        if (data.success) {
          imageUrl = data.data.url; // URL pública de la imagen
        } else {
          throw new Error('Error al subir imagen a ImgBB: ' + (data.error?.message || 'Desconocido'));
        }
      }

      // 2. Preparar parámetros para EmailJS (JSON)
      // Agregamos el link de la imagen al final del mensaje para que salga en el correo
      const fullMessage = imageUrl 
        ? `${formData.description}\n\n📷 Evidencia Adjunta: ${imageUrl}`
        : formData.description;

      const templateParams = {
        to_name: "Administrador COVIMUS",
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_cedula: formData.cedula,
        request_type: formData.requestType,
        sector: formData.sector,
        reference: formData.referencePoint,
        message: fullMessage, // El mensaje ahora incluye el link
      };

      // 3. Enviar correo usando emailjs.send (NO sendForm)
      // Esto evita el problema de los adjuntos binarios
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      alert('¡Reporte enviado con éxito! Recibirá una copia en su correo.');
      
      // Reset form
      setFormData({
        name: '',
        cedula: '',
        phone: '',
        email: '',
        requestType: 'denuncia',
        sector: '',
        referencePoint: '',
        description: '',
        image: null
      });
      setPreviewUrl(null);
      e.target.reset(); 

    } catch (error) {
      console.error("Submission Error:", error);
      alert(`Error al enviar: ${error.message || JSON.stringify(error)}. Revise la consola.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const requestTypes = [
    { value: 'denuncia', label: 'Denuncia' },
    { value: 'servicio', label: 'Solicitud de Servicio' },
    { value: 'reclamo', label: 'Reclamo' },
    { value: 'sugerencia', label: 'Sugerencia' }
  ];

  const labelClasses = "text-slate-300 text-sm font-bold uppercase tracking-wider mb-2 block ml-1";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 md:p-10 rounded-[2.5rem] bg-slate-950 border border-white/10 shadow-2xl relative overflow-hidden group">
      {/* Decorative Blueprint Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5 pointer-events-none" />
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFCC00]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="relative z-10 mb-2">
         <h3 className="text-2xl font-black text-white mb-2">Formulario de Registro</h3>
         <p className="text-slate-400 text-sm">Sus datos están protegidos y serán usados solo para gestionar su solicitud.</p>
      </div>
      
      {/* Personal Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <label className="flex flex-col flex-1 group">
          <span className={`${labelClasses} group-focus-within:text-[#FFCC00] transition-colors`}>Nombre Completo *</span>
          <input
            required
            type="text"
            placeholder="Juan Pérez"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-900/50 text-white h-16 px-6 focus:outline-none focus:border-[#FFCC00]/50 focus:bg-slate-900 focus:shadow-[0_0_20px_rgba(255,204,0,0.1)] transition-all placeholder:text-slate-600 hover:bg-slate-900/80 backdrop-blur-sm"
            name="user_name"
          />
        </label>
        <label className="flex flex-col flex-1 group">
           <span className={`${labelClasses} group-focus-within:text-[#FFCC00] transition-colors`}>Cédula *</span>
           <input
             required
             type="text"
             placeholder="V-12.345.678"
             value={formData.cedula}
             onChange={(e) => handleChange('cedula', e.target.value)}
             className="w-full rounded-2xl border border-white/10 bg-slate-900/50 text-white h-16 px-6 focus:outline-none focus:border-[#FFCC00]/50 focus:bg-slate-900 focus:shadow-[0_0_20px_rgba(255,204,0,0.1)] transition-all placeholder:text-slate-600 hover:bg-slate-900/80 backdrop-blur-sm"
             name="user_cedula"
           />
        </label>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <label className="flex flex-col flex-1 group">
          <span className={`${labelClasses} group-focus-within:text-[#FFCC00] transition-colors`}>Teléfono *</span>
          <input
            required
            type="tel"
            placeholder="(0414) 123-4567"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-900/50 text-white h-16 px-6 focus:outline-none focus:border-[#FFCC00]/50 focus:bg-slate-900 focus:shadow-[0_0_20px_rgba(255,204,0,0.1)] transition-all placeholder:text-slate-600 hover:bg-slate-900/80 backdrop-blur-sm"
            name="user_phone"
          />
        </label>
        <label className="flex flex-col flex-1 group">
           <span className={`${labelClasses} group-focus-within:text-[#FFCC00] transition-colors`}>Correo Electrónico *</span>
           <input
             required
             type="email"
             placeholder="juan@ejemplo.com"
             value={formData.email}
             onChange={(e) => handleChange('email', e.target.value)}
             className="w-full rounded-2xl border border-white/10 bg-slate-900/50 text-white h-16 px-6 focus:outline-none focus:border-[#FFCC00]/50 focus:bg-slate-900 focus:shadow-[0_0_20px_rgba(255,204,0,0.1)] transition-all placeholder:text-slate-600 hover:bg-slate-900/80 backdrop-blur-sm"
             name="user_email"
           />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
         {/* Request Type */}
        <label className="flex flex-col flex-1 group">
          <span className={`${labelClasses} group-focus-within:text-[#FFCC00] transition-colors`}>Tipo de Solicitud *</span>
          <div className="relative">
            <select
                value={formData.requestType}
                onChange={(e) => handleChange('requestType', e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 text-white h-16 px-6 appearance-none focus:outline-none focus:border-[#FFCC00]/50 focus:bg-slate-900 cursor-pointer [&>option]:bg-slate-950 transition-all hover:bg-slate-900/80 backdrop-blur-sm"
                name="request_type"

            >
                {requestTypes.map(type => (
                <option key={type.value} value={type.value}>
                    {type.label}
                </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-slate-400">
                <Icon name="ChevronDown" size={20} className="group-hover:text-[#FFCC00] transition-colors" />
            </div>
          </div>
        </label>

        {/* Sector / Parroquia */}
        <label className="flex flex-col flex-1 group">
            <span className={`${labelClasses} group-focus-within:text-[#FFCC00] transition-colors`}>Sector / Parroquia *</span>
            <input 
                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 text-white h-16 px-6 focus:outline-none focus:border-[#FFCC00]/50 focus:bg-slate-900 focus:shadow-[0_0_20px_rgba(255,204,0,0.1)] transition-all placeholder:text-slate-600 hover:bg-slate-900/80 backdrop-blur-sm"
                name="sector"

                placeholder="Ej. Av. Intercomunal" 
                type="text"
                value={formData.sector}
                onChange={(e) => handleChange('sector', e.target.value)}
                required
            />
        </label>
      </div>

      {/* Reference Point */}
      <label className="flex flex-col flex-1 relative z-10 group">
        <span className={`${labelClasses} group-focus-within:text-[#FFCC00] transition-colors`}>Punto de Referencia *</span>
        <div className="relative">
            <input 
                className="w-full rounded-2xl border border-white/10 bg-slate-900/50 text-white h-16 pl-14 pr-6 focus:outline-none focus:border-[#FFCC00]/50 focus:bg-slate-900 focus:shadow-[0_0_20px_rgba(255,204,0,0.1)] transition-all placeholder:text-slate-600 hover:bg-slate-900/80 backdrop-blur-sm"
                name="reference"

                placeholder="Ej. Frente al Centro Comercial..." 
                type="text"
                value={formData.referencePoint}
                onChange={(e) => handleChange('referencePoint', e.target.value)}
                required
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-6 text-slate-400">
                <Icon name="MapPin" size={20} className="group-focus-within:text-[#FFCC00] transition-colors" />
            </div>
        </div>
      </label>

      {/* Description */}
      <label className="flex flex-col flex-1 relative z-10 group">
        <span className={`${labelClasses} group-focus-within:text-[#FFCC00] transition-colors`}>Descripción de la Falla</span>
        <textarea 
            className="w-full rounded-2xl border border-white/10 bg-slate-900/50 text-white p-6 focus:outline-none focus:border-[#FFCC00]/50 focus:bg-slate-900 focus:shadow-[0_0_20px_rgba(255,204,0,0.1)] transition-all placeholder:text-slate-600 hover:bg-slate-900/80 backdrop-blur-sm resize-none min-h-[150px]" 
            name="message" 
 
            placeholder="Describa brevemente el problema (hueco, alcantarilla dañada, falta de señalización...)" 
            rows="4"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            required
        ></textarea>
      </label>

      {/* File Upload */}
      <div className="relative z-10 group">
        <span className={`${labelClasses} group-hover:text-[#FFCC00] transition-colors`}>Evidencia Fotográfica</span>
        <div 
            className={`border-2 border-dashed rounded-3xl p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer relative overflow-hidden
                ${previewUrl ? 'border-[#FFCC00] bg-[#FFCC00]/5' : 'border-white/10 hover:border-[#FFCC00]/50 hover:bg-slate-900/50 bg-slate-900/30'}
            `}
        >
            <input
                type="file"
                name="evidence_file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            
            {previewUrl ? (
                <div className="relative z-20 w-full">
                     <img src={previewUrl} alt="Preview" className="max-h-64 rounded-xl mx-auto shadow-2xl mb-6 object-cover border border-white/10" />
                     <button 
                        type="button" 
                        onClick={(e) => {e.preventDefault(); e.stopPropagation(); clearImage()}}
                        className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-bold rounded-xl shadow-lg transition-colors flex items-center gap-2 mx-auto"
                     >
                        <Icon name="Trash2" size={16} />
                        Quitar Imagen
                     </button>
                </div>
            ) : (
                <>
                    <div className="bg-slate-800 p-6 rounded-full mb-4 text-[#FFCC00] group-hover:scale-110 transition-transform duration-300 shadow-2xl border border-white/5">
                        <Icon name="UploadCloud" size={40} />
                    </div>
                    <p className="text-xl font-bold text-white mb-2">Haga clic o arrastre la imagen aquí</p>
                    <p className="text-sm text-slate-400">JPG, PNG hasta 5MB</p>
                </>
            )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6 relative z-10">
        <button 
            className="w-full h-16 bg-[#FFCC00] hover:bg-yellow-400 text-slate-900 font-black text-lg uppercase tracking-widest rounded-2xl transition-all shadow-[0_0_30px_rgba(255,204,0,0.2)] hover:shadow-[0_0_50px_rgba(255,204,0,0.4)] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-1 active:translate-y-0" 
            type="submit"
            disabled={isSubmitting}
        >
            {isSubmitting ? (
                <span>Enviando...</span>
            ) : (
                <>
                    <span>Enviar Reporte Oficial</span>
                    <Icon name="Send" size={24} className="stroke-[2.5]" />
                </>
            )}
        </button>
      </div>

    </form>
  );
};

export default ContactForm;

import React from 'react';
import { ConsultationForm } from './ConsultationForm';
import { COMPANY_INFO } from '../data/siteData';
import { Mail, Phone, MapPin, Clock, ShieldCheck, MessageCircle, ArrowUpRight } from 'lucide-react';

export const ContactPageView: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Kontak &amp; Konsultasi Resmi</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102A43] tracking-tight">
            Hubungi DATAVORA INDONESIA
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Mulai dari audit awal dataset hingga perancangan otomatisasi alur kerja, tim konsultan kami siap membantu bisnis Anda.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-extrabold text-base text-[#102A43] mb-1">Email Resmi</h3>
            <p className="text-xs text-slate-500 mb-3">Untuk pengiriman proposal resmi atau dokumen NDA.</p>
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-[#2563EB] hover:underline">
              {COMPANY_INFO.email}
            </a>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-extrabold text-base text-[#102A43] mb-1">WhatsApp Hotline</h3>
            <p className="text-xs text-slate-500 mb-3">Respon cepat untuk penjadwalan meeting awal.</p>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20DATAVORA%20INDONESIA,%20saya%20ingin%20konsultasi%20solusi%20data`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
            >
              <span>{COMPANY_INFO.phone}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="font-extrabold text-base text-[#102A43] mb-1">Jam Operasional</h3>
            <p className="text-xs text-slate-500 mb-3">Konsultasi jarak jauh (Online) seluruh Indonesia.</p>
            <span className="text-sm font-bold text-slate-800">
              {COMPANY_INFO.workHours}
            </span>
          </div>
        </div>

        {/* Form inclusion */}
        <ConsultationForm />

      </div>
    </div>
  );
};

import React from 'react';
import { CORE_SERVICES } from '../data/siteData';
import { 
  CheckCircle2, 
  ArrowRight, 
  Wrench, 
  Users, 
  Layers,
  Sparkles
} from 'lucide-react';

interface ServicesPageViewProps {
  onConsultService: (serviceTitle: string) => void;
}

export const ServicesPageView: React.FC<ServicesPageViewProps> = ({ onConsultService }) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Katalog Lengkap Layanan</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102A43] tracking-tight">
            Layanan Solusi Data DATAVORA INDONESIA
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Rangkaian layanan profesional terstruktur untuk membantu perusahaan menata, mengotomasi, dan memanfaatkan data untuk keputusan bisnis terbaik.
          </p>
        </div>

        {/* Detailed Service List */}
        <div className="space-y-12">
          {CORE_SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              id={srv.id}
              className={`rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm transition-all hover:border-blue-300 ${
                idx % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Description (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-white bg-[#102A43] px-2.5 py-1 rounded">
                      LAYANAN {srv.number}
                    </span>
                    <span className="text-xs font-semibold text-[#2563EB]">
                      {srv.tagline}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
                    {srv.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {srv.fullDesc}
                  </p>

                  {/* Deliverables Box */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200 mt-4 space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Hasil &amp; Deliverables yang Diterima Klien:</span>
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {srv.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Specs & CTA (5 cols) */}
                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-blue-600" />
                      <span>Teknologi &amp; Alat Bantu:</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {srv.toolsUsed.map((t, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-cyan-600" />
                      <span>Target Kebutuhan Ideal:</span>
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {srv.idealFor.map((item, i) => (
                        <li key={i}>&bull; {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onConsultService(srv.title)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#2563EB] hover:bg-blue-700 shadow-md shadow-blue-500/20 active:scale-95 transition-all"
                    >
                      <span>Konsultasikan Layanan {srv.number}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

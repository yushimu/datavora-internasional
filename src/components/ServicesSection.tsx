import React, { useState } from 'react';
import { CORE_SERVICES } from '../data/siteData';
import { ServiceItem } from '../types';
import { 
  FileInput, 
  Sparkles, 
  BarChart3, 
  Database, 
  FileSpreadsheet, 
  Code, 
  Lightbulb, 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2, 
  X,
  Layers,
  Wrench,
  Users
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForConsult: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForConsult,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'FileInput':
        return <FileInput className="w-5 h-5 sm:w-6 sm:h-6 text-[#94721C]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#C59B27]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-[#94721C]" />;
      case 'Database':
        return <Database className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F172A]" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700" />;
      case 'Code':
        return <Code className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-[#C59B27]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-[#94721C]" />;
      default:
        return <Database className="w-5 h-5 sm:w-6 sm:h-6 text-[#C59B27]" />;
    }
  };

  return (
    <section id="layanan" className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6ED] border border-[#C59B27]/40 text-[#94721C] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            <Layers className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Layanan Utama DATAVORA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Solusi Data Komprehensif untuk Setiap Kebutuhan Bisnis
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
            Dari input data terstruktur hingga analitik visual interaktif dan otomatisasi spreadsheet, kami menyediakan rangkaian layanan end-to-end untuk efisiensi bisnis Anda.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CORE_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-[#C59B27] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FAF6ED] border border-[#C59B27]/25 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#94721C] bg-[#FAF6ED] px-2 py-0.5 rounded border border-[#C59B27]/30">
                    {srv.number}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1.5 group-hover:text-[#94721C] transition-colors leading-snug">
                  {srv.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {srv.shortDesc}
                </p>

                {/* Micro deliverables preview */}
                <div className="space-y-1 mb-4 pt-3 border-t border-slate-100">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Deliverable Unggulan:
                  </div>
                  <div className="flex items-start gap-1.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{srv.deliverables[0]}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{srv.deliverables[1]}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                type="button"
                onClick={() => setSelectedService(srv)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-[#0F172A] bg-slate-50 hover:bg-[#FAF6ED] hover:text-[#94721C] border border-slate-200 hover:border-[#C59B27] transition-all"
              >
                <span>Rincian &amp; Deliverable</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-7 shadow-2xl border border-amber-300/40 relative">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-[#94721C] bg-[#FAF6ED] px-2.5 py-0.5 rounded border border-[#C59B27]/40">
                LAYANAN {selectedService.number}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-1.5">
              {selectedService.title}
            </h3>

            <p className="text-xs sm:text-sm font-semibold text-[#94721C] mb-3">
              {selectedService.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              {selectedService.fullDesc}
            </p>

            {/* Deliverables */}
            <div className="mb-5 bg-[#FAF9F6] p-4 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>Deliverables &amp; Output Nyata yang Diterima Klien:</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {selectedService.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Ideal For */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <div className="p-3 rounded-xl border border-slate-200 bg-white">
                <h5 className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1 mb-1.5">
                  <Wrench className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Teknologi / Tools:</span>
                </h5>
                <div className="flex flex-wrap gap-1">
                  {selectedService.toolsUsed.map((tool, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 bg-white">
                <h5 className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1 mb-1.5">
                  <Users className="w-3.5 h-3.5 text-[#94721C]" />
                  <span>Sangat Cocok Untuk:</span>
                </h5>
                <ul className="space-y-0.5 text-xs text-slate-600">
                  {selectedService.idealFor.map((item, i) => (
                    <li key={i}>&bull; {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Bottom CTAs */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Tutup
              </button>

              <button
                type="button"
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForConsult(serviceName);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] hover:brightness-105 shadow-sm"
              >
                <span>Konsultasikan Layanan Ini</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

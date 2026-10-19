import React from 'react';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

interface ServicesPageViewProps {
  onBackToHome?: () => void;
  onConsultService?: (serviceTitle: string) => void;
}

export const ServicesPageView: React.FC<ServicesPageViewProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-[65vh] flex items-center justify-center px-4 py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="text-center max-w-md w-full mx-auto p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-amber-500/10 border border-[#C59B27]/30 flex items-center justify-center text-[#C59B27]">
          <AlertTriangle className="w-8 h-8 text-[#C59B27]" />
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-2">
          Sedang Maintenance
        </h1>
        
        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          Halaman Produk &amp; Layanan sedang dalam tahap pemeliharaan.
        </p>

        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] hover:brightness-105 shadow-md shadow-amber-900/20 transition-all duration-150"
          >
            <ArrowLeft className="w-4 h-4 text-slate-950" />
            <span>Kembali ke Beranda</span>
          </button>
        )}
      </div>
    </div>
  );
};

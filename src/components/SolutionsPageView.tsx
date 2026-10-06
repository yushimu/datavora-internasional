import React from 'react';
import { BUSINESS_PROBLEMS, TARGET_INDUSTRIES } from '../data/siteData';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Building2, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

interface SolutionsPageViewProps {
  onConsultProblem: (problemTitle: string) => void;
}

export const SolutionsPageView: React.FC<SolutionsPageViewProps> = ({ onConsultProblem }) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Solusi Masalah Nyata Bisnis</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102A43] tracking-tight">
            Menyelesaikan Inefisiensi Operasional Berbasis Data
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Temukan bagaimana pendekatan terstruktur DATAVORA membantu organisasi mengatasi 6 kendala operasional utama yang sering menghambat produktivitas.
          </p>
        </div>

        {/* 6 Problems & Solutions Deep-Dive */}
        <div className="space-y-8">
          {BUSINESS_PROBLEMS.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm bg-slate-50 hover:bg-white hover:border-blue-400 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Problem Box (5 cols) */}
                <div className="lg:col-span-5 space-y-3 pr-0 lg:pr-6 border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Kendala Operasional 0{idx + 1}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#102A43]">
                    {item.problemTitle}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.problemDesc}
                  </p>

                  <div className="bg-rose-100/60 text-rose-900 text-xs p-3 rounded-xl border border-rose-200/80">
                    <strong className="block text-[11px] uppercase tracking-wider text-rose-700 mb-0.5">
                      Dampak Finansial &amp; Waktu:
                    </strong>
                    {item.impact}
                  </div>
                </div>

                {/* Solution Box (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Solusi Sistematis DATAVORA</span>
                  </div>

                  <h4 className="text-xl font-bold text-[#102A43]">
                    {item.solutionTitle}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.solutionDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {item.keyBenefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">
                      Relevan untuk: {item.industry}
                    </span>
                    <button
                      type="button"
                      onClick={() => onConsultProblem(item.problemTitle)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#2563EB] hover:bg-blue-700 shadow-sm"
                    >
                      <span>Atasi Masalah Ini</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Industry Focus */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
              Solusi yang Disesuaikan Berdasarkan Industri
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Setiap industri memiliki karakteristik dataset yang unik. Kami menyesuaikan arsitektur solusi sesuai ekosistem bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_INDUSTRIES.map((ind, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-[#102A43]">
                    {ind.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {ind.description}
                </p>
                <div className="border-t border-slate-200/80 pt-3 text-xs">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                    Spesialisasi Proyek:
                  </span>
                  <ul className="space-y-1 text-slate-700">
                    {ind.commonProjects.map((p, pI) => (
                      <li key={pI}>&bull; {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

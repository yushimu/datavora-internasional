import React, { useState } from 'react';
import { BUSINESS_PROBLEMS, TARGET_INDUSTRIES } from '../data/siteData';
import { 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Sparkles 
} from 'lucide-react';

interface SolutionsSectionProps {
  onConsult: (problemContext?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onConsult }) => {
  const [activeTab, setActiveTab] = useState<'problems' | 'industries'>('problems');

  return (
    <section id="solusi" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Problem-Solving Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Bagaimana DATAVORA Menyelesaikan Masalah Bisnis Anda
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Kami bukan sekadar agensi teknologi; kami adalah mitra strategis yang membedah akar inefisiensi operasional dan merancang solusi data yang praktis serta berdampak langsung.
          </p>

          {/* Tab switcher */}
          <div className="inline-flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200 mt-8">
            <button
              type="button"
              onClick={() => setActiveTab('problems')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'problems'
                  ? 'bg-white text-[#102A43] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Berdasarkan Kendala Operasional
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('industries')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'industries'
                  ? 'bg-white text-[#102A43] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Berdasarkan Sektor Industri
            </button>
          </div>
        </div>

        {/* Tab 1: Problems to Solutions */}
        {activeTab === 'problems' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_PROBLEMS.map((prob) => (
              <div
                key={prob.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-300 p-6 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Problem part */}
                  <div className="pb-4 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider mb-2">
                      <ShieldAlert className="w-4 h-4" />
                      <span>Masalah yang Sering Dihadapi:</span>
                    </div>
                    <h3 className="text-base font-extrabold text-[#102A43] mb-2 leading-snug">
                      {prob.problemTitle}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {prob.problemDesc}
                    </p>
                    <div className="bg-rose-50/70 text-rose-800 text-[11px] p-2 rounded-lg border border-rose-100">
                      <strong>Dampak Bisnis:</strong> {prob.impact}
                    </div>
                  </div>

                  {/* Solution part */}
                  <div>
                    <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Solusi Konkrit DATAVORA:</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#102A43] mb-2">
                      {prob.solutionTitle}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {prob.solutionDesc}
                    </p>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {prob.keyBenefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {prob.industry}
                  </span>
                  <button
                    type="button"
                    onClick={() => onConsult(prob.problemTitle)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:underline"
                  >
                    <span>Solusikan Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Target Industries */}
        {activeTab === 'industries' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_INDUSTRIES.map((ind, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-cyan-400 hover:bg-white transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center font-bold text-sm mb-4">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-[#102A43] mb-2">
                  {ind.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {ind.description}
                </p>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs">
                  <div className="font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-2">
                    Contoh Proyek yang Relevan:
                  </div>
                  <ul className="space-y-1.5 text-slate-600">
                    {ind.commonProjects.map((proj, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

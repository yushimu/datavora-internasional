import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  Cpu, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface HeroSectionProps {
  onExploreServices: () => void;
  onConsultProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onConsultProject,
}) => {
  const [activePipelineStage, setActivePipelineStage] = useState<number>(2);

  const pipelineStages = [
    {
      id: 0,
      title: '01. Raw Data Input',
      status: 'Inkonsisten',
      metric: 'Banyak duplikasi, penulisan typo, & berkas tercecer',
      accentColor: 'text-amber-400',
    },
    {
      id: 1,
      title: '02. Cleaning & Logic',
      status: 'Standar Otomatis',
      metric: 'Regex validasi nomor & de-duplikasi hingga 99.8%',
      accentColor: 'text-[#E6C564]',
    },
    {
      id: 2,
      title: '03. Business Intelligence',
      status: 'Siap Eksekusi',
      metric: 'Dashboard KPI otomatis & pangkas 85% jam kerja rutin',
      accentColor: 'text-emerald-400',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6ED] via-white to-white pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-100">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Subtle Warm Gold Ambient Glow */}
      <div className="absolute -top-24 right-1/4 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            
            {/* Corporate Badge with Dark Gold Trim */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6ED] border border-[#C59B27]/40 text-[#94721C] text-[11px] sm:text-xs font-bold tracking-wide uppercase shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#C59B27] animate-ping" />
              <span>Data Management &amp; Analytics Specialist</span>
            </div>

            {/* Main Headline (Optimized for Mobile & Desktop) */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.2] sm:leading-[1.18]">
              Transform Your Business Data Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#94721C] via-[#C59B27] to-[#D4AF37]">
                Real Business Value.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
              <strong>DATAVORA INDONESIA</strong> membantu bisnis dan organisasi mengorganisir, membersihkan, menganalisis, mengotomasi, dan mentransformasi data menjadi solusi bisnis cerdas melalui manajemen data profesional, otomatisasi spreadsheet, dan analitik mendalam.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
              <button
                onClick={onConsultProject}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] hover:brightness-105 shadow-md shadow-amber-900/20 transition-all duration-150 active:scale-95"
              >
                <span>Konsultasikan Proyek Anda</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#0F172A] bg-white hover:bg-[#FAF6ED] border border-slate-300 hover:border-[#C59B27] transition-all duration-150 shadow-xs"
              >
                <span>Eksplorasi Layanan Kami</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
                <span>100% Akurasi &amp; Validasi Data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
                <span>Alur Kerja Disesuaikan Bisnis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
                <span>Kerahasiaan Terjamin (NDA)</span>
              </div>
            </div>

          </div>

          {/* Right Visual Graphic (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0F172A] text-white p-4 sm:p-6 shadow-xl shadow-slate-950/20 border border-[#C59B27]/30 overflow-hidden">
              
              {/* Glowing header bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-xs text-amber-200/80 ml-1">datavora.engine</span>
                </div>
                <span className="text-[10px] font-semibold bg-amber-950/80 text-[#E6C564] border border-[#C59B27]/40 px-2 py-0.5 rounded-full flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6C564] animate-pulse" />
                  PIPELINE ONLINE
                </span>
              </div>

              {/* Live Metric Cards Grid */}
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                  <div className="text-[10px] sm:text-[11px] font-medium text-slate-400 mb-0.5 flex items-center justify-between">
                    <span>Akurasi Dataset</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#E6C564]" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#E6C564]">99.8%</div>
                  <div className="text-[9px] text-emerald-400 mt-0.5 font-semibold">Tervalidasi &amp; Bersih</div>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                  <div className="text-[10px] sm:text-[11px] font-medium text-slate-400 mb-0.5 flex items-center justify-between">
                    <span>Efisiensi Waktu</span>
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300">85%</div>
                  <div className="text-[9px] text-emerald-400 mt-0.5 font-semibold">Pangkas Rutinitas</div>
                </div>
              </div>

              {/* Interactive Pipeline Stage Selector */}
              <div className="space-y-2 mt-3">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Alur Transformasi Data Interaktif:
                </div>

                <div className="space-y-1.5">
                  {pipelineStages.map((stage) => {
                    const isSelected = activePipelineStage === stage.id;
                    return (
                      <div
                        key={stage.id}
                        onClick={() => setActivePipelineStage(stage.id)}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-950/40 border-[#C59B27] shadow-sm ring-1 ring-[#C59B27]/40'
                            : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/80'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className={isSelected ? 'text-[#E6C564]' : 'text-slate-300'}>
                            {stage.title}
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                            {stage.status}
                          </span>
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
                          {stage.metric}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Tagline */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Tata Kelola Terstruktur</span>
                </span>
                <span className="font-mono text-[#E6C564] font-semibold text-[10px]">
                  Zero Error Protocol
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

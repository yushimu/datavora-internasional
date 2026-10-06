import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/siteData';
import { PortfolioProject } from '../types';
import { 
  Briefcase, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  Wrench, 
  X, 
  Layers,
  AlertCircle
} from 'lucide-react';

interface PortfolioSectionProps {
  onConsult: (projectContext: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onConsult }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Semua');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const industries = ['Semua', 'Retail & E-Commerce', 'Distribusi & Logistik', 'Layanan Profesional & Konsultan', 'Jasa B2B & Korporat'];

  const filteredProjects = selectedIndustry === 'Semua'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.industry === selectedIndustry);

  return (
    <section id="portofolio" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Portofolio &amp; Studi Kasus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Implementasi Solusi Data &amp; Hasil Terukur
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Eksplorasi contoh penyelesaian masalah nyata, mulai dari rekonsiliasi e-commerce, pembersihan master database puluhan ribu baris, hingga otomatisasi pelaporan eksekutif.
          </p>

          {/* Industry Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedIndustry === ind
                    ? 'bg-[#102A43] text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    {project.industry}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    Studi Kasus Demonstrasi
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#102A43] mb-3 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Problem vs Solution Snips */}
                <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                  <div>
                    <span className="font-bold text-rose-600 uppercase text-[10px] block mb-1">
                      Tantangan Awal:
                    </span>
                    <p className="text-slate-600 line-clamp-2">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-bold text-emerald-600 uppercase text-[10px] block mb-1">
                      Solusi DATAVORA:
                    </span>
                    <p className="text-slate-600 line-clamp-2">{project.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 text-center">
                      <div className="text-[10px] font-medium text-slate-500 line-clamp-1">{m.label}</div>
                      <div className="text-xs sm:text-sm font-extrabold text-[#2563EB] mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 2).map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                      {t}
                    </span>
                  ))}
                  {project.techStack.length > 2 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-mono">
                      +{project.techStack.length - 2}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-blue-800"
                >
                  <span>Baca Kasus Lengkap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Deep Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                {activeModalProject.industry}
              </span>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                Studi Kasus Demonstrasi
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#102A43] mb-4">
              {activeModalProject.title}
            </h3>

            {/* Impact Metric Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {activeModalProject.metrics.map((m, idx) => (
                <div key={idx} className="bg-blue-50/70 p-3 rounded-xl border border-blue-200 text-center">
                  <div className="text-xs text-slate-600 font-medium">{m.label}</div>
                  <div className="text-lg font-black text-[#2563EB] mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Problem Details */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                <span>Analisis Masalah &amp; Inefisiensi Klien:</span>
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed bg-rose-50/40 p-4 rounded-xl border border-rose-100">
                {activeModalProject.problem}
              </p>
            </div>

            {/* Solution Details */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Arsitektur Solusi DATAVORA:</span>
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed bg-emerald-50/40 p-4 rounded-xl border border-emerald-100">
                {activeModalProject.solution}
              </p>
            </div>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Deliverables &amp; Output Implementasi:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {activeModalProject.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" />
                <span>Teknologi &amp; Pipeline yang Digunakan:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 font-mono text-slate-700 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer CTAs */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Tutup Jendela
              </button>

              <button
                type="button"
                onClick={() => {
                  const proj = activeModalProject.title;
                  setActiveModalProject(null);
                  onConsult(proj);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#2563EB] hover:bg-blue-700 shadow-md shadow-blue-500/20"
              >
                <span>Konsultasikan Kebutuhan Serupa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

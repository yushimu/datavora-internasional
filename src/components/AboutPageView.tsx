import React from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Briefcase, 
  Database, 
  Layers, 
  TrendingUp, 
  Cpu, 
  ShieldCheck,
  Building2,
  Users
} from 'lucide-react';

interface AboutPageViewProps {
  onBackToHome?: () => void;
  onConsult?: () => void;
  onExplorePortfolio?: () => void;
}

export const AboutPageView: React.FC<AboutPageViewProps> = ({ 
  onBackToHome,
  onConsult,
  onExplorePortfolio 
}) => {
  const departmentTags = [
    'Finance',
    'Production',
    'Sales & Marketing',
    'CRM',
    'HRIS'
  ];

  const coreCompetencies = [
    {
      title: 'Data Management & Governance',
      desc: 'Master dataset structuring, data cleaning, automated validation, and single-source-of-truth architectures.'
    },
    {
      title: 'Business Analysis & Strategy',
      desc: 'Identifying operational bottlenecks, analyzing financial & production metrics, and designing actionable KPIs.'
    },
    {
      title: 'Process Improvement',
      desc: 'Streamlining multi-department workflows to eliminate redundant manual tasks, reduce human error, and boost productivity.'
    },
    {
      title: 'Management System Development',
      desc: 'Building custom business tools, internal web portals, and spreadsheet automation tailored to company SOPs.'
    }
  ];

  return (
    <div className="bg-[#FAF5EC] text-[#0F172A] min-h-[85vh] flex flex-col justify-between selection:bg-[#E6C564]/30">
      
      {/* Main Hero Story Section - Exactly matching the user's reference design */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-7 sm:space-y-8">
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Hi, Yunus Shifa Muntari is here...
          </h1>

          {/* Paragraph 1 (Emphasized Lead) */}
          <p className="text-base sm:text-lg md:text-xl font-bold text-[#0F172A] leading-relaxed tracking-normal">
            I'm a Management Data &amp; Analytics Professional with 6 years of experience in supervision, problem-solving, and management system development.
          </p>

          {/* Paragraph 2 */}
          <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-normal">
            I specialize in data management, business analysis, process improvement, and developing digital solutions to support business operations. Throughout my experience as a supervisor, I have handled various operational challenges, identified problems, and developed effective systems to improve efficiency, productivity, and decision-making.
          </p>

          {/* Paragraph 3 */}
          <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-normal">
            I also develop business applications and digital tools to support multiple departments, including{' '}
            <strong className="font-bold text-[#0F172A]">
              Finance, Production, Sales &amp; Marketing, CRM, and HRIS
            </strong>
            . By combining analytical thinking, management experience, and technology, I aim to transform complex business processes into practical, integrated, and data-driven solutions that help companies operate more effectively and grow sustainably.
          </p>

          {/* Department Coverage Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider mr-1">
              Cross-Department Expertise:
            </span>
            {departmentTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-bold bg-white text-[#94721C] border border-[#C59B27]/30 shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {onConsult && (
              <button
                type="button"
                onClick={onConsult}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] hover:brightness-105 shadow-md shadow-amber-900/20 transition-all duration-150 active:scale-95"
              >
                <span>Mulai Konsultasi Proyek</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            )}

            {onExplorePortfolio && (
              <button
                type="button"
                onClick={onExplorePortfolio}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0F172A] bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#C59B27] transition-all duration-150 shadow-xs"
              >
                <Briefcase className="w-4 h-4 text-[#94721C]" />
                <span>Lihat Studi Kasus Portofolio</span>
              </button>
            )}

            {onBackToHome && (
              <button
                type="button"
                onClick={onBackToHome}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Beranda</span>
              </button>
            )}
          </div>

        </div>
      </section>

      {/* Experience Highlights & Core Capabilities */}
      <section className="bg-white border-t border-[#C59B27]/20 py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#C59B27]/30 text-[#94721C] text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Core Strengths &amp; Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Driving Efficiency Through Data &amp; Management Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {coreCompetencies.map((comp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-[#FAF5EC]/40 hover:bg-[#FAF5EC] hover:border-[#C59B27]/50 transition-all duration-200"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E6C564] via-[#C59B27] to-[#94721C] flex items-center justify-center text-slate-950 flex-shrink-0 shadow-xs font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-1">
                      {comp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

import React, { useState } from 'react';
import { 
  FolderKanban, 
  Code2, 
  BrainCircuit, 
  Sparkles, 
  Wrench, 
  Construction, 
  ArrowLeft, 
  Clock, 
  ArrowRight,
  Eye,
  ExternalLink,
  CheckCircle2,
  Monitor,
  Coffee,
  PlusCircle,
  AlertTriangle,
  Database,
  GitBranch,
  Globe,
  TrendingUp,
  DollarSign,
  PieChart,
  Scale,
  ShieldCheck,
  Layers,
  LineChart,
  Wallet,
  FileSpreadsheet,
  BarChart3
} from 'lucide-react';
import { PortfolioTabId } from '../types';
import { KARYA_ITEMS, KaryaItem } from '../data/karyaData';
import { PROJECT_ITEMS, ProjectItem } from '../data/projectData';
import { LandingPageModal } from './LandingPageModal';

interface PortfolioPageViewProps {
  onBackToHome?: () => void;
  onConsult?: () => void;
  initialTab?: PortfolioTabId;
}

interface TabItem {
  id: PortfolioTabId;
  label: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
}

const TABS: TabItem[] = [
  {
    id: 'project',
    label: 'Project',
    tagline: 'Manajemen Data & Solusi Bisnis',
    icon: FolderKanban,
    badge: 'Proyek Data',
  },
  {
    id: 'web-developer',
    label: 'Web Developer',
    tagline: 'Aplikasi Web & Frontend Engineering',
    icon: Code2,
    badge: 'Web App',
  },
  {
    id: 'problem-solving',
    label: 'Problem Solving',
    tagline: 'Studi Kasus & Pemecahan Masalah Nyata',
    icon: BrainCircuit,
    badge: 'Analisis Kasus',
  },
  {
    id: 'karya',
    label: 'Karya',
    tagline: 'Koleksi Landing Page & Desain Web',
    icon: Sparkles,
    badge: 'Koleksi Landing Page',
  },
  {
    id: 'tools',
    label: 'Tools',
    tagline: 'Automasi, Script & Utilitas Data',
    icon: Wrench,
    badge: 'Utilitas & Alat',
  },
];

export const PortfolioPageView: React.FC<PortfolioPageViewProps> = ({
  onBackToHome,
  onConsult,
  initialTab = 'project', // Default ke 'project'
}) => {
  const [activeTab, setActiveTab] = useState<PortfolioTabId>(initialTab);
  const [selectedKarya, setSelectedKarya] = useState<KaryaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentTabInfo = TABS.find((t) => t.id === activeTab) || TABS[0];
  const ActiveTabIcon = currentTabInfo.icon;

  const handleOpenPreview = (item: KaryaItem) => {
    setSelectedKarya(item);
    setIsModalOpen(true);
  };

  const handleClosePreview = () => {
    setIsModalOpen(false);
  };

  const renderMetricIcon = (iconType?: string) => {
    switch (iconType) {
      case 'trending':
        return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      case 'dollar':
        return <DollarSign className="w-4 h-4 text-[#C59B27]" />;
      case 'pie':
        return <PieChart className="w-4 h-4 text-rose-600" />;
      case 'scale':
        return <Scale className="w-4 h-4 text-blue-600" />;
      case 'matrix':
        return <FolderKanban className="w-4 h-4 text-purple-600" />;
      case 'calendar':
        return <Clock className="w-4 h-4 text-amber-600" />;
      case 'chart':
        return <BarChart3 className="w-4 h-4 text-blue-600" />;
      case 'check':
        return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />;
    }
  };

  const renderToolIcon = (iconType?: string) => {
    switch (iconType) {
      case 'supabase':
      case 'database':
        return <Database className="w-5 h-5 text-emerald-600" />;
      case 'github':
        return <GitBranch className="w-5 h-5 text-slate-900" />;
      case 'vercel':
      case 'globe':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'spreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-700" />;
      case 'chart':
        return <BarChart3 className="w-5 h-5 text-[#C59B27]" />;
      case 'automation':
        return <Layers className="w-5 h-5 text-blue-600" />;
      default:
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="min-h-[85vh] bg-[#FAF5EC]/40 text-[#0F172A] flex flex-col justify-between selection:bg-[#E6C564]/30">
      
      {/* Navigation Tabs Bar (Langsung di atas halaman, tidak mengambang / static) */}
      <section className="pt-6 sm:pt-8 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 bg-white/70">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-[#0F172A]/5 border border-slate-200 shadow-inner max-w-full">
            {TABS.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0F172A] text-[#E6C564] shadow-md shadow-slate-900/20 border border-[#C59B27]/50 scale-[1.02]'
                      : 'text-slate-600 hover:text-[#0F172A] hover:bg-white/80'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#E6C564]' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Tab Content Area */}
      <section className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* TAB 1: PROJECT (SHOWCASE FINMAN - TANPA KLIK PREVIEW) */}
          {activeTab === 'project' ? (
            <div className="space-y-10 animate-fadeIn">
              
              {/* Section Subhead */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-[#C59B27]/30 text-[#B8860B] text-[11px] font-bold uppercase tracking-wider">
                      Studi Kasus Proyek Nyata
                    </span>
                    <span className="text-xs text-slate-500">
                      • {PROJECT_ITEMS.length} Proyek Unggulan
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    Sistem Manajemen &amp; Dasbor Bisnis
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Implementasi nyata sistem analitik data yang memecahkan masalah operasional dan finansial perusahaan.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs self-start sm:self-auto">
                  <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                  <span>Solusi Terintegrasi</span>
                </div>
              </div>

              {/* Projects List */}
              <div className="space-y-12">
                {PROJECT_ITEMS.map((project) => (
                  <div 
                    key={project.id}
                    className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
                  >
                    {/* Project Header Info */}
                    <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-100 bg-gradient-to-br from-slate-50/70 via-white to-amber-50/30">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2.5">
                          <span className="px-3 py-1 rounded-full bg-slate-900 text-[#E6C564] border border-[#C59B27]/40 text-xs font-bold uppercase tracking-wider">
                            {project.category}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 text-xs font-bold">
                            {project.badge}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-slate-500">
                          {project.systemTag || 'Data & Management System'}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base font-semibold text-[#B8860B] mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
                        {project.summary}
                      </p>

                      {/* Pilar Metrik Utama Proyek */}
                      {project.keyMetrics && project.keyMetrics.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-6 pt-6 border-t border-slate-200/80">
                          {project.keyMetrics.map((metric, mIdx) => (
                            <div key={mIdx} className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs mb-1">
                                {renderMetricIcon(metric.iconType)}
                                <span>{mIdx + 1}. {metric.label}</span>
                              </div>
                              <p className="text-[11px] text-slate-500 leading-snug">
                                {metric.sublabel}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Visual Showcase (Gambar Dashboard Proyek) */}
                    <div className="p-6 sm:p-8 lg:p-10 bg-slate-900/95 border-b border-slate-800">
                      <div className="max-w-5xl mx-auto">
                        
                        {/* Browser-like Mockup Container */}
                        <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
                          
                          {/* Mockup Header Bar */}
                          <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 select-none">
                            <div className="flex items-center gap-2">
                              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                              <span className="text-[11px] text-slate-400 font-mono ml-2 hidden sm:inline">
                                {project.mockupUrl || `${project.id}.workspace/dashboard`}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span>{project.mockupBadge || 'Live System Snapshot'}</span>
                            </div>
                          </div>

                          {/* Image Display */}
                          <div className="relative overflow-hidden bg-slate-950 flex items-center justify-center">
                            <img
                              src={project.imageUrl}
                              alt={project.title}
                              className="w-full h-auto object-contain max-h-[580px] select-none"
                            />
                          </div>

                          {/* Mockup Caption Footer */}
                          <div className="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800/80 text-center text-xs text-slate-400">
                            {project.imageCaption || `Antarmuka Dasbor ${project.title}`}
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Problem vs Solution Deep-Dive */}
                    <div className="p-6 sm:p-8 lg:p-10 space-y-8 bg-white">
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        
                        {/* Kolom 1: Kendala */}
                        <div className="rounded-2xl p-6 sm:p-7 bg-rose-50/50 border border-rose-100 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2.5 text-rose-700 font-extrabold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-rose-200">
                              <AlertTriangle className="w-4 h-4 text-rose-600" />
                              <span>{project.problemsHeading || 'Kendala yang Dihadapi:'}</span>
                            </div>
                            <div className="space-y-4">
                              {project.problems.map((prob, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <span className="w-5 h-5 rounded-full bg-rose-200/80 text-rose-800 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                    {idx + 1}
                                  </span>
                                  <div>
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                                      {prob.title}
                                    </h4>
                                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                      {prob.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Kolom 2: Solusi */}
                        <div className="rounded-2xl p-6 sm:p-7 bg-emerald-50/50 border border-emerald-100 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2.5 text-emerald-800 font-extrabold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-emerald-200">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              <span>{project.solutionsHeading || `Solusi yang Diberikan Melalui ${project.title}:`}</span>
                            </div>
                            <div className="space-y-4">
                              {project.solutions.map((sol, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <span className="w-5 h-5 rounded-full bg-emerald-200/80 text-emerald-900 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                    {idx + 1}
                                  </span>
                                  <div>
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                                      {sol.title}
                                    </h4>
                                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                      {sol.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Tools & Tech Stack Used */}
                      <div className="pt-6 border-t border-slate-100">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#C59B27]" />
                          <span>Teknologi &amp; Alat yang Digunakan (Tech Stack):</span>
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {project.tools.map((tool, tIdx) => (
                            <div key={tIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                              <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs shrink-0">
                                {renderToolIcon(tool.iconType)}
                              </div>
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h5 className="font-extrabold text-sm text-[#0F172A]">{tool.name}</h5>
                                  {tool.tagBadge && (
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${tool.badgeColor || 'bg-slate-200 text-slate-800'}`}>
                                      {tool.tagBadge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                  {tool.desc || tool.role}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features & Tags Footer */}
                      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {onConsult && (
                          <button
                            onClick={onConsult}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] hover:brightness-105 shadow-md shadow-amber-900/15 transition-all duration-150 cursor-pointer"
                          >
                            <span>{project.consultationText || `Konsultasi Solusi ${project.title}`}</span>
                            <ArrowRight className="w-4 h-4 text-slate-950" />
                          </button>
                        )}
                      </div>

                    </div>
                  </div>
                ))}

                {/* Slot Proyek Tambahan */}
                <div className="rounded-3xl border-2 border-dashed border-amber-300/80 bg-amber-500/5 p-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-[#C59B27]/30 flex items-center justify-center text-[#C59B27] mx-auto">
                    <PlusCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A]">
                    Slot Proyek Sistem &amp; Manajemen Data Berikutnya
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                    Upload gambar proyek ke folder <code className="bg-white px-1.5 py-0.5 rounded text-amber-900 border border-amber-200">public/portofolio-project/images/</code> untuk mempublikasikan studi kasus baru.
                  </p>
                </div>

              </div>

            </div>
          ) : activeTab === 'karya' ? (
            /* TAB 2: KARYA (SHOWCASE LANDING PAGE DENGAN PREVIEW) */
            <div className="space-y-6 animate-fadeIn">
              
              {/* Section Subhead */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-[#C59B27]/30 text-[#B8860B] text-[11px] font-bold uppercase tracking-wider">
                      Koleksi Landing Page
                    </span>
                    <span className="text-xs text-slate-500">
                      • {KARYA_ITEMS.length} Proyek
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                    Karya &amp; Landing Page Showcase
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs self-start sm:self-auto">
                  <Monitor className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Preview Interaktif Responsif</span>
                </div>
              </div>

              {/* Karya Cards Grid: 3 Kolom Responsif dengan Thumbnail Kompak */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {KARYA_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-2xl border border-slate-200 hover:border-[#C59B27] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Compact Thumbnail Container (Kompak h-44 sm:h-48) */}
                      <div 
                        onClick={() => handleOpenPreview(item)}
                        className="relative h-44 sm:h-48 overflow-hidden bg-slate-900 cursor-pointer"
                      >
                        <img
                          src={item.thumbnailUrl}
                          alt={item.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 backdrop-blur-md text-[#E6C564] border border-[#C59B27]/50 text-[10px] font-bold shadow-xs">
                            {item.category}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/90 text-slate-950 text-[10px] font-extrabold shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse" />
                            Live Preview
                          </span>
                        </div>

                        {/* Hover Overlay Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[1px]">
                          <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md scale-95 group-hover:scale-100 transition-transform">
                            <Eye className="w-3.5 h-3.5 text-slate-950" />
                            <span>Preview</span>
                          </div>
                        </div>

                        {/* Bottom Thumbnail Bar */}
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="flex items-center gap-1.5 text-white">
                            <Coffee className="w-4 h-4 text-[#E6C564] shrink-0" />
                            <h3 className="font-bold text-base tracking-tight text-white drop-shadow truncate">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-[11px] text-slate-300 mt-0.5 truncate">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Card Content Details (Kompak & Padat) */}
                      <div className="p-4 sm:p-5 space-y-3.5">
                        
                        {/* Description */}
                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                          {item.description}
                        </p>

                        {/* Key Features */}
                        {item.features && item.features.length > 0 && (
                          <div className="space-y-1.5 pt-2 border-t border-slate-100">
                            {item.features.slice(0, 3).map((feat, idx) => (
                              <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                                <span className="truncate">{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tech Tags */}
                        <div className="flex flex-wrap items-center gap-1 pt-1">
                          {item.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>

                    {/* Card Action Buttons */}
                    <div className="p-4 pt-2 flex items-center gap-2 border-t border-slate-100 bg-slate-50/60 rounded-b-2xl">
                      <button
                        onClick={() => handleOpenPreview(item)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] hover:brightness-105 shadow-xs transition-all duration-150 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-950" />
                        <span>Preview</span>
                      </button>

                      <a
                        href={item.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
                        title="Buka di tab baru"
                      >
                        <span>Tab Baru</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    </div>
                  </div>
                ))}

                {/* Future Showcase Placeholder Card */}
                <div className="rounded-2xl border-2 border-dashed border-amber-300/80 bg-amber-500/5 p-6 flex flex-col items-center justify-center text-center space-y-3 min-h-[340px]">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-[#C59B27]/30 flex items-center justify-center text-[#C59B27]">
                    <PlusCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A]">
                      Landing Page Berikutnya
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
                      Tambahkan file HTML di folder <code className="bg-white px-1.5 py-0.5 rounded text-[10px] text-amber-900 border border-amber-200">public/portofolio-karya/</code> untuk ditampilkan di sini.
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white text-slate-600 text-[11px] font-semibold border border-slate-200 shadow-xs">
                    Slot Karya Tersedia
                  </span>
                </div>

              </div>

            </div>
          ) : (
            /* TAB LAIN: TAMPILAN MAINTENANCE (WEB DEV, PROBLEM SOLVING, TOOLS) */
            <div className="max-w-2xl w-full mx-auto animate-fadeIn">
              <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 p-8 sm:p-12 text-center transition-all duration-300">
                
                {/* Ambient Background Accent Glow */}
                <div className="absolute top-0 right-1/2 translate-x-1/2 -mt-12 w-64 h-32 bg-gradient-to-b from-amber-200/30 to-transparent blur-2xl pointer-events-none" />

                {/* Icon Header with Badge */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-[#C59B27]/40 flex items-center justify-center text-[#E6C564] shadow-lg shadow-slate-900/10">
                    <ActiveTabIcon className="w-10 h-10 sm:w-12 sm:h-12 text-[#E6C564]" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-sm border border-white">
                    <Clock className="w-3 h-3" />
                    <span>Maintenance</span>
                  </div>
                </div>

                {/* Tab Badge */}
                <div className="mb-2">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#B8860B] bg-amber-500/10 border border-[#C59B27]/30 px-3 py-1 rounded-full">
                    Tab: {currentTabInfo.label}
                  </span>
                </div>

                {/* Main Title */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
                  Halaman {currentTabInfo.label} Sedang Maintenance
                </h2>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
                  Konten untuk bagian <span className="font-semibold text-slate-900">{currentTabInfo.label}</span> sedang dalam proses pemeliharaan dan persiapan sistem. Halaman ini akan segera diperbarui dengan rincian lengkap.
                </p>

                {/* Status Info Box */}
                <div className="mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-100 max-w-md mx-auto text-left flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-[#C59B27] mt-0.5">
                    <Construction className="w-5 h-5 text-[#C59B27]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Status: Maintenance
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Ruang kerja ini telah disiapkan untuk {currentTabInfo.tagline.toLowerCase()}.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => setActiveTab('project')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] hover:brightness-105 shadow-md shadow-amber-900/15 transition-all duration-150 cursor-pointer"
                  >
                    <FolderKanban className="w-4 h-4 text-slate-950" />
                    <span>Lihat Proyek Finman</span>
                  </button>
                  {onBackToHome && (
                    <button
                      onClick={onBackToHome}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all duration-150 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 text-slate-600" />
                      <span>Kembali ke Beranda</span>
                    </button>
                  )}
                </div>

              </div>
            </div>
          )}

        </div>
      </section>

      {/* Interactive Modal Popup for Landing Page Preview (Hanya untuk Tab Karya) */}
      <LandingPageModal
        isOpen={isModalOpen}
        onClose={handleClosePreview}
        item={selectedKarya}
      />

    </div>
  );
};

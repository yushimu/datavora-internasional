import React from 'react';
import { 
  Search, 
  LineChart, 
  Code2, 
  Gauge, 
  CheckCircle, 
  ArrowRight,
  GitBranch
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Memahami Konteks & Target',
      desc: 'Mendengarkan secara mendalam alur kerja saat ini, sasaran bisnis, serta titik hambatan utama yang dialami tim Anda.',
      icon: Search,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 border-blue-200',
    },
    {
      num: '02',
      title: 'Analyze',
      tagline: 'Audit Data & Bottleneck',
      desc: 'Memeriksa sampel dataset, mengidentifikasi pola anomali, duplikasi, kerusakan rumus, dan waktu yang terbuang pada proses manual.',
      icon: LineChart,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50 border-cyan-200',
    },
    {
      num: '03',
      title: 'Develop',
      tagline: 'Perancangan Solusi Tepat',
      desc: 'Membangun arsitektur data, formula otomatisasi, pipeline pembersihan, script Apps Script/VBA, atau modul aplikasi yang disesuaikan.',
      icon: Code2,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 border-indigo-200',
    },
    {
      num: '04',
      title: 'Optimize',
      tagline: 'Validasi & Uji Keandalan',
      desc: 'Uji integritas kalkulasi, simulasi beban kerja, validasi batas eror, dan penyempurnaan kemudahan antarmuka pengguna.',
      icon: Gauge,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-200',
    },
    {
      num: '05',
      title: 'Deliver',
      tagline: 'Serah Terima & Edukasi',
      desc: 'Penyerahan file master tervalidasi, dokumentasi panduan SOP operasional, serta sesi transfer knowledge bagi staf Anda.',
      icon: CheckCircle,
      color: 'text-[#102A43]',
      bgColor: 'bg-slate-100 border-slate-300',
    },
  ];

  return (
    <section id="proses-kerja" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Metodologi Kerja Terstruktur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            5 Langkah Terukur Mengubah Data Menjadi Solusi
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Kami menerapkan tahapan sistematis dari konsultasi awal hingga serah terima, memastikan proyek data Anda selesai tepat waktu, aman, dan langsung dapat digunakan tim.
          </p>
        </div>

        {/* Steps Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                      {step.num}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${step.bgColor}`}>
                      <Icon className={`w-4 h-4 ${step.color}`} />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-[#102A43] mb-1">
                    {step.title}
                  </h3>
                  
                  <div className="text-xs font-semibold text-[#2563EB] mb-2.5">
                    {step.tagline}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span>Tahap {idx + 1} dari 5</span>
                  {idx < 4 && <ArrowRight className="w-3.5 h-3.5 text-slate-300 hidden lg:block" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Assurance Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#102A43]">
              Komitmen Kerahasiaan Informasi (Non-Disclosure Agreement)
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Setiap berkas dan data klien dilindungi dengan perjanjian kerahasiaan formal sebelum proyek dimulai.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold whitespace-nowrap">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Garansi Validasi Ulang</span>
          </div>
        </div>

      </div>
    </section>
  );
};

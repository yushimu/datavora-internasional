import React from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Sliders, 
  Zap, 
  Layers, 
  Lightbulb,
  CheckCircle2,
  Award
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      title: 'Accuracy & Reliability',
      subtitle: 'Ketelitian & Keandalan Teruji',
      desc: 'Protokol verifikasi bertingkat menjamin data yang Anda terima bebas dari duplikasi dan eror komputasi.',
      icon: ShieldCheck,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 border-blue-200',
    },
    {
      title: 'Data-Driven Approach',
      subtitle: 'Keputusan Berbasis Angka Nyata',
      desc: 'Kami mendasarkan setiap rekomendasi pada bukti empiris dan pola statistik objektif dari data historis Anda.',
      icon: TrendingUp,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50 border-cyan-200',
    },
    {
      title: 'Customized Solutions',
      subtitle: 'Disesuaikan dengan Alur Kerja Anda',
      desc: 'Tidak ada template kaku; seluruh formula, script, dan arsitektur data dirancang mengikuti alur kerja khas bisnis Anda.',
      icon: Sliders,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 border-indigo-200',
    },
    {
      title: 'Efficient Business Processes',
      subtitle: 'Efisiensi Operasional Maksimal',
      desc: 'Memangkas jam lembur staf yang terbuang untuk rekapitulasi rutin dan mempercepat siklus pengiriman laporan.',
      icon: Zap,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 border-amber-200',
    },
    {
      title: 'Technology Integration',
      subtitle: 'Integrasi Ekosistem Modern',
      desc: 'Menggabungkan keandalan spreadsheet, skrip otomasi Google Apps Script/VBA, dan database relasional mutakhir.',
      icon: Layers,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-200',
    },
    {
      title: 'Problem-Solving Mindset',
      subtitle: 'Fokus Solutif & Berkelanjutan',
      desc: 'Kami membedah akar masalah operasional, bukan sekadar memperbaiki gejala luar yang terlihat di permukaan.',
      icon: Lightbulb,
      color: 'text-[#102A43]',
      bgColor: 'bg-slate-100 border-slate-300',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Keunggulan Kompetitif DATAVORA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            More Than Data Services. We Deliver Business Solutions.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Kepercayaan klien dibangun di atas ketelitian eksekusi, pemahaman alur bisnis yang mendalam, dan komitmen menghasilkan nilai bisnis yang nyata.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${adv.bgColor} mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${adv.color}`} />
                  </div>

                  <h3 className="text-lg font-bold text-[#102A43] mb-1">
                    {adv.title}
                  </h3>
                  
                  <div className="text-xs font-semibold text-[#2563EB] mb-3">
                    {adv.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Standar Mutu Terjamin</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

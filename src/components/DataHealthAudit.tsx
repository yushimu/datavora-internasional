import React, { useState } from 'react';
import { AUDIT_QUESTIONS, COMPANY_INFO } from '../data/siteData';
import { 
  Calculator, 
  CheckCircle, 
  ArrowRight, 
  RotateCcw, 
  Sparkles,
  TrendingDown,
  MessageSquare
} from 'lucide-react';

export const DataHealthAudit: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: string, optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const isComplete = AUDIT_QUESTIONS.every((q) => answers[q.id] !== undefined);

  let totalScore = 0;
  let maxScore = 0;
  const recommendedServices: string[] = [];

  AUDIT_QUESTIONS.forEach((q) => {
    const selectedIdx = answers[q.id];
    if (selectedIdx !== undefined) {
      const opt = q.options[selectedIdx];
      totalScore += opt.points;
      if (!recommendedServices.includes(opt.recommendedService)) {
        recommendedServices.push(opt.recommendedService);
      }
    }
    maxScore += 40;
  });

  const percentage = Math.round((totalScore / maxScore) * 100);

  const getStatus = (pct: number) => {
    if (pct >= 80) {
      return {
        label: 'Tingkat Kesiapan Tinggi (Perlu Otomasi Lanjutan)',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-300',
        desc: 'Fondasi data Anda sudah cukup baik, saatnya beralih ke otomatisasi skrip dan dashboard BI terpadu.',
        timeLoss: '10 - 20 jam / bulan',
      };
    } else if (pct >= 50) {
      return {
        label: 'Tingkat Kesiapan Menengah (Rentan Inefisiensi & Eror)',
        color: 'text-[#94721C] bg-[#FAF6ED] border-[#C59B27]/40',
        desc: 'Data mulai menumpuk dan sering terjadi selisih hitung serta keterlambatan laporan rutin bulanan.',
        timeLoss: '30 - 50 jam / bulan',
      };
    } else {
      return {
        label: 'Tingkat Inefisiensi Tinggi (Perlu Penataan Darurat)',
        color: 'text-rose-700 bg-rose-50 border-rose-300',
        desc: 'Operasional sangat bergantung pada proses manual copy-paste dan rentan salah keputusan akibat data tidak valid.',
        timeLoss: '60+ jam / bulan',
      };
    }
  };

  const status = getStatus(percentage);

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const waMessage = encodeURIComponent(
    `Halo DATAVORA INDONESIA, saya telah menyelesaikan Audit Kesiapan Data di website dengan skor ${percentage}% (${status.label}). Estimasi inefisiensi kami sekitar ${status.timeLoss}. Rekomendasi layanan: ${recommendedServices.join(', ')}. Saya ingin berkonsultasi lebih lanjut.`
  );

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6ED] border border-[#C59B27]/40 text-[#94721C] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            <Calculator className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Alat Diagnostik Mandiri</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Kalkulator Kesiapan Data &amp; Inefisiensi Operasional
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-xl mx-auto">
            Jawab 4 pertanyaan sederhana di bawah ini untuk mendiagnosis titik kebocoran efisiensi data bisnis Anda dan temukan modul solusi yang tepat.
          </p>
        </div>

        {!submitted ? (
          <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-4 sm:p-7 shadow-xs">
            <div className="space-y-4 sm:space-y-5">
              {AUDIT_QUESTIONS.map((q, qIndex) => (
                <div key={q.id} className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200">
                  <div className="flex items-start gap-2.5 mb-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#FAF6ED] text-[#94721C] border border-[#C59B27]/40 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {qIndex + 1}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-snug">
                      {q.question}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-0 sm:pl-7">
                    {q.options.map((opt, optIndex) => {
                      const isSelected = answers[q.id] === optIndex;
                      return (
                        <button
                          key={optIndex}
                          type="button"
                          onClick={() => handleSelect(q.id, optIndex)}
                          className={`text-left p-2.5 sm:p-3 rounded-lg text-xs transition-all border ${
                            isSelected
                              ? 'bg-[#FAF6ED] border-[#C59B27] text-[#0F172A] font-semibold ring-1 ring-[#C59B27]'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                                isSelected
                                  ? 'border-[#C59B27] bg-[#C59B27]'
                                  : 'border-slate-300'
                              }`}
                            >
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                            </span>
                            <span className="leading-snug">{opt.label}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3.5 border-t border-slate-200">
              <span className="text-[11px] text-slate-500 font-mono">
                {Object.keys(answers).length} dari {AUDIT_QUESTIONS.length} pertanyaan terjawab
              </span>

              <button
                type="button"
                disabled={!isComplete}
                onClick={() => setSubmitted(true)}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  isComplete
                    ? 'text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] hover:brightness-105 shadow-sm active:scale-95'
                    : 'bg-slate-200 cursor-not-allowed text-slate-400'
                }`}
              >
                <span>Lihat Hasil Diagnosis &amp; Solusi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Result Card */
          <div className="bg-[#FAF9F6] border border-[#C59B27]/30 rounded-2xl p-4 sm:p-7 shadow-sm">
            <div className="text-center pb-5 border-b border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Hasil Diagnosis Kesiapan Data Bisnis
              </span>
              <div className="my-2.5 flex items-center justify-center gap-3">
                <span className="text-4xl sm:text-5xl font-black text-[#0F172A]">{percentage}%</span>
                <div className={`px-3 py-1 rounded-xl border text-[11px] sm:text-xs font-bold ${status.color}`}>
                  {status.label}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                {status.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-5">
              {/* Lost time card */}
              <div className="bg-white p-4 rounded-xl border border-rose-100 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase">Potensi Waktu Terbuang:</h4>
                  <div className="text-base font-black text-rose-600">{status.timeLoss}</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Waktu tim dihabiskan untuk koreksi manual, copy-paste, dan rekapitulasi ulang.
                  </p>
                </div>
              </div>

              {/* Recommended services */}
              <div className="bg-white p-4 rounded-xl border border-amber-200/60 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FAF6ED] text-[#94721C] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-[#C59B27]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase">Rekomendasi Modul DATAVORA:</h4>
                  <div className="text-xs font-bold text-[#0F172A] mt-1 space-y-1">
                    {recommendedServices.map((srv, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-[#94721C]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C59B27]" />
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3.5 border-t border-slate-200">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-800"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi Diagnosis</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] shadow-sm hover:brightness-105"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>Konsultasikan Hasil via WhatsApp</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { COMPANY_INFO, CORE_SERVICES, TARGET_INDUSTRIES } from '../data/siteData';
import { 
  MessageSquareText, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ExternalLink,
  MessageCircle
} from 'lucide-react';

interface ConsultationFormProps {
  initialService?: string;
  initialContext?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialService,
  initialContext,
}) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || CORE_SERVICES[1].title);
  const [selectedIndustry, setSelectedIndustry] = useState(TARGET_INDUSTRIES[0].name);
  const [notes, setNotes] = useState(initialContext ? `Konteks kebutuhan: ${initialContext}` : '');
  const [submitted, setSubmitted] = useState(false);

  const constructWaMessage = () => {
    return encodeURIComponent(
      `Halo DATAVORA INDONESIA,\n\nNama: ${fullName || 'Calon Klien'}\nPerusahaan: ${companyName || 'Bisnis / Organisasi'}\nEmail: ${email || '-'}\nLayanan yang Dibutuhkan: ${selectedService}\nSektor Industri: ${selectedIndustry}\n\nDetail Kebutuhan:\n${notes || 'Ingin konsultasi penjadwalan evaluasi data.'}\n\nMohon info ketersediaan jadwal konsultasi awal.`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="konsultasi" className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6ED] border border-[#C59B27]/40 text-[#94721C] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            <MessageSquareText className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Mulai Diskusi Proyek</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Konsultasikan Kebutuhan Solusi Data Anda
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-2 max-w-xl mx-auto leading-relaxed">
            Diskusikan tata kelola data, otomatisasi spreadsheet, atau analitik Anda bersama praktisi DATAVORA. Tanpa komitmen awal dan kerahasiaan data (NDA) terjamin penuh.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left info column (5 cols) */}
          <div className="lg:col-span-5 bg-[#0F172A] text-white p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
            <div>
              <div className="text-[11px] font-bold text-[#E6C564] uppercase tracking-widest mb-1.5">
                DATAVORA INDONESIA
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 leading-snug">
                Turning Data Into Business Solutions.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Kami siap membantu Anda membedah inefisiensi alur kerja dan merancang sistem data yang rapi dan terukur.
              </p>

              <div className="space-y-3.5 text-xs text-slate-300 border-t border-slate-800 pt-5">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#C59B27] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Perjanjian Kerahasiaan (NDA)</strong>
                    <span className="text-[11px] text-slate-400">Seluruh data bisnis terlindungi secara hukum dan tidak dibagikan ke pihak ketiga.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#E6C564] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Respon Cepat 24 Jam Kerja</strong>
                    <span className="text-[11px] text-slate-400">Tim konsultan kami akan meninjau dan merespon dalam 1 hari kerja.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6">
              <div className="text-[11px] text-slate-400 mb-2">Konsultasi Cepat via WhatsApp:</div>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${constructWaMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-emerald-500 hover:bg-emerald-400 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Chat via WhatsApp Sekarang</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Right form column (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Contoh: Budi Prasetyo"
                      className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      Perusahaan / Usaha *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Contoh: PT Surya Niaga"
                      className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      Email Bisnis *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@perusahaan.com"
                      className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      WhatsApp / Telepon *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0812-xxxx-xxxx"
                      className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      Pilihan Layanan *
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27] bg-white"
                    >
                      {CORE_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.number}. {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                      Sektor Industri *
                    </label>
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27] bg-white"
                    >
                      {TARGET_INDUSTRIES.map((ind, i) => (
                        <option key={i} value={ind.name}>
                          {ind.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                    Ceritakan Ringkas Kendala atau Target Anda
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: Kami ingin merapikan master database pelanggan dan mengotomasi rekap penjualan dari berbagai file cabang..."
                    className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] hover:brightness-105 shadow-sm active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Kirim Formulir Konsultasi</span>
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${constructWaMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#94721C] bg-[#FAF6ED] hover:bg-amber-100 border border-[#C59B27]/40 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C59B27]" />
                    <span>Kirim via WhatsApp</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-extrabold text-[#0F172A]">
                  Permintaan Konsultasi Diterima!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Terima kasih, <strong>{fullName}</strong> dari <strong>{companyName}</strong>. Tim konsultan DATAVORA INDONESIA akan segera menghubungi Anda dalam 24 jam kerja.
                </p>
                <div className="pt-3 flex flex-col sm:flex-row justify-center gap-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200"
                  >
                    Kirim Form Baru
                  </button>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${constructWaMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] inline-flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Lanjutkan ke WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

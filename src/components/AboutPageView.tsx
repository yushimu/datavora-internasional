import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { 
  Database, 
  Target, 
  Compass, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface AboutPageViewProps {
  onConsult: () => void;
}

export const AboutPageView: React.FC<AboutPageViewProps> = ({ onConsult }) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Tentang DATAVORA INDONESIA</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight">
            Your Partner in Data-Driven Business Transformation.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Membantu dunia usaha dan organisasi mentransformasi kumpulan data mentah yang rumit menjadi aset bisnis strategis yang terstruktur, tervalidasi, dan siap menopang pertumbuhan bisnis.
          </p>
        </div>

        {/* Why DATAVORA Exists (Latar Belakang & Filosofi) */}
        <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Mengapa DATAVORA Hadir?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
              Menjawab Tantangan Krisis Kualitas Data Bisnis
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Di era digital saat ini, hampir setiap perusahaan menghasilkan ribuan catatan transaksi, data kontak pelanggan, dan rekaman inventori setiap bulannya. Namun kenyataannya di lapangan, sebagian besar data tersebut terabaikan di dalam file spreadsheet yang berantakan, saling bertabrakan versinya, atau dipenuhi galat kalkulasi.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>DATAVORA INDONESIA</strong> didirikan untuk menjembatani kesenjangan antara tim operasional yang kewalahan dengan proses manual dan jajaran pimpinan yang membutuhkan wawasan bisnis akurat seketika. Kami memadukan ketelitian audit data dengan teknologi otomatisasi modern.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-extrabold text-base text-[#102A43] border-b border-slate-100 pb-3">
              Prinsip Kerja Kami:
            </h3>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs sm:text-sm text-[#102A43] block">Akurasi Tanpa Kompromi</strong>
                <span className="text-xs text-slate-500">Koreksi ganda dan validasi regex memastikan integritas angka 100%.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs sm:text-sm text-[#102A43] block">Solusi Praktis &amp; Bertahap</strong>
                <span className="text-xs text-slate-500">Mulai dari optimalisasi spreadsheet yang ada tanpa memaksa migrasi mahal seketika.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs sm:text-sm text-[#102A43] block">Kerahasiaan Informasi Ketat</strong>
                <span className="text-xs text-slate-500">Perjanjian NDA resmi untuk seluruh data klien sebelum proyek dimulai.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-blue-400 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#102A43] mb-3">Visi Perusahaan</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-blue-400 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#102A43] mb-3">Misi Perusahaan</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
              Nilai-Nilai Utama (Company Values)
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Pondasi etika dan dedikasi tim konsultan DATAVORA dalam setiap penugasan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-mono text-xs font-bold text-blue-600 block mb-2">01 / INTEGRITAS</span>
              <h4 className="font-bold text-base text-[#102A43] mb-1">Kejujuran Data Objektif</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kami menyajikan temuan data apa adanya berdasarkan fakta empiris tanpa memanipulasi angka.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-mono text-xs font-bold text-blue-600 block mb-2">02 / PRESISI</span>
              <h4 className="font-bold text-base text-[#102A43] mb-1">Ketelitian Maksimal</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Setiap formula, skrip otomasi, dan laporan melewati proses uji komputasi bertingkat.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-mono text-xs font-bold text-blue-600 block mb-2">03 / EMPATI BISNIS</span>
              <h4 className="font-bold text-base text-[#102A43] mb-1">Fokus Pemecahan Masalah</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Memahami kendala nyata pengguna di lapangan sehingga sistem yang kami rancang mudah dioperasikan.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="font-mono text-xs font-bold text-blue-600 block mb-2">04 / KEMANDIRIAN KLIEN</span>
              <h4 className="font-bold text-base text-[#102A43] mb-1">Transfer Pengetahuan</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kami membekali tim Anda dengan SOP jelas dan panduan video agar tim dapat mandiri setelah serah terima.
              </p>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="bg-[#102A43] text-white rounded-2xl p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Diskusikan Kebutuhan Data Anda Bersama Kami
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Tim konsultan DATAVORA siap mendengarkan tantangan operasional Anda dan merumuskan rencana aksi pembenahan data yang konkret.
          </p>
          <button
            onClick={onConsult}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#2563EB] hover:bg-blue-600 shadow-md shadow-blue-500/20"
          >
            <span>Mulai Konsultasi Bisnis</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

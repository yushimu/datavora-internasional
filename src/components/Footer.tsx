import React from 'react';
import { PageView } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { 
  Database, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  Download,
  FileCode,
  PenTool,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate
}) => {
  return (
    <footer className="bg-[#090E17] text-slate-300 pt-12 sm:pt-16 pb-10 border-t border-[#C59B27]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-slate-800">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E6C564] via-[#C59B27] to-[#94721C] flex items-center justify-center text-slate-950 shadow-md">
                <Database className="w-5 h-5" />
              </div>
              <div className="font-extrabold text-lg text-white tracking-tight">
                DATAVORA <span className="text-[#E6C564] font-bold text-xs uppercase px-1.5 py-0.5 rounded bg-amber-500/10 border border-[#C59B27]/40">INDONESIA</span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 pr-2">
              Perusahaan solusi data profesional yang membantu bisnis dan organisasi mentransformasi data menjadi informasi bisnis yang terstruktur, akurat, bernilai, dan dapat ditindaklanjuti.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-[#C59B27]/40 text-xs font-semibold text-[#E6C564]">
              <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
              <span>&ldquo;Turning Data Into Business Solutions&rdquo;</span>
            </div>

          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[#E6C564] text-xs font-extrabold uppercase tracking-wider mb-3.5 border-l-2 border-[#C59B27] pl-2">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#E6C564] transition-colors text-left"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#E6C564] transition-colors text-left"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#E6C564] transition-colors text-left"
                >
                  Layanan Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-[#E6C564] transition-colors text-left"
                >
                  Solusi Bisnis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#E6C564] transition-colors text-left"
                >
                  Portofolio &amp; Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#E6C564] transition-colors text-left"
                >
                  Artikel &amp; Wawasan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#E6C564] transition-colors text-left"
                >
                  Hubungi Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[#E6C564] text-xs font-extrabold uppercase tracking-wider mb-3.5 border-l-2 border-[#C59B27] pl-2">
              Layanan Utama
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="text-[#C59B27] font-mono text-[10px]">01</span>
                <span>Data Entry &amp; Digitization</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#C59B27] font-mono text-[10px]">02</span>
                <span>Data Cleaning &amp; Correction</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#C59B27] font-mono text-[10px]">03</span>
                <span>Data Analysis &amp; Dashboard BI</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#C59B27] font-mono text-[10px]">04</span>
                <span>Data Management Architecture</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#C59B27] font-mono text-[10px]">05</span>
                <span>Spreadsheet &amp; Script Automation</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#C59B27] font-mono text-[10px]">06</span>
                <span>Custom Application Development</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#C59B27] font-mono text-[10px]">07</span>
                <span>Business Problem Solving</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#C59B27] font-mono text-[10px]">08</span>
                <span>Digital Transformation Consulting</span>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[#E6C564] text-xs font-extrabold uppercase tracking-wider mb-3.5 border-l-2 border-emerald-500 pl-2">
              Kontak Konsultasi
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#C59B27] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Email Pertanyaan Resmi:</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-[#E6C564] transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">WhatsApp Diskusi Cepat:</div>
                  <a 
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Halo%20DATAVORA%20INDONESIA,%20saya%20tertarik%20berkonsultasi%20mengenai%20solusi%20data%20perusahaan`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 hover:text-emerald-200 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Hubungi via WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E6C564] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Cakupan Wilayah:</div>
                  <span>{COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            &copy; {new Date().getFullYear()} <strong>{COMPANY_INFO.name}</strong>. Hak Cipta Dilindungi Undang-Undang.
          </div>
        </div>

      </div>
    </footer>
  );
};

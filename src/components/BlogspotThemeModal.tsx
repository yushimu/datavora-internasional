import React, { useState } from 'react';
import { BLOGSPOT_THEME_FILES, BlogspotFile } from '../data/blogspotThemeFiles';
import { 
  Download, 
  FileCode, 
  Folder, 
  Check, 
  Copy, 
  X, 
  ShieldCheck, 
  BookOpen,
  Sparkles
} from 'lucide-react';
import JSZip from 'jszip';

interface BlogspotThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlogspotThemeModal: React.FC<BlogspotThemeModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<BlogspotFile>(BLOGSPOT_THEME_FILES[0]);
  const [activeTab, setActiveTab] = useState<'inspector' | 'guide' | 'specs'>('inspector');
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadXml = async () => {
    setDownloading(true);
    try {
      const xmlFile = BLOGSPOT_THEME_FILES.find(f => f.path.endsWith('.xml'));
      if (xmlFile) {
        const blob = new Blob([xmlFile.code], { type: 'text/xml' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'datavora-indonesia-blogspot-theme-v1.0.0.xml';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (err) {
      console.error('XML download error:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-300 overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-[#0F172A] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#C59B27]/30">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F57C00] to-[#E65100] flex items-center justify-center text-white shadow-md">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                  DATAVORA INDONESIA — Blogger / Blogspot Theme
                </h3>
                <span className="text-[10px] uppercase font-bold bg-orange-950 text-orange-400 border border-orange-500/40 px-2 py-0.5 rounded-full">
                  XML V3
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                Tema resmi Blogspot. Format XML 100% responsif & siap digunakan untuk membuat artikel.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadXml}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#FF8A65] via-[#FF5722] to-[#E64A19] hover:brightness-105 shadow-md shadow-orange-900/20 active:scale-95 transition-all disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? 'Mengunduh...' : 'Unduh XML (v1.0.0)'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2 bg-slate-100 border-b border-slate-200 text-xs font-bold">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('inspector')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'inspector'
                  ? 'bg-white text-[#E65100] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pemeriksa Berkas
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'guide'
                  ? 'bg-white text-[#E65100] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Panduan Instalasi
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'specs'
                  ? 'bg-white text-[#E65100] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Fitur Utama
            </button>
          </div>

          <span className="hidden sm:inline-block text-[11px] text-slate-500 font-medium">
            Status: Siap diunggah ke Blogspot / Blogger
          </span>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden p-4 sm:p-6 bg-slate-50">
          
          {/* Tab 1: File Inspector */}
          {activeTab === 'inspector' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[55vh]">
              
              {/* File Tree Left (4 cols) */}
              <div className="md:col-span-4 bg-white rounded-xl border border-slate-200 p-3 overflow-y-auto">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                  Struktur Berkas Tema
                </div>
                <div className="space-y-1">
                  {BLOGSPOT_THEME_FILES.map((file) => {
                    const isSelected = selectedFile.path === file.path;
                    return (
                      <button
                        key={file.path}
                        onClick={() => setSelectedFile(file)}
                        className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-mono flex items-center justify-between transition-colors ${
                          isSelected
                            ? 'bg-orange-50 text-orange-600 font-bold border border-orange-200'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <Folder className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                          <span className="truncate">{file.path}</span>
                        </div>
                        <span className="text-[9px] uppercase font-sans text-slate-400 font-bold px-1.5 py-0.5 rounded bg-slate-100">
                          {file.language}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Code Viewer Right (8 cols) */}
              <div className="md:col-span-8 bg-[#0B1522] rounded-xl border border-slate-800 flex flex-col overflow-hidden">
                <div className="bg-[#102A43] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-200 font-mono">
                    <span className="text-orange-400 font-bold">{selectedFile.path}</span>
                    <span className="text-slate-400">&bull;</span>
                    <span className="text-[11px] text-slate-400">{selectedFile.description}</span>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-sans transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-300" />
                        <span>Salin Kode</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="flex-1 p-4 font-mono text-xs text-slate-200 overflow-auto whitespace-pre leading-relaxed select-text bg-[#0B1522]">
                  <code>{selectedFile.code}</code>
                </pre>
              </div>

            </div>
          )}

          {/* Tab 2: Installation Guide */}
          {activeTab === 'guide' && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 h-[55vh] overflow-y-auto space-y-6">
              <h4 className="text-lg font-extrabold text-[#102A43] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-600" />
                <span>Panduan Lengkap Memasang Tema DATAVORA di Blogspot / Blogger</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="w-7 h-7 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                    1
                  </span>
                  <h5 className="font-bold text-sm text-[#102A43] mb-1">Unduh Berkas .XML</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Klik tombol <strong>&ldquo;Unduh XML&rdquo;</strong> di atas untuk mendapatkan file tema <code>datavora-indonesia-blogspot-theme-v1.0.0.xml</code>.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="w-7 h-7 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                    2
                  </span>
                  <h5 className="font-bold text-sm text-[#102A43] mb-1">Buka Dashboard Blogger</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Masuk ke <code>blogger.com</code> Anda. Arahkan menu sebelah kiri ke: <strong>Tema (Theme)</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="w-7 h-7 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                    3
                  </span>
                  <h5 className="font-bold text-sm text-[#102A43] mb-1">Pulihkan Tema</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Klik tombol panah bawah <code>&darr;</code> di sebelah tombol Sesuaikan (Customize). Pilih <strong>Pulihkan (Restore)</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mb-3">
                    4
                  </span>
                  <h5 className="font-bold text-sm text-[#102A43] mb-1">Unggah &amp; Selesai</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Klik <strong>Unggah</strong> dan pilih file XML yang tadi diunduh. Tunggu beberapa detik, kini Anda bisa membuat <strong>Artikel</strong> baru langsung dari Blogger!
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 p-5 rounded-xl border border-orange-200 text-xs sm:text-sm text-slate-700 space-y-2">
                <div className="font-bold text-orange-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  <span>Keunggulan Format Blogspot Native:</span>
                </div>
                <p>
                  Berbeda dengan platform mandiri, dengan Blogspot Anda mendapatkan hosting gratis selamanya dari Google. Tema ini sudah disesuaikan agar artikel yang Anda tulis di Blogger tampil secara otomatis dengan rapi, mendukung SEO, dan sangat cepat dimuat.
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Specs */}
          {activeTab === 'specs' && (
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 h-[55vh] overflow-y-auto space-y-6">
              <h4 className="text-lg font-extrabold text-[#102A43] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Fitur &amp; Spesifikasi Tema Blogspot</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="font-bold text-[#102A43]">Terintegrasi Native Blogspot</div>
                  <ul className="space-y-1 text-slate-600 text-xs">
                    <li>&bull; Standar XML Layouts v3 &amp; Widgets v2</li>
                    <li>&bull; Bisa langsung buat Artikel (Posting) dari dashboard</li>
                    <li>&bull; Loop artikel otomatis tergenerasi</li>
                    <li>&bull; Mendukung Komentar bawaan Blogger</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="font-bold text-[#102A43]">UI/UX Profesional &amp; Bersih</div>
                  <ul className="space-y-1 text-slate-600 text-xs">
                    <li>&bull; Identitas merek DATAVORA (Navy &amp; Gold)</li>
                    <li>&bull; Tipografi bersih menggunakan Plus Jakarta Sans</li>
                    <li>&bull; Responsive Mobile, Tablet &amp; Desktop</li>
                    <li>&bull; Navigasi Statis siap modifikasi</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="font-bold text-[#102A43]">Optimasi SEO (Blogger Built-in)</div>
                  <ul className="space-y-1 text-slate-600 text-xs">
                    <li>&bull; Pengaturan Tag Meta Header otomatis</li>
                    <li>&bull; Permalink SEO friendly dari Blogspot</li>
                    <li>&bull; Breadcrumbs otomatis (jika diaktifkan)</li>
                    <li>&bull; Loading cepat karena hosting Google (gratis)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="font-bold text-[#102A43]">Keamanan &amp; Kemudahan</div>
                  <ul className="space-y-1 text-slate-600 text-xs">
                    <li>&bull; Bebas dari malware plugin (100% Native)</li>
                    <li>&bull; Tidak butuh server / hosting tambahan</li>
                    <li>&bull; Backup mudah hanya dengan ekspor tema XML</li>
                    <li>&bull; Gratis SSL (https://) dari Google Blogspot</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-slate-600">
            Berkas siap pasang: <code className="bg-slate-200 px-1.5 py-0.5 rounded font-bold text-slate-800">datavora-indonesia-blogspot-theme-v1.0.0.xml</code>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl font-bold text-slate-600 hover:bg-slate-200 transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={handleDownloadXml}
              disabled={downloading}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-[#FF8A65] via-[#FF5722] to-[#E64A19] hover:brightness-105 shadow-md shadow-orange-900/20 active:scale-95 transition-all disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Mengunduh...' : 'Unduh XML Sekarang'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

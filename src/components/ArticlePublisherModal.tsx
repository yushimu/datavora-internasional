import React, { useState } from 'react';
import { BlogPost } from '../types';
import { 
  PenTool, 
  X, 
  Plus, 
  Trash2, 
  Check, 
  Sparkles, 
  Eye, 
  FileText, 
  Copy,
  BookOpen
} from 'lucide-react';

interface ArticlePublisherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPublish: (newPost: BlogPost) => void;
}

export const ArticlePublisherModal: React.FC<ArticlePublisherModalProps> = ({
  isOpen,
  onClose,
  onPublish,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Data Management');
  const [author, setAuthor] = useState('DATAVORA Editorial');
  const [excerpt, setExcerpt] = useState('');
  const [contentParagraphs, setContentParagraphs] = useState<string[]>([
    'Tulis paragraf pembuka artikel Anda di sini mengenai tantangan atau solusi data...',
    'Jelaskan analisis mendalam atau metode teknis yang diterapkan...',
  ]);
  const [keyTakeaways, setKeyTakeaways] = useState<string[]>([
    'Poin utama 1 yang dapat segera diaplikasikan.',
    'Poin utama 2 mengenai efisiensi alur kerja bisnis.',
  ]);
  const [previewMode, setPreviewMode] = useState(false);
  const [copiedWp, setCopiedWp] = useState(false);

  if (!isOpen) return null;

  const categories = [
    'Data Management',
    'Spreadsheet Tips',
    'Data Cleaning & Verification',
    'Business Intelligence',
    'Digital Transformation',
    'Business Problem Solving',
    'Opini & Riset Data'
  ];

  const handleAddParagraph = () => {
    setContentParagraphs([...contentParagraphs, '']);
  };

  const handleUpdateParagraph = (index: number, val: string) => {
    const updated = [...contentParagraphs];
    updated[index] = val;
    setContentParagraphs(updated);
  };

  const handleRemoveParagraph = (index: number) => {
    if (contentParagraphs.length <= 1) return;
    setContentParagraphs(contentParagraphs.filter((_, i) => i !== index));
  };

  const handleAddTakeaway = () => {
    setKeyTakeaways([...keyTakeaways, '']);
  };

  const handleUpdateTakeaway = (index: number, val: string) => {
    const updated = [...keyTakeaways];
    updated[index] = val;
    setKeyTakeaways(updated);
  };

  const handleRemoveTakeaway = (index: number) => {
    if (keyTakeaways.length <= 1) return;
    setKeyTakeaways(keyTakeaways.filter((_, i) => i !== index));
  };

  // Estimate reading time
  const totalWords = contentParagraphs.join(' ').split(/\s+/).length;
  const estimatedMins = Math.max(1, Math.ceil(totalWords / 160));
  const readTimeStr = `${estimatedMins} Menit Baca`;

  const handleSaveAndPublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const formattedDate = new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date());

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const newPost: BlogPost = {
      id: `custom-${Date.now()}`,
      slug: slug || `artikel-${Date.now()}`,
      title: title.trim(),
      category,
      author: author.trim() || 'DATAVORA Contributor',
      readTime: readTimeStr,
      publishDate: formattedDate,
      excerpt: excerpt.trim() || contentParagraphs[0]?.slice(0, 140) + '...',
      content: contentParagraphs.filter(p => p.trim().length > 0),
      keyTakeaways: keyTakeaways.filter(k => k.trim().length > 0),
      isUserCreated: true,
    };

    onPublish(newPost);
    onClose();
  };

  // WordPress Gutenberg Block Format Generator
  const generateWpGutenbergCode = () => {
    const pBlocks = contentParagraphs
      .filter(p => p.trim())
      .map(p => `<!-- wp:paragraph -->\n<p>${p.trim()}</p>\n<!-- /wp:paragraph -->`)
      .join('\n\n');

    const listItems = keyTakeaways
      .filter(k => k.trim())
      .map(k => `<li>${k.trim()}</li>`)
      .join('\n');

    return `<!-- wp:heading {"level":1} -->
<h1>${title}</h1>
<!-- /wp:heading -->

${pBlocks}

<!-- wp:group {"style":{"color":{"background":"#FAF6ED"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group has-background" style="background-color:#FAF6ED;padding:1.5rem;border-radius:12px;border-left:4px solid #C59B27;">
<!-- wp:heading {"level":4} -->
<h4>Poin Utama Pembelajaran:</h4>
<!-- /wp:heading -->
<!-- wp:list -->
<ul>
${listItems}
</ul>
<!-- /wp:list -->
</div>
<!-- /wp:group -->`;
  };

  const handleCopyWpFormat = () => {
    navigator.clipboard.writeText(generateWpGutenbergCode());
    setCopiedWp(true);
    setTimeout(() => setCopiedWp(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-amber-300/40 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-4 sm:p-5 flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E6C564] to-[#C59B27] text-slate-950 flex items-center justify-center font-bold shadow-md">
              <PenTool className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white flex items-center gap-2">
                <span>Tulis &amp; Terbitkan Artikel Baru</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-500/40">
                  Live Post Editor
                </span>
              </h3>
              <p className="text-[11px] text-slate-300">
                Artikel akan langsung muncul di halaman wawasan DATAVORA dan tersimpan di sistem browser Anda.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPreviewMode(!previewMode)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-amber-300 bg-slate-800/80 hover:bg-slate-800 border border-amber-500/30 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{previewMode ? 'Mode Edit' : 'Pratinjau'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FAF9F6]">
          {!previewMode ? (
            <form id="article-form" onSubmit={handleSaveAndPublish} className="space-y-4">
              
              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                  Judul Artikel *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Contoh: Mengoptimalkan Rekonsiliasi Kas Menggunakan Skrip Google Sheets"
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27] bg-white shadow-sm"
                />
              </div>

              {/* Category, Author, and Estimated Read */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                    Kategori Artikel *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27] bg-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                    Nama Penulis / Kontributor
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Contoh: Tim DATAVORA / Nama Anda"
                    className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27] bg-white"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1">
                  Ringkasan Artikel (Excerpt)
                </label>
                <textarea
                  rows={2}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Ringkasan 1-2 kalimat pengantar yang akan tampil pada kartu artikel di beranda..."
                  className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27] bg-white"
                />
              </div>

              {/* Multi Paragraph Content */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                    Paragraf Konten ({contentParagraphs.length} Paragraf) *
                  </label>
                  <button
                    type="button"
                    onClick={handleAddParagraph}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#94721C] hover:text-[#C59B27]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Tambah Paragraf</span>
                  </button>
                </div>

                {contentParagraphs.map((para, idx) => (
                  <div key={idx} className="flex gap-2 items-start">
                    <span className="text-[11px] font-mono text-slate-400 mt-2.5 w-5 text-right flex-shrink-0">
                      #{idx + 1}
                    </span>
                    <textarea
                      rows={3}
                      value={para}
                      onChange={(e) => handleUpdateParagraph(idx, e.target.value)}
                      placeholder={`Paragraf ${idx + 1}...`}
                      className="flex-1 px-3 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27] bg-white"
                    />
                    {contentParagraphs.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveParagraph(idx)}
                        className="p-2 text-slate-400 hover:text-rose-600 transition-colors mt-1"
                        title="Hapus paragraf ini"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                    Poin Kesimpulan / Key Takeaways ({keyTakeaways.length})
                  </label>
                  <button
                    type="button"
                    onClick={handleAddTakeaway}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#94721C] hover:text-[#C59B27]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Tambah Poin</span>
                  </button>
                </div>

                {keyTakeaways.map((point, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 ml-2" />
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => handleUpdateTakeaway(idx, e.target.value)}
                      placeholder={`Kesimpulan ${idx + 1}...`}
                      className="flex-1 px-3 py-1.5 rounded-lg text-xs sm:text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C59B27] bg-white"
                    />
                    {keyTakeaways.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveTakeaway(idx)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

            </form>
          ) : (
            /* Live Preview Mode */
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {category}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {readTimeStr}
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-[#0F172A] leading-snug">
                {title || 'Judul Artikel Anda'}
              </h2>

              <div className="text-xs text-slate-500 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span>Oleh: <strong>{author || 'DATAVORA'}</strong></span>
                <span>&bull;</span>
                <span>Baru Saja</span>
              </div>

              <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                {contentParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {keyTakeaways.length > 0 && (
                <div className="bg-[#FAF6ED] p-4 rounded-xl border-l-4 border-[#C59B27]">
                  <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2">
                    Poin Utama untuk Manajemen:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {keyTakeaways.map((k, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] mt-1.5 flex-shrink-0" />
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-100 p-3.5 sm:p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCopyWpFormat}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300"
              title="Salin kode HTML Gutenberg untuk dipaste di wp-admin WordPress"
            >
              {copiedWp ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Tersalin ke Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Salin Format Gutenberg WordPress</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl font-bold text-slate-600 hover:bg-slate-200"
            >
              Batal
            </button>

            <button
              type="submit"
              form="article-form"
              disabled={!title.trim()}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 transition-all ${
                title.trim()
                  ? 'bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] hover:brightness-105 shadow-md shadow-amber-500/20 active:scale-95'
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
              }`}
            >
              <PenTool className="w-4 h-4" />
              <span>Publikasikan Sekarang</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { BlogPost } from '../types';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  PenTool,
  Trash2,
  Sparkles,
  Share2
} from 'lucide-react';

interface BlogSectionProps {
  posts: BlogPost[];
  onConsult: () => void;
  onDeleteUserPost?: (id: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  posts,
  onConsult,
  onDeleteUserPost,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const categories = [
    'Semua', 
    'Data Management', 
    'Spreadsheet Tips', 
    'Business Problem Solving', 
    'Digital Transformation',
    'Opini & Riset Data'
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'Semua' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="wawasan" className="py-12 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#C59B27]/40 text-[#94721C] text-xs font-bold uppercase tracking-wider mb-2.5">
              <BookOpen className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Wawasan &amp; Artikel Data</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Kanal Pengetahuan &amp; Solusi Data Bisnis
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
              Kumpulan artikel edukatif, panduan optimasi spreadsheet, serta catatan teknis dari praktisi dan kontributor DATAVORA INDONESIA.
            </p>
          </div>

        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-3.5 bg-[#FAF6ED] p-3 sm:p-4 rounded-2xl border border-[#C59B27]/25">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#94721C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari topik atau kata kunci artikel..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white border border-[#C59B27]/30 focus:outline-none focus:ring-2 focus:ring-[#C59B27] placeholder:text-slate-400"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-start md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0F172A] text-amber-300 shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-white/80 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#C59B27] p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-[#94721C] bg-[#FAF6ED] px-2.5 py-0.5 rounded-full border border-[#C59B27]/30">
                      {post.category}
                    </span>

                    {post.isUserCreated && (
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Artikel Anda
                      </span>
                    )}

                    <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    className="text-base sm:text-lg font-bold text-[#0F172A] mb-2 leading-snug group-hover:text-[#94721C] transition-colors cursor-pointer"
                    onClick={() => setReadingPost(post)}
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.publishDate}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {post.isUserCreated && onDeleteUserPost && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (confirm('Hapus artikel yang Anda buat ini?')) {
                            onDeleteUserPost(post.id);
                          }
                        }}
                        className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                        title="Hapus artikel ini"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setReadingPost(post)}
                      className="inline-flex items-center gap-1 font-bold text-[#94721C] hover:text-[#C59B27]"
                    >
                      <span>Baca</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-600 text-sm">
              Tidak ditemukan artikel untuk kriteria pencarian Anda.
            </p>
          </div>
        )}

      </div>

      {/* Full Article Reader Modal (Mobile-Optimized) */}
      {readingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-2xl border border-amber-300/40 relative">
            
            <button
              onClick={() => setReadingPost(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-xs font-bold text-[#94721C] bg-[#FAF6ED] px-2.5 py-0.5 rounded-md border border-[#C59B27]/40">
                {readingPost.category}
              </span>
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {readingPost.readTime}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-3 leading-snug">
              {readingPost.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-slate-500 pb-3 mb-5 border-b border-slate-100">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>{readingPost.author}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{readingPost.publishDate}</span>
              </span>
            </div>

            {/* Article Content */}
            <div className="space-y-3.5 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
              {readingPost.content.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* Key Takeaways */}
            {readingPost.keyTakeaways && readingPost.keyTakeaways.length > 0 && (
              <div className="bg-[#FAF6ED] p-4 sm:p-5 rounded-xl border-l-4 border-[#C59B27] mb-6">
                <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                  <span>Poin Utama untuk Manajemen:</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {readingPost.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] mt-1.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setReadingPost(null)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Tutup Jendela
              </button>

              <button
                type="button"
                onClick={() => {
                  setReadingPost(null);
                  onConsult();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-[#E6C564] via-[#D4AF37] to-[#B8860B] shadow-sm hover:brightness-105"
              >
                <span>Konsultasikan Topik Ini Bersama DATAVORA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

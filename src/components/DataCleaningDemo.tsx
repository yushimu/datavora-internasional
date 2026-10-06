import React, { useState } from 'react';
import { Sparkles, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

export const DataCleaningDemo: React.FC = () => {
  const [viewState, setViewState] = useState<'clean' | 'raw'>('clean');

  const rawRows = [
    {
      id: '01',
      name: 'pt. CAHAYA MAKMUR abadi',
      contact: '0812-88991122',
      city: 'JKT SELATAN',
      status: 'Duplikat (2x di baris 04)',
      statusType: 'error',
    },
    {
      id: '02',
      name: 'budi santoso (toko berkah)',
      contact: '08571234567',
      city: 'Bandung Barat',
      status: 'Format Huruf Tidak Rapi',
      statusType: 'warning',
    },
    {
      id: '03',
      name: 'CV. Sumber Rejeki',
      contact: '+62 811 2233 445',
      city: 'Sby',
      status: 'Singkatan Kota Tidak Baku',
      statusType: 'warning',
    },
    {
      id: '04',
      name: 'PT Cahaya Makmur Abadi',
      contact: '081288991122',
      city: 'Jakarta Selatan',
      status: 'Rekaman Kembar Identitas',
      statusType: 'error',
    },
  ];

  const cleanRows = [
    {
      id: '01',
      name: 'PT Cahaya Makmur Abadi',
      contact: '+62 812-8899-1122',
      city: 'Kota Jakarta Selatan, DKI Jakarta',
      status: 'Terverifikasi & De-duplikasi',
      statusType: 'success',
    },
    {
      id: '02',
      name: 'Budi Santoso - Toko Berkah',
      contact: '+62 857-1234-5670',
      city: 'Kabupaten Bandung Barat, Jawa Barat',
      status: 'Nama & Nomor Tervalidasi',
      statusType: 'success',
    },
    {
      id: '03',
      name: 'CV Sumber Rejeki',
      contact: '+62 811-2233-4450',
      city: 'Kota Surabaya, Jawa Timur',
      status: 'Nama Wilayah Standar BPS',
      statusType: 'success',
    },
  ];

  return (
    <div className="bg-[#0F172A] text-white rounded-2xl p-4 sm:p-7 shadow-xl border border-[#C59B27]/30 my-8 sm:my-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 pb-5 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-[#C59B27]/40 text-[#E6C564] text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E6C564]" />
            <span>Simulasi Nyata Data Cleaning</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
            Perbandingan Kualitas Dataset: Sebelum vs Sesudah
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Lihat bagaimana pipeline otomatis DATAVORA mengeliminasi duplikasi dan menstandarisasi format data bisnis Anda.
          </p>
        </div>

        {/* State Toggles */}
        <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
          <button
            type="button"
            onClick={() => setViewState('raw')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewState === 'raw'
                ? 'bg-rose-700 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Data Mentah (Kotor)
          </button>
          <button
            type="button"
            onClick={() => setViewState('clean')}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewState === 'clean'
                ? 'bg-gradient-to-r from-[#E6C564] to-[#C59B27] text-slate-950 shadow-md font-extrabold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Hasil Bersih DATAVORA
          </button>
        </div>
      </div>

      {/* Dataset Table Display with Mobile Scroll Wrapper */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
        <table className="w-full text-left text-xs min-w-[540px]">
          <thead className="bg-slate-900 text-slate-300 border-b border-slate-800 text-[10px] uppercase tracking-wider font-mono">
            <tr>
              <th className="py-2.5 px-3">No</th>
              <th className="py-2.5 px-3">Nama Entitas / Klien</th>
              <th className="py-2.5 px-3">Kontak Telepon</th>
              <th className="py-2.5 px-3">Wilayah / Kota</th>
              <th className="py-2.5 px-3 text-right">Status Kualitas</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {viewState === 'raw'
              ? rawRows.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-2.5 px-3 font-mono text-slate-400">{row.id}</td>
                    <td className="py-2.5 px-3 font-medium text-slate-200">{row.name}</td>
                    <td className="py-2.5 px-3 font-mono text-slate-300">{row.contact}</td>
                    <td className="py-2.5 px-3 text-slate-300">{row.city}</td>
                    <td className="py-2.5 px-3 text-right">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-950/80 text-rose-300 border border-rose-800">
                        <AlertCircle className="w-3 h-3 text-rose-400" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))
              : cleanRows.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-2.5 px-3 font-mono text-[#E6C564] font-bold">{row.id}</td>
                    <td className="py-2.5 px-3 font-semibold text-white">{row.name}</td>
                    <td className="py-2.5 px-3 font-mono text-[#E6C564] font-semibold">{row.contact}</td>
                    <td className="py-2.5 px-3 text-slate-200">{row.city}</td>
                    <td className="py-2.5 px-3 text-right">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      {/* Footer Notes */}
      <div className="mt-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 gap-2 pt-3 border-t border-slate-800">
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
          <ShieldCheck className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
          <span>
            {viewState === 'clean' 
              ? 'Hasil: 100% Format Baku, 0% Baris Kembar, Siap Integrasi CRM/Database'
              : 'Status Data: Rentan Salah Kirim Pesan & Duplikasi Transaksi Kas'}
          </span>
        </div>
        <span className="font-mono text-slate-400 text-[10px]">
          Fuzzy Match + Regex Validation
        </span>
      </div>
    </div>
  );
};

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  imageUrl: string;
  summary: string;
  keyMetrics: {
    label: string;
    sublabel: string;
  }[];
  problems: {
    title: string;
    desc: string;
  }[];
  solutions: {
    title: string;
    desc: string;
  }[];
  tools: {
    name: string;
    role: string;
    badgeColor: string;
  }[];
  features: string[];
  tags: string[];
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: 'finman',
    title: 'Finman',
    subtitle: 'Executive Financial Management & Cashflow Dashboard',
    category: 'Financial Intelligence & Management System',
    badge: 'Production Project',
    imageUrl: '/portofolio-project/images/Finman.JPG',
    summary: 'Sistem dasbor analitik dan manajemen keuangan komprehensif yang dirancang untuk memantau omset, profitabilitas riil, pos beban operasional (OPEX), hingga kesehatan struktur modal dan pelacakan hutang perusahaan secara real-time.',
    keyMetrics: [
      { label: 'Omset & Revenue', sublabel: 'Pelacakan arus kas masuk secara berkala & tren penjualan' },
      { label: 'Real Profit Margin', sublabel: 'Kalkulasi otomatis laba kotor & margin laba bersih' },
      { label: 'Beban Operasional', sublabel: 'Audit pos OPEX terinci untuk cegah kebocoran biaya' },
      { label: 'Modal & Hutang', sublabel: 'Monitoring kewajiban liabilitas & rasio modal kerja' }
    ],
    problems: [
      {
        title: 'Pencatatan Keuangan Tersebar & Rawan Human-Error',
        desc: 'Banyak perusahaan masih mengandalkan puluhan spreadsheet manual yang terfragmentasi, menyebabkan inkonsistensi data antar divisi dan tingginya risiko salah hitung.'
      },
      {
        title: 'Keterlambatan Mengetahui Laba/Rugi Riil (Profit Delay)',
        desc: 'Pimpinan bisnis sering kali baru mengetahui laba riil di akhir bulan, sehingga kehilangan momentum strategis saat menghadapi penurunan margin atau pembengkakan biaya.'
      },
      {
        title: 'Beban Operasional (OPEX) Kerap Mengalami Kebocoran',
        desc: 'Tanpa visualisasi kategori biaya yang transparan, pengeluaran-pengeluaran kecil yang berulang sering luput dari audit dan menggerus keuntungan bisnis.'
      },
      {
        title: 'Struktur Modal & Jatuh Tempo Hutang Tidak Terkontrol',
        desc: 'Kurangnya sistem pengingat dan pemetaan rasio hutang terhadap modal berisiko membahayakan likuiditas dan stabilitas arus kas operasional.'
      }
    ],
    solutions: [
      {
        title: 'Single Source of Financial Truth (Konsolidasi Terpadu)',
        desc: 'Menyatukan seluruh data transaksi keuangan ke dalam satu basis data terstruktur, menjamin keakuratan angka omset dan saldo tanpa manipulasi manual.'
      },
      {
        title: 'Kalkulasi Profitabilitas Otomatis & Real-Time',
        desc: 'Finman secara instan menghitung margin laba kotor dan laba bersih dari setiap transaksi masuk, memberikan visibilitas finansial yang tajam kapan pun dibutuhkan.'
      },
      {
        title: 'Breakdown & Pelacakan Beban Operasional Cerdas',
        desc: 'Setiap pengeluaran dipetakan ke dalam kategori OPEX terdefinisi dengan grafik perbandingan periode, memudahkan evaluasi efisiensi biaya.'
      },
      {
        title: 'Monitoring Modal, Likuiditas, & Jadwal Hutang',
        desc: 'Dilengkapi pelacak liabilitas aktif, pengingat jatuh tempo, dan kalkulator rasio modal untuk menjaga kesehatan finansial jangka panjang.'
      }
    ],
    tools: [
      {
        name: 'Supabase',
        role: 'Relational Database (PostgreSQL), Realtime Data, & Row-Level Security',
        badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30'
      },
      {
        name: 'GitHub',
        role: 'Version Control, Collaborative Repository, & Continuous Integration Pipeline',
        badgeColor: 'bg-slate-800/10 text-slate-800 border-slate-700/30'
      },
      {
        name: 'Vercel',
        role: 'Modern Cloud Edge Deployment, High-Performance Hosting, & Global CDN',
        badgeColor: 'bg-blue-500/10 text-blue-700 border-blue-500/30'
      }
    ],
    features: [
      'Dashboard Finansial Interaktif & Responsif',
      'Pelacakan Real-time Omset, Profit, & Beban Operasional',
      'Manajemen Struktur Modal & Buku Hutang-Piutang',
      'Filter Rentang Waktu (Harian, Mingguan, Bulanan, Tahunan)',
      'Arsitektur Data Andal dengan Database PostgreSQL Supabase',
      'Deployment Cepat & Stabil via Cloud Serverless Vercel'
    ],
    tags: ['Dashboard Keuangan', 'Financial Management', 'Supabase', 'GitHub', 'Vercel', 'PostgreSQL', 'Business Intelligence']
  }
];

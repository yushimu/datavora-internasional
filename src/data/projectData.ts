export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  systemTag?: string;
  mockupUrl?: string;
  mockupBadge?: string;
  imageUrl: string;
  imageCaption?: string;
  summary: string;
  keyMetrics: {
    label: string;
    sublabel: string;
    iconType?: 'trending' | 'dollar' | 'pie' | 'scale' | 'matrix' | 'calendar' | 'chart' | 'check';
  }[];
  problemsHeading?: string;
  problems: {
    title: string;
    desc: string;
  }[];
  solutionsHeading?: string;
  solutions: {
    title: string;
    desc: string;
  }[];
  tools: {
    name: string;
    role: string;
    tagBadge?: string;
    desc?: string;
    badgeColor?: string;
    iconType?: 'supabase' | 'github' | 'vercel' | 'spreadsheet' | 'chart' | 'database' | 'automation';
  }[];
  features: string[];
  tags: string[];
  consultationText?: string;
}

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: 'finman',
    title: 'Finman',
    subtitle: 'Executive Financial Management & Cashflow Dashboard',
    category: 'Financial Intelligence & Management System',
    badge: 'Production Project',
    systemTag: 'Data & Financial Management System',
    mockupUrl: 'finman.internal/executive-dashboard',
    mockupBadge: 'Live System Snapshot',
    imageUrl: '/portofolio-project/images/Finman.JPG',
    imageCaption: 'Antarmuka Dasbor Finman: Ringkasan Omset, Perhitungan Laba/Rugi, Evaluasi Beban Operasional, dan Struktur Modal & Hutang',
    summary: 'Sistem dasbor analitik dan manajemen keuangan komprehensif yang dirancang untuk memantau omset, profitabilitas riil, pos beban operasional (OPEX), hingga kesehatan struktur modal dan pelacakan hutang perusahaan secara real-time.',
    keyMetrics: [
      { label: 'Omset & Revenue', sublabel: 'Pelacakan arus kas masuk secara berkala & tren penjualan', iconType: 'trending' },
      { label: 'Real Profit Margin', sublabel: 'Kalkulasi otomatis laba kotor & margin laba bersih', iconType: 'dollar' },
      { label: 'Beban Operasional', sublabel: 'Audit pos OPEX terinci untuk cegah kebocoran biaya', iconType: 'pie' },
      { label: 'Modal & Hutang', sublabel: 'Monitoring kewajiban liabilitas & rasio modal kerja', iconType: 'scale' }
    ],
    problemsHeading: 'Kendala Finansial yang Dihadapi Perusahaan:',
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
    solutionsHeading: 'Solusi yang Diberikan Melalui Finman:',
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
        tagBadge: 'Database & Auth',
        desc: 'Penyimpanan basis data relasional PostgreSQL, otentikasi aman, sinkronisasi data real-time, dan Row-Level Security.',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        iconType: 'supabase'
      },
      {
        name: 'GitHub',
        role: 'Version Control, Collaborative Repository, & Continuous Integration Pipeline',
        tagBadge: 'Version Control',
        desc: 'Pengelolaan source code, version tracking, automasi pipeline deployment, dan kolaborasi repositori yang aman.',
        badgeColor: 'bg-slate-200 text-slate-800',
        iconType: 'github'
      },
      {
        name: 'Vercel',
        role: 'Modern Cloud Edge Deployment, High-Performance Hosting, & Global CDN',
        tagBadge: 'Cloud Hosting',
        desc: 'Deployment cloud edge global berkecepatan tinggi, serverless architecture, dan uptime andal 99.9%.',
        badgeColor: 'bg-blue-100 text-blue-800',
        iconType: 'vercel'
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
    tags: ['Dashboard Keuangan', 'Financial Management', 'Supabase', 'GitHub', 'Vercel', 'PostgreSQL', 'Business Intelligence'],
    consultationText: 'Konsultasi Solusi Finansial'
  },
  {
    id: 'task-tracker',
    title: 'Task Tracker',
    subtitle: 'Eisenhower Matrix & Automated Priority Management System',
    category: 'Productivity & Task Management System',
    badge: 'Spreadsheet Automation',
    systemTag: 'Spreadsheet & Productivity System',
    mockupUrl: 'spreadsheet.workspace/task-tracker-eisenhower',
    mockupBadge: 'Live Spreadsheet Dashboard',
    imageUrl: '/portofolio-project/images/Task Tracker.JPG',
    imageCaption: 'Antarmuka Task Tracker: Matriks Keputusan Eisenhower (Do Now, Schedule, Delegate, Delete), Donut Chart Progres per Kuadran, Pelacak Deadline Dinamis (Past Due & H-3), dan Distribusi Kategori Tugas.',
    summary: 'Sistem pelacak tugas dan manajemen produktivitas berbasis Spreadsheet yang mengintegrasikan metodologi Matriks Eisenhower (Urgent vs. Important). Dilengkapi visualisasi analitik real-time, ringkasan deadline otomatis (Past Due & H-3 alert), bar chart status keputusan, serta pembagian kategori tugas (Work, School, Home, Healthy, Friends) dengan format bersyarat pencoretan otomatis saat tugas tuntas.',
    keyMetrics: [
      { label: 'Eisenhower Decision Matrix', sublabel: 'Klasifikasi otomatis 4 kuadran: Do Now, Schedule, Delegate, & Delete', iconType: 'matrix' },
      { label: 'Deteksi Deadline (Past Due & H-3)', sublabel: 'Formula tanggal dinamis TODAY() untuk cegah keterlambatan tugas kritis', iconType: 'calendar' },
      { label: 'Donut & Bar Progres Real-Time', sublabel: 'Visualisasi persentase penyelesaian (%) per kuadran & sebaran status', iconType: 'chart' },
      { label: 'Kategorisasi & Strikethrough', sublabel: 'Pemilahan 5 domain (Work, School, Home, Healthy, Friends) & format bersyarat', iconType: 'check' }
    ],
    problemsHeading: 'Kendala Manajemen Prioritas & Produktivitas:',
    problems: [
      {
        title: 'Terjebak dalam "Urgency Trap" (Ilusi Urgensi)',
        desc: 'Sering kali kita menghabiskan energi untuk mengerjakan hal-hal yang mendesak namun sepele, sementara tugas penting berdampak jangka panjang justru terus tertunda karena tidak adanya pemilahan kuadran prioritas yang jelas.'
      },
      {
        title: 'To-Do List Konvensional Menyebabkan Cognitive Overload',
        desc: 'Daftar tugas manual tanpa filter keputusan membuat pikiran overwhelmed saat melihat tumpukan pekerjaan, memicu prokrastinasi dan kebingungan menentukan tugas mana yang harus diselesaikan terlebih dahulu.'
      },
      {
        title: 'Tenggat Waktu Kerap Terlewat (Past Due Blindspot)',
        desc: 'Tanpa kalkulator jatuh tempo otomatis, tugas-tugas yang telah melewati deadline atau yang mendekati batas waktu krusial (H-3) sering luput dari perhatian hingga menimbulkan konsekuensi merugikan.'
      },
      {
        title: 'Ketimpangan Alokasi Waktu Antar Aspek Kehidupan',
        desc: 'Ketiadaan pengelompokan kategori membuat pengguna tidak menyadari ketimpangan beban—misalnya fokus hanya terserap ke pekerjaan kantor (Work), sementara aspek kesehatan (Healthy), pendidikan, atau keluarga (Home) terabaikan.'
      }
    ],
    solutionsHeading: 'Solusi yang Diberikan Melalui Task Tracker:',
    solutions: [
      {
        title: 'Otomatisasi Logika Matriks Eisenhower (4 Kuadran Aksi)',
        desc: 'Cukup menentukan status Urgent? (Yes/No) dan Important? (Yes/No), Spreadsheet secara instan memformulasikan keputusan aksi: Do Now, Schedule, Delegate, atau Delete secara akurat tanpa keraguan manual.'
      },
      {
        title: 'Sistem Pemantauan Deadline Dinamis (Alert Past Due & H-3)',
        desc: 'Menggunakan formula cerdas berbasis tanggal sistem hari ini (TODAY()) untuk mendeteksi jumlah tugas terlambat (Past Due) dan tugas berjarak ≤ 3 hari (H-3), memungkinkan antisipasi proaktif sebelum deadline tiba.'
      },
      {
        title: 'Dasbor Visualisasi Donut Progress & Stacked Status Bar',
        desc: 'Dilengkapi 4 donut chart progress penyelesaian tiap kuadran (0% - 100%) dan grafik batang status (Not Start, In Progress, On Hold, Complete), memberikan gambaran performa kerja secara instan dalam satu layar.'
      },
      {
        title: 'Kategorisasi Multi-Domain & Strikethrough Otomatis',
        desc: 'Mengelompokkan tugas ke dalam 5 domain kehidupan (Work, School, Home, Healthy, Friends) dengan donat distribusi visual, serta format bersyarat cerdas yang mencoret otomatis baris tugas yang telah berstatus "Complete".'
      }
    ],
    tools: [
      {
        name: 'Spreadsheet',
        role: 'Advanced Dynamic Formulas, Decision Matrix Logic, & Data Modeling',
        tagBadge: 'Formula Engine',
        desc: 'Pemanfaatan formula logika bersarang (IF, AND, COUNTIF, TODAY, FILTER) untuk kalkulasi otomatis kuadran keputusan dan rekap metrik real-time.',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        iconType: 'spreadsheet'
      },
      {
        name: 'Interactive Dashboard & Charts',
        role: 'Visual Donut Progress Rings, Stacked Bar Charts, & Multi-Category Analytics',
        tagBadge: 'Data Visualization',
        desc: 'Visualisasi analitik berupa 4 ring donut per kuadran, distribusi kategori 5 pilar kehidupan, serta stacked bar chart status pengerjaan tugas.',
        badgeColor: 'bg-amber-100 text-amber-800',
        iconType: 'chart'
      },
      {
        name: 'Conditional Formatting & UX Rules',
        role: 'Dynamic Row Highlighting, Strikethrough upon Completion, & Status Validation Dropdowns',
        tagBadge: 'UX & Automation',
        desc: 'Format bersyarat cerdas dengan efek coret (strikethrough) otomatis saat tugas tuntas, penanda warna kuadran, dan dropdown validasi data bebas salah ketik.',
        badgeColor: 'bg-blue-100 text-blue-800',
        iconType: 'automation'
      }
    ],
    features: [
      'Dasbor Matriks Eisenhower Otomatis (Do Now, Schedule, Delegate, Delete)',
      'Indikator Jatuh Tempo Dinamis (Past Due & Due Date H-3 Alert)',
      'Donut Chart Persentase Progres Tiap Kuadran Keputusan',
      'Stacked Bar Chart Sebaran Status (Not Start, In Progress, On Hold, Complete)',
      'Pemilahan 5 Domain Kategori (Work, School, Home, Healthy, Friends)',
      'Format Bersyarat Cerdas: Efek Coret (Strikethrough) Otomatis saat Tugas Selesai',
      'Dropdown Validasi Data untuk Konsistensi Status & Kategori',
      'Ringkasan Eksekutif Total Tugas, Tugas Selesai, dan Persentase Produktivitas Keseluruhan'
    ],
    tags: ['Spreadsheet', 'Task Tracker', 'Eisenhower Matrix', 'Google Sheets', 'Productivity System', 'Data Automation', 'Dashboard'],
    consultationText: 'Konsultasi Template Spreadsheet & Produktivitas'
  }
];

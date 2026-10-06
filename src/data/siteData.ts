import { ServiceItem, ProblemSolutionItem, PortfolioProject, BlogPost, AuditQuestion } from '../types';

export const COMPANY_INFO = {
  name: 'DATAVORA INDONESIA',
  legalName: 'PT DATAVORA SOLUSI NUSANTARA (Placeholder)',
  tagline: 'Turning Data Into Business Solutions',
  altTagline: 'Transforming Business Data Into Better Decisions',
  description: 'DATAVORA INDONESIA adalah perusahaan solusi data profesional yang membantu bisnis dan organisasi mentransformasi data menjadi informasi bisnis yang terstruktur, akurat, bernilai, dan siap dieksekusi.',
  mission: 'Membantu bisnis membuka potensi penuh data mereka melalui manajemen data yang akurat, analisis cerdas, otomatisasi alur kerja, dan solusi digital yang inovatif.',
  vision: 'Menjadi mitra utama bagi dunia usaha di Indonesia dalam mewujudkan ekosistem operasional berbasis data yang efisien, transparan, dan berdaya saing tinggi.',
  email: 'kontak@datavora.co.id',
  phone: '+62 812-XXXX-XXXX (Placeholder)',
  whatsappNumber: '6281234567890',
  address: 'Jakarta / Operasional Jarak Jauh Seluruh Indonesia',
  workHours: 'Senin - Jumat: 08:30 - 17:30 WIB',
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'data-entry',
    number: '01',
    title: 'Data Entry & Processing',
    tagline: 'Input data akurat dengan struktur terstandarisasi untuk kesiapan database bisnis.',
    shortDesc: 'Input data akurat dan terstruktur, digitalisasi arsip fisik, pemrosesan dokumen massal, serta penyiapan database yang siap diolah.',
    fullDesc: 'Layanan input data berskala mikro hingga korporat dengan kontrol kualitas bertingkat. Kami mentransformasi berkas formulir kertas, PDF pindaian, faktur, nota, dan catatan manual menjadi spreadsheet atau basis data relasional yang bersih, rapi, dan tervalidasi secara presisi.',
    deliverables: [
      'Master Database terstruktur (CSV, Excel, Google Sheets, PostgreSQL/MySQL dump)',
      'Digitalisasi dan ekstraksi dokumen fisik/PDF dengan verifikasi manual ganda',
      'Format data terstandarisasi (penyeragaman tanggal, mata uang, kode produk)',
      'Laporan log audit input data dan rasio verifikasi'
    ],
    toolsUsed: ['Google Sheets', 'MS Excel', 'OCR Assisted Pipeline', 'Custom Entry Interfaces', 'Data Validation Scripts'],
    idealFor: ['Bisnis ritel dengan ribuan nota harian', 'Lembaga pendidikan dengan ribuan arsip siswa', 'Distributor logistik & inventori gudang'],
    iconName: 'FileInput'
  },
  {
    id: 'data-cleaning',
    number: '02',
    title: 'Data Cleaning & Correction',
    tagline: 'Pembersihan anomali, eliminasi duplikasi, dan perbaikan inkonsistensi dataset.',
    shortDesc: 'Mengidentifikasi duplikat, memperbaiki inkonsistensi format, menstandarkan penulisan, dan meningkatkan akurasi data hingga level tertinggi.',
    fullDesc: 'Dataset kotor adalah penyebab utama kegagalan keputusan bisnis. Layanan Data Cleaning DATAVORA mendeteksi rekaman ganda menggunakan algoritma pencocokan cerdas, memperbaiki kesalahan ketik nama pelanggan/wilayah, mengoreksi format nomor kontak, dan merekonstruksi kolom yang rusak.',
    deliverables: [
      'Dataset master yang telah dide-duplikasi (0% duplikasi identitas)',
      'Standarisasi nomor telepon (+62 / format baku eceran)',
      'Standarisasi alamat, kecamatan, kota, dan kode pos standar nasional',
      'Log rekonsiliasi anomali dan ringkasan perbaikan data'
    ],
    toolsUsed: ['Python (Pandas, OpenRefine)', 'Power Query', 'Regular Expressions (Regex)', 'Fuzzy Matching Engine'],
    idealFor: ['CRM dengan data pelanggan ganda', 'Database vendor lama yang tidak konsisten', 'Konsolidasi data merger perusahaan'],
    iconName: 'Sparkles'
  },
  {
    id: 'data-analysis',
    number: '03',
    title: 'Data Analysis & Reporting',
    tagline: 'Mengubah angka mentah menjadi insight visual interaktif dan laporan eksekutif.',
    shortDesc: 'Mentransformasi data mentah menjadi wawasan bermakna, laporan analitis berkala, business dashboard interaktif, dan informasi yang siap ditindaklanjuti.',
    fullDesc: 'Kami tidak sekadar menampilkan grafik warna-warni; kami menerjemahkan tren penjualan, margin laba per kanal, churn pelanggan, dan efisiensi biaya menjadi kesimpulan strategis yang langsung dapat dibaca oleh direksi dan manajer operasional.',
    deliverables: [
      'Interactive Executive Dashboard (Looker Studio / Power BI / Tableau)',
      'Laporan analitis bulanan/kuartalan dengan ringkasan eksekutif (Executive Summary)',
      'Analisis tren musiman, kohort pelanggan, dan segmentasi produk',
      'Peringatan anomali performa bisnis (Threshold Alerts)'
    ],
    toolsUsed: ['Google Looker Studio', 'Microsoft Power BI', 'Google BigQuery / SQL', 'Metabase'],
    idealFor: ['Manajemen eksekutif butuh pantauan KPI harian', 'Tim marketing butuh evaluasi CAC & LTV', 'Manajer operasional memantau target cabang'],
    iconName: 'BarChart3'
  },
  {
    id: 'data-management',
    number: '04',
    title: 'Data Management & Organization',
    tagline: 'Membangun arsitektur data internal yang aman, rapi, dan mudah diakses tim.',
    shortDesc: 'Membangun sistem dan struktur data terorganisir yang membuat informasi lebih mudah diakses, dipelihara, dan dikelola secara aman.',
    fullDesc: 'Hentikan kebiasaan menyimpan file dengan nama "final_revisi_v3_terbaru.xlsx". Kami menyusun tata kelola data (Data Governance) yang jelas: skema penamaan file terpusat, hierarki folder cloud, pembagian hak akses (role-based access), dan panduan pemeliharaan sistem.',
    deliverables: [
      'Standard Operating Procedure (SOP) Tata Kelola Data Perusahaan',
      'Struktur repositori data cloud tersentralisasi (Google Drive / OneDrive / Cloud Bucket)',
      'Manajemen hak akses pengguna (Role-Based Access Control)',
      'Prosedur pencadangan data berkala (Automated Backup & Archive Strategy)'
    ],
    toolsUsed: ['Google Workspace Admin', 'Cloud Storage Architectures', 'Version Control Systems', 'Notion/Confluence Documentation'],
    idealFor: ['Perusahaan dengan banyak cabang', 'Organisasi berkembang yang timnya sering salah versi file', 'Startup yang sedang menyiapkan audit kepatuhan'],
    iconName: 'Database'
  },
  {
    id: 'spreadsheet-automation',
    number: '05',
    title: 'Spreadsheet Automation',
    tagline: 'Otomatisasi alur kerja Excel & Google Sheets untuk efisiensi ratusan jam kerja.',
    shortDesc: 'Mengembangkan alur kerja otomatis menggunakan formula tingkat lanjut, Google Apps Script, VBA Macros, dan integrasi antar file kerja.',
    fullDesc: 'Pekerjaan rekap manual 4 jam per hari dapat diringkas menjadi satu klik dalam hitungan detik. Kami memprogram script otomatis yang menarik data otomatis dari formulir online, memperbarui laporan periodik, mengirim email rekap otomatis, dan menyinkronkan data antar spreadsheet.',
    deliverables: [
      'Template spreadsheet cerdas berbasis formula dinamis (LAMBDA, QUERY, INDEX/MATCH)',
      'Script otomatisasi kustom (Google Apps Script / Excel VBA)',
      'Otomatisasi pengiriman notifikasi/laporan via Email atau WhatsApp Gateway',
      'Dokumentasi teknis serta video panduan singkat operasional'
    ],
    toolsUsed: ['Google Apps Script (JavaScript)', 'Microsoft Excel VBA / Power Query', 'Google Sheets API', 'Webhook Integrations'],
    idealFor: ['Tim akuntansi & finance yang merekap transaksi berkala', 'Tim HR yang memproses absensi & payroll', 'Tim sales yang merekap target harian'],
    iconName: 'FileSpreadsheet'
  },
  {
    id: 'custom-application',
    number: '06',
    title: 'Custom Application Development',
    tagline: 'Aplikasi internal dan portal kerja kustom sesuai alur bisnis spesifik perusahaan.',
    shortDesc: 'Membuat aplikasi digital khusus dan internal business tools untuk meningkatkan efisiensi operasional dan menggantikan proses kertas.',
    fullDesc: 'Ketika spreadsheet sudah tidak lagi mampu menampung kompleksitas proses kerja Anda, kami membangun aplikasi web internal yang ringan, cepat, dan sesuai persis dengan Standard Operating Procedure (SOP) perusahaan Anda tanpa biaya lisensi bulanan yang memberatkan.',
    deliverables: [
      'Aplikasi Web Internal responsif (desktop, tablet, mobile)',
      'Basis data relasional terstruktur dengan proteksi keamanan tinggi',
      'Manajemen pengguna dengan multi-level otorisasi (Admin, Supervisor, Staff)',
      'Source code lengkap dan dokumentasi deployment'
    ],
    toolsUsed: ['React', 'TypeScript', 'Node.js / Express', 'PostgreSQL / SQLite', 'Tailwind CSS'],
    idealFor: ['Sistem pencatatan gudang & inventory khusus', 'Portal persetujuan pengadaan internal (Approval System)', 'Aplikasi pencatatan kunjungan lapangan'],
    iconName: 'Code'
  },
  {
    id: 'problem-solving',
    number: '07',
    title: 'Business Problem Solving',
    tagline: 'Konsultasi diagnostik membedah bottleneck operasional berbasis bukti angka.',
    shortDesc: 'Menganalisis tantangan operasional dan merancang solusi berbasis teknologi yang praktis, aplikatif, dan berbiaya efisien.',
    fullDesc: 'Banyak masalah bisnis tersembunyi di balik tumpukan laporan yang tidak sinkron. Kami duduk bersama manajemen Anda, membedah diagram alur bisnis, menemukan titik inefisiensi yang menyebabkan pemborosan biaya, dan memberikan rekomendasi solusi konkrit bertahap.',
    deliverables: [
      'Laporan Diagnostik Masalah Operasional & Data (Operational Audit Report)',
      'Rencana Aksi Perbaikan (Actionable Roadmap) 30-60-90 hari',
      'Analisis Cost-to-Impact per opsi solusi',
      'Pendampingan implementasi tahap awal'
    ],
    toolsUsed: ['Process Mapping', 'Root Cause Analysis (Fishbone/5 Whys)', 'Workflow Diagnostic Matrix'],
    idealFor: ['Pemilik bisnis yang merasa biaya operasional terus membengkak tanpa tahu penyebab pastinya', 'Direktur yang butuh pihak ketiga objektif'],
    iconName: 'Lightbulb'
  },
  {
    id: 'digital-transformation',
    number: '08',
    title: 'Digital Transformation',
    tagline: 'Pendampingan migrasi dari sistem manual ke ekosistem terintegrasi modern.',
    shortDesc: 'Membantu bisnis bermigrasi dari pencatatan manual yang rentan human error menuju sistem yang efisien, terintegrasi, dan terotomasi.',
    fullDesc: 'Transformasi digital bukan tentang membeli software mahal, melainkan membangun budaya kerja yang mengandalkan data akurat. Kami mendampingi tim Anda mulai dari pemetaan kebutuhan, seleksi alat, migrasi data lama, hingga pelatihan staf agar adaptasi berjalan lancar tanpa friksi.',
    deliverables: [
      'Blueprint Transformasi Digital Perusahaan',
      'Migrasi aman data historis ke platform baru tanpa kehilangan riwayat',
      'Modul pelatihan karyawan dalam Bahasa Indonesia yang mudah dipahami',
      'Masa evaluasi pasca-migrasi dan pendampingan hotline teknis'
    ],
    toolsUsed: ['Change Management Framework', 'ETL Data Migration Pipelines', 'Training Modules & Interactive SOPs'],
    idealFor: ['Bisnis keluarga (family business) yang ingin beralih ke manajemen profesional', 'Perusahaan tradisional yang ingin ekspansi digital'],
    iconName: 'RefreshCw'
  }
];

export const BUSINESS_PROBLEMS: ProblemSolutionItem[] = [
  {
    id: 'prob-disorganized-data',
    problemTitle: 'Data Bisnis Berserakan & Terfragmentasi',
    problemDesc: 'File kerja tersimpan di laptop masing-masing karyawan, pesan WhatsApp, dan berbagai folder drive tanpa standarisasi. Sulit mencari data transaksi 6 bulan lalu saat dibutuhkan segera.',
    impact: 'Waktu berharga terbuang hingga 8-12 jam per minggu hanya untuk mencari dan mencocokkan dokumen.',
    solutionTitle: 'Pusat Master Data Terintegrasi (Single Source of Truth)',
    solutionDesc: 'DATAVORA merancang skema repositori data terpadu dengan hak akses berbasis peran, konvensi penamaan seragam, dan skrip sinkronisasi harian.',
    keyBenefits: ['Data dapat diakses dalam hitungan detik', 'Mencegah kehilangan file krusial', 'Struktur folder terstandarisasi'],
    industry: 'Semua Industri & Korporasi'
  },
  {
    id: 'prob-manual-processes',
    problemTitle: 'Proses Manual yang Repetitif & Melelahkan',
    problemDesc: 'Staf menghabiskan paruh pertama hari kerja hanya untuk menyalin-tempel (copy-paste) angka dari satu spreadsheet ke spreadsheet lain dan membuat laporan rutin.',
    impact: 'Produktivitas tim rendah, rentan burnout karyawan, dan keterlambatan pengiriman laporan ke pengambil keputusan.',
    solutionTitle: 'Otomatisasi Alur Kerja Spreadsheet & Skrip Latar Belakang',
    solutionDesc: 'Kami menerapkan skrip otomatisasi yang menarik data, melakukan komputasi formula otomatis, dan menyusun laporan siap saji hanya dengan satu klik.',
    keyBenefits: ['Memangkas hingga 85% waktu pembuatan laporan rutin', 'Tim dapat fokus pada analisis nilai tambah', 'Jadwal laporan selalu tepat waktu'],
    industry: 'Layanan Keuangan, Logistik, Retail'
  },
  {
    id: 'prob-inaccurate-sheets',
    problemTitle: 'Spreadsheet Penuh Galat & Formula Rusak',
    problemDesc: 'Rumus Excel yang terputus (#REF!, #VALUE!), duplikasi data transaksi, nomor kontak salah digit, dan kesalahan rumus tersembunyi yang mendistorsi angka laba rugi.',
    impact: 'Keputusan strategis didasarkan pada perhitungan yang salah, berisiko menyebabkan kerugian finansial yang signifikan.',
    solutionTitle: 'Audit Rumus & Data Cleansing Terstruktur',
    solutionDesc: 'DATAVORA melakukan audit menyeluruh terhadap logika kalkulasi, memperkuat validasi input, dan menerapkan formula dinamis modern yang tahan eror.',
    keyBenefits: ['Integritas kalkulasi 100% terjamin', 'Validasi input mencegah kesalahan ketik pengguna', 'Dokumentasi rumus yang mudah dipelihara'],
    industry: 'Retail, Akuntansi, Pendidikan'
  },
  {
    id: 'prob-difficult-reporting',
    problemTitle: 'Pelaporan yang Lambat, Kaku, & Rumit',
    problemDesc: 'Pimpinan perusahaan baru menerima laporan performa bulanan pada pertengahan bulan berikutnya. Data sudah usang saat tiba di meja direksi.',
    impact: 'Peluang pasar terlewat dan pemborosan operasional tidak dapat dicegah sedini mungkin.',
    solutionTitle: 'Business Intelligence Dashboard Interaktif Real-Time',
    solutionDesc: 'Membangun dashboard visual dengan visualisasi grafik intuitif yang terhubung langsung ke sumber data kerja harian secara otomatis.',
    keyBenefits: ['Pantau KPI utama kapan saja dan di mana saja', 'Filter visual per wilayah, produk, atau periode', 'Identifikasi tren dan penyimpangan seketika'],
    industry: 'Manufaktur, E-Commerce, Korporasi'
  },
  {
    id: 'prob-inefficient-workflows',
    problemTitle: 'Alur Administrasi Inefisien & Berbelit-Belit',
    problemDesc: 'Proses persetujuan (approval) pembelian dan klaim biaya masih menggunakan formulir kertas atau chat acak, sering hilang di tengah jalan tanpa jejak rekam.',
    impact: 'Siklus pengadaan barang lambat dan tidak adanya jejak audit yang transparan.',
    solutionTitle: 'Aplikasi Internal & Sistem Approval Digital Ringan',
    solutionDesc: 'Membuat web portal internal terpadu dengan alur approval bertingkat otomatis, rekam jejak digital (audit trail), dan arsip terpusat.',
    keyBenefits: ['Transparansi penuh status permohonan', 'Jejak audit digital yang akuntabel', 'Menghilangkan penggunaan kertas sepenuhnya'],
    industry: 'Lembaga Pendidikan, Jasa Profesional, UMKM'
  },
  {
    id: 'prob-lack-insights',
    problemTitle: 'Banyak Simpan Data, Namun Minim Wawasan Bisnis',
    problemDesc: 'Perusahaan memiliki ratusan ribu baris data historis transaksi, namun hanya disimpan sebagai beban penyimpanan tanpa pernah diekstrak polanya.',
    impact: 'Bisnis berjalan hanya berdasarkan intuisi dan spekulasi tanpa keunggulan kompetitif berbasis fakta.',
    solutionTitle: 'Eksplorasi Analitik & Segmentasi Bisnis Terarah',
    solutionDesc: 'Kami menganalisis riwayat transaksi untuk mengungkap pelanggan paling menguntungkan (Pareto 80/20), produk dengan perputaran lambat, dan anomali biaya.',
    keyBenefits: ['Menemukan sumber inefisiensi tersembunyi', 'Strategi penetapan harga dan stok yang optimal', 'Prediksi kebutuhan persediaan masa depan'],
    industry: 'Retail, Grosir, Perusahaan Jasa'
  }
];

export const TARGET_INDUSTRIES = [
  {
    name: 'Usaha Kecil & Menengah (UKM / UMKM)',
    description: 'Membantu pelaku usaha berkembang menata sistem keuangan sederhana, rekonsiliasi kas, dan inventori tanpa investasi software ratusan juta rupiah.',
    commonProjects: ['Template pembukuan otomatis Google Sheets', 'Katalog data inventori barang', 'Dashboard penjualan harian']
  },
  {
    name: 'Retail & E-Commerce',
    description: 'Konsolidasi data transaksi multi-toko online, pencocokan stok gudang fisik vs marketplace, serta evaluasi margin laba per SKU.',
    commonProjects: ['Rekonsiliasi transaksi marketplace otomatis', 'Pembersihan database pembeli', 'Dashboard analisa retur & komplain']
  },
  {
    name: 'Institusi Pendidikan & Kursus',
    description: 'Digitalisasi berkas arsip siswa/mahasiswa, otomatisasi rekapitulasi nilai, serta sistem pelaporan kehadiran dan pembayaran berkala.',
    commonProjects: ['Sistem rekapitulasi nilai & rapor otomatis', 'Database alumni terstandar', 'Portal administrasi biaya pendidikan']
  },
  {
    name: 'Layanan Keuangan & Administrasi',
    description: 'Penataan data pembukuan, validasi faktur pajak, standarisasi dokumen kontrak, dan audit rekonsiliasi bank.',
    commonProjects: ['Template rekonsiliasi bank multi-akun', 'Audit formula laporan laba rugi', 'SOP kearsipan dokumen digital']
  },
  {
    name: 'Jasa Profesional & Konsultan',
    description: 'Pengelolaan timesheet proyek, pemantauan jam kerja staf per klien, dan perhitungan alokasi biaya operasional yang transparan.',
    commonProjects: ['Dashboard pemantauan beban kerja tim', 'Sistem penagihan otomatis klien', 'Sentralisasi basis data klien']
  },
  {
    name: 'Korporasi & Organisasi',
    description: 'Pembersihan master data berskala puluhan ribu baris, migrasi data sistem warisan (legacy systems), dan perancangan portal internal.',
    commonProjects: ['Data cleaning master customer & vendor', 'ETL pipeline data migrasi', 'Dashboard eksekutif dewan direksi']
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'case-ecommerce-reconciliation',
    title: 'Sistem Konsolidasi & Rekonsiliasi Multi-Channel Transaksi E-Commerce',
    industry: 'Retail & E-Commerce',
    isDemo: true,
    summary: 'Otomatisasi penggabungan laporan transaksi dari 4 kanal marketplace berbeda menjadi satu database master yang tervalidasi.',
    problem: 'Klien e-commerce dengan rata-rata 3.500 transaksi per minggu mencatat penjualan dari 4 marketplace berbeda secara terpisah. Rekap manual setiap sore memakan waktu 4 jam dan kerap terjadi selisih stok fisik hingga 12% akibat perbedaan format penamaan produk antar kanal.',
    solution: 'DATAVORA merancang sistem konsolidasi otomatis berbasis Google Sheets & Apps Script: formula otomatis menstandarkan SKU produk yang berbeda nama, memvalidasi nomor resi pengiriman, mendeteksi pesanan yang dibatalkan, dan menghasilkan laporan laba kotor harian secara otomatis.',
    deliverables: [
      'Master Sheet Konsolidasi Otomatis Multi-Channel',
      'Modul pencocokan kamus SKU (Product Catalog Alias Engine)',
      'Dashboard ringkasan penjualan, potongan promosi, dan biaya platform',
      'Panduan video operasional dan SOP penanganan retur'
    ],
    techStack: ['Google Sheets', 'Google Apps Script', 'Advanced Array Formulas', 'Google Looker Studio'],
    metrics: [
      { label: 'Efisiensi Waktu Rekap', value: '90% Lebih Cepat' },
      { label: 'Selisih Stok Transaksi', value: 'Turun ke 0.2%' },
      { label: 'Waktu Harian Dihemat', value: '3.5 Jam / Hari' }
    ]
  },
  {
    id: 'case-customer-master-cleaning',
    title: 'Audit & Pembersihan Database Master Pelanggan 65.000+ Baris Data',
    industry: 'Distribusi & Logistik',
    isDemo: true,
    summary: 'Pembersihan mendalam data pelanggan warisan: de-duplikasi, validasi format nomor WhatsApp, dan standarisasi alamat wilayah.',
    problem: 'Sebuah perusahaan logistik memiliki database master pelanggan yang terakumulasi selama 6 tahun dengan lebih dari 65.000 entri. Data penuh duplikasi (klien yang sama terdaftar 3-5 kali), nomor kontak tanpa kode negara (+62), penulisan nama kota bervariasi, sehingga pesan promosi dan penagihan sering salah sasaran.',
    solution: 'DATAVORA membangun alur pembersihan data bertahap menggunakan Python dan script regex: de-duplikasi identitas menggunakan fuzzy logic, standarisasi format nomor ponsel internasional, penyelarasan nama kota dan kodepos terhadap master data geografis Indonesia, serta verifikasi kelengkapan kolom.',
    deliverables: [
      'Master Customer Database 100% bersih dan bebas duplikasi',
      'Format nomor WhatsApp siap blast (standar E.164 +62)',
      'Laporan analitis kesehatan data sebelum dan sesudah pembersihan',
      'Aturan validasi input untuk mencegah data kotor baru di masa depan'
    ],
    techStack: ['Python Pandas', 'OpenRefine', 'Regex Pattern Engine', 'PostgreSQL'],
    metrics: [
      { label: 'Duplikasi Tereliminasi', value: '14.280 Baris Ganda' },
      { label: 'Akurasi Nomor Kontak', value: '99.8% Valid' },
      { label: 'Peningkatan Deliverability', value: '+42%' }
    ]
  },
  {
    id: 'case-executive-kpi-dashboard',
    title: 'Dashboard Eksekutif Real-Time KPI & Profitabilitas Operasional',
    industry: 'Layanan Profesional & Konsultan',
    isDemo: true,
    summary: 'Perancangan dashboard interaktif yang mengonsolidasi laporan keuangan, utilisasi staf, dan margin per proyek.',
    problem: 'Jajaran direksi firma profesional kesulitan melihat posisi keuangan aktual karena laporan dari tim finance, sales, dan operasional baru selesai direkonsiliasi pada hari ke-15 setiap bulan. Keputusan ekspansi dan rekrutmen staf tertunda akibat lambatnya visibilitas angka.',
    solution: 'Membangun Business Intelligence Dashboard dinamis berbasis Looker Studio yang menarik data otomatis dari spreadsheet kerja mingguan. Dashboard menyajikan metrik pendapatan bersih, biaya operasional per divisi, utilisasi jam kerja konsultan, dan estimasi arus kas 30 hari ke depan.',
    deliverables: [
      'Executive Dashboard dengan akses berbasis peran (Role-Based Access)',
      'Sistem peringatan otomatis saat biaya departemen melampaui 80% pagu anggaran',
      'Filter interaktif per portofolio layanan, klien, dan periode',
      'Sesi pelatihan penggunaan bagi jajaran direksi dan manajer'
    ],
    techStack: ['Google Looker Studio', 'BigQuery', 'Automated Data Pipeline', 'SQL'],
    metrics: [
      { label: 'Kecepatan Laporan KPI', value: 'Real-Time (Dari 15 Hari)' },
      { label: 'Visibilitas Utilisasi', value: '100% Transparan' },
      { label: 'Penghematan Beban Biaya', value: 'Identifikasi 18% Pemborosan' }
    ]
  },
  {
    id: 'case-apps-script-invoice',
    title: 'Sistem Otomasi Penerbitan Tagihan & Pengiriman Tanda Terima Digital',
    industry: 'Jasa B2B & Korporat',
    isDemo: true,
    summary: 'Otomatisasi siklus penerbitan faktur dari input penjualan hingga pembuatan dokumen PDF dan email konfirmasi ke klien.',
    problem: 'Staf administrasi menghabiskan waktu 20 menit per faktur untuk mengisi template Word, mengekspor ke PDF, melampirkan ke email manual, dan mencatat status bayar di buku manual. Saat volume tagihan mencapai 300 transaksi per bulan, sering terjadi faktur telat terbit atau terlewat ditagih.',
    solution: 'DATAVORA mengembangkan modul otomatisasi berbasis Google Apps Script: staf cukup menginput data ringkas pada form Google Sheets, sistem secara otomatis men-generate PDF faktur berformat resmi dengan nomor urut unik, menyimpannya di Google Drive terenkripsi, mengirim email tagihan profesional ke kontak klien, dan menjadwalkan notifikasi jatuh tempo.',
    deliverables: [
      'Generator Faktur & Tanda Terima Otomatis 1-Klik',
      'Template PDF profesional dengan kop surat resmi perusahaan',
      'Sistem tracking status pembayaran (Unpaid, Paid, Overdue)',
      'Notifikasi pengingat pembayaran otomatis'
    ],
    techStack: ['Google Apps Script', 'HTML/CSS Invoice Templates', 'Gmail API Integration', 'Google Drive Automation'],
    metrics: [
      { label: 'Waktu Buat Faktur', value: '15 Detik (Dari 20 Menit)' },
      { label: 'Faktur Terlewat Ditagih', value: 'Nol (0 Terlewat)' },
      { label: 'Percepatan Pembayaran', value: 'Rata-rata 5 Hari Lebih Cepat' }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: '5-tanda-spreadsheet-bisnis-butuh-otomasi',
    title: '5 Tanda Jelas Spreadsheet Bisnis Anda Sudah Mendesak Membutuhkan Otomasi',
    category: 'Spreadsheet Tips',
    readTime: '4 Menit Baca',
    publishDate: '12 Mei 2026',
    author: 'Tim Konsultan DATAVORA',
    excerpt: 'Apakah tim Anda masih menghabiskan waktu berjam-jam setiap hari hanya untuk copy-paste data manual antar file Excel? Simak tanda-tanda inefisiensi yang sering diabaikan pemilik usaha.',
    content: [
      'Microsoft Excel dan Google Sheets adalah alat yang luar biasa untuk memulai pencatatan bisnis. Namun, seiring dengan pertumbuhan volume transaksi dan kompleksitas operasional, ketergantungan pada proses manual di spreadsheet dapat berubah dari alat bantu menjadi sumber inefisiensi utama.',
      'Tanda pertama yang paling sering kami temukan di lapangan adalah staf yang menghabiskan lebih dari satu jam setiap harinya hanya untuk pekerjaan "copy-paste" rutin dari berkas satu ke berkas lain. Pekerjaan repetitif ini tidak hanya membosankan, tetapi juga memiliki tingkat risiko kesalahan manusia (human error) yang sangat tinggi.',
      'Tanda kedua adalah munculnya fenomena "formula rapuh". Jika satu orang staf tidak sengaja menghapus satu baris atau mengubah satu referensi sel, seluruh perhitungan laba rugi di sheet lainnya menjadi kacau atau menghasilkan galat #REF!. Hal ini menandakan sistem Anda memerlukan proteksi dan otomasi script.',
      'Tanda ketiga adalah keluhan bahwa file kerja menjadi sangat lambat (loading berputar lama) karena jumlah data yang melampaui kapasitas ideal formula biasa. Pada tahap ini, penerapan database terstruktur atau optimasi script pengolahan data latar belakang menjadi keharusan.',
      'Langkah bijak yang dapat diambil bisnis bukanlah meninggalkan spreadsheet sama sekali, melainkan meningkatkan kemampuannya dengan skrip otomasi (Google Apps Script atau VBA) atau mengintegrasikannya dengan pipeline data yang lebih tangguh.'
    ],
    keyTakeaways: [
      'Proses manual copy-paste lebih dari 1 jam per hari adalah tanda pemborosan biaya tenaga kerja.',
      'Formula rapuh yang mudah rusak saat diedit anggota tim baru membutuhkan standarisasi dan penguncian.',
      'Otomatisasi spreadsheet mengembalikan fokus karyawan ke tugas analisis strategis.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'mengapa-data-cleaning-adalah-pondasi-terpenting-analisis',
    title: 'Mengapa Data Cleaning Adalah Pondasi Terpenting Sebelum Berinvestasi di Dashboard BI',
    category: 'Data Management',
    readTime: '5 Menit Baca',
    publishDate: '28 April 2026',
    author: 'Divisi Analitik DATAVORA',
    excerpt: 'Prinsip "Garbage In, Garbage Out" berlaku mutlak dalam dunia data. Secanggih apa pun dashboard yang Anda bangun, semuanya sia-sia jika data sumbernya kotor dan inkonsisten.',
    content: [
      'Banyak eksekutif tergiur melihat demonstrasi dashboard business intelligence (BI) yang memukau dengan visualisasi grafik interaktif 3D dan peta wilayah yang elegan. Namun, seringkali proyek dashboard tersebut gagal digunakan dalam praktik sehari-hari. Mengapa demikian?',
      'Jawabannya sederhana: kualitas data dasar yang tidak siap (Dirty Data). Dalam dunia teknologi dan analitik, terdapat pepatah klasik: "Garbage In, Garbage Out". Jika data sumber yang diolah penuh dengan inkonsistensi nama, salah input nominal, atau duplikasi identitas, maka visualisasi grafik yang dihasilkan hanyalah kebohongan visual yang menyesatkan.',
      'Proses Data Cleaning bukan sekadar menghapus baris kosong. Ini mencakup proses standarisasi sintaks, harmonisasi terminologi antar cabang, verifikasi integritas logika perhitungan, dan deteksi anomali statistik.',
      'Investasi waktu pada tahap pembersihan data selalu menghasilkan pengembalian (ROI) terbesar. Ketika master data Anda bersih dan terverifikasi 99%+, pembuatan dashboard apa pun akan berjalan cepat, mulus, dan yang terpenting: dapat dipercaya 100% oleh jajaran direksi saat mengambil keputusan penting.'
    ],
    keyTakeaways: [
      'Dashboard canggih tidak ada gunanya jika data di baliknya mengandung kesalahan fatal.',
      'Pembersihan data mencakup penghapusan duplikat, harmonisasi penamaan, dan validasi format.',
      'Data yang bersih memberikan kepercayaan diri penuh bagi pimpinan dalam menentukan arah perusahaan.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'cara-menghindari-kerugian-akibat-human-error-data-entry',
    title: 'Strategi Mencegah Kerugian Finansial Akibat Kesalahan Manusia (Human Error) pada Data Entry',
    category: 'Business Problem Solving',
    readTime: '4 Menit Baca',
    publishDate: '15 April 2026',
    author: 'Tim Penjamin Mutu DATAVORA',
    excerpt: 'Satu angka nol yang berlebih pada faktur dapat berakibat fatal bagi likuiditas kas. Pelajari sistem validasi data multi-tier untuk mengamankan operasional Anda.',
    content: [
      'Kesalahan pengetikan (typo) terdengar sepele, namun dalam operasional bisnis berskala jutaan atau miliaran rupiah, salah menaruh titik desimal atau menambahkan satu digit angka nol dapat berdampak pada salah kirim barang, sengketa penagihan dengan klien, hingga kerugian pajak.',
      'Riset di bidang tata kelola administrasi menunjukkan bahwa tingkat kesalahan input manual manusia tanpa sistem validasi berkisar antara 1% hingga 4%. Bayangkan jika tim Anda menginput 10.000 transaksi per bulan: itu berarti ada 100 hingga 400 catatan yang berpotensi cacat setiap bulannya.',
      'Untuk memitigasi risiko tersebut, DATAVORA INDONESIA selalu menerapkan prinsip 3-Lapis Proteksi (Three-Tier Data Quality Gate):',
      '1. Input Validation Guard: Pembatasan jenis input pada formulir (misalnya hanya menerima digit angka, rentang nilai yang masuk akal, dan pilihan dropdown terstandarisasi).',
      '2. Double-Key Verification: Untuk transaksi bernilai tinggi, data diverifikasi silang oleh dua petugas independen sebelum masuk ke buku besar.',
      '3. Algorithmic Anomaly Alert: Skrip latar belakang yang otomatis menandai data yang melompat drastis dari rata-rata normal historis untuk segera diinspeksi supervisor.'
    ],
    keyTakeaways: [
      'Human error pada input data adalah keniscayaan jika sistem membiarkan pengguna mengetik bebas tanpa validasi.',
      'Menerapkan dropdown, batasan rentang nilai, dan validasi regex memangkas galat hingga 95%.',
      'Audit log otomatis memastikan setiap perubahan angka tercatat siapa dan kapan dilakukan.'
    ]
  },
  {
    id: 'blog-4',
    slug: 'transformasi-digital-untuk-umkm-panduan-praktis',
    title: 'Transformasi Digital untuk Bisnis Berkembang: Mulai dari Mana Tanpa Biaya Fantastis?',
    category: 'Digital Transformation',
    readTime: '6 Menit Baca',
    publishDate: '02 April 2026',
    author: 'Konsultan Transformasi Digital DATAVORA',
    excerpt: 'Transformasi digital tidak harus dimulai dengan membeli sistem ERP berharga ratusan juta. Mulailah dari penataan data operasional harian yang terstruktur.',
    content: [
      'Banyak pemilik usaha kecil dan menengah (UKM) merasa terintimidasi oleh istilah "Transformasi Digital". Dalam benak mereka terbayang biaya instalasi server mahal, konsultan luar negeri berbiaya tinggi, dan kurva pembelajaran sistem baru yang rumit bagi para staf.',
      'Kenyataannya, transformasi digital sejati berfokus pada alur kerja, bukan mahalnya software. Langkah paling realistis dan berdampak langsung untuk bisnis berkembang di Indonesia adalah menyelesaikan masalah mendasar:',
      'Pertama, eliminasi pencatatan di buku kertas untuk stok dan kas. Migrasikan ke cloud spreadsheet terproteksi yang dapat diakses oleh pemilik usaha dari ponsel kapan saja.',
      'Kedua, hubungkan formulir pemesanan pelanggan langsung ke daftar antrean kerja menggunakan Google Forms dan Google Sheets tanpa perantara rekap manual.',
      'Ketiga, buat aturan penyimpanan file yang rapi. Tentukan satu folder pusat untuk seluruh berkas resmi perusahaan dan batasi hak mengedit file hanya bagi staf yang berwenang.',
      'Dengan pendekatan bertahap ini, perusahaan Anda dapat menghemat biaya besar sekaligus membangun fondasi data yang kokoh sebelum kelak berinvestasi pada sistem aplikasi yang lebih besar.'
    ],
    keyTakeaways: [
      'Transformasi digital sukses berawal dari pembenahan kebiasaan kerja dan struktur data harian.',
      'Manfaatkan ekosistem cloud yang sudah ada (Google Workspace) sebelum membeli software enterprise.',
      'Pendampingan pelatihan staf adalah kunci agar sistem baru benar-benar digunakan secara disiplin.'
    ]
  },
  {
    id: 'blog-5',
    slug: 'panduan-memilih-solusi-database-vs-spreadsheet',
    title: 'Kapan Waktunya Bisnis Anda Beralih dari Spreadsheet ke Sistem Database Kustom?',
    category: 'Data Management',
    readTime: '5 Menit Baca',
    publishDate: '20 Maret 2026',
    author: 'Tim Arsitek Data DATAVORA',
    excerpt: 'Pahami batas kemampuan teknis spreadsheet dan kenali momen tepat saat perusahaan Anda harus beralih ke aplikasi database relasional.',
    content: [
      'Spreadsheet adalah alat terbaik untuk eksplorasi data cepat dan pembuatan kalkulasi fleksibel. Namun, spreadsheet tidak pernah dirancang untuk menjadi basis data operasional multi-pengguna jangka panjang.',
      'Kapan perusahaan Anda harus mulai mempertimbangkan pembuatan aplikasi internal berbasis database (seperti PostgreSQL atau MySQL)?',
      '1. Masalah Konkurensi: Ketika lebih dari 10 pengguna mengedit spreadsheet yang sama secara bersamaan, sering terjadi tabrakan sel, loading lambat, atau formula tertimpa tanpa sengaja.',
      '2. Kebutuhan Keamanan Data & Hak Akses Bertingkat: Di spreadsheet, sangat sulit menyembunyikan kolom harga modal dari staf penjualan tanpa mengunci seluruh file. Dalam database kustom, hak akses dapat diatur per baris dan per kolom.',
      '3. Skala Data: Ketika baris data Anda sudah menembus angka di atas 50.000 hingga 100.000 baris dengan formula rumit, kinerja spreadsheet akan melambat secara signifikan.',
      'Membangun aplikasi kustom yang ringan di atas basis data relasional memberikan performa tinggi, stabilitas transaksi, dan keamanan data yang jauh lebih terjamin untuk jangka panjang.'
    ],
    keyTakeaways: [
      'Spreadsheet cocok untuk analisis cepat; database cocok untuk pencatatan transaksi multi-pengguna.',
      'Keamanan tingkat tinggi (sembunyikan kolom sensitif per peran staf) membutuhkan database relasional.',
      'Migrasi tepat waktu mencegah krisis data macet saat bisnis mengalami lonjakan transaksi.'
    ]
  }
];

export const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: 'q1',
    question: 'Bagaimana kondisi penyimpanan data operasional bisnis Anda saat ini?',
    options: [
      { label: 'Masih banyak catatan kertas / buku manual fisik', points: 10, recommendedService: 'Data Entry & Processing' },
      { label: 'Tersimpan di banyak file Excel terpisah di laptop masing-masing staf', points: 20, recommendedService: 'Data Management & Organization' },
      { label: 'Sudah di Google Drive/Cloud tapi format penamaan berantakan & banyak versi', points: 30, recommendedService: 'Data Cleaning & Correction' },
      { label: 'Sudah terpusat namun belum ada otomatisasi rekapitulasi', points: 40, recommendedService: 'Spreadsheet Automation' }
    ]
  },
  {
    id: 'q2',
    question: 'Berapa lama waktu yang dihabiskan tim Anda untuk menyusun laporan rekap mingguan/bulanan?',
    options: [
      { label: 'Lebih dari 10 jam per minggu (harus lembur untuk tutup buku)', points: 10, recommendedService: 'Spreadsheet Automation' },
      { label: 'Sekitar 4 - 8 jam per minggu untuk copy-paste dan cross-check', points: 20, recommendedService: 'Spreadsheet Automation' },
      { label: '1 - 3 jam per minggu, namun angka sering kali tidak sinkron', points: 30, recommendedService: 'Data Analysis & Reporting' },
      { label: 'Di bawah 1 jam, namun visualisasi kurang informatif bagi direksi', points: 40, recommendedService: 'Data Analysis & Reporting' }
    ]
  },
  {
    id: 'q3',
    question: 'Apakah Anda sering menemukan data pelanggan ganda (duplikat) atau kontak yang salah ketik?',
    options: [
      { label: 'Sangat sering, pesan promosi atau penagihan kerap salah sasaran', points: 10, recommendedService: 'Data Cleaning & Correction' },
      { label: 'Pernah terjadi beberapa kali dan merepotkan tim sales/admin', points: 25, recommendedService: 'Data Cleaning & Correction' },
      { label: 'Jarang, namun kami belum pernah melakukan audit mendalam', points: 35, recommendedService: 'Data Management & Organization' }
    ]
  },
  {
    id: 'q4',
    question: 'Bagaimana pimpinan atau manajemen memantau kinerja operasional saat ini?',
    options: [
      { label: 'Hanya menunggu laporan verbal atau rangkuman chat berkala', points: 10, recommendedService: 'Data Analysis & Reporting' },
      { label: 'Membaca lembar file spreadsheet yang penuh angka rumit', points: 20, recommendedService: 'Data Analysis & Reporting' },
      { label: 'Sudah ada grafik sederhana namun belum update secara otomatis', points: 35, recommendedService: 'Spreadsheet Automation' },
      { label: 'Sudah ada dashboard namun ingin pengembangan sistem aplikasi khusus', points: 40, recommendedService: 'Custom Application Development' }
    ]
  }
];

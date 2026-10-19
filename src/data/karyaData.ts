export interface KaryaItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  thumbnailUrl: string;
  previewUrl: string;
  description: string;
  tags: string[];
  features?: string[];
  badge?: string;
}

export const KARYA_ITEMS: KaryaItem[] = [
  {
    id: 'kopi-ruang',
    title: 'Kopi Ruang',
    subtitle: 'Specialty Coffee & Cozy Space',
    category: 'F&B & Lifestyle',
    thumbnailUrl: '/portofolio-karya/thumbnails/Kopi Ruang.JPG',
    previewUrl: '/portofolio-karya/pages/LP Kopi Ruang/landing_page_kopi_ruang.html',
    description: 'Landing page premium untuk coffee shop modern dengan nuansa hangat, elegan, dan estetik. Menampilkan signature coffee, suasana ruang, filosofi biji kopi, hingga integrasi kontak reservasi.',
    tags: ['Landing Page', 'F&B & Coffee Shop', 'Responsive', 'Modern Aesthetic', 'Live Preview'],
    features: [
      'Desain Responsif & Estetik Bernuansa Hangat',
      'Katalog Menu Signature & Kisah Kopi Pilihan',
      'Navigasi Halus (Smooth Scrolling) & Micro-Interactions',
      'Integrasi Google Maps, Jam Buka, & Reservasi WhatsApp'
    ],
    badge: 'Live Interactive Preview'
  }
];

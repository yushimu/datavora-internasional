# Panduan Penyimpanan Landing Page & Thumbnail Karya

Folder ini digunakan untuk menyimpan seluruh landing page dan thumbnail yang akan ditampilkan pada Tab "Karya" di Portofolio.

## Struktur Folder:

1. `thumbnails/`
   - Simpan gambar thumbnail / cover kartu untuk setiap landing page di sini.
   - Format yang didukung: .png, .jpg, .jpeg, .webp, .svg.
   - Contoh penamaan:
     - `lp-project-1.webp`
     - `lp-project-2.webp`

2. `pages/`
   - Buat satu sub-folder untuk setiap landing page di dalam folder `pages/`.
   - Di dalam sub-folder tersebut, letakkan file `index.html` dan aset pelengkapnya (css, js, gambar).
   - Contoh struktur:
     pages/
     ├── project-1/
     │   ├── index.html   <-- File utama landing page
     │   ├── style.css
     │   └── images/
     ├── project-2/
     │   └── index.html
     └── ...

## Cara Mengakses di Website:
- URL Halaman: `/portofolio-karya/pages/project-1/index.html`
- URL Thumbnail: `/portofolio-karya/thumbnails/lp-project-1.webp`

Saat Anda siap, beritahu kami nama file dan judul proyeknya agar dapat langsung dihubungkan ke popup modal di website!

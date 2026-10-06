export interface BlogspotFile {
  path: string;
  name: string;
  category: 'core' | 'docs';
  description: string;
  language: string;
  code: string;
}

export const BLOGSPOT_THEME_FILES: BlogspotFile[] = [
  {
    path: 'datavora-indonesia-theme.xml',
    name: 'datavora-indonesia-theme.xml',
    category: 'core',
    description: 'Kode sumber utama (XML) untuk Tema Blogspot / Blogger',
    language: 'xml',
    code: `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' expr:dir='data:blog.languageDirection' expr:lang='data:blog.locale' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta content='width=device-width, initial-scale=1' name='viewport'/>
  <title><data:blog.pageTitle/></title>
  <b:include data='blog' name='all-head-content'/>
  <link href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap' rel='stylesheet'/>
  <b:skin><![CDATA[
/*
Theme Name: DATAVORA INDONESIA
Theme URI: https://datavora.co.id
Author: DATAVORA INDONESIA
Description: Professional corporate Blogspot theme for DATAVORA INDONESIA, turning data into business solutions.
Version: 1.0.0
*/

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #FAFAFA;
  color: #1E293B;
}

/* Header */
.datavora-header {
  background-color: #090E17;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #C59B27;
}

.datavora-header h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #E6C564;
}

/* Navigation */
.datavora-nav {
  display: flex;
  gap: 15px;
}
.datavora-nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
}

/* Main Content */
.datavora-main {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Post Container */
.post-outer {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
}

.post-title {
  color: #102A43;
  font-size: 2rem;
  margin-top: 0;
}

.post-body {
  line-height: 1.7;
  color: #475569;
}

/* Footer */
.datavora-footer {
  background: #090E17;
  color: white;
  text-align: center;
  padding: 40px 20px;
  margin-top: 60px;
  border-top: 4px solid #C59B27;
}
  ]]></b:skin>
</head>
<body>
  
  <header class='datavora-header'>
    <h1>DATAVORA INDONESIA</h1>
    <nav class='datavora-nav'>
      <a href='/'>Beranda</a>
      <a href='/p/about.html'>Tentang Kami</a>
      <a href='/p/services.html'>Layanan</a>
      <a href='/p/contact.html'>Kontak</a>
    </nav>
  </header>

  <div class='datavora-main'>
    <b:section class='main' id='main' showaddelement='yes'>
      <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog'>
        <b:includable id='main'>
          <!-- Loop through posts -->
          <b:loop values='data:posts' var='post'>
            <div class='post-outer'>
              <h2 class='post-title'><a expr:href='data:post.url'><data:post.title/></a></h2>
              <div class='post-meta'>
                <span class='date'><data:post.dateHeader/></span>
              </div>
              <div class='post-body'>
                <data:post.body/>
              </div>
            </div>
          </b:loop>
          <!-- Pagination -->
          <b:include name='nextprev'/>
        </b:includable>
        
        <b:includable id='nextprev'>
          <div class='blog-pager' id='blog-pager'>
            <b:if cond='data:newerPageUrl'>
              <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
            </b:if>
            <b:if cond='data:olderPageUrl'>
              <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
            </b:if>
          </div>
        </b:includable>
      </b:widget>
    </b:section>
  </div>

  <footer class='datavora-footer'>
    <p>&amp;copy; 2026 DATAVORA INDONESIA. Turning Data Into Business Solutions.</p>
  </footer>

</body>
</html>`
  },
  {
    path: 'readme.txt',
    name: 'readme.txt',
    category: 'docs',
    description: 'Dokumentasi panduan instalasi Blogger & spesifikasi teknis',
    language: 'markdown',
    code: `=== DATAVORA INDONESIA ===
Professional Corporate Blogspot/Blogger Theme
Built for Blogger Layouts V3 & Widgets V2

Instalasi di Blogspot:
1. Unduh file datavora-indonesia-blogspot-theme-v1.0.0.xml
2. Masuk ke dashboard Blogger Anda.
3. Buka menu Tema (Theme).
4. Klik tanda panah bawah di sebelah tombol Sesuaikan (Customize).
5. Pilih Pulihkan (Restore).
6. Klik Unggah (Upload) dan pilih file datavora-indonesia-blogspot-theme-v1.0.0.xml
7. Selesai! Tema telah aktif. Untuk mengubah menu, gunakan menu Tata Letak (Layout).`
  }
];

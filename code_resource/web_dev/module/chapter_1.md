# Chapter 1 — HTML: Struktur dan Tag

Saat membuka halaman web, kita melihat judul, teks, tombol, dan berbagai bagian lain. Browser tidak bisa menebak sendiri bagian mana yang merupakan judul atau tombol. Ia membaca dokumen HTML untuk memahami susunan halaman tersebut.

HTML adalah bahasa markup yang digunakan untuk memberi struktur pada konten. HTML kemudian menandai bagian-bagian halaman: “ini judul”, “ini paragraf”, “ini tombol”. HTML tidak menjalankan logika seperti menghitung atau mengambil keputusan. Tugas seperti itu biasanya ditangani JavaScript.

Bayangkan HTML seperti susunan sebuah buku. Ada judul, bab, dan paragraf. HTML memberi tahu browser peran setiap bagian, seperti penanda yang memberi tahu pembaca, “bagian ini judul bab” atau “bagian ini paragraf”. Tampilan akhirnya bisa diubah dengan CSS, tetapi susunan dasarnya tetap berasal dari HTML.

## Bentuk dasar dokumen HTML

Sebuah dokumen HTML biasanya memiliki kerangka seperti ini:

```html
<!doctype html>
<html>
  <head>
    <title>Catatan Harian</title>
  </head>
  <body>
    <h1>Catatan Hari Ini</h1>
    <p>Hari ini saya belajar membuat halaman web.</p>
  </body>
</html>
```

Baris `<!doctype html>` memberi tahu browser bahwa dokumen menggunakan versi HTML terbaru. Setelah itu, seluruh halaman berada di dalam elemen `<html>`.

Di dalamnya ada dua bagian penting:

- `<head>` berisi informasi tentang dokumen. Pada contoh ini, `<title>` menentukan teks yang biasanya terlihat pada tab browser.
- `<body>` berisi konten halaman yang dilihat pengguna, seperti judul dan paragraf.

Jadi, jangan tertukar: teks di dalam `<title>` biasanya tampil di tab browser, sedangkan teks di dalam `<h1>` tampil sebagai judul di halaman.

## Tag dan elemen

Tulisan seperti `<h1>` disebut **tag**. Tag biasanya ditulis berpasangan: tag pembuka dan tag penutup. Tag penutup memiliki garis miring.

```html
<p>Belajar HTML dimulai dari memahami strukturnya.</p>
```

Pada contoh tersebut, `<p>` adalah tag pembuka dan `</p>` adalah tag penutup. Keduanya membatasi isi paragraf. Gabungan tag pembuka, isi, dan tag penutup disebut **elemen**.

Tidak semua tag memiliki pasangan penutup. Beberapa elemen tidak membungkus teks atau elemen lain. Contohnya adalah `<br>`, yang membuat pindah baris, dan `<hr>`, yang menampilkan garis pemisah.

```html
<p>Baris pertama<br>Baris kedua</p>
<hr>
```

Elemen seperti `<br>` dan `<hr>` sering disebut elemen kosong karena tidak memiliki isi dan tag penutup seperti `<p>`. Elemen `<input>` juga termasuk jenis ini.

## Tag menjelaskan peran konten

Tag bukan sekadar cara membuat teks terlihat besar atau tebal. Tag sebaiknya dipilih berdasarkan **peran kontennya**.

Misalnya, `<h1>` menandai judul utama, sedangkan `<h2>` menandai judul bagian. `<p>` menandai paragraf. Browser dan teknologi bantu, seperti pembaca layar, dapat menggunakan struktur ini untuk memahami isi halaman.

Ada juga tag yang lebih umum. `<div>` digunakan sebagai wadah untuk mengelompokkan bagian halaman ketika belum ada tag yang lebih sesuai. Tag `<b>` biasanya membuat teks tampak tebal, tetapi tidak dengan sendirinya menyatakan bahwa teks itu penting. Jika sebuah kata memang perlu ditekankan kepentingannya, HTML menyediakan `<strong>`.

Perbedaan ini penting: HTML yang baik tidak hanya tampak benar, tetapi juga menyampaikan struktur dan makna kontennya dengan jelas.

## Elemen bisa berada di dalam elemen lain

Sebuah elemen dapat menjadi bagian dari elemen yang lebih besar. Misalnya, paragraf berada di dalam `body`, sementara `body` berada di dalam `html`.

```html
<body>
  <h1>Judul halaman</h1>
  <p>Paragraf berada di dalam body.</p>
</body>
```

Susunan ini disebut **nesting** atau penyarangan. Agar strukturnya jelas, tutup elemen yang berada paling dalam terlebih dahulu. Dalam contoh berikut, `<em>` ditutup sebelum `<p>`:

```html
<p>Saya sedang belajar <em>struktur HTML</em>.</p>
```

Jika tag dibuka atau ditutup secara tidak berurutan, browser mungkin tetap mencoba menampilkan halaman, tetapi hasilnya bisa berbeda dari yang diharapkan.

## Membaca tag dalam kode yang lebih besar

Ketika melihat sebuah halaman HTML, mulailah dengan mencari pembungkus utamanya, lalu perhatikan elemen di dalam `body`. Nama tag sering memberi petunjuk tentang fungsi bagian tersebut:

- `<h2>` adalah judul bagian.
- `<div>` adalah wadah umum.
- `<input>` menyediakan kolom tempat pengguna memasukkan data.
- `<button>` membuat tombol.
- `<br>` memindahkan teks ke baris berikutnya.
- `<hr>` menampilkan garis pemisah.
- `<b>` menampilkan teks dengan gaya tebal.
- `<script>` menandai bagian tempat JavaScript ditulis atau dimuat dari berkas lain.

Daftar itu membantu kita membaca bentuk umum halaman, tetapi nama tag saja belum menjelaskan semuanya. Contohnya, `<input>` bisa digunakan untuk menerima berbagai jenis masukan. Informasi lebih lanjut ditentukan oleh atribut, yang akan dibahas di chapter berikutnya.

Begitu juga dengan `<script>`: tag itu menghubungkan JavaScript dengan dokumen HTML, tetapi tidak menjelaskan apa yang dilakukan JavaScript di dalamnya. Untuk memahami perilakunya, kita perlu membaca kode JavaScript tersebut.

## Coba baca contoh ini

```html
<body>
  <h1>Perpustakaan Mini</h1>
  <p>Pilih buku yang ingin kamu baca.</p>

  <h2>Daftar Buku</h2>
  <div>
    <p>Petualangan di Hutan</p>
    <p>Rahasia Bintang</p>
  </div>
</body>
```

Tanpa mengetahui CSS atau JavaScript, kita sudah bisa menangkap susunan dasarnya: ada judul utama, paragraf pengantar, judul bagian, lalu sebuah wadah yang berisi dua paragraf. Itulah salah satu manfaat HTML yang terstruktur: pembaca manusia maupun browser lebih mudah memahami hubungan antarbagian.
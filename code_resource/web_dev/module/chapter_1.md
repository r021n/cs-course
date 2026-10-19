# Chapter 1 — HTML: Struktur dan Tag

Saat membuka halaman web, kita melihat judul, teks, tombol, dan berbagai bagian lain. Browser tidak bisa menebak sendiri bagian mana yang merupakan judul atau tombol. Ia membaca dokumen HTML untuk memahami susunan halaman tersebut.

HTML adalah bahasa markup yang digunakan untuk memberi struktur pada konten. HTML kemudian menandai bagian-bagian halaman: “ini judul”, “ini paragraf”, “ini tombol”. HTML tidak menjalankan logika seperti menghitung atau mengambil keputusan. Tugas seperti itu biasanya ditangani JavaScript.

Bayangkan HTML seperti susunan sebuah buku. Ada judul, bab, dan paragraf. HTML memberi tahu browser peran setiap bagian, seperti penanda yang memberi tahu pembaca, “bagian ini judul bab” atau “bagian ini paragraf”. Tampilan akhirnya bisa diubah dengan CSS, tetapi susunan dasarnya tetap berasal dari HTML.

### Pertanyaan

1. Sebuah halaman menampilkan artikel berisi judul dan paragraf, serta sebuah tombol yang menghitung jumlah kata ketika diklik. Menurut bacaan, bahasa apa yang menangani perhitungan jumlah kata tersebut?
   <!-- Jawaban: JavaScript -->
2. Seluruh CSS di halamanmu dihapus. Menurut bacaan, halaman tetap menampilkan judul dan paragraf dengan urutan yang benar karena susunan dasar halaman ditentukan oleh bahasa apa?
   <!-- Jawaban: HTML -->
3. Menurut bacaan, apa perbedaan tugas HTML dan JavaScript dalam sebuah halaman?
   <!-- Jawaban: HTML menandai struktur dan peran bagian halaman, sedangkan JavaScript menangani logika seperti menghitung dan mengambil keputusan -->

---

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

### Pertanyaan

1. Agar teks 'Catatan Harian' tampil di tab browser (bukan di dalam halaman), tulis elemen apa yang harus kamu letakkan di dalam `<head>` beserta teksnya?
   <!-- Jawaban: `<title>Catatan Harian</title>` -->
2. Pada contoh, teks 'Catatan Hari Ini' ditulis sebagai judul halaman di dalam `<body>`. Tulis elemen tersebut.
   <!-- Jawaban: `<h1>Catatan Hari Ini</h1>` -->
3. Bacaan mengingatkan kita untuk tidak tertukar antara teks di dalam `<title>` dan teks di dalam `<h1>`. Dalam satu kalimat, di mana masing-masing teks itu tampil?
   <!-- Jawaban: teks `<title>` tampil di tab browser, sedangkan teks `<h1>` tampil sebagai judul di halaman -->

---

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

### Pertanyaan

1. Buatlah satu paragraf yang menampilkan teks 'Baris pertama' lalu tepat di bawahnya teks 'Baris kedua', tanpa membuat dua elemen `<p>` terpisah.
   <!-- Jawaban: `<p>Baris pertama<br>Baris kedua</p>` -->
2. Tulis ulang kode berikut menjadi elemen yang lengkap dengan tag penutupnya: `<p>Belajar HTML dimulai dari struktur`
   <!-- Jawaban: `<p>Belajar HTML dimulai dari struktur</p>` -->
3. Mengapa `<br>` dan `<hr>` disebut elemen kosong, sedangkan `<p>` tidak?
   <!-- Jawaban: karena `<br>` dan `<hr>` tidak memiliki isi dan tag penutup -->

---

## Tag menjelaskan peran konten

Tag bukan sekadar cara membuat teks terlihat besar atau tebal. Tag sebaiknya dipilih berdasarkan **peran kontennya**.

Misalnya, `<h1>` menandai judul utama, sedangkan `<h2>` menandai judul bagian. `<p>` menandai paragraf. Browser dan teknologi bantu, seperti pembaca layar, dapat menggunakan struktur ini untuk memahami isi halaman.

Ada juga tag yang lebih umum. `<div>` digunakan sebagai wadah untuk mengelompokkan bagian halaman ketika belum ada tag yang lebih sesuai. Tag `<b>` biasanya membuat teks tampak tebal, tetapi tidak dengan sendirinya menyatakan bahwa teks itu penting. Jika sebuah kata memang perlu ditekankan kepentingannya, HTML menyediakan `<strong>`.

Perbedaan ini penting: HTML yang baik tidak hanya tampak benar, tetapi juga menyampaikan struktur dan makna kontennya dengan jelas.

### Pertanyaan

1. Kamu sedang menyusun halaman sekolah, dan bagian yang sedang kamu tulis adalah judul utama halaman. Buatlah elemen judul utama berisi teks 'Pengumuman Sekolah'.
   <!-- Jawaban: `<h1>Pengumuman Sekolah</h1>` -->
2. Setelah judul utama, halaman memerlukan judul bagian (bukan judul utama) berisi teks 'Jadwal Pelajaran'. Buatlah elemennya.
   <!-- Jawaban: `<h2>Jadwal Pelajaran</h2>` -->
3. Buatlah paragraf berisi teks 'Tugas ini harus selesai' dengan kata 'selesai' ditandai sebagai penekanan yang bermakna bagi pembaca layar.
   <!-- Jawaban: `<p>Tugas ini harus <strong>selesai</strong></p>` -->

---

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

### Pertanyaan

1. Buatlah paragraf berisi teks 'Saya sedang belajar struktur HTML' (tanpa tanda baca di akhir) dengan frasa 'struktur HTML' dibungkus elemen `<em>`.
   <!-- Jawaban: `<p>Saya sedang belajar <em>struktur HTML</em></p>` -->
2. Perhatikan kode yang urutan tag penutupnya salah: `<p><em>Belajar bersarang</p></em>`. Tulis ulang kode tersebut dengan urutan penutupan yang benar.
   <!-- Jawaban: `<p><em>Belajar bersarang</em></p>` -->
3. Kelompokkan paragraf berisi teks 'Satu' ke dalam satu wadah `<div>`.
   <!-- Jawaban: `<div><p>Satu</p></div>` -->

---

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

### Pertanyaan

1. Buatlah kolom tempat pengguna mengetik namanya, tanpa atribut apa pun karena jenis masukannya baru dibahas pada chapter berikutnya.
   <!-- Jawaban: `<input>` -->
2. Tulis tag `<script>` yang langsung berisi kode JavaScript `alert('Halo');`.
   <!-- Jawaban: `<script>alert('Halo');</script>` -->
3. Kamu menemukan `<script>` pada sebuah halaman, tetapi nama tag itu tidak menjelaskan apa yang dilakukan JavaScript di dalamnya. Apa yang harus kamu baca untuk memahami perilaku bagian tersebut?
   <!-- Jawaban: kode JavaScript yang ada di dalam tag `<script>` tersebut -->

---

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

### Pertanyaan

1. Pada contoh, ada tiga paragraf; dua di antaranya berada di dalam `<div>`. Tulis teks paragraf yang berada langsung di dalam `<body>`, bukan di dalam `<div>`.
   <!-- Jawaban: Pilih buku yang ingin kamu baca. -->
2. Jika 'Daftar Buku' harus menjadi judul utama halaman, bukan judul bagian, tulis elemennya.
   <!-- Jawaban: `<h1>Daftar Buku</h1>` -->
3. Menurut penutup bacaan, mengapa HTML yang terstruktur bermanfaat bagi pembaca manusia maupun browser?
   <!-- Jawaban: karena keduanya lebih mudah memahami hubungan antarbagian -->

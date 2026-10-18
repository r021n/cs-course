# Chapter 2 — Atribut HTML: Informasi Tambahan pada Elemen

Di chapter sebelumnya, kita melihat bahwa tag memberi tahu browser peran sebuah bagian: `<p>` untuk paragraf, `<h1>` untuk judul utama, dan `<input>` untuk kolom masukan. Namun, kadang nama tag saja belum cukup.

Sebuah kolom masukan, misalnya, bisa menerima teks biasa, angka, atau kata sandi. Browser perlu informasi tambahan agar tahu jenis kolom yang dimaksud. Informasi tambahan seperti ini disebut **atribut**.

Bayangkan tag sebagai jenis benda, dan atribut sebagai label yang menjelaskan benda itu lebih lanjut. Tag `<input>` memberi tahu browser, “ini kolom masukan”. Atribut `type="number"` memberi tahu, “kolom masukan ini hanya menerima input angka”.

## Bentuk sebuah atribut

Atribut ditulis di dalam tag pembuka. Bentuk yang umum adalah nama atribut, tanda sama dengan, lalu nilainya di dalam tanda petik.

```html
<input type="number">
```

Di sini:

- `input` adalah nama tag.
- `type` adalah nama atribut.
- `"number"` adalah nilai atribut.

Tanda petik membantu browser mengenali dengan jelas awal dan akhir nilai atribut. Biasakan menuliskannya, meskipun nilai yang sederhana sebenarnya tetap bisa ditulis tanpa tanda petik.

Satu tag dapat memiliki lebih dari satu atribut:

```html
<input type="text" id="nama" placeholder="Masukkan nama">
```

Tag tersebut tetap merupakan elemen `<input>`. Atributnya memberi informasi tambahan: jenis masukan, identitas elemen, dan teks petunjuk yang ditampilkan sebelum pengguna mengetik.

Urutan atribut biasanya tidak mengubah makna:

```html
<input id="nama" placeholder="Masukkan nama" type="text">
```

Kedua contoh itu menyatakan informasi yang sama.

## Atribut umum dan atribut khusus

Sebagian atribut dapat digunakan pada banyak jenis elemen. `id` dan `class`, misalnya, sering dipakai untuk memberi penanda pada elemen.

```html
<p id="pengantar">Selamat datang.</p>
<p class="catatan">Periksa kembali informasi yang dimasukkan.</p>
```

`id` memberi sebuah elemen nama pengenal yang harus unik dalam satu halaman. Sementara itu, `class` dapat dipakai oleh banyak elemen sekaligus. Keduanya sering digunakan saat JavaScript memilih elemen atau CSS mengatur tampilannya.

Atribut lain hanya masuk akal pada elemen tertentu. `href` digunakan pada tautan untuk menunjukkan tujuan, sedangkan `src` digunakan pada gambar untuk menunjukkan lokasi berkas.

```html
<a href="https://example.com">Buka situs</a>
<img src="gambar-kucing.jpg" alt="Seekor kucing sedang tidur">
```

Pada tautan, `href` memberi tahu browser ke mana pengguna akan dibawa. Pada gambar, `src` menunjukkan berkas gambar yang perlu ditampilkan. Atribut `alt` menyediakan keterangan teks untuk gambar, misalnya jika gambar tidak dapat dimuat atau jika halaman dibaca menggunakan teknologi bantu seperti pembaca layar (*screen reader*).

## Atribut dalam kode Jajan Tracker

Perhatikan beberapa elemen dari kode yang kamu lampirkan:

```html
<input id="uang" type="number" oninput="cek()">
<button onclick="tambah()">Tambah</button>
```

Setiap atribut menjelaskan sesuatu tentang elemen:

- `id="uang"` memberi kolom tersebut pengenal bernama `uang`.
- `type="number"` memberi tahu browser bahwa kolom itu hanya menerima angka.
- `oninput="cek()"` menjalankan fungsi `cek()` setiap kali isi kolom berubah.
- `onclick="tambah()"` menjalankan fungsi `tambah()` setiap kali tombol diklik.

Atribut `id` juga menjadi jembatan antara HTML dan JavaScript. Di kode yang kamu lampirkan, JavaScript mencari kolom uang menggunakan:

```javascript
document.getElementById("uang")
```

Nama `"uang"` di JavaScript harus cocok dengan nilai `id="uang"` pada HTML. Kalau salah satunya diubah, tetapi yang lain tidak, JavaScript tidak akan menemukan elemen yang dimaksud.

`oninput` dan `onclick` adalah atribut yang merespons tindakan pengguna. Untuk memahami cara kerja respons tersebut lebih dalam, kita akan membahas event pada chapter tersendiri. Untuk sekarang, cukup kenali bahwa atribut dapat berisi informasi, pengenal, atau instruksi yang menghubungkan elemen dengan perilaku tertentu.

Dalam proyek yang lebih besar, event biasanya dipasang dari JavaScript, bukan ditulis langsung sebagai atribut HTML. Namun, mengenali `onclick` dan `oninput` tetap penting karena keduanya sering muncul pada contoh sederhana dan pada kode yang sedang kita pelajari.

## Atribut yang tidak membutuhkan nilai

Tidak semua atribut ditulis dengan pasangan nama dan nilai. Ada atribut yang cukup dicantumkan untuk menyatakan bahwa suatu kondisi berlaku.

```html
<input type="text" required>
```

Atribut `required` menyatakan bahwa kolom tersebut wajib diisi. Atribut seperti ini disebut atribut boolean: keberadaannya berarti kondisi itu aktif. Dalam penulisan HTML sehari-hari, cukup tulis `required` tanpa nilai seperti `required="true"`.

## Beberapa hal yang perlu diingat

Atribut harus ditulis pada tag pembuka elemen. Contoh berikut tidak benar karena `id="nama"` ditulis di luar tag, tepat setelah tanda `>` penutup tag pembuka:

```html
<!-- Tidak benar -->
<input> id="nama"
```

Penulisan yang benar:

```html
<input id="nama">
```

Perhatikan juga penulisan huruf besar dan kecil pada nilai atribut. Nilai `id="nama"` dan `id="Nama"` dianggap berbeda. Nama pengenal yang sama harus digunakan dengan konsisten, terutama jika JavaScript bergantung padanya.
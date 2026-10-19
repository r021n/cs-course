# Chapter 2 — Atribut HTML: Informasi Tambahan pada Elemen

## Mengenal atribut dan bentuk penulisannya

Di chapter sebelumnya, kita melihat bahwa tag memberi tahu browser peran sebuah bagian: `<p>` untuk paragraf, `<h1>` untuk judul utama, dan `<input>` untuk kolom masukan. Namun, kadang nama tag saja belum cukup.

Sebuah kolom masukan, misalnya, bisa menerima teks biasa, angka, atau kata sandi. Browser perlu informasi tambahan agar tahu jenis kolom yang dimaksud. Informasi tambahan seperti ini disebut **atribut**.

Bayangkan tag sebagai jenis benda, dan atribut sebagai label yang menjelaskan benda itu lebih lanjut. Tag `<input>` memberi tahu browser, “ini kolom masukan”. Atribut `type="number"` memberi tahu, “kolom masukan ini hanya menerima input angka”.

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

### Pertanyaan

1. Buatlah kolom masukan yang hanya boleh menerima angka.
   <!-- Jawaban: `<input type="number">` -->
2. Kolom masukan bisa menerima teks biasa, angka, atau kata sandi. Menurut bacaan, bagaimana cara memberi tahu browser jenis kolom yang diinginkan, misalnya kolom yang hanya menerima angka?
   <!-- Jawaban: dengan menulis atribut `type` di dalam tag pembuka, misalnya `type="number"` -->
3. Tulis elemen `<input>` yang memiliki tiga atribut: jenis teks, pengenal `nama`, dan petunjuk 'Masukkan nama'.
   <!-- Jawaban: `<input type="text" id="nama" placeholder="Masukkan nama">` -->
4. Tulis ulang kode berikut dengan urutan atribut yang dibalik tanpa mengubah maknanya: `<input type="text" id="nama">`
   <!-- Jawaban: `<input id="nama" type="text">` -->
5. Perhatikan kode berikut: `<input> id="nama"`. Tulis ulang agar penulisannya benar.
   <!-- Jawaban: `<input id="nama">` -->

---

## Atribut umum, atribut khusus, dan atribut boolean

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

Tidak semua atribut ditulis dengan pasangan nama dan nilai. Ada atribut yang cukup dicantumkan untuk menyatakan bahwa suatu kondisi berlaku.

```html
<input type="text" required>
```

Atribut `required` menyatakan bahwa kolom tersebut wajib diisi. Atribut seperti ini disebut atribut boolean: keberadaannya berarti kondisi itu aktif. Dalam penulisan HTML sehari-hari, cukup tulis `required` tanpa nilai seperti `required="true"`.

### Pertanyaan

1. Buatlah paragraf berisi teks 'Selamat datang.' yang memiliki pengenal `pengantar`.
   <!-- Jawaban: `<p id="pengantar">Selamat datang.</p>` -->
2. Buatlah tautan berlabel 'Buka situs' yang mengarah ke alamat `https://example.com`.
   <!-- Jawaban: `<a href="https://example.com">Buka situs</a>` -->
3. Buatlah gambar dari berkas 'kucing.jpg' yang tetap menampilkan keterangan 'Seekor kucing sedang tidur' jika berkasnya gagal dimuat atau halaman dibaca dengan pembaca layar.
   <!-- Jawaban: `<img src="kucing.jpg" alt="Seekor kucing sedang tidur">` -->
4. Buatlah paragraf berisi teks 'Periksa kembali informasi' yang memiliki kelas `catatan`.
   <!-- Jawaban: `<p class="catatan">Periksa kembali informasi</p>` -->
5. Buatlah kolom masukan bertipe teks yang wajib diisi pengguna.
   <!-- Jawaban: `<input type="text" required>` -->
6. Tulis ulang kode berikut sesuai cara penulisan sehari-hari yang disarankan bacaan: `<input type="text" required="true">`
   <!-- Jawaban: `<input type="text" required>` -->
7. Seorang siswa menulis `<input type="text" required="false">` agar kolom tersebut tidak harus diisi. Menurut bacaan, bagaimana cara yang tepat untuk mencapai hal itu?
   <!-- Jawaban: hapus atribut `required`, sehingga menjadi `<input type="text">` -->

---

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

### Pertanyaan

1. Buatlah kolom masukan berpengenal `uang` yang hanya menerima angka dan menjalankan fungsi `cek()` setiap kali isinya berubah.
   <!-- Jawaban: `<input id="uang" type="number" oninput="cek()">` -->
2. Buatlah tombol berlabel 'Simpan' yang menjalankan fungsi `simpan()` setiap kali diklik.
   <!-- Jawaban: `<button onclick="simpan()">Simpan</button>` -->
3. Di HTML kamu mengubah `id="uang"` menjadi `id="saldo"`, tetapi JavaScript tetap memanggil `document.getElementById("uang")`. Apa yang terjadi pada kode tersebut?
   <!-- Jawaban: JavaScript tidak akan menemukan elemen tersebut -->

---

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

### Pertanyaan

1. JavaScript memanggil `document.getElementById("nama")` untuk mencari sebuah kolom. Tulis elemen kolom masukan yang sesuai agar bisa ditemukan oleh JavaScript itu.
   <!-- Jawaban: `<input id="nama">` -->
2. HTML menulis `id="Nama"`, sedangkan JavaScript mencari `document.getElementById("nama")`. Apa yang terjadi pada kode tersebut?
   <!-- Jawaban: JavaScript tidak akan menemukan elemennya karena kedua nilai dianggap berbeda -->
3. Buatlah paragraf berisi teks 'Judul Bagian' yang memiliki pengenal `judul` sekaligus kelas `besar`.
   <!-- Jawaban: `<p id="judul" class="besar">Judul Bagian</p>` -->

# Chapter 10 — Memperbarui Isi Halaman dengan JavaScript

Setelah JavaScript menemukan elemen melalui DOM, ia dapat mengubah isi elemen tersebut. Misalnya, halaman bisa mengganti pesan setelah tombol ditekan, atau menampilkan hasil perhitungan tanpa memuat ulang seluruh halaman.

Bayangkan halaman web seperti papan pengumuman. HTML menyiapkan papan dan tempat untuk menulis. JavaScript dapat mengubah tulisan di tempat tersebut saat program berjalan.

Misalnya, HTML menyediakan paragraf kosong:

```html
<p id="pesan"></p>
```

JavaScript dapat mencari paragraf itu lalu mengisi teksnya:

```javascript
var elemenPesan = document.getElementById("pesan");
elemenPesan.textContent = "Selamat datang!";
```

Setelah kode dijalankan, tulisan “Selamat datang!” muncul di dalam paragraf. Properti `textContent` membaca atau mengganti isi teks sebuah elemen. Jika isi lama sudah ada, memberikan nilai baru akan menggantikan isi tersebut.

```javascript
elemenPesan.textContent = "Pesan baru";
```

Pada contoh itu, isi sebelumnya diganti dengan “Pesan baru”.

## Menambahkan teks, bukan mengganti semuanya

Kadang kita ingin menambahkan tulisan setelah isi yang sudah ada. Salah satu caranya adalah menggabungkan teks lama dengan teks baru:

```javascript
var daftar = document.getElementById("daftar");

daftar.textContent = daftar.textContent + " Apel";
```

Kode itu membaca teks yang sudah ada, lalu menyimpan kembali teks lama bersama tambahan `" Apel"`. Operator `+=` merupakan bentuk singkat untuk pola seperti itu:

```javascript
daftar.textContent += " Apel";
```

Perlu diingat, cara ini menambahkan teks ke isi yang sudah ada. Jika kode tersebut dijalankan berulang kali, tambahan yang sama akan muncul berulang kali pula.

## Menampilkan struktur HTML

Jika kita ingin memasukkan elemen HTML baru—misalnya sebuah paragraf—kita dapat menggunakan `innerHTML`:

```html
<div id="hasil"></div>
```

```javascript
var hasil = document.getElementById("hasil");
hasil.innerHTML = "<p>Hasil sudah tersedia.</p>";
```

Browser menafsirkan string di dalam `innerHTML` sebagai HTML. Karena itu, teks tersebut tampil sebagai paragraf, bukan sebagai tulisan yang berisi karakter `<` dan `>`.

`innerHTML` juga dapat dipakai untuk menambahkan isi sehingga isi sebelumnya tetap tampil:

```javascript
hasil.innerHTML += "<p>Hasil tambahan.</p>";
```

Namun, `innerHTML +=` punya efek yang perlu diketahui: browser membaca ulang isi HTML yang diberikan, termasuk isi lama, lalu membentuk ulang konten elemen tersebut. Untuk contoh kecil seperti ini, perilakunya tidak menjadi masalah. Dalam kode yang lebih besar, metode seperti `createElement()` dan `append()` sering lebih sesuai untuk membuat elemen baru tanpa menulis potongan HTML sebagai string.

## Pilih `textContent` atau `innerHTML`?

Gunakan `textContent` ketika yang ingin ditampilkan adalah teks biasa:

```javascript
pesan.textContent = "File berhasil disimpan.";
```

Gunakan `innerHTML` ketika memang perlu memasukkan struktur HTML:

```javascript
hasil.innerHTML = "<strong>Berhasil!</strong>";
```

Perbedaan ini juga penting untuk keamanan. Jika teks berasal dari pengguna, hindari memasukkannya langsung ke `innerHTML`:

```javascript
hasil.innerHTML = inputPengguna;
```

Jika pengguna memasukkan sesuatu yang menyerupai kode HTML, browser dapat menafsirkannya sebagai markup. Untuk menampilkan masukan pengguna sebagai tulisan biasa, gunakan `textContent`:

```javascript
hasil.textContent = inputPengguna;
```

Dengan begitu, browser menampilkan isi tersebut sebagai teks, bukan menafsirkannya sebagai HTML.

Pada kode yang kamu lampirkan, `innerHTML` digunakan untuk menambahkan potongan HTML ke bagian hasil. Pola itu membantu menjelaskan bagaimana JavaScript dapat mengisi halaman secara dinamis. Saat membaca kode serupa, perhatikan apakah program sedang mengganti isi elemen atau menambahkan isi, dan apakah nilai yang dimasukkan merupakan teks biasa atau markup HTML.
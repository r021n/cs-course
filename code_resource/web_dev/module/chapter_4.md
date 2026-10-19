# Chapter 4 — DOM: Cara JavaScript Mengakses Halaman

HTML menyusun elemen halaman, tetapi setelah halaman dibuka, JavaScript perlu cara untuk menemukan dan berinteraksi dengan elemen-elemen itu. Browser menyediakan cara tersebut melalui **DOM**, singkatan dari *Document Object Model*.

Bayangkan browser membaca HTML lalu menyusunnya menjadi peta halaman. Judul, paragraf, kolom masukan, dan tombol menjadi bagian-bagian dalam peta itu, lengkap dengan hubungan satu sama lain. JavaScript dapat menggunakan peta tersebut untuk menemukan elemen, membaca nilainya, atau mengubah apa yang tampil.

DOM bukan bahasa lain yang harus ditulis sebagai pengganti HTML. Ia adalah representasi dokumen yang dibuat browser agar program dapat bekerja dengan isi halaman.

## Menemukan elemen di halaman

Salah satu cara mencari elemen adalah memakai `document.getElementById()`. Fungsi ini mencari elemen berdasarkan nilai atribut `id`:

```html
<p id="pesan">Selamat datang.</p>
```

```javascript
var elemenPesan = document.getElementById("pesan");
```

Sekarang, `elemenPesan` merujuk pada elemen paragraf tersebut. JavaScript dapat menggunakannya untuk membaca atau mengubah isi paragraf.

Nilai yang dicari harus cocok dengan `id` di HTML. Jika HTML menggunakan `id="pesan"` tetapi JavaScript mencari `"keterangan"`, elemen itu tidak akan ditemukan. Karena itu, saat membaca kode, perhatikan hubungan antara nilai `id` pada HTML dan string yang ditulis di dalam `getElementById()`.

### Pertanyaan

1. Buatlah elemen paragraf yang memiliki pengenal `pesan` dan berisi teks 'Selamat datang.'
   <!-- Jawaban: `<p id="pesan">Selamat datang.</p>` -->
2. Paragraf pada halaman ditulis `<p id="pesan">Selamat datang.</p>`. Tulis ekspresi JavaScript untuk menemukan paragraf tersebut.
   <!-- Jawaban: `document.getElementById("pesan")` -->

---

## Membaca nilai masukan

Untuk membaca apa yang diketik pengguna ke dalam kolom masukan, JavaScript membaca nilai properti `.value`:

```html
<input id="nama" type="text">
```

```javascript
var namaPengguna = document.getElementById("nama").value;
```

Bagian `document.getElementById("nama")` menemukan kolom masukan tersebut. Setelah itu, `.value` mengambil nilai yang sedang ada di kolom tersebut.

Nilai kolom masukan selalu terbaca sebagai teks. Jadi, meskipun kolomnya memakai `type="number"`, nilainya tetap harus diubah menjadi angka sebelum dipakai untuk perhitungan. Misalkan ada kolom masukan berikut:

```html
<input id="jumlah" type="number">
```

JavaScript membacanya seperti ini:

```javascript
var jumlahTeks = document.getElementById("jumlah").value;
var jumlah = Number(jumlahTeks);
```

Di sini, `jumlahTeks` menyimpan nilai yang sedang ada di kolom masukan saat dibaca, sedangkan `jumlah` menyimpan hasil konversinya menjadi angka.

### Pertanyaan

1. Kolom masukan ditulis `<input id="nama" type="text">`. Tulis ekspresi untuk mengambil nilai yang sedang diketik pengguna ke kolom itu.
   <!-- Jawaban: `document.getElementById("nama").value` -->
2. Kolom `<input id="jumlah" type="number">` berisi angka yang diketik pengguna. Tulis kode untuk membaca kolom itu langsung sebagai angka.
   <!-- Jawaban: `Number(document.getElementById("jumlah").value)` -->

---

## Mengubah isi halaman

JavaScript juga dapat mengubah elemen yang sudah ditemukan. Misalnya, properti `textContent` digunakan untuk membaca atau mengganti teks di dalam elemen:

```html
<p id="pesan">Belum ada pesan.</p>
```

```javascript
var elemenPesan = document.getElementById("pesan");
elemenPesan.textContent = "Halo, Rani!";
```

Setelah baris tersebut dijalankan, teks paragraf berubah. Berkas HTML aslinya tidak ikut berubah, tetapi tampilan halaman bisa berubah selama program berjalan karena JavaScript memperbarui DOM.

Ada juga `innerHTML`, yang membaca atau mengganti isi elemen sebagai HTML:

```javascript
elemenPesan.innerHTML = "<strong>Halo, Rani!</strong>";
```

Dalam contoh ini, teks di dalam `<strong>` ditampilkan tebal karena browser menafsirkan string (teks) tersebut sebagai HTML. Sebaliknya, jika menggunakan `textContent`, rangkaian tag akan dianggap sebagai teks biasa.

Untuk memasukkan teks dari pengguna, `textContent` biasanya pilihan yang lebih aman. `innerHTML` dapat berguna ketika memang ingin memasukkan struktur HTML, tetapi jangan memasukkan teks dari pengguna ke dalamnya secara langsung: teks yang mengandung markup dapat ditafsirkan browser sebagai HTML, bukan sebagai tulisan biasa.

### Pertanyaan

1. Tuliskan nama properti yang mengganti teks di dalam elemen sebagai teks biasa sehingga rangkaian tag di dalamnya tidak dijalankan browser.
   <!-- Jawaban: `textContent` -->
2. Tuliskan nama properti yang menafsirkan string sebagai HTML sehingga tag di dalamnya ikut dijalankan browser.
   <!-- Jawaban: `innerHTML` -->
3. Paragraf `<p id="pesan">Belum ada pesan.</p>` harus menampilkan 'Halo, Rani!' sebagai teks biasa. Tulis satu baris kode langsung tanpa memakai variabel sementara.
   <!-- Jawaban: `document.getElementById("pesan").textContent = "Halo, Rani!"` -->

---

## Mengakses DOM pada kode Jajan Tracker

Pada kode yang kamu lampirkan, JavaScript mengambil nilai uang dengan pola seperti ini:

```javascript
var uang = Number(document.getElementById("uang").value);
```

Cara membacanya dari dalam ke luar:

1. `document.getElementById("uang")` mencari elemen yang memiliki `id="uang"`.
2. `.value` mengambil nilai yang ada di kolom tersebut.
3. `Number(...)` mengubah nilai itu menjadi angka.
4. Hasilnya disimpan ke variabel `uang`.

Kode tersebut juga memakai `innerHTML` untuk mengisi daftar, dimulai dengan mengosongkan isinya lebih dulu:

```javascript
document.getElementById("bisa").innerHTML = "";
```

Baris ini menemukan elemen dengan `id="bisa"`, lalu mengganti isinya dengan teks kosong. Kode setelahnya menambahkan isi baru ke elemen tersebut.

Pola yang sama digunakan pada elemen lain, seperti elemen dengan `id="belum"`. HTML menyediakan elemen dengan `id` tertentu, lalu JavaScript menemukannya melalui DOM untuk membaca atau memperbarui isinya.

### Pertanyaan

1. Tulis satu baris kode untuk membaca kolom `id="uang"` sebagai angka.
   <!-- Jawaban: `Number(document.getElementById("uang").value)` -->
2. Sebelum daftar baru ditambahkan, kode mengosongkan isi elemen `id="bisa"` dengan `innerHTML`. Tulis baris tersebut.
   <!-- Jawaban: `document.getElementById("bisa").innerHTML = ""` -->
3. Tuliskan nilai `id` elemen lain yang diperbarui dengan pola yang sama seperti elemen `bisa`.
   <!-- Jawaban: `belum` -->

---

## Mengapa DOM penting?

DOM adalah penghubung antara halaman HTML dan kode JavaScript. Tanpanya, JavaScript tidak bisa mengetahui nilai yang diketik pengguna atau memperbarui bagian halaman tertentu.

Saat membaca kode yang mengakses halaman, coba telusuri urutannya: elemen mana yang dicari, nilai atau bagian mana yang dibaca, lalu perubahan apa yang dilakukan. Cara itu membantu membedakan apakah JavaScript sedang **mengambil informasi dari halaman** atau **mengubah halaman**.

### Pertanyaan

1. Tuliskan nama model yang menjadi penghubung antara halaman HTML dan kode JavaScript.
   <!-- Jawaban: `DOM` -->
2. Paragraf `<p id="pesan">Belum ada pesan.</p>` harus menampilkan `<strong>Halo</strong>` sebagai HTML sehingga tulisannya tampil tebal. Tulis satu baris kode langsung tanpa memakai variabel sementara.
   <!-- Jawaban: `document.getElementById("pesan").innerHTML = "<strong>Halo</strong>"` -->

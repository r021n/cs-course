# Panduan Belajar OverTheWire Natas — Level 13 (Menyamar sebagai Gambar dengan *Magic Bytes*)

- **Target Tantangan:** `http://natas13.natas.labs.overthewire.org`
- **Username:** `natas13` (gunakan password dari Level 12)
- **Tujuan:** Menemukan password untuk masuk ke **Level 14** (`natas14`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Apa Itu *Magic Bytes* (*File Signature*)?

Di Level 13, pembuat website sadar akan celah Level 12. Kini server memeriksa isi file yang diunggah menggunakan fungsi PHP **`exif_imagetype()`** untuk memastikan file tersebut benar-benar gambar ([rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da)).

Bagaimana komputer tahu bahwa sebuah file adalah gambar JPEG, GIF, atau PNG tanpa melihat ekstensinya? Jawabannya adalah **Magic Bytes** (*tanda tangan file*), yaitu beberapa byte pertama di bagian paling awal isi file!
- File **GIF** selalu diawali teks **`GIF89a`** (atau `GIF87a`).
- File **JPEG** selalu diawali byte hex **`FF D8 FF`** ([NetSPI](https://www.netspi.com/blog/technical-blog/web-application-pentesting/magic-bytes-identifying-common-file-formats-at-a-glance/)).

Lucunya, fungsi `exif_imagetype()` hanya mengintip **beberapa huruf/byte pertama** saja. Jadi kalau kita menaruh `GIF89a` di baris pertama lalu menaruh kode PHP setelahnya, server akan tertipu dan mengira file itu gambar asli! ([rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da)).


*Ilustrasi: Tampilan byte awal (Magic Bytes) pada sebuah file saat dibuka dengan Hex Editor untuk mengenali format aslinya ([Sumber: NetSPI](https://www.netspi.com/blog/technical-blog/web-application-pentesting/magic-bytes-identifying-common-file-formats-at-a-glance/)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Apa yang diperiksa oleh fungsi PHP `exif_imagetype()` saat seseorang mengunggah file?**
- A. Ukuran layar komputer pengunggah
- B. Beberapa byte pertama (*magic bytes* / tanda tangan file) untuk menebak jenis gambar
- C. Nama pembuat foto
- D. Kecepatan internet pengunggah

**2. Jika kita membuat file yang diawali teks `GIF89a` lalu diikuti kode `<?php ... ?>`, mengapa server PHP tetap mau mengeksekusinya saat disimpan sebagai `.php`?**
- A. Karena server mengira `GIF89a` hanyalah teks HTML biasa sebelum tag `<?php` dimulai
- B. Karena `GIF89a` adalah perintah bahasa PHP
- C. Karena server menghapus `GIF89a` secara otomatis
- D. Karena file GIF tidak bisa dibuka di browser

---

## 2. Langkah Pengerjaan Natas Level 13

1. Login ke `http://natas13.natas.labs.overthewire.org` sebagai `natas13`. Halaman kini menampilkan peringatan: *"For security reasons, we now only accept image files!"* ([LearnHacking.io](https://learnhacking.io/overthewire-natas-level-13-walkthrough/)).


*Tangkapan layar Natas Level 13: Pemberitahuan bahwa server kini hanya menerima file gambar ([Sumber: LearnHacking.io](https://learnhacking.io/overthewire-natas-level-13-walkthrough/)).*

2. Buat file teks bernama `gambar_palsu.php` di komputermu (pakai Notepad atau teks editor biasa) dengan menaruh header GIF di bagian paling atas:
   ```php
   GIF89a
   <?php
   echo file_get_contents("/etc/natas_webpass/natas14");
   ?>
   ```
   *(Atau bisa juga menggunakan header JPEG `\xFF\xD8\xFF\xE0` lewat terminal)* ([rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da)).
3. Pilih file `gambar_palsu.php` di tombol **Choose File**.
4. Sama seperti Level 12, tekan **`F12`** (tab **Elements**), cari `<input type="hidden" name="filename" value="...jpg">`, dan ubah `.jpg` menjadi **`.php`** ([rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da)).
5. Klik **Upload File**. Karena ada `GIF89a` di awal file, pemeriksaan `exif_imagetype()` akan lolos!
6. Klik tautan `upload/xxxxxxxxxx.php` yang muncul di layar, dan password **natas14** akan tampil setelah teks `GIF89a`.

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Nama fungsi PHP yang digunakan di Natas Level 13 untuk memeriksa tanda tangan gambar pada file yang diunggah adalah:**
Jawaban: `________`

**2. Tuliskan 6 karakter header teks standar milik format gambar GIF yang paling mudah diketik di Notepad untuk mengelabui pemeriksa gambar:**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** B (Beberapa byte pertama / *magic bytes* untuk menebak jenis gambar)
> - **Pilgan 2:** A (Karena server mengira `GIF89a` hanyalah teks HTML biasa sebelum tag `<?php` dimulai)
> - **Jawaban Singkat 1:** `exif_imagetype` (atau `exif_imagetype()`)
> - **Jawaban Singkat 2:** `GIF89a` (atau `GIF87a`)

**Pesan Keamanan:** Memeriksa *magic bytes* saja belum cukup aman jika ekstensi file masih bisa diubah menjadi `.php`. Selalu paksa ekstensi file yang diizinkan (*whitelist*), simpan file di luar folder eksekusi skrip, atau proses ulang gambar sebelum disimpan.

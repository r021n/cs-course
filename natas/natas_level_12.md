# Panduan Belajar OverTheWire Natas — Level 12 (Mengunggah Skrip PHP lewat Celah *File Upload*)

- **Target Tantangan:** `http://natas12.natas.labs.overthewire.org`
- **Username:** `natas12` (gunakan password dari Level 11)
- **Tujuan:** Menemukan password untuk masuk ke **Level 13** (`natas13`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Bahaya Mengunggah File Tanpa Validasi di Server

Banyak website memiliki fitur unggah (*upload*) foto profil atau gambar. Seharusnya, server hanya menerima file gambar (seperti `.jpg` atau `.png`).

Namun, jika server langsung memercayai nama file atau ekstensi yang dikirim dari formulir HTML di browser pengguna tanpa memeriksanya ulang di server, seseorang bisa mengganti ekstensinya menjadi **`.php`**! Karena server web menjalankan file `.php` sebagai program, file tersebut bisa dipakai untuk membaca file rahasia di dalam server ([rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da)).


*Ilustrasi: Jika file `.php` berhasil diunggah ke server, server akan mengeksekusi kode di dalamnya saat file tersebut dibuka di browser ([Sumber: ResearchGate](https://www.researchgate.net/figure/Php-source-code-programing-with-data-flow-source-11_fig5_314133708)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Mengapa mengizinkan pengguna mengunggah file berekstensi `.php` ke folder publik sangat berbahaya bagi server?**
- A. Karena file `.php` berukuran terlalu besar
- B. Karena server dapat mengeksekusi kode program di dalam file `.php` tersebut saat diakses lewat browser
- C. Karena file `.php` membuat layar monitor berkedip
- D. Karena file `.php` otomatis mengubah tema browser

**2. Di Natas Level 12, pengembang menaruh nama ekstensi file `.jpg` di dalam formulir HTML (`<input type="hidden">`). Mengapa cara ini tidak aman?**
- A. Karena pengunjung bisa mengubah nilai elemen HTML tersebut lewat Developer Tools (`F12`) sebelum mengunggah file
- B. Karena browser tidak bisa membaca file `.jpg`
- C. Karena ukuran maksimalnya 1 KB
- D. Karena formulir HTML hanya bekerja di ponsel

---

## 2. Langkah Pengerjaan Natas Level 12

1. Login ke `http://natas12.natas.labs.overthewire.org` sebagai `natas12`. Halaman meminta kita mengunggah gambar JPEG berukuran maksimal 1 KB ([Matt Andreko](https://mattandreko.com/blogs/2012-11-11-overthewire-natas-level-12/)).


*Tangkapan layar Natas Level 12: Formulir unggah gambar "Choose a JPEG to upload (max 1KB):" ([Sumber: Matt Andreko](https://mattandreko.com/blogs/2012-11-11-overthewire-natas-level-12/)).*

2. Klik **View sourcecode**. Terlihat bahwa server mengambil nama ekstensi dari input tersembunyi bernama `filename` yang ada di formulir HTML (bawaannya berakhiran `.jpg`) ([The Raw Bit](https://blog.sudarshandevkota.com.np/overthewire-natas-walkthrough)).
3. Buat sebuah file teks di komputermu lalu tuliskan kode di bawah, namai dengan ekstensi `.php` misalnya `ambil.php`,  kode ini berfungsi untuk membaca password level berikutnya yaitu natas13 ([rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da)):
   ```php
   <?php
   echo file_get_contents("/etc/natas_webpass/natas13");
   ?>
   ```
4. Di halaman Natas 12, pilih file `ambil.php` melalui tombol **Choose File** (jangan klik *Upload File* dulu!).
5. Tekan **`F12`** untuk membuka Developer Tools > tab **Elements**, lalu cari tag `<input type="hidden" name="filename" value="...jpg">`. Klik dua kali pada `.jpg` dan ubah menjadi **`.php`** ([rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da)).
6. Sekarang klik **Upload File**. Halaman akan menampilkan tautan ke `upload/xxxxxxxxxx.php`. Klik tautan tersebut, dan password **natas13** akan langsung muncul di layar!

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Ekstensi file apa yang harus kita isikan pada input `filename` di HTML agar server mau menjalankan kode pembaca password kita?**
Jawaban: `________`

**2. Di folder manakah file yang berhasil diunggah pada Natas Level 12 disimpan oleh server?**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** B (Karena server dapat mengeksekusi kode program di dalam file `.php` tersebut saat diakses lewat browser)
> - **Pilgan 2:** A (Karena pengunjung bisa mengubah nilai elemen HTML tersebut lewat Developer Tools `F12` sebelum mengunggah file)
> - **Jawaban Singkat 1:** `.php` (atau `php`)
> - **Jawaban Singkat 2:** `upload/` (atau `upload`)

**Pesan Keamanan:** Jangan pernah memercayai nama file atau input formulir dari browser. Selalu periksa ekstensi dan isi file di sisi server (*server-side*), dan matikan izin eksekusi skrip di dalam folder tempat menyimpan file unggahan pengguna ([rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da)).

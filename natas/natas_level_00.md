# Panduan Belajar OverTheWire Natas — Level 0 (Mengintip Kode HTML Halaman Web)

- **Target Tantangan:** `http://natas0.natas.labs.overthewire.org`
- **Username & Password Awal:** `natas0` / `natas0`
- **Tujuan:** Menemukan password untuk masuk ke **Level 1** (`natas1`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Mengenal Apa Itu HTML dan *Source Code*

Saat kamu membuka sebuah halaman web di browser (seperti Google Chrome, Firefox, atau Edge), browser sebenarnya sedang membaca sebuah file teks berisi kode bernama **HTML** (*HyperText Markup Language*), lalu menerjemahkannya menjadi tampilan yang rapi berisi teks, gambar, dan tombol.

Bayangkan HTML seperti **resep masakan**, sedangkan tampilan web di layar adalah **makanan yang sudah jadi**. Kadang, pembuat website menuliskan catatan rahasia di dalam resep (disebut **komentar HTML**) yang tidak ikut tampil di layar, tetapi tetap bisa dibaca jika kita melihat *source code* (kode sumber) halaman tersebut ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).


*Ilustrasi: Tampilan kode sumber HTML (`View Page Source`) di browser ([Sumber: Jim Nielsen's Blog](https://blog.jim-nielsen.com/2020/the-spirit-of-view-source/)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Apa fungsi utama dari fitur *View Page Source* di browser?**
- A. Menghapus riwayat pencarian internet
- B. Melihat kode sumber HTML asli di balik tampilan halaman web
- C. Mengubah warna tema browser menjadi gelap
- D. Mempercepat koneksi Wi-Fi

**2. Di dalam HTML, penulis kode sering meninggalkan catatan yang tidak terlihat di halaman web biasa. Catatan ini disebut...**
- A. Komentar HTML (`<!-- ... -->`)
- B. Judul Halaman (`<title>`)
- C. Tautan (`<a>`)
- D. Paragraf (`<p>`)

---

## 2. Langkah Pengerjaan Natas Level 0

Ikuti langkah-langkah berikut dengan santai:

1. Buka browser di komputermu, lalu ketik alamat: `http://natas0.natas.labs.overthewire.org` ([OverTheWire Natas](https://overthewire.org/wargames/natas/)).
2. Saat muncul kotak login (*Sign in*), masukkan:
   - **Username:** `natas0`
   - **Password:** `natas0`
3. Di halaman utama, kamu akan melihat pesan: *"You can find the password for the next level on this page."* Namun, password tersebut tidak terlihat di layar ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).
4. Klik kanan di area kosong halaman web, lalu pilih **View Page Source** (Lihat Sumber Halaman), atau tekan tombol **`Ctrl + U`** di keyboard (Windows/Linux) / **`Cmd + Option + U`** (Mac). Kamu juga bisa menekan tombol **`F12`** untuk membuka *Developer Tools* (*DevTools*) pada tab **Elements** ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).


*Tangkapan layar ilustrasi: Menggunakan tab Elements di Developer Tools (`F12`) untuk memeriksa struktur HTML halaman ([Sumber: Command Line Fanatic](https://commandlinefanatic.com/cgi-bin/showarticle.cgi?article=art033)).*

5. Cari baris komentar HTML yang bertuliskan `<!--The password for natas1 is ... -->`. Salin dan catat password tersebut untuk lanjut ke Level 1!

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Kombinasi tombol keyboard apa yang bisa ditekan di Windows untuk langsung membuka halaman *View Page Source*?**
Jawaban: `________`

**2. Untuk masuk ke `natas0.natas.labs.overthewire.org`, username dan password awal yang diberikan oleh OverTheWire adalah kata yang sama, yaitu:**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** B (Melihat kode sumber HTML asli di balik tampilan halaman web)
> - **Pilgan 2:** A (Komentar HTML `<!-- ... -->`)
> - **Jawaban Singkat 1:** `Ctrl + U`
> - **Jawaban Singkat 2:** `natas0`

**Pesan Keamanan:** Jangan pernah menyimpan password, kunci rahasia, atau informasi sensitif di dalam komentar HTML, karena siapa pun yang mengunjungi website bisa membukanya dengan mudah ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).

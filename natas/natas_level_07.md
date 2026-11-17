# Panduan Belajar OverTheWire Natas — Level 7 (Menjelajahi File Sistem lewat *Directory Traversal / LFI*)

- **Target Tantangan:** `http://natas7.natas.labs.overthewire.org`
- **Username:** `natas7` (gunakan password dari Level 6)
- **Tujuan:** Menemukan password untuk masuk ke **Level 8** (`natas8`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Mengenal *Directory Traversal* dan *Local File Inclusion (LFI)*

Pernah melihat alamat web yang berakhiran `?page=home` atau `?page=about`? Bagian setelah tanda tanya (`?`) disebut **parameter URL**. Di server, kode PHP mungkin langsung mengambil isi file sesuai tulisan di parameter `page` tersebut.

Bayangkan jika petugas arsip tidak memeriksa permintaanmu dan langsung mengambilkan file apa pun yang kamu tulis. Jika kamu menulis `../../../../etc/natas_webpass/natas8`, tanda `../` berarti **"naik satu folder ke atas"**. Dengan naik beberapa tingkat folder, kamu bisa keluar dari folder website dan membaca file rahasia di sistem server! Celah ini disebut **Directory Traversal** atau **Local File Inclusion (LFI)** ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).


*Ilustrasi: Penyerang mengirimkan jalur folder rahasia melalui parameter URL sehingga server mengembalikan file sistem privat ([Sumber: Wallarm](https://www.wallarm.com/what/path-traversal-attack)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Dalam sistem file komputer (seperti Linux maupun Windows), simbol `../` pada alamat jalur file berarti...**
- A. Menghapus folder saat ini
- B. Naik satu tingkat ke folder induk (*parent directory*)
- C. Menggandakan file menjadi dua
- D. Memulai ulang komputer

**2. Mengapa celah *Local File Inclusion (LFI)* bisa terjadi pada parameter `?page=...`?**
- A. Karena server langsung memuat file sesuai input URL tanpa menyaring atau membatasi daftar halaman yang diizinkan
- B. Karena ukuran layar monitor terlalu kecil
- C. Karena koneksi internet terlalu lambat
- D. Karena browser tidak mendukung gambar

---

## 2. Langkah Pengerjaan Natas Level 7

1. Login ke `http://natas7.natas.labs.overthewire.org` sebagai `natas7`. Di halaman utama ada dua tautan: **Home** dan **About** ([Hacking Articles](https://www.hackingarticles.in/overthewire-natas-walkthrough-0-11/)).
2. Jika kamu mengklik **Home**, alamat di browser berubah menjadi `http://natas7.natas.labs.overthewire.org/index.php?page=home`.
3. Tekan **`Ctrl + U`** untuk melihat kode sumber HTML. Di dalamnya ada komentar petunjuk:
   `<!-- hint: password for webuser natas8 is in /etc/natas_webpass/natas8 -->` ([Hritesh J - Medium](https://greenorangge1.medium.com/overthewire-natas-level-6-7-ab798fb15e05)).
4. Ubah nilai parameter `page=` di address bar browser menjadi lokasi file tersebut (bisa memakai jalur absolut langsung atau jalur relatif dengan `../`):
   `http://natas7.natas.labs.overthewire.org/index.php?page=/etc/natas_webpass/natas8` (atau `../../../../etc/natas_webpass/natas8`) ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).


*Tangkapan layar pengerjaan Natas Level 7: Mengubah parameter `index.php?page=../../../../etc/natas_webpass/natas8` langsung menampilkan password `natas8` ([Sumber: HackMethod](https://hackmethod.com/overthewire-natas-7/)).*

5. Tekan Enter, dan password untuk **natas8** akan langsung muncul di layar!

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Di direktori sistem Linux manakah seluruh password level Natas disimpan menurut petunjuk pada Natas Level 7?**
Jawaban: `________`

**2. Nama parameter URL yang digunakan untuk memilih halaman pada `index.php` di Natas Level 7 adalah:**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** B (Naik satu tingkat ke folder induk / *parent directory*)
> - **Pilgan 2:** A (Karena server langsung memuat file sesuai input URL tanpa menyaring daftar halaman yang diizinkan)
> - **Jawaban Singkat 1:** `/etc/natas_webpass/natas8` (atau `/etc/natas_webpass/`)
> - **Jawaban Singkat 2:** `page`

**Pesan Keamanan:** Jangan pernah memasukkan input pengguna dari URL langsung ke fungsi pembaca file. Gunakan daftar putih (*whitelist*) halaman yang diperbolehkan saja ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).

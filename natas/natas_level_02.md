# Panduan Belajar OverTheWire Natas — Level 2 (Menjelajahi Folder Terbuka / *Directory Listing*)

- **Target Tantangan:** `http://natas2.natas.labs.overthewire.org`
- **Username:** `natas2` (gunakan password dari Level 1)
- **Tujuan:** Menemukan password untuk masuk ke **Level 3** (`natas3`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Apa Itu *Directory Listing*?

Bayangkan sebuah website seperti lemari arsip berisi banyak folder. Normalnya, jika kamu mengetik alamat sebuah folder di browser, server hanya akan menampilkan halaman utama atau pesan *"Akses Ditolak"*.

Namun, jika pengelola website lupa mematikan fitur **Directory Listing** (Daftar Direktori), siapa saja yang mengetik alamat folder tersebut bisa melihat **seluruh daftar file di dalamnya**, mirip seperti membuka folder di Windows Explorer ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).


*Ilustrasi: Tampilan "Index of" ketika fitur Directory Listing dibiarkan aktif di server web ([Sumber: TecAdmin](https://tecadmin.net/disable-directory-listing-apache/)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Apa risiko keamanan jika fitur *Directory Listing* dibiarkan aktif pada sebuah server web?**
- A. Website menjadi tidak bisa dibuka di ponsel
- B. Pengunjung dapat melihat dan mengunduh file sensitif yang ada di dalam folder tersebut
- C. Gambar di website berubah menjadi hitam putih
- D. Password pengguna otomatis diacak

**2. Jika sebuah gambar dipanggil di kode HTML dengan tag `<img src="files/pixel.png">`, di folder manakah file gambar tersebut berada?**
- A. Folder `images/`
- B. Folder `files/`
- C. Folder `assets/`
- D. Folder `pixel/`

---

## 2. Langkah Pengerjaan Natas Level 2

1. Masuk ke `http://natas2.natas.labs.overthewire.org` dengan username `natas2` dan password dari Level 1. Di layar hanya tertulis: *"There is nothing on this page"* ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).


*Tangkapan layar Natas Level 2: Halaman tampak kosong bertuliskan "There is nothing on this page" ([Sumber: n0j Blog](https://n0j.github.io/2015/09/17/otw-natas-0-9.html)).*

2. Buka kode sumber halaman (`Ctrl + U` atau `F12`). Di dalamnya ada baris tersembunyi yang memanggil gambar sangat kecil (1x1 piksel): `<img src="files/pixel.png">` ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).


*Tangkapan layar pengerjaan Natas Level 2: Kode sumber HTML mengarah ke folder `files/pixel.png` ([Sumber: Matt Andreko](https://mattandreko.com/blogs/2012-11-01-overthewire-natas-level-2/)).*

3. Coba buka alamat foldernya langsung di browser: `http://natas2.natas.labs.overthewire.org/files/`.
4. Karena *Directory Listing* aktif, kamu akan melihat daftar file di folder `files/`, termasuk sebuah file bernama **`users.txt`** ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).
5. Klik `users.txt` (atau buka `http://natas2.natas.labs.overthewire.org/files/users.txt`) dan temukan baris milik `natas3` untuk mendapatkan password-nya!

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Apa nama file teks yang ditemukan di dalam folder `/files/` pada Natas Level 2 yang berisi daftar username dan password?**
Jawaban: `________`

**2. Berapa ukuran gambar `pixel.png` yang disisipkan pada halaman Natas Level 2?**
Jawaban: `________` piksel

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** B (Pengunjung dapat melihat dan mengunduh file sensitif yang ada di dalam folder tersebut)
> - **Pilgan 2:** B (Folder `files/`)
> - **Jawaban Singkat 1:** `users.txt`
> - **Jawaban Singkat 2:** `1x1` (atau `1 x 1`)

**Pesan Keamanan:** Selalu matikan fitur *Directory Listing* di server web dan jangan pernah menyimpan file berisi daftar password di folder yang bisa diakses publik ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).

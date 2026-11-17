# Panduan Belajar OverTheWire Natas — Level 1 (Membuka Kode Sumber Saat Klik Kanan Diblokir)

- **Target Tantangan:** `http://natas1.natas.labs.overthewire.org`
- **Username:** `natas1` (gunakan password yang kamu temukan di Level 0)
- **Tujuan:** Menemukan password untuk masuk ke **Level 2** (`natas2`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Mengapa Klik Kanan Bisa Diblokir?

Di Level 1, pembuat website mencoba trik klasik untuk mencegah pengunjung mengintip kode HTML: mereka menonaktifkan menu **klik kanan** menggunakan sedikit kode JavaScript (`oncontextmenu`) ([MayADevBe Blog](https://mayadevbe.me/posts/overthewire/natas/natas1/)). Jika kamu mencoba klik kanan di halaman ini, akan muncul peringatan *"rightclicking has been blocked!"*.

Namun, memblokir klik kanan **tidak benar-benar menyembunyikan kode HTML**. Browser tetap harus mengunduh seluruh kode HTML agar halaman bisa tampil di layar. Kita hanya perlu memakai pintu masuk lain selain klik kanan, yaitu **pintasan keyboard** atau **Developer Tools (DevTools)** ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).


*Ilustrasi: Panel Elements di Developer Tools browser yang tetap bisa dibuka meskipun klik kanan dimatikan ([Sumber: Command Line Fanatic](https://commandlinefanatic.com/cgi-bin/showarticle.cgi?article=art033)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Mengapa memblokir klik kanan tidak efektif untuk menyembunyikan password di dalam HTML?**
- A. Karena browser tetap mengunduh kode HTML dan pengguna bisa melihatnya lewat DevTools atau pintasan keyboard
- B. Karena klik kanan hanya berfungsi di sistem operasi Linux
- C. Karena password otomatis dikirim lewat email pengguna
- D. Karena kode HTML akan terhapus setelah 5 detik

**2. Tombol fungsi tunggal di keyboard yang umum digunakan untuk membuka *Developer Tools* di Chrome atau Firefox adalah...**
- A. `F1`
- B. `F5`
- C. `F12`
- D. `Esc`

---

## 2. Langkah Pengerjaan Natas Level 1

1. Buka `http://natas1.natas.labs.overthewire.org` dan login menggunakan username `natas1` beserta password dari Level 0 ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).
2. Halaman akan menampilkan pesan: *"You can find the password for the next level on this page, but rightclicking has been blocked!"*
3. Karena klik kanan diblokir, gunakan salah satu dari tiga cara berikut:
   - Tekan **`F12`** pada keyboard untuk membuka **Developer Tools**, lalu lihat tab **Elements** (Chrome) atau **Inspector** (Firefox).
   - Tekan **`Ctrl + U`** di keyboard untuk langsung membuka tab kode sumber.
   - Ketik langsung di address bar browser: `view-source:http://natas1.natas.labs.overthewire.org/` ([noobfromPitt](https://noobfrompitt.github.io/overthewire-natas1/)).


*Tangkapan layar pengerjaan Natas Level 1: Terlihat atribut `oncontextmenu` yang memblokir klik kanan serta komentar HTML berisi password `natas2` di tab Inspector ([Sumber: MayADevBe Blog](https://mayadevbe.me/posts/overthewire/natas/natas1/)).*

4. Baca komentar HTML di dalam tag `<div id="content">` untuk mendapatkan password **natas2**.

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Awalan teks (protokol) apa yang dapat ditambahkan di depan URL pada address bar browser untuk melihat kode sumber suatu halaman secara langsung?**
Jawaban: `________`

**2. Atribut HTML pada tag `<body>` yang digunakan di Natas Level 1 untuk memblokir klik kanan bernama:**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** A (Karena browser tetap mengunduh kode HTML dan pengguna bisa melihatnya lewat DevTools atau pintasan keyboard)
> - **Pilgan 2:** C (`F12`)
> - **Jawaban Singkat 1:** `view-source:`
> - **Jawaban Singkat 2:** `oncontextmenu`

**Pesan Keamanan:** Pembatasan di sisi pengguna (*client-side*) seperti memblokir klik kanan sangat mudah dilewati dan tidak pernah bisa menggantikan keamanan di sisi server (*server-side*) ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).

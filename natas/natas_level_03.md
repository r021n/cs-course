# Panduan Belajar OverTheWire Natas — Level 3 (Mengintip File `robots.txt`)

- **Target Tantangan:** `http://natas3.natas.labs.overthewire.org`
- **Username:** `natas3` (gunakan password dari Level 2)
- **Tujuan:** Menemukan password untuk masuk ke **Level 4** (`natas4`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Mengenal File `robots.txt`

Pernahkah kamu bertanya-tanya bagaimana Google bisa menemukan jutaan halaman website di seluruh dunia? Google memakai program robot otomatis yang disebut **web crawler** (perayap web).

Agar robot-robot mesin pencari ini tidak memasukkan halaman tertentu ke hasil pencarian Google, pemilik website membuat file teks bernama **`robots.txt`** di alamat utama website (contoh: `website.com/robots.txt`). Di dalamnya ada aturan seperti `Disallow: /folder-rahasia/` yang artinya *"Hai robot Google, tolong jangan indeks folder ini!"* ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).

Masalahnya, `robots.txt` itu **bukan gembok pengaman**, melainkan hanya papan pengumuman! Siapa pun (termasuk manusia) tetap bisa membuka `robots.txt` dan malah jadi tahu lokasi folder rahasia yang sengaja disembunyikan dari Google ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).


*Ilustrasi: Cara kerja perintah `User-Agent` dan `Disallow` di dalam file `robots.txt` ([Sumber: GeeksforGeeks](https://www.geeksforgeeks.org/techtips/role-of-robots-txt-file-in-seo/)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Apa fungsi sebenarnya dari file `robots.txt` pada sebuah website?**
- A. Mengunci folder dengan password agar tidak bisa dibuka manusia
- B. Memberi tahu robot mesin pencari (seperti Google) halaman atau folder mana yang tidak perlu diindeks
- C. Menghapus virus dari komputer pengunjung
- D. Memperbaiki tampilan HTML yang rusak

**2. Dalam file `robots.txt`, kata kunci apa yang digunakan untuk melarang robot mesin pencari mengakses suatu folder?**
- A. `Allow`
- B. `Password`
- C. `Disallow`
- D. `Block`

---

## 2. Langkah Pengerjaan Natas Level 3

1. Login ke `http://natas3.natas.labs.overthewire.org` dengan username `natas3` dan password dari Level 2.
2. Buka kode sumber halaman (`Ctrl + U`). Di sana terdapat komentar petunjuk: `<!-- No more information leaks!! Not even Google will find it this time... -->` ([Hacking Articles](https://www.hackingarticles.in/overthewire-natas-walkthrough-0-11/)).
3. Petunjuk *"Not even Google will find it"* mengarah langsung ke file `robots.txt`. Buka alamat `http://natas3.natas.labs.overthewire.org/robots.txt` di browser ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).


*Tangkapan layar pengerjaan Natas Level 3: File `robots.txt` menampilkan baris `Disallow: /s3cr3t/` ([Sumber: noobfromPitt](https://noobfrompitt.github.io/overthewire-natas1/)).*

4. Kamu akan melihat tulisan `Disallow: /s3cr3t/`. Sekarang buka `http://natas3.natas.labs.overthewire.org/s3cr3t/` di browser!
5. Di dalam folder `/s3cr3t/`, terdapat file `users.txt`. Klik file tersebut untuk melihat password **natas4** ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Nama folder tersembunyi yang tertulis pada baris `Disallow:` di `robots.txt` Natas Level 3 adalah:**
Jawaban: `________`

**2. Di dalam folder tersembunyi tersebut, file apa yang berisi password untuk `natas4`?**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** B (Memberi tahu robot mesin pencari halaman atau folder mana yang tidak perlu diindeks)
> - **Pilgan 2:** C (`Disallow`)
> - **Jawaban Singkat 1:** `/s3cr3t/` (atau `s3cr3t`)
> - **Jawaban Singkat 2:** `users.txt`

**Pesan Keamanan:** Jangan pernah mengandalkan `robots.txt` untuk melindungi data rahasia. Jika suatu file atau folder memang tidak boleh diakses publik, lindungi dengan autentikasi di server, bukan hanya menyembunyikannya dari mesin pencari ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).

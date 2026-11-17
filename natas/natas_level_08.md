# Panduan Belajar OverTheWire Natas — Level 8 (Membalikkan Sandi *Hex*, *Reverse*, dan *Base64*)

- **Target Tantangan:** `http://natas8.natas.labs.overthewire.org`
- **Username:** `natas8` (gunakan password dari Level 7)
- **Tujuan:** Menemukan password untuk masuk ke **Level 9** (`natas9`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Mengenal *Encoding* (Pengodean Teks) vs Enkripsi

Di komputer, teks bisa diubah formatnya agar mudah dikirim atau disimpan, misalnya dengan **Base64** atau **Hexadecimal (Hex)**. Proses mengubah format teks ini disebut **encoding** (*pengodean*).

Penting untuk diingat: **Encoding BUKAN enkripsi!** Jika enkripsi membutuhkan kunci rahasia untuk membukanya, *encoding* seperti Base64 dan Hex menggunakan aturan umum yang bisa dibalikkan (*decode*) oleh siapa saja yang tahu langkah-langkahnya ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).


*Ilustrasi: Cara kerja Base64 mengubah karakter biasa menjadi deretan huruf/angka Base64 melalui representasi biner 6-bit ([Sumber: Zig Book](https://pedropark99.github.io/zig-book/Chapters/01-base64.html)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Manakah pernyataan yang benar mengenai perbedaan *encoding* (seperti Base64) dan enkripsi?**
- A. *Encoding* tidak memerlukan kunci rahasia dan dapat dibalikkan dengan mudah jika tahu formatnya
- B. *Encoding* lebih kuat daripada enkripsi modern
- C. *Encoding* hanya bisa dibuka oleh pembuat komputer
- D. *Encoding* mengubah teks menjadi gambar JPEG

**2. Jika sebuah kata diubah dengan urutan: `(1) Base64` → `(2) Dibalik urutannya (Reverse)` → `(3) Hex`, maka urutan langkah untuk mengembalikannya ke kata asli adalah...**
- A. `(1) Base64 Decode` → `(2) Reverse` → `(3) Hex Decode`
- B. `(1) Hex Decode` → `(2) Reverse` → `(3) Base64 Decode`
- C. `(1) Reverse` → `(2) Hex Decode` → `(3) Base64 Decode`
- D. `(1) Hex Encode` → `(2) Reverse` → `(3) Base64 Encode`

---

## 2. Langkah Pengerjaan Natas Level 8

1. Login ke `http://natas8.natas.labs.overthewire.org` sebagai `natas8`, lalu klik **View sourcecode** (`index-source.html`) ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).


*Tangkapan layar kode sumber PHP Natas Level 8: Terlihat variabel `$encodedSecret` dan fungsi `encodeSecret` ([Sumber: Medium - jsinix](https://medium.com/overthewire-natas-writeup-by-jsinix/overthewire-natas-level-7-level-8-c5c06a13303e)).*

2. Perhatikan dua bagian penting di kode PHP tersebut:
   - `$encodedSecret = "3d3d516343746d4d6d6c315669563362";`
   - `function encodeSecret($secret) { return bin2hex(strrev(base64_encode($secret))); }` ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).
3. Fungsi `encodeSecret` melakukan 3 hal dari dalam ke luar:
   1. `base64_encode`: Mengubah teks ke format Base64.
   2. `strrev`: Membalik urutan huruf dari belakang ke depan (*string reverse*).
   3. `bin2hex`: Mengubah karakter menjadi kode Hexadecimal.
4. Untuk membongkarnya, kita cukup membalik urutannya dari luar ke dalam (bisa memakai alat web gratis seperti **CyberChef** atau PHP/Python):
   - **Hex ke Teks (`hex2bin`):** `3d3d516343746d4d6d6c315669563362` menjadi `==QcCtmMml1ViV3b`
   - **Balikkan Teks (`strrev`):** `==QcCtmMml1ViV3b` menjadi `b3ViV1lmMmtCcQ==`
   - **Decode Base64 (`base64_decode`):** `b3ViV1lmMmtCcQ==` menjadi **`oubWYf2kBq`** ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).
   nanti ini diganti dengan ss cyberchef yaa
5. Masukkan `oubWYf2kBq` ke kolom **Input secret** di halaman Natas Level 8 dan klik **Submit** untuk mendapatkan password **natas9**!

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Dalam fungsi PHP `strrev()`, singkatan apakah `strrev` itu?**
Jawaban: `________` (dalam bahasa Inggris, dua kata)

**2. Apa hasil teks asli (*secret*) setelah mendekode nilai `3d3d516343746d4d6d6c315669563362` pada Natas Level 8?**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** A (*Encoding* tidak memerlukan kunci rahasia dan dapat dibalikkan dengan mudah jika tahu formatnya)
> - **Pilgan 2:** B (`(1) Hex Decode` → `(2) Reverse` → `(3) Base64 Decode`)
> - **Jawaban Singkat 1:** `string reverse`
> - **Jawaban Singkat 2:** `oubWYf2kBq`

**Pesan Keamanan:** Jangan pernah menganggap teks yang di-*encode* dengan Base64 atau Hex sudah terenkripsi aman; untuk melindungi password, gunakan algoritma *hashing* yang tepat seperti `bcrypt` atau `Argon2` di server.

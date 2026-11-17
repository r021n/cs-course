# Panduan Belajar OverTheWire Natas — Level 4 (Memalsukan Asal Kunjungan lewat *HTTP Referer*)

- **Target Tantangan:** `http://natas4.natas.labs.overthewire.org`
- **Username:** `natas4` (gunakan password dari Level 3)
- **Tujuan:** Menemukan password untuk masuk ke **Level 5** (`natas5`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Apa Itu *HTTP Header* dan *Referer*?

Saat kamu mengetik alamat web dan menekan Enter, browser mengirimkan surat permintaan ke server web yang disebut **HTTP Request**. Di bagian atas surat ini ada amplop informasi bernama **HTTP Header** yang berisi catatan tambahan, seperti jenis browser yang kamu pakai, bahasa, dan dari halaman mana kamu berasal ([Colly](https://go-colly.org/articles/scraping_related_http_headers/)).

Salah satu baris di dalam HTTP Header bernama **`Referer`** (perhatikan ejaannya memang hanya satu huruf `r` di tengah, bukan *Referrer*). Header `Referer` memberi tahu server: *"Pengunjung ini datang dari halaman X."* Karena HTTP Header dikirim oleh perangkat pengguna, siapa pun bisa mengubah isinya! ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).


*Ilustrasi: Struktur HTTP Request yang memiliki bagian HTTP Header berisi pasangan `name:value` sebelum Body ([Sumber: Colly](https://go-colly.org/articles/scraping_related_http_headers/)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Apa fungsi dari HTTP Header `Referer`?**
- A. Menyimpan gambar profil pengguna
- B. Memberi tahu server dari alamat halaman mana pengguna berasal sebelum membuka halaman saat ini
- C. Mengenkripsi password pengguna
- D. Mengatur ukuran font pada website

**2. Mengapa memeriksa header `Referer` saja tidak aman sebagai syarat izin masuk sebuah halaman?**
- A. Karena header `Referer` dikirim oleh sisi pengguna (*client*) sehingga mudah diubah atau dipalsukan
- B. Karena header `Referer` hanya bekerja pada hari kerja
- C. Karena server tidak bisa membaca huruf kapital
- D. Karena header `Referer` hanya ada di ponsel

---

## 2. Langkah Pengerjaan Natas Level 4

1. Buka `http://natas4.natas.labs.overthewire.org` dan login sebagai `natas4`.
2. Di layar muncul pesan: *"Access disallowed. You are visiting from "" while authorized users should come only from "http://natas5.natas.labs.overthewire.org/""* ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).
3. Artinya, server hanya mau memberi password jika kita seolah-olah datang dari `http://natas5.natas.labs.overthewire.org/`.
4. **Cara 1 — Menggunakan Developer Tools (Hanya dapat berjalan di Firefox):**
   - Tekan `F12`, buka tab **Network** (Jaringan), lalu muat ulang halaman (`F5`).
   - Klik permintaan ke `natas4.natas.labs.overthewire.org`, pilih **Edit and Resend** (atau *Resend*).
   - Tambahkan atau ubah baris header menjadi: `Referer: http://natas5.natas.labs.overthewire.org/`, lalu klik **Send** dan lihat tab **Response** ([MayADevBe Blog](https://mayadevbe.me/posts/overthewire/natas/natas4/)).


*Tangkapan layar pengerjaan Natas Level 4: Mengubah nilai header `Referer` pada tab Network di Developer Tools untuk mendapatkan password `natas5` ([Sumber: MayADevBe Blog](https://mayadevbe.me/posts/overthewire/natas/natas4/)).*

5. **Cara 2 — Menggunakan perintah `curl` di Terminal:**
   Salin permintaan dari tab Network (`Copy > Copy as cURL`), lalu tambahkan ubah bagian `-H 'Referer: http://natas4.natas.labs.overthewire.org/index.php'` `-H 'Referer: http://natas5.natas.labs.overthewire.org/'` ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Tuliskan nama persis HTTP Header (sesuai ejaan standar di Natas Level 4) yang menyatakan asal halaman kunjungan:**
Jawaban: `________`

**2. Nilai URL apa yang harus diisikan ke dalam header tersebut agar akses di Natas Level 4 diizinkan?**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** B (Memberi tahu server dari alamat halaman mana pengguna berasal sebelum membuka halaman saat ini)
> - **Pilgan 2:** A (Karena header `Referer` dikirim oleh sisi pengguna sehingga mudah diubah atau dipalsukan)
> - **Jawaban Singkat 1:** `Referer`
> - **Jawaban Singkat 2:** `http://natas5.natas.labs.overthewire.org/`

**Pesan Keamanan:** Jangan pernah menggunakan header `Referer` sebagai satu-satunya cara untuk memverifikasi keaslian pengguna atau hak akses, karena pengguna bisa memalsukan header HTTP dengan mudah ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).

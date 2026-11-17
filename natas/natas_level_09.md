# Panduan Belajar OverTheWire Natas — Level 9 (Menyelipkan Perintah Sistem / *Command Injection*)

- **Target Tantangan:** `http://natas9.natas.labs.overthewire.org`
- **Username:** `natas9` (gunakan password dari Level 8)
- **Tujuan:** Menemukan password untuk masuk ke **Level 10** (`natas10`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Apa Itu *Command Injection*?

Bayangkan kamu punya asisten robot yang tugasnya mencari kata di kamus dengan perintah: *"Cari kata [INPUT KAMU] di buku kamus."*

Jika robot itu terlalu polos dan langsung menjalankan apa pun yang kamu ketikkan ke dalam sistem operasi server, kamu bisa menyelipkan tanda pemisah perintah (seperti tanda titik koma `;` di Linux) lalu menambahkan perintah baru! Misalnya: *"Cari kata **; baca file password** di buku kamus."* Celah berbahaya inilah yang disebut **OS Command Injection** ([PortSwigger](https://portswigger.net/web-security/os-command-injection)).


*Ilustrasi: Penyerang mengirimkan perintah sistem tambahan melalui formulir input website hingga memperoleh kendali atas server ([Sumber: PortSwigger](https://portswigger.net/web-security/os-command-injection)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Mengapa fungsi PHP `passthru()` berbahaya jika menerima input pengguna secara langsung tanpa penyaringan?**
- A. Karena `passthru()` menjalankan perintah sistem operasi secara langsung di server
- B. Karena `passthru()` membuat warna teks menjadi pudar
- C. Karena `passthru()` hanya bekerja di browser Safari
- D. Karena `passthru()` menghapus file kamus secara otomatis

**2. Di terminal Linux, karakter apa yang bisa dipakai untuk memisahkan dua perintah agar dijalankan berurutan dalam satu baris?**
- A. Tanda koma (`,`)
- B. Tanda titik koma (`;`)
- C. Tanda seru (`!`)
- D. Tanda pagar (`#`)

---

## 2. Langkah Pengerjaan Natas Level 9

1. Login ke `http://natas9.natas.labs.overthewire.org` sebagai `natas9`. Di halaman ini terdapat kotak pencarian kata (*"Find words containing:"*) dan tautan **View sourcecode** ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).
2. Klik **View sourcecode** untuk melihat logika PHP-nya:
   ```php
   passthru("grep -i $key dictionary.txt");
   ```
   Perintah `grep -i` di Linux berguna untuk mencari kata di dalam file `dictionary.txt`, dan `$key` adalah teks yang kita ketikkan di kotak pencarian ([Matt Andreko](https://mattandreko.com/blogs/2012-11-08-overthewire-natas-level-9/)).


*Tangkapan layar kode sumber Natas Level 9: Input pengguna `$key` langsung digabungkan ke dalam perintah `passthru("grep -i $key dictionary.txt")` ([Sumber: Matt Andreko](https://mattandreko.com/blogs/2012-11-08-overthewire-natas-level-9/)).*

3. Karena dari Level 7 kita sudah tahu lokasi password Natas berada di `/etc/natas_webpass/natas<level>`, kita bisa menyelipkan perintah Linux **`cat`** (untuk mencetak isi file) menggunakan titik koma `;` ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).
4. Ketikkan payload berikut di kotak pencarian:
   `; cat /etc/natas_webpass/natas10;`
   (Catatan: jika perintah di atas dijalankan di server, perintahnya akan menjadi `grep -i ; cat /etc/natas_webpass/natas10; dictionary.txt`).
5. Klik **Search**, dan password untuk **natas10** akan langsung tercetak di bagian Output!

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Apa nama perintah dasar di Linux yang digunakan pada payload di atas untuk membaca dan menampilkan isi file `/etc/natas_webpass/natas10`?**
Jawaban: `________`

**2. Apa nama fungsi PHP pada Natas Level 9 yang mengeksekusi perintah `grep` ke sistem operasi?**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** A (Karena `passthru()` menjalankan perintah sistem operasi secara langsung di server)
> - **Pilgan 2:** B (Tanda titik koma `;`)
> - **Jawaban Singkat 1:** `cat`
> - **Jawaban Singkat 2:** `passthru` (atau `passthru()`)

**Pesan Keamanan:** Jangan pernah meneruskan input pengguna langsung ke fungsi eksekusi perintah sistem seperti `passthru()`, `exec()`, atau `system()` tanpa validasi ketat atau *escaping* ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).

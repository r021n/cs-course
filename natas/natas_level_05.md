# Panduan Belajar OverTheWire Natas — Level 5 (Mengubah Status Login lewat *Cookie*)

- **Target Tantangan:** `http://natas5.natas.labs.overthewire.org`
- **Username:** `natas5` (gunakan password dari Level 4)
- **Tujuan:** Menemukan password untuk masuk ke **Level 6** (`natas6`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Apa Itu *Cookie* di Browser?

Saat kamu berkunjung ke sebuah taman bermain, petugas memberi **gelang tiket** di tanganmu agar setiap kali masuk wahana kamu tidak perlu membeli tiket lagi. Di internet, gelang tiket itu disebut **Cookie** — catatan teks kecil yang disimpan oleh browser untuk mengingat informasi tentang kamu, misalnya apakah kamu sudah login atau barang apa yang ada di keranjang belanja ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).

Masalahnya, jika website menyimpan status login dalam bentuk angka sederhana di cookie (misalnya `loggedin=0` untuk belum login dan `loggedin=1` untuk sudah login) tanpa pemeriksaan keamanan di server, maka pengunjung bisa mengganti sendiri tulisan di gelang tiketnya! ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).


*Ilustrasi: Memeriksa header dan cookie pada panel Network di Developer Tools ([Sumber: Privacy Sandbox](https://privacysandbox.google.com/cookies/basics/cookie-tools)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Di manakah *cookie* website disimpan?**
- A. Di dalam monitor komputer
- B. Di dalam browser pada perangkat pengguna
- C. Di dalam kabel LAN
- D. Di dalam printer

**2. Dalam logika komputer (boolean), jika angka `0` berarti `false` (belum login), maka angka yang melambangkan `true` (sudah login) adalah...**
- A. `-1`
- B. `1`
- C. `100`
- D. `99`

---

## 2. Langkah Pengerjaan Natas Level 5

1. Buka `http://natas5.natas.labs.overthewire.org` dan login sebagai `natas5`.
2. Layar menampilkan pesan: *"Access disallowed. You are not logged in"* ([Hacking Articles](https://www.hackingarticles.in/overthewire-natas-walkthrough-0-11/)).


*Tangkapan layar Natas Level 5: Pesan "Access disallowed. You are not logged in" saat cookie masih bernilai 0 ([Sumber: RaiderSec](http://raidersec.blogspot.com/2012/10/overthewire-natas-wargame-level-5.html)).*

3. Tekan **`F12`** untuk membuka Developer Tools:
   - Pada Chrome/Edge, buka tab **Application** > **Cookies** > `http://natas5.natas.labs.overthewire.org` (atau di Firefox: tab **Storage** > **Cookies**).
   - Kamu akan melihat cookie bernama **`loggedin`** dengan nilai **`0`** ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).
4. Klik dua kali pada nilai `0` tersebut, ubah menjadi **`1`**, tekan Enter, lalu muat ulang halaman (`F5`).
5. Alternatifnya, kamu bisa menggunakan perintah `curl` di terminal dengan opsi `-H 'Cookie: loggedin=1'` ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).
6. Setelah halaman dimuat ulang, password **natas6** akan langsung muncul di layar!

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Apa nama cookie yang perlu diubah pada Natas Level 5?**
Jawaban: `________`

**2. Di Chrome Developer Tools (`F12`), tab mana yang digunakan untuk melihat dan mengedit nilai cookie yang tersimpan secara langsung?**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** B (Di dalam browser pada perangkat pengguna)
> - **Pilgan 2:** B (`1`)
> - **Jawaban Singkat 1:** `loggedin`
> - **Jawaban Singkat 2:** `Application`

**Pesan Keamanan:** Jangan pernah menyimpan status hak akses atau status login secara polos di dalam cookie yang dapat diubah pengguna tanpa tanda tangan kriptografi atau validasi sesi di server ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-0-5/)).

# Panduan Belajar OverTheWire Natas — Level 11 (Membongkar Sandi *Cookie* dengan Operasi XOR)

- **Target Tantangan:** `http://natas11.natas.labs.overthewire.org`
- **Username:** `natas11` (gunakan password dari Level 10)
- **Tujuan:** Menemukan password untuk masuk ke **Level 12** (`natas12`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Mengenal Operasi Logika **XOR**

Di Level 5 kita pernah mengubah cookie secara langsung. Di Level 11, pembuat website mencoba melindungi cookie agar tidak mudah diubah dengan mengacaknya menggunakan **enkripsi XOR** (*Exclusive OR*) ([LearnHacking.io](https://learnhacking.io/overthewire-natas-level-11-walkthrough/)).

XOR adalah operasi logika komputer yang membandingkan dua bit (`0` atau `1`):
- Jika kedua bit **sama** (`0 XOR 0` atau `1 XOR 1`), hasilnya **`0`**.
- Jika kedua bit **berbeda** (`0 XOR 1` atau `1 XOR 0`), hasilnya **`1`** ([Build Electronic Circuits](https://www.build-electronic-circuits.com/xor-gate/)).

Kelemahan unik XOR jika kuncinya dipakai berulang-ulang adalah sifat bolak-baliknya:
$$\text{Data Asli} \oplus \text{Kunci} = \text{Cookie Teracak}$$
$$\text{Cookie Teracak} \oplus \text{Data Asli} = \text{Kunci}$$

Artinya, kalau kita tahu **Data Asli** dan **Cookie Teracak**-nya, kita bisa langsung menemukan **Kunci** rahasianya! ([The Raw Bit](https://blog.sudarshandevkota.com.np/overthewire-natas-walkthrough)).


*Ilustrasi: Simbol gerbang logika XOR dan tabel kebenaran yang menghasilkan 1 hanya jika kedua masukan berbeda ([Sumber: Build Electronic Circuits](https://www.build-electronic-circuits.com/xor-gate/)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Dalam operasi logika XOR, berapakah hasil dari `1 XOR 1`?**
- A. `1`
- B. `0`
- C. `2`
- D. `11`

**2. Jika kita sudah mengetahui `Data Asli` dan `Data Terenkripsi XOR`, bagaimana cara mendapatkan `Kunci` rahasianya?**
- A. Mengalikan keduanya dengan angka 2
- B. Melakukan operasi XOR antara `Data Asli` dengan `Data Terenkripsi XOR`
- C. Mengubah keduanya menjadi huruf kapital
- D. Menghapus cookie dari browser

---

## 2. Langkah Pengerjaan Natas Level 11

1. Login ke `http://natas11.natas.labs.overthewire.org` sebagai `natas11`. Halaman menampilkan pesan *"Cookies are protected with XOR encryption"* dan kotak pengubah warna latar belakang (`#000000` atau `#ffffff`) ([LearnHacking.io](https://learnhacking.io/overthewire-natas-level-11-walkthrough/)).


*Tangkapan layar Natas Level 11: Pesan bahwa cookie dilindungi dengan enkripsi XOR ([Sumber: LearnHacking.io](https://learnhacking.io/overthewire-natas-level-11-walkthrough/)).*

2. Klik **View sourcecode** (`index-source.html`). Dari kode PHP terlihat bahwa cookie `data` dibuat dari teks JSON bawaan `{"showpassword":"no","bgcolor":"#ffffff"}`, lalu di-XOR dengan sebuah kunci rahasia, lalu di-encode dengan **Base64** ([rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da)).
3. Buka Developer Tools (`F12`) > tab **Application** > **Cookies** (Chrome) untuk menyalin isi cookie `data` bawaan (biasanya berakhiran `=` atau `%3D`, misalnya `HmYkBwozJw4WNyAAFyB1VUcqOE1JZjUIBis7ABdmbU1GIjEJAyJvTRg%3D`) ([rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da)).
4. Lakukan *URL decode* dan *Base64 decode* pada cookie tersebut, lalu XOR-kan dengan teks JSON (dengan tipe UTF-8 dan schema standar) `{"showpassword":"no","bgcolor":"#ffffff"}` (bisa menggunakan **CyberChef** atau skrip PHP/Python). Hasilnya akan berulang-ulang menampilkan kata kunci **`eDWo`** (atau **`qw8J`** tergantung versi server Natas) ([rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da), [Jack Hacks](https://jhalon.github.io/over-the-wire-natas2/)).
5. Sekarang buat cookie baru dengan memasukkan `{"showpassword":"yes","bgcolor":"#ffffff"}` pada input, lalu XOR-kan (tipe UTF-8 dan schema standar) dengan kunci yang baru ditemukan (**`eDWo`**, atau **`qw8J`**, atau kunci yang kamu temukan), encode ke Base64, dan encode URL.
6. Tempelkan hasil tersebut ke nilai cookie `data` di Developer Tools (`F12`), lalu muat ulang halaman (`F5`) untuk mendapatkan password **natas12**!

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Pada data JSON di dalam cookie Natas Level 11, nilai kunci `"showpassword"` harus diubah dari `"no"` menjadi:**
Jawaban: `________`

**2. Setelah data JSON di-XOR dengan kunci rahasia, fungsi pengodean teks apa yang diterapkan sebelum hasilnya disimpan ke dalam cookie `data`?**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** B (`0`)
> - **Pilgan 2:** B (Melakukan operasi XOR antara `Data Asli` dengan `Data Terenkripsi XOR`)
> - **Jawaban Singkat 1:** `yes`
> - **Jawaban Singkat 2:** `Base64` (atau `base64_encode`)

**Pesan Keamanan:** Enkripsi XOR dengan kunci pendek yang diulang-ulang sangat mudah dibobol jika penyerang mengetahui sebagian isi pesan aslinya (*known-plaintext attack*). Gunakan algoritma enkripsi standar modern seperti AES yang disertai tanda tangan integritas (*HMAC*) ([rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da)).

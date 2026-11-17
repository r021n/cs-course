# Panduan Belajar OverTheWire Natas — Level 10 (Melewati Filter Karakter pada Perintah `grep`)

- **Target Tantangan:** `http://natas10.natas.labs.overthewire.org`
- **Username:** `natas10` (gunakan password dari Level 9)
- **Tujuan:** Menemukan password untuk masuk ke **Level 11** (`natas11`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Mengapa Filter Karakter (*Blacklist*) Bisa Ditembus?

Setelah belajar dari kesalahan di Level 9, pembuat Natas Level 10 menambahkan penyaring (*filter*) yang melarang karakter `;`, `|`, dan `&` ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)). Jika kita memasukkan `; cat ...`, server akan menolak dengan pesan *"Input contains an illegal character!"*.

Namun, strategi keamanan yang hanya melarang beberapa karakter tertentu (**blacklist**) sering kali masih punya celah! Dalam perintah Linux `grep -i <pola> <file1> <file2>`, `grep` sebenarnya bisa mencari teks di **lebih dari satu file sekaligus** jika kita memisahkan nama file dengan **spasi** — dan spasi tidak diblokir oleh filter! ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).


*Ilustrasi: Meskipun beberapa karakter pemisah diblokir, celah tetap terbuka jika argumen perintah sistem masih bisa dimanipulasi ([Sumber: PortSwigger](https://portswigger.net/web-security/os-command-injection)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Karakter apa saja yang diblokir oleh filter pada Natas Level 10?**
- A. Huruf A, B, dan C
- B. Karakter `;`, `|`, dan `&`
- C. Angka `0` sampai `9`
- D. Spasi dan tanda titik

**2. Dalam perintah pencarian `grep`, pola `.*` (titik dan bintang) artinya...**
- A. Mencocokkan semua baris teks (*wildcard*)
- B. Menghapus seluruh isi file
- C. Hanya mencari huruf kapital
- D. Menghentikan perintah pencarian

---

## 2. Langkah Pengerjaan Natas Level 10

1. Login ke `http://natas10.natas.labs.overthewire.org` sebagai `natas10`. Halaman menampilkan pesan: *"For security reasons, we now filter on certain characters"* ([n0j Blog](https://n0j.github.io/2015/09/19/otw-natas-10.html)).


*Tangkapan layar Natas Level 10: Pesan bahwa filter karakter telah ditambahkan pada kotak pencarian ([Sumber: n0j Blog](https://n0j.github.io/2015/09/19/otw-natas-10.html)).*

2. Jika kita lihat kode sumber (`View sourcecode`), perintahnya masih sama dengan Level 9:
   `passthru("grep -i $key dictionary.txt");`
   hanya saja `$key` diperiksa dengan pola `/[;|&]/` ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).
3. Triknya: kita manfaatkan kemampuan `grep` untuk membaca file lain! Caranya, masukkan **pola pencarian** `.*` (cocokkan semua teks), lalu **spasi**, lalu **lokasi file password** `/etc/natas_webpass/natas11` ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).
4. Ketikkan payload berikut di kotak pencarian:
   `.* /etc/natas_webpass/natas11`
   Sehingga perintah di server menjadi: `grep -i .* /etc/natas_webpass/natas11 dictionary.txt`
5. Klik **Search**! Di bagian Output, `grep` akan menampilkan isi `/etc/natas_webpass/natas11` (password **natas11**) diikuti isi `dictionary.txt`.

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Karakter pemisah apa yang kita gunakan antara pola `.*` dan jalur file `/etc/natas_webpass/natas11` karena tidak diblokir oleh filter?**
Jawaban: `________`

**2. Jika kita berada di Natas Level 10 dan ingin membaca password untuk level berikutnya, nama file terakhir pada jalur `/etc/natas_webpass/...` adalah:**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** B (Karakter `;`, `|`, dan `&`)
> - **Pilgan 2:** A (Mencocokkan semua baris teks / *wildcard*)
> - **Jawaban Singkat 1:** Spasi
> - **Jawaban Singkat 2:** `natas11`

**Pesan Keamanan:** Menggunakan daftar blokir (*blacklist*) sering kali gagal karena selalu ada cara lain atau argumen perintah yang terlewat. Gunakan validasi daftar putih (*whitelist*, misalnya hanya mengizinkan huruf `a-zA-Z`) dan hindari memanggil perintah shell secara langsung ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).

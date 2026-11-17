# Panduan Belajar OverTheWire Natas — Level 6 (Membaca Kode PHP dan File `include`)

- **Target Tantangan:** `http://natas6.natas.labs.overthewire.org`
- **Username:** `natas6` (gunakan password dari Level 5)
- **Tujuan:** Menemukan password untuk masuk ke **Level 7** (`natas7`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Apa Bedanya HTML dan PHP?

Jika HTML adalah resep yang dikirim langsung ke browser, maka **PHP** adalah kode yang dijalankan di **dapur server** sebelum hasilnya dikirim ke browser ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)). Jadi, jika kamu menekan `Ctrl + U` di halaman PHP biasa, kamu hanya melihat hasil HTML-nya, bukan logika kode PHP-nya.

Namun, mulai Level 6, Natas menyediakan tautan **"View sourcecode"** (`index-source.html`) agar kita bisa belajar membaca logika kode PHP di server. Di dalam kode PHP, sering ada perintah `include "namafile";` yang artinya *"ambil dan gabungkan isi file lain ke dalam halaman ini"* ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).


*Ilustrasi: Alur kerja PHP di server sebelum hasil HTML dikirim ke browser ([Sumber: ResearchGate](https://www.researchgate.net/figure/Php-source-code-programing-with-data-flow-source-11_fig5_314133708)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Di manakah kode PHP dieksekusi sebelum halaman tampil di browser pengguna?**
- A. Di dalam server web (*server-side*)
- B. Di dalam kartu memori ponsel
- C. Di dalam aplikasi pengolah kata
- D. Di dalam kabel HDMI

**2. Apa arti perintah `include "includes/secret.inc";` di dalam kode PHP?**
- A. Menghapus file `secret.inc` secara permanen
- B. Memasukkan dan membaca isi file `includes/secret.inc` ke dalam skrip PHP
- C. Mengubah format file menjadi gambar `.png`
- D. Memblokir akses ke folder `includes`

---

## 2. Langkah Pengerjaan Natas Level 6

1. Buka `http://natas6.natas.labs.overthewire.org` dan login sebagai `natas6`. Halaman menampilkan kotak input bertuliskan **"Input secret:"** dan tautan **View sourcecode** ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).
2. Klik **View sourcecode** untuk melihat `index-source.html`. Di sana terdapat baris PHP:
   ```php
   include "includes/secret.inc";
   if(array_key_exists("submit", $_POST)) {
       if($secret == $_POST['secret']) {
           print "Access granted. The password for natas7 is <censored>";
       }
   }
   ```
   Kode tersebut mengambil nilai variabel `$secret` dari file `includes/secret.inc` ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).
3. Karena file `.inc` sering kali tidak diproses atau bisa dibuka langsung di browser sebagai teks biasa, coba buka alamat: `http://natas6.natas.labs.overthewire.org/includes/secret.inc` ([Hacking Articles](https://www.hackingarticles.in/overthewire-natas-walkthrough-0-11/)).
4. Halaman terlihat kosong karena isinya berupa tag PHP (`<? $secret = "..."; ?>`). Tekan **`Ctrl + U`** (*View Page Source*) untuk melihat isinya! Kamu akan menemukan kata rahasianya: `FOEIUWGHFEEUHOFUOIU` ([The Raw Bit](https://blog.sudarshandevkota.com.np/overthewire-natas-walkthrough)).
5. Kembali ke halaman utama Natas Level 6, masukkan `FOEIUWGHFEEUHOFUOIU` ke kotak **Input secret**, lalu klik **Submit**!


*Tangkapan layar pengerjaan Natas Level 6: Setelah memasukkan kata rahasia dari `secret.inc`, pesan "Access granted" dan password `natas7` tampil di layar ([Sumber: LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).*

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Tuliskan path file rahasia (relatif terhadap URL utama) yang dipanggil oleh perintah `include` pada Natas Level 6:**
Jawaban: `________`

**2. Jika isi file `.inc` tidak tampak di layar browser karena berada di dalam tag `<? ... ?>`, pintasan keyboard apa di Windows yang harus ditekan untuk membacanya?**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** A (Di dalam server web / *server-side*)
> - **Pilgan 2:** B (Memasukkan dan membaca isi file `includes/secret.inc` ke dalam skrip PHP)
> - **Jawaban Singkat 1:** `includes/secret.inc`
> - **Jawaban Singkat 2:** `Ctrl + U`

**Pesan Keamanan:** Jangan pernah meletakkan file berisi kunci rahasia di folder yang bisa diakses langsung lewat URL publik, dan pastikan ekstensi file seperti `.inc` tidak disajikan sebagai teks mentah oleh server ([LearnHacking.io](https://learnhacking.io/overthewire-natas-walkthrough-levels-6-10/)).

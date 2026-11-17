# Panduan Belajar OverTheWire Natas — Level 14 (Menembus Form Login dengan *SQL Injection*)

- **Target Tantangan:** `http://natas14.natas.labs.overthewire.org`
- **Username:** `natas14` (gunakan password dari Level 13)
- **Tujuan:** Menemukan password untuk masuk ke **Level 15** (`natas15`).
- **Referensi Resmi:** [OverTheWire: Natas](https://overthewire.org/wargames/natas/)

---

## 1. Apa Itu *Database*, SQL, dan *SQL Injection*?

Hampir semua website modern menyimpan daftar username dan password di dalam lemari data digital bernama **Database**. Untuk mencari data di dalam database, server berbicara menggunakan bahasa bernama **SQL** (*Structured Query Language*).

Contoh kalimat SQL untuk memeriksa login adalah:
`SELECT * FROM users WHERE username="INPUT_USER" AND password="INPUT_PASS"`

Jika server langsung menempelkan teks ketikan pengguna ke dalam kalimat SQL tanpa pengaman, kita bisa menyelipkan tanda kutip `"` dan kata **`OR`** agar syaratnya **selalu benar** (*true*), walaupun kita tidak tahu password aslinya! Teknik inilah yang disebut **SQL Injection (SQLi)** ([Medium - Rahul Kadapalla](https://medium.com/@rahulkadapalla/sql-injection-b6dc78df2b3a), [rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da)).

### Contoh Penerapan `OR` pada Login

Misalnya pada kolom username kita mengetik `admin` dan pada kolom password kita mengetik **`" OR "1"="1`**, maka kalimat SQL yang dibaca oleh server akan berubah menjadi:

```sql
SELECT * FROM users WHERE username="admin" AND password="" OR "1"="1"
```

*Ilustrasi: Penyerang menyisipkan perintah SQL berbahaya lewat kotak input sehingga database memberikan akses yang tidak seharusnya ([Sumber: Medium - Rahul Kadapalla](https://medium.com/@rahulkadapalla/sql-injection-b6dc78df2b3a)).*

### Cek Pemahaman 1 (Pilihan Ganda)

**1. Dalam kalimat SQL `WHERE password="test" OR "1"="1"`, mengapa database menganggap syarat tersebut selalu benar (*True*)?**
- A. Karena pernyataan `"1"="1"` selalu bernilai benar, dan operator `OR` hanya butuh salah satu sisi bernilai benar
- B. Karena kata `test` adalah password rahasia admin
- C. Karena database tidak bisa membaca angka `1`
- D. Karena tanda kutip membuat database mati

**2. Apa tujuan utama dari tanda kutip ganda (`"`) saat kita melakukan *SQL Injection* pada kotak input di Natas Level 14?**
- A. Untuk mempercantik teks di layar
- B. Untuk menutup string input lebih awal agar kita bisa menyisipkan perintah SQL seperti `OR`
- C. Untuk menghapus seluruh tabel database
- D. Untuk mengganti warna tombol Login

---

## 2. Langkah Pengerjaan Natas Level 14

1. Login ke `http://natas14.natas.labs.overthewire.org` sebagai `natas14`. Di halaman ini terdapat formulir login berisi kolom **Username** dan **Password** ([LearnHacking.io](https://learnhacking.io/overthewire-natas-level-14-walkthrough/)).
2. Klik **View sourcecode**. Terlihat kueri SQL yang dijalankan oleh server:
   ```php
   $query = "SELECT * from users where username=\"".$_REQUEST["username"]."\" and password=\"".$_REQUEST["password"]."\"";
   ```
   Jika kueri tersebut menghasilkan minimal 1 baris data, server akan menampilkan password untuk level berikutnya ([LearnHacking.io](https://learnhacking.io/overthewire-natas-level-14-walkthrough/)).
3. Masukkan payload SQL Injection berikut langsung ke formulir di browser:
   - **Username:** `" OR "1"="1` (atau `test` lalu di password diisi `test" OR "1"="1`)
   - **Password:** `" OR "1"="1` ([rootissh](https://rootissh.in/overthewire-wargames-natas-level-1-15-walkthrough-7a737a0c74da), [MCPA GitHub](https://mcpa.github.io/natas/wargame/web/overthewire/2015/09/28/natas14/))


*Tangkapan layar pengerjaan Natas Level 14: Dengan mode `?debug`, terlihat kueri SQL menjadi `... OR "1"="1"` yang berhasil login dan menampilkan password `natas15` ([Sumber: MCPA GitHub](https://mcpa.github.io/natas/wargame/web/overthewire/2015/09/28/natas14/)).*

4. Klik **Login**. Pesan *"Successful login! The password for natas15 is ..."* akan langsung muncul di layar!

### Cek Pemahaman 2 (Jawaban Singkat)

**1. Kata kunci logika SQL apa yang berarti "ATAU" dan dipakai agar kondisi login tetap bernilai benar meskipun password salah?**
Jawaban: `________`

**2. Parameter URL tambahan apa yang bisa ditambahkan di akhir alamat (`index.php?...`) pada Natas Level 14 agar server menampilkan isi kueri SQL yang sedang dijalankan?**
Jawaban: `________`

---

## 3. Kunci Jawaban & Poin Keamanan

> **Kunci Jawaban:**
> - **Pilgan 1:** A (Karena pernyataan `"1"="1"` selalu bernilai benar, dan operator `OR` hanya butuh salah satu sisi bernilai benar)
> - **Pilgan 2:** B (Untuk menutup string input lebih awal agar kita bisa menyisipkan perintah SQL seperti `OR`)
> - **Jawaban Singkat 1:** `OR`
> - **Jawaban Singkat 2:** `debug`

**Pesan Keamanan:** Jangan pernah menggabungkan input pengguna langsung ke dalam string kueri SQL. Gunakan **Prepared Statements** (*Parameterized Queries*) agar input pengguna selalu diperlakukan sebagai data biasa, bukan perintah SQL ([LearnHacking.io](https://learnhacking.io/overthewire-natas-level-14-walkthrough/)).

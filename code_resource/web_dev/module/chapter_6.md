# Chapter 6 — Variabel, Nilai, dan Tipe Data JavaScript

## Variabel dan Tipe Data Dasar

JavaScript perlu menyimpan informasi agar bisa menggunakannya lagi. Misalnya, program menyimpan nama pengguna, jumlah barang, atau apakah sebuah pilihan sudah dipilih. Tempat untuk menyimpan informasi itu disebut **variabel**.

Anggap variabel seperti kotak berlabel. Labelnya membantu kita tahu apa yang disimpan di dalam kotak, dan isinya bisa digunakan oleh bagian lain dalam program.

```javascript
var nama = "Rani";
var jumlah = 3;
```

Baris pertama membuat variabel bernama `nama` dan mengisinya dengan teks `"Rani"`. Baris kedua membuat variabel `jumlah` dan mengisinya dengan angka `3`.

Tanda `=` di sini berarti **memberi nilai**, bukan menyatakan bahwa dua hal sama seperti dalam matematika. Dalam contoh `jumlah = 3`, program menyimpan angka `3` ke dalam variabel `jumlah`.

### Nilai memiliki tipe

Nilai dalam JavaScript memiliki jenis, atau **tipe data**. Jenis nilai menentukan bagaimana program memperlakukannya.

Teks disebut *string*. Teks ditulis di antara tanda petik:

```javascript
var kota = "Bandung";
var pesan = 'Selamat datang';
```

Angka disebut *number*. Angka tidak ditulis dengan tanda petik:

```javascript
var harga = 12000;
var suhu = 26.5;
```

Ada juga nilai *boolean*, yang hanya memiliki dua kemungkinan: `true` atau `false`.

```javascript
var sudahBayar = false;
var stokTersedia = true;
```

Boolean berguna untuk menyimpan status atau keadaan yang hanya memiliki dua pilihan, seperti “ya atau tidak” dan “aktif atau tidak”.

### Pertanyaan

1. Perhatikan kode berikut:
   ```javascript
   var status = "false";
   ```
   Meskipun berisi kata false, karena diapit oleh tanda petik, nilai variabel `status` memiliki tipe data apa?
   <!-- Jawaban: `string` -->
2. Perhatikan kode berikut:
   ```javascript
   var a = 25;
   var b = a;
   a = 50;
   ```
   Berapakah nilai yang tersimpan di dalam variabel `b` pada akhir baris ketiga?
   <!-- Jawaban: `25` -->
3. Perhatikan tiga variabel berikut:
   ```javascript
   var judul = "Jajan Tracker";
   var harga = 5000;
   var tersedia = true;
   ```
   Tuliskan secara berurutan nama tipe data dari variabel `judul`, `harga`, dan `tersedia`, dipisahkan hanya oleh satu spasi.
   <!-- Jawaban: `string number boolean` -->

---

## Teks Angka dan Mengubah Tipe Nilai

Perhatikan dua nilai berikut:

```javascript
var angkaSebagaiTeks = "12";
var angka = 12;
```

Keduanya tampak serupa, tetapi tipe datanya berbeda. Yang pertama adalah string karena ditulis di dalam tanda petik. Yang kedua adalah number.

Perbedaan ini bisa terlihat ketika nilai digunakan:

```javascript
var hasilGabung = "12" + 3;
var hasilTambah = 12 + 3;

console.log(hasilGabung);
console.log(hasilTambah);
```

Pada contoh pertama, JavaScript menggabungkan teks dan angka menjadi `"123"`. Pada contoh kedua, JavaScript menjumlahkan dua angka sehingga hasilnya `15`.

Karena itu, jika program perlu menghitung, pastikan nilainya benar-benar berupa angka, bukan teks yang sekadar terlihat seperti angka.

### Mengubah tipe nilai

JavaScript menyediakan fungsi `Number()` untuk mengubah sebuah nilai menjadi angka:

```javascript
var nilaiInput = "2500";
var harga = Number(nilaiInput);

console.log(harga + 500);
```

Karena `nilaiInput` berisi teks `"2500"`, `Number(nilaiInput)` mengubahnya menjadi angka `2500`. Setelah itu, nilainya dapat dijumlahkan dengan `500`.

Pada kode Jajan Tracker, konversi serupa dilakukan di bagian ini:

```javascript
var uang = Number(document.getElementById("uang").value);
```

Properti `.value` mengambil isi kolom input. Nilai kolom input biasanya terbaca sebagai teks, sehingga `Number()` dipakai agar nilainya dapat dibandingkan dengan harga jajan sebagai angka.

Perlu diingat, `Number()` tidak selalu berhasil mengubah teks menjadi angka. Misalnya:

```javascript
var nilai = Number("banyak");
console.log(nilai);
```

Hasilnya adalah `NaN`, singkatan dari *Not a Number*. Ini berarti JavaScript tidak berhasil mendapatkan angka dari nilai tersebut. Dalam program yang lebih lengkap, masukan pengguna biasanya perlu diperiksa sebelum dipakai.

### Pertanyaan

1. Perhatikan dua operasi berikut:
   ```javascript
   var a = "30" + 5;
   var b = 30 + 5;
   ```
   Tuliskan hasil dari variabel `a` dan variabel `b` secara berurutan dipisahkan oleh satu spasi tanpa tanda kutip.
   <!-- Jawaban: `305 35` -->
2. Diberikan elemen input: `<input id="harga" type="number">`. Tuliskan ekspresi JavaScript untuk mengambil teks dari kolom tersebut lalu mengubahnya menjadi angka menggunakan fungsi `Number` dan method `document.getElementById` (gunakan tanda kutip ganda `"` untuk id).
   <!-- Jawaban: `Number(document.getElementById("harga").value)` -->
3. Perhatikan baris kode berikut:
   ```javascript
   var hasil = Number("banyak");
   ```
   Tuliskan nilai khusus yang dihasilkan pada variabel `hasil` akibat teks tersebut tidak dapat diubah menjadi angka.
   <!-- Jawaban: `NaN` -->

---

## Nama Variabel Membantu Kita Membaca Program

Kita bisa memilih nama variabel sendiri, selama tidak melanggar aturan dasar penamaan JavaScript, misalnya nama tidak boleh diawali angka dan tidak boleh berisi spasi. Nama seperti `uang`, `namaJajan`, dan `harga` lebih mudah dipahami daripada nama yang terlalu umum seperti `a`, `b`, atau `x`.

```javascript
var namaJajan = "Roti";
var hargaJajan = 5000;
var uangPengguna = 10000;
```

Nama yang jelas membuat kode lebih mudah dibaca, terutama ketika program mulai memiliki banyak variabel. JavaScript membedakan huruf besar dan kecil, jadi `uang` dan `Uang` dianggap sebagai dua nama berbeda.

Di kode yang sedang kita pelajari, variabel seperti `n`, `h`, dan `uang` menyimpan nilai sementara yang sedang diproses di dalam fungsi. Sementara itu, nama seperti `listNama` dan `listHarga` memberi petunjuk bahwa variabel tersebut menyimpan kumpulan data. Kumpulan data seperti array akan dibahas pada chapter berikutnya.

### Pertanyaan

1. Berdasarkan aturan penamaan variabel dalam JavaScript, apakah nama variabel boleh diawali dengan karakter angka? Jawab hanya dengan `boleh` atau `tidak boleh`.
   <!-- Jawaban: `tidak boleh` -->
2. Diberikan nama variabel yang tidak valid karena mengandung spasi: `total belanja`. Tulis ulang nama variabel tersebut menggunakan gaya camelCase yang valid tanpa spasi sesuai konvensi pada modul (seperti `namaJajan`).
   <!-- Jawaban: `totalBelanja` -->
3. Perhatikan kode berikut:
   ```javascript
   var nilai = 10;
   var Nilai = 20;
   var NILAI = 30;
   ```
   Karena JavaScript membedakan huruf besar dan kecil, tuliskan nilai dari variabel `nilai`, `Nilai`, dan `NILAI` secara berurutan dipisahkan oleh satu spasi.
   <!-- Jawaban: `10 20 30` -->

---

## Deklarasi Variabel: var, let, dan const

Pada kode Jajan Tracker, variabel dibuat menggunakan `var`:

```javascript
var uang = 10000;
```

JavaScript modern juga menyediakan `let` dan `const`:

```javascript
let jumlah = 2;
const namaAplikasi = "Jajan Tracker";
```

Secara sederhana, `let` digunakan jika nilai variabel mungkin akan diganti, sedangkan `const` digunakan jika variabel tidak akan diberi nilai baru setelah dibuat. `var` adalah cara lama yang masih akan sering dijumpai saat membaca kode.

Untuk saat ini, fokuslah pada gagasan dasarnya: variabel memiliki nama dan menyimpan nilai. Nilai itu mempunyai tipe, dan tipe tersebut memengaruhi cara JavaScript menggunakannya. Saat membaca kode, tanyakan: apa nama variabelnya, apa nilai yang disimpan di dalamnya, dan apakah nilai itu berupa teks, angka, atau jenis data lain?

### Pertanyaan

1. Di antara dua kata kunci deklarasi JavaScript modern `let` dan `const`, manakah kata kunci yang digunakan jika nilai variabel tidak akan pernah diubah atau diberi nilai baru setelah dibuat?
   <!-- Jawaban: `const` -->
2. Perhatikan kode berikut:
   ```javascript
   let bahasa = "HTML";
   const versi = 5;
   bahasa = "JavaScript";
   ```
   Tuliskan nilai akhir dari variabel `bahasa` dan `versi` secara berurutan dipisahkan oleh satu spasi tanpa tanda kutip.
   <!-- Jawaban: `JavaScript 5` -->
3. Perhatikan kode berikut:
   ```javascript
   const pi = 3.14;
   pi = 3.14159;
   ```
   Apakah JavaScript mengizinkan pengubahan nilai pada baris kedua? Jawab hanya dengan `ya` atau `tidak`.
   <!-- Jawaban: `tidak` -->
4. Tuliskan satu baris kode JavaScript untuk mendeklarasikan variabel bernama `skor` dengan nilai awal angka `0` menggunakan kata kunci `let` (gunakan satu spasi di sebelum dan sesudah tanda `=`, serta akhiri dengan titik koma).
   <!-- Jawaban: `let skor = 0;` -->
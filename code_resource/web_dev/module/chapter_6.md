# Chapter 6 — Variabel, Nilai, dan Tipe Data JavaScript

JavaScript perlu menyimpan informasi agar bisa menggunakannya lagi. Misalnya, program menyimpan nama pengguna, jumlah barang, atau apakah sebuah pilihan sudah dipilih. Tempat untuk menyimpan informasi itu disebut **variabel**.

Anggap variabel seperti kotak berlabel. Labelnya membantu kita tahu apa yang disimpan di dalam kotak, dan isinya bisa digunakan oleh bagian lain dalam program.

```javascript
var nama = "Rani";
var jumlah = 3;
```

Baris pertama membuat variabel bernama `nama` dan mengisinya dengan teks `"Rani"`. Baris kedua membuat variabel `jumlah` dan mengisinya dengan angka `3`.

Tanda `=` di sini berarti **memberi nilai**, bukan menyatakan bahwa dua hal sama seperti dalam matematika. Dalam contoh `jumlah = 3`, program menyimpan angka `3` ke dalam variabel `jumlah`.

## Nilai memiliki tipe

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

## Teks angka tetaplah teks

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

## Mengubah tipe nilai

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

## Nama variabel membantu kita membaca program

Kita bisa memilih nama variabel sendiri, selama tidak melanggar aturan dasar penamaan JavaScript, misalnya nama tidak boleh diawali angka dan tidak boleh berisi spasi. Nama seperti `uang`, `namaJajan`, dan `harga` lebih mudah dipahami daripada nama yang terlalu umum seperti `a`, `b`, atau `x`.

```javascript
var namaJajan = "Roti";
var hargaJajan = 5000;
var uangPengguna = 10000;
```

Nama yang jelas membuat kode lebih mudah dibaca, terutama ketika program mulai memiliki banyak variabel. JavaScript membedakan huruf besar dan kecil, jadi `uang` dan `Uang` dianggap sebagai dua nama berbeda.

Di kode yang sedang kita pelajari, variabel seperti `n`, `h`, dan `uang` menyimpan nilai sementara yang sedang diproses di dalam fungsi. Sementara itu, nama seperti `listNama` dan `listHarga` memberi petunjuk bahwa variabel tersebut menyimpan kumpulan data. Kumpulan data seperti array akan dibahas pada chapter berikutnya.

## `var`, `let`, dan `const`

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
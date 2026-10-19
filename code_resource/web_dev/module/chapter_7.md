# Chapter 7 — Array: Menyimpan Banyak Nilai dalam Satu Variabel

## Konsep Array dan Mengambil Nilai

Misalkan sebuah program perlu menyimpan nama beberapa buah. Kita bisa membuat variabel terpisah untuk setiap nama:

```javascript
var buah1 = "Apel";
var buah2 = "Jeruk";
var buah3 = "Mangga";
```

Cara ini masih bisa dilakukan, tetapi akan merepotkan jika jumlah buah terus bertambah. Array memberi cara yang lebih praktis: kita dapat menyimpan banyak nilai dalam satu variabel.

```javascript
var buah = ["Apel", "Jeruk", "Mangga"];
```

Sekarang `buah` berisi tiga nilai. Bayangkan array seperti deretan laci yang memiliki nomor. Setiap laci menyimpan satu nilai, dan kita bisa mengambil nilainya dengan menyebut nomor laci tersebut.

### Indeks Array

Nomor posisi dalam array disebut **indeks**. Indeks array JavaScript dimulai dari `0`, bukan `1`.

```javascript
var buah = ["Apel", "Jeruk", "Mangga"];

console.log(buah[0]); // Apel
console.log(buah[1]); // Jeruk
console.log(buah[2]); // Mangga
```

Jadi, `buah[0]` berarti nilai pertama, sedangkan `buah[2]` berarti nilai ketiga. Angka di dalam tanda kurung siku bukan nomor urut yang biasa kita gunakan sehari-hari, melainkan indeks yang dipakai JavaScript.

Jika kita mengakses indeks yang berada di luar isi array, hasilnya adalah `undefined`.

```javascript
console.log(buah[5]); // undefined
```

Artinya, tidak ada nilai pada posisi tersebut.

### Pertanyaan

1. Perhatikan array berikut:
   ```javascript
   var hewan = ["Kucing", "Kelinci", "Hamster"];
   ```
   Tuliskan angka indeks yang digunakan untuk mengambil nilai `"Kucing"`.
   <!-- Jawaban: `0` -->
2. Perhatikan kode berikut:
   ```javascript
   var warna = ["Merah", "Hijau"];
   console.log(warna[3]);
   ```
   Tuliskan nilai output yang dicetak ke konsol ketika mengakses indeks di luar isi array tersebut.
   <!-- Jawaban: `undefined` -->
3. Perhatikan array berikut:
   ```javascript
   var kota = ["Jakarta", "Bandung", "Surabaya", "Medan"];
   ```
   Tuliskan nilai dari `kota[1]` dan `kota[3]` secara berurutan dipisahkan hanya oleh satu spasi tanpa tanda kutip.
   <!-- Jawaban: `Bandung Medan` -->

---

## Menambahkan Nilai ke dalam Array

Salah satu cara umum menambahkan nilai ke akhir array adalah metode `.push()`:

```javascript
var buah = ["Apel", "Jeruk"];

buah.push("Mangga");

console.log(buah);
```

Setelah `push()` dijalankan, array berisi `"Apel"`, `"Jeruk"`, dan `"Mangga"`. Kita tidak perlu membuat variabel baru untuk setiap buah yang ditambahkan.

Di kode Jajan Tracker, konsep ini digunakan untuk menyimpan nama dan harga jajan:

```javascript
listNama.push(n);
listHarga.push(Number(h));
```

`n` berisi nama dan `h` berisi harga, keduanya diambil dari kolom input. Nama dimasukkan ke `listNama`, sedangkan harga diubah menjadi angka dengan `Number()` lebih dulu sebelum masuk ke `listHarga`.

### Pertanyaan

1. Perhatikan kode berikut:
   ```javascript
   var hewan = ["Kucing"];
   hewan.push("Kambing");
   ```
   Tuliskan angka indeks tempat elemen `"Kambing"` berada setelah perintah tersebut dijalankan.
   <!-- Jawaban: `1` -->
2. Perhatikan kode berikut:
   ```javascript
   var antrean = ["Budi"];
   antrean.push("Siti");
   antrean.push("Doni");
   ```
   Tuliskan nilai dari `antrean[1]` dan `antrean[2]` secara berurutan dipisahkan hanya oleh satu spasi tanpa tanda kutip.
   <!-- Jawaban: `Siti Doni` -->
3. Perhatikan kode berikut:
   ```javascript
   var listHarga = [];
   var h = "2500";
   listHarga.push(Number(h));
   var total = listHarga[0] + 500;
   ```
   Berapakah nilai angka yang tersimpan di dalam variabel `total`?
   <!-- Jawaban: `3000` -->

---

## Mengetahui Jumlah Isi Array

Properti `.length` memberi tahu berapa banyak nilai yang ada dalam array:

```javascript
var buah = ["Apel", "Jeruk", "Mangga"];

console.log(buah.length); // 3
```

`length` sering digunakan saat program perlu memeriksa semua isi array. Contohnya, perulangan dapat berjalan dari indeks `0` sampai indeks terakhir:

```javascript
for (var i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}
```

Pada setiap putaran, nilai `i` digunakan sebagai indeks. Perulangan ini akan mengambil satu nilai, lalu berpindah ke nilai berikutnya sampai semua buah diperiksa. Kita akan membahas cara kerja perulangan lebih lanjut pada chapter tersendiri.

### Pertanyaan

1. Perhatikan kode berikut:
   ```javascript
   var angka = [10, 20, 30, 40, 50];
   console.log(angka.length);
   ```
   Berapakah angka yang dicetak ke konsol?
   <!-- Jawaban: `5` -->
2. Perhatikan kode berikut:
   ```javascript
   var daftar = ["A", "B", "C", "D"];
   var indeksTerakhir = daftar.length - 1;
   ```
   Berapakah nilai angka dari variabel `indeksTerakhir`?
   <!-- Jawaban: `3` -->
3. Perhatikan perulangan berikut:
   ```javascript
   var nilai = [10, 20, 30];
   for (var i = 0; i < nilai.length; i++) {
     console.log(nilai[i] + 5);
   }
   ```
   Tuliskan output angka yang dicetak ke konsol pada setiap putaran perulangan secara berurutan dipisahkan hanya oleh satu spasi.
   <!-- Jawaban: `15 25 35` -->

---

## Dua Array yang Datanya Berpasangan

Jajan Tracker menggunakan dua array: satu untuk nama dan satu untuk harga.

```javascript
var listNama = ["Roti", "Susu"];
var listHarga = [5000, 8000];
```

Data pada indeks yang sama saling berpasangan: `listNama[0]` adalah `"Roti"` dan `listHarga[0]` adalah `5000`. Pasangan berikutnya adalah `"Susu"` dan `8000`.

Hubungan ini tetap benar selama kedua array selalu bertambah dengan urutan yang sama. Jika nama ditambahkan tetapi harga tidak, isi keduanya tidak lagi cocok. Itu salah satu kelemahan menggunakan array terpisah untuk menyimpan data yang saling berhubungan. Dalam JavaScript, objek sering menjadi pilihan yang lebih jelas untuk menyimpan satu jajan beserta harganya, tetapi kode yang sedang kita pelajari sengaja menggunakan dua array biasa.

Untuk saat ini, perhatikan bahwa indeks menjadi penghubung antara kedua daftar: nama pada indeks tertentu berkaitan dengan harga pada indeks yang sama.

Array berguna ketika program perlu menyimpan dan mengolah banyak nilai sejenis. Dengan memahami indeks, `.push()`, dan `.length`, kamu bisa mulai mengikuti bagaimana data jajan dikumpulkan, lalu diperiksa satu per satu di bagian lain program.

### Pertanyaan

1. Perhatikan dua array berpasangan berikut:
   ```javascript
   var listNama = ["Donat", "Bakso", "Es Teh"];
   var listHarga = [3000, 12000, 2500];
   ```
   Tuliskan nama jajan dan harga dari item pada indeks `1` secara berurutan dipisahkan hanya oleh satu spasi tanpa tanda kutip.
   <!-- Jawaban: `Bakso 12000` -->
2. Perhatikan potongan kode berikut:
   ```javascript
   var listNama = ["Buku", "Pensil"];
   var listHarga = [5000, 2000];

   listNama.push("Penghapus");
   ```
   Jika kita mengakses nilai `listNama[2]` dan `listHarga[2]`, tuliskan nilai yang dihasilkan secara berurutan dipisahkan hanya oleh satu spasi tanpa tanda kutip.
   <!-- Jawaban: `Penghapus undefined` -->
3. Perhatikan dua array berikut:
   ```javascript
   var listNama = ["Apel", "Jeruk", "Pisang"];
   var listHarga = [10000, 8000, 5000];
   var uang = 8000;
   ```
   Tuliskan angka indeks dari buah yang harganya sama persis dengan nilai variabel `uang`.
   <!-- Jawaban: `1` -->